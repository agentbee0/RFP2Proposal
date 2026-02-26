---
name: proposal-writing
description: >
  Generates professional proposal sections following best practices for
  government and commercial proposals. Covers all 10 standard sections
  with org-knowledge integration, win theme threading, and smart
  placeholder insertion. Activates when drafting proposal content.
---

# Proposal Writing — 10-Section Generation Framework

When generating a proposal, follow this framework for each of the 10 sections. Every section should:
- Be written in the **responding organization's voice** (confident, specific, client-focused)
- Reference **RFP requirements by section number** where possible
- Integrate **org-knowledge data** from the appropriate YAML files
- Insert **smart placeholders** where information is missing (see placeholder-classification skill)
- Thread **win themes** from `differentiators.yaml` throughout

---

## Section 1: Cover Letter / Transmittal

**Purpose**: Formal transmittal letter establishing the proposal as an official offer.

**Source data**: `company-profile.yaml`, RFP extraction (solicitation number, client name)

**Structure**:
- Date and addressee (from RFP issuing organization)
- Reference line: solicitation number, title
- Opening: Express interest and confirm eligibility
- Brief value proposition (2-3 sentences from elevator pitch)
- Confirm compliance with all RFP requirements
- Designate authorized signatory and contact person
- Closing and signature block

**Placeholder rules**:
- `[REQUIRED: Authorized signatory name and title]`
- `[REQUIRED: Signature]`
- Company name and address from `company-profile.yaml` (or REQUIRED placeholder if missing)

**Length**: 1 page maximum

---

## Section 2: Executive Summary

**Purpose**: Concisely demonstrate understanding of the client's needs and why your organization is the best fit. This is often the ONLY section every evaluator reads.

**Source data**: `company-profile.yaml`, `differentiators.yaml`, RFP categories 1 (overview), 11 (pain points)

**Structure**:
1. **Client Problem Restatement** — Paraphrase the RFP's stated problem/need in 2-3 sentences. Show you understand their situation deeply. Reference specific pain points from Category 11.
2. **Proposed Solution Overview** — One paragraph summarizing your approach at the highest level.
3. **Value Proposition** — Why your organization is uniquely positioned. Pull from `differentiators.yaml` win themes.
4. **Key Differentiators** — 3-4 bullet points from `differentiators.yaml`, each tied to an RFP evaluation criterion.
5. **Proof Points** — Brief evidence (from case studies, metrics, certifications) that substantiates each differentiator.

**Writing guidelines**:
- Lead with the CLIENT's problem, not your company's history
- Every claim must have evidence or a proof point
- Match the tone to the client: formal for government, conversational for startups
- Avoid generic superlatives ("world-class", "cutting-edge") — use specific metrics instead

**Length**: 1-2 pages (or as specified by RFP page limits)

---

## Section 3: Understanding of Requirements

**Purpose**: Prove that you read and deeply understood the RFP. This section earns trust before you propose solutions.

**Source data**: RFP categories 2 (scope), 3 (technical), 11 (pain points)

**Structure**:
1. **Scope Restatement** — Rewrite the RFP's scope of work in YOUR words (not copy-paste). Organize by phase or deliverable.
2. **Technical Environment Understanding** — Summarize the technical landscape: current systems, integration points, constraints.
3. **Key Challenges Identified** — Explicitly call out 3-5 challenges from the RFP (and between the lines) that your approach addresses.
4. **Assumptions** — List any assumptions you're making. This is critical for FFP proposals to manage scope.

**Writing guidelines**:
- Do NOT simply repeat the RFP language — restate it to show comprehension
- Add insights the client didn't mention but should consider ("Based on our experience with similar migrations, we anticipate...")
- Assumptions should be numbered for easy reference in negotiations

**Placeholder rules**:
- `[SUGGESTED: Add clarifying assumptions specific to your organization's approach]`

**Length**: 2-4 pages

---

## Section 4: Technical Approach / Proposed Solution

**Purpose**: The core of the proposal — how you will solve the problem.

**Source data**: `capabilities.yaml`, RFP categories 2 (scope), 3 (technical requirements)

**Structure**:
1. **Solution Overview** — High-level architecture description
2. **Technology Stack** — Recommended technologies with justification (mapped to RFP requirements from Category 3)
3. **Architecture Design** — Component breakdown, data flow, integration points
4. **Security Approach** — How security requirements from Category 7 are addressed
5. **Implementation Approach** — How the solution will be built, deployed, and tested
6. **Innovation** — Any novel approaches, efficiencies, or value-adds beyond RFP requirements

