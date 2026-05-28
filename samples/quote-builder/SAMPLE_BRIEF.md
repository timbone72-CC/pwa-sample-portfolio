# Quote Builder Sample Brief

## 1. Sample Identity

### 1.1 Sample Name

Quote Builder

### 1.2 Sample ID

quote-builder

### 1.3 Portfolio Level

Level 2 — Business Workflow App

### 1.4 Status

Planned / not built yet.

## 2. Purpose

Quote Builder is a lightweight, mobile-friendly PWA sample for creating simple job quotes from labor, materials, trip charges, and notes.

The app should show how a small business owner, contractor, or service provider can turn a repeat quoting process into a clean installable app.

## 3. Primary User

### 3.1 Main User

Small business owner, estimator, contractor, or service provider.

### 3.2 User Need

The user needs a quick way to answer:

- What work is being quoted?
- Who is the customer?
- What are the labor costs?
- What are the material costs?
- Are there trip charges or extra fees?
- What is the estimated total?

## 4. Main Workflow

### 4.1 Basic Flow

1. Enter customer and quote details.
2. Add labor amount.
3. Add materials amount.
4. Add trip charge or extra fee if needed.
5. Add notes or scope details.
6. Review total.
7. Save the quote locally.
8. Review recent quotes.

### 4.2 Standalone Use

This app must work as a standalone sample.

It should not require login, backend sync, paid services, or another app.

## 5. Suggested Fields

### 5.1 Required Fields

- Quote date
- Customer name
- Job title or service name
- Labor amount
- Materials amount

### 5.2 Optional Fields

- Trip charge
- Extra fees
- Notes
- Quote status

### 5.3 Status Options

- Draft
- Sent
- Approved
- Declined

## 6. Calculation Rules

### 6.1 First Version Total

Quote total should equal:

labor amount + materials amount + trip charge + extra fees

### 6.2 No Tax Logic In First Version

Do not include tax rules in the first version.

Tax rules vary by location and should not be guessed.

### 6.3 No Payment Logic In First Version

Do not include payments, deposits, payment links, invoices, or billing integrations in the first version.

## 7. Local Data Rules

### 7.1 Storage

Saved quotes should use local browser storage for the sample.

### 7.2 No Fake Integration

Do not fake a live connection to another app, database, payment processor, customer system, or invoice system.

### 7.3 Export

Export can be considered later, but it is not required for the first version.

## 8. PWA Rules

### 8.1 Installable App

The sample should be installable as its own PWA.

### 8.2 Unique Icon

The sample must have its own unique saved-app icon/logo.

Do not reuse the Job Tracker, Crew Task Board, or Equipment Check Log icon.

### 8.3 GitHub Pages Base Path

The deployed app must use this base path:

/pwa-sample-portfolio/quote-builder/

### 8.4 Service Worker Scope

If a service worker is added, it must cache the deployed subpath, not root paths.

## 9. Portfolio Link Area

### 9.1 Required Link Area

The app should include a simple in-app portfolio or related-sample link area.

Recommended placement:

- About section
- Help section
- footer area

### 9.2 Link Behavior

Links should be navigation only unless real app-to-app communication is intentionally built later.

## 10. App Relationship Note

Quote Builder can stand alone, but it may also connect to:

- Job Tracker — approved quote becomes a job
- Invoice Tracker — completed quoted work becomes an invoice
- Service Call Log — service call details become a quote

Connection status:

Optional / future.

These relationship notes are planning notes only unless real app-to-app communication is intentionally built later.

## 11. First Build Boundary

### 11.1 In Scope For First App Version

- simple quote form
- customer name
- job title or service name
- labor amount
- materials amount
- trip charge
- extra fees
- automatic total
- quote status
- local saved quotes list
- delete saved quote
- mobile-friendly layout
- unique icon/logo
- portfolio link area

### 11.2 Out Of Scope For First App Version

- login
- backend sync
- payment links
- deposits
- invoicing
- real customer database
- real app-to-app integration
- tax calculation
- fake company data
- admin dashboard

## 12. Next Step After This Brief

Build the first local app shell for:

samples/quote-builder

Do not deploy until the local sample works and the PWA path rules are verified.
