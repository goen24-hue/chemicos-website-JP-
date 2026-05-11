import { footerLinks } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };

export default function ChemicosFooter() {
  return (
    <footer className="bg-[#1e1b15] border-t border-[#f5f0e8]/8">
      <div className="px-8 md:px-14 lg:px-20 py-16">
        <div className="w-full h-px bg-[#f5f0e8]/10"></div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#5a5040] text-sm tracking-[0.15em] font-light" style={JP_BODY}>
            &copy; 2026 CHEMICOS. All rights reserved.
          </p>
          <p className="text-[#5a5040] text-sm tracking-[0.1em] font-light" style={{ fontFamily: "'Jost', sans-serif" }}>
            Precision Manufacturing · Seoul &amp; Tokyo
          </p>
        </div>
      </div>

      {/* Brand wordmark */}
      <div className="w-full overflow-hidden px-8 md:px-14 pb-6">
        <p
          className="text-[#3a3528] select-none leading-none tracking-tight"
          style={{
            fontSize: "clamp(50px, 10vw, 160px)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
          }}
        >
          CHEMICOS
        </p>
      </div>
    </footer>
  );
}
