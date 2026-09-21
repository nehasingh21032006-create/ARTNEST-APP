import React, { useState } from 'react';

const mediaCategories = [
  { name: 'Travertine & Marble', count: 142 },
  { name: 'Carved Wood', count: 68 },
  { name: 'Cast Bronze', count: 89 },
  { name: 'Stoneware & Terracotta', count: 77 },
  { name: 'Architectural Bas-Relief', count: 31 },
  { name: 'Indoor & Outdoor', count: 21 },
];

const artworks = [
  {
    title: "Tectonic Equilibrium",
    artist: "Matteo Bellini",
    medium: "Hand-carved Carrara Travertine & Alabaster",
    badge: "1/1 Unique Masterpiece",
    location: "Carrara, Italy",
    delivery: "White-Glove Crated",
    dimensions: "68 x 38 x 30 cm • 18.5 kg",
    price: "$7,800",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    primaryCta: true,
  },
  {
    title: "Volcanic Relic Amphora",
    artist: "Kenzo Takahashi",
    medium: "Wood-fired Stoneware & Natural Ash Glaze",
    badge: "Kiln Fired Unique",
    location: "Kyoto, Japan",
    delivery: "Ready to Dispatch",
    dimensions: "44 x 28 x 28 cm • 6.2 kg",
    price: "$850",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=600",
    primaryCta: false,
  },
  {
    title: "Silent Relief No. IX",
    artist: "Astrid Lindholm",
    medium: "Architectural Plaster & Earthen Wax Bas-Relief",
    badge: "Wall Sculpture",
    location: "Stockholm, Sweden",
    delivery: "Architectural Mount",
    dimensions: "120 x 85 x 12 cm • 14.0 kg",
    price: "$3,950",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=600",
    primaryCta: false,
  },
  {
    title: "Equilibrium Vessel II",
    artist: "Mateo Morales",
    medium: "Smoked Terracotta & Basalt Core",
    badge: "Artisan Signed",
    location: "Oaxaca, Mexico",
    delivery: "Foundry Mark Included",
    dimensions: "32 x 26 x 20 cm • 4.8 kg",
    price: "$2,800",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=600",
    primaryCta: false,
  },
  {
    title: "Monolith of Carrara VII",
    artist: "Matteo Bellini",
    medium: "Honed Alabaster & Raw Marble",
    badge: "Curator Pick",
    location: "Carrara, Italy",
    delivery: "Authenticated",
    dimensions: "52 x 30 x 24 cm • 22.0 kg",
    price: "$6,400",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    primaryCta: false,
  },
  {
    title: "Strata Totem No. 3",
    artist: "Julian Davies",
    medium: "Bronze Cast & Chiseled Ironwood",
    badge: "Limited Edition 2/5",
    location: "London, UK",
    delivery: "Foundry Certificate",
    dimensions: "94 x 22 x 22 cm • 16.0 kg",
    price: "$5,200",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
    primaryCta: false,
  }
];

const guarantees = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#8C4A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "White-Glove Architectural Freight",
    description: "Every stone, bronze, and ceramic work above 10 kg ships in custom ISPM-15 heat-treated timber crates with bespoke high-density shock-absorbing neoprene cradles and calibrated tilt indicators.",
    features: [
      "Seismic & vibration dampening",
      "In-room uncrating & pedestal positioning"
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#8C4A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Foundry Seals & Blockchain Provenance",
    description: "Every cast sculpture carries the sculptor's chiselled cold-stamp or the foundry cachet. Accompanied by a physical cotton-rag certificate of authenticity paired with an immutable cryptographic ledger entry.",
    features: [
      "Foundry stamp photographic ledger",
      "Micro-inscribed security watermarks"
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#8C4A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 18h12l3-18H3zm3 0V3a1 1 0 011-1h10a1 1 0 011 1v3" />
      </svg>
    ),
    title: "Structural Pedestal Advisory",
    description: "Our in-house structural engineers evaluate floor load limits, earthquake restraint brackets, and interior lighting angles before your acquisition arrives at your private residence or commercial space.",
    features: [
      "Architectural load analysis",
      "Bespoke plinth fabrication assistance"
    ]
  }
];

