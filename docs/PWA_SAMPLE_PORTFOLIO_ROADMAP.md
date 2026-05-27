# PWA Sample Portfolio Roadmap

## 1. Purpose

The PWA Sample Portfolio is a public collection of lightweight, mobile-friendly workflow apps.

The goal is to show that simple business problems can be turned into usable Progressive Web Apps that work well on phones, desktops, and installed app launchers.

This portfolio is not limited to one industry. It can include apps for field work, small business operations, service work, contractors, personal productivity, and future client-inspired workflows.

## 2. Core Portfolio Direction

The portfolio should show range:

- simple apps
- medium workflow apps
- more advanced connected apps
- future client-inspired examples

Each sample should be useful on its own, but the collection should also feel connected.

The portfolio should not become random. Every sample should map to a real-world workflow pattern that a contractor, small business, crew lead, technician, owner, dispatcher, or similar user might actually need.

## 3. Sample App Rules

Each sample app must define:

1. Primary user
2. Main workflow
3. Standalone use
4. Related apps it could connect to
5. Whether the connection is optional, future, or required
6. Unique installed-app icon/logo
7. Public demo URL
8. Local source path
9. Deployment path

## 4. App Relationship Rule

Every sample must include an App Relationship Note.

The note should explain:

- which other sample apps it could connect to
- why those apps connect
- what workflow or data could move between them
- whether the connection is optional, future, or required

These relationship notes are planning notes only unless real app-to-app communication is intentionally built later.

## 5. Icon / Logo Rule

Each sample PWA must have its own unique saved-app logo/icon before public install testing.

Do not reuse the same favicon or manifest icon across all samples.

Preferred pattern:

- samples/<sample-id>/public/favicon.svg
- samples/<sample-id>/public/manifest.webmanifest

Each sample should use a distinct icon shape, color, or label so installed apps are easy to tell apart in Chrome apps, desktop launchers, and mobile home screens.

## 6. Deployment Pattern

Each sample app should live under:

samples/<sample-id>

Each deployed public demo should be copied into:

docs/<sample-id>

Public URL pattern:

https://timbone72-cc.github.io/pwa-sample-portfolio/<sample-id>/

Each Vite sample must use the correct GitHub Pages base path:

/pwa-sample-portfolio/<sample-id>/

Service workers must cache the GitHub Pages subpath, not root paths.

## 7. Sample Levels

### 7.1 Level 1 — Simple Useful Apps

Small apps that prove basic workflow usefulness.

Examples:

- checklist
- log
- tracker
- daily planner
- simple calculator
- status board

### 7.2 Level 2 — Business Workflow Apps

Apps that help a small business or worker manage a repeated job process.

Examples:

- job tracker
- quote builder
- invoice tracker
- appointment tracker
- customer follow-up log

### 7.3 Level 3 — Operations Apps

Apps that support a team, crew, or manager.

Examples:

- crew task board
- equipment check log
- production tracker
- route log
- service call board

### 7.4 Level 4 — Connected System Apps

Apps that demonstrate more advanced workflow connections.

Examples:

- app plus Google Sheets export
- app plus reporting dashboard
- app plus backup/restore
- app plus calendar planning
- app plus printable reports

### 7.5 Level 5 — Client-Inspired Capstone

The final sample slot should be reserved.

It should not be guessed early.

It should be based on:

- real contract listings
- repeated buyer requests
- real client conversations
- common business workflow pain

The capstone must be sanitized, generic, and free of private client data.

## 8. Current Sample Roadmap

### 8.1 Sample 1 — Job Tracker

Status:

Complete first public demo.

Primary user:

Individual worker, contractor, or field worker.

Main workflow:

Track completed jobs and simple work records.

Standalone use:

Yes.

Public demo:

https://timbone72-cc.github.io/pwa-sample-portfolio/job-tracker/

Local source path:

samples/job-tracker

Deployment path:

docs/job-tracker

App Relationship Note:

