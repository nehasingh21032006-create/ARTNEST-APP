import { useState } from 'react'
import logo from '../assets/logo.png'


const COLUMNS = [
  {
    heading: 'Explore',
    links: [
      { label: 'Discover', href: '/discover' },
      { label: 'Artists', href: '/artists' },
      { label: 'Curated Collections', href: '/curated-collections' },
      { label: 'Custom Art', href: '/custom-art' },
      { label: 'Sculptures', href: '/sculptures' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'The Journal', href: '/journal' },
      { label: 'Sell your work', href: '/sell' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact us', href: '/contact' },
      { label: 'Shipping & returns', href: '/shipping' },
      { label: 'Authenticity guarantee', href: '/authenticity' },
      { label: 'FAQs', href: '/faq' },
    ],
  },
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer className="border-t border-[#e6ded8] bg-[#f1e4d8] font-sans text-[#625650]">
      <div className="mx-auto max-w-[1450px] px-5 pb-10 pt-14 sm:px-8 md:pt-20 lg:px-[70px]">
        <div className="grid grid-cols-1 gap-12 border-b border-[#e6ded8] pb-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="Athenura" className="h-11 w-auto" />
            <p className="mt-4 max-w-xs text-[15px] leading-[1.65] text-[#5a4c44]">
              Original paintings, sculpture, and custom commissions from
              independent artists &mdash; verified for provenance and shipped
              with archival care.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 max-w-xs">
              <label
                htmlFor="footer-email"
                className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#875039]"
              >
                Get new arrivals in your inbox
              </label>
              <div className="mt-2 flex items-center gap-2 border-b border-[#d8c5b4] pb-2 focus-within:border-[#a65335]">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full bg-transparent text-[15px] text-[#29221e] placeholder:text-[#a8917f] focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 text-[13px] font-semibold text-[#a65335] transition-colors duration-150 ease-out hover:text-[#8f462c]"
                >
                  Subscribe
                </button>
              </div>
              {submitted && (
                <p className="mt-2 text-[13px] text-[#a65335]">You&apos;re on the list.</p>
              )}
            </form>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-serif text-[18px] font-medium leading-none text-[#29221e]">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#5a4c44] transition-colors duration-150 ease-out hover:text-[#a65335]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <p className="text-[13px] text-[#7a6a5f]">
            &copy; {new Date().getFullYear()} Athenura. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#7a6a5f] transition-colors duration-150 ease-out hover:text-[#a65335]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
