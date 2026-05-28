# Service Call Log Sample Brief

## 1. Sample Identity

Sample name:

Service Call Log

Sample ID:

service-call-log

Local source path:

samples/service-call-log

Deployment path:

docs/service-call-log

Future public demo URL:

https://timbone72-cc.github.io/pwa-sample-portfolio/service-call-log/

## 2. Purpose

Service Call Log is a lightweight PWA sample for tracking service calls from first contact through follow-up.

The app should show how a mobile service technician, dispatcher, or small service business could keep simple service records without needing a large management system.

## 3. Primary User

Primary users:

- mobile service technician
- dispatcher
- small service business owner
- independent contractor

## 4. Main Workflow

The main workflow is:

1. Add a service call.
2. Record customer or job location details.
3. Track call status.
4. Add issue notes.
5. Record follow-up needs.
6. Review saved service calls later.

## 5. Standalone Use

Service Call Log must work as a standalone app.

It should not require:

- login
- backend storage
- cloud sync
- payment setup
- fake API integration
- connection to another sample app

## 6. Minimal First Version

The first version should support:

- add service call
- customer name
- service location
- issue summary
- status
- priority
- follow-up needed
- notes
- local save
- saved call list
- clear/reset sample data
- mobile-friendly layout
- unique app icon/logo
- installable PWA metadata
- in-app related-sample / portfolio link area

## 7. Status Options

Recommended status values:

- New
- Scheduled
- In Progress
- Waiting
- Complete

## 8. Priority Options

Recommended priority values:

- Low
- Normal
- High
- Urgent

## 9. App Relationship Note

Service Call Log can stand alone, but it may also connect to:

- Crew Task Board — service calls can generate assigned tasks
- Quote Builder — service findings can become a quote
- Invoice Tracker — completed service calls can become billable work
- Equipment Check Log — equipment issues can become service calls

Connection status:

Optional / future.

No real app-to-app communication should be built unless intentionally planned later.

## 10. Portfolio Link Area

The app should include a small portfolio / related-sample link area.

Recommended links:

- Job Tracker
- Crew Task Board
- Equipment Check Log
- Quote Builder

The links should be navigation links only.

## 11. PWA Requirements

The app should include:

- correct Vite base path
- service worker scoped to /pwa-sample-portfolio/service-call-log/
- manifest file
- unique icon/logo
- offline-friendly shell
- localStorage persistence for simple saved records

## 12. Out Of Scope For First Version

Do not include:

- customer database
- login
- backend
- SMS
- email sending
- payments
- invoices
- maps
- real dispatch system
- calendar sync
- Google Sheets export

Those can be future ideas, not first-slice work.

## 13. Build Rule

Build one small working slice first.

The first app slice should prove:

- page loads
- one service call can be added
- saved call appears in the list
- refresh persistence works
