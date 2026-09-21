import React from "react";
import { Star } from "lucide-react";
import { MY_REVIEWS } from "./artistData";

export default function Reviews() {
  const avg = (MY_REVIEWS.reduce((s, r) => s + r.rating, 0) / MY_REVIEWS.length).toFixed(1);

  return (
    <div className="space-y-4">
      <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl px-5 py-4 flex items-center gap-3">
        <Star size={18} className="fill-[#9F5639] text-[#9F5639]" />
        <div>
          <p className="font-['Playfair_Display'] text-[22px] text-[var(--color-neutral)] leading-none">{avg}</p>
          <p className="text-[12px] text-[var(--color-secondary)]">average across {MY_REVIEWS.length} reviews</p>
        </div>
      </div>

      {MY_REVIEWS.map((r) => (
        <div key={r.id} className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-[13px] font-medium text-[var(--color-neutral)]">{r.customer}</p>
              <p className="text-[12px] text-[var(--color-secondary)]">on {r.piece}</p>
            </div>
            <span className="flex items-center gap-1 text-[13px] text-[var(--color-neutral)]">
              <Star size={13} className="fill-[#9F5639] text-[#9F5639]" /> {r.rating}
            </span>
          </div>
          <p className="mt-3 text-[13px] text-[var(--color-neutral)] leading-relaxed">{r.review}</p>
          <p className="mt-3 text-[12px] text-[var(--color-secondary)] border-t border-[var(--color-outline)] pt-3">{r.date}</p>
        </div>
      ))}
    </div>
  );
}
