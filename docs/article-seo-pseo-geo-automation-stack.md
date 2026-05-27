# SEO / pSEO / GEO: One Automation Stack, Three Games

A walkthrough of the three SEO disciplines that matter in 2026, what each one actually does for your business, and how a single automation stack collapses months of manual work into days. With real numbers from a shipped engagement.

## The shift that matters

A few years ago, SEO was one game. You picked a keyword, you wrote a page, you tried to rank it on Google. One workflow, one tool, one metric.

In 2026 it's three games running in parallel, and most teams are still trying to play them like they're one.

**Classic SEO** is still alive. People search Google. Pages still rank. CTR on a top result still matters. What changed is the volume of work it takes to keep up — Google's algorithm watches more signals than it used to, and the manual audit work has grown.

**Programmatic SEO (pSEO)** is the practice of generating large numbers of search-targeted pages from a structured content model. Think "a page per city you serve" or "a page per product category × use case." Done well, it's how a single operator can compete with a competitor that has a content team of 15. Done badly, it's how a site gets deindexed by Google for thin content.

**Generative Engine Optimization (GEO)** is the new game. AI Overviews surface in roughly 30 percent of informational queries. ChatGPT search, Perplexity, and Claude pull citations from real web pages. The new question isn't "do I rank for this keyword?" — it's "am I the page being quoted inside the AI answer?"

Three games, three sets of mechanics. Most agencies sell them as three separate retainers.

They shouldn't be. The work underneath all three has the same shape: a large mechanical layer at the bottom, a small judgment layer at the top. The mechanical layer should run on cron jobs. The judgment layer is what an SEO operator should still be doing.

Below is what each layer actually looks like, what an automated version delivers, and how a single code-first stack handles all three.

## Game 1: Classic SEO

### What it is in plain language

Classic SEO is the work of making sure each page on your site can be found, crawled, indexed, and ranked by Google for a relevant search query. The pieces that matter haven't changed much in five years: clean title tags and meta descriptions, valid Schema.org structured data, fast page load speeds, no broken redirects, healthy internal linking.

What changed is the volume. Google watches more signals now. A 200-page site has 200 places each of those signals can go wrong. A typical agency does a quarterly audit of all of them by hand.

### What the manual version looks like

A thorough manual SEO audit on a 200-page site takes roughly **40 hours of skilled labor**.

That's a crawl through every page, a check on title-tag length and uniqueness, a check on meta description quality, a Schema.org validity pass, a mobile-rendering check, Core Web Vitals scores for each page, a redirect-chain audit, an indexation-status review, and a final report written up for the client.

At a typical agency, that audit is a one-time $4,000-$8,000 engagement, or it's bundled into a $3,000-$8,000 monthly retainer where the team chips away at it across the month.

### What the automated version delivers

The same audit runs in roughly **two hours** when the mechanical work is moved into code:

- A script crawls every indexed page (pulled from your Google Search Console account)
- For each page, deterministic checks run against the fetched HTML: title-tag length, meta description quality, Schema.org validity, mobile rendering, Core Web Vitals via the PageSpeed Insights API, redirect chains, indexation
- Issues land in a database
- An AI model only reviews the small subset of findings that need judgment — typically 5 to 15 percent of total flags
- A written report is generated automatically

The two hours that remain is the part a human should still do: read the report, decide what's worth fixing, and prioritize.

What the client sees: a nightly audit report. Every issue dated. Every issue tied to a specific URL. Every fix tracked over time. The "quarterly audit" becomes a live dashboard.

## Game 2: Programmatic SEO

### What it is in plain language

pSEO is the practice of generating hundreds of pages from a structured content model rather than writing each page by hand. The most common pattern is a content matrix: certifications × cities, services × neighbourhoods, products × use cases.

Each generated page targets a different search query. Each one has unique content per route, drawn from real data. Each one is indexed by Google independently.

Done well, pSEO is how a small team can compete with much larger competitors on long-tail search. Done badly, it's how a site gets a manual penalty from Google for "thin content" and loses years of authority overnight.

The difference is almost entirely in the data model.

### The CISNET example

