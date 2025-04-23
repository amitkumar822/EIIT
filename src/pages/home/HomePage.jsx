import React from "react";
import HeroSection from "./HeroSection";
import TopBadgeBanner from "./TopBadgeBanner";
import ProgramOverview from "./ProgramOverview";
import Footer from "@/layouts/Footer";
import ProgramEligibility from "@/components/Home/ProgramEligibility";
import { Carousel } from "@/layouts/Carousel";

const HomePage = () => {
  return (
    <>
      <TopBadgeBanner />
      
      <HeroSection />
      <ProgramOverview />
      <ProgramEligibility />
      <Footer />
    </>
  );
};

export default HomePage;
