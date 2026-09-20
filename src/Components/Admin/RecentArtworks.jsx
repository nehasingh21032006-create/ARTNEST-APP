import React from "react";
import { Link } from "react-router-dom";
import { ImageIcon } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { formatINR } from "../../Pages/Admin Dashboard/format";

export default function RecentArtworks({ artworks }) {
  return (
    <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)]">
          Recently uploaded artworks
        </h2>
        <Link
          to="/admin/artworks"
          className="text-[13px] font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
        {artworks.map((art) => (
          <div key={art.id} className="border border-[var(--color-outline)] rounded-lg overflow-hidden">
            <div
              className="h-24 flex items-center justify-center"
              style={{ backgroundColor: art.color }}
            >
              <ImageIcon size={20} className="text-white/70" />
            </div>
            <div className="p-3">
              <p className="text-[13px] font-medium text-[var(--color-neutral)] truncate">{art.title}</p>
              <p className="text-[11px] text-[var(--color-secondary)] truncate">{art.artist}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[12px] font-semibold text-[var(--color-neutral)]">
                  {formatINR(art.price)}
                </span>
                <StatusBadge status={art.status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
