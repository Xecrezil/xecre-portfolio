# Nexus Product Brief

**Version:** 1.0  
**Status:** Product Discovery Complete  
**Author:** Bazil Marantan  
**Project Codename:** Nexus

---

# Executive Summary

Nexus is a university-wide academic lifecycle platform designed to transform the way higher education institutions manage, develop, preserve, and continuously build upon student-led research and capstone projects.

Rather than viewing a capstone project as a requirement that begins with a proposal and ends after the final defense, Nexus recognizes research as part of an ongoing institutional knowledge cycle. Every completed project becomes a foundation for future innovation, allowing succeeding students to discover existing work, learn from previous implementations, avoid unnecessary duplication, and extend ideas into increasingly meaningful solutions.

The platform addresses long-standing inefficiencies observed throughout the capstone journey, including fragmented communication, inconsistent documentation, limited research visibility, adviser coordination challenges, and the absence of a centralized academic repository. By integrating proposal management, project collaboration, institutional archiving, and research discovery into a single ecosystem, Nexus aims to improve both the student experience and the university's ability to preserve and cultivate intellectual capital.

Nexus is envisioned not merely as a software system, but as infrastructure that supports a sustainable culture of academic innovation.

---

# Product Vision

To become the institutional knowledge ecosystem that empowers every student research project to inspire, inform, and accelerate future innovation.

Nexus envisions a university where academic knowledge does not disappear after graduation, but instead compounds over time through structured preservation, discovery, collaboration, and continuous improvement.

---

# Mission

Nexus exists to centralize the complete academic lifecycle of capstone research—from idea conception to long-term preservation—through a platform that promotes transparency, collaboration, institutional memory, and continuous knowledge sharing.

By reducing administrative friction and improving research accessibility, Nexus enables students, faculty members, and academic leaders to focus more on innovation than process.

---

# Why Nexus Exists

Most universities possess decades of student research representing thousands of hours of engineering, design, documentation, experimentation, and collaboration.

Yet despite this tremendous investment, much of that knowledge becomes inaccessible shortly after graduation.

Completed projects are commonly archived only as physical manuscripts, source code remains privately owned by student developers, presentation materials become scattered across temporary collaboration platforms, and succeeding batches often begin their research with little understanding of what has already been accomplished.

As a consequence, students unknowingly propose duplicate ideas, faculty repeatedly answer the same questions every academic year, and institutions gradually lose the opportunity to transform previous research into future innovation.

Nexus exists to bridge these disconnected stages of the academic process and transform isolated capstone projects into an interconnected body of institutional knowledge.

---

# Origin Story

Nexus was conceived through firsthand experience with the capstone process as both a student developer and student leader.

During the Systems Analysis and Design course that preceded the official Capstone Project subject, the proposal process exposed several systemic challenges. Students struggled to obtain copies of previous capstone documentation, visibility into ongoing proposals was limited, and duplicate titles were often discovered only after significant development effort had already been invested.

The challenges extended beyond project selection.

Group formation policies frequently resulted in uneven technical distribution among teams. Adviser availability varied considerably. Collaboration practices depended almost entirely on individual initiative, with modern development tools such as GitHub, Figma, and Notion being self-taught rather than institutionally supported.

The turning point came during the proposal defense.

A duplicate system proposal from another block was discovered only after a functional prototype had already been developed. The realization that weeks of technical work could become invalid because of fragmented institutional knowledge highlighted a much larger issue than duplicate titles alone.

The problem was not simply inadequate proposal validation.

The problem was the absence of a structured knowledge ecosystem.

Further reflection revealed that this issue extended throughout the entire capstone lifecycle. Research documentation, software source code, presentation materials, revision history, adviser consultations, and implementation knowledge were scattered across numerous disconnected platforms and individuals. Future students frequently relied on personal connections with alumni rather than institutional resources to continue previous work or gather inspiration.

Nexus emerged from the belief that universities should preserve knowledge with the same commitment they devote to creating it.

Every completed capstone should become an accessible resource that informs, inspires, and accelerates the next generation of researchers.

---

# Product Philosophy

Nexus is built upon the belief that software should strengthen academic processes without replacing the expertise, judgment, and mentorship of educators.

