import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Car-Buying Experience with Northvale Motors" },
      { name: "description", content: "The author’s factual, first-person account of an unresolved Australian car purchase, from order and delivery to complaint." },
      { property: "og:title", content: "My Car-Buying Experience with Northvale Motors" },
      { property: "og:description", content: "The author’s factual, first-person account of an unresolved Australian car purchase, from order and delivery to complaint." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const timeline = [
  { id: "research", date: "3 February 2026", location: "Home, Melbourne", title: "The advertised specification", text: "I compared the manufacturer’s Australian website with Northvale Motors’ listing and shortlisted a particular variant because it appeared to include a driver-assistance feature I wanted." },
  { id: "the-order", date: "7 February 2026", location: "Northvale Motors", title: "A deposit was paid", text: "After a test drive and discussion about the feature, I paid a $1,000 deposit. The written order identified the variant but did not list that feature separately." },
  { id: "paperwork", date: "18 February 2026", location: "By email", title: "The contract was issued", text: "The contract stated the model, colour and drive-away price. I signed it without asking for the discussed specification to be written into the special conditions." },
  { id: "delivery", date: "12 March 2026", location: "Northvale Motors", title: "The car was collected", text: "The handover covered pairing a phone and the service schedule. I did not test every driver-assistance function before leaving, and later found the expected feature was absent." },
  { id: "first-contact", date: "13 March 2026", location: "By telephone", title: "The discrepancy was reported", text: "I explained what I believed had been represented before purchase. I was told the matter would be checked, but no written position followed that day." },
  { id: "records", date: "16–23 March 2026", location: "By email", title: "The record was assembled", text: "I sent the order, contract, screenshots and my dated recollection of the sales conversation. The replies acknowledged receipt without addressing the substance." },
  { id: "complaint", date: "2 April 2026", location: "By email", title: "A formal complaint was lodged", text: "I asked Northvale Motors to state whether it accepted my account and what remedy it proposed. The requested response date passed without a resolution." },
  { id: "current", date: "17 September 2026", location: "Ongoing", title: "The position remains unresolved", text: "Northvale Motors has acknowledged the complaint. The author is still waiting for a substantive written response and has not agreed to a resolution." },
];

function Index() {
  return (
    <main id="main-content">
      <article className="mx-auto max-w-reading px-4 pb-8 pt-16 sm:px-6 sm:pt-24">
        <header>
          <p className="eyebrow">First-person account</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">My car-buying experience with Northvale Motors</h1>
          <p className="mt-6 text-xl leading-8 text-foreground">A feature discussed before purchase was not on the car I collected, and the question of what was promised remains unresolved.</p>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">Disclosure: the author is the customer, writing from personal experience, with no affiliation to Northvale Motors or the vehicle manufacturer.</p>
          <p className="mt-8 border-y border-border py-4 text-sm leading-6 text-muted-foreground"><strong className="text-foreground">Current status — 17 September 2026:</strong> Northvale Motors has acknowledged the complaint. The author is awaiting a substantive written response.</p>
          <p className="mt-10 text-lg leading-8 text-foreground">I approached the purchase as an ordinary buyer: I researched the model, took a test drive, discussed the specification and signed the paperwork. The uncertainty began only after collection, when one feature I believed formed part of the deal was not present. The documents do not settle what was said in the showroom, while later correspondence has not yet produced a clear account from the dealership. This chronology records what the contract stated, what I recall being told and what can be supported by dated records. It also explains the small checks that might have prevented a lengthy dispute.</p>
        </header>

        <section aria-labelledby="choosing-car" className="story-section">
          <p className="section-marker">01 · Research</p>
          <h2 id="choosing-car" className="text-3xl font-bold text-foreground">Choosing the car</h2>
          <p>I wanted a practical vehicle with a specific driver-assistance feature for regular motorway travel. The manufacturer’s Australian material and the dealership listing appeared consistent, so I booked a test drive of the advertised variant.</p>
          <p>During the appointment, I recall asking whether the test vehicle’s equipment matched the car being offered. My recollection is that it did. I did not ask for that answer to be repeated in writing before paying the deposit — <Link to="/guides" hash="before-deposit" className="editorial-link">this is the check I now wish I had made</Link>.</p>
        </section>

        <section aria-labelledby="signing" className="story-section">
          <p className="section-marker">02 · Evidence</p>
          <h2 id="signing" className="text-3xl font-bold text-foreground">What the paperwork recorded</h2>
          <p>The contract stated the model, variant, colour and drive-away price. It did not name the feature at issue. That distinction matters: the written document is clear about what it contains, while my account of the conversation is necessarily a recollection.</p>
          <details className="editorial-details">
            <summary>What I checked, and what I missed</summary>
            <p>I checked the total price, expected delivery month and trade-in allowance. I did not compare each advertised feature against the order, nor add the feature as a special condition. The practical lesson is to treat any feature that affects the decision as a written term, however routine it may sound.</p>
          </details>
        </section>

        <section aria-labelledby="handover" className="story-section">
          <p className="section-marker">03 · Handover</p>
          <h2 id="handover" className="text-3xl font-bold text-foreground">Collection and discovery</h2>
          <p>The car appeared clean and undamaged at delivery. The handover focused on keys, phone pairing and servicing, and I signed the delivery documents after a short walk-around. Later that day, while setting up the assistance systems, I found the expected control and menu option were absent.</p>
          <p>I contacted Northvale Motors the next morning. Before accepting a future vehicle, I would use <Link to="/guides" hash="delivery-inspection" className="editorial-link">a written delivery inspection covering every paid-for feature</Link>, not only visible condition.</p>
        </section>

        <section aria-labelledby="response" className="story-section">
          <p className="section-marker">04 · Follow-up</p>
          <h2 id="response" className="text-3xl font-bold text-foreground">The response so far</h2>
          <p>The first telephone response was courteous and non-committal. I was told the specification would be checked. I then sent a concise written chronology with the advertisement screenshot, order and contract so there would be one record of the issue.</p>
          <p>Northvale Motors has confirmed receipt but has not provided its account of the pre-sale discussion or a proposed resolution. That is the position as at the date above; I will update this page if the material facts change.</p>
        </section>

        <section aria-labelledby="timeline-heading" className="story-section">
          <p className="section-marker">05 · Documented chronology</p>
          <h2 id="timeline-heading" className="mt-3 text-3xl font-bold text-foreground">The timeline</h2>
          <ol className="timeline mt-10">
            {timeline.map((item) => (
              <li key={item.id} id={item.id} className="timeline-item scroll-mt-8">
                <div className="flex flex-wrap gap-x-3 text-sm font-semibold text-primary">
                  <time dateTime={item.date.includes("September") ? "2026-09-17" : undefined}>{item.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-foreground"><a href={`#${item.id}`} className="no-underline hover:text-primary">{item.title}</a></h3>
                <p className="mt-2 text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="differently" className="story-section story-section-emphasis">
          <p className="section-marker">06 · Practical lesson</p>
          <h2 id="differently" className="text-3xl font-bold text-foreground">What I would do differently</h2>
          <p>I would make the important specification part of the written contract, save the listing on the day of purchase, slow the handover down and test each agreed feature before signing the delivery record. I would also follow every material conversation with a dated email.</p>
          <p>Those steps are collected in the <Link to="/guides" className="editorial-link">practical Australian car-buying guide</Link>, with direct answers on deposits, contracts, delivery and complaints.</p>
        </section>
      </article>

      <nav aria-label="Continue reading" className="onward-links">
        <p className="eyebrow">Continue reading</p>
        <div className="mt-5 flex flex-col items-start gap-4">
          <Link to="/guides" hash="contract-wording" className="editorial-link">Check what your purchase contract should record</Link>
          <Link to="/guides" hash="escalate-complaint" className="editorial-link">Follow the steps for escalating a dealer complaint</Link>
          <Link to="/reviews" className="editorial-link">Read the vehicle reviews and separate dealership assessment</Link>
        </div>
      </nav>
    </main>
  );
}
