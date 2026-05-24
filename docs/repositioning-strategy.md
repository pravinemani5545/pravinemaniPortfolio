# Repositioning Strategy — AI · SEO · Marketing Automation Consultancy

> Internal planning doc. Tracks the repositioning currently in flight (May 2026): from "AI automation for solo founders" to a Toronto consultancy across three focus areas — AI, SEO + GEO, and marketing automation.
>
> Items kept deliberately vague on the live site (specific slot counts, exact engagement timings, deliverable counts) are captured here for the next iteration once Pravine has finalized the execution shape.

---

## 1. Thesis

Current positioning is too narrow ("AI automation for solo founders, code-first stack"). It locks out two adjacent buyers who already pay for similar work:

- **SMBs** that need SEO + marketing automation work and have starting noticing the AI angle
- **Operators inside larger teams** who want fractional AI/SEO/marketing-tech help

New positioning: a Toronto consultancy organized around three focus areas — AI, SEO + GEO, marketing automation — with the same operator-voice, code-first delivery underneath. "Consultancy" label for search/category; operator voice for differentiation inside that category.

Comparison anchor: [signalandform.ca](https://signalandform.ca/) (Vancouver) — same lane, opposite aesthetic. Do not copy their copy register; their generic agency-speak is the gap we exploit.

---

## 2. Vertical × Engagement Matrix (parked for finalization)

The site currently shows three vertical labels (AI / SEO + GEO / Marketing Automation) and the four legacy engagement shapes (Audit / Sprint / Advisory / Custom). The intended matrix below is **not yet locked in** — published only as flexible descriptors until the operational specifics are decided.

|                            | **AI**                                                            | **SEO + GEO**                                                       | **Marketing Automation**                                          |
| -------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Audit (fixed-scope wk)** | Workflow + cost audit, prompt + eval review                       | Technical SEO + GEO + content gap audit                             | Funnel + CRM + lifecycle audit                                    |
| **Sprint (productized)**   | One workflow shipped (e.g. daily brief, AI grader, inbox triage)  | One pSEO surface shipped (cert × city, geo × service, etc.)         | One lifecycle flow shipped (lead-capture → CRM → first 5 emails)  |
| **Advisory (monthly)**     | Code/prompt review, vendor strategy, agent-architecture sounding  | Search performance review, content roadmap, ranking diagnosis       | Funnel performance, A/B review, copy + send-time recommendations  |
| **Custom (quote-based)**   | Multi-workflow agent systems, custom MCP servers, internal tools  | Full marketing-site rebuild with pSEO + schema (CISNET pattern)     | End-to-end pipeline: ads → CRM → email → admin portal             |

### Open execution questions

- [ ] Lock in the exact Audit length (current site says "fixed-scope week"; previously committed 5 days)
- [ ] Decide whether Sprint stays at 48 hours or stretches to 3-day / 5-day depending on vertical
- [ ] Decide Advisory hours/month (previously 10) and number of seats
- [ ] Define what "Custom" minimum size is — anything > Sprint cost?
- [ ] Decide whether to publish indicative pricing brackets or stay quote-only
- [ ] Decide on slot counts to advertise publicly (previously: 2 audits / quarter, 3 sprints / month, 3 advisory seats)

### Numbers that were on the site and got vague-ified (parked here for restoration when decided)

- Audit: `5 DAYS · MOST POPULAR` + `2 SLOTS / QUARTER`
- Sprint: `48 HOURS · FIXED SCOPE` + `3 SLOTS / MONTH`
- Advisory: `MONTHLY · ~10 HRS` + `3 SEATS OPEN`
- Custom: `1–6 WEEKS · QUOTE-BASED` + `1–2 / QUARTER`
- CTA band: `Q3 AVAILABILITY · 2 freelance slots open this quarter · expect 2-week lead time on audits`
- Hero terminal calendar: `AUDIT · 2 open · SPRINT · 3 open · ADVISORY · 3 seats`

When the structure is locked, swap these back in via search-and-replace in `src/pages/services/index.astro` and `src/pages/index.astro`.

---

## 3. Site Surface — Work Plan (sequenced)

In rough priority order. None of these requires diluting voice.

### A. Closes the SEO surface gap vs. Signal & Form

1. **Split `/services/` into three vertical sub-pages**
   - `/services/ai/`, `/services/seo/`, `/services/marketing-automation/`
   - Each gets its own H1, breakdown, schema markup, and CTA
   - Buys 3 ranking surfaces for transactional buyer queries

2. **Add `/work/case-studies/` index page**
   - Currently CISNET is a one-off at `/work/case-studies/cisnet/` with no parent index
   - Index page exists, CISNET is the only entry until case study #2 ships
   - Makes "Case Studies" a navigable nav item

3. **Write `/why-code-first/`** (manifesto / argument page)
   - Direct counter to no-code automation stack (n8n / Make / Zapier)
   - One-time argument page; link from homepage + services
   - Equivalent to Signal & Form's `/why-now` page

### B. Improves homepage conversion

4. **Add a 3-card pain band below the hero**
   - Three specific stack-of-pain cards in operator voice
   - Examples to consider:
     - "Paying $300/month for tools you still have to babysit."
     - "Doing manually what an agent could do in 30 seconds."
     - "Your competitors are showing up in AI search. You are not."
   - Position: between hero and the "Four ways to put me to work" services band

5. **Hoist real numbers into a bare credibility band**
   - Today the numbers live inside the terminal mock (commits, etc.) where they read as decoration
   - Promote to a labeled row above-or-below the hero:
     `51 URLs live · 32 commits / 30d · 1 client engagement shipped Q4 2025 · McMaster Comp Eng '25`
   - Adjust real numbers periodically

6. **Cut homepage word count ~20%**
   - Currently ~1,822 words (Signal & Form: ~837)
   - Cut adjectives, keep nouns and verbs
   - Especially trim the services band and stack band

### C. Closes the SMB trust gap on the About page

7. **About page rewrite for legibility, not voice change**
   - Add photo + real bio + professional history (Ericsson, McMaster, Imprimo, Fixvi)
   - Reference CISNET engagement and AIOpsForge as parallel proof points
   - Keep first-person; the goal is to close the "is this a real working professional" question for SMB-curious visitors without diluting the operator brand for technical readers

---

## 4. LinkedIn Rewrite (apply manually — bot fetch is auth-walled)

### Headline (choose one)

- `AI · SEO · Marketing Automation Consultancy → Toronto`
- `AI · SEO · Marketing Automation | Built like an operator, sold by the project | Toronto consultancy` (current preferred)
- `Helping founders + SMBs ship AI, SEO, and marketing automation that compounds`

Skip emoji stack. Reads junior.

### About section (300 words, paste verbatim and adjust)

```
I run a Toronto consultancy focused on AI, SEO, and marketing automation — production work, not slide decks.

Most "AI consultants" sell you Notion docs. I scope, build, and ship the actual workflow. CISNET hired me for a 3-month migration: legacy PHP → Next.js 16, 200+ programmatic SEO pages, full lead pipeline with Facebook Lead Ads + Stripe, and a custom admin portal. Shipped, live, ranking authority preserved through 70+ individually-mapped redirects.

What I cover:
• AI — workflow automation, internal agents, custom MCP servers, prompt + eval systems
• SEO + GEO — programmatic SEO, schema, AI-search visibility (llms.txt, passage citability), site rebuilds
• Marketing automation — lead pipelines, lifecycle email, CRM wiring, campaign infra

Engagement shapes: audit → build sprint → monthly advisory → custom build. Fixed-scope, written specs, no retainer creep.

I also run AIOpsForge — a $9.99/month paid community for solo AI builders — and write at pravinemani.com.

McMaster Computer Engineering & Management '25. Background: Ericsson 5G (Go, gRPC), Imprimo (React Native, Postgres), Fixvi (React Native, push infra). Currently Toronto.

Best way to reach me: book a 30-min call at pravinemani.com/contact — free, ends with a quote.
```

### Featured (pin 3, in this order)

1. CISNET case study link (`pravinemani.com/work/case-studies/cisnet`)
2. AIOpsForge link (`aiopsforge.dev`)
3. Loom intro (90 sec, face-to-camera) if recorded; otherwise pin the portfolio root

### Experience

- Rename current role: **"Founder · AI, SEO & Marketing Automation Consultancy"** at `pravinemani.com`
- Start date: Jan 2025 (or whichever defensible date)
- Description: copy the About verbatim
- Add **AIOpsForge** as separate entry (Founder, parallel venture)
- Polish bullet copy on Ericsson / Imprimo / Fixvi to remove redundant phrases ("by leveraging", "in order to")

### Skills (in this priority order — LinkedIn weights the first three highest)

1. AI Consulting
2. SEO
3. Marketing Automation
4. Programmatic SEO
5. Next.js
6. TypeScript
7. Anthropic API
8. Claude
9. Model Context Protocol (MCP)
10. Schema.org
11. Vercel
12. Supabase
13. Stripe
14. Facebook Lead Ads
15. Resend
16. Lead Generation
17. Conversion Rate Optimization
18. Brand Identity
19. Webflow
20. Framer

Drop anything that doesn't serve the new positioning (Verilog, RPi, embedded — leave on the LaTeX résumé only).

### Services tab

Enable LinkedIn's "Provide Services" feature. Add AI Consulting, SEO Consulting, and Marketing Automation Consulting. Link each to the contact page.

### Posting cadence

One post per week, format: short hook + 3–5 short paragraphs + sometimes an image of a real artifact. First 8 post subjects:

1. CISNET admin portal — one-paragraph case study + screenshot
2. Why no n8n / why code-first
3. How a Build Sprint actually gets scoped (the 5-day artifact list)
4. What broke at 5 concurrent agents (from agentic-os)
5. The Terminal Design System — one specific pattern (chrome / glow palette algorithm)
6. AIOpsForge week-in-review
7. CPR essay or excerpts
8. Before/after Lighthouse + Search Console screenshot from CISNET

Engage with replies same-day. LinkedIn boosts posts with author replies in the first hour.

---

## 5. What this repositioning intentionally does NOT change

- Dark-first Terminal Design System aesthetic (signature, do not dilute)
- One-accent palette (#00FF41); zero radius; 1px borders; no shadows
- First-person voice in body copy
- Live commit / activity feeds (best social-proof move on the site)
- Stack / Now / AI / Writing pages (unfakeable credibility surfaces)
- The opinion-load ("no n8n glue", "stitch together SaaS") — kept where it lands

---

## 6. Migration sequence (recommended)

Done in this commit (this PR):
- Homepage hero copy + meta + JSON-LD updated to consultancy positioning
- Services hero + CTA band updated
- Specific slot counts and timings vague-ified across services tier cards and homepage hero terminal mock
- This strategy doc written and pushed

Next iterations (in priority order):
1. Build `/services/ai/`, `/services/seo/`, `/services/marketing-automation/` (Section 3.A.1)
2. Build `/work/case-studies/` index page (Section 3.A.2)
3. Write `/why-code-first/` (Section 3.A.3)
4. Add pain band on homepage (Section 3.B.4)
5. Add numbers credibility band on homepage (Section 3.B.5)
6. Cut homepage word count ~20% (Section 3.B.6)
7. About page rewrite (Section 3.C.7)
8. Apply LinkedIn updates from Section 4
9. Lock in the engagement-shape specifics (Section 2 open questions) and swap real numbers back into the site

---

## 7. Decision log

- **2026-05-24** — Chose "consultancy" as the category label. Considered "studio", "operator", "practice" — rejected for SEO discoverability reasons. Will pair with operator-voice differentiation in body copy.
- **2026-05-24** — Hero H1 set to: *"AI, SEO, and marketing automation consultancy. Built like an operator. Sold by the project."* — Option B of three drafts.
- **2026-05-24** — Vague-ified specific slot counts on services page rather than committing to new engagement structure. Will be reversed once Section 2 open questions are answered.