Technology should simplify administration while amplifying opportunities for collaboration, learning, and innovation.

Rather than introducing unnecessary complexity, Nexus seeks to organize information that already exists, standardize workflows that are currently fragmented, and preserve knowledge that would otherwise be lost.

The platform is designed around several guiding principles.

## Guiding Principles

### Knowledge Should Accumulate

Research should not disappear after graduation.

Each completed project should increase the collective knowledge available to future students and faculty members.

Institutional memory should become stronger with every graduating batch.

---

### Transparency Reduces Uncertainty

Students perform better when expectations, workflows, approval status, revisions, and project progress are visible.

Clear information reduces anxiety while improving accountability for everyone involved.

---

### Collaboration Requires Structure

Successful collaboration depends not only on communication but also on clearly defined responsibilities, milestones, consultation records, and documented decisions.

Nexus supports collaboration through organization rather than constant supervision.

---

### Institutional Memory Matters

Universities invest significant time and resources into every completed capstone.

Those investments should continue generating value long after individual students graduate.

Knowledge preservation is therefore treated as a core institutional responsibility rather than an administrative afterthought.

---

### Technology Should Augment, Not Replace

Nexus is intended to complement existing development tools rather than replace them.

Where specialized platforms already excel, Nexus integrates with their outputs instead of duplicating their functionality.

---

# Product Principles

The following principles guide future product decisions.

- Every feature should improve the long-term value of institutional knowledge.
- Students should spend more time innovating than searching for information.
- Administrative transparency should reduce uncertainty throughout the capstone lifecycle.
- Historical research should remain discoverable and reusable.
- Product decisions should prioritize sustainability over feature quantity.

---

# Non-Goals

To maintain a focused product scope, Nexus intentionally avoids responsibilities already fulfilled effectively by other systems.

Nexus is **not** intended to replace:

- GitHub for software version control.
- Figma for interface and design collaboration.
- Microsoft Teams or similar communication platforms.
- Learning Management Systems (LMS).
- Student Information Systems.
- University enrollment systems.
- Payroll or financial management platforms.
- Existing office productivity applications.

Instead, Nexus serves as the academic layer connecting these tools throughout the research lifecycle.

---

# Target Users

Nexus serves multiple user groups throughout the university ecosystem.

## Primary Users

- Students
- Student Research Groups
- Research Advisers
- Subject Instructors
- Panelists

## Secondary Users

- Program Chairs
- College Deans
- Research Coordinators
- Department Administrators
- University Library Personnel

## Long-Term Beneficiaries

- Future Students
- Alumni
- Researchers
- Academic Organizations
- Partner Institutions

---

# Success Metrics

Nexus will be considered successful when it enables universities to:

- Reduce duplicate capstone proposals before development begins.
- Increase visibility into ongoing proposal reviews.
- Standardize adviser and project workflows.
- Preserve completed research in a searchable digital repository.
- Improve research discoverability across academic years.
- Encourage continuation and enhancement of previous projects rather than unnecessary duplication.
- Transform institutional knowledge into a continuously expanding academic asset.

---

# Current Workflow Analysi

## Overview

The following workflow analysis documents the existing capstone process based on firsthand student experience and institutional observation.

Rather than describing an idealized academic process, this section captures how capstone projects are commonly initiated, evaluated, developed, defended, and preserved within the university environment. The objective is not to criticize existing practices, but to understand the operational realities that shaped the conception of Nexus.

Each stage identifies the primary stakeholders, expected outputs, operational pain points, and opportunities for improvement. These findings serve as the foundation for the product's architecture and scope.

---

# Step 0 — Capstone Preparation

## Purpose

Before students formally enroll in the Capstone Project course, they undergo an initial preparation phase that begins during the Systems Analysis and Design subject.

Although unofficial, this stage effectively functions as "Capstone Project 0," as it is where research ideas begin to take shape, teams are formed, possible clients are identified, and proposal preparation begins.

Many of the decisions made during this phase significantly influence the success of the remaining capstone journey.

---

## Objectives

