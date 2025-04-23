
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, Video, BookOpenCheck, School } from "lucide-react";

export default function ProgramOverview() {
  return (
    <>
      <div className="w-full bg-red-500">
        <img
          src="https://cdn-websites.talentedge.com/CHANDIGARH/public_html/assets/assets/img/mca-lp/nirf-ranking-logos.png"
          alt="College Rank Poster"
        />
      </div>
      <section className="flex relative flex-col lg:flex-row items-center justify-between px-4 md:px-12 py-16 bg-gradient-to-br from-[#e0f7fa] to-[#e1f5fe]">
        {/* SVG Background */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
          viewBox="0 0 500 500"
          preserveAspectRatio="xMinYMin slice"
        >
          <path
            d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            fill="#03a9f4"
          />
        </svg>

        {/* Left side with SVG background */}
        <div className="relative z-10 w-full lg:w-1/2 p-6 md:p-10 rounded-2xl shadow-md bg-gradient-to-br from-[#e0f7fa] to-[#e1f5fe] overflow-hidden">
          {/* SVG Background */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin slice"
          >
            <path
              d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
              fill="#03a9f4"
            />
          </svg>

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="text-red-600">Program</span> Overview
            </h2>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              The online{" "}
              <span className="font-semibold">
                Master of Computer Application (MCA)
              </span>{" "}
              program by Our University is designed to lay the foundation
              for students to thrive in the IT industry. The program focuses on
              system programming, database management, networking, web design,
              and AI through a world-class curriculum and tools.
            </p>
            <Button className="text-base px-6 py-3 rounded-md cursor-pointer shadow-md shadow-gray-600">
              Apply Now
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          className="w-full lg:w-1/2 mt-12 lg:mt-0 border-2 border-dashed border-red-400 rounded-3xl p-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Top Left */}
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center text-center">
              <GraduationCap className="text-red-600 w-10 h-10 mb-3" />
              <p className="font-semibold text-base">2 Year</p>
              <p className="text-sm text-gray-600">Online Program</p>
            </div>

            {/* Top Right */}
            <div className="bg-red-600 rounded-xl p-6 flex flex-col items-center text-center text-white">
              <Video className="w-10 h-10 mb-3" />
              <p className="font-semibold text-base">Live + Recorded</p>
              <p className="text-sm">Industry Expert Lectures</p>
            </div>

            {/* Bottom Left */}
            <div className="bg-red-600 rounded-xl p-6 flex flex-col items-center text-center text-white">
              <BookOpenCheck className="w-10 h-10 mb-3" />
              <p className="font-semibold text-base">4 Diverse Electives</p>
              <p className="text-sm">incl. Data Analytics & AI ML</p>
            </div>

            {/* Bottom Right */}
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center text-center">
              <School className="text-red-600 w-10 h-10 mb-3" />
              <p className="font-semibold text-base">Graduate with 50%</p>
              <p className="text-sm text-gray-600">Maths in 12th (10+2)</p>
            </div>

            {/* Center Image */}
            <img
              src="https://cdn-websites.talentedge.com/CHANDIGARH/public_html/assets/assets/img/mca-lp/program-overview.png"
              alt="Program"
              className="absolute top-1/2 left-1/2 w-24 h-24 md:w-28 md:h-28 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-xl shadow-lg z-20"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
