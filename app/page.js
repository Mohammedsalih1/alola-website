import Image from "next/image";
import HeroSection from "./components/Hero";
import AboutMeSection from "./components/AboutMeSection";
import ServicesSection from "./components/Service";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutMeSection />
    <ServicesSection />
    </>
  );
}
