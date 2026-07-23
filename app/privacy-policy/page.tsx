import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FM Designs collects, uses, and protects your information.",
};

const sections = [
  {
    title: "1. Information we collect",
    body: "When you contact us through our website, we collect the details you provide directly — your name, email address, phone number, and any project information you share. We also collect basic usage data (such as pages visited and browser type) through standard analytics tools.",
  },
  {
    title: "2. How we use your information",
    body: "We use the information you provide to respond to enquiries, prepare quotes, deliver projects, and communicate about ongoing work. We do not sell or rent your personal information to third parties.",
  },
  {
    title: "3. Cookies",
    body: "Our website may use cookies to remember your theme preference and to understand how visitors use the site. You can disable cookies in your browser settings at any time.",
  },
  {
    title: "4. Data storage and security",
    body: "Project and contact information is stored securely and only accessed by team members who need it to deliver your project. We take reasonable technical measures to protect your data against unauthorised access.",
  },
  {
    title: "5. Third-party services",
    body: "We may use third-party tools for hosting, analytics, or communication (such as email or WhatsApp). These providers have their own privacy policies governing how they handle data.",
  },
  {
    title: "6. Your rights",
    body: "You may request access to, correction of, or deletion of the personal information we hold about you at any time by contacting us using the details below.",
  },
  {
    title: "7. Changes to this policy",
    body: "We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48">
      <div className="container-px mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[var(--foreground)]/55">Last updated: July 2026</p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/70">{s.body}</p>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-bold">8. Contact us</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/70">
              If you have questions about this privacy policy, contact us at{" "}
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
