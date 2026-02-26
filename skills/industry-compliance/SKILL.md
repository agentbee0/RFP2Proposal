---
name: industry-compliance
description: >
  Detects industry-specific regulatory frameworks from RFP content and
  provides appropriate compliance language, certification requirements,
  and technical controls for proposals. Covers healthcare (HIPAA),
  finance (SOX, PCI-DSS), government (FISMA, FedRAMP, CMMC),
  education (FERPA), and privacy (GDPR, CCPA). Activates when RFP
  involves regulated industries.
---

# Industry Compliance — Regulatory Framework Detection and Response

When analyzing an RFP, detect regulatory frameworks from keywords and add appropriate compliance language to the proposal.

---

## Framework Detection

Scan the RFP text for these keyword patterns to detect applicable frameworks:

### Healthcare — HIPAA
**Trigger keywords**: "protected health information", "PHI", "covered entity", "business associate", "HIPAA", "health insurance portability", "ePHI", "healthcare data", "medical records", "patient data"

**When detected, proposals should include**:
- Confirmation of HIPAA compliance capability
- Business Associate Agreement (BAA) willingness
- PHI handling procedures: encryption at rest (AES-256) and in transit (TLS 1.2+)
- Access controls: role-based access, minimum necessary principle, audit logging
- Breach notification procedures (within 60 days per HIPAA)
- HIPAA Security Rule administrative, physical, and technical safeguards
- Training program for all personnel handling PHI

**Certifications to reference**: HITRUST CSF, SOC 2 Type II with HIPAA criteria

**Placeholder if not certified**: `[REQUIRED: HIPAA compliance certification or attestation details]`

### Finance — SOX (Sarbanes-Oxley)
**Trigger keywords**: "SOX", "Sarbanes-Oxley", "internal controls", "financial reporting", "audit trail", "segregation of duties", "ITGC"

**When detected, proposals should include**:
- IT General Controls (ITGC) framework
- Segregation of duties in system design
- Comprehensive audit trail capabilities
- Change management controls
- Access management and periodic review
- Data integrity controls
- Backup and recovery procedures meeting SOX requirements

### Finance — PCI-DSS
**Trigger keywords**: "PCI", "payment card", "cardholder data", "credit card", "PCI-DSS", "card data environment", "CDE"

**When detected, proposals should include**:
- PCI-DSS compliance level and scope
- Cardholder Data Environment (CDE) segmentation strategy
- Encryption standards for card data
- Vulnerability management program
- Regular penetration testing commitment
- Incident response plan for card data breaches

**Certifications to reference**: PCI-DSS Level 1/2/3/4, QSA assessment

### Government — FISMA / NIST 800-53
**Trigger keywords**: "FISMA", "NIST 800-53", "federal information", "ATO", "Authority to Operate", "security categorization", "FIPS"

**When detected, proposals should include**:
- NIST 800-53 control family coverage
- Security categorization approach (FIPS 199)
- System Security Plan (SSP) development
- Plan of Action and Milestones (POA&M) management
- Continuous monitoring strategy
- Incident response aligned to US-CERT requirements
- FIPS 140-2/140-3 validated encryption

### Government — FedRAMP
**Trigger keywords**: "FedRAMP", "federal risk", "cloud authorization", "P-ATO", "JAB", "3PAO"

**When detected, proposals should include**:
- FedRAMP authorization level (Low, Moderate, High)
- 3PAO assessment readiness
- Continuous monitoring program per FedRAMP requirements
- ConMon deliverables (monthly vulnerability scans, annual assessments)
- Incident response within FedRAMP timelines

**Certifications to reference**: FedRAMP Authorized, FedRAMP Ready, FedRAMP In Process

**Placeholder if not authorized**: `[REQUIRED: FedRAMP authorization status and timeline to achieve]`

### Defense — CMMC / DFARS
**Trigger keywords**: "CMMC", "cybersecurity maturity", "CUI", "controlled unclassified", "DFARS 252.204-7012", "NIST 800-171"

**When detected, proposals should include**:
- CMMC level targeted (Level 1, 2, or 3)
- NIST 800-171 self-assessment score
- CUI handling procedures
- SPRS (Supplier Performance Risk System) score
- Incident reporting procedures (72-hour requirement per DFARS)
- Flow-down requirements to subcontractors

### Education — FERPA
**Trigger keywords**: "FERPA", "student records", "educational records", "student data", "Family Educational Rights"

**When detected, proposals should include**:
- FERPA compliance statement
- Student data protection measures
- Parental consent handling (for K-12)
- Directory information handling
- Data sharing limitations and school official exception requirements

### Privacy — GDPR
**Trigger keywords**: "GDPR", "General Data Protection", "data subject", "right to erasure", "data protection officer", "DPO", "data processing agreement", "EU data"

**When detected, proposals should include**:
- Data Processing Agreement (DPA) willingness
- Data subject rights implementation (access, rectification, erasure, portability)
- Privacy by Design and by Default approach
- Data Protection Impact Assessment (DPIA) capability
- Cross-border data transfer mechanisms (SCCs, adequacy decisions)
- Breach notification within 72 hours per GDPR
- Data Protection Officer appointment (or justification for not having one)

### Privacy — CCPA/CPRA
**Trigger keywords**: "CCPA", "CPRA", "California Consumer Privacy", "California Privacy Rights", "do not sell", "opt-out"

**When detected, proposals should include**:
- Consumer rights implementation (know, delete, opt-out, correct)
- Data inventory and mapping
- Privacy policy requirements
- Service provider contractual requirements
- Sensitive personal information handling

### Accessibility — Section 508 / WCAG
**Trigger keywords**: "Section 508", "WCAG", "accessibility", "ADA compliance", "assistive technology", "screen reader", "VPAT"

**When detected, proposals should include**:
- WCAG 2.1 Level AA compliance commitment (or as specified)
- Voluntary Product Accessibility Template (VPAT) availability
- Accessibility testing methodology (automated + manual + assistive technology)
- Remediation process for accessibility defects
- Training for development team on accessibility standards
- Ongoing accessibility monitoring and reporting

### Export Controls — ITAR/EAR
**Trigger keywords**: "ITAR", "EAR", "export controlled", "International Traffic in Arms", "Export Administration", "defense article"

**When detected, proposals should include**:
- Export control compliance program
- Personnel screening for citizenship/residency requirements
- Data handling for export-controlled information
- Facility security for controlled items
- Technology Control Plan (TCP) if required

---

## Multiple Framework Handling

When an RFP triggers multiple frameworks (e.g., a healthcare government project requiring HIPAA + FedRAMP + Section 508):

1. Address each framework separately in the Technical Approach section
2. Identify overlapping controls (e.g., encryption requirements shared between HIPAA and FedRAMP)
3. Present a unified compliance approach that satisfies all frameworks simultaneously
4. Note any conflicts between frameworks and how they're resolved

## Compliance Language Tone

- Be **specific**, not vague ("AES-256 encryption at rest" not "industry-standard encryption")
- Reference **specific control numbers** when possible (e.g., "NIST 800-53 AC-2, AC-3, AC-6")
- State **what you do**, not just what you commit to doing
- If a certification is in progress, state the timeline honestly rather than overpromising
