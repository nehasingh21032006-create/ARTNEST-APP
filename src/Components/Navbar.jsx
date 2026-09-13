import React from "react";
import { MdOutlineVerified } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="h-[76px] w-full bg-[#fffefe] border-b border-[#eee8e3] flex items-center px-12 font-sans">

        {/* Logo */}
        <div className="flex items-center gap-[9px] min-w-[185px]">
          <div className="w-[30px] h-[30px] rounded-full bg-[#eee3d8] flex items-center justify-center text-[#a85537] text-[15px]">
            ✦
          </div>

          <span className="font-serif text-[22px] font-medium text-[#2c211c]">
            ArtNest
          </span>
        </div>


        {/* Navigation Links */}
        <div className="flex items-center gap-[26px] flex-1">

          <a
            href="#"
            className="text-[13px] font-semibold text-[#a65335] whitespace-nowrap"
          >
            Home
          </a>

          <a
            href="#"
            className="text-[13px] text-[#625650] hover:text-[#a85537] whitespace-nowrap"
          >
            Discover
          </a>

          <a
            href="#"
            className="text-[13px] text-[#625650] hover:text-[#a85537] whitespace-nowrap"
          >
            Artists
          </a>

          <a
            href="#"
            className="text-[13px] text-[#625650] hover:text-[#a85537] whitespace-nowrap"
          >
            Sculptures
          </a>

          <a
            href="#"
            className="text-[13px] text-[#625650] hover:text-[#a85537] whitespace-nowrap"
          >
            Curated Collections
          </a>

          <a
            href="#"
            className="text-[13px] text-[#625650] hover:text-[#a85537] whitespace-nowrap"
          >
            Custom Art
          </a>

          <a
            href="#"
            className="text-[13px] text-[#625650] hover:text-[#a85537] whitespace-nowrap"
          >
            About
          </a>

        </div>


        {/* Right Actions */}
        <div className="flex items-center gap-[19px]">

          {/* Search */}
          <button
            className="relative border-none bg-transparent p-[3px] text-[#4d4541] hover:text-[#a65335] cursor-pointer"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20L16.2 16.2" />
            </svg>
          </button>


          {/* Wishlist */}
          <button
            className="relative border-none bg-transparent p-[3px] text-[#4d4541] hover:text-[#a65335] cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 8 4c1.5 0 3 .7 4 2 1-1.3 2.5-2 4-2a4.8 4.8 0 0 1 4.8 4.8Z" />
            </svg>

            <span className="absolute -top-[7px] -right-[9px] w-4 h-4 rounded-full bg-[#a85a3a] text-white text-[9px] font-bold flex items-center justify-center">
              4
            </span>
          </button>


          {/* Shopping Bag */}
          <button
            className="relative border-none bg-transparent p-[3px] text-[#4d4541] hover:text-[#a65335] cursor-pointer"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M5 8h14l-1 12H6L5 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>

            <span className="absolute -top-[7px] -right-[9px] w-4 h-4 rounded-full bg-[#a85a3a] text-white text-[9px] font-bold flex items-center justify-center">
              2
            </span>
          </button>


          {/* Divider */}
          <div className="h-[30px] w-px bg-[#e6ded8]"></div>


          {/* Profile */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d6c4ae] to-[#b99a78] flex items-center justify-center text-white text-[9px] font-semibold">
            AN
          </div>

        </div>
      </nav>


      {/* ================= ANNOUNCEMENT BAR ================= */}

      <div className="h-[55px] bg-[#f4e7d9] flex items-center justify-center text-[#6a5145] font-sans">

        <div className="flex items-center gap-[10px] text-[16px]">

          <span className="text-[#9b5638] text-[18px]">
            <MdOutlineVerified />
          </span>

          <strong className="text-[15px] tracking-[0.4px] text-[#8c4d34]">
            SPRING VERNISSAGE 2025
          </strong>

          <span className="text-[#c2a99a] mx-[3px]">
            |
          </span>

          <span >
            Over 120 newly curated original sculptures and gallery canvases
            added this week
          </span>

          <a
            href="#"
            className="text-[#934c31] font-semibold ml-2 no-underline"
          >
            Explore Catalogue
            <span className="ml-[5px] text-[14px]">
              →
            </span>
          </a>

        </div>

      </div>
    </>
  );
};

export default Navbar;