import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Components/Hero'
import { IoMdBrush } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { PiCubeFocus } from "react-icons/pi";
import { FaArrowsToCircle } from "react-icons/fa6";
import { MdTexture } from "react-icons/md";
import { MdOutlineDraw } from "react-icons/md";
import { MdOutlineLayers } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { LuTruck } from "react-icons/lu";
import { LuHeadset } from "react-icons/lu";

import { PiPaintBrushBroadFill } from "react-icons/pi";


// `slug` matches the CATEGORIES ids in Pages/discData.js — clicking a
// medium card sends you to /discover?category=<slug>, and Discover.jsx
// reads that param to pre-select the matching category filter.
// "Mixed Media" has no equivalent category in discData.js yet, so it
// links to Discover with no filter applied (slug: null) instead of
// pointing at a category that doesn't exist.
const mediums = [
  {
    name: "Painting",
    works: "1,420 works",
    icon: IoMdBrush,
    slug: "paintings",
  },
  {
    name: "Sculpture",
    works: "480 works",
    icon: PiCubeFocus,
    slug: "sculptures",
  },
  {
    name: "Ceramics",
    works: "610 works",
    icon: FaArrowsToCircle,
    slug: "ceramics",
  },
  {
    name: "Photography",
    works: "890 works",
    icon: IoCameraOutline,
    slug: "photography",
  },
  {
    name: "Textile",
    works: "340 works",
    icon: MdTexture,
    slug: "textile",
  },
  {
    name: "Digital Art",
    works: "520 works",
    icon: MdOutlineDraw,
    slug: "digital",
  },
  {
    name: "Mixed Media",
    works: "290 works",
    icon: MdOutlineLayers,
    slug: null,
  },
  {
    name: "Printmaking",
    works: "410 works",
    icon: PiPaintBrushBroadFill,
    slug: "printmaking",
  },
];

// ---- Paintings (8, used in the asymmetric "Now Showing" grid) ----
// Real photos of Indian miniature / traditional paintings (Unsplash),
// artists and cities localized for an Indian audience, prices in INR.
const PAINTINGS = [
  {
    title: 'Radha-Krishna Under the Kadamba',
    artist: 'Ananya Deshpande',
    medium: 'Gouache & gold leaf on wasli paper',
    price: '\u20b968,000',
    img: 'https://images.unsplash.com/photo-1719495851801-1caee1db2478?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Court of the Rajput Prince',
    artist: 'Vikram Solanki',
    medium: 'Miniature painting, natural pigments',
    price: '\u20b982,500',
    img: 'https://images.unsplash.com/photo-1714250176002-f1945fb03c6f?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Woman Beneath the Mango Tree',
    artist: 'Meera Iyer',
    medium: 'Watercolor & ink on handmade paper',
    price: '\u20b924,000',
    img: 'https://images.unsplash.com/photo-1714248376481-f3e37e023ec8?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Procession Through the Forest',
    artist: 'Rohan Bhatt',
    medium: 'Tempera on cotton canvas',
    price: '\u20b939,500',
    img: 'https://images.unsplash.com/photo-1713986719526-8c44918a9688?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Peacock Garden',
    artist: 'Kavita Rao',
    medium: 'Gouache on wasli paper',
    price: '\u20b929,900',
    img: 'https://images.unsplash.com/photo-1719498481691-d78f24dcff1b?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Letter From the Monsoon',
    artist: 'Arjun Mehta',
    medium: 'Watercolor on rag paper',
    price: '\u20b918,750',
    img: 'https://images.unsplash.com/photo-1715627156647-8fc249b99b2a?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Village by the Riverbank',
    artist: 'Sneha Kulkarni',
    medium: 'Natural pigment on paper',
    price: '\u20b933,200',
    img: 'https://images.unsplash.com/photo-1714248375969-a48cdc603a3f?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Woman in the Courtyard',
    artist: 'Tanvi Joshi',
    medium: 'Miniature painting, gouache on paper',
    price: '\u20b921,400',
    img: 'https://images.unsplash.com/photo-1714248377458-1e87a445a57d?q=80&w=900&auto=format&fit=crop',
  },
]