Job Tracker can stand alone, but it may also connect to:

- Crew Task Board — crew lead assigns work, worker completes jobs
- Quote Builder — approved quote becomes a job
- Invoice Tracker — completed job becomes a billable invoice
- FieldLedger — advanced real-world version for pay, expenses, reports, and Sheets

Connection status:

Optional / future.

### 8.2 Sample 2 — Crew Task Board

Status:

Recommended next sample.

Primary user:

Crew lead, foreman, or small team manager.

Main workflow:

Assign and track daily crew tasks.

Standalone use:

Yes.

Minimal features:

- add task
- assign task to crew member
- status: Not Started / In Progress / Done
- priority
- notes
- saved locally
- mobile-friendly
- unique icon/logo
- installable PWA

App Relationship Note:

Crew Task Board can stand alone, but it may also connect to:

- Job Tracker — assigned tasks become completed job records
- Equipment Check Log — tasks can include equipment issues
- Service Call Log — service calls can generate crew tasks

Connection status:

Optional / future.

### 8.3 Sample 3 — Equipment Check Log

Status:

Planned.

Primary user:

Equipment operator, mechanic, inspector, or crew lead.

Main workflow:

Record equipment checks, issues, and readiness.

Standalone use:

Yes.

App Relationship Note:

Equipment Check Log can stand alone, but it may also connect to:

- Crew Task Board — equipment issues become crew tasks
- Job Tracker — equipment readiness affects job completion
- Service Call Log — equipment issue can become a service call

Connection status:

Optional / future.

### 8.4 Sample 4 — Quote Builder

Status:

Planned.

Primary user:

Small business owner, estimator, contractor, or service provider.

Main workflow:

Build simple quotes from labor, materials, trip charges, and notes.

Standalone use:

Yes.

App Relationship Note:

Quote Builder can stand alone, but it may also connect to:

- Job Tracker — approved quote becomes a job
- Invoice Tracker — completed quoted work becomes an invoice
- Service Call Log — service call details become a quote

Connection status:

Optional / future.

### 8.5 Sample 5 — Service Call Log

Status:

Planned.

Primary user:

Mobile service technician, dispatcher, or small service business.

Main workflow:

Track customer calls, job status, notes, and follow-up.

Standalone use:

Yes.

App Relationship Note:

Service Call Log can stand alone, but it may also connect to:

- Crew Task Board — service calls can generate assigned tasks
- Quote Builder — service findings can become a quote
- Invoice Tracker — completed service call becomes billable work

Connection status:

Optional / future.

### 8.6 Final Sample — Client-Inspired Capstone

Status:

Reserved.

Primary user:

To be determined from real contract demand.

Main workflow:

To be determined from real contract demand.

Standalone use:

Yes.

App Relationship Note:

The capstone may connect to any earlier sample pattern if the real workflow calls for it.

Connection status:

Future / reserved.

Rules:

- do not build early
- do not guess the workflow
- base it on real market demand
- sanitize all private data
- show a more complete workflow than smaller samples
- include mobile and desktop polish
- include offline behavior where practical
- include export, backup, reporting, or Google Sheets only if useful

## 9. FieldLedger Boundary

FieldLedger should remain parked as the larger flagship project.

Do not mix FieldLedger expansion into the early PWA Sample Portfolio phase.

FieldLedger may later inspire a larger adapted app, such as:

- ContractorLedger
- ServiceLedger
- WorkLedger

But that should be treated as a separate bigger project.

FieldLedger remains proof that a more advanced real-world workflow app can exist, while the PWA Sample Portfolio focuses on smaller public examples first.

## 10. Working Rule

For each sample:

1. Make one focused change.
2. Test the smallest relevant thing.
3. Confirm expected files only.
4. Commit.
5. Push.
6. Confirm clean synced state.
7. Update checkpoint when repo reality changes.

## 11. Next Best Step

Build Sample 2:

Crew Task Board.

Do not start app files until this roadmap is committed and the repo is clean.
