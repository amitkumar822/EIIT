// Responsive Navbar with Icons, Notification, Submenus and Dropdowns
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const courses = {
  "Computer Courses": [
    "RS-CIT",
    "CCC",
    "DFA",
    "TALLY",
    "ADCA",
    "CCB",
    "ADFA",
    "CFA",
    "MS- OFFICE",
    "RS-CFA",
    "RS-CSEP",
  ],
  "Vocational Courses": [
    "NTT",
    "Fire & Safety",
    "YTT",
    "ECCE",
    "Silai Certificate",
  ],
};

const navItems = [
  { label: "Home" },
  {
    label: "About",
    submenu: ["About", "Gallery", "Legal Document", "Testimonial"],
  },
  {
    label: "Courses",
    submenu: [
      {
        label: "Computer Courses",
        submenu: courses["Computer Courses"],
      },
      {
        label: "Vocational Courses",
        submenu: courses["Vocational Courses"],
      },
    ],
  },
  {
    label: "Study Center",
    submenu: ["Apply", "Most"],
  },
  { label: "Contact Us" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrollingText, setScrollingText] = useState(true);

  return (
    <div className="relative z-50 text-white shadow-lg md:sticky top-0">
      {/* Notification Bar */}
      <div className=" bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 border-y border-white">
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
            className="whitespace-nowrap text-xs font-medium"
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
            className="whitespace-nowrap text-xs font-medium"
          >
            🎓 Exclusive Offers for Early Registrations. Apply Now!
          </motion.div>
        </div>
      </div>

      {/* Navbar */}
      <nav className=" px-4 py-3 flex md:justify-evenly justify-between items-center bg-blue-900">
        <div className="text-xl font-bold flex gap-2 justify-center items-center text-yellow-300">
          <img
            className="w-9 -my-2 rounded-full"
            src="./eiit-logo.svg"
            alt="eiit"
          />
          <span className="text-white tracking-wide">
            E.<span className="text-red-400">I.</span>
            <span className="text-green-400">I.</span>
            <span className="text-blue-400">T</span>
          </span>
        </div>

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
              <span className="flex items-center gap-1 hover:text-yellow-300 transition-all">
                {item.label}
                {item.submenu && (
                  <motion.div animate={{ rotate: activeIndex === i ? 180 : 0 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                )}
              </span>
              {item.submenu && (
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 top-full bg-blue-800 text-white rounded shadow-xl mt-2 py-2 w-56 border border-white z-50"
                    >
                      {item.submenu.map((sub, j) =>
                        typeof sub === "string" ? (
                          <li
                            key={j}
                            className="px-4 py-2 hover:bg-blue-700 border-b last:border-b-0 border-dotted border-gray-400"
                          >
                            {sub}
                          </li>
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
                                className="absolute top-0 left-full w-56 bg-blue-800 text-white border border-white rounded shadow-xl z-50"
                              >
                                {sub.submenu.map((deep, k) => (
                                  <li
                                    key={k}
                                    className="px-4 py-2 hover:bg-blue-700 border-b last:border-b-0 border-dotted border-gray-400"
                                  >
                                    {deep}
                                  </li>
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
                <button
                  onClick={() => setOpenSubmenu(openSubmenu === i ? null : i)}
                  className="w-full text-left py-2 font-semibold flex justify-between items-center border-b border-white"
                >
                  {item.label}
                  {item.submenu && (
                    <motion.div
                      animate={{ rotate: openSubmenu === i ? 180 : 0 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  )}
                </button>
                <AnimatePresence>
                  {openSubmenu === i && item.submenu && (
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="ml-4 mt-1 text-sm"
                    >
                      {item.submenu.map((sub, j) =>
                        typeof sub === "string" ? (
                          <li
                            key={j}
                            className="py-1 border-b border-dotted border-white"
                          >
                            {sub}
                          </li>
                        ) : (
                          <div key={j}>
                            <div className="font-medium mt-2">{sub.label}</div>
                            <ul className="ml-4">
                              {sub.submenu.map((deep, k) => (
                                <li
                                  key={k}
                                  className="py-1 border-b border-dotted border-white"
                                >
                                  {deep}
                                </li>
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
