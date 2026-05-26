# Job Tracker PWA Requirements Contract

## 1. Purpose

The Job Tracker PWA is the first generic sample app in the PWA Sample Portfolio.

Its purpose is to show a lightweight, mobile-friendly, offline-first app that helps a small business or contractor track simple jobs from start to finish.

## 2. Relationship to FieldLedger

The Job Tracker PWA is inspired by FieldLedger but is not FieldLedger.

FieldLedger remains the flagship proof-of-work.

The Job Tracker PWA should be simpler, more generic, and easier for a potential client to understand quickly.

## 3. Target Users

The app is designed for:

- small service businesses
- independent contractors
- field workers
- owner-operators
- small crews
- non-technical users who need simple job records

## 4. Core Workflow

The user should be able to:

- add a job
- save the job locally
- view saved jobs
- update job status
- add job notes
- delete a job if needed
- export job records as CSV
- download a JSON backup
- restore from a JSON backup
- print a simple job report

## 5. Minimum Job Fields

Each job record should include:

- job date
- customer or company name
- job title
- job location
- job status
- job notes
- optional amount
- created timestamp
- updated timestamp

## 6. Job Status Options

Initial job statuses:

- Open
- In Progress
- Completed
- On Hold

These statuses should remain simple and generic.

## 7. Required Shared Modules

This sample should prove these reusable modules:

- Core PWA Shell
- Mobile Dashboard
- Record Form
- Saved Records List
- Local Storage
- JSON Backup
- JSON Restore
- CSV Export
- Printable Report
- Help Panel
- Future Add-On Cards

## 8. Optional Modules

These are not required for the first version:

- photo attachment
- Google Sheets send
- customer database
- login system
- cloud sync
- invoice generation
- payment tracking
- admin dashboard

Optional modules may appear as clearly labeled future add-ons.

## 9. Future Add-On Cards

The app may show future add-ons such as:

- Google Sheets Handoff
- Photo Attachments
- Customer List
- Team Login
- Cloud Backup
- Invoice Conversion
- Admin Dashboard

Future add-ons must be clearly labeled as inactive.

They must not look like working features.

## 10. Local-First Rule

The app should save data locally in the browser.

No backend, login, account system, or cloud database should be added in the first version.

## 11. Public Demo Rule

Before becoming public, the Job Tracker PWA must:

- work on mobile
- save and reload records
- export CSV correctly
- download JSON backup
- restore valid JSON backup
- reject malformed restore files
- print a readable report
- explain future add-ons honestly
- avoid private FieldLedger details

## 12. Not Building Yet

Do not build these in the first version:

- paid SaaS backend
- user accounts
- Stripe payments
- app store publishing
- multi-user permissions
- live cloud sync
- AI automation
- OCR scanning
- advanced scheduling

## 13. Success Definition

The first version succeeds when a potential client can open the demo and understand:

- what the app does
- what works now
- what could be added later
- how similar tools could be built for their workflow

## 14. Current Decision

The next step after this contract is committed is to create the private Job Tracker app folder.
