# AGENTS.md

## Project overview

This repository is an Angular 22 + TypeScript application created with Angular CLI. The app is organized around a simple routed UI and uses standalone components.

## Working conventions

- Use Angular component conventions: `*.ts`, `*.html`, and `*.css` files stay together in the same feature folder.
- Keep feature code under `src/app/` and prefer existing app structure before creating new abstractions.
- The current routing entry point is in `src/app/app.routes.ts`; the root route renders the `Formulario` page.
- Follow the existing naming pattern: PascalCase component classes such as `Formulario` and `App`.
- Prefer simple, local state and Angular built-ins over introducing extra frameworks or state libraries.
- Preserve the current app shell: `App` bootstraps `RouterOutlet`, and feature pages are mounted via routes.

## Commands

- Start development server: `npm start`
- Build production bundle: `npm run build`
- Run tests: `npm test`

## Important files

- [README.md](README.md) — project setup and Angular notes
- [package.json](package.json) — scripts and dependencies
- [src/app/app.routes.ts](src/app/app.routes.ts) — route configuration
- [src/app/paginas/formulario/formulario.ts](src/app/paginas/formulario/formulario.ts) — existing feature example

## Guidance for AI agents

- Make the smallest change that fits the existing Angular patterns.
- Reuse the current component structure instead of introducing new folder conventions.
- When adding new pages or routes, update the route configuration and keep the root app shell minimal.
- Validate behavior with the relevant Angular command before finishing work.
