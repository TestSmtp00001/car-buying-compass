import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "Australian Car Buying Guide | A Buyer’s Account" },
      { name: "description", content: "Answer-first guidance on deposits, contracts, delivery checks, consumer rights, complaints and record-keeping when buying a car in Australia." },
      { property: "og:title", content: "Australian Car Buying Guide | A Buyer’s Account" },
      { property: "og:description", content: "Answer-first guidance on deposits, contracts, delivery checks, consumer rights, complaints and record-keeping when buying a car in Australia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/guides" }],
  }),
  component: GuidesPage,
});

const faqs = [
  {
    id: "before-deposit",
    question: "What should I check before paying a car deposit?",
    answer: "Before paying a deposit, confirm the exact vehicle, drive-away price, refund conditions and delivery estimate in writing.",
    detail: "Record the model year, variant, engine or powertrain, colour, options and whether the car is new, demonstrator or used. Ask whether the deposit is refundable, what event allows either party to cancel, and whether the quoted delivery date is an estimate or a commitment. Do not rely on a brochure or spoken assurance where a feature matters to your decision.",
    note: "In the author’s account, a discussed feature did not appear on the written order.",
    storyId: "the-order",
  },
  {
    id: "contract-wording",
    question: "What should a car purchase contract say?",
    answer: "The contract should identify the precise car, total price, included features, agreed conditions and any promises that affected your decision.",
    detail: "Read every field before signing and strike out blank spaces where appropriate. If finance approval, an independent inspection, a trade-in value or a delivery deadline matters, ask for it to be written as a condition. Keep the version you signed and compare it with the dealer’s final copy before leaving.",
    note: "The contract in the author’s account named the variant but not the disputed feature.",
    storyId: "paperwork",
  },
  {
    id: "delivery-inspection",
    question: "What should I inspect when collecting a new car?",
    answer: "At delivery, inspect the car in good light and verify its identity, condition, specification, accessories and documents before accepting it.",
    detail: "Check the VIN against the contract and registration paperwork. Test the keys, lights, cameras, infotainment, charging cable where relevant, spare wheel or repair kit, and every option you paid for. Photograph the vehicle and odometer. If something is wrong, write it on the handover record before driving away and ask what will happen next.",
    note: "The author discovered the specification issue only after the handover.",
    storyId: "delivery",
  },
  {
    id: "not-as-described",
    question: "What are my rights if a car is not as described in Australia?",
    answer: "A vehicle sold by a dealer must match its description and comply with the consumer guarantees that apply under Australian Consumer Law.",
    detail: "The available remedy depends on the facts, including whether the failure is major and whether it can be fixed within a reasonable time. Consumer guarantees operate separately from a manufacturer warranty. For advice about your circumstances, contact your state or territory consumer agency or obtain independent legal advice.",
    note: "The author’s unresolved question is whether the delivered specification matched what was represented and agreed.",
    storyId: "first-contact",
  },
  {
    id: "escalate-complaint",
    question: "How do I escalate a complaint about a car dealer?",
    answer: "Escalate in writing, state the outcome you seek, set a reasonable response date and then contact the relevant consumer agency if the matter remains unresolved.",
    detail: "Begin with the dealership’s sales or service contact, then ask for the dealer principal or complaints manager. Keep the message concise: chronology, evidence, problem, requested remedy and response date. Your state or territory fair trading or consumer affairs body can explain the next step; tribunal or court options vary by location and claim.",
    note: "The author used a dated written summary after telephone follow-up produced no clear position.",
    storyId: "complaint",
  },
  {
    id: "document-records",
    question: "What records should I keep when buying a car?",
    answer: "Keep every version of the advertisement, quote, contract, invoice, payment record and message, plus dated notes of conversations.",
    detail: "Save screenshots as files rather than relying on a listing remaining online. After an important call, email a short summary beginning with ‘My understanding of our conversation is…’ and invite corrections. Keep photographs from inspection and delivery, the VIN, odometer reading, names or job titles of contacts, and a simple chronology of promised and actual response dates.",
    note: "Contemporaneous emails allowed the author to separate written terms from remembered conversations.",
    storyId: "records",
  },
];

function GuidesPage() {
  return (
    <main id="main-content">
      <article className="mx-auto max-w-reading px-4 pb-8 pt-16 sm:px-6 sm:pt-24">
        <header>
          <p className="eyebrow">Australian car buying guide</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">Questions to answer before you sign or collect</h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">Direct answers first, followed by the detail worth checking before money or keys change hands.</p>
        </header>

        <div className="mt-16 grid gap-6">
          {faqs.map((faq, index) => (
            <section key={faq.id} id={faq.id} aria-labelledby={`${faq.id}-heading`} className="editorial-card scroll-mt-8">
              <p className="section-marker">Check {String(index + 1).padStart(2, "0")}</p>
              <h2 id={`${faq.id}-heading`} className="text-2xl font-bold leading-snug text-foreground">{faq.question}</h2>
              <p className="mt-4 font-semibold leading-8 text-foreground">{faq.answer}</p>
              <details className="editorial-details mt-5">
                <summary>More detail</summary>
                <p>{faq.detail}</p>
              </details>
              <p className="mt-5 border-l-2 border-primary pl-4 text-sm leading-6 text-muted-foreground">
                Why this matters — <Link to="/" hash={faq.storyId} className="editorial-link">{faq.note}</Link>
              </p>
            </section>
          ))}
        </div>
      </article>

      <nav aria-label="Continue reading" className="onward-links">
        <p className="eyebrow">Continue reading</p>
        <div className="mt-5 flex flex-col items-start gap-4">
          <Link to="/" className="editorial-link">See how the checks apply in the author’s full account</Link>
          <Link to="/reviews" className="editorial-link">Compare the independent vehicle reviews</Link>
          <Link to="/reviews" hash="dealership-assessment" className="editorial-link">Read the stage-by-stage dealership assessment</Link>
        </div>
      </nav>
    </main>
  );
}