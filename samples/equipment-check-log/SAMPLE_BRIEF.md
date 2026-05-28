# Equipment Check Log Sample Brief

## 1. Sample Identity

### 1.1 Sample Name

Equipment Check Log

### 1.2 Sample ID

equipment-check-log

### 1.3 Portfolio Level

Level 3 — Operations App

### 1.4 Status

Planned / not built yet.

## 2. Purpose

Equipment Check Log is a lightweight, mobile-friendly PWA sample for recording equipment readiness checks, issues, and follow-up notes.

The app should show how a simple paper checklist or text-message workflow can become a clean installable app that works well on a phone.

## 3. Primary User

### 3.1 Main User

Equipment operator, mechanic, inspector, crew lead, or small business owner.

### 3.2 User Need

The user needs a quick way to answer:

- Was the equipment checked?
- Is it ready to use?
- Are there issues?
- Who checked it?
- What needs attention?

## 4. Main Workflow

### 4.1 Basic Flow

1. Enter equipment name or unit number.
2. Select readiness status.
3. Record checklist results.
4. Add issue notes if needed.
5. Save the check locally.
6. Review recent checks.

### 4.2 Standalone Use

This app must work as a standalone sample.

It should not require login, backend sync, paid services, or another app.

## 5. Suggested Fields

### 5.1 Required Fields

- Date
- Equipment name or unit number
- Checked by
- Readiness status
- Notes

### 5.2 Checklist Fields

- Fuel / power checked
- Tires / tracks checked
- Fluids checked
- Lights / signals checked
- Safety equipment checked
- Damage or leaks checked

### 5.3 Status Options

- Ready
- Needs Attention
- Out of Service

## 6. Local Data Rules

### 6.1 Storage

Saved checks should use local browser storage for the sample.

### 6.2 No Fake Integration

Do not fake a live connection to another app, database, company system, or dispatch system.

### 6.3 Export

Export can be considered later, but it is not required for the first version.

## 7. PWA Rules

### 7.1 Installable App

The sample should be installable as its own PWA.

### 7.2 Unique Icon

The sample must have its own unique saved-app icon/logo.

Do not reuse the Job Tracker or Crew Task Board icon.

### 7.3 GitHub Pages Base Path

The deployed app must use this base path:

/pwa-sample-portfolio/equipment-check-log/

### 7.4 Service Worker Scope

If a service worker is added, it must cache the deployed subpath, not root paths.

## 8. Portfolio Link Area

### 8.1 Required Link Area

The app should include a simple in-app portfolio or related-sample link area.

Recommended placement:

- About section
- Help section
- footer area

### 8.2 Link Behavior

Links should be navigation only unless real app-to-app communication is intentionally built later.

## 9. App Relationship Note

Equipment Check Log can stand alone, but it may also connect to:

- Crew Task Board — equipment issues become crew tasks
- Job Tracker — equipment readiness affects job completion
- Service Call Log — equipment issue can become a service call

Connection status:

Optional / future.

These relationship notes are planning notes only unless real app-to-app communication is intentionally built later.

## 10. First Build Boundary

### 10.1 In Scope For First App Version

- simple equipment check form
- readiness status
- checklist fields
- local saved checks list
- delete saved check
- mobile-friendly layout
- unique icon/logo
- portfolio link area

### 10.2 Out Of Scope For First App Version

- login
- backend sync
- real crew assignment integration
- real maintenance ticket integration
- fake company data
- payments
- admin dashboard

## 11. Next Step After This Brief

Build the first local app shell for:

samples/equipment-check-log

Do not deploy until the local sample works and the PWA path rules are verified.
