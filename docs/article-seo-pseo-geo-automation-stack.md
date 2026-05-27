# SEO / pSEO / GEO: One Automation Stack, Three Games

How the same code-first toolchain collapses 600+ hours of manual SEO work into 6 weeks — and the specific things you should not automate.

---

## The Problem

Three years ago, SEO was one game: rank a page on Google.

Today it's three games, running in parallel.

- **Classic SEO.** Rank an individual page for an individual query.
- **Programmatic SEO (pSEO).** Generate hundreds of indexable pages from a structured content model.
- **Generative Engine Optimization (GEO).** Get cited inside AI Overviews, ChatGPT search, Perplexity, and Claude.

Each one has a different set of mechanics. Different metrics. Different tooling. Most agencies bill them as separate retainers and bolt them onto a CMS one workflow at a time.

The shape of the problem is the same across all three: a lot of mechanical work at the bottom, a small amount of judgment work at the top. Almost all the mechanical work should run on cron.

## The Solution

Build the stack once in code. Three workflows in one repository. Shared data layer. Shared observability. No subscription platforms holding the logic.

Three components:

- **`/scripts/`** — TypeScript audits and generators (audit, pseo-generate, geo-monitor)
- **`/api/`** — Vercel serverless webhooks (Search Console sync, AI citation polling)
- **`/content/`** — MDX templates + per-page data files for the pSEO surface

All three workflows share one Supabase database, one Anthropic API key, one Vercel project. The audit script reads what the pSEO generator wrote. The GEO monitor reads both. Cross-workflow data lookup is a SQL query, not a Zapier connector.

```
your-project/
├── scripts/
│   ├── audit.ts                     # 40 → 2 hour SEO audit
│   ├── pseo-generate.ts             # data model → 200+ MDX pages
│   ├── schema-validate.ts           # Schema.org JSON-LD checker
│   └── geo-monitor.ts               # citation polling across AI tools
├── api/
│   ├── gsc-sync/route.ts            # nightly Search Console pull
│   ├── pseo-rebuild/route.ts        # rebuild trigger from CMS
│   └── ai-citations/route.ts        # webhook from monitor cron
├── content/
│   ├── _templates/
│   │   ├── city-service.mdx         # pSEO template
│   │   └── course-cert.mdx          # pSEO template
│   └── data/
│       ├── cities.json              # data model
│       └── certifications.json
├── lib/
│   ├── anthropic.ts                 # prompt-cached client
│   ├── supabase.ts                  # typed client + RLS
│   └── schema.ts                    # Schema.org builders
└── vercel.json                      # cron schedule + redirects
```

One repository. One deploy target. Three games handled.

---

## What I Built (Step by Step)

### Step 1 — Automated SEO audit

The manual audit takes 40 hours. The automated version takes 2.

The 40-hour version is: crawl with Screaming Frog, export to a sheet, hand-check 200+ pages for title-tag length, meta description quality, internal-link structure, Schema.org validity, mobile rendering, Core Web Vitals, broken redirects, indexation status, and ranking position. Then write a report.

The 2-hour version replaces 38 of those hours with code. Manual review is still needed at the end, but only for the pages the script flagged as ambiguous.

**The script:**

```typescript
// scripts/audit.ts
import { gsc } from '@/lib/google-search-console';
import { lighthouse } from '@/lib/pagespeed';
import { firecrawl } from '@/lib/firecrawl';
import { anthropic } from '@/lib/anthropic';

const urls = await gsc.getIndexedPages({ site: process.env.SITE });

for (const url of urls) {
  const crawl = await firecrawl.scrape(url);
  const perf  = await lighthouse(url, { strategy: 'mobile' });
  const issues = [
    titleTagCheck(crawl),
    metaDescriptionCheck(crawl),
    schemaValidate(crawl),
    coreWebVitalsCheck(perf),
    indexationCheck(url),
    redirectChainCheck(url),
  ].filter(Boolean);

  if (issues.length > 0) {
    await supabase.from('audit_findings').insert({
      url, issues, scanned_at: new Date()
    });
  }
}

// LLM pass at the end — only for ambiguous findings.
const ambiguous = await supabase.from('audit_findings')
  .select('*').eq('classification', 'needs_review');
const summary = await anthropic.messages.create({
  model: 'claude-sonnet-4-6',
  system: AUDIT_PROMPT, // cached
  messages: [{ role: 'user', content: JSON.stringify(ambiguous) }],
});
```

The mechanical checks run deterministically. The LLM only sees the findings that need judgment — typically 5-15 percent of total flags. Token cost on a 200-page site: under $0.30 per run.

### Step 2 — pSEO content stack

The manual approach to 200 pages of programmatic SEO content is 600+ hours of writing. The code-first version is 6 weeks of engineering plus a data model.

**The pattern that worked on CISNET:**

- Data model in `/content/data/*.json` (certifications × cities × formats)
- MDX template in `/content/_templates/*.mdx` with typed slots
- Build-time generation via Astro's `getStaticPaths`
- Schema.org JSON-LD per page type — Course on cert pages, LocalBusiness on city pages, FAQPage where the data has FAQs
- Internal-link graph generated from the same data model, no hand-wiring

