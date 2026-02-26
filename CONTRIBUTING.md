# Contributing to RFP2Proposal

Thank you for your interest in contributing! This plugin is built to help outsourcing and consulting organizations respond to RFPs faster and more consistently.

## How to Contribute

### Adding a New Skill

Skills are auto-triggered domain knowledge files that Claude draws on when relevant.

1. Create a directory under `skills/` with a descriptive name
2. Add a `SKILL.md` file inside it
3. Include YAML frontmatter with `name` and `description`
4. Structure the content with clear sections, frameworks, and checklists
5. Submit a PR using the "New Skill" issue template

### Adding a New Command

Commands are explicit workflows triggered by slash commands.

1. Create a `.md` file under `commands/`
2. Include YAML frontmatter with `name`, `description`, and `argument-hint`
3. Define a numbered workflow (typically 3-8 steps)
4. Document inputs, outputs, and any MCP tool dependencies

### Improving Org-Knowledge Templates

The YAML templates in `org-knowledge/` are the customization point for organizations.

1. Keep fields well-documented with inline comments
2. Provide realistic example values
3. Ensure the schema is flexible enough for different org types

### Improving the MCP Server

The docx-generator in `servers/docx-generator/` handles Word document generation.

1. Run `npm install` in the server directory
2. Make changes to TypeScript source in `src/`
3. Ensure `npm run build` passes
4. Test with sample proposal data

## Development Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_ORG/rfp2proposal.git
cd rfp2proposal

# Install MCP server dependencies
cd servers/docx-generator
npm install
npm run build
cd ../..

# Install the plugin locally (Claude Code)
claude plugin install --path .
```

## Pull Request Process

1. Fork the repository and create your branch from `main`
2. Follow the PR template checklist
3. Ensure the CI workflow passes (plugin structure validation, YAML lint, MCP server build)
4. Update `CHANGELOG.md` with your changes under the `[Unreleased]` section
5. Request review from a maintainer

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Questions?

Open a [discussion](https://github.com/YOUR_ORG/rfp2proposal/discussions) or file an issue.
