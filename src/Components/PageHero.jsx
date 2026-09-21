import React from "react";

export default function PageHero({ eyebrow, icon, title, subtitle, children }) {
  return (
    <section className="bg-[#241b11] border-b border-[#3a2d1e]">
      <div className="max-w-[820px] mx-auto px-6 py-16 sm:py-[60px] text-center">
        {eyebrow ? (
          <span className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-medium text-[#e9dcae] bg-[#2f2416] border border-[#4d3d29] rounded-full px-5 py-2.5">
            {icon ? <span className="text-[#e9dcae]">{icon}</span> : null}
            {eyebrow}
          </span>
        ) : null}

        <h1 className="mt-8 font-['Playfair_Display'] text-[40px] sm:text-[64px] leading-[1.1] text-[#f6f0e4]">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-6 text-[16px] sm:text-[19px] leading-relaxed text-[#f1e9d9] max-w-[720px] mx-auto">
            {subtitle}
          </p>
        ) : null}

        {/* e.g. <p className="mt-4 text-[#a4926f] text-[18px]">Last Updated: ...</p> */}
        {children}
      </div>
    </section>
  );
}
