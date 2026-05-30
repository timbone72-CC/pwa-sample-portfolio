# PWA Sample Portfolio Current State

## 1. Current Safe Head

9b3cbbb Polish Crew Task Board portfolio sections

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

## 2.1 Portfolio Home Page

Status:

Public portfolio home page exists and is live.

Live URL:

https://timbone72-cc.github.io/pwa-sample-portfolio/

Confirmed:

- `docs/index.html` exists
- local portfolio home page loads
- live portfolio home page loads
- all five live demo cards are linked
- Client-Inspired Capstone remains reserved and not built early

## 3. Confirmed Live Samples

### 3.1 Job Tracker

Status:

Complete first public demo.

Live URL:

https://timbone72-cc.github.io/pwa-sample-portfolio/job-tracker/

Last confirmed stable checkpoint:

d410fa9 Simplify Job Tracker portfolio navigation

Confirmed:

- live Job Tracker page loads after simplified portfolio navigation deploy
- Portfolio home link is present in Job Tracker
- FieldLedger proof-of-work link was removed from the app navigation section
- Job Tracker self-link was removed from the app navigation section
- Job Tracker now routes viewers back to the portfolio home hub

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
- Crew Task Board live portfolio section now links only to Portfolio home
- Crew Task Board live retest passed after hard refresh cleared cached bundle
- Crew Task Board local GitHub Pages-style path test passed
- Crew Task Board related links are visually separated
- Portfolio home link is present in Crew Task Board
- Crew Task Board now matches the Job Tracker-style Help / Future Options / About portfolio section format
- Crew Task Board duplicate trailing portfolio CSS block was removed
- Crew Task Board live GitHub Pages retest passed after section polish deploy

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
- Equipment Check Log no longer shows app-to-app demo links in the app navigation section
- Equipment Check Log live portfolio section now links only to Portfolio home
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
- Quote Builder live portfolio section now links only to Portfolio home
- Quote Builder no longer shows app-to-app demo links in the app navigation section
- Quote Builder cache/hard-refresh issue was cleared during live validation



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

## 6. Service Call Log

Service Call Log is deployed and live-validated.

Live URL:

https://timbone72-cc.github.io/pwa-sample-portfolio/service-call-log/

Confirmed:

- sample brief exists at `samples/service-call-log/SAMPLE_BRIEF.md`
- app shell exists at `samples/service-call-log`
- GitHub Pages copy exists at `docs/service-call-log`
- local build passed
- local browser workflow passed
- live URL returned HTTP 200
- live page loads
- add service call works
- saved call appears
- refresh persistence works
- Service Call Log live portfolio section now links only to Portfolio home
- Service Call Log no longer shows app-to-app demo links in the app navigation section
- Service Call Log no longer shows related sample links in the app navigation section
- Service Call Log no longer shows Quote Builder link in the app navigation section
- Service Call Log live retest passed after portfolio home link fix
- Service Call Log local GitHub Pages-style path test passed
- Service Call Log related links are visually separated
- Service Call Log metadata uses Service Call Log title, favicon, and manifest paths
- Portfolio home link is present in Service Call Log

## 7. Recent Commits

4a77cae Simplify sample app portfolio navigation
a9abaa5 Update checkpoint after Job Tracker portfolio navigation
d410fa9 Simplify Job Tracker portfolio navigation
11be587 Update checkpoint after Crew Task Board portfolio link
bf6dabc Add Crew Task Board portfolio home link
7e96b70 Update checkpoint after portfolio navigation polish
## 8. Next Best Step

Continue portfolio-wide navigation polish only if another sample still needs the simplified Portfolio home hub link pattern.

Current simplified navigation rule:

- each sample app should point viewers back to Portfolio home
- Portfolio home is the hub for choosing other apps
- app screens should not link to themselves as live demos
- GitHub/proof links should stay out of the main app navigation unless a separate developer/proof section is intentionally added later

Do not start the Client-Inspired Capstone yet.
