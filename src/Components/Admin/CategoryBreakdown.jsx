import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export default function CategoryBreakdown({ items }) {
  const data = {
    labels: items.map((i) => i.label),
    datasets: [
      {
        data: items.map((i) => i.value),
        backgroundColor: items.map((i) => i.color),
        borderColor: "#FEFEFB",
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "68%",
    plugins: {
      tooltip: {
        backgroundColor: "#362F26",
        titleColor: "#FCEFE1",
        bodyColor: "#FCEFE1",
        bodyFont: { family: "Plus Jakarta Sans", size: 12 },
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
        callbacks: { label: (item) => `${item.label}: ${item.parsed}%` },
      },
    },
  };

  return (
    <div className="flex items-center gap-6">
      <div className="w-[130px] h-[130px] shrink-0">
        <Doughnut data={data} options={options} />
      </div>
      <ul className="space-y-2.5 flex-1">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2.5">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-[13px] text-[var(--color-neutral)] flex-1">{item.label}</span>
            <span className="text-[13px] font-semibold text-[var(--color-neutral)]">
              {item.value}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