export default function SculpturesGalleryHeader() {
  const [selectedMedia, setSelectedMedia] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  return (
    <div className="bg-[#FAF4ED] min-h-screen">
      {/* Header Section */}
      <section className="font-sans pt-12 pb-6 px-4 sm:px-6 lg:px-12 text-neutral-800">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            
            {/* Left Text Block */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-2">
                <svg 
                  className="w-4 h-4 text-[#8C4A27]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
                <span className="text-[11px] font-bold tracking-widest text-[#8C4A27] uppercase">
                  EXHIBITION GALLERY — VOL. IV
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-neutral-900 leading-tight mb-4">
                Sculptures
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal max-w-2xl">
                Discover handcrafted three-dimensional works, tactile stonework, bronze castings, and ceramic forms from independent master sculptors worldwide.
              </p>
            </div>

            {/* Right Registry Box */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-neutral-100 flex items-center gap-4 shrink-0 self-start lg:self-center">
              <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] flex items-center justify-center text-[#8C4A27]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase block leading-none mb-1">
                  CATALOG REGISTRY
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-serif font-semibold text-neutral-900">428</span>
                  <span className="text-xs text-neutral-500 font-medium">Registered Works</span>
                </div>
              </div>
            </div>

          </div>

          {/* Curated Media Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-10">
            <span className="text-xs font-bold tracking-wider text-neutral-500 uppercase mr-1">
              CURATED MEDIA:
            </span>
            {mediaCategories.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMedia(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  selectedMedia === idx
                    ? 'bg-white text-neutral-900 shadow-xs border border-neutral-200/80 font-semibold'
                    : 'bg-white/80 hover:bg-white text-neutral-700 border border-transparent'
                }`}
              >
                <span>{item.name}</span>
                <span className="text-neutral-400 text-[11px]">{item.count}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Filter and Control Bar */}
        <div className="border-t border-neutral-200/60 pt-5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4">
            
            {/* Dropdown Filters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex flex-wrap items-center gap-2">
              <div className="relative bg-[#FAF0E6] rounded-lg px-3.5 py-2.5 flex justify-between items-center text-xs font-medium text-neutral-800 cursor-pointer hover:bg-[#F3E5D8] transition-colors">
                <span>Material: <strong className="font-semibold">All Substrates</strong></span>
                <svg className="w-3.5 h-3.5 text-neutral-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className="relative bg-[#FAF0E6] rounded-lg px-3.5 py-2.5 flex justify-between items-center text-xs font-medium text-neutral-800 cursor-pointer hover:bg-[#F3E5D8] transition-colors">
                <span>Scale & Dimensions</span>
                <svg className="w-3.5 h-3.5 text-neutral-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className="relative bg-[#FAF0E6] rounded-lg px-3.5 py-2.5 flex justify-between items-center text-xs font-medium text-neutral-800 cursor-pointer hover:bg-[#F3E5D8] transition-colors">
                <span>Price: <strong className="font-semibold">$250 – $15,000+</strong></span>
                <svg className="w-3.5 h-3.5 text-neutral-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className="relative bg-[#FAF0E6] rounded-lg px-3.5 py-2.5 flex justify-between items-center text-xs font-medium text-neutral-800 cursor-pointer hover:bg-[#F3E5D8] transition-colors">
                <span>Placement: <strong className="font-semibold">All Contexts</strong></span>
                <svg className="w-3.5 h-3.5 text-neutral-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className="relative bg-[#FAF0E6] rounded-lg px-3.5 py-2.5 flex justify-between items-center text-xs font-medium text-neutral-800 cursor-pointer hover:bg-[#F3E5D8] transition-colors col-span-2 sm:col-span-1">
                <span>Edition: <strong className="font-semibold">Unique & Cast</strong></span>
                <svg className="w-3.5 h-3.5 text-neutral-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Sort & View Layout Controls */}
            <div className="flex items-center justify-end gap-3 shrink-0 pt-2 lg:pt-0">
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400 font-medium">Sort By</span>
                <div className="bg-[#FAF0E6] rounded-lg px-3.5 py-2 flex items-center justify-between gap-2 text-xs font-semibold text-neutral-800 cursor-pointer hover:bg-[#F3E5D8] transition-colors">
                  <span>Curatorial Selection</span>
                  <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* View Toggle */}
              <div className="bg-[#FAF0E6] p-1 rounded-lg flex items-center gap-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md transition-all ${
                    viewMode === 'grid' ? 'bg-white shadow-xs text-neutral-900' : 'text-neutral-400 hover:text-neutral-700'
                  }`}
                  aria-label="Grid View"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-md transition-all ${
                    viewMode === 'list' ? 'bg-white shadow-xs text-neutral-900' : 'text-neutral-400 hover:text-neutral-700'
                  }`}
                  aria-label="List View"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid Display Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-12 font-sans text-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "flex flex-col gap-6"
          }>
            {artworks.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#FFF8F2] rounded-2xl p-4 shadow-xs border border-neutral-100 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full rounded-xl overflow-hidden mb-3 bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    
                    <button 
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-neutral-600 hover:text-red-500 transition-colors shadow-xs"
                      aria-label="Save to favorites"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>

                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full shadow-xs">
                      <span className="text-[10px] font-semibold text-neutral-700 uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-2xs border border-neutral-100/60 mb-3">
                    <div className="flex justify-between items-center text-[10px] text-neutral-400 font-medium mb-1.5">
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{item.location}</span>
                      </div>
                      <span className="text-neutral-500 font-medium">{item.delivery}</span>
                    </div>

                    <h3 className="text-lg font-serif font-semibold text-neutral-900 leading-snug mb-0.5">
                      {item.title}
                    </h3>

                    <p className="text-xs font-medium text-neutral-600 mb-2">
                      {item.artist}
                    </p>

                    <p className="text-[11px] text-neutral-400 leading-relaxed font-normal">
                      {item.medium}
                    </p>
                  </div>
                </div>

                <div className="flex items-end justify-between pt-1 px-1">
                  <div>
                    <div className="text-[9px] text-neutral-400 font-medium mb-0.5">
                      {item.dimensions}
                    </div>
                    <div className="text-lg font-serif font-bold text-neutral-900 leading-none">
                      {item.price}
                    </div>
                  </div>

                  <button 
                    className={`text-xs font-medium px-4 py-2 rounded-lg transition-colors shadow-2xs ${
                      item.primaryCta
                        ? 'bg-[#823A21] hover:bg-[#6D301B] text-white'
                        : 'bg-[#F4E6D9] hover:bg-[#EBD8C8] text-neutral-800'
                    }`}
                  >
                    Acquire Work
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Media Container with Floating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 sm:aspect-16/10">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200"
                alt="Studio Documentation - Atelier Bellini"
                className="w-full h-full object-cover"
              />
              {/* Image Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Bottom Image Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white pr-28 sm:pr-36">
                <span className="text-[10px] font-bold tracking-widest uppercase text-amber-200/90 block mb-1">
                  STUDIO DOCUMENTATION
                </span>
                <p className="text-sm sm:text-base font-semibold leading-tight drop-shadow-sm">
                  Atelier Bellini — Mount Altissimo Quarry, Carrara
                </p>
              </div>
            </div>

            {/* Floating Certificate Badge */}
            <div className="absolute -bottom-6 right-2 sm:right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-neutral-100 max-w-[210px] sm:max-w-[240px] z-10">
              <div className="flex items-start gap-2.5">
                <div className="text-[#8C4A27] shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-wider uppercase text-neutral-900 leading-tight">
                    QUARRY EXTRACTION CERTIFICATE
                  </h4>
                  <p className="text-[11px] text-neutral-500 leading-snug mt-1 font-normal">
                    Direct geo-certified blocks harvested from the historic Michelangelo vein.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Block */}
          <div className="lg:col-span-6 pt-4 lg:pt-0">
            {/* Tagline */}
            <span className="text-[11px] font-bold tracking-widest text-[#8C4A27] uppercase block mb-2">
              CURATOR'S FOCUS
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 leading-[1.15] mb-6">
              The Tactile Weight of Hand-Carved Travertine
            </h2>

            {/* Quote Block */}
            <blockquote className="text-neutral-700 font-serif italic text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              “Travertine retains the memory of water that flowed through it thousands of years ago. Carving it is not an act of shaping; it is an excavation of geological breath.”
            </blockquote>

            {/* Sculptor Profile Row */}
            <div className="flex items-center gap-3.5 mb-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                alt="Matteo Bellini"
                className="w-12 h-12 rounded-lg object-cover border border-neutral-200"
              />
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
                  Matteo Bellini
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5 font-normal">
                  Master Sculptor • Carrara Accademia Alumnus
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button className="bg-[#823A21] hover:bg-[#6D301B] text-white text-xs font-semibold px-5 py-3 rounded-lg transition-colors flex items-center gap-2 shadow-sm cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Inquire for Custom Commission</span>
              </button>

              <button className="bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold px-5 py-3 rounded-lg border border-neutral-200 transition-colors flex items-center gap-2 shadow-xs cursor-pointer">
                <span>View Atelier Profile</span>
                <svg className="w-3.5 h-3.5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Collector Guarantees Section */}
      <section className="bg-[#FAF4ED] py-12 px-4 sm:px-6 lg:px-12 font-sans text-neutral-800">
        <div className="max-w-4xl mx-auto text-center pb-12">
          <span className="text-[11px] font-bold tracking-widest text-[#8C4A27] uppercase block mb-3">
            COLLECTOR GUARANTEES
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 leading-tight mb-4">
            Museum-Grade Logistics & Material Assurance
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Heavy sculptural works require uncompromising care from the sculptors studio floor to final architectural placement.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* 3-Column Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {guarantees.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-8 shadow-xs border border-neutral-100/80 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] flex items-center justify-center mb-6">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-semibold text-neutral-900 leading-tight mb-4">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-8">
                    {card.description}
                  </p>
                </div>

                {/* Bullet Features */}
                <div className="space-y-2.5 pt-2 border-t border-transparent">
                  {card.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] font-medium text-neutral-600">
                      <svg className="w-3.5 h-3.5 text-neutral-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Status & Pagination Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-neutral-200/40 pt-6">
            
            {/* Results Summary */}
            <div className="text-xs text-neutral-500 font-medium">
              Showing <strong className="text-neutral-900 font-semibold">1 – 6</strong> of <strong className="text-neutral-900 font-semibold">428</strong> Sculptural Works
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-700">
              {/* Prev Button */}
              <button className="w-8 h-8 rounded-lg bg-[#FAF0E6] hover:bg-[#F3E5D8] flex items-center justify-center text-neutral-600 transition-colors cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Active Page */}
              <button className="w-8 h-8 rounded-lg bg-[#823A21] text-white flex items-center justify-center font-semibold shadow-2xs">
                1
              </button>

              {/* Page Buttons */}
              <button className="w-8 h-8 rounded-lg bg-white/80 hover:bg-white text-neutral-700 flex items-center justify-center transition-colors cursor-pointer">
                2
              </button>
              <button className="w-8 h-8 rounded-lg bg-white/80 hover:bg-white text-neutral-700 flex items-center justify-center transition-colors cursor-pointer">
                3
              </button>

              {/* Ellipsis */}
              <span className="w-6 text-center text-neutral-400">...</span>

              {/* Last Page */}
              <button className="w-8 h-8 rounded-lg bg-white/80 hover:bg-white text-neutral-700 flex items-center justify-center transition-colors cursor-pointer">
                18
              </button>

              {/* Next Button */}
              <button className="w-8 h-8 rounded-lg bg-[#FAF0E6] hover:bg-[#F3E5D8] flex items-center justify-center text-neutral-600 transition-colors cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-[#FAF4ED] py-12 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-8 sm:p-12 md:p-14 border border-neutral-100/80 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          
          {/* Left Text Column */}
          <div className="max-w-2xl">
            {/* Category Tag */}
            <span className="text-[11px] font-bold tracking-widest text-[#8C4A27] uppercase block mb-3">
              ART ADVISORY SERVICE
            </span>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-normal text-neutral-900 leading-[1.18] tracking-tight mb-5">
              Looking for a site-specific outdoor installation or monumental centerpiece?
            </h2>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Our specialized sculpture curators liaise directly with private collectors, interior architects, and landscape masterplanners to commission scale-model maquettes and monumental bronzes.
            </p>
          </div>

          {/* Right CTA Buttons Column */}
          <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0 min-w-[240px]">
            {/* Primary Button */}
            <button className="bg-[#7C361A] hover:bg-[#682D15] text-white text-xs font-medium py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2.5 shadow-2xs cursor-pointer">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Book Private Advisory</span>
            </button>

            {/* Secondary Button */}
            <button className="bg-[#FAF0E6] hover:bg-[#F3E5D8] text-neutral-800 text-xs font-medium py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2.5 cursor-pointer">
              <svg className="w-4 h-4 text-neutral-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Speak to a Curator</span>
            </button>
          </div>

        </div>
      </div>
    </section>


    
    </div>
  );
}