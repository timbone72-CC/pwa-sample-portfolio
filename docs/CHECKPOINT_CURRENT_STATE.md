# PWA Sample Portfolio Current State

## 1. Current Safe Head

be1465d Add Service Call Log sample brief

## 2. Project

Project name:

pwa-sample-portfolio

Local path:

~/projects/pwa-sample-portfolio

Remote:

git@github.com:timbone72-CC/pwa-sample-portfolio.git

Branch:

main

GitHub Pages source:

main branch, /docs folder

## 3. Confirmed Live Samples

### 3.1 Job Tracker

Status:

Complete first public demo.

Live URL:

https://timbone72-cc.github.io/pwa-sample-portfolio/job-tracker/

Last confirmed stable checkpoint:

3bcf2ef Update checkpoint after final install check

### 3.2 Crew Task Board

Status:

Second public demo built, deployed, installed, and offline-tested.

Live URL:

https://timbone72-cc.github.io/pwa-sample-portfolio/crew-task-board/

Local source path:

samples/crew-task-board

Deployment path:

docs/crew-task-board

Confirmed working:

- live demo loads
- add task works
- refresh persistence works
- status persistence works
- delete persistence works
- task summary counts update correctly
- installed PWA uses its own name and icon
- installed app opens directly to Crew Task Board
- offline app shell reload works
- saved task remains offline through localStorage
- related Job Tracker demo link works from the live Crew Task Board app

### 3.3 Equipment Check Log

Status:

Third public demo built, deployed, and live-tested.

Live URL:

https://timbone72-cc.github.io/pwa-sample-portfolio/equipment-check-log/

Local source path:

samples/equipment-check-log

Deployment path:

docs/equipment-check-log

Confirmed working:

- local Vite build passes
- local dev app opens
- add equipment check works
- refresh persistence works through localStorage
- Equipment Check Log identity is applied
- GitHub Pages base path is configured for future deployment
- service worker registration path points to Equipment Check Log subpath
- unique sample icon files are present
- portfolio link area is present
- Crew Task Board demo link works from the live Equipment Check Log app
- Job Tracker demo link works from the live Equipment Check Log app
- add equipment check works in the live demo
- refresh persistence works in the live demo

### 3.4 Quote Builder

Status:

Fourth public demo built, deployed, and live-tested.

Live URL:

https://timbone72-cc.github.io/pwa-sample-portfolio/quote-builder/

Local source path:

samples/quote-builder

Deployment path:

docs/quote-builder

Confirmed working:

- local Vite build passes
- local dev app opens
- add quote works
- quote total calculates correctly
- refresh persistence works through localStorage
- Quote Builder identity is applied
- GitHub Pages base path is configured for future deployment
- service worker registration path points to Quote Builder subpath
- unique sample icon files are present
- portfolio link area is present
- live demo loads
- add quote works in the live demo
- quote total calculates correctly in the live demo
- refresh persistence works in the live demo
- Job Tracker demo link works from the live Quote Builder app
- Crew Task Board demo link works from the live Quote Builder app
- Equipment Check Log demo link works from the live Quote Builder app



## 4. Locked Portfolio Direction

The portfolio is a collection of lightweight, mobile-friendly workflow PWAs for real small-business, field work, crew, service, contractor, and owner/operator workflows.

Do not invent new sample apps midstream.

Build from the already-chosen marketable workflow list unless the roadmap is intentionally revised.

## 5. Sample App Icon Rule

Each sample PWA must have its own unique saved-app logo/icon before public install testing.

Preferred pattern:

- samples/<sample-id>/public/favicon.svg
- samples/<sample-id>/public/manifest.webmanifest

Do not reuse the same favicon/logo across all samples.

## 6. Service Call Log Planning

Service Call Log planning has started.

Confirmed:

- roadmap Next Best Step now points to Sample 5 — Service Call Log
- sample brief created at `samples/service-call-log/SAMPLE_BRIEF.md`
- no app shell files created yet
- no deployed demo exists yet

## 7. Next Best Step

Commit this checkpoint.

After that, decide whether to:

1. polish Crew Task Board live details, or
2. begin the next already-planned marketable sample.
