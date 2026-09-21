import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, HandHeart, ShieldCheck, Globe2 } from "lucide-react";
import PageHero from "../Components/PageHero";

const STATS = [
  { value: "350+", label: "Independent artists" },
  { value: "2,800+", label: "Original artworks sold" },
  { value: "40+", label: "Countries shipped to" },
  { value: "4.8/5", label: "Average buyer rating" },
];

const VALUES = [
  {
    icon: HandHeart,
    title: "Fair to artists",
    body: "Artists set their own prices and keep the majority of every sale. No race to the bottom, no anonymous bulk listings.",
  },
  {
    icon: ShieldCheck,
    title: "Verified, every time",
    body: "Every artist is reviewed before they can list, and every original piece ships with a signed certificate of authenticity.",
  },
  {
    icon: Sparkles,
    title: "Curated, not crowded",
    body: "Our team hand-reviews new listings and collections, so browsing Athenura feels like a gallery — not an endless marketplace feed.",
  },
  {
    icon: Globe2,
    title: "Made to travel",
    body: "From archival packaging to insured shipping, every piece is prepared to arrive exactly as the artist intended, anywhere in the world.",
  },
];

export default function About() {
  return (
    <div className="bg-[var(--color-canvas)] font-['Plus_Jakarta_Sans']">
      <PageHero
        eyebrow="Our story"
        title="A gallery built for independent artists"
        subtitle="Athenura connects original painters, sculptors and makers with collectors who care where their art comes from."
      />

      <section className="max-w-[820px] mx-auto px-6 py-14">
        <p className="text-[14.5px] leading-relaxed text-[var(--color-neutral)]">
          Athenura started with a simple frustration: talented independent artists were spending more
          time marketing themselves on social media than making work, while buyers had no easy way to
          find original, verified pieces they could trust. We built a marketplace that puts the artist's
          craft first — careful curation, honest pricing, and a buying experience that feels like walking
          through a small, considered gallery rather than scrolling an endless feed.
        </p>
        <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--color-neutral)]">
          Today, Athenura is home to painters, sculptors, ceramicists and digital artists from across the
          world, each reviewed and verified before their first piece goes live. Every sale supports the
          artist directly, and every piece — from a small print to a commissioned portrait — ships with
          the same care we'd want for a piece hanging in our own homes.
        </p>
      </section>

      <section className="border-y border-[var(--color-outline)] bg-[var(--color-section)]">
        <div className="max-w-[900px] mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-['Playfair_Display'] text-[28px] sm:text-[32px] text-[var(--color-primary)]">
                {s.value}
              </p>
              <p className="mt-1 text-[12.5px] text-[var(--color-secondary)]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto px-6 py-14">
        <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)] text-center">
          What we believe
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-6">
                <span className="w-10 h-10 rounded-full bg-[var(--color-section)] flex items-center justify-center text-[var(--color-primary)]">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-[15px] font-medium text-[var(--color-neutral)]">{v.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--color-secondary)]">{v.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-[var(--color-outline)] bg-[var(--color-section)]">
        <div className="max-w-[640px] mx-auto px-6 py-14 text-center">
          <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)]">
            Explore the collection, or join as an artist
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/discover"
              className="h-11 px-6 rounded-full bg-[var(--color-primary)] text-white text-[13.5px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors inline-flex items-center"
            >
              Discover artworks
            </Link>
            <Link
              to="/sell"
              className="h-11 px-6 rounded-full border border-[var(--color-outline)] text-[13.5px] font-medium text-[var(--color-neutral)] hover:bg-[var(--color-elevated)] transition-colors inline-flex items-center"
            >
              Sell your work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