- Explore potential project ideas.
- Form research groups.
- Gather initial references.
- Identify potential clients or beneficiaries.
- Prepare for proposal writing.
- Understand institutional expectations.

---

## Primary Stakeholders

- Students
- Subject Instructor
- Program Chair
- Prospective Advisers

---

## Inputs

Students commonly relied upon:

- Personal project ideas
- Internet research
- Previous academic experiences
- Industry observations
- Business interviews
- Informal discussions with senior students

Noticeably absent were reliable institutional resources that documented previous capstone work.

---

## Activities

Students independently attempted to:

- Brainstorm project ideas.
- Search for previous capstone titles.
- Gather documentation from senior batches.
- Identify businesses or organizations willing to participate.
- Begin Chapter 1 documentation.
- Discuss potential technologies.
- Form research groups.

Most of these activities occurred outside any centralized university platform.

---

## Outputs

- Initial project concepts
- Research groups
- Draft proposal ideas
- Potential clients
- Early documentation

---

## Pain Points

### Limited Research Visibility

Students had little access to previous capstone documentation.

Most research materials were obtained informally from senior students, if they were available at all.

Without institutional visibility, students frequently proposed ideas that unknowingly resembled previous work.

---

### Knowledge Silos

Previous research existed, but discovering it depended almost entirely on personal networks rather than official university resources.

Knowledge transfer therefore became inconsistent across academic batches.

---

### Time Constraints

Business interviews, requirements gathering, and proposal preparation all occurred within a relatively short academic window.

Students often prioritized completing deliverables over thoroughly validating their ideas.

---

### Uneven Preparation

Students entered the proposal stage with varying levels of technical experience.

Many development tools—including GitHub, Figma, Notion, and modern collaboration workflows—were self-taught rather than introduced through formal coursework.

---

## Opportunities

This stage presents opportunities to improve:

- Research discovery
- Project inspiration
- Institutional transparency
- Proposal preparation
- Knowledge accessibility
- Technology awareness

---

# Step 1 — Proposal Submission & Title Evaluation

## Purpose

The proposal stage validates whether a student's research idea is academically feasible, sufficiently original, and appropriate for development.

It represents the transition from conceptual ideas into formally recognized capstone projects.

Approval at this stage determines which projects proceed into development.

---

## Objectives

- Validate project feasibility.
- Prevent duplicate research.
- Evaluate academic merit.
- Assign research advisers.
- Approve projects for development.

---

## Primary Stakeholders

- Student Groups
- Subject Instructor
- Faculty Evaluators
- Program Chair
- Research Advisers

---

## Inputs

Typical proposal submissions included:

- Proposed project title
- Project rationale
- Chapter 1 manuscript
- Initial system proposal
- Presentation slides
- Client information
- Feasibility study

---

## Activities

The proposal process generally consisted of:

1. Students preparing proposal documents.
2. Proposal defense presentations.
3. Faculty evaluation.
4. Recommendation of revisions.
5. Title approval or rejection.
6. Adviser assignment.

Groups receiving rejected proposals repeated portions of this process until an acceptable proposal was approved.

---

## Outputs

- Approved proposal
- Rejected proposal
- Revised proposal
- Assigned adviser
- Proposal defense results

---

## Pain Points

### Duplicate Proposal Discovery

Duplicate titles were frequently identified only after considerable planning—or, in some cases, after prototype development had already begun.

The absence of centralized proposal visibility significantly increased this risk.

---

### Adviser Assignment

Adviser selection was inconsistent.

Availability depended upon faculty workload, departmental assignments, and personal preference rather than a transparent allocation process.

Students often competed for adviser availability instead of following a standardized assignment workflow.

---

### Communication Fragmentation

Important announcements, revisions, and scheduling information were distributed through multiple communication channels.

As conversations accumulated, essential information became increasingly difficult to retrieve.

---

### Limited Status Visibility

Proposal progress was difficult to monitor.

Students often relied on verbal updates or manually maintained documents to determine proposal status.

---

### Administrative Tracking

Proposal evaluations, comments, and scoring frequently relied upon paper-based documentation.

Historical review records were therefore difficult to retrieve and analyze.

---

## Opportunities

A centralized platform could provide:

