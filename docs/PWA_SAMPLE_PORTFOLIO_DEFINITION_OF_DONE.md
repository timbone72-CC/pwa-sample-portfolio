# PWA Sample Portfolio Definition of Done

## 1. Purpose

This document defines the required completion gates for PWA Sample Portfolio work.

A sample is not complete because source code was edited or a local build passed. Completion requires source validation, deployment validation, and an accurate checkpoint.

## 2. Done for a New Sample App

A new sample app is done only when:

1. Its identity, name, icon, manifest, and GitHub Pages base path are correct.
2. Its primary workflow works on phone-sized and desktop-sized screens.
3. Local persistence works after refresh where `localStorage` is used.
4. Its lower-page Help, Future Options, and About sections follow the UI standard.
5. Its About section links only to `/pwa-sample-portfolio/` with the label `Portfolio home`.
6. It contains no app-to-app navigation, self-links, GitHub links, or proof-of-work links inside app navigation.
7. Future items are clearly labeled as future, optional, or planned.
8. The production build passes.
9. The deployed `docs/<sample-id>` copy is rebuilt from the current `dist`.
10. The live GitHub Pages URL is tested after push.

## 3. Done for a UI Polish Pass

A UI polish pass is done only when:

1. The main workflow remains intact.
2. Shared cards, spacing, headings, and lower-page sections match the accepted reference apps.
3. Mobile readability and desktop readability are checked.
4. No fake active feature language is introduced.
5. No backend, login, or cloud claim is added unless the feature is built and tested.
6. Navigation still follows the locked Portfolio home hub rule.
7. The relevant source and deployed files are rebuilt, reviewed, and tested.

## 4. Source UI Validation

Source UI validation is done only when:

1. Run `npm run dev` in the sample app directory.
2. Use the normal Vite source-app URL: `http://localhost:5173/`.
3. Check the primary workflow on phone-sized and desktop-sized screens.
4. Refresh and confirm persistence where `localStorage` is used.
5. Confirm the lower-page sections and locked Portfolio home link rule.

Do not substitute `python -m http.server` or another Python `http.server` command for normal
source-app UI testing. Python `http.server` may be used intentionally to inspect built docs
output, but it is not the default source-app workflow.

## 5. Build Validation

Build validation is done only when:

1. Run `npm run build` in the sample app directory.
2. Confirm the production build passes.
3. Confirm the current `dist` output was generated from the intended source.

## 6. Docs Deployment Copy

The docs deployment copy is done only when:

1. Copy the generated `dist` contents into `docs/<sample-id>`.
2. Confirm the deployed docs folder contains the expected current build output.
3. Run `git diff --check`.
4. Run `git status --short`.
5. Confirm only expected files changed.

## 7. Done for Deployment

A deployment is done only when:

1. Source UI validation is complete.
2. Build validation is complete.
3. The docs deployment copy is complete.
4. The intended changes are committed.
5. The commit is pushed.

## 8. Live GitHub Pages Validation

Live GitHub Pages validation is done only after the deployment commit is pushed.

Required checks:

1. Open the sample GitHub Pages URL.
2. Confirm the page loads without a broken asset path.
3. Check the primary workflow.
4. Refresh and confirm persistence where `localStorage` is used.
5. Check phone-sized and desktop-sized layouts.
6. Confirm the About link opens Portfolio home.
7. Confirm there are no broken, app-to-app, self, GitHub, or proof-of-work links inside app navigation.
8. Account for service-worker caching when validating a changed deployed bundle.

Do not make a final `complete` claim until the live URL has been tested.

## 9. Checkpoint Update

A checkpoint update is done only when:

1. The relevant source, deployment, and live-validation work is complete.
2. `git log` is read after the deployment commit exists.
3. The checkpoint current safe head matches the actual git `HEAD` after the checkpoint commit.
4. Recent commits are rebuilt from the real `git log`, not manually guessed.
5. Confirmed behaviors are based on completed tests, not planned work.
6. The checkpoint states the real next step.
7. The checkpoint does not claim that the Client-Inspired Capstone has started.

## 10. Required Workflow

Use this order for sample implementation, polish, or deployment work:

1. Update source.
2. Run `npm run dev` and test the source app at the normal Vite URL: `http://localhost:5173/`.
3. Run `npm run build`.
4. Copy `dist` into `docs/<sample-id>`.
5. Run `git diff --check`.
6. Verify expected files only with `git status --short`.
7. Commit the intended files.
8. Push the commit.
9. Live-test the GitHub Pages URL.
10. Update the checkpoint from the real `git log`.

Do not use random alternate local server workflows unless a specific validation need requires
one. Do not substitute Python `http.server` for normal source-app UI testing. Python
`http.server` may be used intentionally for built docs output testing only.

## 11. Checkpoint Discipline

The checkpoint must match repository reality:

- current safe head matching actual git `HEAD` after the checkpoint commit
- recent git log
- deployed state
- live-tested state
- known remaining work

Do not record planned behavior as confirmed behavior.
Rebuild the recent-commits section from real `git log` output. Do not manually guess commit IDs
or commit order.

## 12. Stop Conditions

Do not call work complete when:

- the build has not passed
- the deployed docs folder was not rebuilt
- unexpected files are modified
- the live URL was not tested after push
- service-worker caching makes the live result uncertain
- the checkpoint current safe head does not match actual git `HEAD` after the checkpoint commit
- recent checkpoint commits were not rebuilt from real `git log`

Do not start the Client-Inspired Capstone until the portfolio sample-control work is intentionally closed.
