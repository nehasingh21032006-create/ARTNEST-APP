import React from "react";
import { ChevronDown } from "lucide-react";

export default function FilterSelect({ value, onChange, options, label }) {
  return (
    <label className="relative inline-flex items-center">
      {label ? <span className="sr-only">{label}</span> : null}
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="appearance-none h-10 pl-3 pr-8 rounded-full border border-[var(--color-outline)] bg-[var(--color-canvas)] text-[13px] text-[var(--color-neutral)] focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown size={14} className="pointer-events-none absolute right-3 text-[var(--color-secondary)]" />
    </label>
  );
}
