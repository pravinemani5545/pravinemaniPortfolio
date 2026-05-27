# Future plans, engagement shapes parked for later

This file holds engagement-shape concepts that aren't on the live site yet.
Either too early-stage, too speculative, or pending more signal on demand.

When ready to ship, copy the markup back into:
- `src/pages/index.astro` (homepage services grid)
- `src/pages/services/index.astro` (full tier card list)
- Update `public/llms.txt` to list the new shape
- Update the engagement-shape rows on `/services/ai/`, `/services/seo/`,
  `/services/marketing-automation/`, `/services/agentic-os/`

---

## Advisory Retainer (removed 2026-05-24)

**Status:** Removed from the live site. Too early-stage; will return once
the consultancy has 6+ months of audit/sprint engagements landed and a
real demand signal for "monthly advisory."

**Original positioning:**
- Tier label: `03 · ADVISORY RETAINER`
- Time: `MONTHLY RETAINER`
- Capacity: `LIMITED SEATS`
- Price bracket: `FROM LOW 4-FIG / MO`

**Headline candidates (when relaunched):**
- "A second brain for the calls you don't want to make alone."
- "Monthly advisory for founders already shipping."
- "Avoid the wrong build before a single line gets written."
- "Senior reviewer on call. No headcount, no agency tax."

**Body copy:**
> For founders already building who need a second brain. Async DMs, video
> reviews, prompt + cost + architecture audits. Not implementation, the
> feedback that prevents the wrong build.

**Deliverables (homepage card):**
- Regular video calls
- Async Slack review channel
- Cost audits + vendor strategy
- Month-to-month · no lock-in

**Deliverables (services-page tier card, fuller version):**
- 2× 60-min video calls / month
- Async Slack review channel
- Code · prompt · cost audits on request
- Vendor / hiring / scaling feedback
- Quarterly roadmap review
- 30-day cancel · no lock-in
- Annual option: 2 months free

**Tier-card accent color:** purple (`#a855f7`)

**Notes:**
- Worked well as a "soft commitment" mid-tier between Sprint and Custom.
- The "Annual option: 2 months free" anchor was a nice retention hook.
- Re-launch trigger: when Audit / Sprint clients ask "can we keep working
  together monthly" 3+ times in a quarter.

---

## CDAP / IRAP grant positioning (removed 2026-05-27)

**Status:** Removed from `/services/` during the ICP-sharpening pass. The
ICP shifted toward tech-forward founders, agency owners, and ops leads
across geographies — the Canadian-grant angle was pulling positioning
toward Toronto SMB grant-chasers and diluting the "operator who builds"
lens. Park it. Don't delete the option.

**Original markup (was at `src/pages/services/index.astro` between the
availability band and the engagement-shapes section):**

```html
<!-- Canadian grant callout -->
<div class="grant-callout reveal">
  <div class="grant-inner">
    <span class="grant-flag">CA · GRANT</span>
    <div class="grant-body">
      <span class="grant-h">Canadian small business?</span>
      <span class="grant-sub">Up to <strong>$15K of an engagement</strong> grant-covered through <strong>CDAP</strong> (Canada Digital Adoption Program) or <strong>IRAP</strong> (NRC Industrial Research Assistance). I scope inside those frameworks regularly.</span>
    </div>
    <a href="/contact/" class="grant-cta">Talk grant fit →</a>
  </div>
</div>
```

**Styles to restore (still present in `src/pages/services/index.astro`'s
`<style is:global>` block — keep them; orphaned but cheap):**
`.grant-callout`, `.grant-inner`, `.grant-flag`, `.grant-body`,
`.grant-h`, `.grant-sub`, `.grant-cta` and the `@media (max-width: 720px)`
override.

**When to re-introduce:**
- If the consultancy intentionally pivots to a Canadian-SMB ICP
- If 3+ inbound leads in a quarter explicitly ask "can grants cover this"
- If a partner relationship with a CDAP/IRAP advisor materializes
- For a dedicated landing page (`/services/grants/` or similar) rather
  than a homepage / services-page callout — pulls the positioning less

**Lever stays available off-site.** The grant fit can still be raised
verbally on a scoping call when a Canadian SMB is a candidate. Just
don't lead positioning with it.

**Adjacent: programs to mention if/when this returns:**
- **CDAP** — Canada Digital Adoption Program. Up to $15K toward digital
  adoption advisory work. Boost-eligible if 1-499 employees, Canadian,
  $500K-$100M revenue.
- **IRAP** — Industrial Research Assistance Program (NRC). R&D-flavored,
  larger contributions for technical innovation work. Higher bar.
- **Mitacs Accelerate** — research collaboration grants. Pairs Canadian
  grad students with industry on tech projects. Less direct fit but
  worth noting.

---

## Small SaaS AI tools (lead-magnet funnel) — proposed 2026-05-27

**Status:** Idea, not committed. Park here until there's signal that
this is the right move (see "when to revisit" below).

**The idea:** Ship 2–4 small, narrowly-scoped AI tools as a public
surface. Free for first use, then either pay-to-continue, email-gated,
or rate-limited. Users who try them become a top-of-funnel pool for
consulting / Sprint / Custom Build engagements.

