import { improvementColumns } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif KR', serif" };

export default function ChemicosImprovement() {
  return (
    <>
      <div className="w-full h-px bg-[#2c2c2c]/10"></div>
      <section className="bg-[#f5f0e8] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-[#2c2c2c]/35"></div>
            <span className="text-sm tracking-[0.28em] uppercase font-light text-[#6b6055]" style={JP_BODY}>
              태도
            </span>
          </div>
          <h2
            className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#2c2c2c]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            지속적인<br />개선과 실행
          </h2>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {improvementColumns.map((col) => (
            <div
              key={col.title}
              className="border-t-2 border-[#c8b99a] pt-10 pb-10 md:pr-14"
            >
              <h3
                className="font-serif text-2xl text-[#2c2c2c] font-light mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {col.title}
              </h3>
              <ul className="space-y-5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-[#4a4035] text-base leading-[1.9] font-light"
                    style={JP_BODY}
                  >
                    <span className="text-[#c8b99a] mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
