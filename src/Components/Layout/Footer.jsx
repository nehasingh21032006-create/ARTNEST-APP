import { useState } from 'react'
import logo from '../../assets/logo.png'


const COLUMNS = [
  {
    heading: 'Explore',
    links: [
      { label: 'Discover', href: '/discover' },
      { label: 'Artists', href: '/artists' },
      { label: 'Curated Collections', href: '/collections' },
      { label: 'Custom Art', href: '/custom-art' },
      { label: 'Sculptures', href: '/sculptures' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Athenura', href: '/about' },
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
    <footer className="bg-[#362F26] font-['Plus_Jakarta_Sans'] text-[#d8c3af]">
      <div className="mx-auto max-w-[1440px] px-4 pb-10 pt-14 sm:px-8 md:pt-20 lg:px-16">
        <div className="grid grid-cols-1 gap-12 border-b border-[rgba(252,239,225,0.12)] pb-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="Athenura" className="h-11 w-auto" />
            <p className="mt-4 max-w-xs text-[16px] leading-7 text-[#d8c3af]">
              Original paintings, sculpture, and custom commissions from
              independent artists &mdash; verified for provenance and shipped
              with archival care.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 max-w-xs">
              <label
                htmlFor="footer-email"
                className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#A28F7D]"
              >
                Get new arrivals in your inbox
              </label>
              <div className="mt-2 flex items-center gap-2 border-b border-[rgba(252,239,225,0.2)] pb-2 focus-within:border-[#9F5639]">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full bg-transparent text-[16px] text-[#FCEFE1] placeholder:text-[#A28F7D] focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 text-[14px] font-medium tracking-[0.01em] text-[#c98a68] transition-colors duration-150 ease-out hover:text-[#e0a583]"
                >
                  Subscribe
                </button>
              </div>
              {submitted && (
                <p className="mt-2 text-[14px] text-[#c98a68]">You&apos;re on the list.</p>
              )}
            </form>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-['Playfair_Display'] text-[19px] leading-[27px] text-[#FCEFE1]">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-[#d8c3af] transition-colors duration-150 ease-out hover:text-[#FCEFE1]"
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
          <p className="text-[14px] text-[#A28F7D]">
            &copy; {new Date().getFullYear()} Athenura. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#A28F7D] transition-colors duration-150 ease-out hover:text-[#FCEFE1]"
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
