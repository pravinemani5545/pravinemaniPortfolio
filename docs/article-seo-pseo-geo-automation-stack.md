# SEO / pSEO / GEO: One Automation Stack, Three Games

SEO used to be one game. Today it's three. The same code-first stack handles all of them.

## What changed

A few years ago, SEO was the work of ranking a page on Google for a search query. One workflow, one tool, one metric.

In 2026, three different games run in parallel.

**Classic SEO** still matters. People search Google. Pages rank. CTR on a top result is still a real number. The difference is volume: Google watches more signals than it used to, and keeping a 200-page site clean across all of them is more work than a quarterly hand-audit can keep up with.

**Programmatic SEO (pSEO)** is the practice of generating hundreds of pages from a structured data model. A page per city you serve. A page per product category × use case. Done well, a small team can compete with a competitor that has fifteen content writers. Done badly, the entire site gets a manual penalty from Google for thin content.

**Generative Engine Optimization (GEO)** is the new game. AI Overviews surface in roughly thirty percent of informational queries. ChatGPT search, Perplexity, and Claude pull citations from real web pages. The page that ranks #2 in classic search but gets cited in the AI Overview at the top of the page gets more total clicks than the page that ranks #1 but isn't cited. The citation slot is the new front page.

Three games. Three sets of mechanics. Most teams still play them like one.

The work underneath all three has the same shape: a large mechanical layer at the bottom, a small judgment layer at the top. The mechanical layer should run on cron jobs. The judgment layer is what an SEO operator should keep doing.

What follows is what each game actually involves, what an automated version does, and the principle underneath all three.

## Classic SEO

Classic SEO is the work of making each page on your site findable, crawlable, indexable, and rankable by Google for a relevant query. Title tags. Meta descriptions. Schema.org structured data. Core Web Vitals. Redirect chains. Internal linking. Indexation.

These haven't changed much in five years. What changed is that a 200-page site has 200 places each signal can go wrong.

A thorough manual audit takes about 40 hours. Crawl every page. Hand-check titles, descriptions, Schema validity, mobile rendering, performance scores, redirects, indexation status. Write the report.

The automated version takes about 2 hours and works like this:

1. Pull the list of indexed pages from Google Search Console.
2. For each page, run deterministic checks against the rendered HTML — title length, meta description quality, Schema.org validity, redirect chain depth, indexation status, Core Web Vitals from the PageSpeed Insights API.
3. Write findings to a database.
4. Have an AI model review only the small subset of findings that need judgment (typically 5-15 percent of total flags).
5. Generate the report.

The mechanical work runs deterministically. Token cost on a 200-page site: under thirty cents per run. The two hours left are for reading the report and deciding what to fix.

What the site owner sees: a nightly report instead of a quarterly one. Every issue dated. Every issue tied to a URL. Every fix tracked over time.

## Programmatic SEO

pSEO is the practice of generating pages from a structured data model rather than writing each one by hand. The most common pattern is a content matrix: certifications × cities, services × neighbourhoods, products × use cases.

Each generated page targets a different long-tail search query. Each page has unique content per route. Google indexes each one independently.

The line between "useful at scale" and "deindexed for thin content" is the data model. If the data varies meaningfully per combination, the pages do too, and Google treats them as distinct. If the data is essentially the same template with a swapped city name, the pages get deindexed inside a quarter.

The CISNET engagement is the concrete example. Toronto IT certification training company, every (certification × city × format) combination as a generated page. Roughly 200 candidate pages.

The data model:

- Course curriculum (varies by certification)
- Local testimonials (varies by city)
- Instructor bio (varies by city and cohort)
- FAQs specific to each certification
- Real upcoming cohort dates with prices

The threshold check, the unglamorous code that decides whether each page gets generated:

```typescript
function shouldGenerate(page) {
  const uniqueWords = [
    page.courseCurriculum,
    page.localTestimonials,
    page.instructorBio,
    page.faq,
    page.cohortSchedule,
  ].join(' ').split(/\s+/).length;

  return uniqueWords >= 600;
}
```

247 candidate combinations. 53 failed the threshold and got `noindex`. 194 pages shipped.

Six weeks later, all 194 were indexed. Zero ranking loss across the 70+ legacy URL redirects from the migration.

Most pSEO sites skip the threshold. They generate the 247 pages anyway, and Google penalizes the whole site. The threshold check is unglamorous and it's the difference between traffic that compounds and a site that gets manually penalized.