**Writing guidelines**:
- Every technology choice should cite the specific RFP requirement it satisfies
- Include a placeholder for an architecture diagram
- Address each technical requirement from Category 3 explicitly
- If the RFP doesn't mandate a specific technology, recommend one from `capabilities.yaml` with justification

**Placeholder rules**:
- `[REQUIRED: Architecture diagram]`
- `[SUGGESTED: Specific technology versions and compatibility details]`
- Technology recommendations from `capabilities.yaml` (or placeholder if empty)

**Length**: 4-8 pages (often the largest section)

---

## Section 5: Management Approach / Methodology

**Purpose**: Demonstrate that you have a proven, structured approach to delivering the project.

**Source data**: `methodology.yaml`, RFP categories 2 (scope), 4 (timeline)

**Structure**:
1. **Delivery Methodology** — Pull from `methodology.yaml`: framework name, description, philosophy
2. **Project Phases** — Map your standard phases to the RFP's scope. Customize phase descriptions.
3. **Sprint/Iteration Structure** — If Agile: sprint cadence, ceremonies, artifacts
4. **Governance & Reporting** — Reporting cadence, status meeting structure, escalation process
5. **Quality Assurance** — Testing methodology, code review process, acceptance criteria
6. **Risk Management** — Risk identification, assessment, and mitigation approach
7. **Communication Plan** — How you'll communicate with the client team
8. **Transition Plan** — How you handle transition-in (from incumbent or current state) and knowledge transfer

**Writing guidelines**:
- If `methodology.yaml` is populated, use it as the foundation and customize for the specific RFP
- If the RFP specifies a methodology preference (e.g., Waterfall), adapt accordingly
- Include specific tool names (Jira, Confluence) from `methodology.yaml`
- The transition plan should address incumbent transition if Category 12 signals exist

**Placeholder rules**:
- `[SUGGESTED: Customize methodology if client prefers Waterfall or specific framework]`
- Governance details from `methodology.yaml` (or placeholder if empty)

**Length**: 3-6 pages

---

## Section 6: Staffing Plan / Team Structure

**Purpose**: Show that you have the right people with the right skills.

**Source data**: `team-bios.yaml`, RFP category 9 (personnel requirements)

**Structure**:
1. **Organizational Structure** — Proposed team org chart showing reporting relationships
2. **Key Personnel** — For each RFP-required position: proposed person, qualifications summary, relevant experience
3. **Supporting Team** — Additional roles needed but not mandated by the RFP
4. **Staffing Approach** — How you'll recruit, onboard, and retain team members
5. **Succession Planning** — Backup plan if key personnel become unavailable

**Writing guidelines**:
- Match proposed roles EXACTLY to RFP-required positions from Category 9
- For each key person, demonstrate they meet or exceed minimum qualifications
- Pull bios from `team-bios.yaml` and customize for this RFP
- If `team-bios.yaml` is empty, insert REQUIRED placeholders for each mandated position

**Placeholder rules**:
- `[REQUIRED: Named key personnel for each RFP-mandated position]`
- `[REQUIRED: Resumes in appendix]`
- `[SUGGESTED: Organizational chart diagram]`

**Length**: 2-4 pages (plus resumes in appendix)

---

## Section 7: Past Performance / Case Studies

**Purpose**: Prove you've done this before, successfully, for similar clients.

**Source data**: `case-studies.yaml`, RFP categories 10 (past performance), 3 (technical requirements)

**Structure**:
For each case study (typically 2-3):
1. **Project Name and Client**
2. **Relevance** — Why this project is relevant to the current RFP (similar scope, industry, technology, scale)
3. **Challenge** — What problem the client faced
4. **Solution** — What you delivered
5. **Results** — Quantified outcomes (metrics, KPIs, ROI)
6. **Technologies Used** — Mapping to current RFP requirements
7. **Reference Contact** — Name, title, phone, email

**Case study matching logic**:
- Match by `relevance_tags` in `case-studies.yaml` to RFP industry and technology
- Prioritize: same industry > same technology > same scale > same contract type
- If RFP is healthcare, prioritize healthcare case studies; if government, prioritize government, etc.
- If `case-studies.yaml` is empty, insert SUGGESTED placeholders with matching guidance

