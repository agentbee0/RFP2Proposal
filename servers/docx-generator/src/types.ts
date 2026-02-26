import { z } from "zod";

export const ContentBlockSchema = z.object({
  type: z.enum([
    "heading",
    "paragraph",
    "bullet_list",
    "numbered_list",
    "table",
    "placeholder",
  ]),
  level: z
    .number()
    .min(1)
    .max(4)
    .optional()
    .describe("Heading level 1-4, or list nesting level"),
  text: z
    .string()
    .optional()
    .describe("Text content. Supports **bold** and *italic* markers"),
  items: z
    .array(z.string())
    .optional()
    .describe("List items for bullet_list or numbered_list"),
  rows: z
    .array(z.array(z.string()))
    .optional()
    .describe("Table rows. First row is treated as the header"),
  placeholderTier: z
    .enum(["REQUIRED", "SUGGESTED", "OPTIONAL"])
    .optional()
    .describe("Placeholder priority tier (for type=placeholder only)"),
});

export const ProposalSectionSchema = z.object({
  title: z.string().describe("Section heading text"),
  sectionNumber: z.string().describe("Section number, e.g. '1', '2.1', '10'"),
  content: z.array(ContentBlockSchema).describe("Ordered content blocks"),
});

export const ComplianceItemSchema = z.object({
  rfpRef: z.string().describe("RFP section reference"),
  requirement: z.string().describe("Requirement description"),
  proposalSection: z.string().describe("Proposal section where addressed"),
  status: z.enum([
    "COMPLIANT",
    "PARTIAL",
    "NON-COMPLIANT",
    "NOT-APPLICABLE",
  ]),
  notes: z.string().optional(),
});

export const GenerateDocxInputSchema = z.object({
  outputPath: z.string().describe("Absolute file path for the output .docx"),
  metadata: z.object({
    title: z.string().describe("Proposal title"),
    subtitle: z
      .string()
      .optional()
      .describe("Subtitle or RFP reference number"),
    companyName: z.string().describe("Responding company name"),
    companyAddress: z.string().optional(),
    clientName: z.string().describe("Issuing organization name"),
    date: z.string().describe("Proposal date"),
    version: z.string().optional().default("1.0"),
  }),
  formatting: z
    .object({
      pageSize: z.enum(["LETTER", "A4"]).default("LETTER"),
      headerText: z.string().optional(),
      footerText: z.string().optional(),
      includePageNumbers: z.boolean().default(true),
      includeToc: z.boolean().default(true),
    })
    .optional(),
  sections: z.array(ProposalSectionSchema).describe("Proposal sections"),
  complianceChecklist: z
    .object({
      items: z.array(ComplianceItemSchema),
    })
    .optional()
    .describe("Compliance checklist to append"),
});

export type ContentBlock = z.infer<typeof ContentBlockSchema>;
export type ProposalSection = z.infer<typeof ProposalSectionSchema>;
export type ComplianceItem = z.infer<typeof ComplianceItemSchema>;
export type GenerateDocxInput = z.infer<typeof GenerateDocxInputSchema>;

// --- Traceability Matrix Schemas ---

export const RfpSectionRefSchema = z.object({
  sectionNumber: z.string().describe("RFP section number, e.g. '3.1.1', 'L.4'"),
  title: z.string().describe("RFP section heading text"),
  pageNumber: z.number().optional().describe("Page number in the RFP document"),
});

export const ProposalSectionRefSchema = z.object({
  sectionNumber: z.string().describe("Proposal section number, e.g. '4', '4.2'"),
  title: z.string().describe("Proposal section heading text"),
  pageNumber: z.number().optional().describe("Page number in the proposal document"),
});

export const TraceabilityRowSchema = z.object({
  rfpSection: RfpSectionRefSchema,
  proposalSection: ProposalSectionRefSchema.optional()
    .describe("Omit if this RFP item has no corresponding proposal section (gap)"),
  description: z.string().describe("Short title/sentence describing what this line item traces"),
  coverageStatus: z.enum(["FULLY_ADDRESSED", "PARTIALLY_ADDRESSED", "NOT_ADDRESSED", "NOT_APPLICABLE"])
    .describe("How well the proposal addresses this RFP item"),
  notes: z.string().optional().describe("Additional context or gap explanation"),
});

export const GenerateMatrixInputSchema = z.object({
  outputPath: z.string().describe("Absolute file path for the output .xlsx"),
  metadata: z.object({
    rfpTitle: z.string().describe("RFP document title"),
    rfpReference: z.string().optional().describe("RFP solicitation/reference number"),
    proposalTitle: z.string().describe("Proposal document title"),
    companyName: z.string().describe("Responding company name"),
    clientName: z.string().describe("Issuing organization name"),
    date: z.string().describe("Date of matrix generation"),
    version: z.string().optional().default("1.0"),
  }),
  rows: z.array(TraceabilityRowSchema)
    .min(1)
    .describe("Mapping rows linking RFP sections to proposal sections"),
});

export type RfpSectionRef = z.infer<typeof RfpSectionRefSchema>;
export type ProposalSectionRef = z.infer<typeof ProposalSectionRefSchema>;
export type TraceabilityRow = z.infer<typeof TraceabilityRowSchema>;
export type GenerateMatrixInput = z.infer<typeof GenerateMatrixInputSchema>;