**The thin-content safeguards:**

A pSEO page that gets generated needs enough genuinely unique content per route, or Google deindexes it. The bar I run is ~600 unique words minimum across the structured slots:

```typescript
// scripts/pseo-generate.ts
function shouldGenerate(page: PageData): boolean {
  const uniqueContent = [
    page.courseCurriculum,        // varies by cert
    page.localTestimonials,       // varies by city
    page.instructorBio,           // varies by city+cohort
    page.faq,                     // varies by cert
    page.cohortSchedule,          // real upcoming dates
  ].join(' ').split(/\s+/).length;

  return uniqueContent >= 600;
}

// At CISNET: 247 candidate combinations.
// 53 failed the threshold → marked `noindex`.
// 194 shipped.
```

The pages that didn't clear the threshold got `<meta name="robots" content="noindex">` and quietly excluded from the sitemap. Indexation rate on the rest: 100 percent within 6 weeks.

### Step 3 — GEO citation tracking

Classic SEO measures rank position. GEO measures something different: is your page being cited inside an AI Overview, a Perplexity answer, or a ChatGPT search result?

**Manual GEO tracking** is a weekly batch report. Run the same 50 prompts across all four AI tools, screenshot the citations, paste into a sheet. Three to four hours of click-and-screenshot per week.

**Automated GEO tracking** runs on Vercel cron, hitting each AI tool's API or a scraping intermediary, parsing citations out of the response, and writing them to Supabase:

```typescript
// scripts/geo-monitor.ts
const prompts = await supabase.from('geo_prompts').select('*');

for (const { id, prompt, target_domains } of prompts) {
  const responses = await Promise.all([
    perplexity.search(prompt),
    openai.searchPreview(prompt),
    googleAiOverview(prompt),        // SERP API proxy
    anthropic.searchAugmented(prompt),
  ]);

  for (const response of responses) {
    const citations = extractCitations(response.text);
    const our_citations = citations.filter(c =>
      target_domains.some(d => c.url.includes(d))
    );

    await supabase.from('geo_results').insert({
      prompt_id: id,
      tool: response.tool,
      cited: our_citations.length > 0,
      citation_urls: our_citations.map(c => c.url),
      run_at: new Date(),
    });
  }
}
```

The cron runs every 6 hours. The dashboard query is a single `select` grouped by tool, plotted as a time series. The first time you see a competitor pulling ahead in citations on a query, you see it that day, not three weeks later.

---

## How to Replicate This

### 1. Audit script

Clone the repo template (`scripts/audit.ts` above). Wire three APIs:

- **Google Search Console** — service account credentials, indexed-pages query, performance metrics
- **Firecrawl** — scrape API for page-level HTML and rendered content
- **PageSpeed Insights** — Lighthouse field data for Core Web Vitals

Add the Anthropic API for the final review pass. Cache the system prompt so repeated runs cost almost nothing.

Schedule via `vercel.json`:

```json
{
  "crons": [
    { "path": "/api/audit-run", "schedule": "0 4 * * *" }
  ]
}
```

The audit runs nightly at 4am UTC. The previous run's findings sit in Supabase, available for comparison. Net-new issues get flagged. Resolved issues get archived.

### 2. pSEO content stack

Start with the data model, not the template:

- List every combination you would generate (cert × city, service × neighbourhood, etc.)
- List the data fields that vary per combination
- Write the JSON for 5 combinations by hand
- Write the MDX template that consumes those fields
- Add the unique-content threshold check
- Generate

Most pSEO mistakes happen at the data model stage. If the data doesn't vary meaningfully per combination, the pages won't either, and Google will deindex them inside a quarter. Spend the time on the model.

### 3. GEO monitor

The four AI tools you actually need to track in 2026:

- Google AI Overviews
- Perplexity
- ChatGPT search
- Claude search-augmented responses

For each, you need either the official API (Perplexity and OpenAI offer this) or a scraping intermediary (DataForSEO for AI Overviews, custom Playwright for the others). Citation extraction is regex against the response structure — each tool exposes citations differently, so write a small adapter per tool.

Track 30-50 prompts that represent the queries your real customers run. Don't track 500 vanity queries you don't care about.

---

## The Math

The numbers below are from a single client engagement (CISNET), normalized to a 200-page site:

| Workflow | Manual | Automated | Delta |
|---|---|---|---|
| Initial SEO audit | 40 hrs | 2 hrs | 95% |
| Per-page content brief | 4 hrs | 15 min | 94% |
| 200-page pSEO content stack | 600+ hrs | 6 weeks build, then $0 marginal | one-time |
| GEO citation tracking | 3-4 hrs / week | runs on cron | 100% |
| Schema.org validation | 1-2 hrs / week | runs on commit hook | 100% |

