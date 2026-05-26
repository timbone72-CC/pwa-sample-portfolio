# Job Tracker PWA Sample

## 1. Purpose

Job Tracker is a lightweight sample PWA for small-business job tracking.

It demonstrates how a simple mobile-friendly app can track jobs, save records locally, export data, download backups, restore backups, and print a basic report without requiring a backend or login system.

## 2. What Works Now

Current working features:

- mobile-friendly app shell
- dashboard summary
- add job form
- saved job records
- local browser storage
- delete saved jobs
- CSV export
- JSON backup download
- JSON backup restore with validation
- printable job report
- help section
- future add-on preview cards

## 3. Local-First Behavior

This sample stores job records in the browser's local storage.

There is no backend, login system, cloud database, or account system in this version.

Data is local to the browser/device unless exported or backed up by the user.

## 4. Future Add-On Examples

The app shows future add-ons as roadmap previews only.

Possible future add-ons:

- Google Sheets handoff
- photo attachments
- customer list
- team login
- cloud backup
- invoice conversion
- admin dashboard

Inactive features must stay clearly labeled as future, planned, or optional.

## 5. Development Commands

Install dependencies:

    npm install

Run locally:

    npm run dev

Build check:

    npm run build

## 6. Portfolio Role

This sample is part of the PWA Sample Portfolio.

It is inspired by FieldLedger but is intentionally more generic, smaller, and easier to understand as a public sample app.
