# PWA Sample App Matrix

## 1. Purpose

This document defines which sample PWAs are planned, what each app demonstrates, and which shared modules each app should reuse.

The goal is to prevent scattered builds and make sure every new sample app strengthens the reusable portfolio system.

## 2. Planned Sample Apps

### 2.1 Job Tracker PWA

Primary purpose:

Track simple jobs from start to finish.

Best fit:

- contractors
- field workers
- service businesses
- small crews
- owner-operators

Core workflow:

- add job
- update job status
- save job notes
- view saved jobs
- print job report
- export job records
- back up local data

### 2.2 Timesheet PWA

Primary purpose:

Track hours, pay periods, and printable time records.

Best fit:

- 1099 workers
- hourly contractors
- small crews
- field workers

Core workflow:

- add work day
- track hours
- group by pay period
- calculate totals
- print timesheet
- export records
- back up local data

### 2.3 Invoice Helper PWA

Primary purpose:

Create simple invoices and printable customer billing records.

Best fit:

- small service businesses
- freelancers
- contractors
- owner-operators

Core workflow:

- add customer
- add invoice line items
- calculate totals
- mark status
- print invoice
- export invoice records
- back up local data

### 2.4 Field Work Log PWA

Primary purpose:

Create daily field notes and work logs.

Best fit:

- field crews
- inspectors
- service techs
- jobsite workers

Core workflow:

- add daily log
- record site details
- add notes
- attach photos when needed
- print daily report
- export logs
- back up local data

### 2.5 Google Sheets Workflow Sample

Primary purpose:

Demonstrate optional Google Sheets handoff for apps that need office review or downstream reporting.

Best fit:

- office teams
- payroll review
- job tracking review
- lightweight company handoff

Core workflow:

- export app records
- send or import into Google Sheets
- review structured rows
- keep app data local unless integration is intentionally added

## 3. Shared Module Matrix

| Module | Job Tracker | Timesheet | Invoice Helper | Field Work Log | Sheets Workflow |
|---|---:|---:|---:|---:|---:|
| Core PWA Shell | Yes | Yes | Yes | Yes | Yes |
| Mobile Dashboard | Yes | Yes | Yes | Yes | Yes |
| Record Form | Yes | Yes | Yes | Yes | Optional |
| Saved Records List | Yes | Yes | Yes | Yes | Optional |
| Local Storage | Yes | Yes | Yes | Yes | Optional |
| JSON Backup | Yes | Yes | Yes | Yes | Optional |
| CSV Export | Yes | Yes | Yes | Yes | Yes |
| Printable Report | Yes | Yes | Yes | Yes | Optional |
| Photo Attachment | Optional | No | Optional | Yes | No |
| Totals Summary | Optional | Yes | Yes | Optional | Optional |
| Status Badges | Yes | Optional | Yes | Optional | Yes |
| Help Panel | Yes | Yes | Yes | Yes | Yes |
| Future Add-On Cards | Yes | Yes | Yes | Yes | Yes |
| Google Sheets Integration | Optional | Optional | Optional | Optional | Yes |

## 4. Reuse Rules

### 4.1 Core Shell Rule

Every sample app should reuse the same basic PWA shell unless there is a strong reason not to.

Shared shell includes:

- app header
- dashboard layout
- main navigation
- settings area
- help area
- offline-first behavior
- local storage pattern
- export/backup area

### 4.2 Module Reuse Rule

When two apps need the same behavior, do not redesign it from scratch.

Reusable behavior should be extracted into a shared pattern before the next similar app is built.

### 4.3 App-Specific Rule

Only the business workflow should change between apps.

App-specific parts include:

- field names
- labels
- calculations
- report wording
- export columns
- help instructions
- future add-on wording

### 4.4 Google Sheets Rule

Google Sheets is not required for every sample.

Sheets should only be built into a sample when:

- the app clearly benefits from office review
- the sample is meant to demonstrate handoff
- the workflow needs structured spreadsheet output
- the integration can remain lightweight and understandable

## 5. First Build Target

The first sample app is:

**Job Tracker PWA**

Reason:

- closest to FieldLedger
- strong generic business use case
- good foundation for reusable records, reports, CSV export, JSON backup, and future add-on cards

## 6. Current Decision

Before building the Job Tracker PWA, the shared UI layout contract should be created next.
