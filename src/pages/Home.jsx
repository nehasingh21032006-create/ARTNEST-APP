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
    </div>
  )
}

export default Home