// ---- Sculptures (4, its own row) ----
// Real photos of Indian bronze / stone sculpture (Unsplash), sculptors
// and studio towns localized (Swamimalai and Mahabalipuram are real
// centers of South Indian bronze-casting and stone-carving), INR pricing.
const SCULPTURES = [
  {
    title: 'Nataraja, Cosmic Dance',
    artist: 'Muthu Sthapati',
    medium: 'Lost-wax cast bronze',
    price: '\u20b91,45,000',
    img: 'https://images.unsplash.com/photo-1775308637873-241642f89824?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Nataraja, Temple Study',
    artist: 'Ravi Achari',
    medium: 'Panchaloha bronze',
    price: '\u20b91,68,000',
    img: 'https://images.unsplash.com/photo-1780599865000-ee474a52b88c?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Devi Relief, Wall Panel',
    artist: 'Lakshmi Varman',
    medium: 'Hand-carved sandstone',
    price: '\u20b958,000',
    img: 'https://images.unsplash.com/photo-1653455441061-6c21d3643eab?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Guardians of the Gopuram',
    artist: 'Senthil Pillai',
    medium: 'Carved granite, pair',
    price: '\u20b91,12,000',
    img: 'https://images.unsplash.com/photo-1662218347087-6f298fbe368f?q=80&w=900&auto=format&fit=crop',
  },
]

// ---- Artists (6) ----
const ARTISTS = [
  {
    name: 'Ananya Deshpande',
    location: 'Jaipur, Rajasthan',
    bio: 'Works in gouache and gold leaf, continuing the Rajput and Mughal miniature tradition on wasli paper.',
    avatar: 'https://picsum.photos/seed/ananya-deshpande/200/200',
  },
  {
    name: 'Muthu Sthapati',
    location: 'Swamimalai, Tamil Nadu',
    bio: 'A fifth-generation bronze caster, using the lost-wax method passed down since the Chola period.',
    avatar: 'https://picsum.photos/seed/muthu-sthapati/200/200',
  },
  {
    name: 'Meera Iyer',
    location: 'Kochi, Kerala',
    bio: 'Watercolor and ink work rooted in Kerala\u2019s backwaters and monsoon light.',
    avatar: 'https://picsum.photos/seed/meera-iyer/200/200',
  },
  {
    name: 'Vikram Solanki',
    location: 'Udaipur, Rajasthan',
    bio: 'Miniature painter working with natural pigments, trained in the Mewar school of court painting.',
    avatar: 'https://picsum.photos/seed/vikram-solanki/200/200',
  },
  {
    name: 'Kavita Rao',
    location: 'Chennai, Tamil Nadu',
    bio: 'Gouache and botanical studies drawing on Tanjore-style detailing and gold leaf work.',
    avatar: 'https://picsum.photos/seed/kavita-rao/200/200',
  },
  {
    name: 'Senthil Pillai',
    location: 'Mahabalipuram, Tamil Nadu',
    bio: 'Stone carver working in granite and sandstone, from a family of temple sculptors near the shore temples.',
    avatar: 'https://picsum.photos/seed/senthil-pillai/200/200',
  },
]

function EyebrowLabel({ children }) {
  return (
    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.8px] text-[#984c30] sm:text-xs">
      {children}
    </p>
  )
}

