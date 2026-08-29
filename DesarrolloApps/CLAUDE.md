# CLAUDE.md

This file gives Claude Code the project-specific context needed to work efficiently in this Angular repository.

## Project summary

- Angular 22 application with TypeScript
- Uses the Angular CLI and standard component-based architecture
- Current feature pattern is a routed page under `src/app/paginas/formulario/`

## Quick commands

- `npm start` — run the dev server
- `npm run build` — create the production build
- `npm test` — execute unit tests

## Important conventions

- Keep feature logic and templates close together in the same folder.
- Reuse the existing route pattern from `src/app/app.routes.ts`.
- Prefer the current app structure and naming conventions over introducing new patterns.
- When editing UI, preserve Angular component boundaries and avoid unrelated refactors.

## References

- [README.md](README.md)
- [package.json](package.json)
- [src/app/app.routes.ts](src/app/app.routes.ts)
- [src/app/paginas/formulario/formulario.ts](src/app/paginas/formulario/formulario.ts)

## Working style

- Be surgical: fix the task without broad churn.
- Match existing Angular coding style and project structure.
- Validate the changed behavior with the smallest relevant project command.
