import React from "react";
import { IoIosColorPalette } from "react-icons/io";
import {
  Store,
  BadgeCheck,
  MapPin,
  LockKeyhole,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";

const assuranceItems = [
  {
    icon: Store,
    title: "Direct-from-Artist Pricing",
    description:
      "Eliminate opaque gallery margins. Over 85% of each sale flows straight to the independent artist's working studio.",
    link: "Fair Exchange Model",
  },
  {
    icon: BadgeCheck,
    title: "Certificate of Authenticity",
    description:
      "Every work arrives with an archival, artist-signed physical certificate with cryptographic provenance registration.",
    link: "Archival Standard",
  },
  {
    icon: MapPin,
    title: "14-Day In-Home Preview",
    description:
      "Experience the artwork in your living space, under natural light and existing decor. If it doesn't resonate, return seamlessly.",
    link: "Risk-Free Guarantee",
  },
  {
    icon: LockKeyhole,
    title: "Secure Escrow Payments",
    description:
      "Funds remain protected in audited bank escrow until your shipment is safely delivered and personally inspected.",
    link: "Bank-Level Escrow",
  },
];

const steps = [
  {
    number: "01",
    title: "Brief & Studio",
    subtitle: "Match",
  },
  {
    number: "02",
    title: "Sketches &",
    subtitle: "Swatches",
  },
  {
    number: "03",
    title: "Creation & Delivery",
    subtitle: "",
  },
];

const AssuranceSection = () => {
  return (
    <section className="w-full bg-[#fffaf6] px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-[3%] lg:py-16">
      <div className="mx-auto max-w-[1400px]">

        {/* =====================================================
            ARTNEST STANDARD
        ====================================================== */}

        <div className="text-center">

          {/* Small Heading */}
          <p className="mb-2 text-[8px] font-semibold uppercase tracking-[1.5px] text-[#984c30] sm:text-[9px]">
            The ARTNEST Standard
          </p>

          {/* Main Heading */}
          <h2 className="font-serif text-[27px] font-normal leading-[1.1] tracking-[-0.4px] text-[#1b1512] sm:text-[32px] md:text-[35px]">
            Collecting with Complete Assurance
          </h2>

          {/* Description */}
          <p className="mx-auto mt-2 max-w-[470px] text-[10px] leading-[1.5] text-[#755f55] sm:text-[11px]">
            We have reimagined the fine art transaction to safeguard
            collectors while ensuring creators receive rightful equity.
          </p>

        </div>


        {/* =====================================================
            ASSURANCE CARDS
        ====================================================== */}

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-15">

          {assuranceItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-[5px]
                  bg-[#f9ecdf]
                  px-3.5
                  py-3.5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_8px_20px_rgba(90,55,35,0.08)]
                  sm:px-4
                  sm:py-4
                "
              >

                {/* Icon */}
                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#e4cdbb] bg-white text-[#9d4f32]">
                  <Icon
                    size={14}
                    strokeWidth={1.7}
                  />
                </div>


                {/* Title */}
                <h3 className="text-[11px] font-medium leading-[1.25] text-[#231a16] sm:text-[15px]">
                  {item.title}
                </h3>


                {/* Description */}
                <p className="mt-1.5 text-[9px] leading-[1.5] text-[#765f55] sm:text-[12px]">
                  {item.description}
                </p>


                {/* Link */}
                <button
                  type="button"
                  className="mt-3 flex items-center gap-1 text-[8px] font-medium text-[#984c30] transition hover:text-[#71341f] sm:text-[10px]"
                >
                  {item.link}

                  <ArrowUpRight
                    size={9}
                    strokeWidth={1.7}
                  />
                </button>

              </div>
            );
          })}

        </div>


        {/* =====================================================
            COMMISSION CTA
        ====================================================== */}

        <div
          className="
            mt-12
            overflow-hidden
            rounded-[10px]
            bg-[#f0dfcf]
            shadow-[0_7px_18px_rgba(70,45,30,0.10)]
            sm:mt-14
            lg:mt-16
          "
        >

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="flex flex-col px-6 py-7 sm:px-8 sm:py-8 md:px-9 lg:px-10 lg:py-9">

              {/* Badge */}
              <div className="mb-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[15px] font-medium uppercase tracking-[0.7px] text-[#8f4a31] shadow-sm">
                  <span className="text-[15px]"><IoIosColorPalette /></span>
                  Bespoke Collaborations
                </span>
              </div>


              {/* Heading */}
              <h2 className="max-w-[430px] font-serif text-[25px] font-normal leading-[1.08] tracking-[-0.4px] text-[#17120f] sm:text-[30px] md:text-[32px]">
                Have a Vision in Mind?
                <br />
                Commission Bespoke Works
                <br />
                From Master Artisans
              </h2>


              {/* Description */}
              <p className="mt-3 max-w-[480px] text-[10px] leading-[1.6] text-[#705b51] sm:text-[13px]">
                Work directly with our roster of master painters, sculptors,
                and ceramists to co-create site-specific centerpieces
                tailored to your room's palette, dimension, and
                architectural character.
              </p>


              {/* Buttons */}
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">

                <button
                  type="button"
                  className="
                    inline-flex
                    h-8
                    items-center
                    justify-center
                    gap-1
                    rounded-[3px]
                    bg-[#a65335]
                    px-3.5
                    text-[9px]
                    sm:text-[10px]
                    font-semibold
                    text-white
                    shadow-sm
                    transition
                    hover:bg-[#8f452b]
                  "
                >
                  Start a Commission

                  <ArrowUpRight
                    size={10}
                    strokeWidth={1.8}
                  />
                </button>


                <button
                  type="button"
                  className="
                    inline-flex
                    h-8
                    items-center
                    justify-center
                    gap-1.5
                    rounded-[3px]
                    bg-white
                    px-3.5
                    text-[9px]
                    sm:text-[10px]
                    font-medium
                    text-[#684f44]
                    transition
                    hover:bg-[#faf5f0]
                  "
                >
                  How Commissions Work

                  <HelpCircle
                    size={10}
                    strokeWidth={1.7}
                  />
                </button>

              </div>


              {/* Steps */}
              <div className="mt-4 grid max-w-[410px] grid-cols-3 gap-2">

                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="
                      min-h-[48px]
                      rounded-[2px]
                      bg-white/75
                      px-2.5
                      py-2
                    "
                  >

                    <p className="text-[7px] sm:text-[9px] font-semibold text-[#b0674d]">
                      Step {step.number}
                    </p>

                    <p className="mt-1 text-[8px] sm:text-[9px] leading-[1.35] text-[#5f4b42]">
                      {step.title}
                      {step.subtitle && (
                        <>
                          <br />
                          {step.subtitle}
                        </>
                      )}
                    </p>

                  </div>
                ))}

              </div>

            </div>


            {/* =================================================
                RIGHT IMAGE
            ================================================== */}

            <div className="relative flex min-h-[300px] items-center justify-center px-6 pb-7 sm:px-8 sm:pb-8 lg:min-h-[340px] lg:px-8 lg:pb-0">

              {/* Image Container */}
              <div className="relative w-full max-w-[390px] overflow-hidden rounded-[4px] shadow-[0_8px_18px_rgba(60,40,25,0.18)]">

                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85"
                  alt="Master artisan working in studio"
                  className="aspect-[1.55/1] h-full w-full object-cover"
                />

                {/* Bottom Artist Info */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-white/95 px-3 py-2.5 backdrop-blur-sm">

                  <div className="flex items-center gap-2">

                    {/* Avatar */}
                    <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#a65335] text-[8px] sm:text-[9px] font-semibold text-white">
                      M
                    </div>

                    <div>
                      <p className="text-[8px] sm:text-[9px] font-semibold text-[#3d3029]">
                        Mateo Rossi Studio
                      </p>

                      <p className="text-[7px] sm:text-[9px] text-[#87746b]">
                        Currently taking 3 spring commissions
                      </p>
                    </div>

                  </div>


                  {/* Available */}
                  <span className="rounded-[2px] bg-[#f1e5d8] px-2 py-1 text-[7px] sm:text-[9px] font-semibold uppercase tracking-wide text-[#9c684f]">
                    Available
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AssuranceSection;