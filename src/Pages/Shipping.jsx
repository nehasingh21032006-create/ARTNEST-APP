import React, { useState } from "react";
import { motion } from "framer-motion";
import { Package, Globe2, RotateCcw, ChevronDown } from "lucide-react";
import PageHero from "../Components/PageHero";

const TIMELINES = [
  { region: "Metro cities (India)", dispatch: "1–3 business days", delivery: "3–5 business days" },
  { region: "Rest of India", dispatch: "1–3 business days", delivery: "5–8 business days" },
  { region: "International", dispatch: "2–4 business days", delivery: "10–18 business days" },
];

const RETURN_FAQS = [
  {
    q: "What's the return window?",
    a: "You can request a return within 7 days of delivery if a piece arrives damaged, or significantly different from its listing photos and description.",
  },
  {
    q: "Are custom commissions returnable?",
    a: "Custom commissions are final sale once you accept the finished piece, since they're made specifically to your brief. We recommend reviewing progress photos carefully before sign-off.",
  },
  {
    q: "Who pays for return shipping?",
    a: "If the return is due to damage or a listing error on our part, Athenura covers return shipping. For change-of-mind returns (where offered on a listing), return shipping is the buyer's responsibility.",
  },
  {
    q: "How long do refunds take?",
    a: "Once a return is received and inspected, refunds are issued to your original payment method within 5–7 business days.",
  },
];

function ReturnItem({ item, open, onToggle }) {
  return (
    <div className="border border-[var(--color-outline)] rounded-xl bg-[var(--color-elevated)] overflow-hidden">
      <button type="button" onClick={onToggle} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
        <span className="text-[14px] font-medium text-[var(--color-neutral)]">{item.q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[var(--color-secondary)] shrink-0">
          <ChevronDown size={17} strokeWidth={1.8} />
        </motion.span>
      </button>
      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.22 }} className="px-5 overflow-hidden">
          <p className="pb-4 text-[13.5px] leading-relaxed text-[var(--color-secondary)]">{item.a}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function Shipping() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="bg-[var(--color-canvas)] font-['Plus_Jakarta_Sans']">
      <PageHero
        eyebrow="Shipping & returns"
        title="Every piece, packed and insured with care"
        subtitle="From studio to doorstep — how we ship original art, sculpture and prints, and what to do if something isn't right."
      />

      <section className="max-w-[1000px] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
          <span className="w-9 h-9 rounded-full bg-[var(--color-section)] flex items-center justify-center text-[var(--color-primary)]">
            <Package size={16} strokeWidth={1.8} />
          </span>
          <h3 className="mt-3 text-[14.5px] font-medium text-[var(--color-neutral)]">Archival packaging</h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-secondary)]">
            Paintings ship in rigid, corner-protected crates; sculptures and ceramics are individually
            cushioned by the artist's own studio.
          </p>
        </div>
        <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
          <span className="w-9 h-9 rounded-full bg-[var(--color-section)] flex items-center justify-center text-[var(--color-primary)]">
            <Globe2 size={16} strokeWidth={1.8} />
          </span>
          <h3 className="mt-3 text-[14.5px] font-medium text-[var(--color-neutral)]">Insured, worldwide</h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-secondary)]">
            Every shipment is insured for its full value in transit, domestic or international.
          </p>
        </div>
        <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
          <span className="w-9 h-9 rounded-full bg-[var(--color-section)] flex items-center justify-center text-[var(--color-primary)]">
            <RotateCcw size={16} strokeWidth={1.8} />
          </span>
          <h3 className="mt-3 text-[14.5px] font-medium text-[var(--color-neutral)]">7-day returns</h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-secondary)]">
            Report damage or a listing mismatch within 7 days of delivery for a replacement, repair or refund.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--color-outline)] bg-[var(--color-section)]">
        <div className="max-w-[820px] mx-auto px-6 py-14">
          <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)] text-center mb-8">
            Delivery timelines
          </h2>
          <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-secondary)]">
                  <th className="px-5 py-3 font-medium">Region</th>
                  <th className="px-5 py-3 font-medium">Dispatch</th>
                  <th className="px-5 py-3 font-medium">Estimated delivery</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINES.map((t) => (
                  <tr key={t.region} className="border-t border-[var(--color-outline)]/70">
                    <td className="px-5 py-3 text-[13.5px] font-medium text-[var(--color-neutral)]">{t.region}</td>
                    <td className="px-5 py-3 text-[13.5px] text-[var(--color-secondary)]">{t.dispatch}</td>
                    <td className="px-5 py-3 text-[13.5px] text-[var(--color-secondary)]">{t.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[12.5px] text-[var(--color-secondary)]">
            International orders may be subject to customs duties or import taxes, payable by the buyer on arrival.
          </p>
        </div>
      </section>

      <section className="max-w-[820px] mx-auto px-6 py-14">
        <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)] text-center mb-8">
          Returns & refunds
        </h2>
        <div className="space-y-3">
          {RETURN_FAQS.map((item, i) => (
            <ReturnItem key={item.q} item={item} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
          ))}
        </div>
      </section>
    </div>
  );
}