## Generative Engine Optimization

When someone searches "best AI consultant in Toronto," Google might show an AI Overview at the top with a synthesized answer. That answer cites real web pages. The new SEO question is: is your page one of those citations?

The same dynamic plays out in ChatGPT search, Perplexity, and Claude. All three pull citations from real pages when answering a search query.

AI Overviews and similar AI-search experiences favor pages that are easy to extract clean, quotable passages from. The practical signals:

- A clear one-sentence answer near the top of each page, under 25 words.
- HTML definition lists (`<dl>` markup) for term-definition pairs.
- Schema.org FAQPage and HowTo markup where the content earns it.
- An `llms.txt` file at the site root (think `robots.txt` for AI crawlers).
- H3 headings phrased as questions, not topics.

These overlap with the structured-data and content-quality work classic SEO already required. The shift is in priority: a page optimized for "rank at #1" can be different from a page optimized to "get cited in the AI answer," and in 2026 the second one wins more queries than the first.

Tracking is the part that has to change. Classic SEO measures rank position. GEO measures citations across multiple AI tools, across multiple prompts, over time.

Manual tracking is three to four hours per week of running prompts and screenshotting citations. The automated version runs on a six-hour cron: hit each AI tool's API (or scraping intermediary) with the prompt list, extract citations programmatically, write results to a database, plot a time series.

What the site owner sees: a daily dashboard. Which AI tools cite which pages, on which prompts, over time. When a competitor pulls ahead in citations, it shows up that day, not three weeks later.

## The cost difference

A typical "monthly SEO" agency retainer runs $3,000-$8,000 per month. That covers a small team doing the audit work, content production, link-building outreach, and reporting.

A code-first automation stack that handles the same workflows runs $200-$400 per month in API fees. Anthropic API. Firecrawl. DataForSEO. Vercel and Supabase on near-free tiers. The build is one-time engineering. After that there's no marginal cost per workflow.

Past month four or five, the stack has paid for the build. Past month twelve, the agency model has billed roughly $36,000-$96,000 against outcomes the stack delivers for under $5,000 a year.

The agency model wins when the work genuinely requires a person every month. Most of the work doesn't.

## The principle

The mechanical layer of SEO scales linearly with site size. Number of pages to audit. Schema types to validate. Citations to track. Redirects to verify. Core Web Vitals across hundreds of URLs.

The judgment layer doesn't scale that way.

What scripts handle well: the mechanical layer.

What scripts handle badly: which keyword to target, whether a topic is worth writing about, whether a backlink opportunity is worth a relationship, when to skip a topic everyone else is writing about.

*The mechanical layer should run on cron. The judgment layer should never be automated.*

Most agencies confuse the two and bill clients for the mechanical work as if it required a person. Most "AI SEO" tools confuse the two in the other direction, automating the judgment work and producing low-quality content faster.

## What this doesn't solve

Code-first SEO automation has honest limits:

- **Strategic positioning.** A script can scan competitor pages. It cannot decide whether your business should compete on a category at all.
- **Backlink relationships.** Outreach automation produces low-quality emails that hurt sender reputation. Real link building is relationship work.
- **Local SEO ground work.** Google Business Profile photos, customer reviews, local events. Not automatable.
- **Brand mention monitoring at scale.** Tracking your brand across Reddit, podcasts, niche forums needs a paid platform or a real scrape budget. The automation stack handles the AI-tool slice cleanly. The wider brand surface is its own problem.
- **pSEO with a weak data model.** Generating 500 pages from data that doesn't vary meaningfully per page is faster spam. The six weeks the CISNET build took were mostly spent on the data model, not the code.
- **AI-generated content as the content.** The automation stack generates templates with structured slots. The content in each slot still has to be real. "Learn $cert in $city" is filler whether one page ships or 500 do.

The automation stack collapses the mechanical work. It doesn't invent SEO expertise. A team running it with weak SEO judgment ships weak SEO at automation speed.

---

_Reference engagement: CISNET (Toronto IT certification training). 200+ programmatic SEO pages indexed in six weeks, 70+ legacy URL redirects with zero ranking loss, seven Schema.org types shipped, full lead pipeline through Facebook Lead Ads, Stripe Checkout for enrollments. Three months. Built on Vercel + Supabase + Anthropic API. Source repository handed off at engagement close._
