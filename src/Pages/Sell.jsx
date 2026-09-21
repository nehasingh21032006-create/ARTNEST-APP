import React from "react";
import { FileEdit, ShieldCheck, UploadCloud, Wallet, Mail } from "lucide-react";
import PageHero from "../Components/PageHero";

const STEPS = [
  { icon: FileEdit, title: "Apply", body: "Send a few portfolio images and a short bio — no formal gallery representation required." },
  { icon: ShieldCheck, title: "Get verified", body: "Our curatorial team reviews every application, usually within 5–7 business days." },
  { icon: UploadCloud, title: "List your work", body: "Add artworks from your Artist Dashboard — set your own prices, stock and edition sizes." },
  { icon: Wallet, title: "Get paid", body: "Payouts are released once an order's return window closes, tracked in your Earnings tab." },
];

const BENEFITS = [
  { title: "You set the price", body: "No forced discounts or bidding wars — your pricing, your terms." },
  { title: "Transparent commission", body: "One clear marketplace fee shown before you ever list a piece." },
  { title: "Direct buyer messages", body: "Talk to collectors and commission clients directly, no middleman." },
  { title: "Insured shipping handled", body: "We coordinate packaging and insured delivery for every sale." },
];

export default function Sell() {
  return (
    <div className="bg-[var(--color-canvas)] font-['Plus_Jakarta_Sans']">
      <PageHero
        eyebrow="For artists"
        title="Sell your original work to collectors who care"
        subtitle="Join a curated marketplace of independent painters, sculptors and makers — apply in minutes, keep full control of your pricing."
      >
        <a
          href="mailto:artists@athenura.com?subject=Artist%20application"
          className="mt-7 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[var(--color-primary)] text-white text-[13.5px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          <Mail size={16} strokeWidth={1.8} />
          Apply to sell
        </a>
      </PageHero>

      <section className="max-w-[1000px] mx-auto px-6 py-14">
        <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)] text-center">
          How it works
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
                <div className="flex items-center gap-2">
                  <span className="w-9 h-9 rounded-full bg-[var(--color-section)] flex items-center justify-center text-[var(--color-primary)]">
                    <Icon size={16} strokeWidth={1.8} />
                  </span>
                  <span className="font-['Playfair_Display'] text-[15px] text-[var(--color-secondary)]">{`0${i + 1}`}</span>
                </div>
                <h3 className="mt-3 text-[14.5px] font-medium text-[var(--color-neutral)]">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-secondary)]">{s.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[var(--color-outline)] bg-[var(--color-section)]">
        <div className="max-w-[1000px] mx-auto px-6 py-14">
          <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)] text-center">
            Why artists choose Athenura
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
                <h3 className="text-[14.5px] font-medium text-[var(--color-neutral)]">{b.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-secondary)]">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[640px] mx-auto px-6 py-14 text-center">
        <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)]">
          Ready to share your work?
        </h2>
        <p className="mt-2 text-[13.5px] text-[var(--color-secondary)]">
          Email us a few images and a short bio — most applicants hear back within a week.
        </p>
        <a
          href="mailto:artists@athenura.com?subject=Artist%20application"
          className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[var(--color-primary)] text-white text-[13.5px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          <Mail size={16} strokeWidth={1.8} />
          Apply to sell
        </a>
      </section>
    </div>
  );
}
