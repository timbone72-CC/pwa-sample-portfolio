# PWA Build Order Roadmap

## 1. Purpose

This document defines the build order for the PWA Sample Portfolio.

The goal is to prevent scattered work and keep the project moving in controlled phases.

## 2. Build Principles

### 2.1 One Layer at a Time

Do not build multiple sample apps at once.

Finish the current planning or build layer before moving to the next layer.

### 2.2 FieldLedger as Proof-of-Work

FieldLedger remains the flagship example of a real working PWA.

The sample portfolio should learn from FieldLedger without turning FieldLedger into an experiment folder.

### 2.3 Private First, Public Later

Build privately first.

Only polished, understandable, honest samples should become public.

### 2.4 Reuse Before Expansion

Do not start a new sample app unless the previous app produced reusable patterns worth carrying forward.

## 3. Phase 0 — Planning Contracts

Status:

In progress.

Goal:

Create the core planning documents before writing new app code.

Required documents:

- PWA_SAMPLE_PORTFOLIO_MASTER_CONTRACT.md
- PWA_SAMPLE_APP_MATRIX.md
- PWA_SHARED_UI_LAYOUT_CONTRACT.md
- PWA_SHARED_FEATURE_MODULE_CONTRACT.md
- PWA_BUILD_ORDER_ROADMAP.md

Exit requirements:

- core contracts exist
- planned apps are listed
- shared modules are listed
- shared UI rules are listed
- build order is clear

## 4. Phase 1 — FieldLedger Case Study

Goal:

Prepare FieldLedger as the flagship proof-of-work.

Deliverable:

A clear case study explaining what FieldLedger proves.

FieldLedger case study should cover:

- offline-first PWA
- mobile-friendly workflow
- local records
- printable reports
- CSV export
- JSON backup
- optional Google Sheets workflow
- real-world trusted user readiness
- practical business use case

Do not expose unfinished internal work.

Exit requirements:

- FieldLedger can be explained in plain language
- screenshots or demo notes are identified
- public-facing wording is drafted
- private/internal details remain private

## 5. Phase 2 — Job Tracker PWA Sample

Goal:

Build the first generic public-ready sample app.

Why first:

- closest to FieldLedger
- easiest to explain
- useful to many small businesses
- good test case for reusable records, reports, exports, and backups

Minimum working scope:

- dashboard
- add job form
- saved job list
- job status
- notes
- local storage
- CSV export
- JSON backup
- printable report
- future add-on cards
- help panel

Optional only if needed:

- photo attachment
- Google Sheets handoff

Exit requirements:

- app works locally
- mobile layout is usable
- records save and reload
- CSV export works
- JSON backup works
- print report works
- future add-ons are clearly labeled
- app is polished enough to become a public sample

## 6. Phase 3 — Shared Template Extraction

Goal:

Identify what the Job Tracker created that should become reusable.

Extract or document:

- app shell
- dashboard cards
- record cards
- form layout
- saved records layout
- export panel
- backup panel
- report layout
- help panel
- future add-on cards

Exit requirements:

- reusable parts are named
- app-specific parts are separated
- next sample can reuse the shell and modules

## 7. Phase 4 — Timesheet PWA Sample

Goal:

Build the second sample using the shared shell and modules.

Reuse from Job Tracker:

- app shell
- dashboard layout
- local storage
- saved records
- CSV export
- JSON backup
- printable report
- help panel
- future add-on cards

App-specific work:

- work day fields
- hours tracking
- pay period grouping
- totals summary
- timesheet report wording

Google Sheets:

Optional if the sample clearly benefits from office/payroll review.

Exit requirements:

- proves reuse from Job Tracker
- does not rebuild the shell from scratch
- creates only Timesheet-specific logic where needed

## 8. Phase 5 — Invoice Helper PWA Sample

Goal:

Build the third sample using the same portfolio system.

Reuse:

- app shell
- form layout
- saved records
- CSV export
- JSON backup
- printable report
- help panel
- future add-on cards

App-specific work:

- customer fields
- invoice line items
- invoice totals
- invoice status
- printable invoice wording

Google Sheets:

Optional if useful for office review.

Exit requirements:

- invoice workflow works
- reports/print are polished
- reusable modules continue to hold up

## 9. Phase 6 — Field Work Log PWA Sample

Goal:

Build a daily field log sample.

Reuse:

- app shell
- saved records
- local storage
- JSON backup
- printable report
- help panel
- future add-on cards

App-specific work:

- site fields
- daily notes
- crew/equipment/weather fields if needed
- photo attachment if useful
- daily report wording

Google Sheets:

Optional.

Exit requirements:

- field log works as a practical daily record tool
- photo workflow is only included if it is polished and explainable

## 10. Phase 7 — Google Sheets Workflow Sample

Goal:

Create a focused Sheets workflow sample only after simpler apps are stable.

Purpose:

Show how a lightweight PWA can hand records to an office spreadsheet workflow.

Possible scope:

- CSV export
- Sheets import instructions
- optional Apps Script receiver
- tester-safe setup instructions
- clear local-first boundaries

Exit requirements:

- Sheets workflow is understandable
- setup steps are documented
- it does not force Sheets into every app

## 11. Current Build Position

Current position:

Phase 0 — Planning Contracts.

Current next action after this roadmap:

Review the contract set and decide whether Phase 0 is complete enough to begin the FieldLedger case study.
