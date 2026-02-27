# Next Coding Challenge

A small Next.js 16 + React 19 application that demonstrates:

- App Router structure
- Styled-components based design system
- Reusable UI components (`Header`, `LandscapeSection`, `Modal`)
- Storybook stories for visual component development

## Scope

The project is intentionally compact and focuses on front-end quality fundamentals:

- component composition
- UI consistency through shared theme tokens
- accessibility basics for interactive UI (modal + buttons)
- modern Next.js metadata and SEO helpers

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- styled-components 6
- Storybook 10
- ESLint 9 with `eslint-config-next`

## Scripts

- `npm run dev` — start local Next.js dev server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — run ESLint
- `npm run storybook` — start Storybook
- `npm run build-storybook` — build Storybook static output

## Run Locally

1. Install dependencies:

	```bash
	npm install
	```

2. Start the app:

	```bash
	npm run dev
	```

3. Open `http://localhost:3000`

## Project Structure

- `src/app` — app routes, layout, metadata, and global styles
- `src/components` — reusable UI components
- `src/design-system` — theme, provider, and shared styled primitives
- `src/stories` — Storybook stories for components

## Notes

- `storybook-static/` is generated build output and is ignored by lint.
- Fonts are configured with `next/font` in the root layout.
