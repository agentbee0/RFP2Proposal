# Connectors

RFP2Proposal includes one bundled MCP server and can optionally connect to external services.

## Bundled: docx-generator

The `docx-generator` MCP server handles Word document generation. It runs locally via stdio transport.

**Setup:**
```bash
cd servers/docx-generator
npm install
```

**Tools provided:**
- `generate_docx` — Generates a formatted .docx proposal from structured JSON
- `validate_proposal_structure` — Validates proposal data without generating a file

## Optional Connectors

You can extend the plugin by adding connectors to your `.mcp.json`:

### Document Storage
- **Google Drive** — Store and retrieve RFPs and proposals
- **Box** — Enterprise document management
- **MS365** — SharePoint and OneDrive integration

### Collaboration
- **Slack** — Notify team when proposals are generated
- **Notion** — Export proposals to Notion pages
- **Atlassian** — Create Confluence pages from proposals

### CRM
- **HubSpot** — Pull client data for personalization
- **Salesforce** — Link proposals to opportunities

To add a connector, update `.mcp.json`:
```json
{
  "mcpServers": {
    "docx-generator": {
      "command": "npx",
      "args": ["tsx", "servers/docx-generator/src/index.ts"]
    },
    "slack": {
      "type": "http",
      "url": "https://mcp.slack.com/mcp"
    }
  }
}
```
