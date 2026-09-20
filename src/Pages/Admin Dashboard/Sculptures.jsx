import React, { useMemo, useState } from "react";
import { Gem, Eye, Check, X } from "lucide-react";
import SearchBar from "../../Components/Admin/SearchBar";
import StatusBadge from "../../Components/Admin/StatusBadge";
import { SCULPTURES } from "./adminData";
import { formatINR } from "./format";

export default function Sculptures() {
  const [items, setItems] = useState(SCULPTURES);
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () => items.filter((s) => s.title.toLowerCase().includes(search.toLowerCase())),
    [items, search]
  );

  function setStatus(id, status) {
    setItems((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
  }

  return (
    <div className="space-y-5">
      <SearchBar value={search} onChange={setSearch} placeholder="Search sculptures…" className="max-w-[320px]" />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((s) => (
          <div key={s.id} className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-hidden">
            <div className="h-32 flex items-center justify-center" style={{ backgroundColor: s.color }}>
              <Gem size={24} className="text-white/70" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[13.5px] font-medium text-[var(--color-neutral)] truncate">{s.title}</p>
                  <p className="text-[12px] text-[var(--color-secondary)] truncate">{s.artist}</p>
                </div>
                <StatusBadge status={s.status} />
              </div>
              <div className="mt-2.5 text-[12px] text-[var(--color-secondary)]">
                {s.material} · {s.height}
              </div>
              <div className="mt-2 text-[14px] font-semibold text-[var(--color-neutral)]">{formatINR(s.price)}</div>
              <div className="mt-3 flex items-center gap-1 border-t border-[var(--color-outline)] pt-3">
                <button title="View" className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
                  <Eye size={13} />
                </button>
                <button title="Approve" onClick={() => setStatus(s.id, "Approved")} className="w-7 h-7 rounded-full flex items-center justify-center text-[#4C6B3F] hover:bg-[#E7EEDD]">
                  <Check size={13} />
                </button>
                <button title="Reject" onClick={() => setStatus(s.id, "In review")} className="w-7 h-7 rounded-full flex items-center justify-center text-[#9B3B2E] hover:bg-[#F6DFDA]">
                  <X size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
