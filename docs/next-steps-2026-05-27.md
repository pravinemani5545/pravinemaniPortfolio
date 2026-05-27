# pravinemani.com — consolidated next steps + decisions
**Date:** 2026-05-27
**Status of repo:** 6 ICP-sharpening edits applied locally (uncommitted, not pushed)
**Latest pushed commit:** `9d78acc` (anti-pitch pass)

This doc consolidates every open action across:
- **Today's ICP audit** (`docs/icp-audit-2026-05-27.md`) — Tier A/B/C/D items
- **Earlier website audit** (Obsidian: `Areas/Work/Projects/pravinemani-consulting/audits/website-audit-2026-05-24.md`)
- **Section 12 Client Acquisition Hooks** strategy doc (pasted in conversation)
- **60-Day Launch Sprint** (Obsidian: `AAA-Blueprint-60-Day-Sprint.md`) — relevant items only
- **LinkedIn Batch 01** (Obsidian: `linkedin-batch-01-consulting.md`) — content engine
- **Things Inbox + Anytime** (Obsidian: `things/Inbox.md`, `things/Anytime.md`) — captured ideas
- **Future plans** (`docs/future-plans.md`) — Advisory + CDAP + SaaS-tools parked

---

## 0. Status snapshot — what's done locally, awaiting push

These 6 Tier-A items from the ICP audit are applied locally to the repo:

| # | Change | File(s) |
|---|---|---|
| A1 | Hero lead now names ICP subtypes explicitly | `src/pages/index.astro` |
| A2 | CDAP/IRAP grant block removed from `/services/` | `src/pages/services/index.astro` |
| A3 | "Who this works for" positive filter added on `/services/` (3 cards: SaaS / agencies / tech-forward SMBs) | `src/pages/services/index.astro` |
| A4 | `/about/` bio rewritten: "solo founders and small teams" → "founders, agency owners, and ops leads" (lead + long-version paragraph) | `src/pages/about/index.astro` |
| A5 | "Written quote within 24 hrs of the call" surfaced as hero micro + services lead | `src/pages/index.astro`, `src/pages/services/index.astro` |
| A6 | Build #11 "Creative Variants Generator" added (agency-shaped sample build) | `src/pages/services/index.astro` |

Build passes 19 pages. Em-dashes still 0.

**Decision pending:** when to commit + push these.

---

## 1. SITE — copy & structure

Ordered by priority. Tier B/C items from the ICP audit, plus residual items from the earlier (2026-05-24) website audit that haven't shipped yet.

### Tier B — medium impact, low-medium effort (this month)

- [ ] **B1. Replace numbers-band "1 case study + pipeline" cell.** Currently reads as "only one client." Swap to a stronger ICP-confidence metric: e.g. *"200+ pSEO pages live (CISNET)"* or *"98+ Lighthouse production score."*
  - File: `src/pages/index.astro` (numbers-band section)
- [ ] **B2. Compartmentalize AIOpsForge mentions on consulting pages.** Currently AOF appears across `/services/`, `/ai/`, vertical pages — reads as "side hustle." Either tag explicitly *"Adjacent project: AIOpsForge"* or move the references to `/work/` only.
  - Files: spot-grep `aiopsforge` across `src/pages/`
- [ ] **B3. Tag each of the 11 sample builds by ICP subtype** (`SAAS` / `AGENCY` / `SMB` chips). Helps ICP buyers self-identify.
  - File: `src/pages/services/index.astro` (each `.build-card .meta` row)
- [ ] **B4. Add a "first-call agenda" block on `/contact/`.** Four bullets covering what's covered in 30 minutes. Pre-arms the buyer.
  - File: `src/pages/contact/index.astro`
- [ ] **B5. Reframe testimonials section subhead.** *"Words from clients."* → *"From agency leads, ops teams, and the operators they hire to build."* Makes subtype-fit explicit.
  - File: `src/pages/index.astro` (quote-band section)
- [ ] **B6. Cut or sharpen the homepage process section.** Currently generic 4-step strip. Either remove or replace with concrete "what your first week looks like" content (spec doc, Slack channel, first commit, milestone demo).
  - File: `src/pages/index.astro` (process-grid section)

### Tier C — high impact, high effort (next quarter)

