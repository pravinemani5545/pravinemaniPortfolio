# pravinemani.com — voice & engineering rules

This site is built like an essay, not a brochure. Every copy edit lands in the same voice as the rest of the site, or it doesn't ship.

## Voice — Dan Koe meets Thariq Shihipar

The target is **declarative, concrete, conviction-loaded**. Two reference influences:

- **Dan Koe** — short sentences. Strong openers. Punctuation as pacing. Direct address ("you"). One-line claims that land. Avoids fluff, avoids preamble. Reads more like a manifesto than a sales page.
- **Thariq Shihipar** (CPR essay style) — engineering-narrative. Concrete artifact first, abstraction second. Specific numbers, specific tools, specific timings. Builds up from problem → mechanism → implication. No throat-clearing.

The combined register is **direct, technical, conviction-loaded**. It reads like an operator who actually ships, talking to operators who ship.

## The five rules

Apply these on every copy edit. Read the new text out loud — if it doesn't pass these, rewrite.

### 1. Open with the value or the verb. Never with throat-clearing.

```
NO   "It's worth noting that the 30-minute call is free."
YES  "The 30-minute call is free."

NO   "If you find yourself in a position where you need automation..."
YES  "If a workflow is eating your week, automate it."
```

### 2. Short declaratives. Period over comma.

```
NO   "Fixed scope, locked on day one, deployed by completion, no surprises."
YES  "Fixed scope. Locked day one. Deployed by week's end. No surprises."
```

If two clauses can be two sentences, make them two sentences.

### 3. Concrete > abstract. Numbers, tools, artifacts.

```
NO   "Significant reduction in operational overhead."
YES  "$0/mo platform fee. ~$0.20/day in API tokens. Zero vendor lock-in."
```

If a sentence could describe any consultancy, rewrite until it can only describe this one.

### 4. Conviction, not hedging.

Strike from drafts: *typically, generally, approximately, perhaps, may, might, somewhat, fairly, quite, rather, in most cases, often, sometimes, kind of, a bit, basically.*

Exceptions are rare. When the sentence needs uncertainty, state it directly ("I'm not sure yet" beats "perhaps").

```
NO   "Typically, audits book approximately 2-3 weeks out."
YES  "Audits book 2-3 weeks out. Ask when you book."
```

### 5. No corporate verbs.

Strike: *leverage, deliver (as verb), facilitate, utilize, engage with, productize (as verb), align around, drive value, unlock, enable, empower, optimize, streamline.*

Use: *ship, build, run, send, hit, replace, rebuild, write, gut, rip, swap.*

```
NO   "We leverage Claude Code to deliver production-grade workflows."
YES  "I build with Claude Code. The workflow ships in code, in git, on Vercel."
```

## Em-dashes are banned

No em-dash (`—`) appears anywhere in source: pages, JSON-LD, llms.txt, components, layouts, comments, README. Where the writing wants a break, use a period. Where it wants a pause, use a comma. Where it wants a definition, use a colon. Where it wants a separator in a title, use the middle dot (`·`).

```
NO   "Pravine Mani — Toronto operator."
YES  "Pravine Mani · Toronto operator."
```

Bug history: I wrote a regex sweep once that replaced ` — ` with `. ` by default. It worked for most prose but broke `<strong>Day 0</strong> — task` patterns. If you ever need to do another bulk em-dash sweep, run it in two passes: titles/metadata to `·`, then body to `.`/`,`/`:` based on context, then visually audit every `<strong>...</strong>.` and `, <a>` boundary.

## Length discipline

- **Hero H1:** 6-10 words. One line ideally, two max.
- **Hero lead `<p class="lead">`:** 2-3 sentences. ~50-80 words.
- **Section H2:** 4-8 words. Punch, not paragraph.
- **Card body `<p>`:** 2-4 sentences. Lead with the value.
- **FAQ answer:** 2-4 sentences. Direct. No "Great question."

If a paragraph runs past 4 sentences, it's two paragraphs.

## Contractions

Default: **use them.** This is direct register, not legal-formal.

- `I'll`, `you're`, `don't`, `won't`, `can't`, `isn't`, `we're`, `that's`, `here's`, `you'll`, `it's`
- Avoid only when the sentence reads stronger uncontracted (rare).

## Signature phrases — keep these

These are positioning. Don't rewrite them:

- "Built like an operator. Sold by the project."
- "No pitch."
- "Zero pitch."
- "Operator-to-operator."
- "I ship. You review."
- "$0 platform fee."
- "Code-first."
- "Fixed scope. Fixed price."

## What to remove on every pass

- "It's worth noting"
- "In order to"
- "At the end of the day"
- "Going forward"
- "Reach out" (use "DM me" or "email me" or specific)
- "Awesome" / "amazing" / "great" as adjectives
- "Solutions" (in business sense) — use "the build" or "the workflow"
- "Stakeholders" — name them (founders, sales, ops)
- "Synergies" — never
- "Ecosystem" (loosely used) — never

## Page-by-page tone tightness

- **Homepage** — punchiest. Every sentence earns its place.
- **Services + verticals + sprints** — direct, value-loaded. Each bullet starts with a noun or verb, never with an article.
- **About** — narrative permission for slightly longer sentences. Still direct.
- **Why-code-first** — manifesto register. Strongest opinions, shortest sentences.
- **CISNET case study** — engineering-narrative. Concrete numbers everywhere.
- **Writing** — Dan Koe register. Short bait, strong claim.
- **AI manifest, Stack** — operator-direct. Tool, why, cost. No explanations.

## Engineering rules

- Astro 6.3.5 + Tailwind v4 (via @tailwindcss/vite). Static site.
- Pages in `src/pages/`. Each page is a single `.astro` file with inline `<style is:global>`.
- Shared cross-page styles in `src/styles/shell.css`. **Vertical/sprint pages must reference `.vert-*` and `.sprint-*` classes from `shell.css`** — never duplicate inline. Caused a render-break bug once.
- Tokens in `src/styles/tokens.css` — load first. Don't override `--radius`.
- Terminal Design System: dark `#0a0a0a`, accent `#00FF41`, 1px `#2a2a2a` borders, zero border-radius, three fonts (Space Grotesk display / IBM Plex Sans body / JetBrains Mono uppercase chrome).
- No emojis in source.
- Vercel auto-deploys on push to `main`.

## Auto-narrowed knobs

- **GitHub feed** (`src/pages/index.astro` frontmatter) — refreshes on every Vercel deploy via build-time fetch. Falls back to hardcoded list if rate-limited or fetch fails. Authenticates with `GITHUB_TOKEN` env var if set.
- **Sitemap** — auto-generated by `@astrojs/sitemap`. No manual edit.
- **OG image** — `/public/og-default.png` (1200×630). Per-page override via `ogImage` prop on `<Base>`.

## When in doubt

Cut the sentence in half. Then cut it in half again. If the meaning still survives, that's the version that ships.