- Proposal submission
- Proposal visibility
- Duplicate similarity detection
- Structured review workflow
- Revision history
- Approval tracking
- Adviser allocation support
- Historical proposal archive

---

# Step 2 — Capstone Development & Adviser Engagement

## Purpose

Following proposal approval, student groups transition into software development, research writing, and adviser consultations.

This stage represents the longest and most collaborative portion of the capstone lifecycle.

Success depends upon effective coordination between students, advisers, and clients.

---

## Objectives

- Develop the approved software solution.
- Produce the complete thesis manuscript.
- Validate project progress.
- Prepare for the final defense.
- Complete institutional requirements.

---

## Primary Stakeholders

- Student Groups
- Research Adviser
- Subject Instructor
- Client Representatives
- External Technical Consultants (when applicable)

---

## Inputs

Development commonly began with:

- Approved proposal
- Assigned adviser
- Development timeline
- Functional requirements
- Research documentation
- Client information

---

## Activities

Typical development activities included:

- Adviser consultations
- Software implementation
- Research writing
- Documentation updates
- Internal testing
- Client validation
- Presentation preparation

Consultations occurred according to adviser availability and varied considerably between research groups.

Some advisers requested complete team participation, while others primarily met with group leaders.

---

## Outputs

- Working software
- Thesis manuscript
- Presentation materials
- Testing documentation
- Deployment package
- Supporting documentation

---

## Pain Points

### Uneven Work Distribution

Student contributions frequently became imbalanced.

Technical implementation often depended heavily upon one or two members, while documentation and supporting tasks varied considerably across teams.

---

### Adviser Availability

Consultation frequency depended largely upon adviser schedules.

Some groups benefited from frequent feedback while others progressed with minimal guidance.

---

### Collaboration Inconsistency

Each research group developed its own collaboration practices.

No standardized platform existed for task management, consultation tracking, or project monitoring.

---

### Version Control Adoption

Modern software engineering practices such as Git-based version control were inconsistently adopted.

Although beneficial, their use depended almost entirely upon individual student initiative.

---

### Documentation Challenges

Research documents underwent numerous revisions.

Tracking these revisions across multiple document versions became increasingly difficult throughout development.

---

### Scope Expansion

As implementation progressed, projects frequently expanded beyond their original proposal.

Additional requirements introduced technical complexity, increased workload, and compressed development timelines.

---

### Communication

Project communication occurred across several messaging platforms without centralized documentation of important decisions.

Institutional knowledge generated during consultations therefore remained largely inaccessible to anyone outside the immediate project team.

---

## Opportunities

Future improvements include:

- Milestone management
- Consultation history
- Adviser scheduling
- Deliverable tracking
- Task ownership
- Progress visualization
- Team accountability
- Document versioning
- Meeting records
- Project dashboards

---

# Step 3 — Final Defense, Evaluation & Knowledge Preservation

## Purpose

The final stage evaluates the completed capstone project while determining whether its knowledge will continue benefiting future students.

Although this stage concludes the academic requirement for graduating students, it represents the beginning of the project's long-term institutional value.

---

## Objectives

- Evaluate completed software.
- Assess student competency.
- Validate research quality.
- Preserve completed academic work.
- Recognize exemplary projects.
- Support future research.

---

## Primary Stakeholders

- Student Groups
- Research Adviser
- Defense Panel
- Program Chair
- College Dean
- External Client
- Future Students
- University Library

---

## Inputs

Final evaluation typically included:

- Functional software
- Thesis manuscript
- Presentation slides
- Source code
- Testing documentation
- Deployment artifacts
- Supporting materials

---

## Activities

The concluding workflow generally consisted of:

1. Final software demonstration.
2. Oral defense.
3. Panel evaluation.
4. Required revisions.
5. Conditional re-defense (where necessary).
6. Final approval.
7. Submission of academic deliverables.

---

## Outputs

- Approved capstone
- Bound thesis
- Digital project files
- Graduation clearance
- Archived documentation
- Institutional records

---

## Pain Points

### Knowledge Preservation

Although physical thesis copies were intended for library storage, digital preservation practices remained inconsistent.

Research frequently became difficult to retrieve after graduation.

