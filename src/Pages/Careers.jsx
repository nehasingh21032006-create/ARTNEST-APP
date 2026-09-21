import React from "react";
import { MapPin, Clock3, Mail } from "lucide-react";
import PageHero from "../Components/PageHero";

const VALUES = [
  { title: "Craft over speed", body: "We'd rather ship something considered than something merely fast." },
  { title: "Artist-first", body: "Every decision gets weighed against what's fair to the people making the work." },
  { title: "Small, senior team", body: "We stay lean — everyone owns real problems from day one." },
];

const OPENINGS = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "Bengaluru / Remote", type: "Full-time" },
  { title: "Artist Success Manager", dept: "Operations", location: "Remote (India)", type: "Full-time" },
  { title: "Curatorial Associate", dept: "Curation", location: "Bengaluru", type: "Full-time" },
  { title: "Logistics & Packaging Lead", dept: "Operations", location: "Mumbai", type: "Full-time" },
  { title: "Content Writer — The Journal", dept: "Marketing", location: "Remote", type: "Part-time" },
];

export default function Careers() {
  return (
    <div className="bg-[var(--color-canvas)] font-['Plus_Jakarta_Sans']">
      <PageHero
        eyebrow="Careers"
        title="Help build the home for independent art"
        subtitle="We're a small team working across curation, engineering and logistics — all in service of artists and the collectors who find them."
      />

      <section className="max-w-[900px] mx-auto px-6 py-14">
        <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)] text-center">
          How we work
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
              <h3 className="text-[14.5px] font-medium text-[var(--color-neutral)]">{v.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-secondary)]">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--color-outline)] bg-[var(--color-section)]">
        <div className="max-w-[820px] mx-auto px-6 py-14">
          <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)] text-center mb-8">
            Open positions
          </h2>
          <div className="space-y-3">
            {OPENINGS.map((o) => (
              <div
                key={o.title}
                className="flex flex-wrap items-center justify-between gap-3 bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl px-5 py-4"
              >
                <div>
                  <p className="text-[14px] font-medium text-[var(--color-neutral)]">{o.title}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-[12px] text-[var(--color-secondary)]">
                    <span>{o.dept}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {o.location}</span>
                    <span className="flex items-center gap-1"><Clock3 size={12} /> {o.type}</span>
                  </div>
                </div>
                <a
                  href={`mailto:careers@athenura.com?subject=Application%3A%20${encodeURIComponent(o.title)}`}
                  className="h-9 px-4 rounded-full border border-[var(--color-outline)] text-[12.5px] font-medium text-[var(--color-neutral)] hover:bg-[var(--color-section)] transition-colors"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[640px] mx-auto px-6 py-14 text-center">
        <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)]">
          Don't see the right role?
        </h2>
        <p className="mt-2 text-[13.5px] text-[var(--color-secondary)]">
          We're always glad to hear from people who care about art and craft. Send us a note anyway.
        </p>
        <a
          href="mailto:careers@athenura.com"
          className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[var(--color-primary)] text-white text-[13.5px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          <Mail size={16} strokeWidth={1.8} />
          Get in touch
        </a>
      </section>
    </div>
  );
}
