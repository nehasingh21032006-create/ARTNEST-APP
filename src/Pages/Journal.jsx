import React, { useMemo, useState } from "react";
import { Clock } from "lucide-react";
import PageHero from "../Components/PageHero";

const CATEGORIES = ["All", "Artist spotlight", "Collecting", "Studio visits", "Marketplace news"];

const ARTICLES = [
  {
    title: "How Kabir Verma casts bronze in a Udaipur courtyard studio",
    category: "Studio visits",
    excerpt: "A look inside the small foundry where every Bronze Whisper piece begins as raw clay and ends in patinated bronze.",
    date: "12 Sep 2026",
    readTime: "6 min read",
    color: "#9F5639",
    featured: true,
  },
  {
    title: "Five questions to ask before buying your first original painting",
    category: "Collecting",
    excerpt: "Provenance, medium, condition, and pricing — a short guide for first-time collectors browsing original art.",
    date: "08 Sep 2026",
    readTime: "5 min read",
    color: "#C98A68",
  },
  {
    title: "Riya Sharma on building a digital art practice from Bengaluru",
    category: "Artist spotlight",
    excerpt: "From editorial illustration to generative pieces — how one artist found her audience on Athenura.",
    date: "02 Sep 2026",
    readTime: "7 min read",
    color: "#A28F7D",
  },
  {
    title: "Inside Athenura's artist verification process",
    category: "Marketplace news",
    excerpt: "What our curatorial team actually checks before an artist's first listing goes live.",
    date: "27 Aug 2026",
    readTime: "4 min read",
    color: "#736153",
  },
  {
    title: "Caring for watercolour and works on paper after delivery",
    category: "Collecting",
    excerpt: "Light, humidity and framing — simple steps to keep a paper piece looking its best for decades.",
    date: "19 Aug 2026",
    readTime: "5 min read",
    color: "#D9C7B2",
  },
  {
    title: "A weekend with Meera Iyer, between darkroom and gallery wall",
    category: "Artist spotlight",
    excerpt: "How an archival photography practice found a home among Athenura's painters and sculptors.",
    date: "11 Aug 2026",
    readTime: "6 min read",
    color: "#9F5639",
  },
];

export default function Journal() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const rest = ARTICLES.filter((a) => !a.featured);
    return category === "All" ? rest : rest.filter((a) => a.category === category);
  }, [category]);

  const featured = ARTICLES.find((a) => a.featured);

  return (
    <div className="bg-[var(--color-canvas)] font-['Plus_Jakarta_Sans']">
      <PageHero
        eyebrow="The Journal"
        title="Stories from the studio floor"
        subtitle="Artist spotlights, collecting guides and news from the Athenura marketplace."
      />

      <div className="max-w-[1000px] mx-auto px-6 pt-8 flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`text-[12.5px] font-medium px-4 py-2 rounded-full border transition-colors ${
              category === c
                ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                : "border-[var(--color-outline)] text-[var(--color-secondary)] hover:text-[var(--color-neutral)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {featured && (
        <div className="max-w-[1000px] mx-auto px-6 pt-10">
          <a href="#" className="group grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-6 bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-hidden">
            <div className="h-56 md:h-full" style={{ backgroundColor: featured.color }} />
            <div className="p-6 flex flex-col justify-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--color-primary)]">
                {featured.category}
              </span>
              <h2 className="mt-2 font-['Playfair_Display'] text-[22px] leading-snug text-[var(--color-neutral)] group-hover:text-[var(--color-primary)] transition-colors">
                {featured.title}
              </h2>
              <p className="mt-2 text-[13.5px] text-[var(--color-secondary)] leading-relaxed">{featured.excerpt}</p>
              <div className="mt-4 flex items-center gap-3 text-[12px] text-[var(--color-secondary)]">
                <span>{featured.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
              </div>
            </div>
          </a>
        </div>
      )}

      <div className="max-w-[1000px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((a) => (
          <a key={a.title} href="#" className="group bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-hidden">
            <div className="h-36" style={{ backgroundColor: a.color }} />
            <div className="p-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--color-primary)]">
                {a.category}
              </span>
              <h3 className="mt-1.5 text-[15px] font-medium leading-snug text-[var(--color-neutral)] group-hover:text-[var(--color-primary)] transition-colors">
                {a.title}
              </h3>
              <p className="mt-2 text-[13px] text-[var(--color-secondary)] leading-relaxed">{a.excerpt}</p>
              <div className="mt-3 flex items-center gap-3 text-[11.5px] text-[var(--color-secondary)]">
                <span>{a.date}</span>
                <span className="flex items-center gap-1"><Clock size={11} /> {a.readTime}</span>
              </div>
            </div>
          </a>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-[13.5px] text-[var(--color-secondary)] py-10">
            No stories in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
