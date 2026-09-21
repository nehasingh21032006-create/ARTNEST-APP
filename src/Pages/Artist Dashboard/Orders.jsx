import React, { useMemo, useState } from "react";
import SearchBar from "../../Components/Admin/SearchBar";
import FilterSelect from "../../Components/Admin/FilterSelect";
import StatusBadge from "../../Components/Admin/StatusBadge";
import { MY_ORDERS } from "./artistData";
import { formatINR } from "../Admin Dashboard/format";

const STATUSES = ["All statuses", "Completed", "Processing", "Pending", "Cancelled"];

export default function Orders() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(STATUSES[0]);

  const filtered = useMemo(() => {
    return MY_ORDERS.filter((o) => {
      if (status !== STATUSES[0] && o.status !== status) return false;
      const q = search.toLowerCase();
      return o.id.toLowerCase().includes(q) || o.piece.toLowerCase().includes(q) || o.buyer.toLowerCase().includes(q);
    });
  }, [search, status]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2.5">
        <SearchBar value={search} onChange={setSearch} placeholder="Search order, artwork, buyer…" className="flex-1 min-w-[220px]" />
        <FilterSelect value={status} onChange={setStatus} options={STATUSES} label="Status" />
      </div>

      <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-x-auto">
        <table className="w-full text-left min-w-[680px]">
          <thead>
            <tr className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-secondary)]">
              <th className="px-5 py-3 font-medium">Order ID</th>
              <th className="px-5 py-3 font-medium">Artwork</th>
              <th className="px-5 py-3 font-medium">Buyer</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} className="border-t border-[var(--color-outline)]/70 hover:bg-[var(--color-section)]/60">
                <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)]">{o.id}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{o.piece}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{o.buyer}</td>
                <td className="px-5 py-3 text-[13px] font-medium text-[var(--color-neutral)]">{formatINR(o.amount)}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)] whitespace-nowrap">{o.date}</td>
                <td className="px-5 py-3"><StatusBadge status={o.status} /></td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-8 text-center text-[13px] text-[var(--color-secondary)]">
                  No orders match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
