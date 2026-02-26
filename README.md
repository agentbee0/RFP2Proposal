# RFP2Proposal

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Plugin: Claude Cowork](https://img.shields.io/badge/Plugin-Claude%20Cowork-blueviolet)](https://claude.com)

**Turn RFPs into professional proposals in minutes, not days.**

A Claude Cowork plugin that reads RFP documents, extracts requirements, and generates complete proposal drafts with smart placeholders, compliance checklists, and .docx export.

---

## What It Does

```
You drop in a customer's RFP document
        |
        v
Claude reads and understands it deeply
        |
        v
Generates a full proposal with smart placeholders + pre-filled content
        |
        v
Your team fills in the blanks & customizes
        |
        v
Professional proposal ready in hours, not days
```

## Quick Start

### 1. Install the plugin

**Claude Cowork:**
Upload the plugin folder via Customize > Browse plugins > Upload.

**Claude Code:**
```bash
claude plugin install --path /path/to/rfp2proposal
```

### 2. Configure your org knowledge

Run the interactive setup wizard:
```
/setup-org
```

Or manually edit the YAML files in `org-knowledge/` with your company info, case studies, team bios, and methodology.

### 3. Generate a proposal

Upload an RFP and run:
```
/generate-proposal
```

## Commands

| Command | Description |
|---------|------------|
| `/generate-proposal` | Full pipeline: analyze RFP, generate 10-section proposal with placeholders, compliance checklist, optional .docx export |
| `/analyze-rfp` | Deep RFP analysis only — extract requirements, evaluate bid/no-bid factors |
| `/compliance-checklist` | Generate compliance matrix and submission checklist from RFP requirements |
| `/export-docx` | Export a generated proposal to formatted Word document |
| `/export-matrix` | Export a traceability matrix (.xlsx) mapping RFP sections to proposal sections |
| `/setup-org` | Interactive wizard to configure org-knowledge files |

## Skills (Auto-triggered)

These activate automatically when relevant — no slash command needed:

| Skill | What it does |
|-------|-------------|
| `rfp-analysis` | 12-category RFP extraction framework (scope, timeline, budget, evaluation criteria, compliance, etc.) |
| `proposal-writing` | 10-section proposal structure with per-section writing guidance and org-knowledge integration |
| `placeholder-classification` | Three-tier smart placeholder system with context-sensitive escalation |
| `compliance-mapping` | Maps RFP "shall/must/required" language to compliance checklist items |
| `industry-compliance` | Detects regulatory frameworks (HIPAA, SOX, FedRAMP, GDPR, etc.) and adds appropriate language |
| `traceability-mapping` | Maps RFP sections to proposal sections with coverage status for cross-referencing |

## Smart Placeholder System

Not all placeholders are equal. The plugin uses three tiers:

| Tier | Meaning | Example |
|------|---------|---------|
| `[REQUIRED: ...]` | Must be filled before submission | `[REQUIRED: Insert final pricing — cannot be estimated by AI]` |
| `[SUGGESTED: ...]` | Strengthens the proposal | `[SUGGESTED: Add a healthcare case study — client is in med-tech]` |
| `[OPTIONAL: ...]` | Nice-to-have enhancement | `[OPTIONAL: Include client testimonials if available]` |

Placeholders automatically escalate based on RFP evaluation criteria weights.

## Org Knowledge Setup

Customize the plugin for your organization by editing YAML files in `org-knowledge/`:

| File | What it contains |
|------|-----------------|
| `company-profile.yaml` | Company name, address, identifiers (DUNS, CAGE), overview |
| `capabilities.yaml` | Service lines, tech stack, certifications, contract vehicles |
| `methodology.yaml` | Delivery methodology, SDLC, project management, QA approach |
| `case-studies.yaml` | Past performance with outcomes, technologies, references |
| `team-bios.yaml` | Key personnel profiles, certifications, experience |
| `pricing-templates.yaml` | Rate cards, labor categories, pricing models |
| `legal-boilerplate.yaml` | Standard T&C, insurance, compliance statements |
| `differentiators.yaml` | Win themes, competitive advantages, awards |

The more you fill in, the fewer placeholders in your proposals.

## MCP Server Setup (.docx Export)

The plugin includes a local MCP server for generating Word documents:

```bash
cd servers/docx-generator
npm install
```

The server starts automatically when you use `/export-docx`, `/export-matrix`, or accept the export prompt from `/generate-proposal`.

## Customization

This plugin is designed to be forked and customized:

- **Add new skills** — Create `skills/your-skill/SKILL.md` for domain-specific expertise
- **Modify commands** — Edit command workflows in `commands/`
- **Customize proposal structure** — Modify section order and content in the `proposal-writing` skill
- **Add connectors** — Wire to your tools via `.mcp.json` (see [CONNECTORS.md](CONNECTORS.md))

## Roadmap

### Phase 2: Connected Knowledge Base
- Pull case studies from your document management system
- Auto-match team bios from HR systems
- Learn from past winning proposals

### Phase 3: Win Intelligence
- Track which proposals won vs. lost
- Learn winning language, pricing models, and structures per client type
- Flag risk: "RFPs like this have a low win rate for us"

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding skills, commands, and improvements.

## License

[MIT](LICENSE)
