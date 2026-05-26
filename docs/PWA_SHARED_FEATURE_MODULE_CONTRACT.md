# PWA Shared Feature Module Contract

## 1. Purpose

This document defines the reusable feature modules for the PWA Sample Portfolio.

The goal is to make similar PWAs faster to build by reusing proven feature patterns instead of rebuilding the same logic from scratch.

## 2. Feature Module Strategy

Each sample app should be built from small reusable modules where possible.

A module should be reusable when:

- more than one app needs the same behavior
- the behavior can be explained clearly
- the behavior can be tested independently
- the behavior does not depend too heavily on one app's specific business rules

## 3. Core Shared Modules

### 3.1 Local Storage Module

Purpose:

Save app records locally in the browser.

Shared responsibilities:

- read records
- save records
- update records
- delete records
- recover from malformed saved data
- keep app-specific storage keys separate

Apps likely to use it:

- Job Tracker
- Timesheet
- Invoice Helper
- Field Work Log

### 3.2 JSON Backup Module

Purpose:

Let the user download and restore their local app data.

Shared responsibilities:

- export records as JSON
- include app name and schema version
- validate restored data before replacing local records
- reject malformed backups
- warn the user before destructive restore actions

Apps likely to use it:

- Job Tracker
- Timesheet
- Invoice Helper
- Field Work Log

### 3.3 CSV Export Module

Purpose:

Export structured records for spreadsheet review.

Shared responsibilities:

- define app-specific columns
- escape CSV values safely
- include clear headers
- download CSV file
- keep export format simple and readable

Apps likely to use it:

- Job Tracker
- Timesheet
- Invoice Helper
- Field Work Log
- Google Sheets Workflow Sample

### 3.4 Printable Report Module

Purpose:

Create readable reports that can be printed or saved as PDF from the browser.

Shared responsibilities:

- report title
- report date
- summary section
- detail rows
- notes section when useful
- print-friendly layout

Apps likely to use it:

- Job Tracker
- Timesheet
- Invoice Helper
- Field Work Log

### 3.5 Saved Records Module

Purpose:

Display saved records in a reusable card/list pattern.

Shared responsibilities:

- show empty state
- show saved records
- sort records when useful
- edit records when supported
- delete records when supported
- display important summary values

Apps likely to use it:

- Job Tracker
- Timesheet
- Invoice Helper
- Field Work Log

### 3.6 Validation Module

Purpose:

Prevent bad records from being saved or restored.

Shared responsibilities:

- required field checks
- number validation
- date validation
- schema validation for restored backups
- clear user-facing error messages

Apps likely to use it:

- Job Tracker
- Timesheet
- Invoice Helper
- Field Work Log

### 3.7 Future Add-On Module

Purpose:

Show honest future-feature previews inside sample apps.

Shared responsibilities:

- show feature name
- show clear inactive status
- explain what could be added later
- prevent inactive features from looking active

Apps likely to use it:

- Job Tracker
- Timesheet
- Invoice Helper
- Field Work Log
- Google Sheets Workflow Sample

### 3.8 Photo Attachment Module

Purpose:

Allow records to reference photos when the workflow needs visual proof.

Shared responsibilities:

- attach photo
- preview photo when supported
- remove photo
- store photo reference separately from the main record when needed
- explain backup limitations clearly if photos are not included in JSON backup

Apps likely to use it:

- Job Tracker: optional
- Invoice Helper: optional
- Field Work Log: yes
- Timesheet: no by default

## 4. Optional Google Sheets Module

Purpose:

Support lightweight office handoff when a sample app clearly benefits from spreadsheet review.

Shared responsibilities:

- export compatible CSV
- document setup clearly
- keep Google Sheets optional unless required
- avoid forcing cloud workflow into every sample
- preserve local-first app behavior unless integration is intentionally added

Apps likely to use it:

- Google Sheets Workflow Sample: yes
- Job Tracker: optional
- Timesheet: optional
- Invoice Helper: optional
- Field Work Log: optional

## 5. App-Specific Business Logic

Business logic should stay app-specific unless it is truly reusable.

Examples:

- Job Tracker status rules
- Timesheet pay period rules
- Invoice total calculations
- Field Work Log daily report wording
- Google Sheets import format

Shared modules may support these workflows, but they should not hide important business rules.

## 6. Reuse Rule

Before building a feature in a new sample app, check whether it already exists as a reusable pattern in an earlier sample.

If it exists, copy or adapt the reusable version instead of starting over.

## 7. Extraction Rule

Do not over-engineer too early.

A feature should become a reusable module only after it is useful in at least one working sample and likely useful in another.

## 8. Public Demo Rule

Public sample apps should include only polished, understandable modules.

Experimental modules should remain private until stable.

## 9. Current Decision

The first reusable feature targets are:

- local storage
- saved records
- CSV export
- JSON backup
- printable report
- future add-on cards

These should be proven first in the Job Tracker PWA sample.
