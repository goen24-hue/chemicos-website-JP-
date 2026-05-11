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

export default function ChemicosPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#2c2c2c]">
      <ChemicosNavbar />
      <main>
        {/* 브랜드 스토리 */}
        <ChemicosHero />
        <ChemicosIntro />
        <ChemicosHeritage />

        {/* 회사 소개 — 신뢰 지표 */}
        <ChemicosAbout />

        {/* 제품 전문성 */}
        <ChemicosExpertise />
        <ChemicosExpansion />

        {/* 제품 포트폴리오 — "어떤 제품을 만들 수 있나요?" */}
        <div className="w-full h-px bg-[#2c2c2c]/10"></div>
        <ChemicosPortfolio />

        {/* 고객 실무 정보 */}
        <div className="w-full h-px bg-[#2c2c2c]/10"></div>
        <ChemicosProcess />
        <ChemicosSpecs />

        {/* 클라이언트 실적 */}
        <div className="w-full h-px bg-[#2c2c2c]/10"></div>
        <ChemicosClients />

        {/* 파트너십 철학 */}
        <ChemicosPartnership />
        <ChemicosImprovement />

        {/* FAQ */}
        <div className="w-full h-px bg-[#2c2c2c]/10"></div>
        <ChemicosFAQ />

        {/* 연락처 & 위치 */}
        <ChemicosContact />

        {/* CTA */}
        <ChemicosCTA />
      </main>
      <ChemicosFooter />
    </div>
  );
}
