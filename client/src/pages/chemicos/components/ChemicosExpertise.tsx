import { expertiseItems } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };

export default function ChemicosExpertise() {
  return (
    <section id="competence" className="bg-[#2e2a22] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-[#f5f0e8]/40"></div>
          <span className="text-sm tracking-[0.28em] uppercase font-light text-[#d4c9b0]/80" style={JP_BODY}>
            技
          </span>
        </div>
        <h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.3] text-[#f5f0e8]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          アイメイクの<br />技を極める
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-20">
        {expertiseItems.map((item) => (
          <div
            key={item.num}
            className="border-t border-[#f5f0e8]/20 pt-8 pb-10 pr-10"
          >
            <span className="block text-[#d4c9b0]/40 mb-6 text-sm font-light tracking-widest" style={{ fontFamily: "'Jost', sans-serif" }}>
              {item.num}
            </span>
            <h3
              className="font-serif text-2xl text-[#f5f0e8] font-light mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {item.title}
            </h3>
            <p className="text-[#c8bfb0] text-base leading-[2.0] font-light whitespace-pre-line" style={JP_BODY}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Full-width image */}
      <div className="relative overflow-hidden w-full" style={{ height: "480px" }}>
        <img
          src="https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/f01a1e61689b9d48df1857d21fb2aa4b.png"
          alt="Precision Manufacturing"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-6 left-8">
          <span className="text-sm tracking-[0.28em] uppercase font-light text-[#f5f0e8]/70" style={JP_BODY}>
            技と美の融合
          </span>
        </div>
      </div>
    </section>
  );
}
