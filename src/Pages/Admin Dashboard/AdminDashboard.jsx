import React, { useState } from "react";
import AdminSidebar from "../../Components/Admin/AdminSidebar";
import AdminTopbar from "../../Components/Admin/AdminTopbar";
import StatCard from "../../Components/Admin/StatCard";
import RevenueChart from "../../Components/Admin/RevenueChart";
import CategoryBreakdown from "../../Components/Admin/CategoryBreakdown";
import RecentOrders from "../../Components/Admin/RecentOrders";
import PendingApprovals from "../../Components/Admin/PendingApprovals";
import TopArtists from "../../Components/Admin/TopArtists";
import {
  STATS,
  REVENUE_TREND,
  CATEGORY_MIX,
  RECENT_ORDERS,
  PENDING_APPROVALS,
  TOP_ARTISTS,
} from "./adminData";

export default function AdminDashboard() {
  const [active, setActive] = useState("overview");

  return (
    <div className="flex min-h-screen bg-[var(--color-canvas)] font-['Plus_Jakarta_Sans']">
      <AdminSidebar active={active} onNavigate={setActive} />

      <div className="flex-1 min-w-0">
        <AdminTopbar
          title="Gallery overview"
          subtitle="Thursday, 17 September — here's how the gallery is trading."
        />

        <main className="px-6 md:px-8 py-7 space-y-6 max-w-[1280px]">
          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <StatCard key={s.id} {...s} />
            ))}
          </div>

          {/* Revenue + category mix */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-5">
            <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)]">
                  Revenue, last 6 months
                </h2>
                <span className="text-[12px] text-[var(--color-secondary)]">In USD</span>
              </div>
              <RevenueChart labels={REVENUE_TREND.labels} values={REVENUE_TREND.values} />
            </div>

            <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
              <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)] mb-4">
                Sales by medium
              </h2>
              <CategoryBreakdown items={CATEGORY_MIX} />
            </div>
          </div>

          {/* Orders + approvals */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-5">
            <RecentOrders orders={RECENT_ORDERS} />
            <PendingApprovals items={PENDING_APPROVALS} />
          </div>

          {/* Top artists */}
          <TopArtists artists={TOP_ARTISTS} />
        </main>
      </div>
    </div>
  );
}
