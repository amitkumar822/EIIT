// Responsive Navbar with Icons, Notification, Submenus and Dropdowns
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Languages } from "lucide-react";
import { Link } from "react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { GoogleTranslate } from "@/components/GoogleTranslate";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrollingText, setScrollingText] = useState(true);

  return (
    <div className="relative z-50 text-white shadow-lg md:fixed w-full top-0">
      {/* Notification Bar */}
      <div className="flex items-center  bg-gradient-to-r from-yellow-600 via-red-500 to-pink-500  border-y border-white">
        <span className="md:pl-4 md:font-semibold md:text-sm text-[9px] text-white font-bold md:tracking-wide text-nowrap">
          Mon-Sat(10AM-6PM)
        </span>
        <div className="md:w-[85%] mx-auto flex justify-between items-center py-1 px-4 overflow-hidden">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={
              scrollingText
                ? { repeat: Infinity, duration: 30, ease: "linear" }
                : null
            }
            onMouseEnter={() => setScrollingText(false)}
            onMouseLeave={() => setScrollingText(true)}
            className="whitespace-nowrap text-xs md:text-sm font-medium text-white"
          >
            📢 Admissions Open for 2025! Enroll in Computer & Vocational Courses
            Today!
          </motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={
              scrollingText
                ? { repeat: Infinity, duration: 30, ease: "linear" }
                : null
            }
            onMouseEnter={() => setScrollingText(false)}
            onMouseLeave={() => setScrollingText(true)}
            className="whitespace-nowrap text-xs md:text-sm font-medium text-white"
          >
            🎓 Exclusive Offers for Early Registrations. Apply Now!
          </motion.div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="px-4 py-3 flex justify-between items-center bg-blue-900">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold flex gap-2 justify-center items-center"
        >
          <img
            className="w-9 h-9 -my-2 rounded-full"
            src="./eiit-logo.svg"
            alt="eiit"
          />
          <span className="tracking-wide">EIIT</span>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Link
                to={item?.navLink}
                className="flex items-center gap-1 hover:text-yellow-300 transition-all"
              >
                {item.label}
                {item.submenu && (
                  <motion.div animate={{ rotate: activeIndex === i ? 180 : 0 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                )}
              </Link>
              {item.submenu && (
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 top-full bg-blue-800 flex flex-col text-white rounded shadow-xl mt-2 py-2 w-56 border border-white z-50"
                    >
                      {item.submenu?.map((sub, j) =>
                        typeof sub?.title === "string" ? (
                          <Link
                            key={j}
                            to={sub?.navLink}
                            className="px-4 py-2 hover:bg-blue-700 border-b last:border-b-0 border-dotted border-gray-400"
                          >
                            {sub?.title}
                          </Link>
                        ) : (
                          <div
                            key={j}
                            className="relative"
                            onMouseEnter={() => setHoveredSubmenu(j)}
                            onMouseLeave={() => setHoveredSubmenu(null)}
                          >
                            <div className="flex justify-between px-4 py-2 hover:bg-blue-700 cursor-pointer">
                              {sub.label}
                              <motion.div
                                animate={{
                                  rotate: hoveredSubmenu === j ? 90 : 0,
                                }}
                              >
                                <ChevronRight className="w-4 h-4" />
                              </motion.div>
                            </div>
                            {hoveredSubmenu === j && (
                              <motion.ul
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="absolute top-0 left-full flex flex-col w-56 bg-blue-800 text-white border border-white rounded shadow-xl z-50"
                              >
                                {sub.submenu.map((deep, k) => (
                                  <Link
                                    key={k}
                                    to={deep?.navLink}
                                    className="px-4 py-2 hover:bg-blue-700 border-b last:border-b-0 border-dotted border-gray-400"
                                  >
                                    {deep?.title}
                                  </Link>
                                ))}
                              </motion.ul>
                            )}
                          </div>
                        )
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </ul>

        <div className="hidden md:flex">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex items-center space-x-2 justify-center">
                <Languages className="w-5 h-5 text-white" />
                <GoogleTranslate />
              </TooltipTrigger>
              <TooltipContent>
                <p>Google Translate</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-blue-900 text-white overflow-hidden px-4 pb-4"
          >
            {navItems.map((item, i) => (
              <div key={i} className="mt-2">
                <Link
                  to={item?.navLink}
                  onClick={() => {
                    setOpenSubmenu(openSubmenu === i ? null : i);

                    {
                      (item?.navLink === "/" ||
                        item?.navLink === "/contact-us") &&
                        setMobileMenuOpen(!mobileMenuOpen);
                    }
                  }}
                  className="w-full text-left py-2 font-semibold flex justify-between items-center border-b border-white"
                >
                  {item?.label}
                  {item.submenu && (
                    <motion.div
                      animate={{ rotate: openSubmenu === i ? 180 : 0 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  )}
                </Link>
                <AnimatePresence>
                  {openSubmenu === i && item.submenu && (
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="ml-4 mt-1 text-sm"
                    >
                      {item.submenu?.map((sub, j) =>
                        typeof sub?.title === "string" ? (
                          <Link
                            key={j}
                            to={sub?.navLink}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="px-4 py-2 flex flex-col hover:bg-blue-700 border-b last:border-b-0 border-dotted border-gray-400"
                          >
                            {sub?.title}
                          </Link>
                        ) : (
                          <div key={j}>
                            <div className="font-medium mt-2">{sub.label}</div>
                            <ul className="ml-4">
                              {sub.submenu.map((deep, k) => (
                                <Link
                                  key={k}
                                  to={deep?.navLink}
                                  onClick={() =>
                                    setMobileMenuOpen(!mobileMenuOpen)
                                  }
                                  className="px-4 py-2 flex flex-col hover:bg-blue-700 border-b last:border-b-0 border-dotted border-gray-400"
                                >
                                  {deep?.title}
                                </Link>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const courses = {
  "Computer Courses": [
    { title: "RS-CSEP", navLink: "/computer-courses/rs-csep" },
    { title: "RS-CFA", navLink: "/computer-courses/rs-cfa" },
    { title: "RS-CIT", navLink: "/computer-courses/rs-cit" },
    { title: "CCC", navLink: "/computer-courses/ccc" },
    { title: "DFA", navLink: "/computer-courses/dfa" },
    { title: "TALLY", navLink: "/computer-courses/tally" },
    { title: "ADCA", navLink: "/computer-courses/adca" },
    { title: "CCB", navLink: "/computer-courses/ccb" },
    { title: "ADFA", navLink: "/computer-courses/adfa" },
    { title: "CFA", navLink: "/computer-courses/cfa" },
    { title: "MS- OFFICE", navLink: "/computer-courses/ms-office" },
  ],
  "Vocational Courses": [
    { title: "YTT", navLink: "/vocational-courses/ytt" },
    { title: "ECCE", navLink: "/vocational-courses/ecce" },
    { title: "NTT", navLink: "/vocational-courses/ntt" },
    {
      title: "Silai Certificate",
      navLink: "/vocational-courses/silai-certificate",
    },
    { title: "Fire & Safety", navLink: "/vocational-courses/fire-safty" },
  ],
};

const navItems = [
  { label: "Home", navLink: "/" },
  {
    label: "About",
    submenu: [
      { title: "About", navLink: "/about" },
      { title: "Gallery", navLink: "/gallery" },
      { title: "Legal Document", navLink: "/legal-document" },
      { title: "Testimonial", navLink: "/testimonial" },
    ],
  },
  {
    label: "Courses",
    submenu: [
      {
        label: "Vocational Courses",
        submenu: courses["Vocational Courses"],
      },
      {
        label: "Computer Courses",
        submenu: courses["Computer Courses"],
      },
      
    ],
  },
  {
    label: "Login",
    submenu: [
      { title: "Student Login", navLink: "/student-login" },
      // { title: "Most", navLink: "/study-center/most" },
    ],
  },
  { label: "Contact Us", navLink: "/contact-us" },
];
