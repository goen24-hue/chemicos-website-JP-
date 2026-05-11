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
        {/* Hero: 즉시 표시 */}
        <ChemicosHero />

        <FadeIn threshold={0.06}>
          <ChemicosIntro />
        </FadeIn>

        <FadeIn threshold={0.06} delay={40}>
          <ChemicosHeritage />
        </FadeIn>

        <FadeIn threshold={0.06}>
          <ChemicosAbout />
        </FadeIn>

        <FadeIn threshold={0.06}>
          <ChemicosExpertise />
        </FadeIn>

        <FadeIn threshold={0.06} delay={40}>
          <ChemicosExpansion />
        </FadeIn>

        <FadeIn threshold={0.02}>
          <div className="w-full h-px bg-[#2c2c2c]/10" />
        </FadeIn>

        <FadeIn threshold={0.04}>
          <ChemicosPortfolio />
        </FadeIn>

        <FadeIn threshold={0.02}>
          <div className="w-full h-px bg-[#2c2c2c]/10" />
        </FadeIn>

        <FadeIn threshold={0.05}>
          <ChemicosProcess />
        </FadeIn>

        <FadeIn threshold={0.05} delay={40}>
          <ChemicosSpecs />
        </FadeIn>

        <FadeIn threshold={0.02}>
          <div className="w-full h-px bg-[#2c2c2c]/10" />
        </FadeIn>

        <FadeIn threshold={0.05}>
          <ChemicosClients />
        </FadeIn>

        <FadeIn threshold={0.05}>
          <ChemicosPartnership />
        </FadeIn>

        <FadeIn threshold={0.05} delay={40}>
          <ChemicosImprovement />
        </FadeIn>

        <FadeIn threshold={0.02}>
          <div className="w-full h-px bg-[#2c2c2c]/10" />
        </FadeIn>

        <FadeIn threshold={0.05}>
          <ChemicosFAQ />
        </FadeIn>

        <FadeIn threshold={0.04}>
          <ChemicosContact />
        </FadeIn>

        <FadeIn threshold={0.06}>
          <ChemicosCTA />
        </FadeIn>
      </main>

      <FadeIn threshold={0.08}>
        <ChemicosFooter />
      </FadeIn>
    </div>
  );
}
