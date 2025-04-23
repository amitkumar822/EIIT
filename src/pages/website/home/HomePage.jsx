import HeroSection from "@/layouts/HeroSection";
import TopBadgeBanner from "@/layouts/TopBadgeBanner";
import React from "react";
import ProgramOverview from "./ProgramOverview";
import ProgramEligibility from "@/components/website/Home/ProgramEligibility";

const HomePage = () => {
  return (
    <>
      <TopBadgeBanner />
      <HeroSection />
      <ProgramOverview />
      <ProgramEligibility />
    </>
  );
};

export default HomePage;
