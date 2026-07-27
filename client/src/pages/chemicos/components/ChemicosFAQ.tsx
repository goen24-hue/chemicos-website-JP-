import { useState, useRef, useEffect } from "react";
import { faqItems } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };

/** 실제 높이를 측정해 부드럽게 펼치는 아코디언 아이템 */
function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // 열릴 때 실제 콘텐츠 높이 측정
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-t border-[#2c2c2c]/10 last:border-b last:border-[#2c2c2c]/10">
      {/* 질문 버튼 */}
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-8 py-8 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span
          className="text-lg md:text-xl text-[#2c2c2c] font-light leading-[1.6] group-hover:text-[#6b6055] transition-colors duration-300"
          style={JP_BODY}
        >
          {item.q}
        </span>
        {/* 아이콘: 열릴 때 45도 회전 */}
        <span
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-[#c8b99a] mt-1"
          style={{
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <i className="ri-add-line text-lg"></i>
        </span>
      </button>

      {/* 답변 — 실제 높이 기반 smooth expand */}
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div ref={contentRef}>
          <div
            className="pb-8"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-8px)",
              transition: isOpen
                ? "opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s"
                : "opacity 0.2s ease, transform 0.2s ease",
            }}
          >
            <div className="border-l-2 border-[#c8b99a] pl-6">
              <p
                className="text-[#4a4035] text-base leading-[2.1] font-light"
                style={JP_BODY}
              >
                {item.a.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < item.a.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChemicosFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="bg-[#f5f0e8] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20"
      style={{ scrollMarginTop: "64px" }}
    >
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-[#2c2c2c]/35"></div>
          <span
            className="text-sm tracking-[0.28em] uppercase font-light text-[#6b6055]"
            style={JP_BODY}
          >
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
          <FAQItem
            key={idx}
            item={item}
            isOpen={openIdx === idx}
            onToggle={() => toggle(idx)}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 pt-12" style={{ borderStyle: "none" }}>
        <p
          className="text-[#6b6055] text-base font-light leading-[1.9]"
          style={JP_BODY}
        >
          他にご不明な点がございましたら、<br />
          お気軽にご連絡ください。
        </p>
      </div>
    </section>
  );
}
