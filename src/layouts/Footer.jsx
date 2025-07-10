import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, School, Clock
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook size={20} />, url: "#" },
    { icon: <FaTwitter size={20} />, url: "#" },
    { icon: <FaInstagram size={20} />, url: "#" },
    { icon: <FaYoutube size={20} />, url: "#" },
    { icon: <FaLinkedin size={20} />, url: "#" },
  ];

  const quickLinks = [
    { name: "About Us", url: "#" },
    { name: "Admissions", url: "#" },
    { name: "Academics", url: "#" },
    { name: "Events", url: "#" },
    { name: "News", url: "#" },
    { name: "Contact", url: "#" },
  ];

  const contactInfo = [
    { icon: <MapPin size={18} />, text: "123 Education St, Learning City" },
    { icon: <Mail size={18} />, text: "info@schoolname.edu" },
    { icon: <Phone size={18} />, text: "+1 (555) 123-4567" },
    { icon: <Clock size={18} />, text: "Mon-Fri: 8:00 AM - 4:00 PM" },
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900 text-white pt-16 pb-8">
      {/* Background SVG */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg
          className="absolute -top-20 -left-20 w-[800px] h-[800px]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFFFFF"
            d="M45.8,-45.8C59.1,-32.5,70,-16.2,70.7,0.7C71.4,17.6,61.9,35.2,48.6,48.6C35.2,61.9,17.6,71,-1.1,72.1C-19.8,73.2,-39.6,66.3,-52.9,53C-66.3,39.6,-73.2,19.8,-72.1,0.9C-71,-18,-61.9,-35.9,-48.6,-49.2C-35.9,-61.9,-18,-70,0,-70C18,-70,32.5,-59.1,45.8,-45.8Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute bottom-10 right-10 w-[500px] h-[500px]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFFFFF"
            d="M39.4,-39.4C51.2,-27.6,61,-13.8,60.9,0.1C60.8,14,50.7,28,38.9,41.8C27,55.7,13.5,69.4,-2.8,72.2C-19.1,75,-38.2,66.9,-52.1,53C-66,39.2,-74.6,19.6,-74.5,0.1C-74.4,-19.4,-65.5,-38.8,-51.6,-50.6C-37.8,-62.4,-18.9,-66.6,-0.7,-66C17.6,-65.3,35.1,-59.8,39.4,-39.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Logo and Description */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <School size={32} className="text-blue-300" />
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">
                EIIT
              </h3>
            </div>
            <p className="text-gray-300">
              Empowering students with knowledge, skills, and values to succeed in a rapidly changing world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-gray-300"
                >
                  <span className="text-blue-300 mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} EIIT. All rights
            reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;


// import { Link } from "react-router";
// import { motion } from "framer-motion";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Github,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

// const Footer = () => {


//   const waveVariants = {
//     initial: { x: 0 },
//     animate: {
//       x: ["0%", "-50%", "0%"],
//       transition: {
//         duration: 15,
//         repeat: Infinity,
//         ease: "linear",
//       },
//     },
//   };

//   return (
//     <footer className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
//       {/* Animated wave SVG background */}
//       <motion.div
//         className="absolute top-0 left-0 w-[200%] h-20"
//         variants={waveVariants}
//         initial="initial"
//         animate="animate"
//       >
//         <svg
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//           className="w-full h-full"
//         >
//           <path
//             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//             opacity=".25"
//             fill="currentColor"
//           ></path>
//           <path
//             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//             opacity=".5"
//             fill="currentColor"
//           ></path>
//           <path
//             d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//             fill="currentColor"
//           ></path>
//         </svg>
//       </motion.div>

//       <div className="container mx-auto px-4 pt-24 pb-12">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* Footer links */}
//           {footerLinks.map((section, index) => (
//             <motion.div
//               key={section.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
//               <ul className="space-y-2">
//                 {section.labels.map((item, index) => (
//                   <li key={index}>
//                     <Link
//                       to={item.navLink}
//                       className="text-gray-300 hover:text-white transition-colors"
//                     >
//                       {item.subTitle}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>

//         {/* Contact info */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-full bg-white/10">
//               <Mail className="w-5 h-5" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-300">Email us</p>
//               <a href="mailto: info@edusphere.in" className="font-medium">
//                 info@edusphere.in
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-full bg-white/10">
//               <Phone className="w-5 h-5" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-300">Call us</p>
//               <a href="tel: +91 72310 41011" className="font-medium">
//                 +91 72310 41011
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-full bg-white/10">
//               <MapPin className="w-5 h-5" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-300">Location</p>
//               <p className="font-medium">
//                 Old Market main Road, Near Ration Deepo, Sidhmukh (RAJ) 331701
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Divider */}
//         <motion.div
//           className="w-full h-px bg-white/20 my-8"
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         />

//         {/* Bottom section */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//           <motion.p
//             className="text-gray-300 text-sm"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             © {new Date().getFullYear()} Your Company. All rights reserved.
//           </motion.p>

//           <motion.div
//             className="flex gap-4"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5, staggerChildren: 0.1 }}
//             viewport={{ once: true }}
//           >
//             {socialLinks.map((social, index) => (
//               <motion.a
//                 key={index}
//                 href={social.url}
//                 target="_blanck"
//                 className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
//                 whileHover={{ y: -3 }}
//                 whileTap={{ scale: 0.9 }}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 {social.icon}
//               </motion.a>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// const socialLinks = [
//   { icon: <Facebook className="w-5 h-5" />, url: "https://www.facebook.com/share/1BsR7yWYbb/?mibextid=wwXIfr" },
//   { icon: <Twitter className="w-5 h-5" />, url: "#" },
//   { icon: <Instagram className="w-5 h-5" />, url: "#" },
//   { icon: <Linkedin className="w-5 h-5" />, url: "#" },
//   { icon: <Github className="w-5 h-5" />, url: "#" },
// ];

// const footerLinks = [
//   {
//     title: "Company",
//     labels: [
//       { subTitle: "About", navLink: "/about" },
//       { subTitle: "Careers", navLink: "/careers" },
//       { subTitle: "Blog", navLink: "/blog" },
//       { subTitle: "Pricing", navLink: "/pricing" },
//     ],
//   },
//   {
//     title: "Quick Links",
//     labels: [
//       { subTitle: "About Us", navLink: "/about" },
//       { subTitle: "Departments", navLink: "/departments" },
//       { subTitle: "Admissions", navLink: "/admissions/apply" },
//       { subTitle: "Contact Us", navLink: "/contact-us" },
//     ],
//   },
//   {
//     title: "Academics",
//     labels: [
//       { subTitle: "Our Programs", navLink: "/programs" },
//       { subTitle: "Admissions", navLink: "/admissions" },
//       { subTitle: "Scholarships", navLink: "/scholarships" },
//       { subTitle: "Certifications", navLink: "/certifications" },
//     ],
//   },
//   {
//     title: "Legal",
//     labels: [
//       { subTitle: "Privacy Policy", navLink: "/privacy-policy" },
//       { subTitle: "Terms & Conditions", navLink: "/terms-conditions" },
//       { subTitle: "Refund Policy", navLink: "/refund-policy" },
//       { subTitle: "Disclaimer", navLink: "/disclaimer" },
//     ],
//   },
// ];