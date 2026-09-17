import React from 'react';

export default function SpatialHarmonySection() {
  const triadItems = [
    {
      number: 1,
      title: "Focal Wall Canvas",
      subtitle: "Anchors sightline & room scale",
      price: "€2,450",
    },
    {
      number: 2,
      title: "Pedestal Totem Sculpture",
      subtitle: "Introduces tactile vertical shadow",
      price: "€1,180",
    },
    {
      number: 3,
      title: "Tabletop Ceramic Vessel",
      subtitle: "Grounded intimate tactile touchpoint",
      price: "€460",
    },
  ];

  return (
    <section className="bg-[#FAF4ED] min-h-screen py-16 px-4 sm:px-6 lg:px-12 font-sans text-neutral-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-[10px] border border-neutral-400 text-neutral-600 px-1.5 py-0.2 rounded font-mono uppercase tracking-wider">
              ◫
            </span>
            <span className="text-[11px] font-medium tracking-widest text-neutral-500 uppercase">
              Spatial Harmony Methodology
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-serif leading-tight text-neutral-900 mb-4">
            The Art of the Dialogue: Pairing Works for Spatial Balance
          </h1>
          
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
            Artworks should never exist in isolation. Our curatorial triad pairs focal wall presence, three-dimensional vertical sculpture, and tactile tabletop accents to establish spatial rhythm.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Room Preview with Hotspots */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
                  alt="Room Simulation"
                  className="w-full h-[340px] sm:h-[420px] object-cover"
                />

                {/* Hotspot 1 (Canvas on Wall) */}
                <div className="absolute top-[28%] left-[28.5%] transform -translate-x-1/2 -translate-y-1/2">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 bg-[#7C3F28] text-white rounded-full flex items-center justify-center text-xs font-semibold shadow-md border border-white/20">
                    1
                  </span>
                </div>

                {/* Hotspot 2 (Sculpture on Left) */}
                <div className="absolute bottom-[32%] left-[18%] transform -translate-x-1/2 translate-y-1/2">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 bg-[#7C3F28] text-white rounded-full flex items-center justify-center text-xs font-semibold shadow-md border border-white/20">
                    2
                  </span>
                </div>

                {/* Hotspot 3 (Tabletop Vessel) */}
                <div className="absolute bottom-[26%] right-[41%] transform translate-x-1/2 translate-y-1/2">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 bg-[#7C3F28] text-white rounded-full flex items-center justify-center text-xs font-semibold shadow-md border border-white/20">
                    3
                  </span>
                </div>
              </div>

              {/* Image Subcaption */}
              <p className="text-[11px] text-neutral-400 mt-2.5 font-medium">
                Room Simulation: Architectural Penthouse, Zurich • Curated Ensemble: Minimal Warmth
              </p>
            </div>

            {/* Right: Curatorial Triad Pricing & Details */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-1">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif text-neutral-900 mb-1.5">
                  The Curatorial Triad Formula
                </h2>
                
                <p className="text-neutral-500 text-xs leading-relaxed mb-6">
                  By maintaining continuous pigment values across different physical mediums, individual artworks converse rather than compete.
                </p>

                {/* Triad Item List */}
                <div className="space-y-3 mb-6">
                  {triadItems.map((item) => (
                    <div
                      key={item.number}
                      className="flex items-center justify-between p-3.5 bg-[#FAF4ED]/60 rounded-xl border border-[#F3E7DB]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-[#EFE3D5] text-neutral-700 rounded-md flex items-center justify-center text-xs font-semibold">
                          {item.number}
                        </span>
                        <div>
                          <h3 className="text-xs font-semibold text-neutral-900 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-[11px] text-neutral-500">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-neutral-900 ml-2">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Unified Pigment Spectrum Indicator */}
                <div className="p-3.5 bg-[#FAF4ED]/60 rounded-xl border border-[#F3E7DB] mb-8">
                  <div className="flex justify-between items-center text-[10px] sm:text-[11px] text-neutral-600 mb-2 font-medium">
                    <span>Unified Pigment Spectrum</span>
                    <span className="text-neutral-500">Delta E &lt; 1.4 (Certified)</span>
                  </div>
                  <div className="h-2.5 rounded-full w-full bg-gradient-to-r from-[#F7EDE2] via-[#D3B49D] to-[#5C2E1E]" />
                </div>
              </div>

              {/* Purchase Footer */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2 border-t border-neutral-100">
                <div>
                  <span className="text-[11px] text-neutral-500 block mb-0.5">
                    Full Ensemble Bundle (Saves 10%)
                  </span>
                  <span className="text-2xl font-serif font-medium text-neutral-900">
                    €3,680
                  </span>
                </div>

                <button className="bg-[#7C3F28] hover:bg-[#653220] transition-colors text-white text-xs font-medium px-5 py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Acquire Complete Trio
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
