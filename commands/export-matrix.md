---
name: export-matrix
description: >
  Generates an Excel (.xlsx) traceability matrix mapping RFP sections to
  proposal sections with coverage status, color-coding, auto-filters,
  and a summary sheet with coverage statistics.
argument-hint: Proposal and RFP content from current conversation
---

# /export-matrix -- Export Traceability Matrix to Excel

**Description**: Generates a traceability matrix (.xlsx) that maps every RFP section to the corresponding proposal section, with coverage status tracking. Helps reviewers verify that all RFP requirements are addressed.

**Argument**: RFP and proposal content from the current conversation, or provide/upload both documents.

## Core Workflow

1. **Content Gathering** -- Collect source data from:
   - The RFP analysis from the current conversation (from `/analyze-rfp` or `/generate-proposal` Step 2)
   - The generated proposal sections from the current conversation
   - If neither exists, ask the user to provide or upload both the RFP and proposal content

2. **Metadata Collection** -- Ask the user for (or infer from context):
   - **RFP title**: From the RFP extraction
   - **RFP reference number**: Solicitation number if available
   - **Proposal title**: From the proposal metadata
   - **Company name**: From `org-knowledge/company-profile.yaml` or ask
   - **Client name**: From the RFP extraction
   - **Date**: Default to today's date
   - **Output file path**: Where to save (default: `./output/traceability-matrix.xlsx`)

3. **Traceability Mapping** -- Using the traceability-mapping skill:
   - Build the RFP section inventory from the extraction
   - Build the proposal section inventory from the generated sections
   - Cross-reference each RFP section to its proposal counterpart
   - Determine coverage status for each row
   - Write a short description for each line item
   - Identify and flag gaps

4. **Matrix Generation** -- Call the `generate_traceability_matrix` MCP tool with the assembled data structure.

5. **Delivery** -- Report results:
   - File path and size
   - Coverage summary statistics (fully addressed, partially, gaps)
   - List of critical gaps (NOT_ADDRESSED mandatory items)
   - Reminder: "Open the .xlsx in Excel or LibreOffice to review and filter"

## Coverage Status Legend

The Excel file uses color-coded cells:
- **Fully Addressed** (green): Proposal section has specific, substantive content for this RFP item
- **Partially Addressed** (yellow): Proposal section covers this item but has placeholders or gaps
- **Not Addressed** (red): No proposal section covers this RFP item
- **Not Applicable** (gray): RFP item does not require a proposal response

## Prerequisites

The docx-generator MCP server must be installed (it also serves the matrix tool):
```bash
cd servers/docx-generator
npm install
```

## Tips

- Run `/generate-proposal` first, then `/export-matrix` to get both the proposal and the traceability matrix
- Use the matrix to identify gaps before finalizing the proposal
- Share the matrix with your review team as a QA checklist
- Re-run after filling in placeholders to see updated coverage percentages
- Filter by "NOT ADDRESSED" in Excel to see all gaps at a glance
