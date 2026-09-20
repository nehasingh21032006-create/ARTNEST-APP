import React from "react";
import assets from "../assets/assests.js";
import { MdArrowOutward } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TfiMedall } from "react-icons/tfi";
import { MdHandshake } from "react-icons/md";
import { FaShieldHeart } from "react-icons/fa6";

/*
  Responsive notes:
  - Outer section/container used fixed px-[70px] / py-[68px] / gap-[70px]
    and a hard flex row (items-center justify-between) with no wrap — on
    a phone this pushed the right-side artwork block half off-screen.
    Now it's flex-col below lg and flex-row at lg+, with fluid padding.
  - Left content used w-[56%] + max-w-[700px], which is fine at desktop
    widths but forces a squeeze at tablet. Now it's w-full below lg.
  - The heading's hard <br /> line breaks ("A marketplace for original" /
    "art, sculptures &" / "handmade creations") assume a wide desktop
    line box. Below sm those breaks are dropped so the heading wraps
    naturally instead of double-wrapping mid-word.
  - The right-side artwork is a 3-layer absolute-position collage sized
    in fixed px (450×360 canvas). That composition only really works at
    the width it was designed for, so instead of trying to rescale every
    absolute child with percentages (fragile, and the smallest text —
    10–12px — would become illegible), it now only renders at lg+.
    Below lg it's replaced with a single full-width image, which is the
    more common/robust pattern for collage-style heroes on small screens.
*/

const Hero = () => {
  return (
    <section className="w-full bg-[#fff8f3]">
      <div className="mx-auto flex w-full max-w-[1450px] flex-col items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:min-h-[530px] lg:flex-row lg:items-center lg:justify-between lg:gap-[70px] lg:px-[70px] lg:py-[68px]">

        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-[56%] lg:max-w-[700px]">
          {/* Label */}
          <div className="inline-flex items-center gap-[9px] rounded-full bg-[#f1e4d8] px-[13px] py-[7px] text-[10px] font-semibold tracking-[0.5px] text-[#875039]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#a65335]" />
            CURATED GLOBAL MARKETPLACE
          </div>

          {/* Heading */}
          <h1 className="mt-5 mb-5 font-serif text-[clamp(34px,7vw,68px)] font-normal leading-[1.04] tracking-[-1.4px] text-[#29221e] sm:leading-[0.99] sm:tracking-[-2.8px]">
            A marketplace for{" "}
            <em className="font-normal italic text-[#a65335]">original</em>
            <br className="hidden sm:block" />{" "}
            <em className="font-normal italic text-[#a65335]">art</em>
            , sculptures &<br className="hidden sm:block" /> handmade
            creations
          </h1>

          {/* Description */}
          <p className="m-0 max-w-[610px] text-[15px] leading-[1.65] text-[#625650] sm:text-[16px]">
            Connect directly with independent creators worldwide. Acquire
            museum-grade paintings, studio ceramics, and bespoke commissions
            with verified authenticity.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-[27px] sm:gap-[14px]">
            <button className="flex h-[43px] cursor-pointer items-center justify-center gap-[10px] rounded-[3px] border border-[#a65335] bg-[#a65335] px-[22px] text-[15px] font-semibold text-white hover:border-[#8f462c] hover:bg-[#8f462c]">
              Explore Art
              <span className="text-[18px]"><MdArrowOutward /></span>
            </button>

            <button className="flex h-[43px] cursor-pointer items-center justify-center gap-[10px] rounded-[3px] border-none bg-[#eee1d5] px-[22px] text-[15px] font-semibold text-[#594a43] hover:bg-[#e5d5c7]">
              Meet the Artists
              <span className="text-[18px]"><IoColorPaletteOutline /></span>
            </button>
          </div>

          {/* Features */}
          <div className="mt-6 flex flex-wrap items-center gap-x-[22px] gap-y-2 sm:mt-[27px] sm:gap-x-[28px]">
            <div className="flex items-center gap-[7px] whitespace-nowrap text-[13px] text-[#625650]">
              <span className="text-[17px] text-[#a65335]"><TfiMedall /></span>
              100% Original Work
            </div>

            <div className="flex items-center gap-[7px] whitespace-nowrap text-[13px] text-[#625650]">
              <span className="text-[17px] text-[#a65335]"><MdHandshake /></span>
              Direct From Artists
            </div>

            <div className="flex items-center gap-[7px] whitespace-nowrap text-[13px] text-[#625650]">
              <span className="text-[17px] text-[#a65335]"><FaShieldHeart /></span>
              Worldwide Insured Delivery
            </div>
          </div>
        </div>

        {/* ================= RIGHT ARTWORK — mobile/tablet (below lg) ================= */}
        {/* Simple single image instead of the fixed-px collage, which only fits at lg+. */}
        <div className="w-full max-w-[450px] lg:hidden">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[7px] bg-[#d7c8b8] shadow-[0_15px_30px_rgba(65,43,31,0.13)]">
            <img
              src={assets.heroImage}
              alt="Original sculpture"
              className="block h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[rgba(25,17,12,0.75)] to-transparent" />
          </div>
        </div>

        {/* ================= RIGHT ARTWORK — desktop collage (lg+) ================= */}
        <div className="relative hidden h-[360px] w-[450px] shrink-0 lg:block">
          {/* Main Artwork */}
          <div className="absolute left-0 top-0 h-[355px] w-[275px] overflow-hidden rounded-[7px] bg-[#d7c8b8] shadow-[0_15px_30px_rgba(65,43,31,0.13)]">
            <img
              src={assets.heroImage}
              alt="Original sculpture"
              className="block h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[rgba(25,17,12,0.75)] to-transparent" />
          </div>

          {/* Small Art */}
          <div className="absolute right-[55px] top-0 h-[150px] w-[130px] overflow-hidden rounded-[6px] bg-white shadow-[0_8px_20px_rgba(60,42,31,0.12)]">
            <img
              src={assets.heroImage2}
              alt="Abstract artwork"
              className="block h-[105px] w-full object-cover"
            />
            <div className="px-[9px] py-[7px]">
              <h4 className="m-0 overflow-hidden whitespace-nowrap text-[11px] font-semibold text-[#5b4940]">
                Raw Umber & Du...
              </h4>
              <p className="mt-[3px] text-[10px] text-[#6b5c54]">$1,620</p>
            </div>
          </div>

          {/* Curator Card */}
          <div className="absolute bottom-[5px] right-0 min-h-[185px] w-[130px] rounded-[6px] bg-[#f0dfd0] p-[15px_13px] text-[#493a34]">
            <span className="text-[12px] font-bold tracking-[0.4px] text-[#a65335]">
              CURATOR PICK &#9733;
            </span>

            <p className="my-[10px] mb-[14px] text-[13px] italic leading-[1.35]">
              <strong>
                "Art that gives
                <br />
                quiet dignity
                <br />
                to modern
                <br />
                living
                <br />
                spaces."
              </strong>
            </p>

            <div className="flex items-center gap-[7px] text-[12px] text-[#6d5b52]">
              <div className="flex h-[21px] w-[21px] items-center justify-center rounded-full bg-[#a65335] text-[7px] font-bold text-white">
                AN
              </div>
              <span>Salon Gazette</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
