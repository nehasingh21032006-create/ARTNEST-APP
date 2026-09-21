import React, { useState, useRef, useEffect } from "react";
import { Bell, Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { ARTIST_PROFILE } from "../../Pages/Artist Dashboard/artistData";

function useClickOutside(ref, onOutside) {
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) onOutside();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, onOutside]);
}

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={() => setOpen((o) => !o)} className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d6c4ae] to-[#b99a78] flex items-center justify-center text-white text-[11px] font-semibold shrink-0">
          {ARTIST_PROFILE.initials}
        </div>
        <div className="hidden sm:block leading-tight text-left">
          <p className="text-[13px] font-medium text-[var(--color-neutral)]">{ARTIST_PROFILE.name}</p>
          <p className="text-[11px] text-[var(--color-secondary)]">{ARTIST_PROFILE.specialty} artist</p>
        </div>
        <ChevronDown size={14} className="text-[var(--color-secondary)] hidden sm:block" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-[180px] bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl shadow-lg z-30 overflow-hidden text-[13px]">
          <Link to="/artist/profile" className="block px-4 py-2.5 text-[var(--color-neutral)] hover:bg-[var(--color-section)]">
            My profile
          </Link>
          <button className="w-full text-left px-4 py-2.5 text-[#9B3B2E] hover:bg-[var(--color-section)]">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default function ArtistTopbar({ title, subtitle, onOpenMobileNav }) {
  return (
    <header className="sticky top-0 z-20 h-[76px] w-full bg-[var(--color-elevated)] border-b border-[var(--color-outline)] flex items-center justify-between px-4 sm:px-8 gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={onOpenMobileNav}
          aria-label="Open menu"
          className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-[var(--color-neutral)] hover:bg-[var(--color-section)] transition-colors shrink-0"
        >
          <Menu size={19} strokeWidth={1.8} />
        </button>
        <div className="min-w-0">
          <h1 className="font-['Playfair_Display'] text-[19px] sm:text-[24px] leading-tight text-[var(--color-neutral)] truncate">
            {title}
          </h1>
          {subtitle ? (
            <p className="hidden sm:block text-[13px] text-[var(--color-secondary)] truncate">{subtitle}</p>
          ) : null}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-5 shrink-0">
        <button
          type="button"
          aria-label="Notifications"
          className="relative w-9 h-9 rounded-full flex items-center justify-center text-[var(--color-neutral)] hover:bg-[var(--color-section)] transition-colors duration-150"
        >
          <Bell size={18} strokeWidth={1.8} />
          <span className="absolute top-1 right-1 w-[7px] h-[7px] rounded-full bg-[#9F5639]" />
        </button>
        <div className="h-8 w-px bg-[var(--color-outline)] hidden sm:block" />
        <ProfileMenu />
      </div>
    </header>
  );
}
