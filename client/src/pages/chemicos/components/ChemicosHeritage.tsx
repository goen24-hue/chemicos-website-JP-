const JP_BODY = { fontFamily: "'Noto Serif KR', serif" };
export default function ChemicosHeritage() {
  return (
    <>
      {/* Heritage — light bg */}
      <section id="heritage" className="bg-[#f5f0e8] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center max-w-screen-xl mx-auto">
          {/* Text */}
          <div className="md:order-2">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-[#2c2c2c]/35"></div>
              <span className="text-sm tracking-[0.28em] uppercase font-light text-[#6b6055] whitespace-nowrap" style={JP_BODY}>
                품질을 바라보는 기준
              </span>
            </div>
            <h2
              className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#2c2c2c] mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              좋은 품질은<br />우연히 만들어지지 않습니다.
            </h2>
            <div className="border-l-2 border-[#c8b99a] pl-8 mb-10">
              <p className="text-[#2c2c2c]/85 leading-[1.9] italic font-serif text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                “정밀함은<br />완벽함보다<br />재현성에 가깝습니다.”
              </p>
            </div>
            <p className="text-[#4a4035] leading-[2.0] text-lg font-light max-w-lg" style={JP_BODY}>
              우리는 배치 간 품질 편차를 줄이는 것을 전제로,<br />
              처방 설계와 공정 관리를 진행합니다.
            </p>
            <p className="text-[#4a4035] leading-[2.0] text-lg font-light max-w-lg mt-6" style={JP_BODY}>
              이 기준이 제품의 안정성과 신뢰도를 뒷받침합니다.
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
                디테일에 담긴 기준
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
