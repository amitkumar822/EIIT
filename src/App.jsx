import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "./layouts/Navbar";

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
