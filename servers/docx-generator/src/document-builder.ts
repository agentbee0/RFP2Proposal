import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
  Header,
  Footer,
  PageNumber,
  NumberFormat,
  TableOfContents,
  ShadingType,
} from "docx";
import { writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { mkdirSync, existsSync } from "node:fs";
import type {
  GenerateDocxInput,
  ContentBlock,
  ProposalSection,
  ComplianceItem,
} from "./types.js";
import {
  COLORS,
  FONT,
  SPACING,
  MARGINS,
  PAGE_SIZES,
  getHeadingLevel,
  getPlaceholderStyle,
} from "./styles.js";

/**
 * Parse text with **bold** and *italic* markers into TextRun array.
 */
function parseFormattedText(
  text: string,
  baseOptions?: Partial<{ color: string; bold: boolean; size: number }>
): TextRun[] {
  const runs: TextRun[] = [];
  // Match **bold** and *italic* patterns
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|([^*]+))/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match[2]) {
      // Bold text
      runs.push(
        new TextRun({
          text: match[2],
          font: FONT.name,
          size: baseOptions?.size ?? FONT.sizes.body,
          color: baseOptions?.color ?? COLORS.text,
          bold: true,
        })
      );
    } else if (match[3]) {
      // Italic text
      runs.push(
        new TextRun({
          text: match[3],
          font: FONT.name,
          size: baseOptions?.size ?? FONT.sizes.body,
          color: baseOptions?.color ?? COLORS.text,
          italics: true,
          bold: baseOptions?.bold,
        })
      );
    } else if (match[4]) {
      // Regular text
      runs.push(
        new TextRun({
          text: match[4],
          font: FONT.name,
          size: baseOptions?.size ?? FONT.sizes.body,
          color: baseOptions?.color ?? COLORS.text,
          bold: baseOptions?.bold,
        })
      );
    }
  }

  if (runs.length === 0) {
    runs.push(
      new TextRun({
        text,
        font: FONT.name,
        size: baseOptions?.size ?? FONT.sizes.body,
        color: baseOptions?.color ?? COLORS.text,
        bold: baseOptions?.bold,
      })
    );
  }

  return runs;
}

function buildHeading(block: ContentBlock): Paragraph {
  const level = block.level ?? 1;
  return new Paragraph({
    heading: getHeadingLevel(level),
    spacing: {
      after:
        level === 1
          ? SPACING.afterHeading1
          : level === 2
            ? SPACING.afterHeading2
            : SPACING.afterHeading3,
    },
    children: [
      new TextRun({
        text: block.text ?? "",
        font: FONT.name,
        size:
          level === 1
            ? FONT.sizes.heading1
            : level === 2
              ? FONT.sizes.heading2
              : level === 3
                ? FONT.sizes.heading3
                : FONT.sizes.heading4,
        color: level <= 2 ? COLORS.primary : COLORS.secondary,
        bold: true,
      }),
    ],
  });
}

function buildParagraph(block: ContentBlock): Paragraph {
  return new Paragraph({
    spacing: { after: SPACING.afterParagraph, line: SPACING.lineSpacing },
    children: parseFormattedText(block.text ?? ""),
  });
}

function buildBulletList(block: ContentBlock): Paragraph[] {
  return (block.items ?? []).map(
    (item) =>
      new Paragraph({
        bullet: { level: (block.level ?? 1) - 1 },
        spacing: { after: SPACING.afterListItem, line: SPACING.lineSpacing },
        children: parseFormattedText(item),
      })
  );
}

function buildNumberedList(block: ContentBlock): Paragraph[] {
  return (block.items ?? []).map(
    (item, index) =>
      new Paragraph({
        spacing: { after: SPACING.afterListItem, line: SPACING.lineSpacing },
        children: [
          new TextRun({
            text: `${index + 1}. `,
            font: FONT.name,
            size: FONT.sizes.body,
            color: COLORS.text,
            bold: true,
          }),
          ...parseFormattedText(item),
        ],
      })
  );
}

function buildTable(block: ContentBlock): Table {
  const rows = block.rows ?? [];
  if (rows.length === 0) {
    return new Table({ rows: [new TableRow({ children: [new TableCell({ children: [new Paragraph("")] })] })] });
  }

  // Calculate even column widths based on number of columns
  // Available width = page width (12240) - left margin (1440) - right margin (1440) = 9360 twips
  const availableWidth = 9360;
  const colCount = rows[0]?.length ?? 1;
  const colWidth = Math.floor(availableWidth / colCount);
  const columnWidths = Array(colCount).fill(colWidth);

  return new Table({
    width: { size: availableWidth, type: WidthType.DXA },
    columnWidths,
    rows: rows.map((row, rowIndex) =>
      new TableRow({
        children: row.map(
          (cell) =>
            new TableCell({
              width: { size: colWidth, type: WidthType.DXA },
              shading:
                rowIndex === 0
                  ? { type: ShadingType.CLEAR, fill: COLORS.primary }
                  : rowIndex % 2 === 0
                    ? { type: ShadingType.CLEAR, fill: COLORS.lightGray }
                    : undefined,
              children: [
                new Paragraph({
                  alignment:
                    rowIndex === 0
                      ? AlignmentType.CENTER
                      : AlignmentType.LEFT,
                  children: [
                    new TextRun({
                      text: cell,
                      font: FONT.name,
                      size:
                        rowIndex === 0
                          ? FONT.sizes.tableHeader
                          : FONT.sizes.tableBody,
                      color:
                        rowIndex === 0 ? COLORS.white : COLORS.text,
                      bold: rowIndex === 0,
                    }),
                  ],
                }),
              ],
            })
        ),
      })
    ),
  });
}

