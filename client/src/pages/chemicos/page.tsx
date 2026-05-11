import ChemicosNavbar from "./components/ChemicosNavbar";
import ChemicosHero from "./components/ChemicosHero";
import ChemicosIntro from "./components/ChemicosIntro";
import ChemicosHeritage from "./components/ChemicosHeritage";
import ChemicosAbout from "./components/ChemicosAbout";
import ChemicosExpertise from "./components/ChemicosExpertise";
import ChemicosExpansion from "./components/ChemicosExpansion";
import ChemicosPortfolio from "./components/ChemicosPortfolio";
import ChemicosProcess from "./components/ChemicosProcess";
import ChemicosSpecs from "./components/ChemicosSpecs";
import ChemicosClients from "./components/ChemicosClients";
import ChemicosPartnership from "./components/ChemicosPartnership";
import ChemicosImprovement from "./components/ChemicosImprovement";
import ChemicosFAQ from "./components/ChemicosFAQ";
import ChemicosContact from "./components/ChemicosContact";
import ChemicosCTA from "./components/ChemicosCTA";
import ChemicosFooter from "./components/ChemicosFooter";
import FadeIn from "@/components/FadeIn";

export default function ChemicosPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#2c2c2c]">
      <ChemicosNavbar />
      <main>
        {/* Hero: 애니메이션 없이 즉시 표시 */}
        <ChemicosHero />

        {/* 브랜드 스토리 */}
        <FadeIn threshold={0.08}>
          <ChemicosIntro />
        </FadeIn>

        <FadeIn threshold={0.08} delay={60}>
          <ChemicosHeritage />
        </FadeIn>

        {/* 회사 소개 */}
        <FadeIn threshold={0.08}>
          <ChemicosAbout />
        </FadeIn>

        {/* 제품 전문성 */}
        <FadeIn threshold={0.08}>
          <ChemicosExpertise />
        </FadeIn>

        <FadeIn threshold={0.08} delay={60}>
          <ChemicosExpansion />
        </FadeIn>

        {/* 제품 포트폴리오 */}
        <FadeIn threshold={0.04}>
          <div className="w-full h-px bg-[#2c2c2c]/10" />
        </FadeIn>

        <FadeIn threshold={0.05}>
          <ChemicosPortfolio />
        </FadeIn>

        {/* 고객 실무 정보 */}
        <FadeIn threshold={0.04}>
          <div className="w-full h-px bg-[#2c2c2c]/10" />
        </FadeIn>

        <FadeIn threshold={0.06}>
          <ChemicosProcess />
        </FadeIn>

        <FadeIn threshold={0.06} delay={60}>
          <ChemicosSpecs />
        </FadeIn>

        {/* 클라이언트 실적 */}
        <FadeIn threshold={0.04}>
          <div className="w-full h-px bg-[#2c2c2c]/10" />
        </FadeIn>

        <FadeIn threshold={0.06}>
          <ChemicosClients />
        </FadeIn>

        {/* 파트너십 철학 */}
        <FadeIn threshold={0.06}>
          <ChemicosPartnership />
        </FadeIn>

        <FadeIn threshold={0.06} delay={60}>
          <ChemicosImprovement />
        </FadeIn>

        {/* FAQ */}
        <FadeIn threshold={0.04}>
          <div className="w-full h-px bg-[#2c2c2c]/10" />
        </FadeIn>

        <FadeIn threshold={0.06}>
          <ChemicosFAQ />
        </FadeIn>

        {/* 연락처 & CTA */}
        <FadeIn threshold={0.05}>
          <ChemicosContact />
        </FadeIn>

        <FadeIn threshold={0.08}>
          <ChemicosCTA />
        </FadeIn>
      </main>

      <FadeIn threshold={0.1}>
        <ChemicosFooter />
      </FadeIn>
    </div>
  );
}
