import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import ScrollToTop from "./utils/ScrollToTopOnMount";

const App = () => {
  return (
    <div className="w-full h-full  bg-gradient-to-br from-[#e0f7fa] to-[#e1f5fe] overflow-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

      <ScrollToTopButton />
      <ScrollToTop />
    </div>
  );
};

export default App;
