import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProgramsTabs from "@/components/sections/ProgramsTabs";
import DailyTimeline from "@/components/sections/DailyTimeline";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import AdmissionsSteps from "@/components/sections/AdmissionsSteps";
import VirtualTourBanner from "@/components/sections/VirtualTourBanner";
import FAQSection from "@/components/sections/FAQSection";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className={`flex flex-col min-h-screen`}>
      <HeroSection />
      <StatsBar />
      <WhyChooseUs />
      <ProgramsTabs />
      <DailyTimeline />
      <Gallery />
      <Testimonials />
      <AdmissionsSteps />
      <VirtualTourBanner />
      <FAQSection />
      <ContactForm />
    </main>
  );
}
