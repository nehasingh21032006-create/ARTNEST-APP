import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdOutlineVerified, MdMenu, MdClose, MdSearch } from "react-icons/md";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Discover", href: "/discover" },
  { label: "Artists", href: "/artists" },
  { label: "Sculptures", href: "/sculptures" },
  { label: "Curated Collections", href: "/curated-collections" },
  { label: "Custom Art", href: "/custom-art" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isActive = (href) => pathname === href;

  const submitSearch = (e) => {
    e.preventDefault();
    const q = searchValue.trim();
    navigate(q ? `/discover?search=${encodeURIComponent(q)}` : "/discover");
    setSearchOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      {/*
        Fixed h-[76px] + px-12 + a 7-item nav row with no wrapping is what
        broke this on smaller screens. Now: fluid height (py instead of a
        fixed h-), fluid horizontal padding, the link row only shows at
        lg (≥1024px) and below that collapses into a hamburger + slide-down
        panel instead of squeezing/overflowing.
      */}
      <nav className="w-full bg-[#fffefe] border-b border-[#eee8e3] font-sans">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-12">

          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center">
            <img src={logo} alt="Athenura" className="h-9 w-auto sm:h-10 lg:h-11" />
          </Link>

          {/* Navigation Links — desktop only */}
          <div className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-[26px]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`whitespace-nowrap text-[13px] transition-colors ${
                  isActive(link.href)
                    ? "font-semibold text-[#a65335]"
                    : "text-[#625650] hover:text-[#a85537]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-[19px]">

            {/* Search — click to expand an input, Enter (or the icon) submits.
                Hidden on the very smallest screens; there's a copy of this
                in the mobile menu panel instead. */}
            <div className="relative hidden items-center sm:flex">
              {searchOpen ? (
                <form
                  onSubmit={submitSearch}
                  className="flex items-center gap-1.5 rounded-full border border-[#e6ded8] bg-white px-3 py-1.5"
                >
                  <MdSearch className="shrink-0 text-[#a65335]" size={17} />
                  <input
                    autoFocus
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onBlur={() => {
                      if (!searchValue) setSearchOpen(false);
                    }}
                    placeholder="Search artworks, artists..."
                    className="w-36 bg-transparent text-[13px] text-[#29221e] placeholder:text-[#a8917f] focus:outline-none md:w-48"
                  />
                </form>
              ) : (
                <button
                  type="button"
                  aria-label="Search"
                  onClick={() => setSearchOpen(true)}
                  className="border-none bg-transparent p-[3px] text-[#4d4541] hover:text-[#a65335] cursor-pointer"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20L16.2 16.2" />
                  </svg>
                </button>
              )}
            </div>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative border-none bg-transparent p-[3px] text-[#4d4541] hover:text-[#a65335] cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 8 4c1.5 0 3 .7 4 2 1-1.3 2.5-2 4-2a4.8 4.8 0 0 1 4.8 4.8Z" />
              </svg>
              <span className="absolute -top-[7px] -right-[9px] w-4 h-4 rounded-full bg-[#a85a3a] text-white text-[9px] font-bold flex items-center justify-center">
                4
              </span>
            </Link>

            {/* Shopping Bag */}
            <Link
              to="/cart"
              aria-label="Cart"
              className="relative border-none bg-transparent p-[3px] text-[#4d4541] hover:text-[#a65335] cursor-pointer"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M5 8h14l-1 12H6L5 8Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
              <span className="absolute -top-[7px] -right-[9px] w-4 h-4 rounded-full bg-[#a85a3a] text-white text-[9px] font-bold flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Divider + Profile — desktop only, hidden once things get tight */}
            <div className="hidden h-[30px] w-px bg-[#e6ded8] sm:block" />
            <Link
              to="/profile"
              aria-label="Profile"
              className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d6c4ae] to-[#b99a78] text-[9px] font-semibold text-white sm:flex"
            >
              AN
            </Link>

            {/* Hamburger — shows below lg, where the link row is hidden */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-[4px] border-none bg-transparent text-[#4d4541] hover:bg-[#f1e4d8] lg:hidden"
            >
              {menuOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet menu panel */}
        {menuOpen && (
          <div className="border-t border-[#eee8e3] bg-[#fffefe] px-4 pb-4 pt-3 sm:px-6 lg:hidden">
            <form
              onSubmit={submitSearch}
              className="mb-3 flex items-center gap-1.5 rounded-full border border-[#e6ded8] bg-white px-3 py-2"
            >
              <MdSearch className="shrink-0 text-[#a65335]" size={17} />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search artworks, artists..."
                className="w-full bg-transparent text-[14px] text-[#29221e] placeholder:text-[#a8917f] focus:outline-none"
              />
            </form>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-[4px] px-2 py-2.5 text-[14px] ${
                  isActive(link.href)
                    ? "font-semibold text-[#a65335]"
                    : "text-[#625650] hover:bg-[#f1e4d8] hover:text-[#a85537]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>


      {/* ================= ANNOUNCEMENT BAR ================= */}
      {/*
        Fixed h-[55px] + a single no-wrap row is what clipped this on
        mobile. Now it wraps onto multiple lines and the height is fluid
        (py instead of h-), with smaller type below sm.
      */}
      <div className="w-full bg-[#f4e7d9] px-4 py-2.5 font-sans sm:px-6">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-[10px] gap-y-1 text-center text-[13px] sm:text-[15px] lg:text-[16px]">

          <span className="text-[#9b5638] text-[16px] sm:text-[18px]">
            <MdOutlineVerified />
          </span>

          <strong className="text-[12px] tracking-[0.4px] text-[#8c4d34] sm:text-[15px]">
            SPRING VERNISSAGE 2026
          </strong>

          <span className="hidden text-[#c2a99a] mx-[3px] sm:inline">|</span>

          <span className="hidden text-[#6a5145] md:inline">
            Over 120 newly curated original sculptures and gallery canvases
            added this week
          </span>

          <a href="/discover" className="ml-1 font-semibold text-[#934c31] no-underline sm:ml-2">
            Explore Catalogue
            <span className="ml-[5px] text-[14px]">→</span>
          </a>

        </div>
      </div>
    </>
  );
};

export default Navbar;
