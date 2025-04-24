import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

export const RS_CITPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Student",
      content:
        "The RS-CIT course at EduSphere transformed my basic computer knowledge into practical skills that helped me secure a government job.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "Small Business Owner",
      content:
        "After completing RS-CIT, I was able to manage my shop's accounts digitally and even created a simple website for my business.",
      rating: 4,
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Homemaker",
      content:
        "This course made me confident in using computers and the internet. Now I can help my children with their school projects and do online banking.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What is RS-CIT?",
      answer:
        "RS-CIT (Rajasthan State Certificate in Information Technology) is a basic computer literacy program designed by the Rajasthan Knowledge Corporation Limited (RKCL) to impart IT literacy to the masses.",
    },
    {
      question: "Who can enroll in RS-CIT?",
      answer:
        "Anyone above 12 years of age can enroll in RS-CIT. There are no formal educational qualifications required.",
    },
    {
      question: "What is the duration of the course?",
      answer:
        "The RS-CIT course typically takes 3 months to complete with regular classes (2-3 hours per day, 5 days a week).",
    },
    {
      question: "Is RS-CIT recognized by the government?",
      answer:
        "Yes, RS-CIT is recognized by the Rajasthan Government and is widely accepted for various government jobs and schemes.",
    },
    {
      question: "What are the career opportunities after RS-CIT?",
      answer:
        "After completing RS-CIT, you can apply for basic computer operator jobs, data entry positions, or use the skills to enhance your current job performance. It's also a stepping stone to advanced IT courses.",
    },
  ];

  const modules = [
    {
      title: "Computer Fundamentals",
      icon: <Laptop className="w-8 h-8" />,
      topics: [
        "Introduction to Computers",
        "Hardware & Software",
        "Operating Systems",
        "File Management",
      ],
    },
    {
      title: "Internet & Email",
      icon: <Globe className="w-8 h-8" />,
      topics: [
        "Web Browsing",
        "Search Engines",
        "Email Basics",
        "Online Safety",
      ],
    },
    {
      title: "Word Processing",
      icon: <FileText className="w-8 h-8" />,
      topics: [
        "MS Word Basics",
        "Formatting Documents",
        "Tables & Graphics",
        "Mail Merge",
      ],
    },
    {
      title: "Spreadsheets",
      icon: <FileText className="w-8 h-8" />,
      topics: [
        "MS Excel Basics",
        "Formulas & Functions",
        "Charts & Graphs",
        "Data Management",
      ],
    },
    {
      title: "Presentation",
      icon: <FileText className="w-8 h-8" />,
      topics: [
        "MS PowerPoint Basics",
        "Slide Design",
        "Animations",
        "Presentation Delivery",
      ],
    },
    {
      title: "Digital Financial Tools",
      icon: <Smartphone className="w-8 h-8" />,
      topics: [
        "Internet Banking",
        "UPI Payments",
        "Digital Wallets",
        "Online Transactions",
      ],
    },
  ];

  // SVG Background Components
  const HeroBackground = () => (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h1200v800H0V0z" fill="url(#hero-gradient)" />
        <defs>
          <linearGradient
            id="hero-gradient"
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
          d="M0 100C150 200 350 50 500 150s300 150 450 50 250-100 400 0 250 150 400 100"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 300C150 400 350 250 500 350s300 150 450 50 250-100 400 0 250 150 400 100"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="200" cy="200" r="50" fill="rgba(255,255,255,0.1)" />
        <circle cx="800" cy="150" r="70" fill="rgba(255,255,255,0.1)" />
        <circle cx="1000" cy="400" r="60" fill="rgba(255,255,255,0.1)" />
      </svg>
    </div>
  );

  const PatternBackground = ({ color = "blue" }) => {
    const colors = {
      blue: "text-blue-100",
      indigo: "text-indigo-100",
      purple: "text-purple-100",
      green: "text-green-100",
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
          <path d="M0 0h100v100H0z" fill="currentColor" />
          <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="50" cy="20" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="80" cy="20" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="20" cy="50" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="80" cy="50" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="20" cy="80" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="50" cy="80" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="80" cy="80" r="3" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    );
  };

  const TestimonialPattern = () => (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h100v100H0z" fill="none" />
        <path
          d="M20,20 Q50,10 80,20 T100,50 T80,80 T50,90 T20,80 T0,50 T20,20"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with SVG Background */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-32 overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              RS-CIT Course
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Rajasthan State Certificate in Information Technology - Your
              Gateway to Digital Literacy
            </p>
            <motion.button
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-top-left"></div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Course Overview
            </motion.h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive training designed to make you proficient in
              essential computer skills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 relative overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <PatternBackground color="blue" />
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                Basic Computer Literacy
              </h3>
              <p className="text-gray-600 text-center relative z-10">
                Gain fundamental knowledge of computers, operating systems, and
                essential software applications.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 relative overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <PatternBackground color="indigo" />
              <div className="flex justify-center mb-6">
                <div className="bg-indigo-100 p-4 rounded-full">
                  <Briefcase className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                Practical Skills
              </h3>
              <p className="text-gray-600 text-center relative z-10">
                Hands-on training in word processing, spreadsheets,
                presentations, and internet usage.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 relative overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <PatternBackground color="purple" />
              <div className="flex justify-center mb-6">
                <div className="bg-purple-100 p-4 rounded-full">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                Government Recognized
              </h3>
              <p className="text-gray-600 text-center relative z-10">
                Certificate recognized by Rajasthan Government for various jobs
                and schemes.
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
              Course Curriculum
            </motion.h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive modules covering all essential aspects of computer
              literacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative"
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
                      className={`p-3 rounded-full mr-4 ${
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

      {/* Student Testimonials */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Student Testimonials
            </motion.h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our students say about their RS-CIT learning experience
              at EduSphere
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <TestimonialPattern />
                <div className="relative z-10">
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
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-blue-200 absolute top-6 right-6" />
                    <p className="text-gray-600 italic text-lg">
                      "{testimonial.content}"
                    </p>
                  </div>
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
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
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
              Find answers to common questions about the RS-CIT course
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`mb-4 overflow-hidden rounded-xl ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-indigo-50"
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="font-medium text-gray-800 text-lg">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-800 text-white relative overflow-hidden">
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
              Start Your Digital Journey Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our RS-CIT course and unlock new opportunities in the digital
              world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
