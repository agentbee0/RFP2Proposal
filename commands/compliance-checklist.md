---
name: compliance-checklist
description: >
  Generates a compliance checklist from an RFP, mapping every mandatory
  requirement and submission rule to a trackable checklist item.
  Works standalone or after a proposal has been generated.
argument-hint: Upload or paste an RFP document
---

# /compliance-checklist — Standalone Compliance Checklist

**Description**: Reads an RFP and generates two compliance artifacts: a Content Compliance Matrix mapping every "shall/must/required" item, and a Submission Formatting Checklist with all format and delivery rules.

**Argument**: RFP document (PDF upload, pasted text, or file path)

## Core Workflow

1. **Intake** — Accept the RFP document. If a proposal has already been generated in this conversation, use the existing RFP extraction. Otherwise, perform a fresh extraction focused on compliance-relevant categories (7: Compliance Requirements, 8: Submission Requirements, and all "shall/must" language throughout).

2. **Requirement Extraction** — Using the compliance-mapping skill, scan the full RFP for mandatory language:
   - "shall", "must", "is required", "mandatory"
   - "offeror shall provide", "contractor shall", "vendor must"
   - "failure to comply", "non-compliance will"

   Categorize each requirement: TECHNICAL, MANAGEMENT, PERSONNEL, COMPLIANCE, PAST_PERFORMANCE, PRICING, SUBMISSION.

3. **Checklist Generation** — Produce two artifacts:

   **Content Compliance Matrix**: Table mapping each RFP requirement to where it should be addressed in a proposal, with compliance status.

   **Submission Formatting Checklist**: Actionable checklist of every formatting rule, deadline, and delivery requirement.

   **Gap Analysis**: Priority list of critical compliance gaps that need attention.

## Output

Both artifacts are presented as formatted markdown tables and checklists in the conversation. They can be included in a proposal via `/generate-proposal` or exported separately.

## Tips

- Run this BEFORE writing a proposal to understand what's required
- Run this AFTER writing a proposal to verify completeness
- Share the checklist with your team as a pre-submission verification tool
- For government RFPs, pay special attention to Section L (Instructions) and Section M (Evaluation Criteria)
