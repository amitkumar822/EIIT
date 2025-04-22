import React, { useRef, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import LatestVideoView from "./LatestVideView";

const notifications = [
  "Office Order reg. Appointment of Prof. Ranjeet Kumar Choudhary...",
  "Office Order reg. appointment of Director, (Academic Affairs)...",
  "Office Order reg. to constitute a committee...",
  "Office Order reg. constitution of a Committee to prepare an Expression...",
  "Office Order dated 15.07.2024 regarding financial planning updates...",
  "New circular issued on exam schedule changes...",
];

const updates = [
  "Literature at Marginality: Folk Writings of Haryanvi and Bhojpuri Language...",
  "Notice Regarding Fee deposition of Semester Fee...",
  "Result/Successful Completion of Ph.D. Programme...",
  "One-Day National Conference on 'Discourse on Disability'...",
  "Workshop on AI Trends in Education (March 10, 2025)...",
  "New Course Introduction: Environmental Policy Studies...",
];

const ScrollBox = ({ title, items }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const totalHeight = items.length * 40; // Approx height per item

  useEffect(() => {
    let isCancelled = false;

    const animateScroll = async () => {
      while (!isCancelled) {
        if (!isHovered) {
          await controls.start({
            y: `-50%`,
            transition: {
              duration: items.length * 3, // control scroll speed here
              ease: "linear",
            },
          });

          if (!isHovered) {
            await controls.set({ y: 0 });
          }
        }
        await new Promise((r) => setTimeout(r, 100)); // prevent fast loop
      }
    };

    animateScroll();
    return () => {
      isCancelled = true;
    };
  }, [isHovered, items.length, controls]);

  return (
    <div className="w-full lg:w-[37%] border shadow rounded-md bg-gradient-to-br from-[#e0f7fa] to-[#e1f5fe] relative overflow-hidden">
      {/* SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMinYMin slice"
      >
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" fill="#03a9f4" />
      </svg>

      <div className="bg-[#003366] text-white font-bold p-2 text-center rounded-t-md text-sm relative z-10">
        {title}
      </div>

      <div
        className="h-72 overflow-hidden relative z-10"
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={controls}
          className="space-y-2 text-sm p-3"
          style={{ display: "inline-block" }}
        >
          {[...items, ...items].map((item, index) => (
            <p key={index} className="border-b pb-1">
              <span className="text-red-600 mr-1">❖</span>
              {item}
              <Badge className="ml-1" variant="destructive">
                new!
              </Badge>
            </p>
          ))}
        </motion.div>
      </div>

      <div className="pt-2 text-center relative z-10 pb-3">
        <Button variant="outline" size="sm">
          View all
        </Button>
      </div>
    </div>
  );
};
export default function HeroSection() {
  return (
    <div className="w-full mx-auto pb-10">
      {/* Header Top Notification */}
      <div className="bg-white text-red-600 text-sm font-semibold py-1 px-4 flex flex-wrap items-center justify-center border-b border-red-200">
        <p className="animate-pulse">
          ➤ Information of CUET (UG)-2025.{" "}
          <Badge variant="destructive" className="ml-1">
            new!
          </Badge>
        </p>
      </div>

      {/* Banner and Content */}
      <div className="flex flex-col lg:flex-row items-start gap-4 p-4 lg:p-6">
        {/* Left Notifications */}
        <ScrollBox title="NOTIFICATIONS/ OFFICE ORDERS" items={notifications} />

        {/* Center Image Banner */}
        <div className="w-full lg:w-[56%] relative rounded-md overflow-hidden shadow-md flex flex-col items-center justify-center gap-4">
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <img
              src="https://mgcub.ac.in/images/slider/09102023_5.jpg"
              alt="Convocation Ceremony"
              className="w-full h-full object-cover rounded-md"
            />
          </motion.div> */}

          <LatestVideoView />
        </div>

        {/* Right News */}
        <ScrollBox title="LATEST @ MGCU" items={updates} />
      </div>
    </div>
  );
}
