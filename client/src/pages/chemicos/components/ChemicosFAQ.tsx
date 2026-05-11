import { useState } from "react";
import { faqItems } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };

export default function ChemicosFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="bg-[#f5f0e8] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-[#2c2c2c]/35"></div>
          <span className="text-sm tracking-[0.28em] uppercase font-light text-[#6b6055]" style={JP_BODY}>
            FAQ
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#2c2c2c]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ご検討中の方へ、<br />
            よくいただくご質問
          </h2>
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl">
        {faqItems.map((item, idx) => (
          <div
            key={idx}
            className="border-t border-[#2c2c2c]/10 last:border-b last:border-[#2c2c2c]/10"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-start justify-between gap-8 py-8 text-left cursor-pointer group"
            >
              <span
                className="text-lg md:text-xl text-[#2c2c2c] font-light leading-[1.6] group-hover:text-[#6b6055] transition-colors duration-300"
                style={JP_BODY}
              >
                {item.q}
              </span>
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-[#c8b99a] mt-1">
                <i className={`text-lg transition-transform duration-300 ${openIdx === idx ? "ri-subtract-line" : "ri-add-line"}`}></i>
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIdx === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-8 pl-0 md:pl-0">
                <div className="border-l-2 border-[#c8b99a] pl-6">
                  <p
                    className="text-[#4a4035] text-base leading-[2.1] font-light"
                    style={JP_BODY}
                  >
                    {item.a.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.a.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 pt-12 border-t border-[#2c2c2c]/10">
        <p className="text-[#6b6055] text-base font-light leading-[1.9]" style={JP_BODY}>
          他にご不明な点がございましたら、<br />
          お気軽にご連絡ください。
        </p>
      </div>
    </section>
  );
}
