import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Independent Vehicle Reviews | A Buyer’s Account" },
      { name: "description", content: "Practical Australian-market vehicle reviews and a separate stage-by-stage dealership assessment by the author." },
      { property: "og:title", content: "Independent Vehicle Reviews | A Buyer’s Account" },
      { property: "og:description", content: "Practical Australian-market vehicle reviews and a separate stage-by-stage dealership assessment by the author." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const vehicles = [
  {
    name: "Toyota Corolla",
    year: "2023",
    variant: "Ascent Sport Hybrid hatch",
    verdict: "Efficient and easy to live with, but rear-seat and boot space require a careful family test.",
    body: "In mixed suburban driving, the hybrid system made low-speed progress quiet and economical. The controls were straightforward and the standard safety equipment was easy to understand rather than buried in menus.",
    detail: "The trade-off is packaging. A rear-facing child seat can noticeably reduce front-passenger space, and the hybrid battery arrangement limits the flexibility some hatch buyers expect. Take the people and luggage you actually carry to the test drive.",
  },
  {
    name: "Mazda CX-30",
    year: "2024",
    variant: "G25 Touring AWD",
    verdict: "A polished small SUV with an excellent cabin, offset by modest rear visibility and space.",
    body: "The steering, seating position and conventional automatic make the CX-30 feel settled in city traffic and on faster roads. Materials are unusually good for the class, and the rotary controller is less distracting than a touchscreen once learnt.",
    detail: "The sloping body shape compromises the rear quarter view and makes the back seat feel tighter than the exterior dimensions suggest. The larger engine is responsive, although buyers prioritising fuel use should compare it carefully with hybrid alternatives.",
  },
  {
    name: "Kia Sportage",
    year: "2024",
    variant: "SX+ 1.6T AWD",
    verdict: "A practical, well-equipped family SUV whose busy low-speed ride deserves an extended test drive.",
    body: "The broad rear seat, useful boot opening and clear surround-view cameras suit daily family use. Performance is adequate for overtaking, and the warranty provides useful reassurance for buyers planning to keep the car.",
    detail: "On patchy suburban roads the ride can feel more restless than expected, particularly on larger wheels. Some climate and media functions share the same control strip, so try common adjustments while driving rather than judging the cabin at rest.",
  },
];

const assessment = [
  { stage: "Sales", rating: "Adequate", text: "Questions were answered promptly and the test drive was arranged without pressure. I recall being told the vehicle matched the discussed specification, but that point was not added to the written order." },
  { stage: "Paperwork", rating: "Poor", text: "The contract stated the model and price but did not record the feature that later became disputed. The final paperwork was presented close to closing time, leaving little room for a careful comparison." },
  { stage: "Delivery", rating: "Poor", text: "The handover was brief and the missing feature was not identified on the delivery checklist. In my opinion, a structured walk-through would probably have exposed the mismatch before I drove away." },
  { stage: "Aftersales", rating: "Adequate", text: "The service desk logged the issue and returned the first call. Follow-up then moved between departments, and I did not receive a clear written position within the stated timeframe." },
  { stage: "Complaint handling", rating: "Poor", text: "Northvale Motors acknowledged the complaint but has not provided a proposed resolution. Requests for the dealership’s account of the pre-sale conversation remain unanswered as at the latest update." },
];

function ReviewsPage() {
  return (
    <main id="main-content">
      <article className="mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6 sm:pt-24">
        <header className="max-w-reading">
          <p className="eyebrow">Independent assessment</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">Vehicle reviews, kept separate from the dealership</h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">The cars are assessed on their own merits. The company’s conduct is evaluated separately, stage by stage.</p>
        </header>

        <section aria-labelledby="vehicle-reviews" className="mt-20 border-t-2 border-primary pt-10">
          <div className="max-w-reading">
            <p className="eyebrow">Section A</p>
            <h2 id="vehicle-reviews" className="mt-3 text-3xl font-bold text-foreground">Vehicle reviews</h2>
            <p className="mt-4 text-muted-foreground">Independent Australian-market observations by the author, based on test drives and everyday use.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {vehicles.map((vehicle, index) => (
              <article key={vehicle.name} className="editorial-card">
                <p className="section-marker">Vehicle {String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm font-semibold text-primary">{vehicle.year} · {vehicle.variant}</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">{vehicle.name}</h3>
                <p className="mt-4 font-semibold leading-7 text-foreground">{vehicle.verdict}</p>
                <p className="mt-4 text-muted-foreground">{vehicle.body}</p>
                <details className="editorial-details mt-5">
                  <summary>Practical considerations</summary>
                  <p>{vehicle.detail}</p>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="dealership-assessment" className="mt-24 border-t-2 border-foreground pt-10">
          <div className="max-w-reading">
            <p className="eyebrow">Section B</p>
            <h2 id="dealership-assessment" className="mt-3 text-3xl font-bold text-foreground">Dealership assessment: Northvale Motors</h2>
            <p className="mt-4 text-muted-foreground">This assessment concerns the author’s transaction and complaint. It is not a rating of the vehicles reviewed above.</p>
            <p className="mt-5"><Link to="/" className="editorial-link">Read the full chronological account of what occurred</Link>.</p>
          </div>
          <div className="mt-10 grid gap-4">
            {assessment.map((item, index) => (
              <article key={item.stage} className="assessment-block grid gap-3 md:grid-cols-[3rem_12rem_8rem_1fr] md:gap-6">
                <p className="section-marker">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-lg font-bold text-foreground">{item.stage}</h3>
                <p className="font-semibold text-primary">{item.rating}</p>
                <p className="max-w-reading text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </article>

      <nav aria-label="Continue reading" className="onward-links">
        <p className="eyebrow">Continue reading</p>
        <div className="mt-5 flex flex-col items-start gap-4">
          <Link to="/" className="editorial-link">Follow the purchase from order to unresolved complaint</Link>
          <Link to="/guides" className="editorial-link">Use the pre-deposit and delivery checklists</Link>
        </div>
      </nav>
    </main>
  );
}