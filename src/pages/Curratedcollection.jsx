import React from "react";
import CuratedEnsembles from "../Components/CuratedEnsembles";
import SpatialHarmonySection from "../Components/SpatialHarmonySection";
import {
  ArrowRight,
  BookOpen,
  Search,
  Sparkles,
  UserRound,
  Camera,
  ChevronDown 
} from "lucide-react";

const categories = [
  "All Ensembles (24)",
  "Architectural Serenity",
  "Raw Earth & Minerals",
  "Monochrome & Light",
  "Modern Expression",
];

const CollectionsHero = () => {
  return (
    <div className="w-full">

      {/* =====================================================
          SECTION 1 — COLLECTIONS HERO
      ====================================================== */}

      <section className="w-full bg-[#fffaf6] text-[#241914]">

        {/* TOP ANNOUNCEMENT BAR */}
        <div className="border-b border-[#eadbce] bg-[#f4e5d7]">
          <div className="mx-auto flex min-h-[32px] max-w-[1500px] items-center justify-between gap-4 px-5 text-[9px] sm:px-8 md:px-10 lg:px-[4.7%]">

            {/* Left */}
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">

              <span className="flex shrink-0 items-center gap-1.5 font-semibold uppercase tracking-[0.8px] text-[#864329]">
                <span className="text-[10px]">•</span>

                <span>
                  Volume IV Now Unveiled
                </span>
              </span>

              <span className="hidden text-[#a87860] sm:inline">
                •
              </span>

              <span className="hidden truncate text-[#755b50] sm:inline">
                6 New Curatorial Stories &amp; Direct-from-Atelier Acquisitions
              </span>

            </div>


            {/* Right */}
            <div className="hidden shrink-0 items-center gap-3 text-[#604b41] md:flex">

              <a
                href="#"
                className="flex items-center gap-1.5 transition hover:text-[#984c30]"
              >
                <BookOpen
                  size={11}
                  strokeWidth={1.6}
                />

                Request Physical Lookbook
              </a>

              <span className="text-[#b89784]">
                /
              </span>

              <span>
                Curatorial Desk: Geneva • Kyoto • New York
              </span>

            </div>

          </div>
        </div>


        {/* MAIN HERO */}
        <div className="mx-auto max-w-[1500px] px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 md:px-10 lg:px-[4.7%] lg:pb-12 lg:pt-12">

          {/* TOP META */}
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            {/* Editorial Badge */}
            <div>
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-[#f7eadf]
                  px-3
                  py-1.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.5px]
                  text-[#984c30]
                "
              >
                <Sparkles
                  size={11}
                  strokeWidth={1.7}
                />

                Editorial Ensembles • Seasonal Volume IV
              </span>
            </div>


            {/* Catalogue Info */}
            <div className="flex items-center gap-2 text-[8px] font-medium uppercase tracking-[0.5px] text-[#846b60] sm:text-[9px]">

              <span>
                Catalogue Ref. ART-2025-V4
              </span>

              <span>
                •
              </span>

              <span>
                Indexed Ensembles: 24 Total
              </span>

            </div>

          </div>


          {/* TITLE + CONSULTATION CARD */}
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_300px] lg:items-start lg:gap-12">

            {/* LEFT */}
            <div>

              <h1
                className="
                  font-serif
                  text-[45px]
                  font-normal
                  leading-[0.98]
                  tracking-[-1.2px]
                  text-[#17110e]
                  sm:text-[55px]
                  md:text-[60px]
                  lg:text-[62px]
                "
              >
                Curated Collections
              </h1>


              <p
                className="
                  mt-4
                  max-w-[650px]
                  text-[14px]
                  leading-[1.65]
                  text-[#644f45]
                  sm:text-[15px]
                  md:text-[16px]
                "
              >
                Thoughtfully assembled ensembles of original works,
                handcrafted sculptures, and tactile vessels. Harmonized by
                architectural interior, mineral palette, and emotional
                resonance.
              </p>

            </div>


            {/* CONSULTATION CARD */}
            <div
              className="
                rounded-[8px]
                bg-[#f7eadc]
                p-4
                shadow-[0_2px_5px_rgba(70,45,30,0.03)]
              "
            >

              <div className="flex gap-3">

                {/* Icon */}
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-[7px]
                    bg-[#efddcc]
                    text-[#984c30]
                  "
                >
                  <UserRound
                    size={15}
                    strokeWidth={1.6}
                  />
                </div>


                {/* Content */}
                <div>

                  <h3 className="text-[12px] font-semibold text-[#30221c]">
                    Seeking Bespoke Harmony?
                  </h3>

                  <p className="mt-1 text-[10px] leading-[1.45] text-[#735e53]">
                    Our art advisory team pairs original masterworks directly
                    to your architectural blueprints.
                  </p>

                  <a
                    href="#"
                    className="
                      mt-2
                      inline-flex
                      items-center
                      gap-1
                      text-[10px]
                      font-semibold
                      text-[#984c30]
                      transition
                      hover:text-[#71351f]
                    "
                  >
                    Book Curatorial Consultation

                    <ArrowRight
                      size={11}
                      strokeWidth={1.7}
                    />
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* FILTER + SEARCH */}
          <div className="mt-9">

            <div className="flex flex-col gap-3 xl:flex-row xl:items-center">

              {/* Categories */}
              <div
                className="
                  flex
                  min-w-0
                  gap-2
                  overflow-x-auto
                  pb-1
                  xl:flex-1
                "
              >

                {categories.map((category, index) => (

                  <button
                    key={category}
                    type="button"
                    className={`
                      shrink-0
                      rounded-[9px]
                      px-3.5
                      py-2.5
                      text-[10px]
                      font-medium
                      transition-all
                      duration-200
                      ${
                        index === 0
                          ? "bg-[#97482b] text-white shadow-sm"
                          : "bg-[#f8eadc] text-[#654f45] hover:bg-[#efddcd] hover:text-[#8e452c]"
                      }
                    `}
                  >
                    {category}
                  </button>

                ))}

              </div>


              {/* Search */}
              <div className="relative w-full xl:w-[270px] xl:shrink-0">

                <Search
                  size={14}
                  strokeWidth={1.7}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-[#9a8175]
                  "
                />

                <input
                  type="text"
                  placeholder="Search within collections..."
                  className="
                    h-[35px]
                    w-full
                    rounded-[9px]
                    border
                    border-[#eee1d7]
                    bg-white
                    pl-9
                    pr-3
                    text-[10px]
                    text-[#4c3931]
                    outline-none
                    placeholder:text-[#a8958b]
                    transition
                    focus:border-[#c8997e]
                    focus:ring-2
                    focus:ring-[#d8b29d]/20
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 2 — FEATURED COLLECTION
      ====================================================== */}

      <section className="w-full bg-[#fff2e3] px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-[4%] lg:py-14">

        <div className="mx-auto max-w-[1400px]">

          {/* MAIN COLLECTION CARD */}
          <div
            className="
              overflow-hidden
              rounded-[10px]
              bg-white
              px-5
              py-7
              shadow-[0_3px_10px_rgba(70,45,30,0.04)]
              sm:px-7
              sm:py-8
              md:px-9
              lg:px-10
              lg:py-10
            "
          >

            {/* TOP META */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              {/* Editorial Label */}
              <div className="flex items-center gap-2">

                <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#984c30] text-[8px] text-white">
                  ✦
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.6px] text-[#984c30] sm:text-[9px]">
                  Headlining Editorial Ensemble
                </span>

              </div>


              {/* Curation ID */}
              <p className="text-[8px] uppercase tracking-[0.4px] text-[#8a7064] sm:text-[9px]">
                Curation ID: ENC-ARC-0140
              </p>

            </div>


            {/* MAIN GRID */}
            <div
              className="
                grid
                grid-cols-1
                gap-8
                lg:grid-cols-[0.9fr_1.1fr]
                lg:gap-10
              "
            >

              {/* =================================================
                  LEFT CONTENT
              ================================================== */}

              <div className="flex flex-col">

                {/* Title */}
                <h2
                  className="
                    max-w-[500px]
                    font-serif
                    text-[30px]
                    font-normal
                    leading-[1.08]
                    tracking-[-0.6px]
                    text-[#17110e]
                    sm:text-[36px]
                    md:text-[39px]
                    lg:text-[38px]
                  "
                >
                  Art for Minimal Homes
                  <br />
                  &amp; Architectural Spaces
                </h2>


                {/* CURATOR */}
                <div className="mt-4 flex max-w-[400px] items-center gap-3 rounded-[6px] bg-[#f8eadc] px-3 py-2.5">

                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                    alt="Clara Moreau"
                    className="h-8 w-8 rounded-[3px] object-cover"
                  />

                  <div>

                    <p className="text-[11px] font-medium text-[#30221c]">
                      Curated by Clara Moreau
                    </p>

                    <p className="mt-0.5 text-[8px] text-[#80695d]">
                      Head of Curatorial Studies, ArtNest Paris
                    </p>

                  </div>

                </div>


                {/* DESCRIPTION */}
                <p className="mt-4 max-w-[430px] text-[10px] leading-[1.65] text-[#705c52] sm:text-[11px]">
                  “Focused on quiet geometry, natural linen textures, and
                  calming colorfields that breathe calmness into modern
                  living. We selected these 140 pieces to complement exposed
                  concrete, raw timber, and expansive ceiling voids.”
                </p>


                {/* MINERAL PALETTE */}
                <div className="mt-3">

                  <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.5px] text-[#80675b]">
                    Harmonized Mineral Palette
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">

                    <div className="flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-[#eee0c9]" />

                      <span className="text-[8px] text-[#725d52]">
                        Calcified Bone
                      </span>
                    </div>


                    <div className="flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-[#d7c7ae]" />

                      <span className="text-[8px] text-[#725d52]">
                        Weathered Taupe
                      </span>
                    </div>


                    <div className="flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-[#93452c]" />

                      <span className="text-[8px] text-[#725d52]">
                        Terracotta Slip
                      </span>
                    </div>

                  </div>

                </div>


                {/* STATISTICS */}
                <div
                  className="
                    mt-4
                    grid
                    max-w-[430px]
                    grid-cols-3
                    overflow-hidden
                    rounded-[6px]
                    bg-[#fff0df]
                  "
                >

                  <div className="px-3 py-2.5">
                    <p className="font-serif text-[17px] leading-none text-[#8f442b]">
                      140
                    </p>

                    <p className="mt-1 text-[7px] text-[#796258]">
                      Original Works
                    </p>
                  </div>


                  <div className="border-l border-[#ead5c2] px-3 py-2.5">
                    <p className="font-serif text-[17px] leading-none text-[#8f442b]">
                      32
                    </p>

                    <p className="mt-1 text-[7px] text-[#796258]">
                      Master Artisans
                    </p>
                  </div>


                  <div className="border-l border-[#ead5c2] px-3 py-2.5">
                    <p className="font-serif text-[17px] leading-none text-[#8f442b]">
                      100%
                    </p>

                    <p className="mt-1 text-[7px] text-[#796258]">
                      Archival Certified
                    </p>
                  </div>

                </div>


                {/* BUTTONS */}
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">

                  <button
                    type="button"
                    className="
                      inline-flex
                      h-9
                      items-center
                      justify-center
                      gap-2
                      rounded-[4px]
                      bg-[#97482b]
                      px-4
                      text-[9px]
                      font-semibold
                      text-white
                      shadow-sm
                      transition
                      duration-200
                      hover:bg-[#803d25]
                    "
                  >
                    Explore Collection (140 Works)

                    <ArrowRight
                      size={12}
                      strokeWidth={1.7}
                    />
                  </button>


                  <button
                    type="button"
                    className="
                      inline-flex
                      h-9
                      items-center
                      justify-center
                      gap-2
                      rounded-[4px]
                      bg-[#f7eadf]
                      px-4
                      text-[9px]
                      font-medium
                      text-[#6e5144]
                      transition
                      duration-200
                      hover:bg-[#efdfd1]
                    "
                  >
                    <Camera
                      size={11}
                      strokeWidth={1.7}
                    />

                    View Room Dialogue
                  </button>

                </div>

              </div>


              {/* =================================================
                  RIGHT ARTWORK GALLERY
              ================================================== */}

              <div className="relative min-h-[360px] sm:min-h-[410px] lg:min-h-[400px]">

                {/* MAIN ARTWORK */}
                <div
                  className="
                    absolute
                    left-0
                    top-10
                    w-[57%]
                    overflow-hidden
                    rounded-[5px]
                    bg-[#eee8e0]
                    shadow-[0_5px_12px_rgba(60,40,25,0.12)]
                    transition
                    duration-300
                    hover:-translate-y-1
                  "
                >

                  <div className="relative aspect-[0.83/1]">

                    <img
                      src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=85"
                      alt="Bas Relief No. 8"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 px-3 py-2">

                      <p className="text-[9px] font-medium text-[#44342c]">
                        Bas-Relief No. 8
                      </p>

                      <p className="text-[7px] text-[#8a7469]">
                        Lars Eklund • €2,400
                      </p>

                    </div>

                  </div>

                </div>


                {/* MAIN CAPTION */}
                <p className="absolute left-[8%] top-[calc(100%-36px)] w-[50%] text-center text-[7px] text-[#78635a]">
                  Focal Wall Work • Plaster &amp; Raw Flax
                </p>


                {/* TOP RIGHT ARTWORK */}
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    w-[48%]
                    overflow-hidden
                    rounded-[5px]
                    bg-[#eee8e0]
                    shadow-[0_5px_12px_rgba(60,40,25,0.12)]
                    transition
                    duration-300
                    hover:-translate-y-1
                  "
                >

                  <div className="relative aspect-[0.95/1]">

                    <img
                      src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=85"
                      alt="Vessel in Ochre Slip"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 px-2 py-1.5">

                      <p className="text-[7px] font-medium text-[#44342c]">
                        Vessel in Ochre Slip
                      </p>

                      <p className="text-[6px] text-[#8a7469]">
                        Mireille Ortiz • €850
                      </p>

                    </div>

                  </div>

                </div>


                {/* TOP CAPTION */}
                <p className="absolute right-[2%] top-[calc(48%+8px)] w-[45%] text-center text-[7px] text-[#78635a]">
                  Pedestal Sculpture • Stoneware
                </p>


                {/* BOTTOM RIGHT ARTWORK */}
                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-[48%]
                    overflow-hidden
                    rounded-[5px]
                    bg-[#eee8e0]
                    shadow-[0_5px_12px_rgba(60,40,25,0.12)]
                    transition
                    duration-300
                    hover:-translate-y-1
                  "
                >

                  <div className="relative aspect-[1.75/1]">

                    <img
                      src="https://images.unsplash.com/photo-1577083552431-6e5fd01988a5?auto=format&fit=crop&w=700&q=85"
                      alt="Silent Geometry II"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 px-2 py-1.5">

                      <p className="text-[7px] font-medium text-[#44342c]">
                        Silent Geometry II
                      </p>

                      <p className="text-[6px] text-[#8a7469]">
                        Elena Rousseau • €1,850
                      </p>

                    </div>

                  </div>

                </div>


                {/* BOTTOM CAPTION */}
                <p className="absolute bottom-[-14px] right-[4%] w-[42%] text-center text-[7px] text-[#78635a]">
                  Wall Study • Mineral Pigment on Canvas
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
      


      <CuratedEnsembles />
      <SpatialHarmonySection/>
    </div>
  );
};

export default CollectionsHero;