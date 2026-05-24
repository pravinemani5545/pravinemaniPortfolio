# Launch offers, pricing, and outreach playbook

Private. Standard pricing for quoting on calls + the launch-offer strategy
to land first clients + cold-outreach hooks. Do not commit screenshots
of this file to public-facing places.

Last updated: 2026-05-24.

---

## 1. Pricing structure (4 tiers)

### Free Workflow Teardown — entry funnel
- **Price:** $0
- **Format:** 30-min live call (Cal.com) OR async (Loom + brief)
- **Deliverable:** One workflow mapped, 2-3 automation opportunities
  identified verbally, ROI estimate, recommended next step.
- **Slots:** 5/month — keep visible scarcity ("3 of 5 open this month")
- **Goal:** convert to Audit or Sprint within 14 days. ~60% conversion
  target once volume is real.

### 01 · System Audit (Founding rate active)
- **Public price:** "Founding 3 clients: $1,500"
- **Standard rate (quote on call once founding fills):** $4,500
- **Negotiation floor:** $3,500 (only for repeat clients or strong
  referrals)
- **Ceiling:** $6,500 (for engagements requiring 3+ founder interviews
  and a 7-day turnaround instead of the standard week)
- **Founding-rate expiry condition:** when the 3rd founding audit is
  signed, revert to standard rate immediately. Update the site copy.

### 02 · Build Sprint (Founding rate active)
- **Public price:** "Founding 3 clients: $2,500"
- **Standard rate:** $4,500
- **Negotiation floor:** $3,500
- **Ceiling:** $7,500 (for sprints that need a custom MCP server, an
  admin portal surface, or HMAC-verified webhook handlers)
- **Founding-rate expiry condition:** same as Audit — 3rd sale triggers
  revert.

### 03 · Custom Build
- **Public:** "Quote-based · from $12K"
- **Standard rates by scope:**
  - Single workflow + admin surface: $12-18K
  - Multi-workflow content engine OR pSEO surface: $18-25K
  - Full marketing site rebuild + pipeline (CISNET pattern): $20-35K
  - Multi-month engagements with code retainer: priced per month
- **Negotiation floor:** $10K (single workflow only)
- **Always milestone-paid:** 30% upfront, 30% at milestone 1, 30% at
  milestone 2, 10% on final handoff.

---

## 2. Quoting on calls — the playbook

### Standard flow

1. **Discovery (5 min):** What's broken, who you are, when you need it,
   rough budget.
2. **Scope sharpening (15 min):** Translate the workflow into a one-line
   deliverable. If they can't, recommend Audit instead of Sprint.
3. **Tier match (5 min):** Pick the engagement shape. Mention the
   founding rate if applicable.
4. **Send written quote within 24 hrs.** Always written. No verbal
   commits.

### Things to ALWAYS say on the call

- "The 30-min call is free, ends with a quote in writing within 24 hrs."
- "Founding rate is X — locked when you sign. Standard rate returns
  when I land 3 founding clients in this tier."
- "Fixed-scope. No retainer creep. No hourly billing."

### Things to NEVER say

- A specific number live on the call without seeing the scope. Always
  "I'll have a number for you in writing tomorrow."
- "I can do it cheaper" — discounts come from constraint trade-offs
  (smaller scope, longer timeline), not from caving on price.
- "I have time this week." Creates urgency the wrong direction.

---

## 3. Launch-offer strategy (first 9 paid clients)

The goal is **3 founding-audit clients + 3 founding-sprint clients + 3
custom clients** in the next 90 days. That's the trigger to revert
standard pricing.

### Why the founding rate exists

- Lower barrier for first 3 clients per tier → build the case-study
  pipeline.
- Time-limited urgency → forces decisions vs. open-ended pricing.
- Public discount is visible scarcity, not a sale tactic.
- Standard rate resumes the moment the third founding client lands —
  preserves premium positioning long-term.

### Visibility on the site

- **Audit + Sprint tier cards** show "Founding 3: $X" with a slot
  counter ("2 of 3 founding slots open"). Manually update count on
  every booking.
