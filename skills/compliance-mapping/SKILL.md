---
name: compliance-mapping
description: >
  Maps RFP submission requirements to a structured compliance checklist.
  Extracts mandatory requirements, tracks proposal completeness, and
  generates submission formatting checklists. Activates when building
  compliance matrices or verifying proposal completeness.
---

# Compliance Mapping — Requirements to Checklist

When analyzing an RFP for compliance, generate two artifacts: a Content Compliance Matrix and a Submission Formatting Checklist.

---

## Step 1: Requirement Extraction

Scan the full RFP text for mandatory language. Target keywords:

**Mandatory indicators** (require compliance):
- "shall", "must", "is required", "mandatory", "will be evaluated"
- "offeror shall provide", "contractor shall", "vendor must"
- "failure to comply will result in", "non-compliance will"

**Conditional indicators** (may require compliance):
- "should", "may", "is preferred", "is desirable"
- "will be considered favorably"

**Exclusion indicators** (not required):
- "at the offeror's discretion", "optional", "if available"

For each requirement found, record:
- **RFP reference**: Section number and page
- **Exact language**: The requirement text (paraphrased if very long)
- **Mandatory vs. preferred**: Based on keyword analysis
- **Category**: See categorization below

## Step 2: Requirement Categorization

Classify each extracted requirement into one of 7 categories:

| Category | What it covers |
|----------|---------------|
| TECHNICAL | System capabilities, performance, integrations, architecture |
| MANAGEMENT | Methodology, governance, reporting, risk management |
| PERSONNEL | Staffing, qualifications, clearances, certifications |
| COMPLIANCE | Regulatory frameworks, industry standards, legal requirements |
| PAST_PERFORMANCE | References, experience, contract history |
| PRICING | Cost structure, rate format, CLIN breakdown, pricing assumptions |
| SUBMISSION | Format, page limits, delivery method, deadlines, file naming |

## Step 3: Compliance Matrix Generation

Generate a table mapping each requirement to where it's addressed in the proposal:

```markdown
## Content Compliance Matrix

| # | RFP Ref | Requirement | Category | Mandatory | Proposal Section | Status | Notes |
|---|---------|-------------|----------|-----------|-----------------|--------|-------|
| 1 | 3.1.1 | System shall support 10,000 concurrent users | TECHNICAL | Yes | Section 4 | COMPLIANT | Addressed in architecture design |
| 2 | 3.2.1 | Must integrate with SAP ERP | TECHNICAL | Yes | Section 4 | PARTIAL | Integration approach described; specific SAP version TBD |
| 3 | 4.1 | PM shall have PMP certification | PERSONNEL | Yes | Section 6 | COMPLIANT | Jane Smith, PMP certified |
| 4 | 4.2 | Team lead requires SECRET clearance | PERSONNEL | Yes | Section 6 | NON-COMPLIANT | Placeholder — clearance status to be confirmed |
| 5 | 5.1 | Provide 3 references from last 5 years | PAST_PERF | Yes | Section 7 | PARTIAL | 2 of 3 case studies populated |
```

**Status values**:
- **COMPLIANT**: Requirement fully addressed with specific content
- **PARTIAL**: Requirement addressed but contains placeholders that must be filled
- **NON-COMPLIANT**: Requirement not addressed — flag as gap
- **NOT-APPLICABLE**: Requirement does not apply (with justification)

## Step 4: Submission Formatting Checklist

Extract every formatting and delivery requirement into a checklist:

```markdown
## Submission Formatting Checklist

### Document Formatting
- [ ] Page limit: [X] pages maximum for [volume/section]
      Current count: [REQUIRED: actual page count after editing]
- [ ] Font: [specified font], [specified size] minimum
- [ ] Margins: [specified margins] minimum all sides
- [ ] Line spacing: [specified spacing]
- [ ] Headers must include: [specified content]
- [ ] Footers must include: [specified content]

### Volume Structure
- [ ] Volume I: Technical Proposal
- [ ] Volume II: Management Proposal
- [ ] Volume III: Past Performance
- [ ] Volume IV: Cost/Price Proposal (separate sealed envelope if required)

### File Requirements
- [ ] File format: [PDF/Word/Excel]
- [ ] File naming convention: [specified pattern]
- [ ] Maximum file size: [if specified]

### Delivery Requirements
- [ ] Electronic submission to: [portal URL/email]
- [ ] Hard copies: [number] copies to [address]
- [ ] Packaging: [specified marking/labeling requirements]
- [ ] Sealed pricing: [if required]

### Deadlines
- [ ] Questions due: [date, time, timezone]
- [ ] Proposal due: [date, time, timezone]
- [ ] Oral presentations: [date if scheduled]

### Required Inclusions
- [ ] Signed cover letter
- [ ] Completed representations and certifications
- [ ] Key personnel resumes ([format, page limit per resume])
- [ ] Past performance references ([number required])
- [ ] Pricing in required format ([CLIN structure/template])
- [ ] [Any other specific required documents]
```

## Step 5: Gap Analysis

After generating both artifacts, identify:

1. **Critical gaps**: NON-COMPLIANT items that are mandatory requirements
2. **Risk items**: PARTIAL items that need attention before submission
3. **Missing requirements**: RFP requirements not traceable to any proposal section

Present as a priority list:

```markdown
## Compliance Gaps — Priority Action Items

CRITICAL (must resolve before submission):
1. [RFP 4.2] Team lead SECRET clearance — not confirmed
2. [RFP 5.1] Need 1 more past performance reference

HIGH (should resolve for competitive proposal):
3. [RFP 3.2.1] SAP integration version specifics needed
4. [RFP 6.1] Pricing template not in required CLIN format

MEDIUM (recommended):
5. [RFP 7.3] Additional cybersecurity certifications not listed
```

---

## Notes

- For government RFPs, Section L (Instructions) and Section M (Evaluation) are the primary sources for compliance requirements
- For commercial RFPs, look for "Proposal Requirements" or "Submission Guidelines" sections
- Always cross-reference the compliance matrix with the placeholder summary to ensure alignment
- Re-run this analysis after the team fills in placeholders to update status from PARTIAL to COMPLIANT
