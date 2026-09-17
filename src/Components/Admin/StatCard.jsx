import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({ label, value, delta, trend, note }) {
  const isUp = trend === "up";
  return (
    <div className="relative bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl px-5 pt-5 pb-4 overflow-hidden">
      <span className="absolute top-0 left-0 h-[3px] w-full bg-[var(--color-primary)]/70" />
      <p className="text-[13px] text-[var(--color-secondary)]">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-['Playfair_Display'] text-[30px] text-[var(--color-neutral)] leading-none">
          {value}
        </span>
        <span
          className={`inline-flex items-center gap-0.5 text-[12px] font-semibold ${
            isUp ? "text-[#4C6B3F]" : "text-[#9B3B2E]"
          }`}
        >
          {isUp ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
          {delta}
        </span>
      </div>
      <p className="mt-1.5 text-[12px] text-[var(--color-secondary)]">{note}</p>
    </div>
  );
}
