import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Image,
  Gem,
  LayoutGrid,
  ShoppingBag,
  Palette,
  UserCog,
  Star,
  CreditCard,
  BarChart3,
  MessageSquareText,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const NAV_GROUPS = [
  {
    label: "Overview",
    items: [{ to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true }],
  },
  {
    label: "Catalogue",
    items: [
      { to: "/admin/artistsdata", label: "Artists", icon: Users },
      { to: "/admin/artworksdata", label: "Artworks", icon: Image },
      { to: "/admin/sculpturesdata", label: "Sculptures", icon: Gem },
      { to: "/admin/collectionsdata", label: "Collections", icon: LayoutGrid },
    ],
  },
  {
    label: "Sales",
    items: [
      { to: "/admin/orders", label: "Orders", icon: ShoppingBag },
      { to: "/admin/custom-art", label: "Custom Art Requests", icon: Palette },
      { to: "/admin/payments", label: "Payments", icon: CreditCard },
    ],
  },
  {
    label: "Community",
    items: [
      { to: "/admin/users", label: "Users", icon: UserCog },
      { to: "/admin/reviews", label: "Reviews", icon: Star },
      { to: "/admin/messages", label: "Messages", icon: MessageSquareText, badge: 2 },
    ],
  },
  {
    label: "Insights",
    items: [{ to: "/admin/reports", label: "Reports", icon: BarChart3 }],
  },
];

function NavItem({ item }) {
  const Icon = item.icon;
  return (
    <li>
      <NavLink
        to={item.to}
        end={item.end}
        className={({ isActive }) =>
          `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-colors duration-150 ${
            isActive
              ? "bg-[#4a3f33] text-[var(--color-inverse-on-surface)]"
              : "text-[#cdbba6] hover:bg-white/5 hover:text-[var(--color-inverse-on-surface)]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span className={`inline-block w-[3px] h-4 rounded-full ${isActive ? "bg-[#c98a68]" : "bg-transparent"}`} />
            <Icon size={17} strokeWidth={1.8} />
            <span className="flex-1 text-left truncate">{item.label}</span>
            {item.badge ? (
              <span className="text-[11px] font-semibold bg-[#9F5639] text-white rounded-full px-[7px] py-[1px]">
                {item.badge}
              </span>
            ) : null}
          </>
        )}
      </NavLink>
    </li>
  );
}

function SidebarContent({ onNavigate }) {
  return (
    <>
      <div className="flex items-center justify-between px-6 h-[76px] border-b border-white/10 shrink-0">
        <div className="flex items-center gap-[9px]">
          <div className="w-[30px] h-[30px] rounded-full bg-[#4a3f33] flex items-center justify-center text-[#d99a76] text-[15px]">
            ✦
          </div>
          <div className="leading-tight">
            <div className="font-['Playfair_Display'] text-[19px]">ArtNest</div>
            <div className="text-[11px] tracking-[0.06em] text-[#A28F7D]">Admin</div>
          </div>
        </div>
        {onNavigate ? (
          <button
            type="button"
            onClick={onNavigate}
            aria-label="Close menu"
            className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-[#cdbba6] hover:bg-white/5"
          >
            <X size={18} />
          </button>
        ) : null}
      </div>

      <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto" onClick={onNavigate}>
        {NAV_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8d7c6c]">
              {group.label}
            </p>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <NavItem key={item.to} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="px-4 py-5 border-t border-white/10 space-y-1 shrink-0" onClick={onNavigate}>
        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-colors duration-150 ${
              isActive
                ? "bg-[#4a3f33] text-[var(--color-inverse-on-surface)]"
                : "text-[#cdbba6] hover:bg-white/5 hover:text-[var(--color-inverse-on-surface)]"
            }`
          }
        >
          <Settings size={17} strokeWidth={1.8} className="mr-3 inline" />
          Settings
        </NavLink>
        <button
          type="button"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] text-[#cdbba6] hover:bg-white/5 hover:text-[var(--color-inverse-on-surface)] transition-colors duration-150"
        >
          <LogOut size={17} strokeWidth={1.8} />
          Sign out
        </button>
      </div>
    </>
  );
}

export default function AdminSidebar({ mobileOpen, onCloseMobile }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-[248px] shrink-0 flex-col bg-[var(--color-inverse-surface)] text-[var(--color-inverse-on-surface)] min-h-screen">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#241d16]/50" onClick={onCloseMobile} aria-hidden="true" />
        <aside
          className={`absolute left-0 top-0 h-full w-[260px] flex flex-col bg-[var(--color-inverse-surface)] text-[var(--color-inverse-on-surface)] transition-transform duration-200 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent onNavigate={onCloseMobile} />
        </aside>
      </div>
    </>
  );
}
