# Org Knowledge Configuration

This directory contains your organization's profile data that the RFP2Proposal plugin uses to generate personalized proposals. The more complete these files are, the fewer placeholders your proposals will have.

## Quick Setup

Run `/setup-org` for an interactive wizard, or manually edit the YAML files below.

## Files

| File | Required? | What it feeds |
|------|-----------|--------------|
| `company-profile.yaml` | Yes | Cover letter, executive summary, company descriptions |
| `capabilities.yaml` | Yes | Technical approach, capability statements |
| `methodology.yaml` | Yes | Management approach, project methodology sections |
| `case-studies.yaml` | Recommended | Past performance section (2-3 relevant studies per proposal) |
| `team-bios.yaml` | Recommended | Staffing plan, key personnel resumes |
| `pricing-templates.yaml` | Optional | Pricing summary, rate structures |
| `legal-boilerplate.yaml` | Optional | Terms & conditions, appendices |
| `differentiators.yaml` | Recommended | Win themes woven throughout all sections |

## Tips

- Start with `company-profile.yaml`, `capabilities.yaml`, and `methodology.yaml` — these have the highest impact
- Add at least 3-5 case studies covering your main industries
- Use the `relevance_tags` field in case studies to help the plugin match them to RFPs
- Pricing templates are optional — pricing placeholders will always be REQUIRED tier regardless
- All fields are optional — the plugin generates appropriate placeholders for missing data
