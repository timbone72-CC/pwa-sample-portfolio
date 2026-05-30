# PWA Sample Portfolio Sample Review Checklist

## 1. Purpose

Use this checklist before calling any PWA Sample Portfolio app professional, complete, or ready to show publicly.

The reviewer must check the real source app, the rebuilt deployment copy, and the live GitHub Pages URL.

## 2. Starting State

- [ ] Run `git status --short`.
- [ ] Confirm the repo is clean before starting, or record and protect any intentional existing changes.
- [ ] Confirm the review is for the intended sample only.
- [ ] Confirm the Client-Inspired Capstone has not been started as part of sample review work.

## 3. Sample Identity

- [ ] Confirm the app name is correct in the UI.
- [ ] Confirm the sample identity is correct in metadata.
- [ ] Confirm the favicon and install icon belong to this sample.
- [ ] Confirm the manifest identifies the correct sample.
- [ ] Confirm the GitHub Pages base path matches the sample ID.

## 4. Layout Review

- [ ] Open the app on a phone-sized screen.
- [ ] Open the app on a desktop-sized screen.
- [ ] Confirm the app loads without horizontal scrolling in normal views.
- [ ] Confirm headings, card spacing, and text contrast are readable.
- [ ] Confirm buttons and form controls are easy to tap.
- [ ] Confirm the main workflow remains visually focused.

## 5. Workflow Review

- [ ] Complete the primary workflow from start to finish.
- [ ] Confirm the saved record appears correctly.
- [ ] Refresh the page.
- [ ] Confirm saved data persists after refresh where `localStorage` is used.
- [ ] Confirm status values, totals, checklist values, or other app-specific results are correct.
- [ ] Confirm delete or other available record actions work.

## 6. Lower-Page UI Review

- [ ] Confirm the Help section uses the eyebrow `Help`.
- [ ] Confirm the Help heading is `How this sample works`.
- [ ] Confirm Help cards describe the actual workflow.
- [ ] Confirm the Future Options section uses the eyebrow `Future Options`.
- [ ] Confirm the Future Options heading is `Clear roadmap previews`.
- [ ] Confirm every future item is clearly labeled future, optional, or planned.
- [ ] Confirm future items do not look active.
- [ ] Confirm the About section uses the eyebrow `About`.
- [ ] Confirm the About heading is `Portfolio links`.
- [ ] Confirm About briefly identifies the PWA Sample Portfolio.

## 7. Navigation Review

- [ ] Confirm the only link inside sample-app navigation or About is `Portfolio home`.
- [ ] Confirm the `Portfolio home` target is `/pwa-sample-portfolio/`.
- [ ] Confirm Portfolio home opens successfully.
- [ ] Confirm there are no broken links.
- [ ] Confirm there is no app-to-app sample navigation.
- [ ] Confirm there is no self-link.
- [ ] Confirm there are no GitHub links in app navigation.
- [ ] Confirm there are no proof-of-work links in app navigation.

## 8. Build and Deployment Review

- [ ] Run `npm run dev` using the normal Vite localhost workflow.
- [ ] Test the source app at the normal Vite URL: `http://localhost:5173/`.
- [ ] Do not substitute Python `http.server` for normal source-app UI testing.
- [ ] Use Python `http.server` only intentionally for built docs output testing when needed.
- [ ] Confirm the local app works.
- [ ] Run `npm run build`.
- [ ] Confirm the build passes.
- [ ] Copy the current `dist` into `docs/<sample-id>`.
- [ ] Confirm the deployed docs folder was rebuilt.
- [ ] Run `git diff --check`.
- [ ] Confirm `git diff --check` passes.
- [ ] Run `git status --short`.
- [ ] Confirm only expected files changed.

## 9. Live Review

- [ ] Commit the intended files.
- [ ] Push the commit.
- [ ] Open the live GitHub Pages URL after push.
- [ ] Confirm the live app loads.
- [ ] Confirm the primary workflow works live.
- [ ] Refresh and confirm persistence live where `localStorage` is used.
- [ ] Confirm the live Portfolio home link works.
- [ ] Account for service-worker caching before approving the deployed result.

## 10. Checkpoint Review

- [ ] Read the real current `HEAD`.
- [ ] Read the recent git log.
- [ ] Update the checkpoint after live validation.
- [ ] Confirm the checkpoint current safe head matches actual git `HEAD` after the checkpoint commit.
- [ ] Rebuild recent checkpoint commits from the real git log instead of manually guessing them.
- [ ] Confirm the checkpoint records only tested behavior as confirmed.
- [ ] Confirm no final `complete` claim was made before the live GitHub Pages URL was tested after push.

## 11. Fail Conditions

Approval is blocked if any of these conditions remain:

- the repo state is unexplained
- sample identity, icon, manifest, or base path is wrong
- the primary workflow fails
- refresh persistence fails where `localStorage` is used
- phone-sized or desktop-sized layout is broken
- the UI section pattern is missing or inconsistent
- a future option looks active
- an app-to-app link, a self-link, a GitHub link, or a proof-of-work link appears inside sample-app navigation
- the Portfolio home link is broken or does not target `/pwa-sample-portfolio/`
- another link is broken
- the app makes a fake backend, login, or cloud claim
- the build fails
- the deployed docs output is stale
- the live GitHub Pages URL was not tested after push
- the checkpoint current safe head does not match actual git `HEAD` after the checkpoint commit
- recent checkpoint commits were not rebuilt from real git log

Do not approve the sample until every blocking condition is resolved.
