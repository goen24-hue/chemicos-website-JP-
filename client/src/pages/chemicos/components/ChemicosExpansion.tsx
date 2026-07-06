import { expansionItems } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif KR', serif" };

export default function ChemicosExpansion() {
  return (
    <>
      <div className="w-full h-px bg-[#2c2c2c]/10"></div>
      <section id="expansion" className="bg-[#f5f0e8] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-stretch max-w-screen-xl mx-auto">
          {/* Left text */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-[#2c2c2c]/35"></div>
              <span className="text-sm tracking-[0.28em] uppercase font-light text-[#6b6055]" style={JP_BODY}>
                확장성
              </span>
            </div>
            <h2
              className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#2c2c2c] mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              아이메이크업을 기반으로,<br />색조 영역을 확장합니다.
            </h2>
            <div className="mb-12 space-y-4">
              <p className="text-[#4a4035] leading-[2.0] text-lg font-light max-w-lg" style={JP_BODY}>
                마스카라, 브로우, 립으로의 확장은<br />
                단순한 라인업 추가가 아닙니다.
              </p>
              <p className="text-[#4a4035] leading-[2.0] text-lg font-light max-w-lg" style={JP_BODY}>
                아이메이크업에서 축적한 설계력과 재현성을 기반으로,<br />
                각 카테고리에서도 일관된 품질을 구현합니다.
              </p>
              <p className="text-[#4a4035] leading-[2.0] text-lg font-light max-w-lg" style={JP_BODY}>
                이는 기술을 카테고리 간에 확장해 적용하는<br />
                제조 역량의 진화입니다.
              </p>
            </div>

            <div className="space-y-0">
              {expansionItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start gap-5 py-5 border-b border-[#2c2c2c]/10"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c8b99a] mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-[#2c2c2c] font-light text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {item.name}
                    </p>
                    <p className="text-[#6b6055] text-base leading-relaxed font-light" style={JP_BODY}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm tracking-[0.2em] uppercase text-[#8a7e6e] font-light" style={JP_BODY}>
              기술은 형태를 바꾸어 계속 확장됩니다.
            </p>
          </div>

          {/* Right image */}
          <div className="md:col-span-6 overflow-hidden min-h-[730px]">
            <img
              src="https://i.pinimg.com/1200x/80/1d/9e/801d9e00b9c6beded4c878bb95e089ec.jpg"
              alt="Color Cosmetics"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>
    </>
  );
}
