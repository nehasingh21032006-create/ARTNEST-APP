import React from "react";
import StatusBadge from "../../Components/Admin/StatusBadge";
import EarningsChart from "../../Components/Artist/EarningsChart";
import { PAYOUTS, EARNINGS_SERIES } from "./artistData";
import { formatINR } from "../Admin Dashboard/format";

export default function Earnings() {
  const totalPaid = PAYOUTS.filter((p) => p.status === "Paid").reduce((s, p) => s + p.amount, 0);
  const totalPending = PAYOUTS.filter((p) => p.status !== "Paid").reduce((s, p) => s + p.amount, 0);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl px-5 py-4">
          <p className="text-[13px] text-[var(--color-secondary)]">Paid out to you</p>
          <p className="font-['Playfair_Display'] text-[26px] text-[var(--color-neutral)] mt-1">{formatINR(totalPaid)}</p>
        </div>
        <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl px-5 py-4">
          <p className="text-[13px] text-[var(--color-secondary)]">Pending payout</p>
          <p className="font-['Playfair_Display'] text-[26px] text-[var(--color-neutral)] mt-1">{formatINR(totalPending)}</p>
        </div>
      </div>

      <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
        <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)] mb-1">Earnings trend</h2>
        <EarningsChart data={EARNINGS_SERIES} />
      </div>

      <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-x-auto">
        <table className="w-full text-left min-w-[620px]">
          <thead>
            <tr className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-secondary)]">
              <th className="px-5 py-3 font-medium">Payout</th>
              <th className="px-5 py-3 font-medium">Order</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Method</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {PAYOUTS.map((p) => (
              <tr key={p.id} className="border-t border-[var(--color-outline)]/70 hover:bg-[var(--color-section)]/60">
                <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)]">{p.id}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{p.order}</td>
                <td className="px-5 py-3 text-[13px] font-medium text-[var(--color-neutral)]">{formatINR(p.amount)}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{p.method}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)] whitespace-nowrap">{p.date}</td>
                <td className="px-5 py-3"><StatusBadge status={p.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
