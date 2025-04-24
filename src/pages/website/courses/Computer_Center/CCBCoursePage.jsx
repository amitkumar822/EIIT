import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Laptop,
  BookOpen,
  Briefcase,
  Award,
  Users,
  CheckCircle,
  ChevronDown,
  GraduationCap,
  Clock,
  Calendar,
  Smartphone,
  Globe,
  FileText,
  Quote,
  MousePointerClick,
  Code,
  Database,
  Cpu,
} from "lucide-react";

export const CCBCoursePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fresh Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0"></div>
        <BlobBackground />
        <FloatingIcons />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Master Computer Basics with{" "}
                <span className="text-blue-300">CCB</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Your first step into the digital world. Learn essential computer
                skills from scratch in our beginner-friendly course.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Enroll Now
                </button>
                <button className="bg-transparent border-2 border-blue-400 hover:bg-blue-900/50 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Course Highlights
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-blue-100">
                        No prior experience needed
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-blue-100">
                        Hands-on practical training
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-blue-100">
                        Industry-recognized certification
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-blue-100">
                        Flexible learning options
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white transform skew-y-3 origin-top-left z-0"></div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              What You'll Learn
            </motion.h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive curriculum covers all essential computer skills
              for beginners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden border border-gray-100"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <PatternBackground color="blue" />
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Cpu className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                Computer Fundamentals
              </h3>
              <p className="text-gray-600 text-center relative z-10">
                Understand hardware, software, and basic operations of a
                computer system.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden border border-gray-100"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <PatternBackground color="indigo" />
              <div className="flex justify-center mb-6">
                <div className="bg-indigo-100 p-4 rounded-xl">
                  <Laptop className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                Operating Systems
              </h3>
              <p className="text-gray-600 text-center relative z-10">
                Master file management, system settings, and user accounts on
                Windows.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden border border-gray-100"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <PatternBackground color="purple" />
              <div className="flex justify-center mb-6">
                <div className="bg-purple-100 p-4 rounded-xl">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                Internet & Email
              </h3>
              <p className="text-gray-600 text-center relative z-10">
                Learn web browsing, search techniques, email, and online safety
                practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Detailed Curriculum
            </motion.h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive modules covering all essential aspects of computer
              basics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className={`p-8 relative overflow-hidden ${
                    index % 3 === 0
                      ? "bg-blue-50"
                      : index % 3 === 1
                      ? "bg-indigo-50"
                      : "bg-purple-50"
                  }`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    {module.icon}
                  </div>
                  <div className="flex items-center mb-6 relative z-10">
                    <div
                      className={`p-3 rounded-lg mr-4 ${
                        index % 3 === 0
                          ? "bg-blue-100 text-blue-600"
                          : index % 3 === 1
                          ? "bg-indigo-100 text-indigo-600"
                          : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {module.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {module.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 relative z-10">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle
                          className={`w-5 h-5 ${
                            index % 3 === 0
                              ? "text-blue-500"
                              : index % 3 === 1
                              ? "text-indigo-500"
                              : "text-purple-500"
                          } mt-0.5 mr-2 flex-shrink-0`}
                        />
                        <span className="text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              What Our Students Say
            </motion.h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our graduates about their learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 p-4 text-blue-200">
                  <Quote className="w-8 h-8" />
                </div>
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-200"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic relative z-10">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div
                    className={`bg-${
                      index % 3 === 0
                        ? "blue"
                        : index % 3 === 1
                        ? "indigo"
                        : "purple"
                    }-100 text-${
                      index % 3 === 0
                        ? "blue"
                        : index % 3 === 1
                        ? "indigo"
                        : "purple"
                    }-600 font-semibold w-12 h-12 rounded-full flex items-center justify-center mr-4`}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about the CCB course
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="mb-4">
                    <AccordionTrigger
                      className={`p-4 rounded-lg hover:no-underline ${
                        index % 2 === 0
                          ? "bg-blue-50 hover:bg-blue-100"
                          : "bg-purple-50 hover:bg-purple-100"
                      }`}
                    >
                      <div className="flex items-center gap-3 text-left">
                        <ChevronDown className="w-5 h-5 shrink-0 transition-transform duration-200" />
                        <span className="font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h1200v400H0z" fill="url(#cta-gradient)" />
            <defs>
              <linearGradient
                id="cta-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            <path
              d="M0 100C150 50 350 150 500 100s300-100 450 50 250 150 400 100"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0 250C150 200 350 300 500 250s300-100 450 50 250 150 400 100"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our CCB course today and gain the essential computer skills
              you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Advisor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    name: "Aarav Patel",
    role: "Student",
    content:
      "The CCB course gave me the confidence to use computers effectively in my college projects and personal work.",
    rating: 5,
  },
  {
    id: 2,
    name: "Neha Gupta",
    role: "Office Assistant",
    content:
      "After completing CCB, I was promoted to handle digital documentation at my workplace. The practical skills were immediately applicable.",
    rating: 4,
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Small Business Owner",
    content:
      "This course helped me digitize my shop's records and start accepting digital payments. Game changer for my business!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What is CCB?",
    answer:
      "CCB (Computer Concept & Basics) is a foundational computer literacy program designed to teach essential digital skills to beginners with no prior experience.",
  },
  {
    question: "Who should take this course?",
    answer:
      "Absolute beginners, seniors, homemakers, small business owners, or anyone who wants to gain confidence in using computers and the internet.",
  },
  {
    question: "What will I learn in CCB?",
    answer:
      "You'll learn computer fundamentals, operating systems, word processing, spreadsheets, internet basics, email, and digital safety practices.",
  },
  {
    question: "Is there any certification?",
    answer:
      "Yes, upon successful completion, you'll receive a CCB certification recognized by our education partners.",
  },
  {
    question: "What are the technical requirements?",
    answer:
      "No special requirements. We provide all training computers. You just need enthusiasm to learn!",
  },
];

const modules = [
  {
    title: "Computer Fundamentals",
    icon: <Cpu className="w-8 h-8" />,
    topics: [
      "Hardware components",
      "Software types",
      "Input/Output devices",
      "Storage concepts",
    ],
  },
  {
    title: "Operating Systems",
    icon: <Laptop className="w-8 h-8" />,
    topics: [
      "Windows basics",
      "File management",
      "System settings",
      "User accounts",
    ],
  },
  {
    title: "Word Processing",
    icon: <FileText className="w-8 h-8" />,
    topics: [
      "Document creation",
      "Formatting text",
      "Tables & graphics",
      "Printing documents",
    ],
  },
  {
    title: "Spreadsheets",
    icon: <Database className="w-8 h-8" />,
    topics: ["Data entry", "Basic formulas", "Charts creation", "Data sorting"],
  },
  {
    title: "Internet & Email",
    icon: <Globe className="w-8 h-8" />,
    topics: [
      "Web browsing",
      "Search techniques",
      "Email management",
      "Online safety",
    ],
  },
  {
    title: "Digital Lifestyle",
    icon: <Smartphone className="w-8 h-8" />,
    topics: [
      "Mobile basics",
      "Digital payments",
      "Social media",
      "Cloud storage",
    ],
  },
];

// Floating Icons Component for Hero Section
const FloatingIcons = () => {
  const icons = [
    {
      icon: <Laptop className="w-8 h-8 text-blue-400" />,
      position: "top-20 left-1/4",
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-indigo-400" />,
      position: "top-1/3 right-1/4",
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      position: "bottom-1/4 left-1/5",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-400" />,
      position: "bottom-20 right-1/3",
    },
  ];

  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} hidden lg:block`}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [20, 0, -10, -20],
          }}
          transition={{
            duration: 15 + index * 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: index * 2,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </>
  );
};

