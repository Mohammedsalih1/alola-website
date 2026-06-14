import Image from "next/image";
import HeroSection from "./components/Hero";
import AboutMeSection from "./components/AboutMeSection";
import ServicesSection from "./components/Service";
import MyWorks from "./components/Work";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutMeSection />
    <ServicesSection />
    <MyWorks />
    </>
  );
}
