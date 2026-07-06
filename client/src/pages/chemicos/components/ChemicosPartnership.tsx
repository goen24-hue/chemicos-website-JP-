const JP_BODY = { fontFamily: "'Noto Serif KR', serif" };

export default function ChemicosPartnership() {
  return (
    <>
      <div className="w-full h-px bg-[#2c2c2c]/10"></div>
      <section id="partnership" className="bg-[#2e2a22] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-[#f5f0e8]/40"></div>
            <span className="text-sm tracking-[0.28em] uppercase font-light text-[#d4c9b0]/80" style={JP_BODY}>
              공동 개발
            </span>
          </div>
          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.3] text-[#f5f0e8] max-w-2xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            함께 가치를<br />쌓아갑니다.
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-3xl space-y-14">
          <div>
            <h3
              className="font-serif text-2xl text-[#f5f0e8] font-light mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              일본의 제조 기준
            </h3>
            <p className="text-[#c8bfb0] leading-[2.0] text-lg font-light" style={JP_BODY}>
              엄격한 품질 기준과 디테일까지 관리하는 공정 운영.<br />
              각 로트를 세밀하게 검증하고,<br />
              안정적인 품질을 유지합니다.<br />
              이는 일본 제조 방식에 기반한 태도입니다.
            </p>
          </div>

          <div className="w-full h-px bg-[#f5f0e8]/15"></div>

          <div>
            <h3
              className="font-serif text-2xl text-[#f5f0e8] font-light mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              한국의 개발 역량
            </h3>
            <p className="text-[#c8bfb0] leading-[2.0] text-lg font-light" style={JP_BODY}>
              시장 변화에 민첩하게 대응하고,<br />
              컨셉을 제품으로 구체화하는 유연한 개발 체계.<br />
              일본의 정밀성과 한국의 개발 역량이 결합될 때,<br />
              새로운 가치가 만들어집니다.
            </p>
          </div>

          <p className="text-sm tracking-[0.2em] uppercase text-[#d4c9b0]/45 font-light" style={JP_BODY}>
            비전을 공유하고 함께 다음 제품을 만듭니다
          </p>
        </div>
      </section>
    </>
  );
}
