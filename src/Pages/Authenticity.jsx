import React from "react";
import { ShieldCheck, BadgeCheck, FileCheck2, Fingerprint } from "lucide-react";
import PageHero from "../Components/PageHero";

const PROMISES = [
  {
    icon: BadgeCheck,
    title: "Verified artists only",
    body: "Every artist is reviewed by our curatorial team — identity, studio and portfolio — before their first listing goes live.",
  },
  {
    icon: FileCheck2,
    title: "Signed certificate of authenticity",
    body: "Every original piece ships with a certificate signed by the artist, confirming the work, medium, and edition where relevant.",
  },
  {
    icon: Fingerprint,
    title: "One-of-a-kind, tracked",
    body: "Original paintings and sculptures are marked as unique in our catalogue; limited editions state their run size and number.",
  },
  {
    icon: ShieldCheck,
    title: "Backed by our guarantee",
    body: "If a piece ever proves inconsistent with its listing, we'll investigate and make it right — replacement, repair or full refund.",
  },
];

const STEPS = [
  { title: "Artist verification", body: "New artists submit identity documents and a portfolio; our team confirms the work is genuinely theirs before approval." },
  { title: "Listing review", body: "Each new artwork listing is checked for accurate medium, dimensions and condition before it appears in Discover." },
  { title: "Certificate issued", body: "On sale, the artist signs a certificate of authenticity, packaged with the piece before it ships." },
  { title: "Post-delivery support", body: "If anything about a piece seems inconsistent with its listing, our team reviews the order and makes it right." },
];

export default function Authenticity() {
  return (
    <div className="bg-[var(--color-canvas)] font-['Plus_Jakarta_Sans']">
      <PageHero
        eyebrow="Authenticity guarantee"
        title="Every piece, verified before it reaches you"
        subtitle="From artist verification to a signed certificate in every package — how we make sure what you buy is exactly what it claims to be."
      />

      <section className="max-w-[1000px] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {PROMISES.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
              <span className="w-9 h-9 rounded-full bg-[var(--color-section)] flex items-center justify-center text-[var(--color-primary)]">
                <Icon size={16} strokeWidth={1.8} />
              </span>
              <h3 className="mt-3 text-[14.5px] font-medium text-[var(--color-neutral)]">{p.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-secondary)]">{p.body}</p>
            </div>
          );
        })}
      </section>

      <section className="border-y border-[var(--color-outline)] bg-[var(--color-section)]">
        <div className="max-w-[820px] mx-auto px-6 py-14">
          <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)] text-center mb-8">
            How verification works
          </h2>
          <ol className="space-y-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4 bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
                <span className="font-['Playfair_Display'] text-[20px] text-[var(--color-primary)] shrink-0">{`0${i + 1}`}</span>
                <div>
                  <p className="text-[14.5px] font-medium text-[var(--color-neutral)]">{s.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-secondary)]">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-[640px] mx-auto px-6 py-14 text-center">
        <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)]">
          Have a question about a specific piece?
        </h2>
        <p className="mt-2 text-[13.5px] text-[var(--color-secondary)]">
          Reach out and our team will walk you through the certificate and verification for that artwork.
        </p>
        <a
          href="mailto:hello@athenura.com"
          className="mt-6 inline-flex items-center h-11 px-6 rounded-full bg-[var(--color-primary)] text-white text-[13.5px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          Contact us
        </a>
      </section>
    </div>
  );
}
