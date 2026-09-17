import { useState } from 'react'
import Navbar from '../../../Components/Layout/Navbar'
import Footer from '../../../Components/Layout/Footer'

const FILTERS = ['All Works', 'Paintings', 'Sculpture', 'Works on Paper', 'Photography']

const FEATURED = [
  {
    title: 'Meridian Interior',
    artist: 'Léa Fontaine',
    medium: 'Oil on linen',
    price: '$4,200',
    img: 'https://picsum.photos/seed/meridian/800/1000',
  },
  {
    title: 'Standing Form No. 4',
    artist: 'Kenji Osei',
    medium: 'Cast bronze',
    price: '$7,800',
    img: 'https://picsum.photos/seed/standing-form/1000/700',
  },
  {
    title: 'Quiet Harbor',
    artist: 'Marta Kowalski',
    medium: 'Watercolor on paper',
    price: '$1,150',
    img: 'https://picsum.photos/seed/quiet-harbor/800/800',
  },
  {
    title: 'Untitled (Ochre Study)',
    artist: 'Damian Cole',
    medium: 'Acrylic on canvas',
    price: '$2,600',
    img: 'https://picsum.photos/seed/ochre-study/800/800',
  },
]

const ARTISTS = [
  {
    name: 'Léa Fontaine',
    location: 'Lyon, France',
    bio: 'Works in oil and cold wax, drawn to interior light and the geometry of rooms at rest.',
    avatar: 'https://picsum.photos/seed/lea-fontaine/200/200',
  },
  {
    name: 'Kenji Osei',
    location: 'Accra, Ghana',
    bio: 'A sculptor in bronze and reclaimed steel, exploring the human figure in motion.',
    avatar: 'https://picsum.photos/seed/kenji-osei/200/200',
  },
  {
    name: 'Marta Kowalski',
    location: 'Kraków, Poland',
    bio: 'Watercolorist documenting coastal towns through soft, atmospheric washes.',
    avatar: 'https://picsum.photos/seed/marta-kowalski/200/200',
  },
]

function CuratorialLabel({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-[0.08em] text-[#9F5639] ${className}`}
    >
      <span className="h-px w-4 bg-[#9F5639]" />
      {children}
    </span>
  )
}

function ProvenanceBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-[4px] bg-[rgba(159,86,57,0.08)] px-2.5 py-1">
      <svg className="h-3 w-3 text-[#9F5639]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-[0.08em] text-[#9F5639]">
        Verified
      </span>
    </span>
  )
}

