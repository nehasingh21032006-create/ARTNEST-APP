import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ArtistSidebar from "../../Components/Artist/ArtistSidebar";
import ArtistTopbar from "../../Components/Artist/ArtistTopbar";

const PAGE_META = {
  "/artist": { title: "Good morning, Aarav 👋", subtitle: "Here's how your studio is doing today." },
  "/artist/artworks": { title: "My Artworks", subtitle: "Manage your listed pieces and submissions." },
  "/artist/orders": { title: "Orders", subtitle: "Track orders placed for your artwork." },
  "/artist/custom-requests": { title: "Custom Requests", subtitle: "Commission requests sent to you." },
  "/artist/earnings": { title: "Earnings", subtitle: "Your payouts and transaction history." },
  "/artist/reviews": { title: "Reviews", subtitle: "What collectors are saying about your work." },
  "/artist/messages": { title: "Messages", subtitle: "Conversations with the gallery and buyers." },
  "/artist/profile": { title: "Profile", subtitle: "Manage your public artist profile." },
};

export default function ArtistLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] ?? { title: "Studio", subtitle: "" };

  return (
    <div className="flex min-h-screen bg-[var(--color-canvas)] font-['Plus_Jakarta_Sans']">
      <ArtistSidebar mobileOpen={mobileNavOpen} onCloseMobile={() => setMobileNavOpen(false)} />

      <div className="flex-1 min-w-0">
        <ArtistTopbar title={meta.title} subtitle={meta.subtitle} onOpenMobileNav={() => setMobileNavOpen(true)} />
        <main className="px-4 sm:px-6 md:px-8 py-6 sm:py-7 space-y-6 max-w-[1200px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
