import { companyStats } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif KR', serif" };
const JP_TITLE = { fontFamily: "'Cormorant Garamond', serif" };

export default function ChemicosAbout() {
  return (
    <section id="about" className="bg-[#2e2a22] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-[#f5f0e8]/40"></div>
          <span className="text-sm tracking-[0.28em] uppercase font-light text-[#d4c9b0]/80" style={JP_BODY}>
            회사 개요
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2
            className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#f5f0e8]"
            style={JP_TITLE}
          >
            케미코스는<br />
            어떤 회사인가요?
          </h2>
          <p className="text-[#c8bfb0] text-lg font-light max-w-xl leading-[2.0]" style={JP_BODY}>
            2002년 창업 이후 프리미엄 뷰티 브랜드의<br />
            제조 파트너로 품질과 신뢰를 축적해 왔습니다.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-24">
        {companyStats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`border-t border-[#f5f0e8]/15 pt-10 pb-10 ${
              idx < companyStats.length - 1 ? "lg:border-r lg:border-r-[#f5f0e8]/10 lg:pr-10" : ""
            } ${idx > 0 ? "lg:pl-10" : ""}`}
          >
            <p
              className="font-serif text-4xl md:text-5xl font-light text-[#d4c9b0] mb-3 leading-none"
              style={JP_TITLE}
            >
              {stat.num}
            </p>
            <p className="text-[#f5f0e8] text-base font-light mb-1" style={JP_BODY}>
              {stat.label}
            </p>
            <p className="text-[#8a7e6e] text-sm font-light" style={JP_BODY}>
              {stat.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Two column detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[#f5f0e8]/12 pt-16">
        <div>
          <h3
            className="font-serif text-2xl text-[#f5f0e8] font-light mb-6"
            style={JP_TITLE}
          >
            제조 거점
          </h3>
          <p className="text-[#c8bfb0] text-lg leading-[2.0] font-light max-w-lg" style={JP_BODY}>
            한국 경기도 안양시에 자체 공장을 보유하고 있습니다.<br />
            ISO 22716(GMP) 인증을 취득한<br />
            클린룸 환경에서 제조를 진행합니다.<br />
            도쿄에도 영업 거점을 두고 있어,<br />
            일본 시장 대응도 가능합니다.
          </p>
        </div>
        <div>
          <h3
            className="font-serif text-2xl text-[#f5f0e8] font-light mb-6"
            style={JP_TITLE}
          >
            연구개발 체계
          </h3>
          <blockquote>
            <p className="text-[#c8bfb0] text-lg leading-[2.0] font-light max-w-lg" style={JP_BODY}>
              전담 처방 개발팀을 기반으로,<br />
              원료 선정부터 안정성 시험까지 일관되게 대응합니다.
            </p>
            <p className="text-[#c8bfb0] text-lg leading-[2.0] font-light max-w-lg" style={JP_BODY}>
              개발과 검증을 연계해,<br />
              트렌드와 규제 흐름을 고려하면서,<br />
              실용성과 재현성을 함께 고려한 개발을 진행합니다.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
