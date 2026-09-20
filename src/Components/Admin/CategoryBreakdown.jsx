import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const { label, value } = payload[0].payload;
  return (
    <div className="bg-[var(--color-inverse-surface)] text-[var(--color-inverse-on-surface)] text-[12px] px-3 py-2 rounded-lg">
      {label}: {value}%
    </div>
  );
}

export default function CategoryBreakdown({ items }) {
  return (
    <div className="flex items-center gap-6">
      <div className="w-[130px] h-[130px] shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={items}
              dataKey="value"
              nameKey="label"
              innerRadius="62%"
              outerRadius="100%"
              paddingAngle={2}
              stroke="#FEFEFB"
              strokeWidth={2}
            >
              {items.map((item) => (
                <Cell key={item.label} fill={item.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ul className="space-y-2.5 flex-1 min-w-0">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
            <span className="text-[13px] text-[var(--color-neutral)] flex-1 truncate">{item.label}</span>
            <span className="text-[13px] font-semibold text-[var(--color-neutral)]">{item.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
