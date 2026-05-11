import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import FeatureSpotlight from "./components/FeatureSpotlight";
import SkinCareProducts from "./components/SkinCareProducts";
import CategoryBrowse from "./components/CategoryBrowse";
import HandcraftedSection from "./components/HandcraftedSection";
import StoreSection from "./components/StoreSection";
import EditorialSection from "./components/EditorialSection";
import QuoteSection from "./components/QuoteSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <FeatureSpotlight />
        <SkinCareProducts />
        <CategoryBrowse />
        <HandcraftedSection />
        <StoreSection />
        <EditorialSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
