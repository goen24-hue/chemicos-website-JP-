import { specsData } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif KR', serif" };

export default function ChemicosSpecs() {
  return (
    <section id="specs" className="bg-[#2e2a22] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-[#f5f0e8]/40"></div>
          <span className="text-sm tracking-[0.28em] uppercase font-light text-[#d4c9b0]/80" style={JP_BODY}>
            사양·조건
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#f5f0e8]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            MOQ·납기·인증,<br />
            자주 확인하는 항목
          </h2>
          <p className="text-[#c8bfb0] text-base font-light max-w-lg leading-[1.9]" style={JP_BODY}>
            검토 시 필요한 기본 정보를 정리했습니다.<br />
            자세한 내용은 편하게 문의해 주세요.
          </p>
        </div>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {specsData.map((spec, idx) => (
          <div
            key={spec.category}
            className={`border-t border-[#f5f0e8]/15 pt-10 pb-10 pr-0 lg:pr-10 ${
              idx < specsData.length - 1 ? "lg:border-r lg:border-r-[#f5f0e8]/10" : ""
            } ${idx > 0 ? "lg:pl-10" : ""}`}
          >
            {/* Icon + Category */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 flex items-center justify-center text-[#c8b99a]">
                <i className={`${spec.icon} text-lg`}></i>
              </div>
              <h3
                className="font-serif text-lg text-[#f5f0e8] font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {spec.category}
              </h3>
            </div>

            {/* Items */}
            <ul className="space-y-5">
              {spec.items.map((item) => (
                <li key={item.label} className="flex flex-col gap-1 border-b border-[#f5f0e8]/8 pb-4 last:border-b-0 last:pb-0">
                  <span className="text-[#a09080] text-sm font-light" style={JP_BODY}>
                    {item.label}
                  </span>
                  <span className="text-[#f5f0e8] text-base font-light" style={JP_BODY}>
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-16 pt-10 border-t border-[#f5f0e8]/10">
        <p className="text-[#a09080] text-base font-light leading-[2.0]" style={JP_BODY}>
          ※ 위 내용은 기준 예시이며, 제품 복잡도·사양·수량에 따라 달라질 수 있습니다.<br />
          정확한 견적은 초기 상담 후 안내드립니다.
        </p>
      </div>
    </section>
  );
}
