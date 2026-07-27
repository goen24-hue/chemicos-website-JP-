import { processSteps } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };

export default function ChemicosProcess() {
  return (
    <section id="process" className="bg-[#f5f0e8] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-[#2c2c2c]/35"></div>
          <span className="text-sm tracking-[0.28em] uppercase font-light text-[#6b6055]" style={JP_BODY}>
            製造の流れ
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#2c2c2c]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ご依頼から納品まで、<br />
            5つのステップ
          </h2>
          <p className="text-[#6b6055] text-base font-light max-w-sm leading-[1.9]" style={JP_BODY}>
            初回のご相談から量産・納品まで、<br />
            一貫してサポートいたします。
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-[2.25rem] top-0 bottom-0 w-px bg-[#c8b99a]/40"></div>

        <div className="flex flex-col gap-0">
          {processSteps.map((step, i) => (
            <div
              key={step.num}
              className="relative grid grid-cols-1 md:grid-cols-[5rem_1fr_1fr] gap-6 md:gap-12 py-10 border-b border-[#2c2c2c]/8 last:border-b-0"
            >
              {/* Number + dot */}
              <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                <div className="relative z-10 w-9 h-9 rounded-full border border-[#c8b99a] bg-[#f5f0e8] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#c8b99a] text-xs font-light" style={{ fontFamily: "'Jost', sans-serif" }}>
                    {i + 1}
                  </span>
                </div>
                <span className="text-[#c8b99a] text-xs tracking-widest font-light md:pl-0" style={{ fontFamily: "'Jost', sans-serif" }}>
                  {step.duration}
                </span>
              </div>

              {/* Title */}
              <div className="flex flex-col justify-center">
                <h3
                  className="font-serif text-2xl md:text-3xl text-[#2c2c2c] font-light leading-[1.3]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-center">
                <p className="text-[#4a4035] text-base leading-[2.0] font-light whitespace-pre-line" style={JP_BODY}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
