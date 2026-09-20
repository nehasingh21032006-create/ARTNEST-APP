import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "../../Components/Admin/AdminSidebar";
import AdminTopbar from "../../Components/Admin/AdminTopbar";

const PAGE_META = {
  "/admin": { title: "Good morning, Admin 👋", subtitle: "Here's what's happening with ArtNest today." },
  "/admin/artists": { title: "Artists", subtitle: "Manage artist profiles, verification and performance." },
  "/admin/artworks": { title: "Artworks", subtitle: "Review, approve and manage the artwork catalogue." },
  "/admin/sculptures": { title: "Sculptures", subtitle: "Manage sculpture listings across the gallery." },
  "/admin/collections": { title: "Curated Collections", subtitle: "Build and publish themed collections." },
  "/admin/orders": { title: "Orders", subtitle: "Track and fulfil every order placed on ArtNest." },
  "/admin/custom-art": { title: "Custom Art Requests", subtitle: "Manage commission requests from buyers." },
  "/admin/users": { title: "Users", subtitle: "View buyer accounts and activity." },
  "/admin/reviews": { title: "Reviews", subtitle: "Moderate reviews left on artworks and artists." },
  "/admin/payments": { title: "Payments", subtitle: "Track artist payouts and transaction status." },
  "/admin/reports": { title: "Reports", subtitle: "High-level performance across the gallery." },
  "/admin/messages": { title: "Messages", subtitle: "Conversations with artists and buyers." },
  "/admin/settings": { title: "Settings", subtitle: "Configure ArtNest's storefront and admin preferences." },
};

export default function AdminLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] ?? { title: "Admin", subtitle: "" };

  return (
    <div className="flex min-h-screen bg-[var(--color-canvas)] font-['Plus_Jakarta_Sans']">
      <AdminSidebar mobileOpen={mobileNavOpen} onCloseMobile={() => setMobileNavOpen(false)} />

      <div className="flex-1 min-w-0">
        <AdminTopbar
          title={meta.title}
          subtitle={meta.subtitle}
          onOpenMobileNav={() => setMobileNavOpen(true)}
        />

        <main className="px-4 sm:px-6 md:px-8 py-6 sm:py-7 space-y-6 max-w-[1320px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