- **Custom tier** does NOT have a founding discount — the buyers at
  that tier are price-insensitive and discounting signals weakness.
- **Free Teardown** has a slots counter too ("3 of 5 open this month")
  to drive booking urgency.

---

## 4. Cold outreach hooks (use in DM / email)

Adapted from the original strategy doc. Best-converting hooks first.

### Hook A — Free Workflow Teardown (universal)
> Hey — quick one. I help founders remove the workflows that eat
> their week. If you send me one process your team does over and
> over, I'll map it and show where you can save time. 30-min call,
> no pitch. Want to try one?

### Hook B — Broken Automation Rescue (targets existing automation users)
> I help fix broken n8n / Zapier / Make workflows that silently cost
> time and leads. If you're running one that's flaky, send me the
> screenshot — I'll tell you within a day whether it's a 1-hour fix
> or a rebuild.

### Hook C — Revenue Leak Finder (targets ops leads)
> Quick one — if your team is losing leads anywhere between Lead Ads
> and the CRM, that's usually a 60-line code fix. Want me to map
> where the leak likely is?

### Hook D — AI Cost Review (targets founders paying for SaaS)
> Most founders I work with are paying ~$300/mo for tools that do
> what code does for free. 30 min, I'll review what you're paying
> for and tell you which to keep vs. drop. No pitch — just the data.

### When to use which

- **Cold DM on LinkedIn / X:** Hook A (broadest funnel)
- **Cold email to a marketing/ops lead at a real company:** Hook B or C
- **Reply to a "we're paying too much for tools" post:** Hook D
- **Warm intro from a peer:** "I'm taking on 3 founding clients at
  reduced rates — interested?" + lead with case study.

### DM cadence rule

- One hook per prospect. If they don't reply within 7 days, send ONE
  follow-up referencing a specific public artifact they shipped
  recently. Then drop it.

---

## 5. Funnel math (target → trigger)

| Stage | Target / month |
|---|---|
| Outbound DMs sent | 50 |
| Free Teardown bookings | 5 |
| Audit conversions from Teardown | 2 |
| Sprint conversions (direct or via Audit) | 1 |
| Custom conversations | 1 (low frequency, longer cycle) |

**Trigger to revert standard pricing:** 3 founding audits + 3 founding
sprints sold (6 founding clients total). Once trigger hits:
- Update tier cards: remove "Founding 3:" label, replace with normal
  "FROM MID 4-FIG · LIMITED" bracket.
- Update llms.txt + docs/launch-offers.md decision log.
- Bump Standard rates ~10% if all 6 closed within 60 days (signal of
  price elasticity).

---

## 6. What NOT to do (price discipline rules)

- **Don't discount below the floor** even for "potential to lead to
  bigger work." Founding rate IS the discount.
- **Don't offer hourly billing.** Ever. Hourly aligns no one's incentive.
- **Don't bundle a free month** of advisory into a Sprint sale. Advisory
  is parked (see `future-plans.md`) — don't backdoor it in for free.
- **Don't list specific numbers in DMs.** Lead with the hook, not the
  price. Price comes after the call.
- **Don't run "Black Friday" or seasonal sales.** Founding rate is the
  ONLY public discount. Anything else dilutes positioning.

---

## 7. Decision log

- **2026-05-24** — Launched 4-tier offering: Free Teardown / Audit
  (founding $1,500) / Sprint (founding $2,500) / Custom (from $12K).
  Replaced the paid Probe tier with the Free Teardown to lower the
  top-of-funnel friction. Founding rates triggered for Audit + Sprint;
  Custom remains premium.
- **2026-05-24** — Probe tier content + lessons archived in
  `future-plans.md`. The "send me a Loom and a 1-pager" mechanic
  is now folded into the Free Teardown (async path).
- **2026-05-24** — Broken Automation Rescue added as a cold-outreach
  hook (Hook B) but NOT as a separate visible tier — it's a flavored
  Sprint when it lands.