function ArtworkCard({ work, tall = false }) {
  return (
    <a
      href="#"
      className="group block overflow-hidden rounded-[10px] border border-[#eee8e3] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(80,50,30,0.10)]"
    >
      <div className={`overflow-hidden bg-[#f8eadc] p-3 ${tall ? 'aspect-[4/5]' : 'aspect-square'}`}>
        <img
          src={work.img}
          alt={work.title}
          className="h-full w-full rounded-[6px] object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className="px-4 py-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-[19px] leading-none text-[#201a17]">
            {work.title}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#f1e4d8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.4px] text-[#875039]">
            <MdOutlineVerified className="text-[12px]" />
            Verified
          </span>
        </div>
        <p className="mt-2 text-[13px] text-[#765e51]">
          {work.artist} &middot; {work.medium}
        </p>
        <p className="mt-2 text-[15px] font-medium text-[#29221e]">
          {work.price}
        </p>
      </div>
    </a>
  )
}

function ArtistCard({ artist }) {
  return (
    <div className="rounded-[10px] bg-[#f8eadc] px-6 py-8">
      <img
        src={artist.avatar}
        alt={artist.name}
        className="h-16 w-16 rounded-full object-cover"
      />
      <h3 className="mt-4 font-serif text-[20px] leading-none text-[#201a17]">
        {artist.name}
      </h3>
      <span className="mt-2 inline-block rounded-full bg-white px-3 py-1 text-[11px] font-medium tracking-[0.3px] text-[#765e51] shadow-[0_2px_5px_rgba(80,50,30,0.06)]">
        {artist.location}
      </span>
      <p className="mt-3 text-[14px] leading-[1.55] text-[#665650]">
        {artist.bio}
      </p>
      <a
        href="/artists"
        className="mt-4 inline-block border-b border-[#a65335]/40 pb-0.5 text-[13px] font-semibold text-[#a65335] transition-colors hover:border-[#8f462c] hover:text-[#8f462c]"
      >
        View studio
      </a>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Hero/>
      <section className="w-full bg-white px-5 sm:px-8 lg:px-[5%] py-12 sm:py-14 lg:py-16">
      
      {/* ================= HEADER ================= */}
      <div className="max-w-[1600px] mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8 sm:mb-10">

          {/* Left Heading */}
          <div>
            <EyebrowLabel>Department Index</EyebrowLabel>

            <h2 className="font-serif text-[#201a17] text-[34px] sm:text-[40px] lg:text-[42px] leading-none font-normal">
              Explore by Medium
            </h2>
          </div>


          {/* Right Description */}
          <p className="text-[#665650] text-sm sm:text-base leading-[1.55] max-w-[440px] lg:mb-[-2px]">
            Hand-vetted selections across studio disciplines,
            <br className="hidden sm:block" />
            from kiln-fired clay to archival pigments.
          </p>

        </div>


        {/* ================= MEDIUM CARDS ================= */}

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-8
            gap-3
            sm:gap-4
          "
        >

          {mediums.map((medium, index) => (
            <Link
              key={index}
              to={medium.slug ? `/discover?category=${medium.slug}` : "/discover"}
              className="
                group
                min-h-[150px]
                sm:min-h-[160px]
                lg:min-h-[190px]

                bg-[#f8eadc]

                rounded-[10px]

                flex
                flex-col
                items-center
                justify-center

                px-3

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[0_10px_25px_rgba(80,50,30,0.10)]

                cursor-pointer
              "
            >

              {/* Icon Container */}
              <div
                className="
                  w-[56px]
                  h-[56px]

                  sm:w-[58px]
                  sm:h-[58px]

                  bg-white

                  rounded-[17px]

                  flex
                  items-center
                  justify-center

                  shadow-[0_2px_5px_rgba(80,50,30,0.08)]

                  mb-4

                  text-[#984c30]

                  transition-transform
                  duration-300

                  group-hover:scale-105
                "
              >
                <span
                  className={`
                    ${
                      medium.name === "Textile"
                        ? "text-[17px] font-semibold tracking-[-2px]"
                        : "text-[25px]"
                    }
                  `}
                >
                  <medium.icon />
                </span>
              </div>


              {/* Medium Name */}
              <h3
                className="
                  text-[#171310]

                  text-[18px]
                  sm:text-[19px]

                  font-medium

                  leading-none

                  text-center
                "
              >
                {medium.name}
              </h3>


              {/* Number of Works */}
              <p
                className="
                  text-[#765e51]

                  text-[13px]
                  sm:text-[14px]

                  font-medium

                  tracking-[0.3px]

                  mt-4

                  text-center
                "
              >
                {medium.works}
              </p>

            </Link>
          ))}

        </div>

      </div>

    </section>

      {/* ================= PAINTINGS ================= */}
      <section className="w-full bg-[#fff8f3] px-5 sm:px-8 lg:px-[5%] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b border-[#eee8e3] pb-6 sm:mb-10">
            <div>
              <EyebrowLabel>Now Showing &middot; Paintings</EyebrowLabel>
              <h2 className="font-serif text-[34px] leading-none text-[#201a17] sm:text-[40px] lg:text-[42px]">
                This week&apos;s exhibition
              </h2>
            </div>
            <a
              href="/discover"
              className="shrink-0 border-b border-[#a65335]/40 pb-0.5 text-[13px] font-semibold text-[#a65335] transition-colors hover:border-[#8f462c] hover:text-[#8f462c]"
            >
              View all paintings
            </a>
          </div>

          {/* Row 1 — asymmetric feature */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
            <div className="sm:col-span-1 lg:col-span-5">
              <ArtworkCard work={PAINTINGS[0]} tall />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:col-span-1 lg:col-span-7 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <ArtworkCard work={PAINTINGS[1]} />
              </div>
              <ArtworkCard work={PAINTINGS[2]} />
              <ArtworkCard work={PAINTINGS[3]} />
            </div>
          </div>

          {/* Row 2 — even grid, more inventory */}
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PAINTINGS.slice(4).map((work) => (
              <ArtworkCard key={work.title} work={work} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SCULPTURES ================= */}
      <section className="w-full bg-white px-5 sm:px-8 lg:px-[5%] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b border-[#eee8e3] pb-6 sm:mb-10">
            <div>
              <EyebrowLabel>Now Showing &middot; Sculpture</EyebrowLabel>
              <h2 className="font-serif text-[34px] leading-none text-[#201a17] sm:text-[40px] lg:text-[42px]">
                Form, cast and carved
              </h2>
            </div>
            <a
              href="/sculptures"
              className="shrink-0 border-b border-[#a65335]/40 pb-0.5 text-[13px] font-semibold text-[#a65335] transition-colors hover:border-[#8f462c] hover:text-[#8f462c]"
            >
              View all sculptures
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SCULPTURES.map((work) => (
              <ArtworkCard key={work.title} work={work} tall />
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARTIST SPOTLIGHT ================= */}
      <section className="w-full bg-[#fff8f3] px-5 sm:px-8 lg:px-[5%] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          <EyebrowLabel>Artist Spotlight</EyebrowLabel>
          <h2 className="font-serif text-[34px] leading-none text-[#201a17] sm:text-[40px] lg:text-[42px]">
            The studios behind this season&apos;s work
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ARTISTS.map((artist) => (
              <ArtistCard key={artist.name} artist={artist} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/artists"
              className="inline-block rounded-[3px] border border-[#a65335] px-6 py-2.5 text-[13px] font-semibold text-[#a65335] transition-colors hover:bg-[#a65335] hover:text-white"
            >
              View all artists
            </a>
          </div>
        </div>
      </section>

      {/* ================= CURATED COLLECTIONS ================= */}
      <section className="w-full bg-white px-5 sm:px-8 lg:px-[5%] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          <EyebrowLabel>Curated Collections</EyebrowLabel>
          <h2 className="font-serif text-[34px] leading-none text-[#201a17] sm:text-[40px] lg:text-[42px]">
            Two ways into the collection
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <a href="/curated-collections" className="group relative overflow-hidden rounded-[10px]">
              <img
                src="https://picsum.photos/seed/collection-coastal/900/650"
                alt="Coastal Light collection"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(25,17,12,0.75)] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#f0dfd0]">
                  Collection
                </span>
                <h3 className="mt-1 font-serif text-[26px] leading-none text-white">
                  Coastal Light
                </h3>
              </div>
            </a>
            <a href="/curated-collections" className="group relative overflow-hidden rounded-[10px]">
              <img
                src="https://picsum.photos/seed/collection-form/900/650"
                alt="Studies in Form collection"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(25,17,12,0.75)] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#f0dfd0]">
                  Collection
                </span>
                <h3 className="mt-1 font-serif text-[26px] leading-none text-white">
                  Studies in Form
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="w-full border-y border-[#eee8e3] bg-[#fff8f3]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 divide-y divide-[#eee8e3] px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-[5%]">
          {[
            {
              title: 'Authenticity guaranteed',
              body: 'Every work is verified and issued a provenance certificate before it ships.',
              icon: MdOutlineVerified,
            },
            {
              title: 'White-glove shipping',
              body: 'Climate-aware packing and tracked delivery, insured door to door.',
              icon: LuTruck,
            },
            {
              title: 'Collector concierge',
              body: 'Talk to our team about a piece, a commission, or building a collection.',
              icon: LuHeadset,
            },
          ].map((item) => (
            <div key={item.title} className="px-2 py-10 md:px-8">
              <span className="text-[22px] text-[#a65335]">
                <item.icon />
              </span>
              <h3 className="mt-3 font-serif text-[19px] leading-none text-[#201a17]">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#665650]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/*
        ================= CLOSING CTA =================
        Soft cream card with a terracotta border/accent — same treatment
        as the "Curator Pick" card in Hero.jsx — instead of a flat solid
        terracotta fill, so it reads as part of this theme rather than a
        completely different block of color dropped onto the page.
      */}
      <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-[5%] lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-[10px] border border-[#e6ded8] bg-[#f8eadc] px-6 py-14 text-center shadow-[0_15px_30px_rgba(65,43,31,0.08)] sm:px-12 md:py-20">
            <span className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#a65335]">
              Join Athenura
            </span>
            <h2 className="mt-4 font-serif text-[32px] leading-none text-[#201a17] sm:text-[38px]">
              Start a collection, one piece at a time.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[14px] leading-[1.55] text-[#665650]">
              Create a free account to save favorites, follow artists, and
              get early access to new exhibitions.
            </p>
            <a
              href="/signup"
              className="mt-8 inline-block rounded-[3px] bg-[#a65335] px-7 py-3 text-[15px] font-semibold text-white transition-colors duration-150 ease-out hover:bg-[#8f462c]"
            >
              Create your account
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home