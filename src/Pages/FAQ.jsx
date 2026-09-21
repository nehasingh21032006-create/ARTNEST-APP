import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronDown,
  ShoppingBag,
  Palette,
  CreditCard,
  ShieldCheck,
  UserCircle,
  Mail,
  HelpCircle,
} from "lucide-react";

const CATEGORIES = [
  { id: "orders", label: "Orders & Shipping", icon: ShoppingBag },
  { id: "artists", label: "Artists & Commissions", icon: Palette },
  { id: "payments", label: "Payments & Pricing", icon: CreditCard },
  { id: "authenticity", label: "Authenticity & Returns", icon: ShieldCheck },
  { id: "account", label: "Account & Support", icon: UserCircle },
];

const FAQS = [
  {
    category: "orders",
    q: "How long does shipping take?",
    a: "Most original artworks and sculptures ship within 3–5 business days of your order, in archival, insured packaging. Delivery typically takes 5–10 business days domestically and 10–18 days internationally, depending on the piece and destination. You'll get tracking details by email as soon as it's handed to the courier.",
  },
  {
    category: "orders",
    q: "Can I track my order?",
    a: "Yes. Once your piece ships, you'll receive a tracking link by email, and you can also check live status any time from Orders in your account dashboard.",
  },
  {
    category: "orders",
    q: "Do you ship internationally?",
    a: "We ship to most countries. International orders may be subject to customs duties or import taxes, which are the buyer's responsibility and are calculated at checkout where possible.",
  },
  {
    category: "orders",
    q: "How is fragile or large artwork packaged?",
    a: "Paintings are shipped in rigid, corner-protected crates; sculptures and ceramics are individually cushioned and boxed by the artist's studio, then insured for their full value in transit.",
  },
  {
    category: "artists",
    q: "How do I become an artist on ArtNest?",
    a: "Apply through the 'Sell your work' page with a few portfolio images and a short bio. Our curatorial team reviews every application — most artists hear back within 5–7 business days. Once approved, you can list artworks directly from your Artist Dashboard.",
  },
  {
    category: "artists",
    q: "How do custom art commissions work?",
    a: "Submit a request describing the piece you'd like, your budget and deadline. We match it with an artist whose style fits, who can accept, discuss details with you directly through Messages, and share progress updates before the final piece ships.",
  },
  {
    category: "artists",
    q: "What commission does ArtNest take on sales?",
    a: "ArtNest retains a standard marketplace commission on each sale, clearly shown to artists before they list a piece. Artists set their own prices and receive the remainder as payout.",
  },
  {
    category: "artists",
    q: "When do artists get paid?",
    a: "Payouts are released once the buyer's delivery window closes without a dispute, typically 7–10 days after the order is marked delivered. Artists can track every payout from the Earnings tab of their dashboard.",
  },
  {
    category: "payments",
    q: "What payment methods are accepted?",
    a: "We accept UPI, major debit and credit cards, and net banking. All payments are processed securely through our payment gateway partner — ArtNest never stores your full card details.",
  },
  {
    category: "payments",
    q: "Are prices inclusive of taxes?",
    a: "Listed prices are in Indian Rupees and are exclusive of applicable GST, which is calculated and shown at checkout before you confirm payment.",
  },
  {
    category: "payments",
    q: "Can I pay in installments?",
    a: "For select higher-value pieces, EMI options may be available at checkout through supported card issuers. Availability is shown on the artwork page when applicable.",
  },
  {
    category: "authenticity",
    q: "Is every artwork guaranteed authentic?",
    a: "Yes. Every original piece ships with a signed certificate of authenticity from the artist, verifying the work, medium and edition (where relevant). We also verify every artist's identity and studio before they can list on ArtNest.",
  },
  {
    category: "authenticity",
    q: "What is your return policy?",
    a: "You can request a return within 7 days of delivery if a piece arrives damaged or significantly different from its listing. Custom commissions are final sale once accepted by the buyer, since they're made specifically for you.",
  },
  {
    category: "authenticity",
    q: "What if my piece arrives damaged?",
    a: "Contact us within 48 hours of delivery with photos of the packaging and the damage. Since every shipment is insured, we'll arrange a replacement, repair or full refund at no cost to you.",
  },
  {
    category: "account",
    q: "Do I need an account to buy art?",
    a: "You can browse and add pieces to your wishlist without an account, but you'll need to sign in to check out, track orders, and message artists directly.",
  },
  {
    category: "account",
    q: "How do I contact an artist directly?",
    a: "Open any artwork or artist profile and use the Message button — this opens a thread in your dashboard where you can ask about a piece, request custom sizing, or discuss a commission.",
  },
  {
    category: "account",
    q: "How do I reach ArtNest support?",
    a: "Email us any time at hello@artnest.com, or use the contact form below — our team typically responds within one business day.",
  },
];

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border border-[var(--color-outline)] rounded-xl bg-[var(--color-elevated)] overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-[14.5px] font-medium text-[var(--color-neutral)]">{item.q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[var(--color-secondary)] shrink-0"
        >
          <ChevronDown size={17} strokeWidth={1.8} />
        </motion.span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.22 }}
          className="px-5 overflow-hidden"
        >
          <p className="pb-4 text-[13.5px] leading-relaxed text-[var(--color-secondary)]">{item.a}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState(0);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return FAQS.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) return false;
      if (!q) return true;
      return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
    });
  }, [search, activeCategory]);

  const grouped = useMemo(() => {
    if (activeCategory !== "all") return [{ category: activeCategory, items: filtered }];
    return CATEGORIES.map((c) => ({
      category: c.id,
      items: filtered.filter((f) => f.category === c.id),
    })).filter((g) => g.items.length > 0);
  }, [filtered, activeCategory]);

  return (
    <div className="bg-[var(--color-canvas)] font-['Plus_Jakarta_Sans']">
      {/* Hero (dark) */}
      <section className="bg-[#241b11] border-b border-[#3a2d1e]">
        <div className="max-w-[820px] mx-auto px-6 py-16 sm:py-[60px] text-center">
          <span className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-medium text-[#e9dcae] bg-[#2f2416] border border-[#4d3d29] rounded-full px-5 py-2.5">
            <HelpCircle size={16} strokeWidth={1.8} />
            Help center
          </span>
          <h1 className="mt-8 font-['Playfair_Display'] text-[40px] sm:text-[64px] leading-[1.1] text-[#f6f0e4]">
            Frequently asked questions
          </h1>
          <p className="mt-6 text-[16px] sm:text-[19px] leading-relaxed text-[#f1e9d9] max-w-[720px] mx-auto">
            Everything you need to know about buying original art, working with artists,
            shipping, and payments on ArtNest.
          </p>

          <div className="mt-8 flex items-center gap-2 h-12 px-4 rounded-full border border-[#4d3d29] bg-[#2f2416] max-w-[440px] mx-auto focus-within:border-[#a4926f] transition-colors">
            <Search size={17} className="text-[#a4926f] shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions…"
              className="w-full bg-transparent text-[13.5px] text-[#f6f0e4] placeholder:text-[#a4926f] focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Category pills */}
      <div className="max-w-[900px] mx-auto px-6 pt-8 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`text-[12.5px] font-medium px-4 py-2 rounded-full border transition-colors ${
            activeCategory === "all"
              ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
              : "border-[var(--color-outline)] text-[var(--color-secondary)] hover:text-[var(--color-neutral)]"
          }`}
        >
          All topics
        </button>
        {CATEGORIES.map((c) => {
          const Icon = c.icon;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={`inline-flex items-center gap-1.5 text-[12.5px] font-medium px-4 py-2 rounded-full border transition-colors ${
                activeCategory === c.id
                  ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                  : "border-[var(--color-outline)] text-[var(--color-secondary)] hover:text-[var(--color-neutral)]"
              }`}
            >
              <Icon size={14} strokeWidth={1.8} />
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Questions */}
      <div className="max-w-[820px] mx-auto px-6 py-10 space-y-9">
        {grouped.map((group) => {
          const meta = CATEGORIES.find((c) => c.id === group.category);
          return (
            <div key={group.category}>
              {activeCategory === "all" && (
                <h2 className="font-['Playfair_Display'] text-[19px] text-[var(--color-neutral)] mb-3">
                  {meta?.label}
                </h2>
              )}
              <div className="space-y-3">
                {group.items.map((item) => {
                  const id = `${item.category}-${item.q}`;
                  return (
                    <FaqItem
                      key={id}
                      item={item}
                      open={openId === id}
                      onToggle={() => setOpenId(openId === id ? null : id)}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}

        {grouped.length === 0 && (
          <p className="text-center text-[13.5px] text-[var(--color-secondary)] py-10">
            No questions match “{search}”. Try a different search, or reach out below.
          </p>
        )}
      </div>

      {/* Contact CTA */}
      <section className="border-t border-[var(--color-outline)] bg-[var(--color-section)]">
        <div className="max-w-[640px] mx-auto px-6 py-14 text-center">
          <h2 className="font-['Playfair_Display'] text-[24px] text-[var(--color-neutral)]">
            Still have questions?
          </h2>
          <p className="mt-2 text-[13.5px] text-[var(--color-secondary)]">
            Our team typically replies within one business day.
          </p>
          <a
            href="mailto:hello@artnest.com"
            className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[var(--color-primary)] text-white text-[13.5px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            <Mail size={16} strokeWidth={1.8} />
            Contact us
          </a>
        </div>
      </section>
    </div>
  );
}
