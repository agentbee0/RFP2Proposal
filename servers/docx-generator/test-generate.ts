/**
 * Standalone test script for the docx generator.
 * Run: npx tsx test-generate.ts
 *
 * Generates a sample proposal .docx to verify formatting,
 * placeholders, and document structure without needing
 * the full plugin or MCP transport.
 */
import { generateDocx } from "./src/document-builder.js";
import type { GenerateDocxInput } from "./src/types.js";
import { resolve } from "node:path";

const sampleProposal: GenerateDocxInput = {
  outputPath: resolve("../../output/sample-proposal.docx"),
  metadata: {
    title: "Technical Proposal for Healthcare Data Platform Modernization",
    subtitle: "RFP-2026-HC-0042",
    companyName: "Acme Software Solutions",
    companyAddress: "123 Tech Drive, Austin, TX 78701",
    clientName: "Regional Health Authority",
    date: "February 26, 2026",
    version: "1.0",
  },
  formatting: {
    pageSize: "LETTER",
    headerText: "CONFIDENTIAL — Acme Software Solutions",
    footerText: "Proposal for Regional Health Authority",
    includePageNumbers: true,
    includeToc: true,
  },
  sections: [
    {
      sectionNumber: "1",
      title: "Cover Letter",
      content: [
        {
          type: "paragraph",
          text: "Dear Selection Committee,",
        },
        {
          type: "paragraph",
          text: "Acme Software Solutions is pleased to submit this proposal in response to RFP-2026-HC-0042 for the Healthcare Data Platform Modernization project. We have carefully reviewed the requirements and are confident in our ability to deliver a solution that meets and exceeds your expectations.",
        },
        {
          type: "paragraph",
          text: "With over 10 years of experience in healthcare IT and a proven track record of HIPAA-compliant system delivery, we are uniquely positioned to address your data modernization needs.",
        },
        {
          type: "placeholder",
          text: "Authorized signatory name, title, and signature",
          placeholderTier: "REQUIRED",
        },
      ],
    },
    {
      sectionNumber: "2",
      title: "Executive Summary",
      content: [
        {
          type: "paragraph",
          text: "The Regional Health Authority faces critical challenges with its aging data infrastructure: **fragmented patient records** across 12 legacy systems, **manual reporting processes** consuming 40+ staff hours weekly, and **growing compliance risks** as HIPAA audit requirements evolve.",
        },
        {
          type: "paragraph",
          text: "Acme proposes a modern, cloud-native data platform built on **AWS** with a microservices architecture that will unify patient data, automate reporting, and ensure continuous HIPAA compliance.",
        },
        {
          type: "heading",
          level: 2,
          text: "Key Differentiators",
        },
        {
          type: "bullet_list",
          items: [
            "**98% team retention rate** — your team stays your team throughout the project",
            "**5 successful healthcare platform deliveries** in the last 3 years",
            "**HITRUST CSF certified** — pre-validated HIPAA compliance framework",
            "**30% faster delivery** through our AI-assisted development tooling",
          ],
        },
        {
          type: "placeholder",
          text: "Add 2-3 sentences on specific value proposition for this client",
          placeholderTier: "SUGGESTED",
        },
      ],
    },
    {
      sectionNumber: "3",
      title: "Understanding of Requirements",
      content: [
        {
          type: "paragraph",
          text: "Based on our thorough analysis of RFP-2026-HC-0042, we understand that the Regional Health Authority requires a comprehensive data modernization initiative encompassing the following key areas:",
        },
        {
          type: "numbered_list",
          items: [
            "**Data Unification** — Consolidate 12 legacy systems into a single patient data platform",
            "**Automated Reporting** — Replace manual reporting with real-time dashboards and automated compliance reports",
            "**HIPAA Compliance** — Ensure end-to-end compliance with HIPAA Security Rule and Privacy Rule",
            "**Interoperability** — Support HL7 FHIR and SMART on FHIR for external system integration",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Assumptions",
        },
        {
          type: "bullet_list",
          items: [
            "Existing systems will remain operational during migration (parallel run approach)",
            "Client will provide dedicated SMEs for legacy system knowledge transfer",
            "AWS GovCloud is the target deployment environment",
          ],
        },
        {
          type: "placeholder",
          text: "Add clarifying assumptions specific to your organization's approach",
          placeholderTier: "SUGGESTED",
        },
      ],
    },
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
          text: "Our proposed solution uses a cloud-native microservices architecture deployed on **AWS GovCloud**, ensuring HIPAA compliance at the infrastructure level. The platform consists of four core layers:",
        },
        {
          type: "bullet_list",
          items: [
            "**Data Integration Layer** — Apache Kafka for real-time streaming, AWS Glue for batch ETL",
            "**Storage Layer** — Amazon RDS (PostgreSQL) for transactional data, S3 for document storage, Redshift for analytics",
            "**Application Layer** — React frontend, Node.js microservices, GraphQL API gateway",
            "**Security Layer** — AWS KMS encryption, IAM role-based access, CloudTrail audit logging",
          ],
        },
        {
          type: "placeholder",
          text: "Architecture diagram — insert system architecture image",
          placeholderTier: "REQUIRED",
        },
        {
          type: "heading",
          level: 2,
          text: "Technology Stack",
        },
        {
          type: "table",
          rows: [
            ["Component", "Technology", "Justification"],
            ["Frontend", "React 19 + TypeScript", "Modern, accessible, WCAG 2.1 AA compliant"],
            ["Backend", "Node.js + NestJS", "Scalable microservices with strong typing"],
            ["Database", "PostgreSQL 16", "HIPAA-compliant, ACID-compliant, mature ecosystem"],
            ["Cloud", "AWS GovCloud", "FedRAMP High authorized, HIPAA eligible"],
            ["CI/CD", "GitHub Actions + Terraform", "Infrastructure as code, automated compliance checks"],
          ],
        },
      ],
    },
    {
      sectionNumber: "5",
      title: "Management Approach",
      content: [
        {
          type: "paragraph",
          text: "Acme employs a **hybrid Agile-Waterfall** methodology optimized for healthcare IT projects. We use Waterfall-style phase gates for compliance milestones and Agile sprints for iterative development.",
        },
        {
          type: "heading",
          level: 2,
          text: "Sprint Structure",
        },
        {
          type: "bullet_list",
          items: [
            "**2-week sprints** with defined stories, acceptance criteria, and Definition of Done",
            "**Sprint Planning** — Monday morning, 2 hours",
            "**Daily Standup** — 15 minutes, async option for distributed team",
            "**Sprint Review** — Demo to stakeholders every 2 weeks",
            "**Retrospective** — Continuous improvement after each sprint",
          ],
        },
        {
          type: "placeholder",
          text: "Customize methodology if client prefers a different framework",
          placeholderTier: "OPTIONAL",
        },
      ],
    },
    {
      sectionNumber: "6",
      title: "Staffing Plan",
      content: [
        {
          type: "paragraph",
          text: "Our proposed team consists of 10 dedicated professionals with deep healthcare IT experience:",
        },
        {
          type: "table",
          rows: [
            ["Role", "Name", "Experience", "Commitment"],
            ["Project Manager", "[REQUIRED]", "PMP, 12+ yrs", "100%"],
            ["Technical Lead", "[REQUIRED]", "AWS SA Pro, 10+ yrs", "100%"],
            ["Senior Developer (x3)", "[SUGGESTED]", "5+ yrs each", "100%"],
            ["QA Lead", "[SUGGESTED]", "ISTQB, 8+ yrs", "100%"],
            ["DevOps Engineer", "[SUGGESTED]", "AWS, Terraform", "50%"],
            ["HIPAA Compliance SME", "[REQUIRED]", "CHPS certified", "25%"],
            ["UX Designer", "[SUGGESTED]", "Healthcare UX", "50%"],
          ],
        },
        {
          type: "placeholder",
          text: "Named key personnel for Project Manager, Technical Lead, and HIPAA SME with full bios",
          placeholderTier: "REQUIRED",
        },
        {
          type: "placeholder",
          text: "Organizational chart diagram",
          placeholderTier: "SUGGESTED",
        },
      ],
    },
    {
      sectionNumber: "7",
      title: "Past Performance",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Case Study: Regional Hospital EHR Integration",
        },
        {
          type: "paragraph",
          text: "**Client**: Major Regional Hospital Network (450-bed facility)\n**Contract**: T&M, $2.1M, 2024-2025\n**Team**: 8 engineers over 10 months",
        },
        {
          type: "paragraph",
          text: "Integrated 8 legacy clinical systems into a unified EHR platform, achieving **99.99% uptime** and **40% reduction in data retrieval time**. Achieved full HIPAA compliance with zero audit findings.",
        },
        {
          type: "placeholder",
          text: "Reference contact name, title, phone, and email for this case study",
          placeholderTier: "REQUIRED",
        },
        {
          type: "placeholder",
          text: "Add a second healthcare case study — client is in health authority sector",
          placeholderTier: "SUGGESTED",
        },
        {
          type: "placeholder",
          text: "Add a third case study demonstrating data migration experience",
          placeholderTier: "OPTIONAL",
        },
      ],
    },
    {
      sectionNumber: "8",
      title: "Pricing Summary",
      content: [
        {
          type: "paragraph",
          text: "Based on the RFP's T&M pricing model requirement, we propose the following rate structure:",
        },
        {
          type: "placeholder",
          text: "Actual hourly rates per labor category",
          placeholderTier: "REQUIRED",
        },
        {
          type: "placeholder",
          text: "Total proposed price with phase-by-phase breakdown",
          placeholderTier: "REQUIRED",
        },
        {
          type: "placeholder",
          text: "Payment milestone schedule aligned to project phases",
          placeholderTier: "REQUIRED",
        },
      ],
    },
  ],
  complianceChecklist: {
    items: [
      {
        rfpRef: "3.1",
        requirement: "System shall support 10,000 concurrent users",
        proposalSection: "Section 4 — Technical Approach",
        status: "COMPLIANT",
        notes: "AWS auto-scaling architecture supports 50K+ concurrent users",
      },
      {
        rfpRef: "3.2",
        requirement: "Must be HIPAA compliant",
        proposalSection: "Section 4 — Technical Approach",
        status: "COMPLIANT",
        notes: "AWS GovCloud + HITRUST CSF certification",
      },
      {
        rfpRef: "4.1",
        requirement: "Project Manager must be PMP certified",
        proposalSection: "Section 6 — Staffing Plan",
        status: "PARTIAL",
        notes: "Placeholder for named PM — must be PMP certified",
      },
      {
        rfpRef: "5.1",
        requirement: "Provide 3 past performance references",
        proposalSection: "Section 7 — Past Performance",
        status: "PARTIAL",
        notes: "1 of 3 case studies populated",
      },
      {
        rfpRef: "6.1",
        requirement: "Pricing in T&M format with labor categories",
        proposalSection: "Section 8 — Pricing Summary",
        status: "NON-COMPLIANT",
        notes: "Pricing placeholders — requires human input",
      },
    ],
  },
};

async function main() {
  console.log("Generating sample proposal .docx...\n");

  try {
    const result = await generateDocx(sampleProposal);
    console.log("Success!");
    console.log(`  File: ${result.filePath}`);
    console.log(`  Size: ${result.fileSize}`);
    console.log(`  Placeholders:`);
    console.log(`    REQUIRED:  ${result.placeholderSummary.required}`);
    console.log(`    SUGGESTED: ${result.placeholderSummary.suggested}`);
    console.log(`    OPTIONAL:  ${result.placeholderSummary.optional}`);
    console.log(`\nOpen the file in Word or LibreOffice to verify formatting.`);
  } catch (error) {
    console.error("Failed:", error);
    process.exit(1);
  }
}

main();
