import React from "react";
import { Check, X } from "lucide-react";

export default function PendingApprovals({ items }) {
  return (
    <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)]">
          Approval queue
        </h2>
        <span className="text-[11px] font-semibold bg-[var(--color-primary)] text-white rounded-full px-2.5 py-1">
          {items.length} waiting
        </span>
      </div>

      <ul>
        {items.map((item, idx) => (
          <li
            key={item.id}
            className={`flex items-center gap-3 px-5 py-3.5 ${
              idx !== 0 ? "border-t border-[var(--color-outline)]/70" : ""
            }`}
          >
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-[var(--color-neutral)] truncate">
                {item.title}
              </p>
              <p className="text-[12px] text-[var(--color-secondary)]">
                {item.artist} · {item.medium}
              </p>
            </div>
            <span className="text-[11px] text-[var(--color-secondary)] whitespace-nowrap hidden sm:inline">
              {item.submitted}
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                aria-label={`Approve ${item.title}`}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#4C6B3F] bg-[#E7EEDD] hover:brightness-95 transition"
              >
                <Check size={15} strokeWidth={2.2} />
              </button>
              <button
                type="button"
                aria-label={`Reject ${item.title}`}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9B3B2E] bg-[#F6DFDA] hover:brightness-95 transition"
              >
                <X size={15} strokeWidth={2.2} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
