import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    label: "A striking show of hands",
    title: "Solais Replenishing\nHand Serum",
    subtitle: "Meticulously crafted formulations and well-chosen gifts to make for a memorable gift, your personal selection.",
    cta: "Discover Solais",
    image: "https://readdy.ai/api/search-image?query=elegant%20hands%20applying%20luxury%20skincare%20serum%20dark%20moody%20atmospheric%20editorial%20photography%20warm%20amber%20tones%20dramatic%20lighting%20artistic%20beauty&width=1600&height=900&seq=hero1&orientation=landscape",
  },
  {
    id: 2,
    label: "Refined formulations",
    title: "Camellia Nut\nFacial Hydrating Cream",
    subtitle: "A thoughtful selection of formulations crafted with care, designed to nourish and restore your skin's natural balance.",
    cta: "Explore Skin Care",
    image: "https://readdy.ai/api/search-image?query=luxury%20skincare%20amber%20bottles%20arranged%20on%20dark%20stone%20surface%20moody%20editorial%20photography%20warm%20tones%20dramatic%20shadows%20artistic%20still%20life&width=1600&height=900&seq=hero2&orientation=landscape",
  },
  {
    id: 3,
    label: "Botanical origins",
    title: "Parsley Seed\nAnti-Oxidant Serum",
    subtitle: "Formulations rooted in botanical science, developed with the finest plant-based ingredients from around the world.",
    cta: "Discover More",
    image: "https://readdy.ai/api/search-image?query=dark%20moody%20botanical%20photography%20green%20herbs%20plants%20with%20luxury%20skincare%20amber%20bottle%20dramatic%20lighting%20editorial%20warm%20atmospheric&width=1600&height=900&seq=hero3&orientation=landscape",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${animating ? "opacity-0" : "opacity-100"}`}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24 transition-all duration-500 ${
          animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <p className="text-[#d4c9b0] text-xs tracking-[0.3em] uppercase mb-4 font-light">
          {slide.label}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#f5f0e8] font-light leading-tight mb-5 whitespace-pre-line">
          {slide.title}
        </h1>
        <p className="text-[#d4c9b0] text-sm font-light max-w-md mb-8 leading-relaxed">
          {slide.subtitle}
        </p>
        <button className="inline-flex items-center gap-2 bg-[#f5f0e8]/90 text-[#2c2c2c] text-xs tracking-widest uppercase px-7 py-3 hover:bg-[#f5f0e8] transition-colors duration-300 cursor-pointer whitespace-nowrap w-fit">
          {slide.cta}
          <i className="ri-arrow-right-line text-sm"></i>
        </button>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 right-8 md:right-16 z-10 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="w-9 h-9 flex items-center justify-center border border-[#f5f0e8]/50 text-[#f5f0e8] hover:bg-[#f5f0e8]/20 transition-colors cursor-pointer"
          aria-label="Previous"
        >
          <i className="ri-arrow-left-line text-sm"></i>
        </button>
        <span className="text-[#f5f0e8]/70 text-xs font-light tracking-widest">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <button
          onClick={handleNext}
          className="w-9 h-9 flex items-center justify-center border border-[#f5f0e8]/50 text-[#f5f0e8] hover:bg-[#f5f0e8]/20 transition-colors cursor-pointer"
          aria-label="Next"
        >
          <i className="ri-arrow-right-line text-sm"></i>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 cursor-pointer ${
              i === current ? "w-6 h-1 bg-[#f5f0e8]" : "w-2 h-1 bg-[#f5f0e8]/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
