# SEO / pSEO / GEO: One Automation Stack, Three Games

How the same code-first toolchain collapses 600+ hours of manual SEO work into 6 weeks. And the specific things you should not automate.

## The Problem

SEO used to be one game: rank a page on Google.

In 2026 it's three.

- **Classic SEO** — rank an individual page for an individual query.
- **Programmatic SEO** — generate hundreds of indexable pages from a structured content model.
- **Generative Engine Optimization** — get cited inside AI Overviews, Perplexity, ChatGPT, and Claude.

Three games. Three sets of mechanics. Three sets of tooling.

Most agencies sell them as three retainers.

They shouldn't be. The work underneath is the same shape: a lot of mechanical operations at the bottom, a small amount of judgment at the top. The mechanical layer should run on cron. The judgment layer is what the operator keeps doing.

## The Solution

One repo. Three workflows.

No n8n. No Make. No Zapier.

Three components on the client's own infrastructure:

- **`/scripts/`** — TypeScript audits and generators (`audit.ts`, `pseo-generate.ts`, `geo-monitor.ts`)
- **`/api/`** — Vercel serverless webhooks (Search Console sync, AI citation polling)
- **`/content/`** — MDX templates plus per-page data files for the pSEO surface

One Supabase database. One Anthropic API key. One Vercel project.

The audit script reads what the pSEO generator wrote. The GEO monitor reads both. Cross-workflow lookups are SQL queries, not Zapier connectors.

```
your-project/
├── scripts/
│   ├── audit.ts                  # 40 → 2 hour SEO audit
│   ├── pseo-generate.ts          # data model → 200+ MDX pages
│   ├── schema-validate.ts        # Schema.org JSON-LD checker
│   └── geo-monitor.ts            # citation polling across AI tools
├── api/
│   ├── gsc-sync/route.ts         # nightly Search Console pull
│   ├── pseo-rebuild/route.ts     # CMS rebuild trigger
│   └── ai-citations/route.ts     # webhook from monitor cron
├── content/
│   ├── _templates/
│   │   ├── city-service.mdx      # pSEO template
│   │   └── course-cert.mdx       # pSEO template
│   └── data/
│       ├── cities.json           # data model
│       └── certifications.json
├── lib/
│   ├── anthropic.ts              # prompt-cached client
│   ├── supabase.ts               # typed client + RLS
│   └── schema.ts                 # Schema.org builders
└── vercel.json                   # cron schedule + redirects
```

One repository. One deploy. Three games handled.

## What I Did (Step by Step)

### Step 1: Automated SEO audit

The manual version takes 40 hours.

Crawl with Screaming Frog. Export to a sheet. Hand-check 200+ pages for title tags, meta descriptions, internal links, Schema.org validity, mobile rendering, Core Web Vitals, redirect chains, indexation status, ranking position. Write a report.