The cost comparison matters more than the time comparison. A traditional agency retainer for "monthly SEO" runs $3,000-$8,000. The automated stack costs roughly $200-400/mo in API fees (Anthropic, Firecrawl, DataForSEO, Vercel) and runs itself. The build cost is one-time engineering — typically a fixed-scope week for the audit, and 4-6 weeks for the full pSEO + GEO stack.

The agency model loses on the per-month math past month 4 or 5. Past month 12, the agency has spent $36-96K on the same outcomes the automated stack delivers for $4,800/yr.

---

## Why This Works

The insight is that SEO has always been two stacked games: a large mechanical layer and a small judgment layer. The mechanical layer scales linearly with site size — number of pages to audit, schema types to validate, citations to track. The judgment layer doesn't.

What scripts handle well: the mechanical layer. Title-tag length, schema validity, indexation status, citation extraction, redirect chains, Core Web Vitals tracking, content-quality thresholds.

What scripts handle badly: the judgment layer. Which keyword to target. Whether a topic is worth writing about at all. Whether a backlink opportunity is worth a relationship. When to skip a topic everyone else is writing about. The contrarian call.

*The mechanical layer should run on cron. The judgment layer should never be automated.*

The cost of confusing the two is significant in both directions: agencies that bill $5K/mo for the mechanical layer waste the client's money. SEO operators who try to automate the judgment layer ship 200 pages of low-quality content and get the site penalized.

The automation stack solves only the mechanical layer. The judgment layer is what the human keeps doing.

---

## What This Doesn't Solve

Code-first SEO automation has clear limits. The honest version of the trade-offs:

- **Strategic positioning.** A script can scan competitor pages. It cannot decide whether to compete on a category at all. That's a positioning call. Made by a human who understands the business.
- **Backlink relationships.** Most outreach automation produces spam-tier emails that hurt sender reputation. Real link building is a relationship game and the work is in the relationships, not in the email volume.
- **Local SEO ground work.** Google Business Profile photo cadence, customer reviews, on-the-ground events. Not automatable, and shouldn't be.
- **Brand mention monitoring at scale.** Tracking your brand across Reddit, Twitter, podcasts, niche forums, and AI tools requires either a paid platform (Brand24, Mention) or a real ongoing scrape budget. The automation stack handles the AI-tool slice cleanly; the wider brand-mention surface is its own problem.
- **pSEO with a weak data model.** Generating 500 pages from a model that doesn't vary meaningfully per page is faster spam. The script makes it worse, not better. The 6 weeks the CISNET build took were mostly spent on the data model, not the code.
- **AI-generated content as the content.** The automation stack generates *templates* with structured slots. The unique content in each slot still has to be real. If the certifications field is just "Learn $cert in $city," the page is filler regardless of how many pages get built.
- **The expensive parts of an audit.** Lighthouse-level CWV monitoring at 200 URLs costs real money in API calls. The math still beats hand-checking, but it isn't free.

The automation stack collapses the mechanical work. It does not invent expertise. An operator with weak SEO judgment running this stack ships weak SEO at automation speed.

---

## Extending to Other Surfaces

The pattern generalizes. The same stack handles workflows outside SEO that have the same shape: mechanical work at the bottom, judgment at the top.

- **Lifecycle email** — content templates, send-time scheduling, deliverability monitoring on cron; copy decisions stay human
- **Ad creative generation** — brand-tone guarded image and copy variants on a brief; final approval stays human
- **Lead enrichment + routing** — enrichment, scoring, and routing on webhook; high-fit follow-up stays human
- **Competitor monitoring** — page-diff watch on cron, summaries via prompt-cached Claude; the "so what?" stays human

The principle is the same in every case. *Move the deterministic work out of human hands. Keep the judgment work in.*

The format is the interface. Any tool that ships logic as code in the client's repository, deployed to infrastructure the client already owns, can join the stack. The platform is your stack. The platform is not someone else's UI.

---

## Stack Reference

For replication, the specific tools used:

- **Language:** TypeScript, strict mode
- **Runtime:** Vercel serverless functions + Vercel cron
- **Database:** Supabase (Postgres + RLS)
- **AI inference:** Anthropic API (Claude 4.7 Opus for the review pass, Sonnet 4.6 for high-volume operations)
- **SERP / crawl:** Firecrawl for page-level scraping, Google Search Console API for indexed-pages and performance, DataForSEO for AI Overview tracking
- **Performance:** PageSpeed Insights API for Core Web Vitals
- **Site:** Astro for static generation, Next.js when the site needs runtime SSR

Total platform cost for a 200-page site running this stack: approximately $200-400/mo in API fees. Build cost: a Sprint engagement for the audit, a Custom build for the full pSEO + GEO stack. After that, no marginal cost per workflow.

---

_If you're running an SEO surface that hasn't been touched by automation yet, the free 1-page async audit at [pravinemani.com/workflow-audit/](https://pravinemani.com/workflow-audit/) returns a written assessment within 48 hours. Send the site, the stack, and the workflow that costs the most time. The reply is a 1-page audit, not a sales call._
