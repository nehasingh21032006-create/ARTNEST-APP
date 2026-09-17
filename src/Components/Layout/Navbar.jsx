import { useState } from 'react'
import logo from '../../assets/logo.png'


const NAV_LINKS = [
  { label: 'Discover', href: '/discover' },
  { label: 'Artists', href: '/artists' },
  { label: 'Curated Collections', href: '/collections' },
  { label: 'Custom Art', href: '/custom-art' },
  { label: 'Sculptures', href: '/sculptures' },
]

function IconButton({ label, count, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative flex h-10 w-10 items-center justify-center rounded-[4px] text-[#3A332A] transition-colors duration-150 ease-out hover:bg-[#F1EFE9]"
    >
      {children}
      {typeof count === 'number' && count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9F5639] px-1 font-['Plus_Jakarta_Sans'] text-[10px] font-medium leading-none text-[#FEFEFB]">
          {count}
        </span>
      )}
    </button>
  )
}

export default function Navbar({ wishlistCount = 0, cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#D9D0C7] bg-[#FEFEFB]/95 backdrop-blur font-['Plus_Jakarta_Sans']">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:px-16">
        <a href="/" className="flex shrink-0 items-center">
          <img src={logo} alt="Athenura" className="h-11 w-auto sm:h-12" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium tracking-[0.01em] text-[#3A332A] transition-colors duration-150 ease-out hover:text-[#9F5639]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="mr-2 hidden items-center rounded-[4px] border border-[#D9D0C7] bg-[#FEFEFB] px-3 py-2 focus-within:border-[#9F5639] focus-within:ring-2 focus-within:ring-[rgba(159,86,57,0.15)] md:flex">
            <svg className="h-4 w-4 shrink-0 text-[#A28F7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.2-3.2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search artworks, artists..."
              className="ml-2 w-40 bg-transparent text-[14px] text-[#3A332A] placeholder:text-[#A28F7D] focus:outline-none xl:w-56"
            />
          </div>

          <IconButton label="Wishlist" count={wishlistCount}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M12 20s-7.5-4.6-10-9.1C.5 7.4 2 4 5.6 4c2 0 3.4 1 4.4 2.5C11 5 12.4 4 14.4 4 18 4 19.5 7.4 22 10.9 19.5 15.4 12 20 12 20Z" strokeLinejoin="round" />
            </svg>
          </IconButton>

          <IconButton label="Cart" count={cartCount}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M6 7h12l-1 12.5a1 1 0 0 1-1 .9H8a1 1 0 0 1-1-.9L6 7Z" strokeLinejoin="round" />
              <path d="M9 7V5.5a3 3 0 0 1 6 0V7" strokeLinecap="round" />
            </svg>
          </IconButton>

          <a
            href="/login"
            className="ml-1 hidden rounded-[4px] bg-[#9F5639] px-5 py-2.5 text-[14px] font-medium tracking-[0.01em] text-[#FEFEFB] transition-colors duration-150 ease-out hover:bg-[#89482F] sm:block"
          >
            Sign in
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-[4px] text-[#3A332A] hover:bg-[#F1EFE9] lg:hidden"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#D9D0C7] bg-[#FEFEFB] px-4 pb-4 pt-2 sm:px-8 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block rounded-[4px] px-2 py-2.5 text-[15px] font-medium text-[#3A332A] hover:bg-[#F1EFE9]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/login"
            className="mt-2 block rounded-[4px] bg-[#9F5639] px-4 py-2.5 text-center text-[14px] font-medium text-[#FEFEFB]"
          >
            Sign in
          </a>
        </nav>
      )}
    </header>
  )
}
