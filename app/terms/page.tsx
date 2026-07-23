import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing FM Designs website projects and services.",
};

const sections = [
  {
    title: "1. Services",
    body: "FM Designs provides website design, development, and related digital services as agreed in writing (via quote, proposal, or contract) with each client before work begins.",
  },
  {
    title: "2. Project scope",
    body: "Each project is scoped individually. Any work requested outside the agreed scope — additional pages, features, or revisions beyond what was quoted — may be billed separately and agreed to before starting.",
  },
  {
    title: "3. Payment terms",
    body: "Projects typically require a deposit before work begins, with the remaining balance due on completion or per agreed milestones. Late payments may delay delivery or ongoing support.",
  },
  {
    title: "4. Revisions",
    body: "Each pricing tier includes a set number of revision rounds. Additional revisions beyond this can be arranged at an agreed rate.",
  },
  {
    title: "5. Timelines",
    body: "Delivery timelines are estimates based on the agreed scope and timely feedback from the client. Delays in providing content, feedback, or approvals may affect the final delivery date.",
  },
  {
    title: "6. Ownership",
    body: "Once a project is paid in full, the client owns the final website files and content. Any third-party licenses (fonts, plugins, stock assets) remain subject to their own terms.",
  },
  {
    title: "7. Maintenance and support",
    body: "Ongoing maintenance, hosting assistance, and support are offered separately from the initial build and are billed according to the agreed maintenance plan.",
  },
  {
    title: "8. Limitation of liability",
    body: "FM Designs will make reasonable efforts to deliver a functional, secure website, but is not liable for losses arising from third-party outages, misuse of the website, or issues outside our reasonable control.",
  },
  {
    title: "9. Changes to these terms",
    body: "These terms may be updated from time to time. The latest version will always be available on this page.",
  },
];

export default function TermsPage() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48">
      <div className="container-px mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-[var(--foreground)]/55">Last updated: July 2026</p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/70">{s.body}</p>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-bold">10. Contact us</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/70">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-accent)]">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