function buildPlaceholder(block: ContentBlock): Paragraph {
  const tier = block.placeholderTier ?? "SUGGESTED";
  const style = getPlaceholderStyle(tier);
  const prefix = tier === "REQUIRED" ? "REQUIRED" : tier === "SUGGESTED" ? "SUGGESTED" : "OPTIONAL";

  return new Paragraph({
    spacing: { after: SPACING.afterParagraph, line: SPACING.lineSpacing },
    shading: style.shading,
    children: [
      new TextRun({
        text: `[${prefix}: ${block.text ?? "Information needed"}]`,
        font: FONT.name,
        size: FONT.sizes.body,
        ...style.run,
      }),
    ],
  });
}

function buildContentBlock(block: ContentBlock): (Paragraph | Table)[] {
  switch (block.type) {
    case "heading":
      return [buildHeading(block)];
    case "paragraph":
      return [buildParagraph(block)];
    case "bullet_list":
      return buildBulletList(block);
    case "numbered_list":
      return buildNumberedList(block);
    case "table":
      return [buildTable(block)];
    case "placeholder":
      return [buildPlaceholder(block)];
    default:
      return [buildParagraph(block)];
  }
}

function buildSectionContent(section: ProposalSection): (Paragraph | Table)[] {
  const elements: (Paragraph | Table)[] = [];

  // Section heading
  elements.push(
    new Paragraph({
      heading: getHeadingLevel(1),
      spacing: { before: 400, after: SPACING.afterHeading1 },
      children: [
        new TextRun({
          text: `${section.sectionNumber}. ${section.title}`,
          font: FONT.name,
          size: FONT.sizes.heading1,
          color: COLORS.primary,
          bold: true,
        }),
      ],
    })
  );

  // Section content
  for (const block of section.content) {
    elements.push(...buildContentBlock(block));
  }

  return elements;
}

function buildComplianceTable(items: ComplianceItem[]): (Paragraph | Table)[] {
  const elements: (Paragraph | Table)[] = [];

  elements.push(
    new Paragraph({
      heading: getHeadingLevel(1),
      spacing: { before: 400, after: SPACING.afterHeading1 },
      children: [
        new TextRun({
          text: "Compliance Checklist",
          font: FONT.name,
          size: FONT.sizes.heading1,
          color: COLORS.primary,
          bold: true,
        }),
      ],
    })
  );

  const headerRow = ["#", "RFP Ref", "Requirement", "Proposal Section", "Status", "Notes"];
  const dataRows = items.map((item, index) => [
    String(index + 1),
    item.rfpRef,
    item.requirement,
    item.proposalSection,
    item.status,
    item.notes ?? "",
  ]);

  // Compliance table column widths: #, RFP Ref, Requirement, Proposal Section, Status, Notes
  // Available width = 9360 twips. Proportions: 5%, 10%, 30%, 20%, 10%, 25%
  const availableWidth = 9360;
  const complianceColWidths = [
    Math.floor(availableWidth * 0.05),  // #
    Math.floor(availableWidth * 0.10),  // RFP Ref
    Math.floor(availableWidth * 0.30),  // Requirement
    Math.floor(availableWidth * 0.20),  // Proposal Section
    Math.floor(availableWidth * 0.10),  // Status
    Math.floor(availableWidth * 0.25),  // Notes
  ];

  elements.push(
    new Table({
      width: { size: availableWidth, type: WidthType.DXA },
      columnWidths: complianceColWidths,
      rows: [headerRow, ...dataRows].map((row, rowIndex) =>
        new TableRow({
          children: row.map(
            (cell, colIndex) =>
              new TableCell({
                width: { size: complianceColWidths[colIndex] ?? 1560, type: WidthType.DXA },
                shading:
                  rowIndex === 0
                    ? { type: ShadingType.CLEAR, fill: COLORS.primary }
                    : undefined,
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: cell,
                        font: FONT.name,
                        size: FONT.sizes.tableBody,
                        color: rowIndex === 0 ? COLORS.white : COLORS.text,
                        bold: rowIndex === 0,
                      }),
                    ],
                  }),
                ],
              })
          ),
        })
      ),
    })
  );

  return elements;
}

function countPlaceholders(sections: ProposalSection[]) {
  let required = 0;
  let suggested = 0;
  let optional = 0;

  for (const section of sections) {
    for (const block of section.content) {
      if (block.type === "placeholder") {
        switch (block.placeholderTier) {
          case "REQUIRED":
            required++;
            break;
          case "SUGGESTED":
            suggested++;
            break;
          case "OPTIONAL":
            optional++;
            break;
        }
      }
    }
  }

  return { required, suggested, optional };
}

