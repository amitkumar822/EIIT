import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export const ADCAPage = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const courseModules = [
    {
      title: "Computer Fundamentals",
      topics: [
        "Introduction to Computers",
        "Operating Systems",
        "Computer Hardware Basics",
        "Software Concepts",
        "File Management",
      ],
    },
    {
      title: "Office Automation",
      topics: [
        "MS Word - Advanced Features",
        "MS Excel - Formulas & Charts",
        "MS PowerPoint - Presentations",
        "MS Access - Database Management",
        "Office Integration",
      ],
    },
    {
      title: "Programming Concepts",
      topics: [
        "Algorithm & Flowcharts",
        "C Programming Basics",
        "C++ Object-Oriented Concepts",
        "Java Fundamentals",
        "Python Introduction",
      ],
    },
    {
      title: "Web Technologies",
      topics: [
        "HTML5 & CSS3",
        "JavaScript Basics",
        "Responsive Web Design",
        "Content Management Systems",
        "Web Hosting Basics",
      ],
    },
    {
      title: "Database Management",
      topics: [
        "RDBMS Concepts",
        "SQL Queries",
        "Normalization",
        "MySQL Practicals",
        "Database Connectivity",
      ],
    },
    {
      title: "Networking & Internet",
      topics: [
        "Networking Fundamentals",
        "Internet Concepts",
        "Email & Communication Tools",
        "Cyber Security Basics",
        "Cloud Computing Intro",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "ADCA Graduate, 2022",
      content:
        "The ADCA course at EduSphere transformed my career. The practical approach helped me secure a job immediately after completion.",
    },
    {
      name: "Priya Patel",
      role: "Office Administrator",
      content:
        "The comprehensive curriculum covered everything from basic computing to advanced office tools. Highly recommended!",
    },
    {
      name: "Amit Kumar",
      role: "Web Developer",
      content:
        "The web technologies module gave me the foundation I needed to start my freelancing career in web development.",
    },
  ];

  const careerPaths = [
    {
      title: "Data Entry Operator",
      salary: "₹15,000 - ₹25,000/month",
      description: "Handle data management tasks in various industries",
    },
    {
      title: "Office Assistant",
      salary: "₹18,000 - ₹30,000/month",
      description: "Manage office operations with computer proficiency",
    },
    {
      title: "Computer Operator",
      salary: "₹20,000 - ₹35,000/month",
      description: "Oversee computer systems and operations in organizations",
    },
    {
      title: "Frontend Developer",
      salary: "₹25,000 - ₹50,000/month",
      description: "Build user interfaces with HTML, CSS, and JavaScript",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <circle cx="20" cy="20" r="3" fill="white" />
            <circle cx="50" cy="50" r="3" fill="white" />
            <circle cx="80" cy="80" r="3" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced Diploma in Computer Applications (ADCA)
              </h1>
              <p className="text-xl mb-8">
                Master essential computer skills and kickstart your IT career
                with our comprehensive ADCA program at EduSphere Institute.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold shadow-lg flex items-center"
              >
                Enroll Now <ArrowRight className="ml-2" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 flex justify-center"
            >
              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="400" height="400" rx="20" fill="#4F46E5" />
                <rect
                  x="50"
                  y="50"
                  width="300"
                  height="200"
                  rx="10"
                  fill="#6366F1"
                />
                <circle cx="100" cy="350" r="30" fill="#818CF8" />
                <circle cx="200" cy="350" r="30" fill="#A5B4FC" />
                <circle cx="300" cy="350" r="30" fill="#C7D2FE" />
                <rect
                  x="70"
                  y="80"
                  width="80"
                  height="20"
                  rx="5"
                  fill="#E0E7FF"
                />
                <rect
                  x="70"
                  y="120"
                  width="120"
                  height="20"
                  rx="5"
                  fill="#E0E7FF"
                />
                <rect
                  x="70"
                  y="160"
                  width="160"
                  height="20"
                  rx="5"
                  fill="#E0E7FF"
                />
                <rect
                  x="250"
                  y="80"
                  width="80"
                  height="80"
                  rx="10"
                  fill="#E0E7FF"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Course Overview
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our ADCA program is designed to provide students with
              comprehensive knowledge of computer applications, covering
              everything from basic computing to advanced programming concepts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Laptop size={48} className="text-indigo-600" />,
                title: "Practical Learning",
                description:
                  "Hands-on training with real-world applications and projects.",
              },
              {
                icon: <Users size={48} className="text-indigo-600" />,
                title: "Expert Faculty",
                description:
                  "Learn from industry professionals with years of experience.",
              },
              {
                icon: <Award size={48} className="text-indigo-600" />,
                title: "Certification",
                description:
                  "Recognized certification upon successful completion.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-indigo-50 rounded-xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our ADCA Program?</h3>
                <ul className="space-y-4">
                  {[
                    "Comprehensive curriculum covering all essential computer applications",
                    "Industry-relevant skills for immediate job placement",
                    "Flexible batch timings for working professionals",
                    "State-of-the-art computer labs",
                    "Placement assistance upon course completion"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="150" cy="150" r="140" fill="#6366F1" stroke="#4F46E5" strokeWidth="2"/>
                  <rect x="80" y="80" width="140" height="140" rx="10" fill="#818CF8"/>
                  <circle cx="110" cy="110" r="15" fill="#E0E7FF"/>
                  <circle cx="190" cy="110" r="15" fill="#E0E7FF"/>
                  <path d="M110 170C110 170 130 190 190 170" stroke="#E0E7FF" strokeWidth="4" strokeLinecap="round"/>
                  <rect x="50" y="230" width="60" height="20" rx="5" fill="#A5B4FC"/>
                  <rect x="130" y="230" width="60" height="20" rx="5" fill="#A5B4FC"/>
                  <rect x="210" y="230" width="60" height="20" rx="5" fill="#A5B4FC"/>
                </svg>
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Course Curriculum
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive ADCA curriculum is designed to make you
              proficient in all essential computer applications.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {courseModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div
                  className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => toggleModule(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Module {index + 1}: {module.title}
                    </h3>
                    {expandedModule === index ? (
                      <ChevronUp className="text-indigo-600" />
                    ) : (
                      <ChevronDown className="text-indigo-600" />
                    )}
                  </div>

                  <AnimatePresence>
                    {expandedModule === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2 pl-6">
                          {module.topics.map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className="text-gray-700 list-disc"
                            >
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Career Benefits
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Completing our ADCA program opens doors to numerous career
              opportunities in the IT and office automation fields.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Job Opportunities",
                description:
                  "Qualify for roles like Data Entry Operator, Office Assistant, Computer Operator, and more.",
                icon: (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" rx="8" fill="#E0E7FF" />
                    <rect
                      x="12"
                      y="12"
                      width="24"
                      height="24"
                      rx="4"
                      fill="#4F46E5"
                    />
                    <rect
                      x="18"
                      y="18"
                      width="6"
                      height="6"
                      rx="1"
                      fill="#FFFFFF"
                    />
                    <rect
                      x="18"
                      y="30"
                      width="6"
                      height="6"
                      rx="1"
                      fill="#FFFFFF"
                    />
                    <rect
                      x="30"
                      y="18"
                      width="6"
                      height="6"
                      rx="1"
                      fill="#FFFFFF"
                    />
                    <rect
                      x="30"
                      y="30"
                      width="6"
                      height="6"
                      rx="1"
                      fill="#FFFFFF"
                    />
                  </svg>
                ),
              },
              {
                title: "Higher Studies",
                description:
                  "Use this as a foundation for advanced diplomas or degree programs in computer science.",
                icon: (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" rx="8" fill="#E0E7FF" />
                    <path d="M24 12L32 20H16L24 12Z" fill="#4F46E5" />
                    <path d="M16 28L24 36L32 28H16Z" fill="#4F46E5" />
                    <circle cx="24" cy="24" r="4" fill="#FFFFFF" />
                  </svg>
                ),
              },
              {
                title: "Freelancing",
                description:
                  "Start your own freelancing career in data entry, content writing, or basic web development.",
                icon: (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" rx="8" fill="#E0E7FF" />
                    <path
                      d="M24 16C29.5228 16 34 20.4772 34 26C34 31.5228 29.5228 36 24 36C18.4772 36 14 31.5228 14 26C14 20.4772 18.4772 16 24 16Z"
                      fill="#4F46E5"
                    />
                    <path
                      d="M24 12V16"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M24 36V40"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 24H12"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M36 24H40"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Government Jobs",
                description:
                  "Eligible for various government sector jobs requiring computer proficiency.",
                icon: (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" rx="8" fill="#E0E7FF" />
                    <rect
                      x="14"
                      y="14"
                      width="20"
                      height="20"
                      rx="2"
                      fill="#4F46E5"
                    />
                    <rect
                      x="18"
                      y="18"
                      width="4"
                      height="4"
                      rx="1"
                      fill="#FFFFFF"
                    />
                    <rect
                      x="26"
                      y="18"
                      width="4"
                      height="4"
                      rx="1"
                      fill="#FFFFFF"
                    />
                    <rect
                      x="18"
                      y="26"
                      width="4"
                      height="4"
                      rx="1"
                      fill="#FFFFFF"
                    />
                    <rect
                      x="26"
                      y="26"
                      width="4"
                      height="4"
                      rx="1"
                      fill="#FFFFFF"
                    />
                  </svg>
                ),
              },
              {
                title: "Business Skills",
                description:
                  "Manage your own business more efficiently with computer skills.",
                icon: (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" rx="8" fill="#E0E7FF" />
                    <path
                      d="M16 16H32V32H16V16Z"
                      stroke="#4F46E5"
                      strokeWidth="2"
                    />
                    <path
                      d="M16 16V12H32V16"
                      stroke="#4F46E5"
                      strokeWidth="2"
                    />
                    <path
                      d="M16 32V36H32V32"
                      stroke="#4F46E5"
                      strokeWidth="2"
                    />
                    <path d="M24 16V32" stroke="#4F46E5" strokeWidth="2" />
                    <path d="M16 24H32" stroke="#4F46E5" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                title: "Digital Literacy",
                description:
                  "Become digitally literate and confident in today's technology-driven world.",
                icon: (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" rx="8" fill="#E0E7FF" />
                    <path
                      d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"
                      fill="#4F46E5"
                    />
                    <path
                      d="M24 16V20"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M24 36V32"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M32 24H28"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 24H16"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 30L28 28"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 20L18 18"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 18L28 20"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 28L18 30"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Career Paths After ADCA
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Completing our ADCA program opens doors to numerous career
              opportunities in the IT and office automation fields.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {path.title}
                </h3>
                <p className="text-indigo-600 font-medium mb-3">
                  {path.salary}
                </p>
                <p className="text-gray-600">{path.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our ADCA Program?
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            >
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Key Advantages
                </h3>
                <ul className="space-y-4">
                  {[
                    "Comprehensive curriculum covering all essential computer applications",
                    "Industry-relevant skills for immediate job placement",
                    "Flexible batch timings for working professionals",
                    "State-of-the-art computer labs",
                    "Placement assistance upon course completion",
                    "Affordable fees with installment options",
                    "Practical oriented training approach",
                    "Certification recognized by employers nationwide",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="bg-indigo-600 text-white p-8 rounded-xl shadow-md h-full">
                <h3 className="text-2xl font-bold mb-6">Course Details</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-indigo-200 mb-2">
                      Duration
                    </h4>
                    <p className="text-white">
                      12 Months (6 Months Fast-track Available)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-200 mb-2">
                      Eligibility
                    </h4>
                    <p className="text-white">
                      10th Pass or Equivalent (No Prior Computer Knowledge
                      Required)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-200 mb-2">
                      Batch Timings
                    </h4>
                    <p className="text-white">
                      Morning (9AM-12PM) | Evening (4PM-7PM) | Weekend
                      (10AM-4PM)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-200 mb-2">
                      Certification
                    </h4>
                    <p className="text-white">
                      EduSphere Institute Certification + Government Recognized
                      Diploma
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md mt-4 w-full"
                  >
                    Download Brochure
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Student Testimonials
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear what our students have to say about their experience with the
              ADCA program at EduSphere Institute.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="16" cy="16" r="16" fill="#4F46E5" />
                      <circle cx="16" cy="12" r="5" fill="#E0E7FF" />
                      <path
                        d="M16 21C11.0294 21 7 25.0294 7 30H25C25 25.0294 20.9706 21 16 21Z"
                        fill="#E0E7FF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-indigo-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Have questions about our ADCA program? Get in touch with our
              admissions team.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0 md:pr-8"
            >
              <div className="bg-indigo-50 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  EduSphere Institute of Information Technology
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-indigo-600 mt-1 mr-4 flex-shrink-0"
                    >
                      <path
                        d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                        stroke="#4F46E5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="#4F46E5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        123 Tech Park, IT Plaza, Bangalore - 560001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-indigo-600 mt-1 mr-4 flex-shrink-0"
                    >
                      <path
                        d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92M22 16.92C21.6744 16.9926 21.3407 17.0305 21 17.0305C20.6593 17.0305 20.3256 16.9926 20 16.92M22 16.92V10C22 8.93913 21.5786 7.92172 20.8284 7.17157C20.0783 6.42143 19.0609 6 18 6H6C4.93913 6 3.92172 6.42143 3.17157 7.17157C2.42143 7.92172 2 8.93913 2 10V16.92M20 16.92C18.9391 16.92 17.9217 16.4986 17.1716 15.7484C16.4214 14.9983 16 13.9809 16 12.92V11C16 9.93913 16.4214 8.92172 17.1716 8.17157C17.9217 7.42143 18.9391 7 20 7"
                        stroke="#4F46E5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">admissions@edusphere.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-indigo-600 mt-1 mr-4 flex-shrink-0"
                    >
                      <path
                        d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92M22 16.92C21.6744 16.9926 21.3407 17.0305 21 17.0305C20.6593 17.0305 20.3256 16.9926 20 16.92M22 16.92V10C22 8.93913 21.5786 7.92172 20.8284 7.17157C20.0783 6.42143 19.0609 6 18 6H6C4.93913 6 3.92172 6.42143 3.17157 7.17157C2.42143 7.92172 2 8.93913 2 10V16.92M20 16.92C18.9391 16.92 17.9217 16.4986 17.1716 15.7484C16.4214 14.9983 16 13.9809 16 12.92V11C16 9.93913 16.4214 8.92172 17.1716 8.17157C17.9217 7.42143 18.9391 7 20 7"
                        stroke="#4F46E5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Opening Hours
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-800 font-medium">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-800 font-medium">
                        10:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-800 font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="bg-gray-50 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Enquiry Form
                </h3>

                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Tell us about your interest in the ADCA program"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition-colors"
                  >
                    Submit Enquiry
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