// Abstract Blob Background
const BlobBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10">
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        fill="#3B82F6"
        d="M45.7,-65.2C58.4,-56.9,67.3,-42.1,73.8,-25.8C80.3,-9.5,84.4,8.3,79.6,23.8C74.8,39.3,61.1,52.5,45.2,62.3C29.3,72.1,11.2,78.5,-6.7,86.7C-24.6,94.9,-49.2,104.9,-63.3,95.4C-77.4,85.9,-81,56.9,-77.1,32.9C-73.2,8.9,-61.7,-10.1,-52.6,-28.3C-43.5,-46.5,-36.7,-64,-23.4,-71.8C-10.1,-79.6,9.7,-77.7,25.9,-69.9C42.1,-62.1,54.6,-48.4,45.7,-65.2Z"
        transform="translate(100 100)"
      />
    </svg>
  </div>
);

// Pattern Background Component
const PatternBackground = ({ color = "blue" }) => {
  const colors = {
    blue: "text-blue-100",
    indigo: "text-indigo-100",
    purple: "text-purple-100",
    teal: "text-teal-100",
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden opacity-20 ${colors[color]}`}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill="currentColor" />
        <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="50" cy="20" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="80" cy="20" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="20" cy="50" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="80" cy="50" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="20" cy="80" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="50" cy="80" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="80" cy="80" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    </div>
  );
};
