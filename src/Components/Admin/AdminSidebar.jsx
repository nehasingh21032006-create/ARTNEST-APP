import React from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Image,
  Users,
  ClipboardCheck,
  MessageSquareText,
  Settings,
  LogOut,
} from "lucide-react";

const NAV_GROUPS = [
  {
    label: "Overview",
    items: [{ key: "overview", label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    label: "Catalogue",
    items: [
      { key: "orders", label: "Orders", icon: ShoppingBag },
      { key: "artworks", label: "Artworks", icon: Image },
      { key: "approvals", label: "Approvals", icon: ClipboardCheck, badge: 9 },
    ],
  },
  {
    label: "Community",
    items: [
      { key: "artists", label: "Artists", icon: Users },
      { key: "messages", label: "Messages", icon: MessageSquareText },
    ],
  },
];

export default function AdminSidebar({ active = "overview", onNavigate }) {
  return (
    <aside className="hidden lg:flex w-[248px] shrink-0 flex-col bg-[var(--color-inverse-surface)] text-[var(--color-inverse-on-surface)] min-h-screen">
      {/* Brand */}
      <div className="flex items-center gap-[9px] px-6 h-[76px] border-b border-white/10">
        <div className="w-[30px] h-[30px] rounded-full bg-[#4a3f33] flex items-center justify-center text-[#d99a76] text-[15px]">
          ✦
        </div>
        <div className="leading-tight">
          <div className="font-['Playfair_Display'] text-[19px]">ArtNest</div>
          <div className="text-[11px] tracking-[0.06em] text-[#A28F7D]">Admin</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 space-y-7 overflow-y-auto">
        {NAV_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8d7c6c]">
              {group.label}
            </p>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = active === item.key;
                const Icon = item.icon;
                return (
                  <li key={item.key}>
                    <button
                      type="button"
                      onClick={() => onNavigate?.(item.key)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-colors duration-150 ${
                        isActive
                          ? "bg-[#4a3f33] text-[var(--color-inverse-on-surface)]"
                          : "text-[#cdbba6] hover:bg-white/5 hover:text-[var(--color-inverse-on-surface)]"
                      }`}
                    >
                      <span
                        className={`inline-block w-[3px] h-4 rounded-full ${
                          isActive ? "bg-[#c98a68]" : "bg-transparent"
                        }`}
                      />
                      <Icon size={17} strokeWidth={1.8} />
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge ? (
                        <span className="text-[11px] font-semibold bg-[#9F5639] text-white rounded-full px-[7px] py-[1px]">
                          {item.badge}
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer actions */}
      <div className="px-4 py-5 border-t border-white/10 space-y-1">
        <button
          type="button"
          onClick={() => onNavigate?.("settings")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] text-[#cdbba6] hover:bg-white/5 hover:text-[var(--color-inverse-on-surface)] transition-colors duration-150"
        >
          <Settings size={17} strokeWidth={1.8} />
          Settings
        </button>
        <button
          type="button"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] text-[#cdbba6] hover:bg-white/5 hover:text-[var(--color-inverse-on-surface)] transition-colors duration-150"
        >
          <LogOut size={17} strokeWidth={1.8} />
          Sign out
        </button>
      </div>
    </aside>
  );
}
