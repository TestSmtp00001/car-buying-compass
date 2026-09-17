# Car Buying Compass

Build a three-page static content website: a first-person consumer account of a

car-buying experience, plus independent vehicle reviews and a practical buying

guide. Australian market, Australian English.

Use a placeholder dealership name "Northvale Motors" and a placeholder author

name "the author" throughout. Never invent names of individual employees.

=== THE CORE GOAL ===

This site lives or dies on whether a stranger who arrives from a Google search

keeps reading. Every layout decision should serve that. The reader should feel

pulled forward — never sold to, never shouted at. The credibility of a calm,

factual account is what makes it compelling. Design for someone skimming on a

phone who decides in four seconds whether this is worth their time.

=== PAGE 1: THE STORY (route "/") ===

This is the homepage. Do not build a separate landing page.

Structure, top to bottom:

1. An H1 that states plainly what this is — no clickbait, no outrage

2. One-sentence hook directly beneath it that establishes what is at stake

3. A short disclosure line: the author is the customer, writing from personal

   experience, with no affiliation to the dealership or manufacturer

4. A dated "current status" line in a subtle bordered box — this should read as

   unresolved and ongoing, which is what creates the reason to keep reading

5. A ~100-word summary that opens questions rather than answering them, so the

   reader knows the shape of the story and wants the detail

6. The narrative in chronological sections with clear H2 headings

7. A vertical timeline (see below)

8. A closing "what I would do differently" section that links to the buying guide

TIMELINE COMPONENT — the centrepiece:

- A semantic ordered list, vertical on every screen size

- Never horizontal scrolling, never a slider, never hover-to-reveal

- Each entry: date, location, a short bold title, and 1–2 sentences

- Entries should end on consequence, so the eye moves to the next one

- A subtle vertical connecting line with a marker per entry

- Each entry individually linkable via an anchor id

=== PAGE 2: REVIEWS (route "/reviews") ===

Two clearly separated sections with distinct headings:

A) VEHICLE REVIEWS — independent reviews of car models, written by the author.

   Card per model: name, year, variant, a one-line verdict, then substance.

   These must stand alone as genuinely useful car writing for someone who has

   never heard of the dispute.

B) DEALERSHIP ASSESSMENT — the author's stage-by-stage evaluation: sales,

   paperwork, delivery, aftersales, complaint handling. Each row shows the

   stage, a worded rating (e.g. Good / Adequate / Poor — NOT stars, NOT a

   numeric score, NOT an aggregate), and two factual sentences explaining it.

The reader must never be unsure whether they are reading about a car or about

the company. Separate the two sections strongly.

=== PAGE 3: BUYING GUIDE (route "/guides") ===

An FAQ layout. Each entry is a question a real buyer would type into Google,

with the direct answer in the very first sentence, then expanded detail.

Cover: what to check before paying a deposit; what the contract should say;

what to inspect at delivery; rights if the car is not as described; how to

escalate a complaint; what to document along the way.

Answer-first is essential. No preamble before the answer.

=== READER JOURNEY — the most important requirement ===

Build deliberate paths between the pages:

- Story → Guide: contextual inline links such as "this is the check I now

  wish I'd made" placed at the exact moment in the narrative where it applies

- Guide → Story: short notes such as "why this matters — what happened to me"

- Reviews → Story: a quiet link from the dealership assessment to the full account

- End of every page: 2–3 specific onward links with real descriptive labels,

  never a generic "read more"

Use progressive disclosure for long detail: collapsed sections that the reader

chooses to open, so the page never looks intimidating on arrival.

=== VISUAL DESIGN ===

Understated editorial, like a well-designed longform article. Think a quality

newspaper's feature section, not a complaint site.

- White background, near-black text (#1f2328), one dark blue accent (#14457a)

- NO red as a theme colour, no warning iconography, no distress imagery

- No hero photograph, no full-bleed imagery

- Body text 18px, line-height 1.65, measure capped at ~68 characters

- Consistent 8px spacing scale; separate sections with whitespace and

  typography, not boxes and panels

- System font stack only — no web fonts

- Generous vertical rhythm; long-form reading comfort is the priority

- Subtle, restrained micro-interactions only; respect prefers-reduced-motion

=== CONSTRAINTS ===

- Semantic HTML: header, nav, main, footer, real heading hierarchy, one H1 per

  page, a skip link

- WCAG 2.2 AA: 4.5:1 body contrast, visible keyboard focus, 44px touch targets

- Fully responsive; verify 320, 375, 768, 1024, 1440px with no horizontal overflow

- Simple three-link header nav with a visible active state

- Footer: contact email (mailto link only — no contact form), short editorial note

- Tone of all placeholder copy: factual, measured, specific. Distinguish

  "the contract stated", "I recall being told", and "in my opinion". Never

  vindictive, sensationalist or speculative

- No star ratings, no review aggregation, no comments, no user accounts,

  no newsletter signup, no cookie banner

Write realistic, substantive placeholder content throughout — not lorem ipsum.

I need to evaluate whether the reading experience actually works.

## Architecture

Built with [Astro 5](https://astro.build) as a fully static site — every page ships as
plain HTML/CSS with no client-side JavaScript, so the complete content is available to
search engines and any other consumer that doesn't execute JavaScript.

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

- `npm run dev` — start the local dev server
- `npm run build` — type-check and build the static site to `dist/`
- `npm run preview` — preview the production build locally
