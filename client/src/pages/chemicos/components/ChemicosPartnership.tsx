const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };

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
              共創
            </span>
          </div>
          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.3] text-[#f5f0e8] max-w-2xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ともに価値を<br />積み重ねていく。
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-3xl space-y-14">
          <div>
            <h3
              className="font-serif text-2xl text-[#f5f0e8] font-light mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              日本のものづくり
            </h3>
            <p className="text-[#c8bfb0] leading-[2.0] text-lg font-light" style={JP_BODY}>
              厳格な品質基準と、細部まで行き届いた工程管理。<br />
              一つひとつのロットを丁寧に検証し、<br />
              安定した品質を支えています。<br />
              それが、日本のものづくりに根づく姿勢です。
            </p>
          </div>

          <div className="w-full h-px bg-[#f5f0e8]/15"></div>

          <div>
            <h3
              className="font-serif text-2xl text-[#f5f0e8] font-light mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              韓国の開発力
            </h3>
            <p className="text-[#c8bfb0] leading-[2.0] text-lg font-light" style={JP_BODY}>
              市場の変化に迅速に対応し、<br />
              コンセプトをかたちにする柔軟な開発体制。<br />
              日本の精密性と韓国の開発力が組み合わさることで、<br />
              新たな価値が生まれます。
            </p>
          </div>

          <p className="text-sm tracking-[0.2em] uppercase text-[#d4c9b0]/45 font-light" style={JP_BODY}>
            ビジョンを共有し、一緒に未来を創る
          </p>
        </div>
      </section>
    </>
  );
}
