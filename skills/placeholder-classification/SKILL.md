---
name: placeholder-classification
description: >
  Classifies smart placeholders in proposals using a three-tier system
  (REQUIRED, SUGGESTED, OPTIONAL). Determines placeholder priority based
  on RFP requirements, evaluation criteria weights, and content type.
  Activates when generating proposal content with incomplete information.
---

# Smart Placeholder Classification — Three-Tier System

When generating proposal content and encountering missing information, insert a smart placeholder using the classification rules below.

## Placeholder Format

```
[REQUIRED: Description of what goes here]
[SUGGESTED: Description of what goes here]
[OPTIONAL: Description of what goes here]
```

Each placeholder includes:
- **Tier**: REQUIRED, SUGGESTED, or OPTIONAL
- **Description**: What information is needed
- **Context**: Why it's needed (referencing RFP section when applicable)

---

## Classification Decision Tree

For each piece of missing information, walk through this decision tree:

### Step 1: Is this information available in org-knowledge files?

- **YES** → Use the data directly. No placeholder needed.
- **PARTIALLY** → Use what's available, add a SUGGESTED placeholder for the missing parts.
- **NO** → Continue to Step 2.

### Step 2: Does the RFP explicitly require this information?

Check against the extraction categories. Look for "shall provide", "must include", "offeror shall submit".

- **YES, and it maps to an evaluation criterion** → **REQUIRED**
- **YES, but it's supplementary** → **SUGGESTED**
- **NO** → Continue to Step 3.

### Step 3: What type of content is this?

Apply default classification based on content type:

**Always REQUIRED** (regardless of RFP):
- Specific pricing figures, hourly rates, total costs
- Named key personnel for RFP-mandated positions
- Reference contact information (name, phone, email)
- Company registration identifiers (DUNS, CAGE, UEI) when RFP is government
- Authorized signatory name and signature
- Insurance certificate details
- Security clearance verification

**Default SUGGESTED**:
- Quantified performance metrics for case studies ("reduced time by X%")
- Specific team member names for non-mandated roles
- Technology versions and compatibility specifics
- Architecture diagrams and org charts
- Timeline with specific dates and milestones
- Risk mitigation details specific to the project
- Transition plan specifics

**Default OPTIONAL**:
- Additional case studies beyond the minimum required
- Client testimonial quotes
- Awards and recognition not tied to evaluation criteria
- Extended team member bios for supporting staff
- Marketing content (company video links, media mentions)
- Additional certifications not required by the RFP

---

## Context-Sensitive Escalation Rules

After initial classification, apply these escalation rules based on RFP evaluation criteria:

### Cost/Price Weight Escalation
- If cost/price evaluation weight **>= 30%**: Escalate ALL pricing-related placeholders to REQUIRED
- If cost/price evaluation weight **>= 50%** (LPTA): Escalate pricing structure and rate justification to REQUIRED

### Past Performance Weight Escalation
- If past performance is a **standalone evaluation factor** (not combined with technical): Escalate all case study detail placeholders from OPTIONAL/SUGGESTED to REQUIRED
- If past performance weight **>= 25%**: Escalate reference contacts and outcome metrics to REQUIRED

### Personnel Weight Escalation
- If personnel/staffing is a **standalone evaluation factor**: Escalate all key personnel name and resume placeholders to REQUIRED
- If specific positions are **named in evaluation criteria**: Escalate those specific role placeholders to REQUIRED

### Compliance Escalation
- If a specific regulatory framework is **required** (HIPAA, FedRAMP, etc.): Escalate related certification placeholders to REQUIRED
- If compliance is a **pass/fail gate**: Escalate ALL compliance-related placeholders to REQUIRED

### Oral Presentation Escalation
- If oral presentations are **required**: Escalate presenter names and presentation material placeholders to REQUIRED

---

## Post-Generation Compliance Cross-Check

After the full proposal is generated and the compliance checklist is built:

1. For each compliance item marked **NON-COMPLIANT** or **PARTIAL** in the compliance matrix:
2. Find the corresponding placeholder in the proposal
3. Escalate that placeholder to **REQUIRED** (if not already)
4. Add a note: "Compliance gap — filling this placeholder is critical for compliance"

---

## Placeholder Summary Report

After generating the full proposal, provide a summary:

```
PLACEHOLDER SUMMARY
━━━━━━━━━━━━━━━━━━
REQUIRED:  X items — Must be filled before submission
SUGGESTED: Y items — Should be filled for a stronger proposal
OPTIONAL:  Z items — Nice-to-have enhancements

REQUIRED items by section:
  Section 1 (Cover Letter):    2 items
  Section 6 (Staffing):        4 items
  Section 8 (Pricing):         3 items
  ...

Top priority items to fill:
  1. [REQUIRED: Authorized signatory name and title]
  2. [REQUIRED: Actual hourly rates per labor category]
  3. [REQUIRED: Named Project Manager — must be PMP certified]
  ...
```

This summary helps teams prioritize their effort on the most critical gaps.
