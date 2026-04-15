# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build (TypeScript errors are intentionally ignored)
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

This is a **single-page landing page** for Leonardo Frota's personal branding event — a 4-hour presential event on authority positioning.

### Page structure (`app/page.tsx`)

The page renders a sequence of section components in order:

1. `HeroSection` — Full-screen hero with parallax effects and CTA
2. `ProvaSection` — Social proof
3. `DorSection` — Pain points
4. `PromessaSection` — Promise/transformation
5. `SobreSection` — About Leonardo
6. `ConteudoSection` — Event content/agenda
7. `AutoridadeSection` — Authority signals
8. `OfertaSection` — Pricing and purchase CTA
9. `FaqSection` — FAQ accordion
10. `CtaFinalSection` — Final call-to-action
11. `FloatingCta` — Persistent floating button

### Key patterns

**Scroll animations**: All sections use `useScrollAnimation` hook (`hooks/use-scroll-animation.ts`), which wraps `IntersectionObserver`. Elements start hidden and animate in when scrolled into view. CSS animation classes (`scroll-fade-in`, `mobile-fade-up`, `scroll-fade-in-left/right`, `scroll-scale-in`) are defined in `app/globals.css` and toggled by adding the `.visible` class.

**Animation pattern in components:**
```tsx
const { ref, isVisible } = useScrollAnimation()
// ...
<div ref={ref} className={`scroll-fade-in ${isVisible ? "visible" : ""}`}>
```

**Color scheme**: Dark backgrounds (`#0A0F1C`, `#08080c`), cyan/blue accent (`#00BFFF`, `#00E5FF`). Colors are applied inline with `style` props rather than Tailwind config, since Tailwind v4 is used without a custom config file.

**shadcn/ui**: UI primitives live in `components/ui/`. The `Button` component with `asChild` prop wraps `<a>` tags for CTAs pointing to `https://pay.kiwify.com.br/P5bPQp4`.

**CSS utility classes** in `globals.css`: `btn-premium` (shimmer hover effect), `glass` (glassmorphism), `text-glow`, animation delay helpers (`.delay-100` through `.delay-500`, `.stagger-1` through `.stagger-5`). Animations respect `prefers-reduced-motion`.

### Tech stack

- **Next.js 16** (App Router), **React 19**, **TypeScript** (build errors ignored via `next.config.mjs`)
- **Tailwind CSS v4** with `@import 'tailwindcss'` syntax — no `tailwind.config.js`
- **shadcn/ui** components (Radix UI primitives)
- **Vercel Analytics** included in root layout
- **Geist / Geist Mono** fonts via `next/font/google`
- All section components are `"use client"` components
