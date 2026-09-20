import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { formatINR } from "../../Pages/Admin Dashboard/format";

export default function StatCard({ label, value, isCurrency = true, delta, trend, note, icon: Icon }) {
  const isUp = trend === "up";
  const display = isCurrency ? formatINR(value) : value.toLocaleString("en-IN");

  return (
    <div className="relative bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl px-5 pt-5 pb-4 overflow-hidden">
      <span className="absolute top-0 left-0 h-[3px] w-full bg-[var(--color-primary)]/70" />
      <div className="flex items-start justify-between">
        <p className="text-[13px] text-[var(--color-secondary)]">{label}</p>
        {Icon ? (
          <span className="w-8 h-8 rounded-full bg-[var(--color-section)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
            <Icon size={15} strokeWidth={1.8} />
          </span>
        ) : null}
      </div>
      <div className="mt-2">
        <span className="font-['Playfair_Display'] text-[26px] text-[var(--color-neutral)] leading-none break-all">
          {display}
        </span>
      </div>
      <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
        <span
          className={`inline-flex items-center gap-0.5 text-[12px] font-semibold ${
            isUp ? "text-[#4C6B3F]" : "text-[#9B3B2E]"
          }`}
        >
          {isUp ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
          {delta}
        </span>
        {note ? <span className="text-[12px] text-[var(--color-secondary)]">{note}</span> : null}
      </div>
    </div>
  );
}
