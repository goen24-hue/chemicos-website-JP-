import { useState } from "react";
import { portfolioCategories } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };
const JP_TITLE = { fontFamily: "'Cormorant Garamond', serif" };

export default function ChemicosPortfolio() {
  const [active, setActive] = useState(portfolioCategories[0].id);
  const current = portfolioCategories.find((c) => c.id === active)!;

  return (
    <section id="portfolio" className="bg-[#f5f0e8] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-[#2c2c2c]/35"></div>
          <span className="text-sm tracking-[0.28em] uppercase font-light text-[#6b6055]" style={JP_BODY}>
            製品ラインナップ
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#2c2c2c]"
            style={JP_TITLE}
          >
            どんな製品を<br />
            作れますか？
          </h2>
          <p className="text-[#4a4035] text-lg font-light max-w-sm leading-[1.9]" style={JP_BODY}>
            アイメイクを中心に、<br />
            リップ・ブロウまで幅広く対応。<br />
            OEM・ODMどちらも承ります。
          </p>
        </div>
      </div>

      {/* Tab selector */}
      <div className="flex flex-wrap gap-0 border-b border-[#2c2c2c]/15 mb-16">
        {portfolioCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-8 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 cursor-pointer whitespace-nowrap border-b-2 -mb-px ${
              active === cat.id
                ? "border-[#2c2c2c] text-[#2c2c2c]"
                : "border-transparent text-[#8a7e6e] hover:text-[#4a4035]"
            }`}
            style={JP_BODY}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Image */}
        <div className="w-full aspect-square overflow-hidden bg-[#ede8df]">
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center py-4">
          <p className="text-sm tracking-[0.3em] uppercase text-[#8a7e6e] mb-4 font-light" style={JP_BODY}>
            {current.sub}
          </p>
          <h3
            className="font-serif text-4xl md:text-5xl font-light text-[#2c2c2c] mb-8 leading-[1.2]"
            style={JP_TITLE}
          >
            {current.name}
          </h3>
          <p className="text-[#4a4035] text-lg leading-[2.0] font-light mb-12" style={JP_BODY}>
            {current.desc.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </p>

          {/* Specs */}
          <div className="border-t border-[#2c2c2c]/12 pt-10">
            <p className="text-sm tracking-[0.2em] uppercase text-[#8a7e6e] mb-6 font-light" style={JP_BODY}>
              対応仕様
            </p>
            <ul className="space-y-4">
              {current.specs.map((spec) => (
                <li
                  key={spec}
                  className="flex items-center gap-4 text-[#2c2c2c] text-base font-light"
                  style={JP_BODY}
                >
                  <span className="w-1 h-1 rounded-full bg-[#c8b99a] flex-shrink-0"></span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <a
              href="#contact"
              className="btn-chemicos inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase border border-[#2c2c2c] px-7 py-3.5 text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-[#f5f0e8] font-light cursor-pointer whitespace-nowrap"
              style={JP_BODY}
            >
              この製品について相談する
              <i className="ri-arrow-right-line text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