---

### Source Code Preservation

Software repositories were rarely standardized.

Future students often depended upon personal relationships with alumni to obtain implementation references.

---

### Discoverability

Completed projects were not easily searchable.

Faculty recommendations relied primarily upon memory rather than institutional records.

---

### Research Continuity

Many projects contained opportunities for further development.

However, the absence of structured discovery mechanisms limited continuation by succeeding batches.

---

### Institutional Analytics

Because project information remained fragmented, departments lacked comprehensive insight into:

- Technology adoption
- Research trends
- Adviser workload
- Proposal duplication
- Institutional research growth

---

## Opportunities

A centralized academic platform could support:

- Digital preservation
- Searchable repository
- Metadata indexing
- Source code linkage
- Alumni project profiles
- Research continuation
- Institutional reporting
- Long-term knowledge management

---

# Workflow Summary

Across all four stages, several recurring patterns emerged.

Information was consistently fragmented across multiple systems, communication channels, and individuals. Knowledge preservation depended largely upon personal initiative rather than institutional processes. Collaboration practices varied considerably between research groups, and administrative transparency often relied upon manual workflows.

These recurring observations revealed that the university's greatest challenge was not simply proposal approval or project development.

Rather, the underlying issue was the absence of a continuous academic knowledge ecosystem.

This realization became the central premise upon which Nexus was conceived.

The following section translates these workflow observations into the product domains that define the platform's overall architecture.

---

# Product Architecture

## Product Overview

Nexus is organized around five primary product domains that collectively support the complete academic lifecycle of a capstone project.

Rather than functioning as separate modules, these domains form an interconnected ecosystem in which information created during one stage naturally supports the next. This architecture reflects the belief that academic knowledge should continuously evolve instead of existing as isolated deliverables.

Each domain addresses a specific institutional responsibility while contributing to a shared repository of academic knowledge.

---

# Academic Knowledge Cycle

Traditional capstone workflows often conclude once students receive final approval and graduate.

Nexus proposes a fundamentally different perspective.

Rather than ending at graduation, each completed project becomes the starting point for future research.

The platform therefore operates around a continuous knowledge cycle.

```text
Discover
     ↓
Conceptualize
     ↓
Propose
     ↓
Develop
     ↓
Evaluate
     ↓
Preserve
     ↓
Inspire
     ↓
Discover
```

Every completed project contributes new knowledge back into the system, allowing future students to build upon previous work instead of repeatedly solving identical problems.

Institutional knowledge therefore compounds over time.

---

# Core Product Domains

## 1. Research Discovery

### Purpose

Research Discovery enables students to understand the existing academic landscape before beginning proposal development.

Instead of relying on informal conversations with alumni or manually requesting copies of previous documentation, students gain structured access to institutional knowledge.

---

### Responsibilities

- Browse completed capstone projects.
- Search previous proposals.
- Explore technologies used in past implementations.
- Identify related research topics.
- Discover potential project extensions.
- Reduce duplicate proposals.

---

### Primary Users

- Students
- Student Researchers
- Advisers
- Faculty Members

---

### Long-Term Vision

As the repository grows, Research Discovery becomes the university's institutional memory, transforming every graduating batch into contributors to future innovation.

---

## 2. Proposal Lifecycle Management

### Purpose

This domain manages the complete journey of a proposal from initial submission through approval or rejection.

Rather than treating proposal evaluation as isolated events, Nexus preserves every review, revision, recommendation, and decision throughout the proposal lifecycle.

---

### Responsibilities

- Proposal submission
- Title registration
- Similarity validation
- Review workflow
- Revision history
- Approval tracking
- Adviser assignment support
- Proposal archiving

---

### Primary Users

- Student Groups
- Program Chair
- Subject Instructor
- Research Advisers
- Faculty Evaluators

---

### Long-Term Vision

Proposal evaluation becomes transparent, traceable, and historically searchable, significantly reducing uncertainty throughout the proposal stage.

---

## 3. Project Workspace

### Purpose

Once a proposal is approved, each project transitions into its own collaborative workspace.