The automated version takes 2 hours.

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
      url, issues, scanned_at: new Date(),
    });
  }
}
```

Mechanical checks run deterministically. The LLM only sees the 5-15 percent of findings flagged as ambiguous. Token cost on a 200-page site: under $0.30 per run.

The 38 hours saved is real. The 2 hours that remain is the part the operator should still do.

### Step 2: pSEO content stack

Hand-writing 200 pages of programmatic SEO content takes 600+ hours.

The code-first version takes 6 weeks of engineering plus a real data model.

The pattern that worked on the CISNET engagement:

- Data model in `/content/data/*.json` (certifications × cities × formats)
- MDX template in `/content/_templates/*.mdx` with typed slots
- Build-time generation via Astro's `getStaticPaths`
- Schema.org JSON-LD per page type
- Internal-link graph generated from the same data model

The thin-content threshold is the line most pSEO sites cross and get penalized for. A page needs enough unique content per route, or Google deindexes it inside a quarter.

```typescript
// scripts/pseo-generate.ts
function shouldGenerate(page: PageData): boolean {
  const unique = [
    page.courseCurriculum,    // varies by cert
    page.localTestimonials,   // varies by city
    page.instructorBio,       // varies by city + cohort
    page.faq,                 // varies by cert
    page.cohortSchedule,      // real upcoming dates
  ].join(' ').split(/\s+/).length;

  return unique >= 600;
}
```

At CISNET: 247 candidate combinations. 53 failed the threshold and got `noindex`. 194 shipped.

Indexation rate at week 6: 100 percent.

Ranking loss across the 70+ legacy URL redirects from the migration: zero.

*The pSEO that works is the pSEO that respects the threshold. The pSEO that doesn't is faster spam.*

### Step 3: GEO citation tracking

Classic SEO measures rank position. GEO measures something different.

Is your page being cited inside an AI Overview? A Perplexity answer? A ChatGPT search result?

Manual GEO tracking is three to four hours per week. Run 50 prompts across four AI tools. Screenshot every citation. Paste into a sheet.

Automated GEO tracking runs on a 6-hour cron.

```typescript
// scripts/geo-monitor.ts
const prompts = await supabase.from('geo_prompts').select('*');

for (const { id, prompt, target_domains } of prompts) {
  const responses = await Promise.all([
    perplexity.search(prompt),
    openai.searchPreview(prompt),
    googleAiOverview(prompt),       // via SERP API proxy
    anthropic.searchAugmented(prompt),
  ]);

  for (const response of responses) {
    const citations = extractCitations(response.text);
    const ours = citations.filter(c =>
      target_domains.some(d => c.url.includes(d))
    );

    await supabase.from('geo_results').insert({
      prompt_id: id,
      tool: response.tool,
      cited: ours.length > 0,
      citation_urls: ours.map(c => c.url),
      run_at: new Date(),
    });
  }
}
```

Dashboard query: a single `select` grouped by tool, plotted as a time series.

The first time a competitor pulls ahead in citations on a query you care about, you see it that day, not three weeks later.

## How to Replicate This

### 1. Audit script

Wire three APIs:

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

Nightly run at 4am UTC. Net-new issues get flagged. Resolved issues get archived.

### 2. pSEO content stack

Start with the data model, not the template.

- List every combination you would generate (cert × city, service × neighbourhood)
- List the data fields that vary per combination
- Write 5 combinations by hand
- Write the MDX template that consumes those fields
- Add the unique-content threshold check
- Generate

Most pSEO mistakes happen at the data model stage. If the data doesn't vary meaningfully per combination, the pages won't either, and Google deindexes them inside a quarter. Spend the time on the model.

### 3. GEO monitor

The four AI tools worth tracking in 2026:

- Google AI Overviews
- Perplexity
- ChatGPT search
- Claude search-augmented responses

Each exposes citations differently. Write one adapter per tool.

Track 30-50 prompts your real customers run. Not 500 vanity queries you don't care about.

## The Math

Real numbers from a single engagement, normalized to a 200-page site:

| Workflow | Manual | Automated | Saved |
|---|---|---|---|
| Initial SEO audit | 40 hrs | 2 hrs | 95% |
| Per-page content brief | 4 hrs | 15 min | 94% |
| 200-page pSEO content stack | 600+ hrs | 6 weeks build, then $0 marginal | one-time |
| GEO citation tracking | 3-4 hrs / week | runs on cron | 100% |
| Schema.org validation | 1-2 hrs / week | runs on commit hook | 100% |

The cost comparison is more interesting than the time comparison.

A traditional agency retainer for "monthly SEO" runs $3,000-$8,000.

The automated stack costs $200-400/mo in API fees. Anthropic, Firecrawl, DataForSEO, Vercel. The build is one-time engineering.

Past month 4 or 5, the agency model loses on monthly math.

Past month 12, the agency has billed $36-96K against the same outcomes the stack delivers for $4,800/year.

## Why This Works

The insight is that SEO has always been two stacked games.

A large mechanical layer. A small judgment layer.

The mechanical layer scales linearly with site size. Number of pages to audit. Schema types to validate. Citations to track. Redirect chains to verify. Core Web Vitals across 200 URLs.

The judgment layer doesn't scale that way.

What scripts handle well: the mechanical layer.

What scripts handle badly: the judgment layer. Which keyword to target. Whether a topic is worth writing about at all. Whether a backlink opportunity is worth a relationship. When to skip a topic everyone else is writing about. The contrarian call.

*The mechanical layer should run on cron. The judgment layer should never be automated.*

Confusing the two is expensive in both directions. Agencies that bill $5K/mo for the mechanical layer waste the client's money. SEO operators who automate the judgment layer ship 200 pages of low-quality content and get the site penalized.

The automation stack solves only the mechanical layer.

## What This Doesn't Solve

Code-first SEO automation has honest limits:

- **Strategic positioning.** A script can scan competitor pages. It cannot decide whether to compete on a category at all.
- **Backlink relationships.** Outreach automation produces spam-tier emails that hurt sender reputation. Real link building is a relationship game and the work is in the relationships, not the email volume.
- **Local SEO ground work.** Google Business Profile photos. Customer reviews. On-the-ground events. Not automatable. Shouldn't be.
- **Brand mention monitoring at scale.** Tracking your brand across Reddit, podcasts, niche forums needs a paid platform or a real scrape budget. The automation stack handles the AI-tool slice cleanly. The wider brand-mention surface is its own problem.
- **pSEO with a weak data model.** Generating 500 pages from a model that doesn't vary meaningfully per page is faster spam. The script makes it worse, not better. The 6 weeks the CISNET build took were mostly spent on the model, not the code.
- **AI-generated content as the content.** The automation stack generates *templates* with structured slots. The content in each slot still has to be real. "Learn $cert in $city" is filler whether one page ships or 500 do.
- **Lighthouse monitoring at scale.** CWV monitoring across 200 URLs costs real money in API calls. The math still beats hand-checking. It isn't free.

*The automation stack collapses the mechanical work. It does not invent expertise. An operator with weak SEO judgment running this stack ships weak SEO at automation speed.*

## Extending to Other Surfaces

The pattern generalizes.

The same stack handles workflows outside SEO that have the same shape: mechanical work at the bottom, judgment at the top.

- **Lifecycle email** — content templates, send-time scheduling, deliverability monitoring on cron. Copy decisions stay human.
- **Ad creative generation** — brand-tone guarded image and copy variants on a brief. Final approval stays human.
- **Lead enrichment and routing** — enrichment, scoring, and routing on webhook. High-fit follow-up stays human.
- **Competitor monitoring** — page-diff watch on cron, summaries via prompt-cached Claude. The "so what?" stays human.

Same principle every time.

*Move the deterministic work out of human hands. Keep the judgment work in.*

The format is the interface. Any tool that ships logic as code in the client's repo, deployed to infrastructure the client already owns, can join the stack.

The platform is your stack. The platform is not someone else's UI.

---

## Stack Reference

For replication, the specific tools:

- **Language:** TypeScript, strict mode
- **Runtime:** Vercel serverless functions + Vercel cron
- **Database:** Supabase (Postgres + RLS)
- **AI inference:** Anthropic API (Claude 4.7 Opus for review passes, Sonnet 4.6 for high-volume operations)
- **SERP / crawl:** Firecrawl for page-level scraping, Google Search Console API for indexed-pages and performance, DataForSEO for AI Overview tracking
- **Performance:** PageSpeed Insights API for Core Web Vitals
- **Site:** Astro for static generation, Next.js when the site needs runtime SSR

Total platform cost for a 200-page site running this stack: roughly $200-400/mo in API fees.

Build cost: one-time engineering, fixed-scope.

After that, no marginal cost per workflow.

---

_If an SEO surface hasn't been touched by automation yet, the free async audit at [pravinemani.com/workflow-audit/](https://pravinemani.com/workflow-audit/) returns a written one-page assessment within 48 hours. No sales call attached._
