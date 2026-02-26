---
name: setup-org
description: >
  Interactive wizard to configure your organization's knowledge files. Walks
  through company profile, capabilities, methodology, case studies, team bios,
  and other config files used to personalize proposals.
---

# /setup-org — Organization Knowledge Setup Wizard

**Description**: Guides you through setting up or updating the org-knowledge configuration files that personalize your proposals. The more complete these files are, the fewer placeholders your proposals will have.

## Core Workflow

1. **Check Existing Configuration** — Scan the `org-knowledge/` directory for existing YAML files. Report which files exist and their completeness (number of populated vs. empty fields). Show a summary:

   ```
   File                     | Status      | Completeness
   -------------------------|-------------|-------------
   company-profile.yaml     | Found       | 40% populated
   capabilities.yaml        | Found       | 0% (template only)
   methodology.yaml         | Not found   | —
   case-studies.yaml        | Found       | 2 studies added
   team-bios.yaml           | Not found   | —
   pricing-templates.yaml   | Not found   | —
   legal-boilerplate.yaml   | Not found   | —
   differentiators.yaml     | Found       | 60% populated
   ```

2. **Prioritized Setup** — Walk through files in priority order (highest impact first):

   **Priority 1 — Company Profile** (`company-profile.yaml`):
   Ask for: company name, address, website, elevator pitch, employee count, founded year, core values. For government contractors: DUNS, CAGE, UEI, NAICS codes, set-aside categories.

   **Priority 2 — Capabilities** (`capabilities.yaml`):
   Ask for: main service lines, technology stack (languages, frameworks, cloud, databases), certifications (ISO, SOC, CMMI), security clearances, contract vehicles.

   **Priority 3 — Methodology** (`methodology.yaml`):
   Ask for: delivery methodology name and description, project phases, PM framework, QA approach, risk management, tools used (Jira, Confluence, etc.).

   **Priority 4 — Differentiators** (`differentiators.yaml`):
   Ask for: 3-5 win themes with evidence, competitive advantages, awards, partnerships, unique capabilities.

   **Priority 5 — Case Studies** (`case-studies.yaml`):
   For each case study, ask for: project name, client, contract type/value, period, description, technologies, team size, key outcomes with metrics, relevance tags, reference contact.

   **Priority 6 — Team Bios** (`team-bios.yaml`):
   For each key person, ask for: name, proposed role, experience, education, certifications, clearance, short bio, relevant project experience.

   **Priority 7 — Pricing Templates** (`pricing-templates.yaml`):
   Ask for: preferred pricing models, labor categories and rates, overhead rates, discount policies.

   **Priority 8 — Legal Boilerplate** (`legal-boilerplate.yaml`):
   Ask for: standard terms, insurance coverage, compliance statements.

3. **For each file**, the wizard:
   - Explains what the file is used for (which proposal sections it feeds)
   - Asks questions conversationally (not all at once)
   - Generates the YAML content from your answers
   - Writes the file to `org-knowledge/`
   - Allows skipping any file to return to later

4. **Completion Summary** — After the wizard, show:
   - Which files were created/updated
   - Overall readiness score (percentage of total fields populated)
   - Recommendation: "Your org knowledge is X% complete. Proposals will have approximately Y placeholders. To reduce placeholders, fill in [specific files]."

## Notes

- You can run `/setup-org` multiple times — it will update existing files, not overwrite them
- Each file can also be edited manually with any text editor
- The wizard adapts based on your answers (e.g., skips government-specific fields for commercial-only companies)
- Case studies and team bios can be added incrementally over time
