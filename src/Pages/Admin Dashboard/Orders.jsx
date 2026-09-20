import React, { useMemo, useState } from "react";
import { Eye } from "lucide-react";
import SearchBar from "../../Components/Admin/SearchBar";
import FilterSelect from "../../Components/Admin/FilterSelect";
import StatusBadge from "../../Components/Admin/StatusBadge";
import Modal from "../../Components/Admin/Modal";
import { RECENT_ORDERS } from "./adminData";
import { formatINR } from "./format";

const STATUSES = ["All statuses", "Completed", "Processing", "Pending", "Cancelled"];

export default function Orders() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(STATUSES[0]);
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    return RECENT_ORDERS.filter((o) => {
      if (status !== STATUSES[0] && o.status !== status) return false;
      const q = search.toLowerCase();
      return (
        o.id.toLowerCase().includes(q) ||
        o.buyer.toLowerCase().includes(q) ||
        o.piece.toLowerCase().includes(q)
      );
    });
  }, [search, status]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2.5">
        <SearchBar value={search} onChange={setSearch} placeholder="Search order ID, buyer, artwork…" className="flex-1 min-w-[220px]" />
        <FilterSelect value={status} onChange={setStatus} options={STATUSES} label="Status" />
      </div>

      <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-x-auto">
        <table className="w-full text-left min-w-[820px]">
          <thead>
            <tr className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-secondary)]">
              <th className="px-5 py-3 font-medium">Order ID</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Artwork</th>
              <th className="px-5 py-3 font-medium">Artist</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} className="border-t border-[var(--color-outline)]/70 hover:bg-[var(--color-section)]/60">
                <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)]">{o.id}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{o.buyer}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{o.piece}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)]">{o.artist}</td>
                <td className="px-5 py-3 text-[13px] font-medium text-[var(--color-neutral)]">{formatINR(o.amount)}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)] whitespace-nowrap">{o.date}</td>
                <td className="px-5 py-3"><StatusBadge status={o.status} /></td>
                <td className="px-5 py-3">
                  <button
                    onClick={() => setActive(o)}
                    className="inline-flex items-center gap-1 text-[12px] font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
                  >
                    <Eye size={13} /> View
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="px-5 py-8 text-center text-[13px] text-[var(--color-secondary)]">
                  No orders match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active ? `Order ${active.id}` : ""} width="640px">
        {active && (
          <div className="space-y-4 text-[13px]">
            <div className="flex items-center justify-between">
              <StatusBadge status={active.status} />
              <span className="text-[var(--color-secondary)]">{active.date}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[var(--color-secondary)] mb-1">Customer</p>
                <p className="text-[var(--color-neutral)] font-medium">{active.buyer}</p>
                <p className="text-[var(--color-secondary)]">Mumbai, Maharashtra, IN</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[var(--color-secondary)] mb-1">Artwork</p>
                <p className="text-[var(--color-neutral)] font-medium">{active.piece}</p>
                <p className="text-[var(--color-secondary)]">by {active.artist}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[var(--color-secondary)] mb-1">Payment</p>
                <p className="text-[var(--color-neutral)] font-medium">{formatINR(active.amount)}</p>
                <p className="text-[var(--color-secondary)]">UPI · Paid</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[var(--color-secondary)] mb-1">Shipping</p>
                <p className="text-[var(--color-neutral)]">Archival crate, insured</p>
                <p className="text-[var(--color-secondary)]">Est. 5–7 business days</p>
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-wide text-[var(--color-secondary)] mb-2">Order timeline</p>
              <ul className="space-y-2">
                {["Order placed", "Payment confirmed", "Packed by artist studio", "Handed to courier"].map((step, i) => (
                  <li key={step} className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${i < 2 ? "bg-[var(--color-primary)]" : "bg-[var(--color-outline)]"}`} />
                    <span className={i < 2 ? "text-[var(--color-neutral)]" : "text-[var(--color-secondary)]"}>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