**Placeholder rules**:
- `[REQUIRED: Reference contact details]` (always, even when case study exists)
- `[SUGGESTED: Add a [industry] case study — client is in [detected industry]]`

**Length**: 1-2 pages per case study

---

## Section 8: Pricing Summary / Commercial Terms

**Purpose**: Present pricing in the format required by the RFP.

**Source data**: `pricing-templates.yaml`, RFP categories 5 (budget signals), 2 (scope)

**Structure**:
1. **Pricing Model Recommendation** — Based on Category 5 analysis: recommend FFP, T&M, or hybrid with justification
2. **Effort Estimation** — Phase-by-phase effort breakdown (labor hours by role)
3. **Rate Summary** — Labor category rates (from `pricing-templates.yaml` or placeholder)
4. **Cost Summary Table** — Total cost by phase, by role, with subtotals
5. **Payment Schedule** — Milestone-based payment terms aligned to project plan
6. **Assumptions and Exclusions** — Pricing assumptions that bound the estimate

**Writing guidelines**:
- NEVER generate specific dollar amounts — always use REQUIRED placeholders for actual prices
- The structure and format can be pre-built, but numbers must be human-provided
- If the RFP requires a specific CLIN structure, mirror it exactly
- If budget signals suggest FFP, note the risk considerations

**Placeholder rules**:
- `[REQUIRED: Actual hourly rates per labor category]`
- `[REQUIRED: Total proposed price]`
- `[REQUIRED: Phase-by-phase pricing breakdown]`
- Rate card structure from `pricing-templates.yaml` (if available)

**Length**: 2-4 pages (or as specified by RFP)

---

## Section 9: Compliance Matrix

**Purpose**: Demonstrate point-by-point compliance with every RFP requirement.

**Source data**: RFP categories 7 (compliance), 8 (submission), compliance-mapping skill output

**Structure**:
A cross-reference table mapping every RFP requirement to the proposal section where it is addressed:

| RFP Section | Requirement | Proposal Section | Page | Status |
|------------|-------------|-----------------|------|--------|
| 3.1        | Must use AWS | Section 4, p.12 | 12   | Compliant |
| 4.2        | PM must be PMP | Section 6, p.18 | 18  | Compliant |

**Writing guidelines**:
- This section is generated by the compliance-mapping skill
- Include EVERY requirement found in the extraction
- Flag any NON-COMPLIANT items with explanation and mitigation

**Length**: 1-3 pages

---

## Section 10: Appendices

**Purpose**: Supporting documents referenced in the proposal body.

**Source data**: `team-bios.yaml`, `legal-boilerplate.yaml`, `capabilities.yaml`

**Standard appendices**:
- **A: Key Personnel Resumes** — Full resumes for each key person (from `team-bios.yaml`)
- **B: Certifications & Compliance** — Copies of ISO, SOC, CMMI certificates
- **C: Terms & Conditions** — Standard terms from `legal-boilerplate.yaml`
- **D: Company Registration** — DUNS, CAGE, UEI documentation
- **E: Insurance Certificates** — From `legal-boilerplate.yaml`

**Placeholder rules**:
- `[REQUIRED: Key personnel resumes]`
- `[SUGGESTED: Copies of certifications]`
- `[OPTIONAL: Client testimonial letters]`
- `[OPTIONAL: Additional case study details]`

---

## Win Theme Threading Strategy

Win themes from `differentiators.yaml` should appear across MULTIPLE sections, not just the executive summary:

| Win Theme | Where it appears |
|-----------|-----------------|
| Theme 1   | Exec Summary (introduce) → Technical Approach (substantiate) → Past Performance (prove) |
| Theme 2   | Exec Summary (introduce) → Management Approach (substantiate) → Staffing (prove) |
| Theme 3   | Exec Summary (introduce) → Understanding (substantiate) → Why Us (prove) |

Each mention should add new information, not repeat the same phrase.

## Ghost/Highlight Technique

- **Ghosting**: Subtly address competitor weaknesses without naming them. Example: "Unlike approaches that rely on offshore-only teams, our model provides..."
- **Highlighting**: Emphasize your unique strengths tied to evaluation criteria. Example: "Our 98% retention rate means your team stays your team throughout the project."

Use ghosting sparingly and only when incumbent/competitor signals are present in Category 12.
