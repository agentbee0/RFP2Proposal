/**
 * Test: Generate traceability matrix for Acme Corp CRM RFP
 * Maps RFP sections to proposal sections based on the test-acme-rfp.ts proposal
 */

import { generateMatrix } from "./src/matrix-builder.js";
import type { GenerateMatrixInput } from "./src/types.js";
import { resolve } from "node:path";

const input: GenerateMatrixInput = {
  outputPath: resolve("../../output/AcmeCorp-CRM-Traceability-Matrix.xlsx"),
  metadata: {
    rfpTitle: "Enterprise CRM Platform Implementation",
    rfpReference: "AC-RFP-2026-CRM-001",
    proposalTitle: "Technical Proposal for Enterprise CRM Platform",
    companyName: "TechSolutions Inc.",
    clientName: "Acme Corporation",
    date: "February 26, 2026",
    version: "1.0",
  },
  rows: [
    // Section 1: Introduction & Background
    {
      rfpSection: { sectionNumber: "1.0", title: "Introduction", pageNumber: 1 },
      proposalSection: { sectionNumber: "1", title: "Cover Letter" },
      description: "RFP introduction and purpose mapped to proposal cover letter and transmittal",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "1.1", title: "Company Background", pageNumber: 2 },
      proposalSection: { sectionNumber: "2", title: "Executive Summary" },
      description: "Acme Corporation background and context addressed in executive summary",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "1.2", title: "Project Objectives", pageNumber: 3 },
      proposalSection: { sectionNumber: "3", title: "Understanding of Requirements" },
      description: "CRM platform objectives restated and expanded in requirements understanding",
      coverageStatus: "FULLY_ADDRESSED",
    },

    // Section 2: Scope of Work
    {
      rfpSection: { sectionNumber: "2.0", title: "Scope of Work", pageNumber: 5 },
      proposalSection: { sectionNumber: "3", title: "Understanding of Requirements" },
      description: "Overall scope of CRM implementation including 5 phases",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "2.1", title: "Sales Management Module", pageNumber: 6 },
      proposalSection: { sectionNumber: "4", title: "Technical Approach" },
      description: "Lead tracking, opportunity management, and pipeline analytics requirements",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "2.2", title: "Customer Service Module", pageNumber: 7 },
      proposalSection: { sectionNumber: "4", title: "Technical Approach" },
      description: "Ticketing system, SLA tracking, and knowledge base requirements",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "2.3", title: "Marketing Automation Module", pageNumber: 8 },
      proposalSection: { sectionNumber: "4", title: "Technical Approach" },
      description: "Campaign management, email automation, and ROI tracking",
      coverageStatus: "PARTIALLY_ADDRESSED",
      notes: "Placeholder for specific marketing automation tool integration details",
    },
    {
      rfpSection: { sectionNumber: "2.4", title: "Analytics & Reporting", pageNumber: 9 },
      proposalSection: { sectionNumber: "4", title: "Technical Approach" },
      description: "Real-time dashboards, custom reports, and predictive analytics capabilities",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "2.5", title: "Data Migration", pageNumber: 10 },
      proposalSection: { sectionNumber: "4", title: "Technical Approach" },
      description: "Migration from legacy systems including Salesforce Classic and custom databases",
      coverageStatus: "PARTIALLY_ADDRESSED",
      notes: "Migration volumes and detailed mapping strategy need specifics from client",
    },

    // Section 3: Technical Requirements
    {
      rfpSection: { sectionNumber: "3.0", title: "Technical Requirements", pageNumber: 12 },
      proposalSection: { sectionNumber: "4", title: "Technical Approach" },
      description: "Overall technical architecture and platform requirements",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "3.1", title: "System Architecture", pageNumber: 12 },
      proposalSection: { sectionNumber: "4", title: "Technical Approach" },
      description: "Cloud-native microservices architecture with 99.9% SLA requirement",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "3.2", title: "Integration Requirements", pageNumber: 14 },
      proposalSection: { sectionNumber: "4", title: "Technical Approach" },
      description: "ERP, email, telephony, and social media integration specifications",
      coverageStatus: "PARTIALLY_ADDRESSED",
      notes: "Specific API endpoint details and integration middleware to be confirmed",
    },
    {
      rfpSection: { sectionNumber: "3.3", title: "Security & Compliance", pageNumber: 15 },
      proposalSection: { sectionNumber: "4", title: "Technical Approach" },
      description: "SOC 2 Type II, GDPR, CCPA compliance and data encryption requirements",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "3.4", title: "Performance Requirements", pageNumber: 16 },
      proposalSection: { sectionNumber: "4", title: "Technical Approach" },
      description: "10,000 concurrent users, sub-2s response time, 99.9% uptime",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "3.5", title: "Mobile Access", pageNumber: 17 },
      proposalSection: { sectionNumber: "4", title: "Technical Approach" },
      description: "Native mobile apps for iOS and Android with offline sync",
      coverageStatus: "PARTIALLY_ADDRESSED",
      notes: "Placeholder for specific mobile development framework and offline strategy details",
    },

    // Section 4: Project Management & Timeline
    {
      rfpSection: { sectionNumber: "4.0", title: "Project Timeline", pageNumber: 18 },
      proposalSection: { sectionNumber: "5", title: "Management Approach" },
      description: "18-month implementation timeline with 5 phases",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "4.1", title: "Project Governance", pageNumber: 19 },
      proposalSection: { sectionNumber: "5", title: "Management Approach" },
      description: "Steering committee, project management office, and reporting structure",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "4.2", title: "Risk Management", pageNumber: 20 },
      proposalSection: { sectionNumber: "5", title: "Management Approach" },
      description: "Risk identification, mitigation strategies, and escalation procedures",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "4.3", title: "Change Management", pageNumber: 21 },
      proposalSection: { sectionNumber: "5", title: "Management Approach" },
      description: "Organizational change management and user adoption strategy",
      coverageStatus: "PARTIALLY_ADDRESSED",
      notes: "Change management framework outlined; specific training curriculum details pending",
    },

    // Section 5: Personnel Requirements
    {
      rfpSection: { sectionNumber: "5.0", title: "Personnel Requirements", pageNumber: 22 },
      proposalSection: { sectionNumber: "6", title: "Staffing Plan" },
      description: "Key personnel roles, qualifications, and team structure",
      coverageStatus: "PARTIALLY_ADDRESSED",
      notes: "Team structure defined; specific named personnel to be confirmed",
    },
    {
      rfpSection: { sectionNumber: "5.1", title: "Project Manager Qualifications", pageNumber: 22 },
      proposalSection: { sectionNumber: "6", title: "Staffing Plan" },
      description: "PMP-certified PM with 10+ years CRM implementation experience",
      coverageStatus: "PARTIALLY_ADDRESSED",
      notes: "REQUIRED placeholder: Named Project Manager with resume needed",
    },
    {
      rfpSection: { sectionNumber: "5.2", title: "Technical Lead Qualifications", pageNumber: 23 },
      proposalSection: { sectionNumber: "6", title: "Staffing Plan" },
      description: "Solution architect with cloud-native CRM platform expertise",
      coverageStatus: "PARTIALLY_ADDRESSED",
      notes: "REQUIRED placeholder: Named Technical Lead with resume needed",
    },

    // Section 6: Past Performance
    {
      rfpSection: { sectionNumber: "6.0", title: "Past Performance", pageNumber: 24 },
      proposalSection: { sectionNumber: "7", title: "Past Performance" },
      description: "3 relevant CRM implementations within the last 5 years",
      coverageStatus: "PARTIALLY_ADDRESSED",
      notes: "Case study framework in place; specific client names and metrics to be filled",
    },
    {
      rfpSection: { sectionNumber: "6.1", title: "References", pageNumber: 25 },
      proposalSection: { sectionNumber: "7", title: "Past Performance" },
      description: "3 client references with contact information",
      coverageStatus: "NOT_ADDRESSED",
      notes: "REQUIRED: Client references with contact details must be provided",
    },

    // Section 7: Pricing
    {
      rfpSection: { sectionNumber: "7.0", title: "Pricing Structure", pageNumber: 26 },
      proposalSection: { sectionNumber: "8", title: "Pricing Summary" },
      description: "Fixed-price and T&M pricing for 5 project phases",
      coverageStatus: "PARTIALLY_ADDRESSED",
      notes: "Pricing framework and approach defined; specific dollar amounts are REQUIRED placeholders",
    },
    {
      rfpSection: { sectionNumber: "7.1", title: "Labor Rate Schedule", pageNumber: 27 },
      proposalSection: { sectionNumber: "8", title: "Pricing Summary" },
      description: "Fully-burdened hourly rates by labor category",
      coverageStatus: "NOT_ADDRESSED",
      notes: "REQUIRED: Detailed rate card with labor categories and hourly rates needed",
    },
    {
      rfpSection: { sectionNumber: "7.2", title: "Travel & ODC Estimates", pageNumber: 27 },
      proposalSection: { sectionNumber: "8", title: "Pricing Summary" },
      description: "Travel costs for on-site discovery and training phases",
      coverageStatus: "NOT_ADDRESSED",
      notes: "REQUIRED: Travel cost estimates based on anticipated on-site visits",
    },

    // Section 8: Evaluation Criteria
    {
      rfpSection: { sectionNumber: "8.0", title: "Evaluation Criteria", pageNumber: 28 },
      proposalSection: { sectionNumber: "9", title: "Compliance Matrix" },
      description: "Evaluation factors and scoring weights for proposal assessment",
      coverageStatus: "FULLY_ADDRESSED",
    },

    // Section 9: Submission Requirements
    {
      rfpSection: { sectionNumber: "9.0", title: "Submission Requirements", pageNumber: 29 },
      proposalSection: { sectionNumber: "9", title: "Compliance Matrix" },
      description: "Page limits, format, deadline, and delivery instructions",
      coverageStatus: "FULLY_ADDRESSED",
    },
    {
      rfpSection: { sectionNumber: "9.1", title: "Page Limitations", pageNumber: 29 },
      proposalSection: { sectionNumber: "9", title: "Compliance Matrix" },
      description: "50-page limit for technical volume, 20-page limit for pricing",
      coverageStatus: "FULLY_ADDRESSED",
      notes: "Page limits tracked in compliance matrix",
    },

    // Section 10: Terms and Conditions
    {
      rfpSection: { sectionNumber: "10.0", title: "Terms and Conditions", pageNumber: 30 },
      proposalSection: { sectionNumber: "10", title: "Appendices" },
      description: "Contract terms, insurance, and legal requirements",
      coverageStatus: "PARTIALLY_ADDRESSED",
      notes: "Legal boilerplate included; specific insurance certificates to be attached",
    },
    {
      rfpSection: { sectionNumber: "10.1", title: "Insurance Requirements", pageNumber: 31 },
      proposalSection: { sectionNumber: "10", title: "Appendices" },
      description: "$5M professional liability and $2M cyber liability insurance",
      coverageStatus: "NOT_ADDRESSED",
      notes: "REQUIRED: Insurance certificates and proof of coverage must be provided",
    },
  ],
};

async function main() {
  console.log("Generating Acme Corp CRM Traceability Matrix...\n");
  console.log(`RFP: ${input.metadata.rfpReference}`);
  console.log(`Client: ${input.metadata.clientName}`);
  console.log(`Rows: ${input.rows.length}\n`);

  const result = await generateMatrix(input);

  console.log("SUCCESS!\n");
  console.log(`File: ${result.filePath}`);
  console.log(`Size: ${result.fileSize}\n`);
  console.log("Coverage Summary:");
  console.log(`  Fully Addressed:     ${result.coverageSummary.fullyAddressed}`);
  console.log(`  Partially Addressed: ${result.coverageSummary.partiallyAddressed}`);
  console.log(`  Not Addressed:       ${result.coverageSummary.notAddressed}`);
  console.log(`  Not Applicable:      ${result.coverageSummary.notApplicable}`);
  console.log(`  Overall Coverage:    ${result.coverageSummary.coveragePercentage.toFixed(1)}%\n`);
  console.log("Open in Excel to review formatting, filters, and coverage summary.");
}

main().catch(console.error);
