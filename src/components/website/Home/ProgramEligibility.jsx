import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

export default function ProgramEligibility() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 py-16 bg-gradient-to-br from-[#e0f7fa] to-[#e1f5fe]">
      {/* Left Side */}
      <motion.div
        className="w-full lg:w-full mt-12 lg:mt-0 border-2 border-dashed border-red-400 rounded-3xl p-2 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: true }}
      >
        <img
          src={"/Banner_Image/all_course_with_graduation.jpg"}
          className="rounded-2xl"

          alt="all_course_banner"
        />
      </motion.div>

      {/* Right side with SVG background */}
      <div className="relative z-10 w-full lg:w-1/2 p-6 md:p-10 rounded-2xl shadow-md bg-gradient-to-br from-[#e0f7fa] to-[#e1f5fe] overflow-hidden">
        {/* SVG Background */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
          viewBox="0 0 500 500"
          preserveAspectRatio="xMinYMin slice"
        >
          <path
            d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            fill="#d939f5"
          />
        </svg>

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-red-600">Program</span> Eligibility
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            EIIT Institute welcomes students, job seekers, and working
            professionals from all backgrounds. Most programs are open to
            candidates who have completed at least 10th or 12th grade.
            University and diploma courses may require 12th or graduation based
            on the program.
            <br />
            <br />
            Eligible candidates can apply for:{" "}
            {courses.map((course, index) => (
              <span key={index} className="font-semibold">
                {course}
                {index < courses.length - 1 ? ", " : "."}
              </span>
            ))}
            <br />
            <br />
            Degree programs available include:{" "}
            <span className="font-semibold">
              B.A., B.Com, BBA, BCA, M.A., M.Sc., MBA, PGDCA, B.Lib, M.Lib
            </span>{" "}
            through distance and university education.
          </p>
          <Button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-2.5 rounded-md shadow hover:opacity-90 transition">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
}

const courses = [
  "RS-CIT",
  "CCC",
  "RS-CFA",
  "RS-CSEP",
  "Tally with GST",
  "MS Office",
  "Typing (Hindi & English)",
  "DCA",
  "ADCA",
  "Y.T.T.",
  "N.T.T.",
  "Fire & Safety",
  "All Computer Courses",
];