- [ ] **C1. Land a SaaS-founder testimonial.** Outreach work. The single highest-leverage missing proof point. Approach: offer a Sprint at founding-rate ($1,500–$2,500) to a bootstrapped SaaS founder in exchange for permission to publish a case study + testimonial.
  - Owner: outbound DM + warm-intro round
  - Companion: see Section 2 outreach hooks for the right entry message
- [ ] **C2. Publish a SaaS-shaped case study.** After C1 ships. Same engineering-narrative format as CISNET. Different subtype, different story.
- [ ] **C3. Add specific person-level differentiation anchors on `/about/`.** Options to develop:
  - Open-source contribution count (PRs merged into widely-used tools)
  - Conference talks given
  - Prior employer brands (Ericsson, Imprimo, Fixvi — already on `/about/` but could be more prominent on homepage)
  - Public Anthropic ecosystem contributions
- [ ] **C4. /writing/ → ship 3 essays in the SaaS-operator / agency-operator vein.** The CPR essay drafting is the start. Topics aligned to ICP. Long-term ICP-magnet via search + AI-search visibility.

### Tier D — small refinements

- [ ] **D1. Update `<title>` and meta descriptions consistently mention SaaS / agency / SMB across the site.**
- [ ] **D2. On `/work/case-studies/cisnet/`, add a one-paragraph bridge near the bottom:** "If you're a SaaS founder or agency owner with a similar shaped problem, the migration pattern maps cleanly." Generalizes the case study.
- [ ] **D3. Add a "currently accepting" capacity banner at top of `/contact/`** signaling there's no 6-month waitlist.
- [ ] **D4. Make Footer "BUILDING IN PUBLIC · REPLIES IN 24 HRS"** link to a specific public artifact (GitHub or `/writing/`). Currently aspirational, could become evidence.

### Residual from earlier (2026-05-24) audit

Items not yet shipped from the prior audit:

- [ ] **De-anonymize CISNET testimonials further** — Mani P / Pira A both named now, but the audit recommended *"named-company logo or two"*. Consider adding visual logos to the testimonial cards (with attribution permission).
- [ ] **Live GitHub commit feed** — the build-time fetch in `src/pages/index.astro` ships, but the audit recommended *"Vercel edge function caches it for 5 min"* for true real-time. Current implementation is build-time, which is acceptable but not "live."
- [ ] **Newsletter signup** — Beehiiv embed at the bottom of `/writing/` and CTA in footer. Not yet in place. Companion to LinkedIn content engine.
- [ ] **Coin a category term** (audit suggested "operator stacks" / "compounding systems" / "production AI ops"). First-mover advantage in this lane. Worth a separate decision-making session.
- [ ] **`/geo-stack/` page** — meta-flex documenting how *this site* ranks in AI search. Proof-by-existence for the GEO vertical. Low-priority but worth tracking.
- [ ] **Self-host fonts via `@fontsource`** — minor LCP improvement.

---

## 2. OUTREACH & ACQUISITION

Synthesized from Section 12 Client Acquisition Hooks + Blueprint Days 11–30 + the parked launch-offers playbook.

### Open decisions

- [ ] **D-OUT-1: Public free-tool offer vs verbal-on-call only?** Section 12 proposes a *"Free Workflow Teardown"* as a public CTA. Current site has the free 30-min scoping call. The two overlap. Decision: do we publicly brand a *"Workflow Teardown"* on the site as a named offer (steals language from competitor Christian-the-AAS-student), or keep the current quieter "scoping call" framing? Argument for: more inbound. Argument against: more pitch surface, more lead-quality risk. Recommendation: keep current. Add a *single* DM template that uses the "Workflow Teardown" framing for cold outreach only.
- [ ] **D-OUT-2: Which 1 cold-outreach hook to lead with?** Section 12 lists 8 hooks. Lead with one for the first 4-week test:
  - **A.** *"Send me a workflow you hate doing — I'll show you how to automate it"* (lowest friction, async, scalable)
  - **B.** *"I help fix broken Zapier / n8n / Make workflows silently costing time and leads"* (urgent pain, agency angle)
  - **C.** *"Revenue leak finder — lost leads, slow follow-ups, CRM gaps"* (money frame)
  Recommendation: **B for agencies, A for SaaS founders.** Run both in parallel, one channel each (X DMs for SaaS founders, LinkedIn DMs for agencies).
