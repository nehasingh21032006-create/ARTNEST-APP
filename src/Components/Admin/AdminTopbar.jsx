import React from "react";
import { Search, Bell } from "lucide-react";

export default function AdminTopbar({ title, subtitle }) {
  return (
    <header className="h-[76px] w-full bg-[var(--color-elevated)] border-b border-[var(--color-outline)] flex items-center justify-between px-8">
      <div>
        <h1 className="font-['Playfair_Display'] text-[24px] leading-tight text-[var(--color-neutral)]">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-[13px] text-[var(--color-secondary)]">{subtitle}</p>
        ) : null}
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden md:flex items-center gap-2 h-10 w-[240px] px-3 rounded-full border border-[var(--color-outline)] bg-[var(--color-canvas)] text-[var(--color-secondary)]">
          <Search size={16} strokeWidth={1.8} />
          <input
            type="text"
            placeholder="Search orders, artists…"
            className="w-full bg-transparent text-[13px] text-[var(--color-neutral)] placeholder:text-[var(--color-secondary)] focus:outline-none"
          />
        </div>

        <button
          type="button"
          className="relative w-9 h-9 rounded-full flex items-center justify-center text-[var(--color-neutral)] hover:bg-[var(--color-section)] transition-colors duration-150"
        >
          <Bell size={18} strokeWidth={1.8} />
          <span className="absolute top-1.5 right-1.5 w-[7px] h-[7px] rounded-full bg-[#9F5639]" />
        </button>

        <div className="h-8 w-px bg-[var(--color-outline)]" />

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d6c4ae] to-[#b99a78] flex items-center justify-center text-white text-[11px] font-semibold">
            AD
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-[13px] font-medium text-[var(--color-neutral)]">Amara Deshmukh</p>
            <p className="text-[11px] text-[var(--color-secondary)]">Gallery admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
