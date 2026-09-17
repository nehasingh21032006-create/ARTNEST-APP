import React from "react";
import { Star } from "lucide-react";

export default function TopArtists({ artists }) {
  return (
    <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl">
      <div className="px-5 pt-5 pb-3">
        <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)]">
          Top artists this month
        </h2>
      </div>

      <ul>
        {artists.map((artist, idx) => (
          <li
            key={artist.name}
            className={`flex items-center gap-3 px-5 py-3.5 ${
              idx !== 0 ? "border-t border-[var(--color-outline)]/70" : ""
            }`}
          >
            <span className="font-['Playfair_Display'] text-[15px] text-[var(--color-secondary)] w-5">
              {idx + 1}
            </span>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d6c4ae] to-[#b99a78] flex items-center justify-center text-white text-[11px] font-semibold shrink-0">
              {artist.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-[var(--color-neutral)] truncate">
                {artist.name}
              </p>
              <p className="text-[12px] text-[var(--color-secondary)]">{artist.pieces} pieces sold</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[13px] font-semibold text-[var(--color-neutral)]">{artist.sales}</p>
              <p className="flex items-center justify-end gap-1 text-[12px] text-[var(--color-secondary)]">
                <Star size={11} className="fill-[#9F5639] text-[#9F5639]" />
                {artist.rating}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
