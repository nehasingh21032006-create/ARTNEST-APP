import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, title, children, footer, width = "560px" }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#241d16]/45"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative w-full bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl shadow-xl my-8"
        style={{ maxWidth: width }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-outline)]">
          <h3 className="font-['Playfair_Display'] text-[19px] text-[var(--color-neutral)]">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)] transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        <div className="px-5 py-4 max-h-[70vh] overflow-y-auto">{children}</div>
        {footer ? (
          <div className="px-5 py-4 border-t border-[var(--color-outline)] flex items-center justify-end gap-2.5">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
