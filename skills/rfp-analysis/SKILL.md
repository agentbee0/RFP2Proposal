---
name: rfp-analysis
description: >
  Analyzes RFP, RFI, and RFQ documents to extract structured requirements,
  evaluation criteria, compliance needs, timeline, budget signals, and
  submission requirements. Activates when reading or parsing procurement
  documents.
---

# RFP Analysis — 12-Category Extraction Framework

When analyzing an RFP (Request for Proposal), RFI (Request for Information), or RFQ (Request for Quotation), extract information across all 12 categories below. For each category, mark items as **Found**, **Inferred** (derived from context), or **Not Found**.

---

## Category 1: Project Overview

Extract the foundational context:

- **Issuing organization**: Full legal name, agency/department, division
- **Project name / solicitation number**: Official title and reference number
- **RFP type**: RFP, RFI, RFQ, RFTOP, BAA, or other
- **Purpose**: What problem is being solved, what outcome is desired
- **Background**: Current state, why this procurement exists, preceding events
- **Funding source**: If mentioned (e.g., specific program, grant, budget line)
- **Contract type anticipated**: IDIQ, BPA, single-award, multiple-award
- **Set-aside status**: Full and open, small business set-aside, 8(a), HUBZone, SDVOSB, WOSB

## Category 2: Scope of Work

Extract the full scope:

- **Deliverables**: Every specific deliverable mentioned (documents, software, reports, training)
- **Phases**: Any phased approach described (discovery, development, deployment, O&M)
- **Activities**: Specific tasks and activities the contractor must perform
- **Boundaries**: What is explicitly out of scope
- **Location**: On-site, remote, hybrid; specific locations if mentioned
- **Government-furnished items**: Equipment, data, facilities, access provided by the client
- **Period of performance**: Base period and option periods with durations

## Category 3: Technical Requirements

Extract all technical specifications:

- **Mandatory technologies**: Specific platforms, languages, frameworks required
- **Integration requirements**: Systems that must be integrated, APIs, data formats
- **Infrastructure**: Cloud, on-premises, hybrid; specific providers if mandated
- **Security standards**: Encryption, authentication, access control requirements
- **Performance requirements**: Response times, throughput, availability SLAs
- **Data requirements**: Volume, formats, migration, retention, backup
- **Accessibility**: Section 508, WCAG 2.1, other accessibility standards

## Category 4: Timeline

Extract all temporal requirements:

- **Questions deadline**: Date for submitting clarification questions
- **Answers posted**: When Q&A responses will be published
- **Proposal due date**: Submission deadline (date, time, timezone)
- **Oral presentations**: Date if scheduled
- **Award date**: Anticipated award date
- **Project start**: Expected start date or "NTP + X days"
- **Milestones**: Any interim delivery dates
- **Go-live date**: Target launch or operational date
- **Option periods**: Dates or durations for option years

## Category 5: Budget Signals

Extract pricing intelligence — explicit or inferred:

- **Stated budget**: Any dollar amount or range mentioned
- **Pricing model required**: FFP (Firm Fixed Price), T&M (Time & Materials), CPFF, CPIF, hybrid
- **CLIN structure**: Contract Line Item Numbers and how pricing should be structured
- **Cost evaluation weight**: What percentage of evaluation is based on price
- **Budget ceiling**: Not-to-exceed amounts
- **Rate requirements**: Specific labor category rates or rate ceilings

**When no explicit budget exists**, infer from:
- Cost evaluation weight (higher weight = more price-sensitive)
- Contract type signals (T&M suggests flexibility, FFP suggests defined scope)
- Period of performance × team size estimates
- NAICS code typical contract ranges
- Similar recent awards (check USASpending or GovWin if available)

## Category 6: Evaluation Criteria

Extract the scoring framework:

- **Evaluation factors**: Each factor listed (Technical, Management, Past Performance, Cost/Price, etc.)
- **Weights**: Percentage or relative importance of each factor
- **Subfactors**: Detailed breakdown within each factor
- **Evaluation method**: Best value tradeoff, lowest price technically acceptable (LPTA), highest technically rated
- **Oral presentation**: Whether required and what it covers
- **Sample task**: Whether a sample task or demonstration is required
- **Color/adjectival ratings**: If the evaluation uses color (Blue/Green/Yellow/Red) or adjectival (Outstanding/Good/Acceptable) ratings

## Category 7: Compliance Requirements

Extract all regulatory and certification needs:

