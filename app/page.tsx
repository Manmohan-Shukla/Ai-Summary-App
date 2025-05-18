import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demosection";
import HeroSection from "@/components/home/herosection";
import HowItWorksSection from "@/components/home/how-it-workssection";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
      </div>

      {/* <PricingSection/> */}
      {/* <CTASection/> */}
    </div>
  );
}