- [ ] **D-OUT-3: Outreach volume.** Blueprint Day 2 recommends 9 mailboxes + Instantly Hyper Growth ($97/mo) + 1,000 contacts/week. That's the AAA-style cold-email machine. Decision: do we go that volume, or stay at the "tight, targeted, 10–20 DMs/week" mode?
  Recommendation: tight mode first. The product (consulting) is mid-market, not high-volume SaaS. Mass cold-email rarely converts $5–15K builds.

### Action items

- [ ] **Write 2 DM templates** (1 per hook above) for first 4 weeks of testing. Template lives in `docs/launch-offers.md`.
- [ ] **Build a tight prospect list** of 50 ICP-fit targets — split: 25 bootstrapped SaaS founders + 25 marketing/creative agencies. Source: Indie Hackers, MicroConf alumni, Lenny's directory, X follower lists of operators in our lane.
- [ ] **DM cadence rule** (per `docs/launch-offers.md`): one hook per prospect. If no reply in 7 days, ONE follow-up referencing a specific public artifact they shipped. Then drop.
- [ ] **Track conversion** (per Blueprint Day 30 retrospective): outbound → reply → call booked → paid engagement. Weekly Monday review.
- [ ] **Warm-intro round** for SaaS-founder testimonial (C1 above). 5–10 candidate list. Offer founding-rate Sprint in exchange for case study.
- [ ] **"Broken Automation Debug Session"** — *optional* paid-qualifier offer ($99–$199, 1-hour session). Sits below the Audit floor as a cold-traffic on-ramp. Only spin up if 30-day outbound shows demand for the diagnostic hook.

---

## 3. CONTENT & MARKETING

Synthesized from LinkedIn Batch 01 + Blueprint content track + Things Inbox.

### LinkedIn Batch 01 (consulting brand, separate from AOF)

- [ ] **Start the 7-week cadence.** 20 posts, 3/week (Tue/Wed/Thu, 8–11am ET).
  - **Week 1:** LI-20 (welcome pin) · LI-01 (CISNET admin portal carousel) · LI-06 (AI Overviews contrarian)
  - **Week 2:** LI-11 · LI-05 · LI-02
  - **Week 3:** LI-13 · LI-04 · LI-09
  - **Week 4:** LI-17 · LI-08 · LI-16
  - **Week 5:** LI-14 · LI-03 · LI-10
  - **Week 6:** LI-18 · LI-07 · LI-15
  - **Week 7:** LI-12 · LI-19
- [ ] **Decision: when to start.** Recommendation: after Tier-A site changes are pushed (so LinkedIn traffic lands on the sharper ICP positioning, not the old version).
- [ ] **First-hour velocity plan per post** — DM 5–10 specific people for a real take. Reply to comments in first 30 min (+64% comments, +2.3× views).

### Channel separation (from Things Inbox)

- [ ] **Decision: pravinemani vs AIOpsForge channel split.** Captured in Inbox 2057-04-09: *"pravinemani account, personal thoughts and retweets, my own articles. aiopsforge own account, talking about product, features, what, articles, how to's, free sauce. pravinemani more catered to me. How I build."*
  - Lock the split. Two X accounts. Two LinkedIn surfaces (personal + AOF Company Page).
  - **pravinemani:** personal thoughts, how-I-build, contrarian takes, consulting case studies, retweets.
  - **AOF:** product updates, weekly build guides, community drops, free templates.
  - This decision needs to land *before* LinkedIn Batch 01 starts shipping — so the consulting content has a clean home.

### Other content captures

- [ ] **Explainer video** (Inbox 2057-04-19) — 1-minute "what I do" video for the homepage or social pinned post. Open question: own the recording or hire? Recommendation: record yourself, Loom-style, no editing tax.
- [ ] **Newsletter Issue #1** (Blueprint Day 12) — Beehiiv free tier. Cadence: every Tuesday 9am ET. First issue should be a "how I built X" narrative tied to a public artifact.
- [ ] **YouTube long-form #1** (Blueprint Day 8) — *if* the channel is being pursued. Open decision: is YouTube part of the consulting plan or only AIOpsForge? Current site doesn't show YouTube anywhere.

---

## 4. PRODUCT / TOOLS

### Lead-magnet tools (from `docs/future-plans.md`)

