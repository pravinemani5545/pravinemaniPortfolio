# pravinemani.com — voice & engineering rules

This site reads like the work of a senior independent consultant: precise, measured, and backed by evidence. Every copy edit lands in this voice, or it doesn't ship.

## PRIMARY TONE — measured technical authority

**This overrides everything below it where there is conflict.** The register is a senior independent technical consultant writing for technical buyers. Calm, confident, outcome-first. It earns trust by being specific and accurate, not by being loud. The reference points are the best independent operators in AI, automation, and SEO consulting: polished and authoritative, never corporate-stiff and never hype.

### What the voice sounds like

| Element | Rule |
|---|---|
| Register | Measured and authoritative. Senior consultant, not hype-man and not corporate brochure. Let the work and the numbers carry the weight. |
| Sentence rhythm | Clear declarative sentences with an even, readable cadence. Fragments are allowed but rare, for genuine emphasis, not as a default style. |
| Lead with the outcome | Open with the result, the proof, or the specific. The claim first, the mechanism second. |
| Address | First person for the work ("I built", "I shipped"). Plain second person for the reader. Never the customer-service "we". |
| Concrete artifacts | Real numbers, tools, file paths, versions. `Next.js 16`, `3× organic in 16 months`, `70+ redirects` beat any adjective. |
| Evidence over assertion | Prefer a number or an artifact to a descriptor. If a claim can be proven, prove it inline. Never overclaim. |
| Restraint | Say it once, clearly. No slogans stacked for effect, no repetition for emphasis. Confidence reads as calm, not as volume. |

### Don't write

- Corporate filler: *leverage, synergy, empower, drive value, unlock, end-to-end solutions, cutting-edge.* Empty words read as junior, not senior.
- Hype and bravado: *"zero pitch," "this changes everything," "the unfair advantage."* Influencer-flex undercuts authority.
- SaaS-landing-page voice: *"Imagine a world where," "Tired of...?," "What you'll get."*
- Vanity metrics dressed as proof: commit counts, session counts, "lines of code." Use client and business outcomes instead.
- Hedging that signals uncertainty: *typically, generally, approximately, perhaps, somewhat.* State things plainly.

### Calibration test

Read any new prose aloud. Ask:

1. Would this sentence appear on the site of a respected senior consultant in this space? If yes, ship it.
2. Does it sound like a SaaS landing page or an influencer thread? Rewrite.
3. Does it sound like corporate jargon or a board update? Rewrite.
4. Is there a number, tool, or artifact I could add to make it more specific and credible? Add it.

The target sits between hype and corporate-stiff: polished, specific, and quietly confident.

---

## The reader

A technical buyer deciding whether to trust me with real money: a founder, agency owner, or ops lead who can read code or hire people who can. Skeptical and time-poor. They are deciding, in about 90 seconds, whether I do credible work and whether I'm a safe, professional choice. Inform that decision with evidence. Respect their time.

## Voice — senior independent consultant

The target is **measured, concrete, and credibility-forward**. It reads like a senior operator who has shipped real systems, writing plainly to a buyer who has too. Authority comes from specifics: named tools, real numbers, shipped outcomes. Confident without being loud, professional without being corporate. Lead with proof and let it do the persuading.

## The five rules

Apply these on every copy edit. Read the new text out loud — if it doesn't pass these, rewrite.

### 1. Open with the value or the verb. Never with throat-clearing.

```
NO   "It's worth noting that the 30-minute call is free."
YES  "The 30-minute call is free."

NO   "If you find yourself in a position where you need automation..."
YES  "If a workflow is eating your week, automate it."
```

### 2. Clear sentences over clutter.

```
NO   "Fixed scope, locked on day one, deployed by completion, with no surprises along the way."
YES  "Fixed scope, locked on day one and deployed by the agreed date. No surprises."
```

Break a cluttered sentence into clean ones. Don't chop everything into fragments for effect; an even, readable cadence reads more senior than staccato.

### 3. Concrete > abstract. Numbers, tools, artifacts.

```
NO   "Significant reduction in operational overhead."
YES  "$0/mo platform fee. ~$0.20/day in API tokens. Zero vendor lock-in."
```

If a sentence could describe any consultancy, rewrite until it can only describe this one.

### 4. Plain and precise, not hedged.

Strike hedges that signal uncertainty: *typically, generally, approximately, perhaps, may, might, somewhat, fairly, quite, rather, in most cases, often, sometimes, kind of, a bit, basically.* State facts directly. When something is genuinely uncertain, say so plainly ("not measured yet" beats "perhaps").

