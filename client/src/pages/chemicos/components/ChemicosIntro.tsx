const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };

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
              始まり
            </span>
          </div>

          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.3] mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ものづくりの<br />心を守る
          </h2>

          <p className="text-[#e0d8cc] leading-[2.0] mb-12 max-w-xl text-lg font-light" style={JP_BODY}>
            2002年の創業以来、<br />
            ペンタイプリキッドアイライナーという<br />
            特に精度が求められる領域に取り組み続けてきました。<br />
            精密な描き心地、安定した発色、快適な使用感。<br />
            これら一つひとつを丁寧に積み重ねてきた経験が、<br />
            現在の開発基盤となっています。
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            {[
              { label: "創業", value: "2002年" },
              { label: "専門", value: "カラーコスメ" },
              { label: "理念", value: "共創による価値づくり" },
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