Rather than relying on disconnected productivity tools, Nexus provides institutional visibility into project progress while allowing teams to continue using specialized external development platforms.

---

### Responsibilities

- Project milestones
- Consultation records
- Deliverables
- Progress tracking
- Adviser feedback
- Meeting history
- Task ownership
- Documentation management

---

### Primary Users

- Student Groups
- Research Advisers
- Subject Instructors

---

### Long-Term Vision

The Project Workspace becomes the academic counterpart to professional project management systems while remaining lightweight enough for educational environments.

---

## 4. Academic Repository

### Purpose

The Academic Repository preserves institutional knowledge beyond graduation.

Rather than functioning as simple document storage, the repository organizes completed projects into searchable academic assets.

---

### Responsibilities

- Thesis preservation
- Source code references
- Presentation archives
- Metadata management
- Documentation indexing
- Technology classification
- Repository search

---

### Primary Users

- Future Students
- Faculty
- Program Chairs
- University Library
- Researchers

---

### Long-Term Vision

Every completed capstone becomes permanently discoverable and contributes to an expanding institutional knowledge base.

---

## 5. Academic Intelligence

### Purpose

Academic Intelligence transforms accumulated project information into institutional insights.

Instead of manually reviewing years of research documentation, departments gain visibility into academic trends through structured analytics.

---

### Responsibilities

- Research trend analysis
- Technology adoption reports
- Proposal statistics
- Adviser workload summaries
- Department analytics
- Accreditation support
- Institutional reporting

---

### Primary Users

- Program Chairs
- Department Administrators
- College Deans
- Research Committees

---

### Long-Term Vision

Decision-making becomes evidence-based through historical academic data rather than anecdotal observation.

---

# Supporting Initiatives

While not considered core operational domains, the following initiatives represent long-term strategic directions for the platform.

## Community & Innovation

Future versions of Nexus may foster stronger academic communities through:

- Outstanding project showcases
- Alumni engagement
- Research continuation initiatives
- Innovation programs
- Cross-disciplinary collaboration
- Industry partnerships

These initiatives extend the value of the platform beyond project management by encouraging a culture of continuous innovation.

---

# Product Scope

Clearly defining scope ensures that Nexus remains focused on solving the problems it was designed to address.

---

## In Scope

Nexus is intended to support:

- Research discovery
- Proposal management
- Adviser engagement
- Project collaboration
- Academic repositories
- Consultation history
- Project milestones
- Deliverable management
- Metadata preservation
- Institutional analytics
- Long-term research preservation

---

## Out of Scope

Nexus is not intended to replace systems already designed for unrelated university operations.

These include:

- Student enrollment
- Learning Management Systems (LMS)
- Payroll
- Human Resources
- Accounting
- Tuition management
- Library management systems
- Email platforms
- Instant messaging applications
- Software version control platforms

Whenever practical, Nexus should integrate with these systems rather than duplicate their responsibilities.

---

# Product Success Metrics

The success of Nexus should be evaluated through measurable institutional improvements rather than software adoption alone.

Examples include:

## Student Experience

- Reduced duplicate proposals
- Faster proposal validation
- Improved adviser accessibility
- Increased research discoverability
- Improved collaboration transparency

---

## Faculty Experience

- Reduced administrative overhead
- Improved proposal visibility
- Easier consultation tracking
- Better workload distribution
- More consistent documentation

---

## Institutional Impact

- Growth of searchable academic repository
- Increased project continuation across academic years
- Higher research reuse
- Improved accreditation evidence
- Stronger institutional knowledge preservation

---

# Conceptual Product Architecture

At the highest level, Nexus operates as an interconnected ecosystem rather than a collection of isolated modules.

```text
                Research Discovery
                        │
                        ▼
         Proposal Lifecycle Management
                        │
                        ▼
             Project Workspace
                        │
                        ▼
             Final Defense & Approval
                        │
                        ▼
              Academic Repository
                        │
                        ▼
             Academic Intelligence
                        │
                        ▼
             Research Discovery
```

Each domain contributes information to the next, creating a continuous academic knowledge cycle.

Rather than ending with project completion, every completed capstone strengthens the discovery process for future researchers.

