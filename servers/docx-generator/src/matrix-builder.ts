import ExcelJS from "exceljs";
import { writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { mkdirSync, existsSync } from "node:fs";
import type { GenerateMatrixInput, TraceabilityRow } from "./types.js";

const COLORS = {
  primaryFill: "FF1B3A5C",
  headerFont: "FFFFFFFF",
  fullyAddressed: "FFC6EFCE",
  partiallyAddressed: "FFFFEB9C",
  notAddressed: "FFFFC7CE",
  notApplicable: "FFD9D9D9",
  notAddressedText: "FFCC0000",
} as const;

interface CoverageSummary {
  total: number;
  fullyAddressed: number;
  partiallyAddressed: number;
  notAddressed: number;
  notApplicable: number;
  coveragePercentage: number;
}

function getStatusFill(status: TraceabilityRow["coverageStatus"]): string {
  switch (status) {
    case "FULLY_ADDRESSED": return COLORS.fullyAddressed;
    case "PARTIALLY_ADDRESSED": return COLORS.partiallyAddressed;
    case "NOT_ADDRESSED": return COLORS.notAddressed;
    case "NOT_APPLICABLE": return COLORS.notApplicable;
  }
}

function computeCoverageSummary(rows: TraceabilityRow[]): CoverageSummary {
  const total = rows.length;
  const fullyAddressed = rows.filter(r => r.coverageStatus === "FULLY_ADDRESSED").length;
  const partiallyAddressed = rows.filter(r => r.coverageStatus === "PARTIALLY_ADDRESSED").length;
  const notAddressed = rows.filter(r => r.coverageStatus === "NOT_ADDRESSED").length;
  const notApplicable = rows.filter(r => r.coverageStatus === "NOT_APPLICABLE").length;
  const applicable = total - notApplicable;
  const coveragePercentage = applicable > 0
    ? ((fullyAddressed + partiallyAddressed) / applicable) * 100
    : 100;

  return { total, fullyAddressed, partiallyAddressed, notAddressed, notApplicable, coveragePercentage };
}

const HEADER_FILL: ExcelJS.FillPattern = {
  type: "pattern",
  pattern: "solid",
  fgColor: { argb: COLORS.primaryFill },
};

const THIN_BORDER: Partial<ExcelJS.Borders> = {
  top: { style: "thin", color: { argb: "FFD0D0D0" } },
  bottom: { style: "thin", color: { argb: "FFD0D0D0" } },
  left: { style: "thin", color: { argb: "FFD0D0D0" } },
  right: { style: "thin", color: { argb: "FFD0D0D0" } },
};

export async function generateMatrix(
  input: GenerateMatrixInput
): Promise<{ filePath: string; fileSize: string; coverageSummary: CoverageSummary }> {
  const { metadata, rows, outputPath } = input;

  const workbook = new ExcelJS.Workbook();
  workbook.creator = metadata.companyName;
  workbook.created = new Date();

  // --- Sheet 1: Traceability Matrix ---
  const matrixSheet = workbook.addWorksheet("Traceability Matrix", {
    views: [{ state: "frozen", ySplit: 1 }],
  });

  matrixSheet.columns = [
    { header: "#",                      key: "rowNum",               width: 6 },
    { header: "RFP Section #",          key: "rfpSectionNumber",     width: 15 },
    { header: "RFP Section Title",      key: "rfpTitle",             width: 30 },
    { header: "RFP Page",               key: "rfpPage",              width: 10 },
    { header: "Description",            key: "description",          width: 45 },
    { header: "Proposal Section #",     key: "proposalSectionNumber", width: 18 },
    { header: "Proposal Section Title", key: "proposalTitle",        width: 30 },
    { header: "Proposal Page",          key: "proposalPage",         width: 13 },
    { header: "Coverage Status",        key: "coverageStatus",       width: 22 },
    { header: "Notes",                  key: "notes",                width: 35 },
  ];

  // Style header row
  const headerRow = matrixSheet.getRow(1);
  headerRow.height = 30;
  headerRow.eachCell((cell) => {
    cell.fill = HEADER_FILL;
    cell.font = { color: { argb: COLORS.headerFont }, bold: true, name: "Calibri", size: 10 };
    cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
    cell.border = THIN_BORDER;
  });

  // Add data rows
  rows.forEach((row, index) => {
    const dataRow = matrixSheet.addRow({
      rowNum: index + 1,
      rfpSectionNumber: row.rfpSection.sectionNumber,
      rfpTitle: row.rfpSection.title,
      rfpPage: row.rfpSection.pageNumber ?? "—",
      description: row.description,
      proposalSectionNumber: row.proposalSection?.sectionNumber ?? "—",
      proposalTitle: row.proposalSection?.title ?? "—",
      proposalPage: row.proposalSection?.pageNumber ?? "—",
      coverageStatus: row.coverageStatus.replace(/_/g, " "),
      notes: row.notes ?? "",
    });

    dataRow.eachCell((cell) => {
      cell.font = { name: "Calibri", size: 10 };
      cell.alignment = { vertical: "middle", wrapText: true };
      cell.border = THIN_BORDER;
    });

    // Color-code coverage status cell
    const statusCell = dataRow.getCell("coverageStatus");
    statusCell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: getStatusFill(row.coverageStatus) },
    };
    statusCell.font = { name: "Calibri", size: 10, bold: true };
    statusCell.alignment = { horizontal: "center", vertical: "middle" };

    // Highlight entire row for NOT_ADDRESSED items
    if (row.coverageStatus === "NOT_ADDRESSED") {
      dataRow.eachCell((cell) => {
        cell.font = { ...cell.font, color: { argb: COLORS.notAddressedText } };
      });
    }
  });

  // Auto-filters
  matrixSheet.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: rows.length + 1, column: 10 },
  };

  // --- Sheet 2: Coverage Summary ---
  const summarySheet = workbook.addWorksheet("Coverage Summary");
  const summary = computeCoverageSummary(rows);

  // Title
  summarySheet.mergeCells("A1:D1");
  const titleCell = summarySheet.getCell("A1");
  titleCell.value = "Traceability Matrix — Coverage Summary";
  titleCell.font = { bold: true, size: 14, color: { argb: COLORS.primaryFill } };
  titleCell.alignment = { vertical: "middle" };
  summarySheet.getRow(1).height = 30;

  // Metadata
  const metaEntries: [string, string][] = [
    ["RFP Title:", metadata.rfpTitle],
    ["RFP Reference:", metadata.rfpReference ?? "—"],
    ["Proposal Title:", metadata.proposalTitle],
    ["Company:", metadata.companyName],
    ["Client:", metadata.clientName],
    ["Date:", metadata.date],
    ["Version:", metadata.version ?? "1.0"],
  ];

  const metaStartRow = 3;
  metaEntries.forEach(([label, value], i) => {
    const r = summarySheet.getRow(metaStartRow + i);
    r.getCell(1).value = label;
    r.getCell(1).font = { bold: true, name: "Calibri", size: 10 };
    r.getCell(2).value = value;
    r.getCell(2).font = { name: "Calibri", size: 10 };
  });

  // Coverage statistics table
  const statsStartRow = metaStartRow + metaEntries.length + 2;
  const statsHeaderRow = summarySheet.getRow(statsStartRow);
  ["Status", "Count", "Percentage"].forEach((h, i) => {
    const cell = statsHeaderRow.getCell(i + 1);
    cell.value = h;
    cell.fill = HEADER_FILL;
    cell.font = { color: { argb: COLORS.headerFont }, bold: true, name: "Calibri", size: 10 };
    cell.alignment = { horizontal: "center", vertical: "middle" };
    cell.border = THIN_BORDER;
  });

  const statusEntries: { label: string; count: number; fill: string | null }[] = [
    { label: "Fully Addressed", count: summary.fullyAddressed, fill: COLORS.fullyAddressed },
    { label: "Partially Addressed", count: summary.partiallyAddressed, fill: COLORS.partiallyAddressed },
    { label: "Not Addressed", count: summary.notAddressed, fill: COLORS.notAddressed },
    { label: "Not Applicable", count: summary.notApplicable, fill: COLORS.notApplicable },
    { label: "TOTAL", count: summary.total, fill: null },
  ];

  statusEntries.forEach((entry, i) => {
    const r = summarySheet.getRow(statsStartRow + 1 + i);
    const labelCell = r.getCell(1);
    labelCell.value = entry.label;
    labelCell.font = { name: "Calibri", size: 10 };
    labelCell.border = THIN_BORDER;

    if (entry.fill) {
      labelCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: entry.fill } };
    }

    const countCell = r.getCell(2);
    countCell.value = entry.count;
    countCell.font = { name: "Calibri", size: 10 };
    countCell.alignment = { horizontal: "center" };
    countCell.border = THIN_BORDER;

    const pctCell = r.getCell(3);
    pctCell.value = summary.total > 0
      ? `${((entry.count / summary.total) * 100).toFixed(1)}%`
      : "0%";
    pctCell.font = { name: "Calibri", size: 10 };
    pctCell.alignment = { horizontal: "center" };
    pctCell.border = THIN_BORDER;

    if (entry.label === "TOTAL") {
      r.eachCell((cell) => { cell.font = { ...cell.font, bold: true }; });
    }
  });

  // Overall coverage line
  const coverageRow = summarySheet.getRow(statsStartRow + statusEntries.length + 2);
  coverageRow.getCell(1).value = "Overall Coverage:";
  coverageRow.getCell(1).font = { bold: true, name: "Calibri", size: 12, color: { argb: COLORS.primaryFill } };
  coverageRow.getCell(2).value = `${summary.coveragePercentage.toFixed(1)}%`;
  coverageRow.getCell(2).font = { bold: true, name: "Calibri", size: 12, color: { argb: COLORS.primaryFill } };

  // Column widths for summary sheet
  summarySheet.getColumn(1).width = 25;
  summarySheet.getColumn(2).width = 40;
  summarySheet.getColumn(3).width = 15;

  // --- Write file ---
  const dir = dirname(outputPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  const buffer = await workbook.xlsx.writeBuffer();
  writeFileSync(outputPath, Buffer.from(buffer));

  const fileSizeBytes = buffer.byteLength;
  const fileSize = fileSizeBytes > 1024 * 1024
    ? `${(fileSizeBytes / (1024 * 1024)).toFixed(1)} MB`
    : `${(fileSizeBytes / 1024).toFixed(1)} KB`;

  return { filePath: outputPath, fileSize, coverageSummary: summary };
}
