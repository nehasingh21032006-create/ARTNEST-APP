import React from "react";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    title: "Art for Minimal Homes",
    description:
      "Quiet palettes, textural restraint, and subtle organic geometric studies designed to cultivate architectural serenity.",
    curator: "Clara Moreau",
    artworks: "140 ARTWORKS",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Contemporary Expressions",
    description:
      "Bold gestures, visceral pigment densities, and emotive abstractions that anchor expansive high-ceiling interiors.",
    curator: "Julian Sterling",
    artworks: "215 ARTWORKS",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Earth & Ceramic Forms",
    description:
      "Tactile kiln-fired clay vessels, raku ceramics, and raw stoneware celebrating organic imperfections and natural minerals.",
    curator: "Hana Takahashi",
    artworks: "95 ARTWORKS",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=85",
  },
];

const CuratedCollections = () => {
  return (
    <section className="w-full bg-[#fff2e3] px-5 py-12 sm:px-8 sm:py-14 lg:px-[4.5%] lg:py-16">
      
      <div className="mx-auto max-w-[1400px]">

        {/* ================= HEADER ================= */}
        <div className="mb-8 sm:mb-10 lg:mb-9">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            {/* Left Content */}
            <div className="max-w-[550px]">

              <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[1px] text-[#9d4f32] sm:text-[11px]">
                Themed Ensembles
              </p>

              <h2 className="font-serif text-[34px] font-normal leading-[1.05] tracking-[-0.5px] text-[#17120f] sm:text-[40px] lg:text-[42px]">
                Curated Collections
              </h2>

              <p className="mt-2.5 max-w-[510px] text-[13px] leading-[1.55] text-[#604f47] sm:text-[14px]">
                Cohesive bodies of work assembled by our international
                advisory board to complete bespoke residential and
                architectural spaces.
              </p>

            </div>


            {/* Explore Link */}
            <a
              href="#"
              className="group flex w-fit items-center gap-1.5 text-[11px] font-medium text-[#98482e] transition hover:text-[#71351f]"
            >
              Explore All Series

              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

          </div>

        </div>


        {/* ================= COLLECTION GRID ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">

          {collections.map((collection) => (
            <article
              key={collection.title}
              className="group overflow-hidden rounded-[7px] bg-white shadow-[0_4px_10px_rgba(70,45,30,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(70,45,30,0.12)]"
            >

              {/* ================= IMAGE ================= */}
              <div className="relative aspect-[1.75/1] overflow-hidden bg-[#e8dfd4]">

                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Artwork Count */}
                <div className="absolute left-4 top-4">
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.4px] text-[#9a4e33] shadow-sm backdrop-blur-sm">
                    {collection.artworks}
                  </span>
                </div>

              </div>


              {/* ================= CARD CONTENT ================= */}
              <div className="flex min-h-[198px] flex-col px-5 pb-5 pt-5 sm:px-5">

                {/* Title */}
                <h3 className="max-w-[390px] font-serif text-[25px] font-normal leading-[1.18] tracking-[-0.2px] text-[#171311] sm:text-[26px]">
                  {collection.title}
                </h3>


                {/* Description */}
                <p className="mt-2.5 max-w-[390px] text-[12px] leading-[1.6] text-[#755f55] sm:text-[12.5px]">
                  {collection.description}
                </p>


                {/* Bottom Row */}
                <div className="mt-auto flex items-end justify-between gap-4 pt-6">

                  {/* Curator */}
                  <p className="text-[10px] text-[#735e55] sm:text-[10.5px]">
                    Curated by{" "}
                    <span className="font-medium text-[#604b42]">
                      {collection.curator}
                    </span>
                  </p>


                  {/* Browse Link */}
                  <a
                    href="#"
                    className="group/link flex shrink-0 items-center gap-1 text-[10px] font-medium text-[#98482e] transition hover:text-[#70351f]"
                  >
                    Browse Collection

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.6}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CuratedCollections;