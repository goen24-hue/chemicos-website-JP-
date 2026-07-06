export default function ChemicosHero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663558366883/RwrPSixCXsPHjaa2u7osqn/hero-dark-L9QF7CtYDW8wFYosJSjPiJ.webp"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-end pb-28 pt-36 px-8 md:px-14 lg:px-20">
        <p className="text-sm tracking-[0.3em] uppercase text-[#f5f0e8]/75 mb-8 font-light"
          style={{ fontFamily: "'Noto Serif KR', serif" }}>
          정밀 제조 × 민첩한 개발
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] font-light leading-[1.3] mb-12 tracking-[-0.01em]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          일본 제조의 신뢰를 기반으로,<br />
          한국의 민첩한 개발 역량을 결합해,<br />
         <em className="not-italic text-[#d4c9b0]">브랜드의 다음 가능성을 오래 지속될 가치로 완성하겠습니다.</em>
        </h1>
        <div>
          <a
            href="#heritage"
            className="btn-chemicos inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase border border-[#f5f0e8]/60 px-7 py-3.5 text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#2c2c2c] font-light whitespace-nowrap"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            시작하기
            <i className="ri-arrow-right-line text-sm"></i>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative pb-10 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-[#f5f0e8]/50">
          <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Jost', sans-serif" }}>scroll</span>
          <div className="w-px h-8 bg-[#f5f0e8]/35"></div>
        </div>
      </div>
    </section>
  );
}
