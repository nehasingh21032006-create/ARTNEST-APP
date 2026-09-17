import React from 'react'
import Hero from '../Components/Hero'
import { IoMdBrush } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { PiCubeFocus } from "react-icons/pi";
import { FaArrowsToCircle } from "react-icons/fa6";
import { MdTexture } from "react-icons/md";
import { MdOutlineDraw } from "react-icons/md";
import { MdOutlineLayers } from "react-icons/md";
import { PiPaintBrushBroadFill } from "react-icons/pi";
import { SlidersHorizontal } from "lucide-react";
import ArtWorkCard from '../Components/ArtWorkCard';
import CuratedCollections from "../Components/CuratedCollections";
import AssuranceSection from "../Components/AssuranceSection";

const mediums = [
  {
    name: "Painting",
    works: "1,420 works",
    icon: IoMdBrush,
  },
  {
    name: "Sculpture",
    works: "480 works",
    icon: PiCubeFocus,
  },
  {
    name: "Ceramics",
    works: "610 works",
    icon: FaArrowsToCircle,
  },
  {
    name: "Photography",
    works: "890 works",
    icon: IoCameraOutline,
  },
  {
    name: "Textile",
    works: "340 works",
    icon: MdTexture,
  },
  {
    name: "Digital Art",
    works: "520 works",
    icon: MdOutlineDraw,
  },
  {
    name: "Mixed Media",
    works: "290 works",
    icon: MdOutlineLayers,
  },
  {
    name: "Printmaking",
    works: "410 works",
    icon: PiPaintBrushBroadFill,
  },
];

const artworks = [
  {
    title: "Solitude in Terracotta",
    artist: "Elena Vance",
    price: "$1,850",
    medium: "Oil on Canvas",
    size: "90 × 120 cm",
    badge: "ORIGINAL",
    detail: "Provenance Sealed",
    location: "Madrid, Spain",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=85",
  },

  {
    title: "Earthen Vessel No. 04",
    artist: "Mateo Rossi",
    price: "$480",
    medium: "Hand-thrown Stoneware",
    size: "34 × 22 cm",
    badge: "1 OF 1 UNIQUE",
    detail: "Signed by Potter",
    location: "Bologna, Italy",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=85",
  },

  {
    title: "Chromatic Echoes",
    artist: "Siobhan Chen",
    price: "$2,400",
    medium: "Acrylic & Gold Leaf",
    size: "100 × 100 cm",
    badge: "GOLD LEAF",
    detail: "Framed in Walnut",
    location: "Vancouver, Canada",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=85",
  },

  {
    title: "Silent Horizon",
    artist: "David Kaul",
    price: "$950",
    medium: "Archival Pigment Print",
    size: "75 × 100 cm",
    badge: "LIMITED ED. /10",
    detail: "Hahnemühle Paper",
    location: "Nairobi, Kenya",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=85",
  },
];

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
            <p className="text-[#984c30] text-[11px] sm:text-xs font-semibold tracking-[0.8px] uppercase mb-3">
              Department Index
            </p>

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
            <div
              key={index}
              className="
                group
                min-h-[15px]
                sm:min-h-[160px]
                lg:h-[15px]

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

            </div>
          ))}

        </div>

      </div>

    </section>

    <section className="w-full bg-[#fdf8f3] px-5 py-12 sm:px-8 md:px-10 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-[1200px]">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          
          {/* Heading */}
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#a34f32]">
              Curated Selections
            </p>

            <h2 className="font-serif text-[32px] leading-none tracking-[-0.02em] text-[#161616] sm:text-[36px]">
              Featured Artworks
            </h2>

            <p className="mt-3 max-w-[440px] text-[13px] leading-5 text-[#665f59]">
              Every piece is evaluated for archival excellence, medium
              mastery, and distinct artistic voice.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-9 items-center gap-2 rounded-lg bg-[#f2e6da] px-3.5 text-[11px] font-medium text-[#4c4540] transition hover:bg-[#eadacd]"
            >
              <SlidersHorizontal size={13} strokeWidth={1.8} />
              Filter Works
            </button>

            <button
              type="button"
              className="h-9 rounded-lg bg-[#a65335] px-4 text-[11px] font-semibold text-white transition hover:bg-[#91462d]"
            >
              View All (4,890)
            </button>
          </div>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {artworks.map((artwork) => (
            <ArtWorkCard
              key={artwork.title}
              artwork={artwork}
            />
          ))}
        </div>
      </div>
    </section>

    <CuratedCollections />

    <AssuranceSection />

    </div>
  )
}

export default Home
