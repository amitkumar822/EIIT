import HeroSection from "@/layouts/HeroSection";
import TopBadgeBanner from "@/layouts/TopBadgeBanner";
import React from "react";
import Program from "./Program";
import EnquirySection from "./EnquirySection";
const HomePage = () => {
  return (
    <>
      <TopBadgeBanner />
      <HeroSection />
      <Program />
      <EnquirySection /> 
    </>
  );
};

export default HomePage;
