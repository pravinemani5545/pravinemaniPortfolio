# pravinemani.com — voice & engineering rules

This site is built like an essay, not a brochure. Every copy edit lands in the same voice as the rest of the site, or it doesn't ship.

## PRIMARY TONE — direct and professional

**This overrides everything below it where there is conflict.** The site reads as a working professional documenting their practice, not a contrarian operator flexing for an audience. The Koe / Thariq influences below are about *clarity and specificity*, NOT about contrarian one-liners or operator-flex quips.

**Do not write:**
- Metaphor-quips like *"the build log is the receipt,"* *"the unfair feature,"* *"the lookup-and-paste API,"* *"the abstraction that fails first under real load,"* *"the line most builds forget."* Each of those drifts the voice into pitchy / influencer-flex register.
- Sentence fragments used for stylistic punch when a full sentence would be clearer. Punctuation as pacing is a Koe technique — use it sparingly, not as a default.
- Contrarian gatekeeping (*"if you don't ship, this isn't for you,"* *"the absences matter as much as the inclusions"*).
- Brand-voice slogans dropped mid-paragraph (*"sold by the project,"* *"built like an operator"*) — these belong in the hero tagline, not everywhere.

**Do write:**
- Full sentences that state the operational reality plainly. "Every client deploy ships through Vercel; the build logs serve as the production deployment record" beats "build log is the receipt."
- Industry-standard vocabulary first; opinionated framing second.
- The technical claim, not the rhetorical wrapper around it.

When in conflict with anything below: **direct and professional wins.**

---

## The reader

A technical operator who already builds. Not someone being sold to. They came here to see if I do real work, what I build with, and how. They don't need to be persuaded. They need to be informed enough to decide for themselves.

The site exists to document the practice. Not to sell it. If the work is good, the work sells. If the prose has to do the selling, the work isn't good enough.

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

## Anti-pitch rules

This is the hardest rule and the one I keep failing. The site keeps drifting into "landing page voice." Fix it.

### One CTA per page, at most

The contact button on a section closer is a tell. If a page ends `Headline question? Pitch close. Book a 30-min call →`, it reads like a sales page. The reader doesn't need to be asked four times.

- **Homepage:** hero CTA + one closing CTA. That's it.
- **Contact page:** all the CTAs you want (the page is the CTA).
- **Every other page:** at most one quiet, one-line link to /contact/ at the bottom. Often zero. Let the page end on substance.

### Banned closings

These formulas appeared 8+ times across the site at once. They scream "sales page." Never write any of them again:

- `Have a workflow eating your week? Let's scope it.`
- `30 minutes. Zero pitch.`
- `You describe the problem. I tell you whether AI is the fix.`
- `Real quote in writing within 24 hours.`
- `Ends with a written quote.`
- `Operator-to-operator.` (it's fine on /contact/ once. Cut everywhere else.)
- "Quick fit-check."

If a page needs a quiet pointer to /contact/ at the bottom, write one line. Examples that pass:

- "Available for new engagements. [Discuss a project →](/contact/)"
- "More on what I build: [/services/](/services/) or [/contact/](/contact/)."
- "If a similar problem fits, [the contact page is here](/contact/)."

### Banned framing

- "What you get" / "What you receive" / "You'll get" / "You walk away with"
  Just describe what's in the engagement. The reader infers the value.
- "We help you / I help you" (when followed by a benefit-promise)
- "Imagine a world where..."
- "Tired of...?"
- "Paying $X to...?" as a hook
- "Need similar work for your business?"

### Banned sales positioning

- "The 30-minute call is free" repeated more than once per page
- "No retainer creep" / "No scope creep" repeated. Say it once on /services/ and let it stand.
- Repeating the response time ("within 24 hours") on every section. Say it once on /contact/.

### When in doubt, describe — don't sell

```
NO   "Have a workflow eating your week?
      Let's scope it.
      30-min call. Zero pitch. You describe the problem.
      I tell you whether AI is the fix and which engagement matches.
      Real quote in writing within 24 hours.
      [Book the call →]"

YES  (just end the section on the actual content.
      One quiet link to /contact/ at the bottom of the page, if at all.)
```

## Signature phrases — keep these

These earned their keep. Don't rewrite them. Don't repeat them either.

- "Built like an operator. Sold by the project." (hero tagline only)
- "$0 platform fee."
- "Code-first."
- "Fixed scope. Fixed price."
- "I ship. You review." (process step heading on homepage only)

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