export async function generateDocx(
  input: GenerateDocxInput
): Promise<{ filePath: string; fileSize: string; placeholderSummary: { required: number; suggested: number; optional: number } }> {
  const { metadata, formatting, sections, complianceChecklist, outputPath } = input;
  const pageSize = PAGE_SIZES[formatting?.pageSize ?? "LETTER"];

  // Build all section content
  const allContent: (Paragraph | Table)[] = [];

  // Title page
  allContent.push(
    new Paragraph({ spacing: { before: 3000 } }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: metadata.title,
          font: FONT.name,
          size: FONT.sizes.title,
          color: COLORS.primary,
          bold: true,
        }),
      ],
    })
  );

  if (metadata.subtitle) {
    allContent.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 200 },
        children: [
          new TextRun({
            text: metadata.subtitle,
            font: FONT.name,
            size: FONT.sizes.subtitle,
            color: COLORS.secondary,
          }),
        ],
      })
    );
  }

  allContent.push(
    new Paragraph({ spacing: { before: 600 } }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: `Prepared for: ${metadata.clientName}`,
          font: FONT.name,
          size: FONT.sizes.heading3,
          color: COLORS.text,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200 },
      children: [
        new TextRun({
          text: `Prepared by: ${metadata.companyName}`,
          font: FONT.name,
          size: FONT.sizes.heading3,
          color: COLORS.text,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200 },
      children: [
        new TextRun({
          text: metadata.date,
          font: FONT.name,
          size: FONT.sizes.heading3,
          color: COLORS.text,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 100 },
      children: [
        new TextRun({
          text: `Version ${metadata.version ?? "1.0"}`,
          font: FONT.name,
          size: FONT.sizes.body,
          color: COLORS.secondary,
        }),
      ],
    })
  );

  // Table of Contents
  if (formatting?.includeToc !== false) {
    allContent.push(
      new Paragraph({ spacing: { before: 600 } }),
      new Paragraph({
        heading: getHeadingLevel(1),
        children: [
          new TextRun({
            text: "Table of Contents",
            font: FONT.name,
            size: FONT.sizes.heading1,
            color: COLORS.primary,
            bold: true,
          }),
        ],
      }),
      new TableOfContents("Table of Contents", {
        hyperlink: true,
        headingStyleRange: "1-3",
      })
    );
  }

  // Proposal sections
  for (const section of sections) {
    allContent.push(...buildSectionContent(section));
  }

  // Compliance checklist
  if (complianceChecklist?.items?.length) {
    allContent.push(...buildComplianceTable(complianceChecklist.items));
  }

  // Build document
  const doc = new Document({
    creator: metadata.companyName,
    title: metadata.title,
    description: `Proposal: ${metadata.title}`,
    styles: {
      default: {
        document: {
          run: {
            font: FONT.name,
            size: FONT.sizes.body,
            color: COLORS.text,
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: pageSize.width, height: pageSize.height },
            margin: MARGINS,
            pageNumbers: formatting?.includePageNumbers !== false
              ? { start: 1 }
              : undefined,
          },
        },
        headers: formatting?.headerText
          ? {
              default: new Header({
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({
                        text: formatting.headerText,
                        font: FONT.name,
                        size: FONT.sizes.small,
                        color: COLORS.secondary,
                        italics: true,
                      }),
                    ],
                  }),
                ],
              }),
            }
          : undefined,
        footers:
          formatting?.footerText || formatting?.includePageNumbers !== false
            ? {
                default: new Footer({
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        ...(formatting?.footerText
                          ? [
                              new TextRun({
                                text: `${formatting.footerText}  |  `,
                                font: FONT.name,
                                size: FONT.sizes.small,
                                color: COLORS.secondary,
                              }),
                            ]
                          : []),
                        ...(formatting?.includePageNumbers !== false
                          ? [
                              new TextRun({
                                text: "Page ",
                                font: FONT.name,
                                size: FONT.sizes.small,
                                color: COLORS.secondary,
                              }),
                              new TextRun({
                                children: [PageNumber.CURRENT],
                                font: FONT.name,
                                size: FONT.sizes.small,
                                color: COLORS.secondary,
                              }),
                            ]
                          : []),
                      ],
                    }),
                  ],
                }),
              }
            : undefined,
        children: allContent,
      },
    ],
  });

  // Generate buffer and write to file
  const buffer = await Packer.toBuffer(doc);

  // Ensure output directory exists
  const dir = dirname(outputPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  writeFileSync(outputPath, buffer);

  const fileSizeBytes = buffer.byteLength;
  const fileSize =
    fileSizeBytes > 1024 * 1024
      ? `${(fileSizeBytes / (1024 * 1024)).toFixed(1)} MB`
      : `${(fileSizeBytes / 1024).toFixed(1)} KB`;

  return {
    filePath: outputPath,
    fileSize,
    placeholderSummary: countPlaceholders(sections),
  };
}