This cyclical architecture represents the defining characteristic of Nexus and distinguishes it from conventional capstone management systems that conclude their responsibilities once projects receive final approval.

---

# Transition to Solution Design

The preceding sections define **what** Nexus is intended to accomplish and **why** it exists.

The remaining sections focus on **how** the product can be realized through a conceptual domain model, a phased implementation strategy, and a long-term product roadmap.

These serve as the bridge between product discovery and future software engineering activities.

---

# Conceptual Domain Model

## Purpose

The Conceptual Domain Model identifies the primary business entities that define Nexus. These entities represent the language of the product rather than its technical implementation. They are intentionally technology-agnostic and are not equivalent to database tables or application models.

Establishing a shared domain vocabulary ensures that future design, development, and documentation remain consistent regardless of implementation details.

---

## Core Domain Entities

### Student

Represents an individual enrolled in an academic program who participates in research activities.

#### Responsibilities

- Join research groups
- Submit proposals
- Participate in capstone development
- Receive adviser feedback
- Contribute to research artifacts

---

### Student Group

Represents the official research team responsible for developing a capstone project.

#### Responsibilities

- Maintain project ownership
- Coordinate development
- Submit deliverables
- Schedule consultations
- Participate in proposal and final defenses

---

### Proposal

Represents the formal submission requesting approval to develop a capstone project.

#### Responsibilities

- Store title information
- Track proposal status
- Preserve revision history
- Record evaluation results
- Link approved proposals to projects

Possible proposal states include:

- Draft
- Submitted
- Under Review
- Revision Required
- Approved
- Rejected
- Archived

---

### Project

Represents an approved capstone undergoing active development.

#### Responsibilities

- Manage milestones
- Track development progress
- Organize project documentation
- Record adviser consultations
- Maintain project deliverables

---

### Research Adviser

Represents the faculty member responsible for mentoring a project throughout development.

#### Responsibilities

- Review progress
- Conduct consultations
- Provide recommendations
- Validate milestones
- Guide research quality

---

### Consultation

Represents an official adviser meeting.

#### Responsibilities

- Record meeting summaries
- Capture recommendations
- Assign follow-up actions
- Preserve consultation history

---

### Defense

Represents an academic evaluation event.

Examples include:

- Proposal Defense
- Midterm Review
- Final Defense
- Re-defense

Each defense contains:

- Evaluation
- Panel comments
- Scores
- Required revisions
- Final verdict

---

### Research Artifact

Represents any output generated throughout the capstone lifecycle.

Examples include:

- Thesis manuscript
- Presentation slides
- User manual
- Testing documentation
- Technical diagrams
- Images
- Demonstration videos

---

### Repository Entry

Represents the preserved institutional record of a completed capstone.

A Repository Entry aggregates:

- Project metadata
- Technologies used
- Researchers
- Adviser
- Research documents
- Presentation files
- Source code references
- Keywords
- Abstract
- Publication year

Repository Entries form the foundation of Nexus's long-term knowledge base.

---

# Entity Relationships

At a conceptual level, Nexus follows the relationships below.

```text
Student
    │
belongs to
    │
Student Group
    │
submits
    │
Proposal
    │
becomes
    │
Project
    │
contains
    │
Consultations
    │
Milestones
    │
Deliverables
    │
Defense
    │
produces
    │
Research Artifact
    │
preserved as
    │
Repository Entry
```

These relationships describe business concepts only and should not be interpreted as database relationships until the solution design phase.

---

# Minimum Viable Product (Version 1.0)

The first release of Nexus focuses on solving the most fundamental institutional problems identified during Product Discovery.

Version 1.0 intentionally emphasizes long-term knowledge preservation before introducing advanced collaboration capabilities.

---

## Objectives

Version 1.0 should enable universities to:

- Reduce duplicate capstone proposals.
- Improve proposal visibility.
- Preserve completed research.
- Standardize proposal evaluation.
- Improve adviser coordination.
- Create a searchable institutional repository.

---

## Core Capabilities

### Research Discovery

- Browse previous projects
- Keyword search
- Technology filtering
- Adviser filtering
- Academic year filtering

---

### Proposal Lifecycle

