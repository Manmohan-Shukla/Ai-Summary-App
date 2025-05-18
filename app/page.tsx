import BgGradient from "@/components/common/bg-gradient";
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
      </div>

      {/* <CTASection/> */}
    </div>
  );
}
