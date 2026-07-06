const JP_BODY = { fontFamily: "'Noto Serif KR', serif" };

export default function ChemicosIntro() {
  return (
    <section id="intro" className="relative w-full">
      <div className="relative h-screen md:h-[720px] flex items-center justify-center overflow-hidden">
        <img
          src="https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/29c16642c0309dc00897b2962492e1ca.png"
          alt="Precision Eyeliner Application"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 w-full px-8 md:px-14 lg:px-20 text-[#f5f0e8]">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-[#f5f0e8]/50"></div>
            <span className="text-sm tracking-[0.28em] uppercase font-light text-[#f5f0e8]/70" style={JP_BODY}>
              시작
            </span>
          </div>

          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.3] mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            제조의<br />본질을 지킵니다
          </h2>

          <p className="text-[#e0d8cc] leading-[2.0] mb-12 max-w-xl text-lg font-light" style={JP_BODY}>
            2002년 창업 이후,<br />
            펜 타입 리퀴드 아이라이너라는<br />
            정밀도가 중요한 영역에 지속적으로 집중해 왔습니다.<br />
            정교한 드로잉, 안정적인 발색, 편안한 사용감.<br />
            이 요소들을 하나씩 축적해 온 경험이<br />
            현재의 개발 기반이 되었습니다.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            {[
              { label: "창업", value: "2002년" },
              { label: "전문 분야", value: "색조 메이크업" },
              { label: "지향점", value: "공동 개발을 통한 가치 창출" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[#f5f0e8]/60 text-sm tracking-widest uppercase mb-2 font-light" style={JP_BODY}>
                  {stat.label}
                </p>
                <p className="text-[#f5f0e8] font-light text-base whitespace-nowrap" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#2c2c2c]/10"></div>
    </section>
  );
}
