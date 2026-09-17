import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

export default function RevenueChart({ labels, values }) {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        borderColor: "#9F5639",
        backgroundColor: (ctx) => {
          const { chart } = ctx;
          const { ctx: c, chartArea } = chart;
          if (!chartArea) return "rgba(159,86,57,0.08)";
          const gradient = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, "rgba(159,86,57,0.22)");
          gradient.addColorStop(1, "rgba(159,86,57,0.02)");
          return gradient;
        },
        borderWidth: 2.5,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#9F5639",
        pointHoverBorderColor: "#FEFEFB",
        pointHoverBorderWidth: 2,
        fill: true,
        tension: 0.35,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: {
      tooltip: {
        backgroundColor: "#362F26",
        titleColor: "#FCEFE1",
        bodyColor: "#FCEFE1",
        titleFont: { family: "Plus Jakarta Sans", size: 12, weight: "600" },
        bodyFont: { family: "Plus Jakarta Sans", size: 12 },
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: (item) => `$${item.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { color: "#D9D0C7" },
        ticks: { color: "#A28F7D", font: { family: "Plus Jakarta Sans", size: 12 } },
      },
      y: {
        grid: { color: "#EFE9E1" },
        border: { display: false },
        ticks: {
          color: "#A28F7D",
          font: { family: "Plus Jakarta Sans", size: 12 },
          callback: (v) => `$${v / 1000}k`,
        },
      },
    },
  };

  return (
    <div className="h-[260px]">
      <Line data={data} options={options} />
    </div>
  );
}