A recent client engagement: CISNET, a Toronto IT certification training company. Goal: generate a page for every certification × city × format combination they teach (CompTIA A+ in Toronto, Cisco CCNA in Mississauga, AWS Solutions Architect in Hamilton — that pattern, 200+ combinations).

The manual version would have been roughly **600+ hours of writing** spread across a content team. At an agency rate that's $30,000-$60,000 in content alone, before any technical work.

The code-first version was a **six-week engineering build**: one structured data model (cities, certifications, formats, instructors, cohort schedules), one MDX template per page type, build-time generation through Astro's static-site routing, Schema.org JSON-LD generated per page type, and an internal-link graph computed automatically from the same data.

### The safeguard most pSEO sites skip

The line between "useful at scale" and "deindexed for thin content" is whether each generated page has enough genuinely unique content per route. The threshold I run is roughly 600 unique words per page, drawn from data that actually varies per combination — the course curriculum (varies by certification), local testimonials (varies by city), instructor bio (varies by city and cohort), FAQs specific to the certification, real upcoming cohort dates.

The code checks this on every page before it gets generated. The pages that don't clear the threshold get `noindex` and stay out of the sitemap:

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

At CISNET, 247 candidate combinations were considered. 53 failed the threshold and got excluded. 194 pages shipped. Six weeks later, all 194 were indexed. Zero ranking loss across the 70+ legacy URL redirects from the migration.

That's the part most pSEO content tools skip. They generate the 247 pages anyway, and Google penalizes the entire site for thin content. The threshold check is unglamorous code, and it's the difference between a site that compounds in traffic and a site that gets manually penalized.

## Game 3: Generative Engine Optimization (GEO)

### What it is in plain language

When someone searches "best AI consultant in Toronto" today, Google might show an AI Overview at the top with a synthesized answer. That answer cites real web pages. The new SEO question is: is your page one of the cited sources?

The same dynamic plays out in ChatGPT search, Perplexity, and Claude. All three pull citations from real web pages when answering a search query. All three are eating click-through from traditional organic results.

A page that ranks #2 in classic Google search and gets cited in the AI Overview at the top of the page gets more total clicks than a page that ranks #1 but isn't cited. The citation slot is the new front page.

### What ranking inside an AI answer actually requires

AI Overviews and similar AI-search experiences favor pages that are easy to extract clean, quotable passages from. The practical signals are:

- A clear one-sentence answer near the top of each page (under 25 words)
- HTML definition lists (`<dl>` markup) for term-definition pairs
- Schema.org FAQPage and HowTo markup where the content earns it
- An `llms.txt` file at the root of the site (think robots.txt for AI crawlers)
- H3 headings phrased as questions, not topics

These aren't separate from classic SEO. They overlap with the structured-data and content-quality work that already needed to happen. The shift is in priority: a page optimized for "rank at #1" can be different from a page optimized to "get cited in the AI answer," and in 2026 the second one wins on most informational queries.

### The tracking problem

Classic SEO measures rank position. GEO needs to measure citation: across multiple AI tools, across multiple prompts, over time.

Manual tracking is a three-to-four-hour weekly chore. Run 50 prompts across four AI tools. Screenshot the citations. Paste into a sheet. The data is stale by Tuesday.

The automated version runs on a six-hour cron job. Each tool's API (or a scraping intermediary where the official API isn't available) is hit with the prompt list. Citations are extracted programmatically. Results land in a dashboard with a time series.

What the client sees: a daily dashboard. Which AI tools cite their pages on which prompts. Which competitor citations are gaining. When a new prompt category opens up where they could compete.

The first time a competitor pulls ahead in citations on a query that matters, the client sees it that day, not three weeks later.

## The cost math

The reason this matters to a non-engineering reader is the cost difference.

A traditional "monthly SEO" retainer at a typical agency runs **$3,000-$8,000 per month**, depending on scope. That covers a small team doing the manual audit work, the content production, the link-building outreach, and the reporting.

