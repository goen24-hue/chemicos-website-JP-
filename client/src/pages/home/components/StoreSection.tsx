export default function StoreSection() {
  return (
    <section className="w-full bg-[#eee9e0]">
      {/* Store Image */}
      <div className="relative w-full overflow-hidden" style={{ height: "520px" }}>
        <img
          src="https://readdy.ai/api/search-image?query=luxury%20skincare%20boutique%20store%20front%20exterior%20brick%20building%20warm%20afternoon%20light%20editorial%20photography%20urban%20neighbourhood%20charming%20storefront&width=1600&height=520&seq=store1&orientation=landscape"
          alt="Aesop Store"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Slide arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[#f5f0e8]/80 text-[#2c2c2c] hover:bg-[#f5f0e8] transition-colors cursor-pointer">
          <i className="ri-arrow-left-line text-sm"></i>
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[#f5f0e8]/80 text-[#2c2c2c] hover:bg-[#f5f0e8] transition-colors cursor-pointer">
          <i className="ri-arrow-right-line text-sm"></i>
        </button>
      </div>

      {/* Store Info */}
      <div className="py-16 px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#8a7e6e] mb-4 font-light">
            Aesop Store New York
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] font-light leading-snug mb-5">
            A neighbourly<br />presence
          </h2>
          <p className="text-sm text-[#6b6055] font-light leading-relaxed max-w-sm mb-6">
            Our distinctive stores are designed to fit seamlessly within, and to respectfully respond to local urban areas. We look forward to hosting you, whether you are visiting a store or encountering us online.
          </p>
          <button className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#2c2c2c] border-b border-[#2c2c2c] pb-0.5 hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap">
            Find a nearby store
            <i className="ri-arrow-right-line text-sm"></i>
          </button>
        </div>

        {/* Hand & Body Care Finder */}
        <div className="bg-[#2e2a22] p-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8a7e6e] mb-4 font-light">
            Enlightening assistance
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-[#f5f0e8] font-light leading-snug mb-4">
            The Hand &amp; Body Care<br />Finder
          </h3>
          <p className="text-sm text-[#a09080] font-light leading-relaxed mb-6">
            To discover the most suitable hand and body care formulations for your particular needs, let our hand and body care finder guide you.
          </p>
          <button className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#f5f0e8] border-b border-[#f5f0e8]/50 pb-0.5 hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap">
            Recommended
            <i className="ri-arrow-right-line text-sm"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
