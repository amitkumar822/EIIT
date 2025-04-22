import React from "react";
import Navbar from "./components/Home/Navbar";
import TopBadgeBanner from "./pages/home/TopBadgeBanner";
import ProgramOverview from "./pages/home/ProgramOverview";
import { WhyChooseUS } from "./pages/home/WhyChoseUS";
import ContactUs from "./pages/home/ContactUs";
import FacilitiesPage from "./pages/home/FacilitiesPage";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="w-full h-full  bg-gradient-to-br from-[#e0f7fa] to-[#e1f5fe]">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
