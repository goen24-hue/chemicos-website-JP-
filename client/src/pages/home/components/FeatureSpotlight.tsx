export default function FeatureSpotlight() {
  return (
    <section className="w-full bg-[#2e2a22] py-20 px-6 md:px-10 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-screen-xl mx-auto">
        {/* Left: Image */}
        <div className="relative">
          <div className="w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <img
              src="https://readdy.ai/api/search-image?query=hands%20holding%20luxury%20amber%20glass%20skincare%20bottle%20close%20up%20dark%20moody%20atmospheric%20editorial%20photography%20warm%20tones%20dramatic%20lighting&width=700&height=875&seq=spotlight1&orientation=portrait"
              alt="Solais Replenishing Hand Serum"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-6 left-6 bg-[#f5f0e8]/10 backdrop-blur-sm border border-[#f5f0e8]/20 px-5 py-4">
            <p className="text-xs tracking-widest uppercase text-[#d4c9b0] font-light mb-1">
              Returning to favourites
            </p>
            <p className="font-serif text-lg text-[#f5f0e8] font-light">
              Solais Replenishing Hand Serum
            </p>
            <p className="text-sm text-[#d4c9b0] font-light mt-1">$49.00</p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8a7e6e] mb-6 font-light">
            Returning to favourites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#f5f0e8] font-light leading-tight mb-6">
            Solais Replenishing<br />Hand Serum
          </h2>
          <p className="text-sm text-[#a09080] font-light leading-relaxed mb-4 max-w-sm">
            A lightweight, non-tacky formulation, this hand serum is best applied after cleansing hands to keep hydration locked in to the experience at its best, as well as brighten and restore.
          </p>
          <p className="text-sm text-[#a09080] font-light leading-relaxed mb-8 max-w-sm">
            Formulated with a blend of botanical extracts and skin-conditioning agents, this serum delivers lasting moisture and a refined finish.
          </p>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 bg-[#f5f0e8] text-[#2c2c2c] text-xs tracking-widest uppercase px-7 py-3 hover:bg-[#e8e0d0] transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Discover Solais
              <i className="ri-arrow-right-line text-sm"></i>
            </button>
            <div>
              <p className="text-xs text-[#8a7e6e] font-light tracking-widest uppercase mb-0.5">Price</p>
              <p className="text-[#f5f0e8] font-light">$49.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
