import { companyStats } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };
const JP_TITLE = { fontFamily: "'Cormorant Garamond', serif" };

export default function ChemicosAbout() {
  return (
    <section id="about" className="bg-[#2e2a22] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-[#f5f0e8]/40"></div>
          <span className="text-sm tracking-[0.28em] uppercase font-light text-[#d4c9b0]/80" style={JP_BODY}>
            会社概要
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2
            className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#f5f0e8]"
            style={JP_TITLE}
          >
            ケミコスとは、<br />
            どんな会社ですか？
          </h2>
          <p className="text-[#c8bfb0] text-lg font-light max-w-xl leading-[2.0]" style={JP_BODY}>
            2002年の創業以来、プレミアムビューティーブランドの<br />
            製造パートナーとして、品質と信頼を積み重ねてきました。
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
            製造拠点
          </h3>
          <p className="text-[#c8bfb0] text-lg leading-[2.0] font-light max-w-lg" style={JP_BODY}>
            韓国・京畿道 安養市に自社工場を保有。<br />
            ISO 22716（GMP）認証を取得した<br />
            クリーンルーム環境で製造を行っています。<br />
            東京にも営業拠点を設け、<br />
            日本市場への迅速な対応が可能です。
          </p>
        </div>
        <div>
          <h3
            className="font-serif text-2xl text-[#f5f0e8] font-light mb-6"
            style={JP_TITLE}
          >
            研究開発体制
          </h3>
          <blockquote>
            <p className="text-[#c8bfb0] text-lg leading-[2.0] font-light max-w-lg" style={JP_BODY}>
              専任の処方開発チームを擁し、<br />
              原料選定から安定性試験まで一貫して対応しています。
            </p>
            <p className="text-[#c8bfb0] text-lg leading-[2.0] font-light max-w-lg" style={JP_BODY}>
              開発から検証までを連携させることで、<br />
              トレンドや規制動向を踏まえながら、<br />
              実用性と再現性を両立した開発を行っています。
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
