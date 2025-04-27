import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#" },
    { icon: <Twitter className="w-5 h-5" />, url: "#" },
    { icon: <Instagram className="w-5 h-5" />, url: "#" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#" },
    { icon: <Github className="w-5 h-5" />, url: "#" },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Pricing"],
    },
    {
      title: "Quick Links",
      links: ["About Us", "Departments", "Admissions", "Contact"],
    },
    {
      title: "Academics",
      links: ["Our Programs", "Admissions", "Scholarships", "Certifications"],
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms & Conditions",
        "Refund Policy",
        "Disclaimer",
      ],
    },
  ];

  const waveVariants = {
    initial: { x: 0 },
    animate: {
      x: ["0%", "-50%", "0%"],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      {/* Animated wave SVG background */}
      <motion.div
        className="absolute top-0 left-0 w-[200%] h-20"
        variants={waveVariants}
        initial="initial"
        animate="animate"
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-white/10">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-300">Email us</p>
              <a href="mailto: info@edusphere.in" className="font-medium">
                info@edusphere.in
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-white/10">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-300">Call us</p>
              <a href="tel: +91 72310 41011" className="font-medium">
                +91 72310 41011
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-white/10">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-300">Location</p>
              <p className="font-medium">
                Old Market main Road, Near Ration Deepo, Sidhmukh (RAJ) 331701
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-white/20 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-gray-300 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// export const Footer2 = () => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="bg-gradient-to-br from-blue-900 to-sky-700 text-white rounded-t-3xl shadow-2xl pt-12 pb-6 px-6 md:px-16"
//     >
//       <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
//         {/* University Info */}
//         <div>
//           {/* Logo */}
//           <Link
//             to="/about"
//             className="text-xl font-bold flex gap-2 mb-3 items-center"
//           >
//             <img
//               className="w-9 h-9 -my-2 rounded-full"
//               src="./eiit-logo.svg"
//               alt="eiit"
//             />
//             <span className="tracking-wide">EIIT</span>
//           </Link>
//           <h3 className="font-semibold mb-3 underline">
//             EduSphere Institute of Information Technology
//           </h3>
//           <p className="text-sm text-sky-100">
//             Empowering future leaders through innovative education and inclusive
//             learning.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div>
//           <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
//           <ul className="space-y-2 text-sky-100 text-sm">
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li>
//               <Link to="/">Departments</Link>
//             </li>
//             <li>
//               <Link to="/">Admissions</Link>
//             </li>
//             <li>
//               <Link to="/contact-us">Contact</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-xl font-semibold mb-3">Contact</h4>
//           <ul className="text-sky-100 text-sm space-y-2">
//             <li className="flex items-center gap-2">
//               <MapPin size={16} /> Old Market, Near Ration Deepo, Sidhmukh
//               (Rajgarh)
//             </li>
//             <li className="flex items-center gap-2 underline cursor-pointer">
//               <Phone size={16} />{" "}
//               <a href="tel:  +91 72310 41011"> +91 72310 41011</a>
//             </li>
//             {/* <li className="flex items-center gap-2"><Mail size={16} /> info@myuniversity.edu.in</li> */}
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h4 className="text-xl font-semibold mb-3">Subscribe</h4>
//           <p className="text-sm text-sky-100 mb-2">
//             Stay updated with our latest news & announcements
//           </p>
//           <div className="flex items-center space-x-2">
//             <Input placeholder="Your email" className="bg-white text-black" />
//             <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
//               Subscribe
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="mt-8 border-t border-sky-600 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-sky-200">
//         <p>© {new Date().getFullYear()} WebAnd. All rights reserved.</p>
//         <div className="flex space-x-4 mt-4 md:mt-0">
//           <a href="#">
//             <Facebook size={18} className="hover:text-yellow-400" />
//           </a>
//           <a href="#">
//             <Twitter size={18} className="hover:text-yellow-400" />
//           </a>
//           <a href="#">
//             <Linkedin size={18} className="hover:text-yellow-400" />
//           </a>
//           <a href="#">
//             <Instagram size={18} className="hover:text-yellow-400" />
//           </a>
//         </div>
//       </div>
//     </motion.footer>
//   );
// };
