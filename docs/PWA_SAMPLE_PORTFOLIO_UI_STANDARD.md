# PWA Sample Portfolio UI Standard

## 1. Purpose

This document is the source of truth for visual consistency across the PWA Sample Portfolio.

The portfolio contains lightweight, mobile-friendly PWA workflow samples. Every sample must feel like part of one professional portfolio while keeping its own workflow easy to understand.

## 2. Shared Professional Feel

Every sample app must use a clear small-business work-app presentation:

- soft neutral page background
- white or near-white cards
- dark readable text
- restrained blue or slate accents
- clear destructive-action styling
- generous spacing
- touch-friendly controls
- simple mobile-first layout
- low visual clutter

The app should be understandable within a short review on a phone or desktop screen.

## 3. Required Visual Consistency

The following must visually match across sample apps:

1. Card rhythm: sections use consistent margins, padding, border radius, borders, and restrained shadows.
2. Spacing rhythm: forms, cards, headings, and informational sections must not feel cramped or uneven.
3. Heading hierarchy: eyebrow labels, section headings, and body text use a predictable hierarchy.
4. Form readability: labels appear clearly above inputs, controls are large enough to tap, and primary actions are obvious.
5. Saved-record presentation: records use readable cards, concise detail groupings, and clear status treatment where appropriate.
6. Mobile friendliness: normal app views must work without horizontal scrolling and remain readable on phone-sized screens.
7. Contrast: text, links, controls, and status labels must remain readable against their backgrounds.
8. Lower-page informational sections: Help, Future Options, and About use a consistent professional card format.

## 4. Allowed App-Specific Differences

Each sample may remain unique where the workflow requires it:

- app name and icon
- field labels and validation rules
- record details
- status values
- calculations
- summary values
- checklist items
- workflow-specific notes
- workflow-specific future-option examples

Do not redesign the shared shell or lower-page structure merely to make one sample look different.

## 5. Required Lower-Page Pattern

Each sample app must include these sections where appropriate, in this order:

### 5.1 Help

- Eyebrow: `Help`
- Heading: `How this sample works`
- Content: compact cards or a compact grid explaining the real workflow

The Help section must describe what the current app actually does.

### 5.2 Future Options

- Eyebrow: `Future Options`
- Heading: `Clear roadmap previews`
- Content: compact cards or a compact grid listing possible future add-ons

Every future item must be labeled clearly, such as:

- `Future Add-on`
- `Optional Module`
- `Planned`

Future items must not look active or imply that unfinished features work now.

### 5.3 About

- Eyebrow: `About`
- Heading: `Portfolio links`
- Content: a brief explanation that the sample belongs to the PWA Sample Portfolio
- Link: `Portfolio home`
- Link target: `/pwa-sample-portfolio/`

## 6. Locked Navigation Rule

Portfolio home is the hub for choosing sample apps.

Inside sample-app navigation and About sections:

1. Link only to `/pwa-sample-portfolio/`.
2. Use the label `Portfolio home`.
3. Do not add app-to-app sample navigation.
4. Do not add a self-link.
5. Do not add GitHub links.
6. Do not add proof-of-work links.

This rule supersedes older portfolio-link recommendations in prior planning documents.

Planning documents may still describe possible future relationships between samples. Those
relationship notes are planning context only. They do not authorize app-to-app links inside
sample apps.

## 7. Focused Main Workflow

Each app must keep its primary workflow focused:

- show the main form or action clearly
- show saved records clearly
- keep supporting information below the workflow
- avoid unrelated promotional links inside the working app
- avoid unnecessary settings or controls

## 8. Honest Feature Language

Do not claim that a backend, login, cloud sync, export, offline workflow, integration, or other feature exists unless it is actually built and tested in that sample.

Future possibilities belong in the Future Options section and must remain clearly labeled.
Use labels such as `Future Add-on`, `Planned`, or `Optional Module`. A future item must not
look clickable or imply active functionality.

## 9. Accepted Reference Apps

The accepted visual reference apps are:

- `samples/job-tracker`
- `samples/crew-task-board`

Use their lower-page informational structure as the current consistency target.

## 10. Required Audit Targets

Audit these samples against this standard before calling portfolio-wide UI polish complete:

- `samples/equipment-check-log`
- `samples/quote-builder`
- `samples/service-call-log`

## 11. Scope Control

Do not start the Client-Inspired Capstone during sample consistency work.

Any intentional change to this UI standard must be documented before broad app redesign work begins.