### Concrete tool candidates (ICP-aligned)

Each one solves a tiny piece of what consulting clients pay for. Each
one has a footer line linking to the matching paid engagement.

1. **Schema.org generator** — paste a URL → get JSON-LD for the page
   types detected. Footer: *"Want this across 200+ pages with a redirect
   plan? See the [pSEO Sprint](/services/sprints/programmatic-seo/)."*
2. **llms.txt auditor / generator** — paste a URL → get an llms.txt draft
   + scorecard of what's missing for AI-search citability. Footer:
   *"Need this for the whole site, plus passage-citability rewrites?
   See the [GEO Sprint](/services/sprints/geo/)."*
3. **CLAUDE.md generator** — paste a GitHub repo URL → get a starter
   CLAUDE.md with conventions inferred from the codebase. Footer:
   *"Want Claude Code wired across your team with sub-agents, hooks,
   custom MCP? See [Claude Code Stack Setup](/services/#builds)."*
4. **Prompt-eval suite scaffolder** — paste 5 example inputs → get a
   Promptfoo config + golden-dataset template + GitHub Actions hook
   for CI integration. Footer: *"Want the full 30–100 input suite
   running in CI? That's the [Prompt + Eval Suite](/services/ai/#evals)
   engagement."*
5. **Webhook tester** — paste a webhook URL + payload shape → get
   HMAC-verified test harness + sample idempotency-key implementation.
   Footer: *"Building the production version? Lead Pipeline Sprint."*

### Why this could work

- **Self-qualification.** Anyone using the schema generator or
  llms.txt auditor is signaling "I care about SEO + AI-search infra."
  That's ICP-shaped self-selection without paid ads.
- **Proof of build capability.** A working tool is harder to fake than
  a portfolio. The tool itself proves I ship.
- **Inbound SEO surface.** Tools rank for query intent like "schema
  generator", "llms.txt example", "CLAUDE.md template." This pulls
  traffic LinkedIn posts can't.
- **AIOpsForge synergy.** Community members get unlimited usage; free
  public users get 1-3 uses. Community membership becomes the upsell.
- **Compounds with the writing.** Each tool gets an essay launch ("here's
  what I learned building X" + "here's the open question we couldn't
  solve") that drives traffic to both the tool and the consulting site.

### Why this could backfire

- **Splits focus.** I already run a consulting practice + a community.
  Adding maintained SaaS products = a third business. Each tool needs
  support, infra, billing reconciliation, bug fixes, abuse handling.
  Time spent on tools = time not spent on $5-15K builds.
- **Lead quality risk.** Free-tool users skew hobbyist. The conversion
  rate from "used the schema generator" → "paid for a $4,500 Audit"
  could be very low. Possible to end up with 10K free users and 0
  qualified leads.
- **Three-business positioning problem.** The site already balances
  consulting + community. Adding "I sell tools" muddies the story.
  Buyers want focus.
- **The "another wrapper" pattern.** 2026 has hundreds of solo
  AI-tool sites. Differentiation gets harder, not easier.

### My take (the file's author should weigh in differently)

**If this happens, frame these as lead-magnet tools, not SaaS products.**

That means:
- No Stripe billing tier on day one. Free + email-gate is enough.
- No auth system. No user accounts. Just rate-limited free + a "Want
  more uses? Join AIOpsForge for unlimited" upsell.
- Tools live on a `/tools/` route on this site, not as separate domains.
  Keeps the consulting positioning intact ("look, I built these
  *adjacent* to consulting") rather than splintering.
- Each tool has a clear CTA into the matching paid engagement at the
  footer.
- Build one first (schema generator likely best ROI for SEO surface).
  Measure: traffic, email captures, /contact/ inbound attribution.
  Only build #2 if #1 produces real consulting leads in 60 days.

**The "free trial → paid" framing in the original idea is dangerous.**
Real SaaS billing pulls Pravine into a different operating mode
(support tickets, refunds, churn, dunning) that the current consulting
practice doesn't have. Avoid until there's clear demand signal.

### When to revisit

- After Tier-A and Tier-B ICP-sharpening items from
  `docs/icp-audit-2026-05-27.md` ship and there's 4-6 weeks of data
  on how the sharpened positioning converts.
- After 2-3 consulting engagements ship and there's bandwidth left
  over (i.e., utilization isn't already at 100%).
- If inbound leads slow down and outbound DMs aren't filling the gap.
  Then lead-magnet tools become a real-time conversion lever.

### Build order if pursued

1. **Schema.org generator first** — clearest ICP overlap (SEO + pSEO),
   highest organic search potential, fastest to ship (~3 days).
2. **llms.txt auditor second** — same ICP, novel category, less
   competition for the keyword.
3. **CLAUDE.md generator third** — different ICP slice (technical
   founders / dev teams). Less obvious SEO play, more "shared on
   X/HN" potential.

### Don't do

- Don't ship 5 tools at once. One at a time.
- Don't add login/billing on tools that get fewer than 100 weekly
  active users.
- Don't compete with established tools (no "another Schema.org
  validator" if Google's Rich Results Test already does it). Compete
  on the workflow piece they miss.
- Don't make the consulting site about the tools. Tools are adjacent
  evidence, not the headline.