- [ ] **Decision: Build 1 lead-magnet tool first.** Schema.org generator is the highest-ROI candidate (clearest ICP overlap, organic-search potential, ~3 days to build).
  - **Timing:** *after* Tier-A ICP-sharpening pushes ship and there's 4–6 weeks of conversion data.
  - **Hosted at:** `/tools/schema-generator/` on this domain (not separate subdomain).
  - **Upsell:** AIOpsForge for unlimited usage; programmatic-SEO Sprint for the production version.

### ROI calculator (from Things Inbox 2057-04-09)

- [ ] **Captured idea:** *"Save time at work angle... Calculator for hours saved with AI and money saved vs our cost. Extrapolate, my graph can look like a line jump, line jump."*
  - **This is a lead-magnet tool candidate** — fits the same /tools/ pattern.
  - Position: *"Hours-saved + cost-vs-SaaS calculator."* User inputs current SaaS spend + manual hours; tool outputs the code-first replacement cost projection.
  - **Maps directly to `/why-code-first/` manifesto** — would become the interactive proof for that argument.
  - Recommend: build this *second*, after Schema.org generator validates the lead-magnet pattern.

### Other product ideas (from Inbox, low-priority)

- [ ] **Shortcut lookup on personal site** (Inbox 2057-04-11) — a `/shortcuts/` page listing useful Claude Code / Mac shortcuts. Personal utility, low-impact for consulting.
- [ ] **"If u like this tool try these others"** (Inbox 2057-04-14) — cross-promotion module for the tools page if multiple tools ship.

---

## 5. KEY DECISIONS TO MAKE (open)

Decisions blocking forward motion, ranked by impact:

1. **Push the 6 Tier-A changes now or wait?** (See section 0.) Recommendation: push as one commit titled `feat: ICP-sharpening Tier A — name buyer types, drop grant block, add positive filter`. Adds material polish to the live site.

2. **Outreach hook + volume.** (See section 2 D-OUT-2 and D-OUT-3.) Recommendation as above: tight, targeted, 10–20 DMs/week. Lead with hook B for agencies, hook A for SaaS founders.

3. **Workflow Teardown public offer — yes/no.** (See section 2 D-OUT-1.) Recommendation: no. Keep the cleaner "scoping call" framing on the site. Use the Workflow Teardown language in cold DMs only.

4. **Two-channel content separation.** (See section 3.) Recommendation: lock the pravinemani vs AOF channel split *before* LinkedIn Batch 01 starts shipping.

5. **Cold-email scale-up.** (See section 2.) Recommendation: tight mode. Do NOT spin up the full 9-mailbox Instantly machine from the Blueprint until consulting demand outstrips supply.

6. **YouTube — yes or no for consulting.** Currently nowhere on the site. Recommendation: punt. AOF can take the YouTube lane; consulting brand stays LinkedIn + writing.

7. **First lead-magnet tool — when to build.** (See section 4.) Recommendation: after Tier-A ships + 4 weeks of conversion data + at least 2 LinkedIn Batch 01 posts validate the new positioning.

8. **SaaS-founder testimonial outreach — when to start.** (See section 1 C1.) Recommendation: start immediately, even before Tier-A pushes. The outreach itself takes weeks. Site polish in parallel.

---

## 6. Source references

- ICP audit (today): `docs/icp-audit-2026-05-27.md` (this repo)
- Future plans (parked items): `docs/future-plans.md` (this repo)
- Launch offers + cold-outreach playbook: `docs/launch-offers.md` (this repo)
- Repositioning strategy log: `docs/repositioning-strategy.md` (this repo)
- Earlier website audit: `~/obsidian/pravinemaniOS/Areas/Work/Projects/pravinemani-consulting/audits/website-audit-2026-05-24.md`
- LinkedIn content batch: `~/obsidian/pravinemaniOS/Areas/Work/Projects/pravinemani-consulting/content/linkedin-batch-01-consulting.md`
- 60-Day Launch Sprint blueprint: `~/obsidian/pravinemaniOS/AAA-Blueprint-60-Day-Sprint.md`
- Section 12 Client Acquisition Hooks: external (pasted in 2026-05-27 conversation; not stored)
- Things capture lists: `~/obsidian/pravinemaniOS/things/{Inbox,Today,Anytime,Projects}.md`
