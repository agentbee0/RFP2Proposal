import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { GenerateDocxInputSchema, GenerateMatrixInputSchema } from "./types.js";
import { generateDocx } from "./document-builder.js";
import { generateMatrix } from "./matrix-builder.js";

const server = new McpServer({
  name: "rfp2proposal-docx-generator",
  version: "1.0.0",
});

// Tool: generate_docx
server.tool(
  "generate_docx",
  "Generates a formatted .docx proposal document from structured section data. " +
    "Supports headings, paragraphs, lists, tables, and color-coded smart placeholders. " +
    "Produces a professional document with title page, table of contents, headers, footers, and page numbers.",
  GenerateDocxInputSchema.shape,
  async (args) => {
    try {
      const input = GenerateDocxInputSchema.parse(args);
      const result = await generateDocx(input);

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(
              {
                success: true,
                filePath: result.filePath,
                fileSize: result.fileSize,
                placeholderSummary: result.placeholderSummary,
                message: `Proposal exported to ${result.filePath} (${result.fileSize}). ` +
                  `Placeholders: ${result.placeholderSummary.required} required, ` +
                  `${result.placeholderSummary.suggested} suggested, ` +
                  `${result.placeholderSummary.optional} optional.`,
              },
              null,
              2
            ),
          },
        ],
      };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(
              { success: false, error: message },
              null,
              2
            ),
          },
        ],
        isError: true,
      };
    }
  }
);

// Tool: validate_proposal_structure
server.tool(
  "validate_proposal_structure",
  "Validates a proposal JSON structure without generating a file. " +
    "Returns validation results including missing fields, empty sections, and placeholder counts.",
  GenerateDocxInputSchema.omit({ outputPath: true }).shape,
  async (args) => {
    try {
      const parsed = GenerateDocxInputSchema.omit({ outputPath: true }).parse(args);
      const issues: string[] = [];

      // Check metadata
      if (!parsed.metadata.title) issues.push("Missing proposal title");
      if (!parsed.metadata.companyName) issues.push("Missing company name");
      if (!parsed.metadata.clientName) issues.push("Missing client name");

      // Check sections
      if (parsed.sections.length === 0) {
        issues.push("No proposal sections provided");
      }

      const emptySections = parsed.sections.filter(
        (s) => s.content.length === 0
      );
      if (emptySections.length > 0) {
        issues.push(
          `Empty sections: ${emptySections.map((s) => s.title).join(", ")}`
        );
      }

      // Count placeholders
      let required = 0;
      let suggested = 0;
      let optional = 0;
      for (const section of parsed.sections) {
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

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(
              {
                valid: issues.length === 0,
                issues,
                sectionCount: parsed.sections.length,
                placeholderSummary: { required, suggested, optional },
              },
              null,
              2
            ),
          },
        ],
      };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Validation failed";
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(
              { valid: false, error: message },
              null,
              2
            ),
          },
        ],
        isError: true,
      };
    }
  }
);

// Tool: generate_traceability_matrix
server.tool(
  "generate_traceability_matrix",
  "Generates a formatted .xlsx traceability matrix that maps RFP sections to proposal sections. " +
    "Includes coverage status color-coding, auto-filters, frozen headers, and a summary sheet " +
    "with coverage statistics. Helps reviewers trace proposal content back to RFP requirements.",
  GenerateMatrixInputSchema.shape,
  async (args) => {
    try {
      const input = GenerateMatrixInputSchema.parse(args);
      const result = await generateMatrix(input);

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(
              {
                success: true,
                filePath: result.filePath,
                fileSize: result.fileSize,
                coverageSummary: result.coverageSummary,
                message: `Traceability matrix exported to ${result.filePath} (${result.fileSize}). ` +
                  `Coverage: ${result.coverageSummary.fullyAddressed} fully addressed, ` +
                  `${result.coverageSummary.partiallyAddressed} partially addressed, ` +
                  `${result.coverageSummary.notAddressed} not addressed, ` +
                  `${result.coverageSummary.notApplicable} not applicable. ` +
                  `Overall coverage: ${result.coverageSummary.coveragePercentage.toFixed(1)}%.`,
              },
              null,
              2
            ),
          },
        ],
      };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(
              { success: false, error: message },
              null,
              2
            ),
          },
        ],
        isError: true,
      };
    }
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
