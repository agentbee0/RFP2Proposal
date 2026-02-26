---
name: export-docx
description: >
  Exports a previously generated proposal to a formatted .docx document
  with professional styling, title page, table of contents, headers,
  footers, page numbers, and color-coded smart placeholders.
argument-hint: Proposal content or reference to previous generation
---

# /export-docx — Export Proposal to Word Document

**Description**: Takes a generated proposal (from `/generate-proposal` or provided directly) and exports it to a professionally formatted .docx file using the docx-generator MCP server.

**Argument**: Proposal content from the current conversation, or paste/upload proposal text

## Core Workflow

1. **Content Gathering** — Collect proposal content from one of these sources:
   - The most recently generated proposal in the current conversation (preferred)
   - Proposal text pasted or uploaded by the user
   - A file path to a markdown proposal document

   The proposal content must include the 10-section structure with section numbers, headings, and content blocks (paragraphs, lists, tables, placeholders).

2. **Metadata Collection** — Ask the user for (or infer from the proposal):
   - **Proposal title**: e.g., "Technical Proposal for Healthcare Data Platform"
   - **Client name**: The organization that issued the RFP
   - **Your company name**: From `org-knowledge/company-profile.yaml` or ask
   - **Date**: Default to today's date
   - **Output file path**: Where to save the .docx (default: `./output/proposal.docx`)

3. **Formatting Options** — Ask the user for preferences (with sensible defaults):
   - Page size: Letter (default) or A4
   - Header text: e.g., "CONFIDENTIAL — [Company Name]" (optional)
   - Footer text: e.g., "[Company Name] — Proposal for [Client]" (optional)
   - Include page numbers: Yes (default)
   - Include table of contents: Yes (default)

4. **Document Generation** — Transform the proposal into structured JSON and call the `generate_docx` MCP tool:
   - Parse the markdown proposal into sections with content blocks
   - Classify each content element: heading, paragraph, bullet_list, numbered_list, table, placeholder
   - Identify placeholder tiers from `[REQUIRED: ...]`, `[SUGGESTED: ...]`, `[OPTIONAL: ...]` markers
   - Include the compliance checklist if generated
   - Call the `generate_docx` tool with the structured data

5. **Delivery** — Report the results:
   - File path and size
   - Placeholder summary (count by tier)
   - Reminder: "Open the .docx in Word or LibreOffice to fill in placeholders and finalize"

## Placeholder Rendering in .docx

Placeholders are rendered with color-coded highlighting:
- **REQUIRED**: Red background, bold red text
- **SUGGESTED**: Yellow background, dark yellow text
- **OPTIONAL**: Green background, dark green text

This makes placeholders visually obvious when editing in Word.

## Prerequisites

The docx-generator MCP server must be installed:
```bash
cd servers/docx-generator
npm install
```

The server starts automatically when this command is invoked.

## Tips

- Run `/generate-proposal` first, then `/export-docx` to export the result
- You can also run `/generate-proposal` and accept the export prompt at the end (same result)
- To regenerate the .docx after editing content in the conversation, just run `/export-docx` again
