import React from "react";
import {
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "Acquiring Elena Vance's oil canvas was an effortless experience. The custom wood crating and the sealed provenance parchment felt equal to any blue-chip gallery in Geneva.",
    name: "Dr. Henriette von Berg",
    role: "Private Collector • Zurich",
  },
  {
    quote:
      "The 14-day preview allowed our design team to view three sculptures under morning and dusk lighting. We kept two. Unmatched curation.",
    name: "Marcus Lin",
    role: "Atelier Studio Architecture • New York",
  },
  {
    quote:
      "As an independent potter, ArtNest connects me to buyers who deeply revere the slow craft of clay. The direct payout system is respectful and clear.",
    name: "Mateo Rossi",
    role: "Ceramist • Bologna",
  },
];

const footerLinks = {
  Marketplace: [
    "Paintings",
    "Sculptures",
    "Ceramics",
    "Digital Art",
    "Photography",
  ],

  Artists: [
    "Meet Artists",
    "Apply to Sell",
    "Artist Guidelines",
  ],

  Services: [
    "Custom Commissions",
    "Art Advisory",
    "Authenticity Guarantee",
  ],

  Company: [
    "About Us",
    "Editorial",
    "Press",
    "Contact",
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#fff3e4] text-[#30231d]">

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}

      <section className="border-b border-[#e3d2c2] px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-[4.8%] lg:py-9">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="
                  flex
                  min-h-[230px]
                  flex-col
                  rounded-[8px]
                  bg-white
                  px-6
                  py-5
                  shadow-[0_2px_5px_rgba(80,50,30,0.04)]
                  ring-1
                  ring-black/[0.02]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_10px_25px_rgba(80,50,30,0.08)]
                  sm:min-h-[235px]
                "
              >

                {/* Stars */}
                <div
                  className="
                    flex
                    items-center
                    gap-[1px]
                    text-[#9d4c2e]
                  "
                  aria-label="5 out of 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="text-[17px] leading-none"
                    >
                      ★
                    </span>
                  ))}
                </div>


                {/* Quote */}
                <p
                  className="
                    mt-3
                    font-serif
                    text-[14px]
                    italic
                    leading-[1.6]
                    text-[#59463e]
                    sm:text-[14.5px]
                  "
                >
                  "{testimonial.quote}"
                </p>


                {/* Person */}
                <div className="mt-auto pt-5">

                  <h3 className="text-[14px] font-semibold text-[#241914]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 text-[10px] text-[#876f64]">
                    {testimonial.role}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <section className="px-5 py-9 sm:px-8 sm:py-11 md:px-10 lg:px-[4.8%] lg:py-10">

        <div className="mx-auto max-w-[1400px]">

          {/* =================================================
              FOOTER TOP
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-10
              sm:grid-cols-2
              lg:grid-cols-[1.7fr_0.85fr_0.85fr_1fr_0.75fr]
              lg:gap-8
            "
          >

            {/* =================================================
                BRAND
            ================================================== */}

            <div className="max-w-[370px]">

              {/* Logo */}
              <a
                href="/"
                className="inline-flex items-center"
              >

                {/* Replace this with your actual logo */}
                <div className="flex items-center gap-2">

                  <div className="flex h-7 w-7 items-center justify-center rounded-[3px] border border-[#b87659] text-[11px] text-[#984c30]">
                    ✦
                  </div>

                  <span className="font-serif text-[24px] leading-none text-[#211713]">
                    ArtNest
                  </span>

                </div>

              </a>


              {/* Description */}
              <p className="mt-5 max-w-[350px] text-[13px] leading-[1.75] text-[#604e45] sm:text-[14px]">
                ArtNest — Discover original artworks, handcrafted sculptures,
                and custom commissions directly from independent creators
                worldwide.
              </p>


              {/* Certification Badge */}
              <div className="mt-5">

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#dfc8b6]
                    bg-[#fff7ef]
                    px-3
                    py-1.5
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.5px]
                    text-[#8f4a31]
                  "
                >

                  <ShieldCheck
                    size={12}
                    strokeWidth={1.7}
                  />

                  Archival Provenance Certified

                </span>

              </div>

            </div>


            {/* =================================================
                FOOTER LINKS
            ================================================== */}

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>

                <h3
                  className="
                    text-[14px]
                    font-semibold
                    uppercase
                    tracking-[0.2px]
                    text-[#241913]
                  "
                >
                  {category}
                </h3>


                <nav className="mt-3">

                  <ul className="space-y-2">

                    {links.map((link) => (
                      <li key={link}>

                        <a
                          href="#"
                          className="
                            text-[12px]
                            text-[#715c52]
                            transition-colors
                            duration-200
                            hover:text-[#984c30]
                          "
                        >
                          {link}
                        </a>

                      </li>
                    ))}

                  </ul>

                </nav>

              </div>
            ))}

          </div>


          {/* =================================================
              BOTTOM BORDER
          ================================================== */}

          <div className="mt-8 border-t border-[#e1cfc0] pt-5">

            <div
              className="
                flex
                flex-col
                gap-3
                text-[11px]
                text-[#806d64]
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              {/* Legal */}
              <div className="flex flex-wrap items-center gap-3">

                <a
                  href="#"
                  className="transition hover:text-[#984c30]"
                >
                  Privacy Policy
                </a>

                <span className="text-[#b49482]">
                  •
                </span>

                <a
                  href="#"
                  className="transition hover:text-[#984c30]"
                >
                  Terms of Service
                </a>

              </div>


              {/* Copyright */}
              <p>
                © 2025 ArtNest Inc. All rights reserved.
              </p>

            </div>

          </div>

        </div>

      </section>

    </footer>
  );
};

export default Footer;