```
NO   "Typically, audits book approximately 2-3 weeks out."
YES  "Audits book 2-3 weeks out."
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

## Selling, professionally

A professional consultant sells. The rule is restraint: lead with proof, ask once, and let the work persuade.

### One clear CTA per page

Give each page one primary call to action, placed where it belongs (a single closing CTA, plus the hero on the homepage). Don't stack the same ask three times down a page; repetition reads as anxious, not confident.

- **Homepage:** hero CTA + one closing CTA.
- **Contact page:** the page is the CTA; multiple routes are fine.
- **Other pages:** one clear CTA, typically at the end. Lead with the substance, close with the ask.

Examples of a clean closing line:

- "Available for new engagements. [Discuss a project →](/contact/)"
- "If this maps to a problem you have, [start here](/contact/)."

### Lead with outcomes, not hooks

Open sections with the result or the specific, then invite the next step. Avoid manipulative hooks and hype:

- "Imagine a world where..." / "Tired of...?" / "Paying $X to...?"
- "What you get" / "What you receive" / "You'll get". Describe what's in the engagement; the value is self-evident.
- "We help you / I help you" followed by a vague benefit-promise.
- Bravado slogans: "zero pitch," "operator-to-operator" as a hook, "quick fit-check."

### Say it once

State price, scope, and response time clearly and once. Repeating "the call is free," "no scope creep," or "within 24 hours" on every section undercuts authority. One confident statement stands on its own.

## Signature phrases — use sparingly

Positioning shorthand. They can appear, but lead with proof, not with a slogan, and never stack them.

- "Fixed scope. Fixed price."
- "Code-first." / "You own the code."
- "$0 platform fee."
- "Built like an operator. Sold by the project." (hero tagline only, optional; a measured outcome line often does the job better.)

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
- "Zero pitch" / "No pitch" as a slogan (kept appearing as filler bravado)
- "Let's scope it" (appeared 9 times — every section closer)
- "Operator-to-operator" (kept being used as a hook word)

## Page-by-page tone

- **Homepage** — tightest. Lead with proof. Every sentence earns its place.
- **Services + verticals + sprints** — direct and specific. Each bullet starts with a noun or verb, never an article. Concrete deliverables over adjectives.
- **About** — measured narrative. Slightly longer sentences allowed. Credibility through specifics.
- **Why-code-first** — a reasoned argument. Strong, evidenced opinions stated calmly.
- **Case studies** — engineering-narrative. Numbers and artifacts everywhere: problem, approach, stack, timeline, outcome.
- **Writing** — clear, substantive build notes. A strong claim backed immediately.
- **Stack** — operator-direct. Tool, why, cost. No filler.

## Engineering rules

- Astro 6.3.5 + Tailwind v4 (via @tailwindcss/vite). Static site.
- Pages in `src/pages/`. Each page is a single `.astro` file with inline `<style is:global>`.
- Shared cross-page styles in `src/styles/shell.css`. **Vertical/sprint pages must reference `.vert-*` and `.sprint-*` classes from `shell.css`** — never duplicate inline. Caused a render-break bug once.
- Tokens in `src/styles/tokens.css` — load first. Don't override `--radius`.
- Terminal Design System: dark `#0a0a0a`, accent `#00FF41`, 1px `#2a2a2a` borders, zero border-radius, three fonts (Space Grotesk display / IBM Plex Sans body / JetBrains Mono uppercase chrome).
- No emojis in source.
- Vercel auto-deploys on push to `main`.

## Where docs live — IMPORTANT

This repo is **public**. Anything pushed lives forever in git history.

- **In this repo** (public): only this `CLAUDE.md`. Engineering and voice rules. No strategy, no pricing, no DM templates, no prospect lists, no ICP scoring.
- **In Obsidian** (private, not git-tracked): all strategy and outreach docs. Path: `~/obsidian/pravinemaniOS/Areas/Work/Projects/pravinemani-consulting/{strategy,audits,content}/`. Frontmatter required (see existing files for the convention).

Bug history: strategy docs (`launch-offers.md`, `next-steps-*.md`, `icp-audit-*.md`, `future-plans.md`, `repositioning-strategy.md`, `first-clients-*.md`) lived in `docs/` for two weeks and got pushed publicly. They were pulled out 2026-05-27. Don't re-create them here. If a future session asks me to write a strategy doc, the answer is: **write it in Obsidian, not in this repo.**

## Auto-narrowed knobs

- **GitHub feed** (`src/pages/index.astro` frontmatter) — refreshes on every Vercel deploy via build-time fetch. Falls back to hardcoded list if rate-limited or fetch fails. Authenticates with `GITHUB_TOKEN` env var if set.
- **Sitemap** — auto-generated by `@astrojs/sitemap`. No manual edit.
- **OG image** — `/public/og-default.png` (1200×630). Per-page override via `ogImage` prop on `<Base>`.

## When in doubt

Cut the sentence in half. Then cut it in half again. If the meaning still survives, that's the version that ships.
