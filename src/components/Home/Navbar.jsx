import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const navLinks = [
  { label: "About Us", link: "/about-us" },
  { label: "Library", link: "/library" },
  { label: "Contact Us", link: "/contact-us" },
  { label: "Facilities", link: "/facilites" },
];

export default function Navbar() {
  // Mobile menu toggle state
  const [isOpen, setIsOpen] = useState(false);
  // Mobile dropdown toggle state for Academics
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white overflow-hidden">
      {/* Top Information Bar */}
      <div className="bg-orange-600 text-white text-sm px-4 py-1 overflow-hidden whitespace-nowrap">
        <marquee behavior="scroll" direction="left">
          📢 Welcome to AMI University | Admissions 2025-26
          are now open!
        </marquee>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-10 py-3 bg-white border-b">
        <Link
          to="/"
        >
           <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
      <span className="text-red-600">AMI</span>
      <span className="text-gray-900"> University</span>
    </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 justify-center items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.link}
              className="hover:text-orange-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/login"><Button className="bg-indigo-600 hover:bg-indigo-700 rounded-full cursor-pointer">
              Login
            </Button></Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-orange-50 border-t px-4 py-2 space-y-2 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="block text-orange-800 font-medium border-b py-2"
            >
              {link.label}
            </a>
          ))}

          {/* Academics Dropdown on Mobile */}
          <div>log</div>
        </nav>
      )}
    </header>
  );
}
