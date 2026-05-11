const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };

export default function ChemicosHeritage() {
  return (
    <>
      {/* Expertise teaser — dark bg */}
      <section className="bg-[#2e2a22] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-[#f5f0e8]/40"></div>
          <span className="text-sm tracking-[0.28em] uppercase font-light text-[#d4c9b0]/80" style={JP_BODY}>
            技術力
          </span>
        </div>
        <h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.3] text-[#f5f0e8] mb-10 max-w-xl"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          匠の精神を<br />受け継ぐ
        </h2>
        <p className="text-[#c8bfb0] leading-[2.0] mb-10 max-w-2xl text-lg font-light" style={JP_BODY}>
          バッチごとに安定した品質を実現すること。<br />
          それは、ものづくりにおける基本であり、最も重要な責任です。
        </p>
        <p className="text-[#c8bfb0] leading-[2.0] mb-10 max-w-2xl text-lg font-light" style={JP_BODY}>
          私たちは、再現性の高い処方設計と丁寧な工程管理を通じて、<br />
          一つひとつの積み重ねから、ブランドとの信頼を築いています。
        </p>
        <div className="w-full h-px bg-[#f5f0e8]/15 mb-8"></div>
        <span className="text-sm tracking-[0.28em] uppercase font-light text-[#d4c9b0]/50" style={JP_BODY}>
          細部へのこだわりが、信頼をつくる。
        </span>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-[#2c2c2c]/10"></div>

      {/* Heritage — light bg */}
      <section id="heritage" className="bg-[#f5f0e8] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center max-w-screen-xl mx-auto">
          {/* Text */}
          <div className="md:order-2">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-[#2c2c2c]/35"></div>
              <span className="text-sm tracking-[0.28em] uppercase font-light text-[#6b6055] whitespace-nowrap" style={JP_BODY}>
                品質への考え方
              </span>
            </div>
            <h2
              className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#2c2c2c] mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              品質に、<br />偶然はない。
            </h2>
            <div className="border-l-2 border-[#c8b99a] pl-8 mb-10">
              <p className="text-[#2c2c2c]/85 leading-[1.9] italic font-serif text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                「精密さとは、<br />完璧さではなく<br />再現性である」
              </p>
            </div>
            <p className="text-[#4a4035] leading-[2.0] text-lg font-light max-w-lg" style={JP_BODY}>
              私たちは、バッチ間の品質差を最小限に抑えることを前提に、<br />
              処方設計と工程管理を行っています。
            </p>
            <p className="text-[#4a4035] leading-[2.0] text-lg font-light max-w-lg mt-6" style={JP_BODY}>
              その基準が、製品の安定性と信頼性を支えています。
            </p>
          </div>

          {/* Image */}
          <div className="md:order-1 relative overflow-hidden">
            <div className="w-full" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/c7ad8d7c323131b6bad36f003fefe153.png"
                alt="Craftsmanship Detail"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute bottom-5 left-5">
              <span className="text-sm tracking-[0.28em] uppercase font-light text-[#f5f0e8]/80" style={JP_BODY}>
                細部に宿る精神
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
