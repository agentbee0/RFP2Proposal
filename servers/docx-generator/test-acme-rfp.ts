/**
 * End-to-end test: Generates a full proposal .docx from the
 * Acme Corp CRM RFP (AC-RFP-2026-CRM-001).
 *
 * Run: npx tsx test-acme-rfp.ts
 */
import { generateDocx } from "./src/document-builder.js";
import type { GenerateDocxInput } from "./src/types.js";
import { resolve } from "node:path";

const acmeProposal: GenerateDocxInput = {
  outputPath: resolve("../../output/AcmeCorp-CRM-Proposal.docx"),
  metadata: {
    title: "Enterprise CRM Implementation Proposal",
    subtitle: "Response to RFP AC-RFP-2026-CRM-001",
    companyName: "[Your Company Name]",
    companyAddress: "[Your Company Address]",
    clientName: "Acme Corporation",
    date: "May 14, 2026",
    version: "1.0",
  },
  formatting: {
    pageSize: "LETTER",
    headerText: "CONFIDENTIAL — CRM Implementation Proposal",
    footerText: "Response to Acme Corp RFP AC-RFP-2026-CRM-001",
    includePageNumbers: true,
    includeToc: true,
  },
  sections: [
    // ============================================================
    // SECTION 1: COVER LETTER
    // ============================================================
    {
      sectionNumber: "1",
      title: "Cover Letter",
      content: [
        {
          type: "paragraph",
          text: "May 14, 2026",
        },
        {
          type: "paragraph",
          text: "Jane Doe, VP of Digital Transformation\nAcme Corporation\n123 Main Street, Suite 100\nAnytown, ST 00000",
        },
        {
          type: "paragraph",
          text: "**Re: Response to RFP AC-RFP-2026-CRM-001 — Enterprise CRM Software Implementation**",
        },
        {
          type: "paragraph",
          text: "Dear Ms. Doe and Members of the Selection Committee,",
        },
        {
          type: "paragraph",
          text: "We are pleased to submit our proposal in response to Acme Corporation's Request for Proposal for an Enterprise Customer Relationship Management (CRM) Software Implementation. We have thoroughly reviewed your requirements and are confident that our solution and implementation approach will deliver the unified, global CRM platform that Acme Corp needs to achieve its strategic objectives.",
        },
        {
          type: "paragraph",
          text: "Our proposal demonstrates a deep understanding of the challenges you face — from consolidating four disparate CRM systems across 25 countries to enabling the data-driven selling and customer experience transformation outlined in your strategic plan. We bring proven experience in large-scale, multi-region CRM deployments for manufacturing enterprises of comparable complexity.",
        },
        {
          type: "placeholder",
          text: "2-3 sentences on your specific value proposition and key differentiator for Acme Corp",
          placeholderTier: "SUGGESTED",
        },
        {
          type: "paragraph",
          text: "We confirm that all pricing and terms in this proposal remain valid for 180 days from the submission deadline. We have executed the required NDA and comply with all submission requirements outlined in Section 8 of the RFP.",
        },
        {
          type: "paragraph",
          text: "We welcome the opportunity to demonstrate our solution during the vendor demonstration phase and look forward to a productive evaluation process.",
        },
        {
          type: "paragraph",
          text: "Respectfully submitted,",
        },
        {
          type: "placeholder",
          text: "Authorized signatory name, title, and signature",
          placeholderTier: "REQUIRED",
        },
      ],
    },

    // ============================================================
    // SECTION 2: EXECUTIVE SUMMARY
    // ============================================================
    {
      sectionNumber: "2",
      title: "Executive Summary",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Understanding Your Challenge",
        },
        {
          type: "paragraph",
          text: "Acme Corporation stands at a critical inflection point. With $8.7B in revenue, 15,000 employees across 25 countries, and ambitious 15% annual growth targets through 2030, your success depends on a unified view of your 12,000+ accounts and 3.2 million customer contacts. Today, that view doesn't exist.",
        },
        {
          type: "paragraph",
          text: "Your CRM landscape — a patchwork of Salesforce, Microsoft Dynamics 365, legacy Oracle systems, and spreadsheet-based tracking — creates real business impact: sales reps spend 32% of their time on administrative tasks instead of selling, forecast accuracy languishes at 58%, and your NPS has declined from 62 to 47 over two years. Meanwhile, Salesforce license costs have risen 45% with no proportional increase in value.",
        },
        {
          type: "heading",
          level: 2,
          text: "Our Proposed Solution",
        },
        {
          type: "paragraph",
          text: "We propose a unified, cloud-native CRM platform that consolidates all four existing systems into a single global instance — purpose-built for complex B2B manufacturing organizations like Acme Corp. Our solution delivers full Sales Force Automation, Marketing Automation, Customer Service, and Analytics capabilities across all 25 countries, with native multi-language support, multi-currency operations, and the 10 mandatory integrations specified in your RFP.",
        },
        {
          type: "heading",
          level: 2,
          text: "Key Differentiators",
        },
        {
          type: "bullet_list",
          items: [
            "**Manufacturing-native platform** — Purpose-built for complex B2B sales cycles with multi-level account hierarchies, territory management, and channel partner deal registration",
            "**Proven global deployment** — Demonstrated experience deploying across 20+ countries simultaneously with full localization in all 5 primary languages required by Acme Corp",
            "**Data migration expertise** — Specialized tooling for migrating from Salesforce, Dynamics 365, and legacy Oracle systems with deduplication across 4.9M+ contact records",
            "**Rapid time-to-value** — Our Agile-hybrid methodology delivers a production-ready North America pilot within 12 months, with full global deployment in 22 months",
          ],
        },
        {
          type: "placeholder",
          text: "Add 3-4 company-specific differentiators from differentiators.yaml",
          placeholderTier: "SUGGESTED",
        },
        {
          type: "heading",
          level: 2,
          text: "Projected Business Outcomes",
        },
        {
          type: "table",
          rows: [
            ["Acme Corp Objective", "Our Commitment", "Timeline"],
            ["Sales productivity +25%", "Reduce admin time from 32% to <12%", "Within 12 months of go-live"],
            ["Forecast accuracy 85%+", "AI-driven forecasting with multi-dimensional models", "Within 18 months"],
            ["360-degree customer view", "Unified data model across all 4 divisions", "At North America go-live"],
            ["Service resolution -40%", "Omnichannel routing with AI-assisted resolution", "Within 6 months of deployment"],
            ["NPS improvement", "Consistent experience across all touchpoints", "Ongoing improvement"],
            ["CRM cost reduction 30%", "Platform consolidation eliminates redundant licenses", "Year 2 onward"],
          ],
        },
      ],
    },

    // ============================================================
    // SECTION 3: UNDERSTANDING OF REQUIREMENTS
    // ============================================================
    {
      sectionNumber: "3",
      title: "Understanding of Requirements",
      content: [
        {
          type: "paragraph",
          text: "We have conducted a deep analysis of RFP AC-RFP-2026-CRM-001 and its 155 detailed requirements across 8 technical categories. This section demonstrates our understanding of your needs, the challenges unique to your environment, and the assumptions that underpin our approach.",
        },
        {
          type: "heading",
          level: 2,
          text: "Scope Summary",
        },
        {
          type: "paragraph",
          text: "The engagement encompasses a complete CRM transformation: replacing four disconnected systems (Salesforce Sales Cloud, Microsoft Dynamics 365, two legacy Oracle applications, and spreadsheet-based tracking) with a single unified platform serving 4,395 users across 25 countries. The scope includes platform configuration and customization, migration of approximately 4.9 million contact records and 2.25 million opportunity records from heterogeneous sources, development of 10 mandatory system integrations, a multi-modal training program in 5 primary languages, and organizational change management across all regions.",
        },
        {
          type: "heading",
          level: 2,
          text: "Key Challenges We've Identified",
        },
        {
          type: "numbered_list",
          items: [
            "**Data quality variance across source systems** — APAC legacy data is estimated at only 65% quality, and LATAM spreadsheet data (2,300+ files) will require significant cleansing. Our migration approach includes a dedicated data profiling and enrichment phase.",
            "**340+ custom Salesforce objects** — The North American Salesforce instance is heavily customized. We will conduct a customization audit to determine what should be migrated, rebuilt, or retired.",
            "**Concurrent system operation** — During the 18-24 month phased rollout, multiple systems will run simultaneously. Our integration architecture includes cross-system data synchronization to maintain operational continuity.",
            "**Cultural and regulatory diversity** — Deploying across 25 countries requires sensitivity to local business practices, data residency regulations (GDPR in EU, PIPL in China, CCPA in California), and language requirements.",
            "**Adoption at scale** — With 4,395 users globally, the 90%+ adoption target (OBJ-06) requires a robust change management program with local champions, not just training.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Assumptions",
        },
        {
          type: "numbered_list",
          items: [
            "Acme Corp will provide dedicated business SMEs (minimum 2 per region) for requirements validation and UAT",
            "Existing Salesforce, Dynamics 365, and Oracle system administrators will be available for data extraction and API documentation",
            "SAP S/4HANA integration will use standard BAPI/RFC interfaces; custom ABAP development is out of scope",
            "Azure AD will serve as the identity provider for SSO across all regions",
            "The North America pilot (Phase 3) will target the Aerospace Components division's 500 most active users",
            "Data migration will follow a regional sequence aligned with the deployment timeline (NA → EMEA → APAC → LATAM)",
            "Acme Corp's procurement portal will be used for all formal communications and deliverable submissions",
          ],
        },
        {
          type: "placeholder",
          text: "Add any additional assumptions based on your specific solution approach",
          placeholderTier: "SUGGESTED",
        },
      ],
    },

    // ============================================================
    // SECTION 4: TECHNICAL APPROACH
    // ============================================================
    {
      sectionNumber: "4",
      title: "Technical Approach",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Solution Architecture",
        },
        {
          type: "paragraph",
          text: "Our proposed architecture is a cloud-native, multi-tenant platform designed to meet Acme Corp's requirements for 99.9% availability, sub-3-second page loads, and support for 4,200+ concurrent users with horizontal scalability for 50% growth over 5 years (REQ-NFR-001 through REQ-NFR-004).",
        },
        {
          type: "placeholder",
          text: "Architecture diagram showing platform components, integration points, data flow, and security layers",
          placeholderTier: "REQUIRED",
        },
        {
          type: "heading",
          level: 2,
          text: "Requirements Coverage",
        },
        {
          type: "paragraph",
          text: "Our platform addresses all 155 requirements specified in Section 3 of the RFP. The following table summarizes coverage by category:",
        },
        {
          type: "table",
          rows: [
            ["Requirement Category", "Total", "Must-Have", "Nice-to-Have", "Our Coverage"],
            ["Sales Force Automation (REQ-SFA)", "30", "22", "8", "30/30 (100%)"],
            ["Marketing Automation (REQ-MA)", "25", "19", "6", "25/25 (100%)"],
            ["Customer Service (REQ-CS)", "25", "17", "8", "25/25 (100%)"],
            ["Analytics & Reporting (REQ-AR)", "20", "15", "5", "20/20 (100%)"],
            ["Mobile Access (REQ-MOB)", "15", "10", "5", "15/15 (100%)"],
            ["Non-Functional (REQ-NFR)", "20", "20", "0", "20/20 (100%)"],
            ["Integration & API (REQ-INT)", "15", "15", "0", "15/15 (100%)"],
          ],
        },
        {
          type: "placeholder",
          text: "Detailed requirement-by-requirement response matrix (can be placed in appendix if needed for page limits)",
          placeholderTier: "SUGGESTED",
        },
        {
          type: "heading",
          level: 2,
          text: "Integration Architecture",
        },
        {
          type: "paragraph",
          text: "We will deliver all 10 mandatory integrations specified in Section 2.4 of the RFP using a combination of native connectors, middleware (MuleSoft/Dell Boomi as specified in REQ-INT-008), and custom API development:",
        },
        {
          type: "table",
          rows: [
            ["System", "Pattern", "Approach"],
            ["SAP S/4HANA", "Bi-directional, real-time", "Native ERP connector + MuleSoft for custom objects"],
            ["Marketo Engage", "Bi-directional, near-real-time", "Native marketing connector with lead sync"],
            ["Shopify Plus", "Bi-directional, real-time", "REST API integration via middleware"],
            ["Microsoft 365", "Bi-directional", "Native connector (email, calendar, Teams)"],
            ["Azure AD", "SSO/SAML", "Native SAML 2.0 federation"],
            ["Snowflake", "Outbound, scheduled", "ETL pipeline via native data connector"],
            ["Genesys Cloud", "Bi-directional, real-time", "CTI adapter with screen-pop"],
            ["Power BI", "Outbound, real-time", "Native embedded analytics connector"],
            ["DocuSign", "Bi-directional", "Native e-signature connector"],
            ["SharePoint Online", "Bi-directional", "Native document management connector"],
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Security & Compliance Architecture",
        },
        {
          type: "paragraph",
          text: "Our platform meets all 20 non-functional requirements (REQ-NFR-001 through REQ-NFR-020) including:",
        },
        {
          type: "bullet_list",
          items: [
            "**Encryption**: AES-256 at rest, TLS 1.3 in transit (exceeding the TLS 1.2+ requirement)",
            "**Authentication**: MFA via SAML 2.0 and OAuth 2.0 with Azure AD SSO",
            "**Access control**: Role-based (RBAC) with field-level security and IP whitelisting",
            "**Data residency**: Regional data centers in US, EU (Frankfurt), and APAC (Singapore) for GDPR, CCPA, and PIPL compliance",
            "**Audit**: Comprehensive audit trail for all data changes with 7-year retention",
            "**DR**: RPO 1 hour, RTO 4 hours with automated failover and annual DR testing",
          ],
        },
        {
          type: "placeholder",
          text: "Specific technology versions, platform name, and detailed security architecture",
          placeholderTier: "REQUIRED",
        },
      ],
    },

    // ============================================================
    // SECTION 5: MANAGEMENT APPROACH
    // ============================================================
    {
      sectionNumber: "5",
      title: "Management Approach",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Methodology",
        },
        {
          type: "paragraph",
          text: "Aligned with Acme Corp's stated preference (Section 5.1), we employ an **Agile-hybrid methodology** that combines iterative 2-week development sprints with structured program governance milestones. This approach delivers the agility needed for a complex, multi-region deployment while maintaining the oversight and predictability required for an engagement of this scale and budget.",
        },
        {
          type: "heading",
          level: 2,
          text: "Phase Plan",
        },
        {
          type: "table",
          rows: [
            ["Phase", "Timeline", "Key Deliverables"],
            ["1: Initiation & Design", "Months 1-3", "Requirements validation, solution design, integration architecture, data profiling"],
            ["2: Core Platform Build", "Months 4-8", "Platform configuration, customization, integration development, data migration prep"],
            ["3: North America Pilot", "Months 9-12", "UAT, pilot deployment (500 users in Aerospace), performance tuning"],
            ["4: EMEA & APAC Rollout", "Months 13-18", "Regional deployments with localization, training, change management"],
            ["5: Global Completion", "Months 19-22", "LATAM and remaining regions, optimization, hypercare, knowledge transfer"],
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Governance Structure",
        },
        {
          type: "bullet_list",
          items: [
            "**Executive Steering Committee** — Monthly, VP-level alignment on strategic decisions",
            "**Program Management Board** — Bi-weekly, cross-functional issue resolution and risk management",
            "**Sprint Reviews** — Every 2 weeks, stakeholder demos and feedback",
            "**Regional Deployment Boards** — Per region, localization and adoption oversight",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Change Management & Training",
        },
        {
          type: "paragraph",
          text: "Achieving the 90%+ adoption target (OBJ-06) across 25 countries requires more than training — it requires organizational change management. Our approach includes:",
        },
        {
          type: "bullet_list",
          items: [
            "**Prosci ADKAR framework** for structured change management with measurable adoption KPIs",
            "**Local champion network** — 50+ trained change champions across all regions",
            "**Multi-modal training**: instructor-led (in-person + virtual), self-paced e-learning, role-based tracks, all in 5 primary languages",
            "**Train-the-trainer program** for sustainable knowledge transfer post-deployment",
            "**Adoption dashboards** tracking login rates, feature utilization, and support ticket trends per region",
          ],
        },
        {
          type: "placeholder",
          text: "Customize methodology details based on your actual delivery framework from methodology.yaml",
          placeholderTier: "SUGGESTED",
        },
      ],
    },

    // ============================================================
    // SECTION 6: STAFFING PLAN
    // ============================================================
    {
      sectionNumber: "6",
      title: "Staffing Plan",
      content: [
        {
          type: "paragraph",
          text: "Our proposed team comprises experienced professionals with deep expertise in large-scale CRM implementations for manufacturing enterprises. The team is structured to support the multi-region deployment timeline with dedicated workstreams for technical delivery, data migration, integration, and change management.",
        },
        {
          type: "heading",
          level: 2,
          text: "Core Team Structure",
        },
        {
          type: "table",
          rows: [
            ["Role", "Count", "Commitment", "Key Qualifications"],
            ["Program Manager", "1", "100%", "PMP/PgMP, 15+ yrs, manufacturing sector experience"],
            ["Solution Architect", "1", "100%", "CRM platform certified, enterprise architecture"],
            ["Technical Lead", "1", "100%", "10+ yrs CRM development, integration expertise"],
            ["Change Management Lead", "1", "100%", "Prosci certified, global change programs"],
            ["Data Migration Lead", "1", "80%", "ETL/data quality, Salesforce + Dynamics migration"],
            ["Integration Architect", "1", "60%", "MuleSoft/Boomi certified, SAP integration"],
            ["Senior Developers", "4", "100%", "CRM platform certified, 5+ yrs each"],
            ["QA Lead", "1", "100%", "ISTQB certified, performance testing"],
            ["Training Lead", "1", "80%", "Multi-language training programs"],
            ["Regional Deployment Leads", "3", "Phased", "EMEA, APAC, LATAM regional expertise"],
          ],
        },
        {
          type: "placeholder",
          text: "Named key personnel for Program Manager, Solution Architect, Technical Lead, and Change Management Lead (required per Section 8.4 Appendix E)",
          placeholderTier: "REQUIRED",
        },
        {
          type: "placeholder",
          text: "Full resumes for the 4 key personnel positions (Appendix E)",
          placeholderTier: "REQUIRED",
        },
        {
          type: "placeholder",
          text: "Organizational chart showing team structure and reporting lines",
          placeholderTier: "SUGGESTED",
        },
      ],
    },

    // ============================================================
    // SECTION 7: PAST PERFORMANCE
    // ============================================================
    {
      sectionNumber: "7",
      title: "Past Performance",
      content: [
        {
          type: "paragraph",
          text: "The following case studies demonstrate our proven capability in delivering enterprise CRM implementations of comparable scale, complexity, and industry relevance. Per the RFP's reference requirements (Section 4.2), we provide 5 references meeting the specified criteria for size (3,000+ users), industry (manufacturing), and geographic scope (multi-continent).",
        },
        {
          type: "placeholder",
          text: "Case Study 1: Manufacturing company, 3,500+ CRM users, multi-region deployment spanning 3+ continents. Include: client name, contract value, team size, technologies, key outcomes with metrics, reference contact. Match to RFP requirement for size + industry + geography.",
          placeholderTier: "REQUIRED",
        },
        {
          type: "placeholder",
          text: "Case Study 2: Manufacturing/industrial company, 3,000+ CRM users, data migration from Salesforce + Dynamics. Include: client name, migration scope, data quality improvements, adoption metrics, reference contact.",
          placeholderTier: "REQUIRED",
        },
        {
          type: "placeholder",
          text: "Case Study 3: Enterprise CRM deployment, 4,000+ users, SAP ERP integration. Include: client name, integration complexity, performance outcomes, reference contact.",
          placeholderTier: "REQUIRED",
        },
        {
          type: "placeholder",
          text: "Case Study 4: Global deployment across 20+ countries with multi-language training and change management. Include: adoption rates achieved, training approach, reference contact.",
          placeholderTier: "REQUIRED",
        },
        {
          type: "placeholder",
          text: "Case Study 5: Additional reference meeting size/industry/recency criteria. Include all reference form details.",
          placeholderTier: "REQUIRED",
        },
        {
          type: "paragraph",
          text: "Completed reference forms for all five references are included in Appendix C.",
        },
      ],
    },

    // ============================================================
    // SECTION 8: PRICING SUMMARY
    // ============================================================
    {
      sectionNumber: "8",
      title: "Pricing & Commercial Terms",
      content: [
        {
          type: "paragraph",
          text: "Our pricing is structured per the requirements outlined in Section 7 of the RFP, with milestone-based payments aligned to the payment schedule in Section 7.2. All prices are in USD.",
        },
        {
          type: "heading",
          level: 2,
          text: "Pricing Summary",
        },
        {
          type: "placeholder",
          text: "Complete pricing breakdown per the RFP template: Sales User License (3,500), Marketing License (500), Service License (200), Executive License (150), Admin License (25), Integration License (20), Implementation Services, Data Migration, Integration Development, Training Program, Change Management, Annual Support, Environment Costs",
          placeholderTier: "REQUIRED",
        },
        {
          type: "heading",
          level: 2,
          text: "Payment Schedule",
        },
        {
          type: "paragraph",
          text: "We accept Acme Corp's proposed milestone-based payment structure:",
        },
        {
          type: "table",
          rows: [
            ["Milestone", "Payment %", "Trigger"],
            ["Contract Signing", "10%", "Execution of master agreement"],
            ["Design Phase Completion", "15%", "Approval of solution design document"],
            ["Build Midpoint", "20%", "Core configuration + 50% customizations complete"],
            ["Build Completion", "15%", "All build + integration testing complete"],
            ["UAT Completion", "15%", "Successful UAT sign-off"],
            ["NA Go-Live", "10%", "North America production deployment"],
            ["Global Go-Live", "10%", "All regional deployments complete"],
            ["Final Acceptance", "5%", "30-day stability period with SLAs met"],
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Five-Year Total Cost of Ownership",
        },
        {
          type: "placeholder",
          text: "5-year TCO projection per the RFP template (Section 7.3): Year 1-5 breakdown of Software Licenses, Implementation Services, Data Migration, Training, Annual Support, Environment Costs, Estimated Internal Costs. Must demonstrate total within or below the $5M-$8M implementation budget range.",
          placeholderTier: "REQUIRED",
        },
        {
          type: "paragraph",
          text: "Detailed pricing worksheets are provided in Appendix B (Excel format) as required.",
        },
      ],
    },

    // ============================================================
    // SECTION 9: COMPLIANCE MATRIX
    // ============================================================
    {
      sectionNumber: "9",
      title: "Compliance Matrix",
      content: [
        {
          type: "paragraph",
          text: "The following matrix maps key RFP requirements to our proposal sections, demonstrating compliance with all mandatory requirements.",
        },
        {
          type: "table",
          rows: [
            ["RFP Section", "Requirement", "Proposal Section", "Status"],
            ["3.1 (SFA)", "30 requirements (22 Must-Have)", "Section 4", "COMPLIANT"],
            ["3.2 (Marketing)", "25 requirements (19 Must-Have)", "Section 4", "COMPLIANT"],
            ["3.3 (Service)", "25 requirements (17 Must-Have)", "Section 4", "COMPLIANT"],
            ["3.4 (Analytics)", "20 requirements (15 Must-Have)", "Section 4", "COMPLIANT"],
            ["3.5 (Mobile)", "15 requirements (10 Must-Have)", "Section 4", "COMPLIANT"],
            ["3.6 (NFR)", "20 requirements (all Must-Have)", "Section 4", "COMPLIANT"],
            ["3.7 (Integration)", "15 requirements (all Must-Have)", "Section 4", "COMPLIANT"],
            ["3.8 (Data Migration)", "4 source systems, 4.9M contacts", "Section 5", "COMPLIANT"],
            ["4.1 (Vendor Quals)", "Revenue, market presence, global ops", "Section 2 + Appendix", "PARTIAL"],
            ["4.2 (References)", "5 references meeting size/industry/geo", "Section 7", "PARTIAL"],
            ["4.4 (Certifications)", "SOC 2, ISO 27001/17/18, CSA STAR", "Section 4 + Appendix D", "PARTIAL"],
            ["5.1 (Methodology)", "Agile-hybrid preference", "Section 5", "COMPLIANT"],
            ["5.2 (Change Mgmt)", "Training in 5 languages, OCM", "Section 5", "COMPLIANT"],
            ["7.1 (Pricing)", "Detailed per-line pricing", "Section 8 + Appendix B", "PARTIAL"],
            ["8.1 (Volumes)", "5 volumes with page limits", "Full proposal", "COMPLIANT"],
            ["8.4 (Appendices)", "SOW, pricing, references, certs, resumes, project plan", "Appendices A-F", "PARTIAL"],
          ],
        },
        {
          type: "paragraph",
          text: "**Note:** Items marked PARTIAL contain placeholders that must be completed before submission. See the Placeholder Summary in this document for a prioritized list.",
        },
      ],
    },

    // ============================================================
    // SECTION 10: APPENDICES
    // ============================================================
    {
      sectionNumber: "10",
      title: "Appendices",
      content: [
        {
          type: "paragraph",
          text: "The following appendices are included per Section 8.4 of the RFP:",
        },
        {
          type: "heading",
          level: 2,
          text: "Appendix A: Statement of Work (SOW) Template",
        },
        {
          type: "placeholder",
          text: "Draft SOW based on proposed approach — include scope, deliverables, milestones, acceptance criteria, assumptions, and constraints",
          placeholderTier: "REQUIRED",
        },
        {
          type: "heading",
          level: 2,
          text: "Appendix B: Pricing Worksheet",
        },
        {
          type: "placeholder",
          text: "Completed Excel workbook using the Acme Corp pricing template from the Procurement Portal",
          placeholderTier: "REQUIRED",
        },
        {
          type: "heading",
          level: 2,
          text: "Appendix C: Reference Forms",
        },
        {
          type: "placeholder",
          text: "Completed reference forms for all 5 customer references with contact details",
          placeholderTier: "REQUIRED",
        },
        {
          type: "heading",
          level: 2,
          text: "Appendix D: Security & Compliance Documentation",
        },
        {
          type: "placeholder",
          text: "Current SOC 2 Type II report, ISO 27001/27017/27018 certificates, CSA STAR certification, and data security architecture overview",
          placeholderTier: "REQUIRED",
        },
        {
          type: "heading",
          level: 2,
          text: "Appendix E: Implementation Team Resumes",
        },
        {
          type: "placeholder",
          text: "Resumes for Program Manager, Solution Architect, Technical Lead, and Change Management Lead",
          placeholderTier: "REQUIRED",
        },
        {
          type: "heading",
          level: 2,
          text: "Appendix F: Sample Project Plan",
        },
        {
          type: "placeholder",
          text: "Representative project plan (MS Project or equivalent) showing the 22-month implementation timeline with milestones, dependencies, and resource allocation",
          placeholderTier: "REQUIRED",
        },
      ],
    },
  ],

  complianceChecklist: {
    items: [
      { rfpRef: "8.1", requirement: "Volume 1: Executive Summary (30 pages max)", proposalSection: "Sections 1-2", status: "COMPLIANT", notes: "Within page limit" },
      { rfpRef: "8.1", requirement: "Volume 2: Technical Solution (75 pages max)", proposalSection: "Sections 3-4", status: "PARTIAL", notes: "Architecture diagram and requirement-by-requirement matrix needed" },
      { rfpRef: "8.1", requirement: "Volume 3: Implementation Approach (40 pages max)", proposalSection: "Sections 5-7", status: "COMPLIANT", notes: "Methodology, staffing, and past performance covered" },
      { rfpRef: "8.1", requirement: "Volume 4: Pricing (25 pages max)", proposalSection: "Section 8", status: "PARTIAL", notes: "Pricing figures required" },
      { rfpRef: "8.1", requirement: "Volume 5: Appendices", proposalSection: "Section 10", status: "PARTIAL", notes: "6 appendix placeholders to fill" },
      { rfpRef: "8.3", requirement: "Submit PDF + Word formats", proposalSection: "N/A", status: "COMPLIANT", notes: ".docx generated, PDF conversion needed" },
      { rfpRef: "8.3", requirement: "Pricing in Excel (.xlsx) format", proposalSection: "Appendix B", status: "NON-COMPLIANT", notes: "Excel worksheet required separately" },
      { rfpRef: "8.3", requirement: "Submit via Procurement Portal by May 15 5PM EST", proposalSection: "N/A", status: "PARTIAL", notes: "Portal submission pending" },
      { rfpRef: "4.2", requirement: "5 customer references", proposalSection: "Section 7", status: "NON-COMPLIANT", notes: "0 of 5 references populated — CRITICAL" },
      { rfpRef: "4.2", requirement: "3+ refs with 3,000+ CRM users", proposalSection: "Section 7", status: "NON-COMPLIANT", notes: "Reference details needed" },
      { rfpRef: "4.2", requirement: "2+ refs in manufacturing/industrial", proposalSection: "Section 7", status: "NON-COMPLIANT", notes: "Reference details needed" },
      { rfpRef: "4.4", requirement: "SOC 2 Type II certification (current)", proposalSection: "Appendix D", status: "PARTIAL", notes: "Certificate copy needed" },
      { rfpRef: "4.4", requirement: "ISO 27001 certification", proposalSection: "Appendix D", status: "PARTIAL", notes: "Certificate copy needed" },
      { rfpRef: "8.4-A", requirement: "Draft Statement of Work", proposalSection: "Appendix A", status: "NON-COMPLIANT", notes: "SOW not yet drafted" },
      { rfpRef: "8.4-E", requirement: "Key personnel resumes (4 required)", proposalSection: "Appendix E", status: "NON-COMPLIANT", notes: "0 of 4 resumes provided — CRITICAL" },
      { rfpRef: "8.4-F", requirement: "Sample project plan", proposalSection: "Appendix F", status: "NON-COMPLIANT", notes: "Project plan not yet created" },
      { rfpRef: "10.1", requirement: "Execute NDA prior to submission", proposalSection: "N/A", status: "PARTIAL", notes: "NDA execution status to confirm" },
    ],
  },
};

async function main() {
  console.log("Generating Acme Corp CRM Proposal .docx...\n");
  console.log(`RFP: AC-RFP-2026-CRM-001`);
  console.log(`Client: Acme Corporation`);
  console.log(`Sections: ${acmeProposal.sections.length}`);
  console.log(`Compliance items: ${acmeProposal.complianceChecklist?.items.length}\n`);

  try {
    const result = await generateDocx(acmeProposal);
    console.log("SUCCESS!\n");
    console.log(`File: ${result.filePath}`);
    console.log(`Size: ${result.fileSize}`);
    console.log(`\nPlaceholder Summary:`);
    console.log(`  REQUIRED:  ${result.placeholderSummary.required} items — must fill before submission`);
    console.log(`  SUGGESTED: ${result.placeholderSummary.suggested} items — should fill for stronger proposal`);
    console.log(`  OPTIONAL:  ${result.placeholderSummary.optional} items — nice to have`);
    console.log(`\nOpen in Word to review formatting and fill placeholders.`);
  } catch (error) {
    console.error("FAILED:", error);
    process.exit(1);
  }
}

main();
