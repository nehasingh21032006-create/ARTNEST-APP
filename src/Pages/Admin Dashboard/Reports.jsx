import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Download } from "lucide-react";
import { REVENUE_SERIES, CATEGORY_MIX } from "./adminData";
import { formatINR } from "./format";

export default function Reports() {
  const [exported, setExported] = useState(false);

  function handleExport() {
    setExported(true);
    setTimeout(() => setExported(false), 2500);
  }

  const totalRevenue = REVENUE_SERIES.reduce((s, m) => s + m.revenue, 0);
  const totalOrders = REVENUE_SERIES.reduce((s, m) => s + m.orders, 0);
  const avgOrderValue = Math.round(totalRevenue / totalOrders);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <p className="text-[13px] text-[var(--color-secondary)]">Jan – Dec 2026 performance summary</p>
        <button
          type="button"
          onClick={handleExport}
          className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full border border-[var(--color-outline)] text-[13px] font-medium text-[var(--color-neutral)] hover:bg-[var(--color-section)] transition-colors"
        >
          <Download size={15} /> {exported ? "Report exported ✓" : "Export report"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl px-5 py-4">
          <p className="text-[13px] text-[var(--color-secondary)]">Total revenue (YTD)</p>
          <p className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)] mt-1">{formatINR(totalRevenue)}</p>
        </div>
        <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl px-5 py-4">
          <p className="text-[13px] text-[var(--color-secondary)]">Total orders (YTD)</p>
          <p className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)] mt-1">{totalOrders.toLocaleString("en-IN")}</p>
        </div>
        <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl px-5 py-4">
          <p className="text-[13px] text-[var(--color-secondary)]">Average order value</p>
          <p className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)] mt-1">{formatINR(avgOrderValue)}</p>
        </div>
      </div>

      <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
        <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)] mb-4">Orders by month</h2>
        <div className="h-[260px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={REVENUE_SERIES} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="#EFE9E1" />
              <XAxis dataKey="month" tick={{ fill: "#A28F7D", fontSize: 12, fontFamily: "Plus Jakarta Sans" }} axisLine={{ stroke: "#D9D0C7" }} tickLine={false} />
              <YAxis tick={{ fill: "#A28F7D", fontSize: 12, fontFamily: "Plus Jakarta Sans" }} axisLine={false} tickLine={false} width={36} />
              <Tooltip
                contentStyle={{ background: "#362F26", border: "none", borderRadius: 8, color: "#FCEFE1", fontSize: 12, fontFamily: "Plus Jakarta Sans" }}
                cursor={{ fill: "#F1EFE9" }}
              />
              <Bar dataKey="orders" fill="#9F5639" radius={[6, 6, 0, 0]} maxBarSize={28} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
        <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)] mb-4">Revenue share by category</h2>
        <ul className="space-y-3">
          {CATEGORY_MIX.map((c) => (
            <li key={c.label} className="flex items-center gap-3">
              <span className="text-[13px] text-[var(--color-neutral)] w-[110px] shrink-0">{c.label}</span>
              <div className="flex-1 h-2 rounded-full bg-[var(--color-section)] overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${c.value}%`, backgroundColor: c.color }} />
              </div>
              <span className="text-[13px] font-medium text-[var(--color-neutral)] w-10 text-right">{c.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
