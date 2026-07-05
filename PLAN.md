# Alberto Academy Website Plan

## Project Baseline

- Framework: Next.js App Router with TypeScript.
- Package manager: npm.
- Styling: Tailwind CSS with global brand tokens.
- Fonts: Playfair Display for headings, Inter for body copy.
- Brand palette: `#BF092F`, `#132440`, `#16476A`, `#3B9797`.
- Image strategy: custom generated imagery saved into `public/images` and rendered with `next/image`.
- Repository: local folder initialized as a Git repo and connected to `carlosreynag06/alberto-academy`.

## Phase 1 - Homepage

- Build a premium responsive homepage in one pass.
- Include sections: Home, About Me, Curriculum, Why Alberto Academy, Learning Path, Success Stories, FAQ, Contact.
- Add a trial session booking interface.
- Add header navigation for future pages: Home, About Us, Programs, Testimonials, Pricing.
- Add footer links for resources, FAQ, and legal pages.
- Optimize hero imagery through Next.js image handling.
- Verify lint/build and run a local dev server.

## Future Pages

- About Us: Alberto's story, teaching credentials, methodology, and values.
- Programs: detailed tutoring tracks for conversation, business English, academic English, and exam preparation.
- Testimonials: expanded student stories with results, quotes, and outcomes.
- Pricing: packages, lesson frequency, trial details, and comparison table.
- Contact: full booking flow, contact details, and availability notes.
- Legal: privacy policy, terms of service, accessibility statement.

## Quality Checklist For Every Phase

- Mobile-first layout with clean tablet and desktop breakpoints.
- Clear hierarchy using Playfair Display headings and readable Inter body copy.
- No broken navigation links inside the current phase scope.
- Fast visual loading with optimized images and accurate alt text.
- Accessible controls, labels, color contrast, and keyboard-friendly interactions.
- English copy polished for a premium educational brand.
- Run `npm run lint` and `npm run build` before handoff when possible.

## Open Decisions

- Confirm the final domain before updating metadata URLs.
- Decide whether the booking form should connect to email, Calendly, a CRM, or a custom backend.
- Confirm exact program/pricing details before building those future pages.
- Replace placeholder success metrics with real business numbers when available.
