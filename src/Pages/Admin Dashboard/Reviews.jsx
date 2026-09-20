import React, { useState } from "react";
import { Star, Check, EyeOff, Trash2 } from "lucide-react";
import StatusBadge from "../../Components/Admin/StatusBadge";
import { REVIEWS } from "./adminData";

export default function Reviews() {
  const [reviews, setReviews] = useState(REVIEWS);

  function setStatus(id, status) {
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  }
  function remove(id) {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  }

  return (
    <div className="space-y-4">
      {reviews.map((r) => (
        <div key={r.id} className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-[13px] font-medium text-[var(--color-neutral)]">{r.customer}</p>
              <p className="text-[12px] text-[var(--color-secondary)]">
                on <span className="text-[var(--color-neutral)]">{r.piece}</span> by {r.artist}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[13px] text-[var(--color-neutral)]">
                <Star size={13} className="fill-[#9F5639] text-[#9F5639]" /> {r.rating}
              </span>
              <StatusBadge status={r.status} />
            </div>
          </div>
          <p className="mt-3 text-[13px] text-[var(--color-neutral)] leading-relaxed">{r.review}</p>
          <div className="mt-3 flex items-center justify-between border-t border-[var(--color-outline)] pt-3">
            <span className="text-[12px] text-[var(--color-secondary)]">{r.date}</span>
            <div className="flex items-center gap-1">
              <button title="Approve" onClick={() => setStatus(r.id, "Published")} className="w-7 h-7 rounded-full flex items-center justify-center text-[#4C6B3F] hover:bg-[#E7EEDD]">
                <Check size={14} />
              </button>
              <button title="Hide" onClick={() => setStatus(r.id, "Hidden")} className="w-7 h-7 rounded-full flex items-center justify-center text-[#8A5A22] hover:bg-[#F6E7D0]">
                <EyeOff size={14} />
              </button>
              <button title="Delete" onClick={() => remove(r.id)} className="w-7 h-7 rounded-full flex items-center justify-center text-[#9B3B2E] hover:bg-[#F6DFDA]">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        </div>
      ))}
      {reviews.length === 0 && (
        <p className="text-center text-[13px] text-[var(--color-secondary)] py-8">No reviews left.</p>
      )}
    </div>
  );
}
