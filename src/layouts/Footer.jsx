import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-900 to-sky-700 text-white rounded-t-3xl shadow-2xl pt-12 pb-6 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* University Info */}
        <div>
          {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold flex gap-2 mb-3 items-center text-yellow-300"
        >
          <img
            className="w-9 h-9 -my-2 rounded-full"
            src="./eiit-logo.svg"
            alt="eiit"
          />
          <span className="tracking-wide">
            E.<span className="text-red-400">I.</span>
            <span className="text-green-400">I.</span>
            <span className="text-blue-400">T</span>
          </span>
        </Link>
          <h3 className="font-semibold mb-3 text-yellow-300 underline">EduSphere Institute of Information Technology</h3>
          <p className="text-sm text-sky-100">
            Empowering future leaders through innovative education and inclusive learning.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sky-100 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Departments</a></li>
            <li><a href="#" className="hover:underline">Admissions</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Contact</h4>
          <ul className="text-sky-100 text-sm space-y-2">
            <li className="flex items-center gap-2"><MapPin size={16} /> Patna, Bihar, India</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 72310 41011</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@myuniversity.edu.in</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Subscribe</h4>
          <p className="text-sm text-sky-100 mb-2">
            Stay updated with our latest news & announcements
          </p>
          <div className="flex items-center space-x-2">
            <Input placeholder="Your email" className="bg-white text-black" />
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-sky-600 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-sky-200">
        <p>© {new Date().getFullYear()} WebAnd. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#"><Facebook size={18} className="hover:text-yellow-400" /></a>
          <a href="#"><Twitter size={18} className="hover:text-yellow-400" /></a>
          <a href="#"><Linkedin size={18} className="hover:text-yellow-400" /></a>
          <a href="#"><Instagram size={18} className="hover:text-yellow-400" /></a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