- **Industry regulations**: HIPAA, SOX, PCI-DSS, FISMA, FedRAMP, GDPR, FERPA, CMMC
- **Certifications required**: ISO 27001, SOC 2, CMMI, ISO 9001
- **Security clearances**: Facility clearance level, personnel clearance levels
- **Background checks**: Types required (NACI, BI, SBI)
- **Insurance requirements**: Types and coverage minimums
- **Bonding requirements**: Bid bond, performance bond, payment bond
- **Conflict of interest**: OCI (Organizational Conflict of Interest) provisions
- **Data handling**: Data classification levels, spillage procedures, destruction requirements

## Category 8: Submission Requirements

Extract every formatting and delivery rule:

- **Page limits**: Per volume or total (and what counts toward the limit)
- **Font requirements**: Type, minimum size
- **Margin requirements**: Minimum margins
- **Line spacing**: Single, 1.5, double
- **Header/footer requirements**: Content required in headers and footers
- **Volume structure**: How to organize the proposal (separate technical, management, cost volumes)
- **File format**: PDF, Word, Excel for pricing
- **File naming convention**: Required naming pattern
- **Electronic submission**: Portal URL, email address, file size limits
- **Hard copies**: Number required, delivery address
- **Packaging**: Envelope markings, sealed pricing

## Category 9: Personnel Requirements

Extract staffing expectations:

- **Key personnel positions**: Specific roles that must be proposed (PM, Technical Lead, Architect, etc.)
- **Minimum qualifications**: Education, years of experience, certifications per role
- **Resume format**: Required structure and page limits for resumes
- **Labor categories**: Specific categories and descriptions required
- **Substitution rules**: Process for replacing key personnel
- **Clearance requirements**: Per-position clearance levels
- **Location requirements**: On-site vs. remote for specific roles
- **Percentage commitment**: Minimum time dedication per role (e.g., "PM must be 100% dedicated")

## Category 10: Past Performance

Extract reference requirements:

- **Number of references**: How many past performance examples required
- **Recency**: How recent projects must be (e.g., "within last 5 years")
- **Relevance criteria**: What makes a project "relevant" (similar size, scope, complexity, industry)
- **Contract value minimums**: Minimum dollar value of reference projects
- **Reference format**: Required fields (client name, contact, value, description, etc.)
- **CPARS/PPIRS**: Whether past performance ratings will be checked
- **Subcontractor references**: Whether sub past performance can be used

## Category 11: Pain Points

Identify the client's underlying challenges:

- **Stated problems**: Explicitly mentioned challenges ("current system is slow", "manual processes")
- **Legacy system issues**: References to outdated technology, technical debt, migration needs
- **Performance gaps**: Current performance vs. desired performance
- **Urgency indicators**: Language suggesting time pressure ("critical", "urgent", "immediate")
- **Previous failures**: References to failed previous attempts or vendor issues
- **Organizational challenges**: Staffing shortages, skill gaps, resource constraints
- **Compliance gaps**: Areas where the client is currently non-compliant

## Category 12: Incumbent Signals

Identify competitive intelligence:

- **Current contractor**: Named or unnamed references to existing vendor
- **Transition requirements**: Knowledge transfer, overlap period, data migration from incumbent
- **Re-compete signals**: Whether this is a new requirement or re-compete of existing contract
- **Incumbent advantages**: What the current vendor knows/has that new entrants don't
- **Dissatisfaction signals**: Language suggesting unhappiness with current state ("improve upon", "lessons learned")
- **TINA data**: Truth in Negotiations Act data that reveals incumbent pricing

---

## Handling Long RFPs (50+ Pages)

For documents over 50 pages:

1. **Read the Table of Contents first** — map the document structure
2. **Prioritize sections**: Scope of Work (SOW/PWS) → Evaluation Criteria (Section M) → Instructions to Offerors (Section L) → All remaining sections
3. **Process section-by-section** — extract categories relevant to each section
4. **Synthesize** — combine all extractions into a unified analysis
5. **Cross-reference** — verify that requirements in one section don't contradict another

## Handling Unusual Formats

- **Scanned PDFs**: Look for OCR artifacts, accept lower-confidence extractions, flag uncertain items
- **Multiple documents**: RFP + amendments — read amendments LAST as they override the base RFP
- **Embedded tables**: Pay special attention to tables for evaluation criteria, CLIN structures, and deliverable lists
- **Email-based RFPs**: The RFP body may be in the email text, not just attachments

## Output Format

Present extraction results as structured sections with:
- Each category as a heading
- Items listed with their source (section/page reference when possible)
- Status: **Found** / **Inferred** / **Not Found** for each item
- Confidence level for inferred items
- A summary table of all 12 categories with completeness percentage
