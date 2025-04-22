import React from "react";
import HeroSection from "./HeroSection";
import TopBadgeBanner from "./TopBadgeBanner";
import ProgramOverview from "./ProgramOverview";
import Footer from "@/components/Home/Footer";
import ProgramEligibility from "@/components/Home/ProgramEligibility";

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
