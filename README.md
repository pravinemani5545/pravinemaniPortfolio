# pravinemani.com

Portfolio and consultancy site for Pravine Mani: services, work, AI workflows, writing, stack, contact. Live at [pravinemani.com](https://pravinemani.com).

Built with **Astro 6** + **Tailwind v4**. Static output. Auto-deployed to Vercel on push to `main`.

## Stack

- [Astro](https://astro.build), static site framework
- [Tailwind v4](https://tailwindcss.com). CSS utility framework (via Vite plugin)
- Terminal Design System, dark-first, mono+display+body fonts, one accent (#00FF41)
- [Plausible](https://plausible.io), analytics

## Local dev

```bash
pnpm install
pnpm dev          # → http://localhost:4321
pnpm build        # → ./dist/
pnpm preview      # serve built site
```

## Structure

```
src/
  layouts/Base.astro       # head, nav, footer, global scripts
  components/
    Nav.astro              # sticky nav with active-route detection
    Footer.astro
  pages/                   # file-based routing
    index.astro            # /
    services/index.astro   # /services/
    work/index.astro       # /work/
    work/case-studies/cisnet/index.astro
    ai/index.astro         # /ai/, workflows, skills, MCPs, process
    writing/index.astro
    stack/index.astro
    now/index.astro
    about/index.astro
    contact/index.astro
  styles/
    global.css             # @import tailwindcss + tokens + shell
    tokens.css             # Terminal DS variables
    shell.css              # shared nav/footer/page-hero/section chrome
public/
  favicon.png
  robots.txt
```

## Deploy

Vercel auto-detects Astro and runs `astro build` → serves `dist/`. No adapter needed for static output.

## License

Code: MIT. Content © Pravine Mani.
