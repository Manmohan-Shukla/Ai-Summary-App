import BgGradient from "@/components/common/bg-gradient";
import CTASection from "@/components/home/ctasection";
import DemoSection from "@/components/home/demosection";
import HeroSection from "@/components/home/herosection";
import HowItWorksSection from "@/components/home/how-it-workssection";
import PricingSection from "@/components/home/pricing-section";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </div>
    </div>
  );
}