- Proposal submission
- Proposal tracking
- Review workflow
- Revision management
- Approval history

---

### Repository

- Thesis preservation
- Metadata management
- Repository search
- Digital archive
- Project showcase

---

### Adviser Support

- Consultation records
- Adviser dashboard
- Progress monitoring
- Student project overview

---

# Product Roadmap

The roadmap reflects an incremental strategy that prioritizes solving foundational institutional problems before introducing advanced capabilities.

---

## Phase 1 — Institutional Foundation

Focus:

Centralize proposal management and preserve institutional knowledge.

Deliverables:

- Research repository
- Proposal workflow
- Adviser dashboard
- Repository search
- Metadata preservation

---

## Phase 2 — Collaboration

Focus:

Improve project execution.

Deliverables:

- Project workspace
- Milestone tracking
- Consultation scheduling
- Notifications
- Team accountability
- Meeting history

---

## Phase 3 — Academic Intelligence

Focus:

Transform accumulated academic data into institutional insights.

Deliverables:

- Analytics dashboards
- Research trend reports
- Technology adoption reports
- Adviser workload analysis
- Accreditation reporting

---

## Phase 4 — Innovation Ecosystem

Focus:

Extend Nexus beyond capstone management into a university-wide innovation platform.

Potential capabilities include:

- Alumni engagement
- Research continuation
- Cross-disciplinary collaboration
- Industry partnerships
- Innovation showcases
- Research commercialization support

---

# Assumptions

The Product Brief is based upon several assumptions that should be validated during future implementation.

- Universities continue conducting proposal and final defenses.
- Existing communication platforms remain available.
- Students continue using external development tools such as GitHub.
- Departments are willing to preserve research digitally.
- Research advisers remain central to academic guidance.
- Institutional stakeholders support gradual digital transformation.

---

# Risks

Several organizational risks may influence successful adoption.

## Institutional Resistance

Introducing new workflows may require policy adjustments and faculty training.

---

## Data Availability

Historical research may exist only in physical form or be inaccessible.

---

## Standardization

Different advisers and departments currently follow different workflows.

Achieving consistency without sacrificing flexibility will require careful design.

---

## User Adoption

Students and faculty may continue relying upon familiar communication platforms unless Nexus clearly improves existing processes.

---

# Open Questions

The following questions remain intentionally unanswered and should guide future design discussions.

- Should repository access differ between internal and public users?
- How should intellectual property be managed?
- Should source code be stored directly or linked externally?
- What approval workflow best supports multiple academic departments?
- How should interdisciplinary projects be represented?
- Which metadata standards should govern research preservation?
- What institutional policies are required before deployment?

These questions represent future design decisions rather than unresolved product problems.

---

# Architectural Decision Records

Future implementation decisions should be documented separately using Architectural Decision Records (ADRs).

Examples include:

- ADR-001 — Repository Storage Strategy
- ADR-002 — Proposal Similarity Evaluation
- ADR-003 — Source Code Integration
- ADR-004 — Authentication Strategy
- ADR-005 — Department Expansion Model

Separating architectural decisions from the Product Brief ensures that implementation details may evolve without altering the product vision.

---

# Conclusion

Nexus began as a response to a personal academic experience but evolved into a broader vision for institutional knowledge management.

Its purpose is not merely to digitize existing paperwork or replace isolated administrative processes. Instead, Nexus seeks to redefine how universities create, preserve, and continuously build upon student-generated knowledge.

The platform recognizes that every proposal, consultation, revision, defense, and completed project contributes to a growing body of institutional experience. When preserved and made discoverable, this knowledge enables future students to begin their research from a stronger foundation rather than repeatedly overcoming the same obstacles.

Success for Nexus will not be measured solely by software adoption or feature completeness. Its true impact lies in whether future students approach the capstone journey with greater confidence, stronger guidance, and access to the collective achievements of those who came before them.

Ultimately, Nexus envisions a university where academic innovation is no longer isolated within graduating batches but becomes a continuous, self-sustaining cycle of discovery, collaboration, preservation, and progress.

---

**End of Document**

**Nexus Product Brief**  
**Version 1.0**  
**Status:** Product Discovery Complete