import React from 'react';

const collections = [
  {
    artist: "Julian Sterling • London",
    artworksCount: "215 Artworks",
    title: "Contemporary Expressions & Chromatic Gestures",
    description: "Bold kinetic brushstrokes, textural pigment densities, and emotive abstractions that anchor expansive high-ceiling interiors.",
    tags: ["Abstract Oil", "Large Canvas", "Expressive"],
    price: "From €750",
    images: {
      main: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=600",
      topRight: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=300",
      bottomRight: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&q=80&w=300",
    }
  },
  {
    artist: "Hana Takahashi • Kyoto",
    artworksCount: "95 Artworks",
    title: "Earth, Ash & Ceramic Forms",
    description: "Tactile kiln-fired clay vessels, raku ceramics, and raw stoneware celebrating organic imperfections and natural minerals.",
    tags: ["Japanese Stoneware", "Raku", "Anagama Kiln"],
    price: "From €420",
    images: {
      main: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=600",
      topRight: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=300",
      bottomRight: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=300",
    }
  },
  {
    artist: "Astrid Lindholm • Stockholm",
    artworksCount: "84 Artworks",
    title: "Monochrome Stories & Raw Plaster",
    description: "The subtlety of white-on-white, carved gypsum bas-reliefs, and charcoal wash studies capturing shadow and natural daylight.",
    tags: ["Minimalist", "Bas-Relief", "Textured White"],
    price: "From €690",
    images: {
      main: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
      topRight: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=300",
      bottomRight: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=300",
    }
  },
  {
    artist: "Siobhan Chen • Vancouver",
    artworksCount: "112 Artworks",
    title: "Nature, Flora & Serene Botanicals",
    description: "Gentle earthen hues, pressed organic botanicals, and meditative landscapes that bring the quiet grace of nature indoors.",
    tags: ["Fine Art Botanicals", "Tempera", "Natural Linen"],
    price: "From €540",
    images: {
      main: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600",
      topRight: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=300",
      bottomRight: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=300",
    }
  },
  {
    artist: "Arjun Rao • Mumbai",
    artworksCount: "78 Artworks",
    title: "Indian Heritage & Ancient Motifs",
    description: "Centuries of artisanal memory translated through block-print textiles, brass casting, and classical figurative interpretations.",
    tags: ["Heritage Relics", "Lost-Wax Casting", "Traditional Ochres"],
    price: "From €620",
    images: {
      main: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
      topRight: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=300",
      bottomRight: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=300",
    }
  },
  {
    artist: "Elena Vance • Berlin",
    artworksCount: "64 Artworks",
    title: "Emerging Talents: The Avant-Garde Atelier",
    description: "Bold conceptual debuts, experimental mixed media, and fresh perspectives from newly vetted international academy graduates.",
    tags: ["Rising Stars", "Limited Editions", "Collector Debut"],
    price: "From €590",
    images: {
      main: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80&w=600",
      topRight: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=300",
      bottomRight: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=300",
    }
  }
];

export default function CuratedEnsembles() {
  return (
    <section className="bg-[#FAF7F2] min-h-screen py-12 px-4 sm:px-6 lg:px-12 font-sans text-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
          <div>
            <span className="text-xs tracking-widest text-neutral-500 uppercase font-medium">
              Curated Anthology
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mt-1">
              Explore Curated Ensembles
            </h2>
          </div>
          <p className="text-neutral-500 text-xs sm:text-sm max-w-md leading-relaxed md:text-right">
            Each ensemble is harmonized by independent curators to ensure color fidelity, spatial balance, and emotional coherence when installed together.
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {collections.map((item, index) => (
            <div key={index} className="bg-white rounded-sm p-4 border border-neutral-100/60 shadow-sm flex flex-col justify-between">
              <div>
                {/* Image Collage Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4 h-48 sm:h-52">
                  <div className="col-span-2 h-full">
                    <img 
                      src={item.images.main} 
                      alt={item.title} 
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                  <div className="col-span-1 flex flex-col gap-2 h-full">
                    <img 
                      src={item.images.topRight} 
                      alt="Detail 1" 
                      className="w-full h-1/2 object-cover rounded-sm"
                    />
                    <img 
                      src={item.images.bottomRight} 
                      alt="Detail 2" 
                      className="w-full h-1/2 object-cover rounded-sm"
                    />
                  </div>
                </div>

                {/* Subheader Details */}
                <div className="flex justify-between items-center text-[11px] mb-2">
                  <span className="text-neutral-500">{item.artist}</span>
                  <span className="bg-[#FFF0EB] text-[#C85D38] px-2 py-0.5 rounded-sm font-medium">
                    {item.artworksCount}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-[#FFF2ED] text-[#B85332] text-[10px] px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex justify-between items-center text-xs pt-3 border-t border-neutral-100">
                <a 
                  href="#" 
                  className="font-medium text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-1"
                >
                  Explore Collection <span className="text-sm">→</span>
                </a>
                <span className="text-neutral-400 text-[11px] font-medium">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call To Action */}
        <div className="text-center">
          <p className="text-neutral-400 text-xs mb-3">
            Showing 6 of 24 seasonal ensembles. New themes added every fortnight.
          </p>
          <button className="bg-[#FFF0EB] hover:bg-[#FFE5DC] text-[#C85D38] text-xs font-medium px-5 py-2.5 rounded-sm transition-colors inline-flex items-center gap-1.5">
            Load 18 More Curated Themes
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}