import React from "react";
import { Link } from "react-router-dom";
import { Star, Users as UsersIcon } from "lucide-react";
import { formatINR } from "../../Pages/Admin Dashboard/format";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TopArtists({ artists }) {
  return (
    <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)]">
          Top performing artists
        </h2>
        <Link
          to="/admin/artists"
          className="text-[13px] font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
        >
          View all artists →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="border border-[var(--color-outline)] rounded-lg p-4 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d6c4ae] to-[#b99a78] flex items-center justify-center text-white text-[15px] font-semibold">
              {initials(artist.name)}
            </div>
            <p className="mt-3 text-[13px] font-semibold text-[var(--color-neutral)]">{artist.name}</p>
            <p className="text-[12px] text-[var(--color-secondary)]">{artist.category}</p>

            <div className="mt-3 w-full flex items-center justify-between text-[12px] text-[var(--color-secondary)]">
              <span>{artist.artworks} pieces</span>
              <span className="flex items-center gap-1">
                <Star size={11} className="fill-[#9F5639] text-[#9F5639]" />
                {artist.rating}
              </span>
            </div>
            <p className="mt-2 text-[14px] font-semibold text-[var(--color-neutral)]">
              {formatINR(artist.sales)}
            </p>
            <p className="mt-0.5 flex items-center gap-1 text-[11px] text-[var(--color-secondary)]">
              <UsersIcon size={11} />
              {artist.followers.toLocaleString("en-IN")} followers
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
