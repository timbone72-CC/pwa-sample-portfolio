# PWA Shared UI Layout Contract

## 1. Purpose

This document defines the reusable UI and layout system for the PWA Sample Portfolio.

The goal is to make every sample app feel professional, consistent, mobile-friendly, and easy to copy into similar future PWAs.

## 2. Design Goal

The UI should feel like a simple small-business work app.

It should prioritize:

- clear labels
- readable text
- large touch-friendly buttons
- simple cards
- fast understanding
- low visual clutter
- mobile-first layout
- desktop-friendly spacing
- professional but plain styling

The app should be easy for a non-technical worker or business owner to understand quickly.

## 3. Shared Layouts

### 3.1 App Shell Layout

Every app should use the same basic shell:

- app header
- dashboard area
- main work area
- saved records area
- export/report/settings area
- help area
- optional future add-on area

### 3.2 Dashboard Layout

The dashboard should summarize the app quickly.

Reusable dashboard pieces:

- current period or current view
- total records
- open or active records
- completed or closed records
- money, hours, or count summary when useful
- next action button

### 3.3 Form Layout

Forms should be simple and stacked vertically on mobile.

Reusable form rules:

- one clear section title
- labels above inputs
- large input fields
- clear required fields
- save button near the bottom
- reset/cancel action separated from save
- validation messages close to the related field

### 3.4 Saved Records Layout

Saved records should appear as cards.

Reusable record card pieces:

- primary title
- secondary detail line
- status badge when useful
- date or timestamp
- important totals
- short notes preview
- edit action when available
- delete action when available

### 3.5 Report Layout

Reports should be printable and readable.

Reusable report pieces:

- app/report title
- date range or report period
- business/user info when available
- summary section
- detail rows
- notes section
- signature or review section when useful

### 3.6 Settings and Export Layout

Settings and export actions should be grouped away from the main work form.

Reusable sections:

- JSON backup
- JSON restore
- CSV export
- print report
- app setup
- local data warning
- optional Google Sheets setup when needed

### 3.7 Help Layout

Each app should include a small help area.

Reusable help pieces:

- what this app does
- how to add a record
- how to export or print
- how local storage works
- backup reminder
- what future add-ons mean

### 3.8 Future Add-On Layout

Future add-ons may be shown as preview cards.

Reusable future add-on card pieces:

- feature name
- clear status label
- short explanation
- what would be added in a future phase

Future add-ons must not look like active working features.

## 4. Shared UI Components

Reusable components should include:

- AppHeader
- DashboardCard
- SectionCard
- PrimaryButton
- SecondaryButton
- DangerButton
- StatusBadge
- EmptyState
- RecordCard
- HelpPanel
- ExportPanel
- FutureAddOnCard

## 5. Visual Style Rules

### 5.1 Color Direction

Use a clean work-app palette:

- soft gray background
- white cards
- dark readable text
- blue or slate primary actions
- muted secondary actions
- clear red/danger styling only for destructive actions

### 5.2 Spacing

Use generous spacing so the app is comfortable on phones.

Avoid cramped rows, tiny buttons, and dense tables in the main mobile view.

### 5.3 Typography

Use readable font sizes.

Important values, labels, and action buttons should be easy to read outdoors or on a work phone.

### 5.4 Buttons

Buttons should be obvious and touch-friendly.

Primary actions should be visually stronger than secondary actions.

Destructive buttons must be separated from normal actions.

## 6. Mobile-First Rule

Every sample app must work well on a phone before desktop polish is considered complete.

Mobile layout must support:

- one-handed scrolling
- stacked forms
- readable cards
- no horizontal scrolling in normal app views
- easy tap targets
- clear save/export actions

## 7. Desktop-Friendly Rule

Desktop layout may use wider spacing and side-by-side sections when useful.

Desktop polish must not make the mobile layout worse.

## 8. Template Reuse Rule

If two sample apps need the same layout, reuse the same layout pattern.

Do not redesign dashboard cards, forms, record cards, reports, or settings panels from scratch unless the workflow truly requires it.

## 9. Current Decision

The first UI target is a reusable small-business PWA shell that can support the Job Tracker PWA first, then Timesheet, Invoice Helper, and Field Work Log samples later.
