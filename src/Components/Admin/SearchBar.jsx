import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({ value, onChange, placeholder = "Search…", className = "" }) {
  return (
    <div
      className={`flex items-center gap-2 h-10 px-3 rounded-full border border-[var(--color-outline)] bg-[var(--color-canvas)] text-[var(--color-secondary)] ${className}`}
    >
      <Search size={16} strokeWidth={1.8} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-[13px] text-[var(--color-neutral)] placeholder:text-[var(--color-secondary)] focus:outline-none"
      />
    </div>
  );
}
