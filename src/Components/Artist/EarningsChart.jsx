import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatINRCompact, formatINR } from "../../Pages/Admin Dashboard/format";

const METRICS = [
  { key: "earnings", label: "Earnings", isCurrency: true },
  { key: "orders", label: "Orders", isCurrency: false },
];

function CustomTooltip({ active, payload, label, isCurrency }) {
  if (!active || !payload?.length) return null;
  const value = payload[0].value;
  return (
    <div className="bg-[var(--color-inverse-surface)] text-[var(--color-inverse-on-surface)] text-[12px] px-3 py-2 rounded-lg">
      <p className="font-semibold">{label}</p>
      <p>{isCurrency ? formatINR(value) : value}</p>
    </div>
  );
}

export default function EarningsChart({ data }) {
  const [metric, setMetric] = useState("earnings");
  const active = METRICS.find((m) => m.key === metric);

  return (
    <div>
      <div className="flex items-center gap-1.5 mb-3">
        {METRICS.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => setMetric(m.key)}
            className={`text-[12px] font-medium px-3 py-1.5 rounded-full transition-colors ${
              metric === m.key
                ? "bg-[var(--color-primary)] text-white"
                : "text-[var(--color-secondary)] bg-[var(--color-section)] hover:text-[var(--color-neutral)]"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="earningsFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9F5639" stopOpacity={0.28} />
                <stop offset="100%" stopColor="#9F5639" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#EFE9E1" />
            <XAxis dataKey="month" tick={{ fill: "#A28F7D", fontSize: 12, fontFamily: "Plus Jakarta Sans" }} axisLine={{ stroke: "#D9D0C7" }} tickLine={false} />
            <YAxis
              tick={{ fill: "#A28F7D", fontSize: 12, fontFamily: "Plus Jakarta Sans" }}
              axisLine={false}
              tickLine={false}
              width={54}
              tickFormatter={(v) => (active.isCurrency ? formatINRCompact(v) : v)}
            />
            <Tooltip content={<CustomTooltip isCurrency={active.isCurrency} />} />
            <Area
              type="monotone"
              dataKey={metric}
              stroke="#9F5639"
              strokeWidth={2.5}
              fill="url(#earningsFill)"
              activeDot={{ r: 5, fill: "#9F5639", stroke: "#FEFEFB", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
