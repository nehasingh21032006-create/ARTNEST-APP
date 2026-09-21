import React from "react";
import { Link } from "react-router-dom";
import { IndianRupee, ShoppingBag, Image, Clock } from "lucide-react";
import { ImageIcon } from "lucide-react";
import StatCard from "../../Components/Admin/StatCard";
import StatusBadge from "../../Components/Admin/StatusBadge";
import EarningsChart from "../../Components/Artist/EarningsChart";
import { STATS, EARNINGS_SERIES, MY_ORDERS, MY_ARTWORKS } from "./artistData";
import { formatINR } from "../Admin Dashboard/format";

const STAT_ICONS = { earnings: IndianRupee, orders: ShoppingBag, artworks: Image, pending: Clock };

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <StatCard key={s.id} {...s} icon={STAT_ICONS[s.id]} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-5">
        <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
          <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)] mb-1">Earnings overview</h2>
          <EarningsChart data={EARNINGS_SERIES} />
        </div>

        <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)]">My artworks</h2>
            <Link to="/artist/artworks" className="text-[13px] font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
              View all →
            </Link>
          </div>
          <ul className="space-y-3">
            {MY_ARTWORKS.slice(0, 4).map((a) => (
              <li key={a.id} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: a.color }}>
                  <ImageIcon size={15} className="text-white/70" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium text-[var(--color-neutral)] truncate">{a.title}</p>
                  <p className="text-[12px] text-[var(--color-secondary)]">{formatINR(a.price)}</p>
                </div>
                <StatusBadge status={a.status} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl">
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)]">Recent orders</h2>
          <Link to="/artist/orders" className="text-[13px] font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
            View all →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[620px]">
            <thead>
              <tr className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-secondary)] border-t border-[var(--color-outline)]">
                <th className="px-5 py-2.5 font-medium">Order</th>
                <th className="px-5 py-2.5 font-medium">Artwork</th>
                <th className="px-5 py-2.5 font-medium">Buyer</th>
                <th className="px-5 py-2.5 font-medium">Amount</th>
                <th className="px-5 py-2.5 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {MY_ORDERS.slice(0, 5).map((o) => (
                <tr key={o.id} className="border-t border-[var(--color-outline)]/70 hover:bg-[var(--color-section)]/60">
                  <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)]">{o.id}</td>
                  <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{o.piece}</td>
                  <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{o.buyer}</td>
                  <td className="px-5 py-3 text-[13px] font-medium text-[var(--color-neutral)]">{formatINR(o.amount)}</td>
                  <td className="px-5 py-3"><StatusBadge status={o.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
