import React, { useState } from "react";
import { IndianRupee, ShoppingBag, Users, Image, Clock, Palette } from "lucide-react";
import StatCard from "../../Components/Admin/StatCard";
import RevenueChart from "../../Components/Admin/RevenueChart";
import CategoryBreakdown from "../../Components/Admin/CategoryBreakdown";
import RecentOrders from "../../Components/Admin/RecentOrders";
import TopArtists from "../../Components/Admin/TopArtists";
import RecentArtworks from "../../Components/Admin/RecentArtworks";
import {
  STATS,
  REVENUE_SERIES,
  CATEGORY_MIX,
  RECENT_ORDERS,
  TOP_ARTISTS,
  RECENT_ARTWORKS,
} from "./adminData";

const STAT_ICONS = {
  revenue: IndianRupee,
  orders: ShoppingBag,
  artists: Users,
  artworks: Image,
  pending: Clock,
  custom: Palette,
};

const RANGES = ["Today", "This Week", "This Month", "This Year"];

export default function Overview() {
  const [range, setRange] = useState("This Month");

  return (
    <div className="space-y-6">
      {/* Date range selector (welcome copy lives in the topbar title/subtitle) */}
      <div className="flex flex-wrap items-center gap-1.5">
        {RANGES.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRange(r)}
            className={`text-[12.5px] font-medium px-3.5 py-1.5 rounded-full border transition-colors ${
              range === r
                ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                : "border-[var(--color-outline)] text-[var(--color-secondary)] hover:text-[var(--color-neutral)]"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {STATS.map((s) => (
          <StatCard key={s.id} {...s} icon={STAT_ICONS[s.id]} />
        ))}
      </div>

      {/* Revenue + category mix */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-5">
        <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)]">
              Revenue overview
            </h2>
            <span className="text-[12px] text-[var(--color-secondary)]">Jan – Dec</span>
          </div>
          <RevenueChart data={REVENUE_SERIES} />
        </div>

        <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
          <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)] mb-4">
            Sales by category
          </h2>
          <CategoryBreakdown items={CATEGORY_MIX} />
        </div>
      </div>

      <RecentOrders orders={RECENT_ORDERS} />

      <TopArtists artists={TOP_ARTISTS} />

      <RecentArtworks artworks={RECENT_ARTWORKS} />
    </div>
  );
}
