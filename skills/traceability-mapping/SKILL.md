---
name: traceability-mapping
description: >
  Constructs a traceability matrix mapping RFP sections to proposal sections.
  Extracts section numbers, titles, and page references from both documents
  and determines coverage status for each RFP item. Activates when building
  traceability matrices or cross-referencing RFP-to-proposal coverage.
---

# Traceability Mapping -- RFP Sections to Proposal Sections

When building a traceability matrix, create a row-by-row mapping from every significant RFP section to the proposal section(s) where it is addressed.

---

## Step 1: RFP Section Inventory

Extract every substantive section from the RFP document. For each section record:

- **Section number**: The hierarchical number (e.g., "3.1.1", "L.4", "C.5.2")
- **Title**: The section heading text
- **Page number**: The page where this section begins (if determinable)
- **Summary**: A one-sentence description of what this section requires

Focus on sections that contain:
- Requirements ("shall", "must", "will")
- Deliverables and scope items
- Evaluation criteria
- Compliance and submission rules
- Personnel and past performance requirements

Skip purely administrative sections (table of contents, signature pages, cover sheets) unless they contain actionable requirements.

## Step 2: Proposal Section Inventory

Extract every section from the generated proposal. For each section record:

- **Section number**: The proposal's section numbering (e.g., "1", "4.2")
- **Title**: The section heading text
- **Page number**: If available (may not be known until .docx export)

Use the 10-section structure from the proposal-writing skill as the baseline:
1. Cover Letter
2. Executive Summary
3. Understanding of Requirements
4. Technical Approach
5. Management Approach
6. Staffing Plan
7. Past Performance
8. Pricing Summary
9. Compliance Matrix
10. Appendices

Include subsections where proposals have them (e.g., "4.1 Solution Overview", "4.2 Technology Stack").

## Step 3: Cross-Reference Mapping

For each RFP section from Step 1, determine:

1. **Which proposal section addresses it** -- Match by:
   - Direct reference (proposal text cites the RFP section number)
   - Content alignment (proposal section covers the same topic)
   - Compliance matrix entries (from compliance-mapping skill)

2. **Coverage status**:
   - **FULLY_ADDRESSED**: The proposal section contains specific, substantive content addressing this RFP item with no remaining placeholders
   - **PARTIALLY_ADDRESSED**: The proposal section addresses this item but contains placeholders or lacks specificity
   - **NOT_ADDRESSED**: No proposal section addresses this RFP item (gap)
   - **NOT_APPLICABLE**: The RFP item does not require a proposal response (e.g., government-furnished information, for-information-only sections)

3. **Description**: Write a short sentence (10-20 words) summarizing what this line item traces. Example: "Data encryption requirements mapped to security architecture subsection"

4. **Notes**: Add context for PARTIALLY_ADDRESSED and NOT_ADDRESSED items:
   - What specific information is missing
   - Which placeholders need to be filled
   - Why a gap exists and how to close it

## Step 4: Gap Identification

After completing the mapping, identify:

1. **Unaddressed RFP sections**: Any RFP item with status NOT_ADDRESSED
2. **Weak coverage**: Items with PARTIALLY_ADDRESSED that involve mandatory ("shall/must") language
3. **Orphan proposal sections**: Proposal content that does not trace back to any RFP requirement (potential scope creep or unnecessary content)

Present gaps as a priority list:

```
TRACEABILITY GAPS -- Priority Items

CRITICAL (mandatory RFP items with no proposal coverage):
1. [RFP 3.2.4] Database migration requirements -- no proposal section
2. [RFP 4.1.2] Key personnel clearance verification -- placeholder only

HIGH (mandatory items with partial coverage):
3. [RFP 3.1.1] System performance SLAs -- general language, no specifics
4. [RFP 5.2] Transition plan from incumbent -- mentioned but not detailed
```

## Step 5: Build the Matrix Data Structure

Assemble the final data structure for the `generate_traceability_matrix` MCP tool. The structure must match the `GenerateMatrixInputSchema`:

```json
{
  "outputPath": "./output/traceability-matrix.xlsx",
  "metadata": {
    "rfpTitle": "...",
    "rfpReference": "...",
    "proposalTitle": "...",
    "companyName": "...",
    "clientName": "...",
    "date": "...",
    "version": "1.0"
  },
  "rows": [
    {
      "rfpSection": {
        "sectionNumber": "3.1",
        "title": "System Requirements",
        "pageNumber": 12
      },
      "proposalSection": {
        "sectionNumber": "4",
        "title": "Technical Approach",
        "pageNumber": 15
      },
      "description": "Core system requirements mapped to technical solution design",
      "coverageStatus": "FULLY_ADDRESSED",
      "notes": null
    }
  ]
}
```

## Integration with Compliance Mapping

The traceability matrix and compliance matrix serve different purposes:

| Aspect | Compliance Matrix | Traceability Matrix |
|--------|------------------|-------------------|
| Granularity | Individual requirements ("shall" items) | Section-level coverage |
| Focus | Is each requirement met? | Can every RFP section be found in the proposal? |
| Output | Table in the proposal document | Standalone Excel deliverable |
| Audience | Evaluators reading the proposal | Internal reviewers and quality team |

When both exist, cross-reference them:
- Every compliance matrix requirement should trace to at least one traceability matrix row
- A traceability matrix section marked FULLY_ADDRESSED should not have NON-COMPLIANT items in the compliance matrix for the same section

## Notes

- Sort rows by RFP section number for natural reading order
- Include ALL RFP sections, not just the ones with obvious proposal matches
- Page numbers for the proposal may be approximate or omitted if the final document has not been paginated yet
- Re-run the traceability mapping after filling in placeholders to update coverage status from PARTIALLY_ADDRESSED to FULLY_ADDRESSED