A code-first automation stack that handles audits, pSEO generation, schema validation, GEO citation tracking, and reporting on the client's own infrastructure runs roughly **$200-$400 per month** in API fees. That's Anthropic API costs, Firecrawl for page crawling, DataForSEO for AI Overview tracking, plus the Vercel + Supabase free or near-free tiers.

The build is one-time engineering, scoped as a fixed-price engagement. Past month four or five of operation, the automation stack has paid for itself. Past month twelve, the agency has billed roughly $36,000-$96,000 against the same outcomes the automation stack delivers for under $5,000 per year.

This isn't a pitch for free or cheap. The one-time build is paid engineering work, and a 200-page site running all three workflows is typically a fixed-scope Custom engagement that takes four to six weeks.

It's a pitch for one-time over recurring, and for owned infrastructure over subscription dependencies.

## What this doesn't solve

A fair article needs the limits section. Code-first SEO automation has honest constraints:

- **Strategic positioning.** A script can scan competitor pages. It can't decide whether your business should compete on a category at all. That's a positioning call, and a human should make it.
- **Backlink relationships.** Outreach automation produces low-quality emails that hurt sender reputation. Real link building is a relationship game and the work is in the relationships.
- **Local SEO ground work.** Google Business Profile photos, customer reviews, local events. Not automatable. Should be done by a human who actually shows up.
- **Brand mention monitoring at scale.** Tracking your brand across Reddit, podcasts, niche forums needs a paid platform or a real scrape budget. The automation stack handles the AI-tool slice cleanly. The wider brand surface is its own problem.
- **pSEO with a weak data model.** Generating 500 pages from data that doesn't vary meaningfully per page is faster spam. The script makes it worse, not better. The six weeks the CISNET build took were mostly spent on the data model, not the code.
- **AI-generated content as the content.** The automation stack generates templates with structured slots. The content in each slot still has to be real. "Learn $cert in $city" is filler whether one page ships or 500 do.

The automation stack collapses the mechanical work. It doesn't invent SEO expertise. A team with weak SEO judgment running this stack ships weak SEO at automation speed.

## What an engagement looks like

For a 200-page site that hasn't been touched by automation yet, the typical engagement shape is:

1. **A free 30-minute scoping call.** Walk through the current setup, the metrics that matter, and what's broken. The call ends with a written quote inside 24 hours covering deliverables, milestones, and final price.
2. **A fixed-scope week for the audit.** Three founder interviews, a structured workflow review, and a ranked opportunity list. Output is a 30-day plan with milestones and an honest read on whether automation is the right next step.
3. **A four-to-six-week Custom build for the full stack.** The audit script, the pSEO generator, the GEO monitor, the Schema.org validator, deployed to your own Vercel and Supabase accounts. You own all of it at the end.
4. **An optional Ops Retainer for ongoing tuning.** Monthly engagement, capped hours, only available after the build has shipped. Covers prompt updates, eval suite maintenance, and on-call response if the cron jobs misbehave.

The deliverables are concrete. The pricing is fixed at signing. The code is yours from day one and at the close. If you stop working with me, the stack keeps running.

## The principle underneath all three games

The mechanical layer of SEO scales linearly with site size. Number of pages to audit. Schema types to validate. Citations to track. Redirects to verify. Core Web Vitals across hundreds of URLs.

The judgment layer doesn't.

What scripts handle well is the mechanical layer. What scripts handle badly is the judgment work — which keyword to target, whether a topic is worth writing, whether a backlink is worth a relationship, when to skip something everyone else is writing about.

The mechanical work should run on a cron job. The judgment work should never be automated.

Most agencies confuse the two and bill the client for the mechanical work as if it required a person. Most "AI SEO" tools confuse the two in the other direction, automating the judgment work and producing low-quality content faster.

The point of the automation stack isn't to replace the SEO person. It's to let the SEO person stop doing the work a script could do, and start doing the work only a human can.

---

_If you have an SEO surface that hasn't been touched by automation yet, the free async audit at [pravinemani.com/workflow-audit/](https://pravinemani.com/workflow-audit/) returns a written one-page assessment within 48 hours. Send the site, the current stack, and the workflow that costs the most time. No sales call attached. If the answer is "you don't need automation yet," that's what you'll get back._
