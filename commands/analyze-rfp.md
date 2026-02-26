---
name: analyze-rfp
description: >
  Deep analysis of an RFP document. Extracts requirements, evaluation criteria,
  compliance needs, timeline, budget signals, and submission requirements.
  Provides strategic bid/no-bid assessment.
argument-hint: Upload or paste an RFP document
---

# /analyze-rfp — RFP Deep Analysis

**Description**: Reads an RFP document and performs a comprehensive 12-category extraction, then provides a strategic assessment to inform your bid/no-bid decision.

**Argument**: RFP document (PDF upload, pasted text, or file path)

## Core Workflow

1. **Intake & Validation** — Accept the RFP document via file upload (PDF, Word), pasted text, or file path. Validate that the document appears to be an RFP, RFI, or RFQ. If the document is very long (50+ pages), inform the user and confirm before proceeding with the full analysis.

2. **12-Category Extraction** — Using the rfp-analysis skill, extract structured information across all 12 categories:
   - Project Overview
   - Scope of Work
   - Technical Requirements
   - Timeline
   - Budget Signals
   - Evaluation Criteria
   - Compliance Requirements
   - Submission Requirements
   - Personnel Requirements
   - Past Performance Requirements
   - Pain Points
   - Incumbent Signals

   For each category, mark items as **Found**, **Inferred**, or **Not Found**.

3. **Extraction Summary** — Present a summary table showing completeness per category:

   ```
   Category                  | Items Found | Status
   --------------------------|-------------|--------
   Project Overview          | 6/8         | Good
   Scope of Work             | 5/7         | Good
   Technical Requirements    | 8/8         | Complete
   Timeline                  | 4/9         | Gaps
   Budget Signals            | 2/6         | Limited
   Evaluation Criteria       | 5/5         | Complete
   Compliance Requirements   | 3/8         | Gaps
   Submission Requirements   | 7/8         | Good
   Personnel Requirements    | 4/8         | Gaps
   Past Performance          | 5/7         | Good
   Pain Points               | 3/3         | Complete
   Incumbent Signals         | 1/6         | Limited
   ```

4. **Strategic Assessment** — Based on the extraction, provide:

   **Bid/No-Bid Factors:**
   - Scope alignment with your capabilities
   - Timeline feasibility
   - Resource availability for key personnel requirements
   - Compliance readiness (certifications, clearances)
   - Competitive position (incumbent advantages, set-aside requirements)
   - Pricing model fit (FFP risk vs. T&M flexibility)

   **Key Risks:**
   - Requirements that are ambiguous or contradictory
   - Unrealistic timelines or scope
   - High-risk pricing models for the given scope
   - Missing information that could affect proposal quality

   **Questions for Q&A Period:**
   - Generate 5-10 clarification questions based on gaps in the extraction
   - Prioritize questions that would most impact proposal strategy

   **Win Strategy Hints:**
   - Which evaluation criteria carry the most weight
   - What pain points to address prominently
   - Where to differentiate from likely competitors

## Output

The analysis is presented in the conversation as structured markdown. No files are created. The extraction data is available for subsequent commands (`/generate-proposal`, `/compliance-checklist`).

## Tips

- For the best analysis, upload the complete RFP including all attachments and amendments
- If the RFP has amendments, mention them — amendments override the base RFP
- After analysis, you can immediately run `/generate-proposal` to create a full proposal based on the extraction
- Use `/compliance-checklist` if you only need the compliance/submission checklist
