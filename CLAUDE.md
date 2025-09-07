# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (Spanish/English) restaurant website for "Zoco Restaurant" built with Astro and deployed on Cloudflare. The site features traditional Arabic cuisine content with a modern web stack.

## Essential Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint on .js/.ts/.astro files
- `pnpm lint:fix` - Auto-fix ESLint issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm typecheck` - Run Astro type checking

## Architecture

### Tech Stack
- **Framework**: Astro 5.x with TypeScript
- **Styling**: Tailwind CSS 4.x
- **Deployment**: Cloudflare (with adapter)
- **Analytics**: Google Analytics via Partytown
- **Animations**: GSAP

### Internationalization
The site uses Astro's built-in i18n with custom routing:
- Default locale: Spanish (`es`)
- Secondary locale: English (`en`)
- Translation system in `src/i18n/`: 
  - `ui.ts`: Contains all translations and route mappings
  - `utils.ts`: Helper functions for language detection, translations, and path generation

### Key Patterns
- **Path aliases**: Use `@/` for src root, `@/components`, `@/layouts`, etc.
- **Translation function**: Import `useTranslations(lang)` from `@/i18n/utils`
- **Localized routing**: Routes are defined per language in `src/i18n/ui.ts`

### Component Structure
- `Layout.astro`: Main page wrapper with Head, Header, Footer
- Navigation components: `NavMain`, `NavLegal`, `NavSocial`, `LanguagePicker`
- Icon components in `src/components/icons/`

### Important Configuration
- Images use `noop` service (no processing) for Cloudflare compatibility
- Partytown configured for Google Analytics offloading
- Sitemap generation enabled
- Image service disabled due to Cloudflare limitations

## Development Notes

### Cloudflare Setup
- Uses `@astrojs/cloudflare` adapter
- Requires `wrangler.toml` for KV namespaces if using sessions
- Image processing disabled (Sharp not supported in Cloudflare runtime)

### Internationalization Development
- Add new translations to both `es` and `en` objects in `src/i18n/ui.ts`
- Route translations go in the `routes` object
- Use `getLangFromUrl()` and `useTranslations()` utilities in components
- Page files: Spanish pages in `src/pages/`, English pages in `src/pages/en/`