function ArtworkCard({ work, tall = false }) {
  return (
    <a
      href="#"
      className="group block overflow-hidden rounded-[4px] border border-[#D9D0C7] bg-[#FEFEFB] transition-shadow duration-150 ease-out hover:shadow-[0_8px_24px_-4px_rgba(58,51,42,0.06),0_2px_6px_-1px_rgba(58,51,42,0.03)]"
    >
      <div className={`overflow-hidden bg-[#F1EFE9] p-4 ${tall ? 'aspect-[4/5]' : 'aspect-square'}`}>
        <img
          src={work.img}
          alt={work.title}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className="border-t border-[#D9D0C7] px-4 py-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-['Playfair_Display'] text-[22px] leading-[30px] text-[#211b13]">
            {work.title}
          </h3>
          <ProvenanceBadge />
        </div>
        <p className="mt-1 font-['Plus_Jakarta_Sans'] text-[13px] leading-5 text-[#A28F7D]">
          {work.artist} &middot; {work.medium}
        </p>
        <p className="mt-2 font-['Plus_Jakarta_Sans'] text-[15px] font-medium text-[#3A332A]">
          {work.price}
        </p>
      </div>
    </a>
  )
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All Works')

  return (
    <div className="min-h-screen bg-[#F9F8F5] font-['Plus_Jakarta_Sans']">
      <Navbar wishlistCount={2} cartCount={3} />

      {/* Hero — canvas */}
      <section className="border-b border-[#D9D0C7] bg-[#F9F8F5]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 py-16 sm:px-8 md:py-24 lg:grid-cols-12 lg:gap-8 lg:px-16">
          <div className="lg:col-span-5">
            <CuratorialLabel>Autumn Exhibition &middot; 2026</CuratorialLabel>
            <h1 className="mt-5 font-['Playfair_Display'] text-[36px] font-normal leading-[44px] tracking-[-0.01em] text-[#211b13] md:text-[56px] md:leading-[64px] md:tracking-[-0.02em]">
              Original works, held to a gallery's standard.
            </h1>
            <p className="mt-5 max-w-md text-[18px] leading-[28px] text-[#54433d]">
              Athenura connects collectors with independent painters and
              sculptors, every piece verified for provenance and shipped
              with archival care.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#featured"
                className="rounded-[4px] bg-[#9F5639] px-7 py-3 text-[13px] font-medium tracking-[0.01em] text-[#FEFEFB] transition-colors duration-150 ease-out hover:bg-[#89482F]"
              >
                Browse the exhibition
              </a>
              <a
                href="/custom-art"
                className="rounded-[4px] border border-[#3A332A] px-7 py-3 text-[13px] font-medium tracking-[0.01em] text-[#3A332A] transition-colors duration-150 ease-out hover:bg-[#F1EFE9]"
              >
                Commission a work
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="overflow-hidden rounded-[4px] border border-[#D9D0C7] bg-[#F1EFE9] p-6">
              <img
                src="https://picsum.photos/seed/hero-gallery/1200/750"
                alt="Featured gallery wall"
                className="aspect-[16/10] w-full rounded-[2px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters — elevated, distinct from the canvas hero above it */}
      <section className="sticky top-[73px] z-30 border-b border-[#D9D0C7] bg-[#FEFEFB]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center gap-3 overflow-x-auto px-4 py-4 sm:px-8 lg:px-16">
          {FILTERS.map((filter) => {
            const active = filter === activeFilter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-[13px] font-medium tracking-[0.01em] transition-colors duration-150 ease-out ${
                  active
                    ? 'border-[#3A332A] bg-[#3A332A] text-[#FEFEFB]'
                    : 'border-[#D9D0C7] bg-[#FEFEFB] text-[#3A332A] hover:bg-[#F1EFE9]'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>
      </section>

      {/* Featured works — canvas, asymmetric masonry */}
      <section id="featured" className="bg-[#F9F8F5] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#D9D0C7] pb-6">
            <div>
              <CuratorialLabel>Now Showing</CuratorialLabel>
              <h2 className="mt-2 font-['Playfair_Display'] text-[28px] leading-[36px] text-[#211b13] md:text-[40px] md:leading-[48px]">
                This week's exhibition
              </h2>
            </div>
            <a
              href="/discover"
              className="shrink-0 border-b border-[#A28F7D] pb-0.5 text-[13px] font-medium text-[#3A332A] transition-colors hover:border-[#9F5639] hover:text-[#9F5639]"
            >
              View all works
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
            <div className="sm:col-span-1 lg:col-span-5">
              <ArtworkCard work={FEATURED[0]} tall />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:col-span-1 lg:col-span-7 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <ArtworkCard work={FEATURED[1]} />
              </div>
              <ArtworkCard work={FEATURED[2]} />
              <ArtworkCard work={FEATURED[3]} />
            </div>
          </div>
        </div>
      </section>

      {/* Artist spotlight — soft cream, breaks from the canvas tone above */}
      <section className="bg-[#F1EFE9] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16">
          <CuratorialLabel>Artist Spotlight</CuratorialLabel>
          <h2 className="mt-2 font-['Playfair_Display'] text-[28px] leading-[36px] text-[#211b13] md:text-[40px] md:leading-[48px]">
            The studios behind this season's work
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ARTISTS.map((artist) => (
              <div
                key={artist.name}
                className="rounded-[4px] border border-[#D9D0C7] bg-[#FEFEFB] px-6 py-8"
              >
                <img
                  src={artist.avatar}
                  alt={artist.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <h3 className="mt-4 font-['Playfair_Display'] text-[22px] leading-[30px] text-[#211b13]">
                  {artist.name}
                </h3>
                <span className="mt-2 inline-block rounded-full border border-[#D9D0C7] bg-[#F1EFE9] px-3 py-1 text-[11px] font-medium tracking-[0.02em] text-[#A28F7D]">
                  {artist.location}
                </span>
                <p className="mt-3 text-[15px] leading-6 text-[#54433d]">
                  {artist.bio}
                </p>
                <a
                  href="/artists"
                  className="mt-4 inline-block border-b border-[#A28F7D] pb-0.5 text-[13px] font-medium text-[#3A332A] transition-colors hover:border-[#9F5639] hover:text-[#9F5639]"
                >
                  View studio
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated collections — canvas again */}
      <section className="bg-[#F9F8F5] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16">
          <CuratorialLabel>Curated Collections</CuratorialLabel>
          <h2 className="mt-2 font-['Playfair_Display'] text-[28px] leading-[36px] text-[#211b13] md:text-[40px] md:leading-[48px]">
            Two ways into the collection
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <a href="/collections" className="group relative overflow-hidden rounded-[4px]">
              <img
                src="https://picsum.photos/seed/collection-coastal/900/650"
                alt="Coastal Light collection"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211b13]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <CuratorialLabel className="[&_span]:bg-[#FCEFE1] !text-[#FCEFE1]">Collection</CuratorialLabel>
                <h3 className="mt-1 font-['Playfair_Display'] text-[28px] leading-[36px] text-[#FCEFE1]">
                  Coastal Light
                </h3>
              </div>
            </a>
            <a href="/collections" className="group relative overflow-hidden rounded-[4px]">
              <img
                src="https://picsum.photos/seed/collection-form/900/650"
                alt="Studies in Form collection"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211b13]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <CuratorialLabel className="[&_span]:bg-[#FCEFE1] !text-[#FCEFE1]">Collection</CuratorialLabel>
                <h3 className="mt-1 font-['Playfair_Display'] text-[28px] leading-[36px] text-[#FCEFE1]">
                  Studies in Form
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip — elevated, sits between canvas sections */}
      <section className="border-y border-[#D9D0C7] bg-[#FEFEFB]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-[#D9D0C7] px-4 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-16">
          {[
            {
              title: 'Authenticity guaranteed',
              body: 'Every work is verified and issued a provenance certificate before it ships.',
            },
            {
              title: 'White-glove shipping',
              body: 'Climate-aware packing and tracked delivery, insured door to door.',
            },
            {
              title: 'Collector concierge',
              body: 'Talk to our team about a piece, a commission, or building a collection.',
            },
          ].map((item) => (
            <div key={item.title} className="px-2 py-10 md:px-8">
              <h3 className="font-['Playfair_Display'] text-[22px] leading-[30px] text-[#211b13]">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-[#54433d]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/*
        Closing CTA — sits on the light canvas as its own breathing room,
        with the dark panel as a contained, rounded, shadowed CARD rather
        than a full-bleed section. This is what keeps it from visually
        fusing with the footer immediately below: there's a full section
        of #F9F8F5 canvas and generous margin around the dark card on
        every side, so the eye reads three distinct layers (canvas → card
        → footer) instead of one continuous dark block.
      */}
      <section className="bg-[#F9F8F5] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16">
          <div className="rounded-lg bg-[#362F26] px-6 py-14 text-center shadow-[0_20px_48px_-8px_rgba(58,51,42,0.10),0_4px_12px_-2px_rgba(58,51,42,0.04)] sm:px-12 md:py-20">
            <CuratorialLabel className="justify-center [&_span]:bg-[#c98a68] !text-[#c98a68]">
              Join Athenura
            </CuratorialLabel>
            <h2 className="mt-4 font-['Playfair_Display'] text-[28px] leading-[36px] text-[#FCEFE1] md:text-[40px] md:leading-[48px]">
              Start a collection, one piece at a time.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-6 text-[#d8c3af]">
              Create a free account to save favorites, follow artists, and
              get early access to new exhibitions.
            </p>
            <a
              href="/signup"
              className="mt-8 inline-block rounded-[4px] bg-[#9F5639] px-7 py-3 text-[13px] font-medium tracking-[0.01em] text-[#FEFEFB] transition-colors duration-150 ease-out hover:bg-[#89482F]"
            >
              Create your account
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
