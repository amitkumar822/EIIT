import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  FileSpreadsheet,
  Presentation,
  Mail,
  Database,
  UserCheck,
  Award,
  Briefcase,
  CheckCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const MSOfficeCoursePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const modules = [
    {
      title: "MS Word",
      icon: <FileText className="w-6 h-6" />,
      topics: [
        "Document Formatting",
        "Mail Merge",
        "Tables & Charts",
        "Collaboration",
      ],
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "MS Excel",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      topics: [
        "Formulas & Functions",
        "PivotTables",
        "Data Analysis",
        "Macros",
      ],
      color: "bg-green-100 text-green-600",
    },
    {
      title: "MS PowerPoint",
      icon: <Presentation className="w-6 h-6" />,
      topics: [
        "Slide Design",
        "Animations",
        "Master Slides",
        "Presenting Tips",
      ],
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "MS Outlook",
      icon: <Mail className="w-6 h-6" />,
      topics: [
        "Email Management",
        "Calendar Scheduling",
        "Tasks & Notes",
        "Rules & Filters",
      ],
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "MS Access",
      icon: <Database className="w-6 h-6" />,
      topics: ["Database Creation", "Queries", "Forms & Reports", "SQL Basics"],
      color: "bg-red-100 text-red-600",
    },
    {
      title: "OneDrive & Teams",
      icon: <UserCheck className="w-6 h-6" />,
      topics: [
        "Cloud Storage",
        "File Sharing",
        "Collaboration",
        "Online Meetings",
      ],
      color: "bg-teal-100 text-teal-600",
    },
  ];

  const careerBenefits = [
    {
      title: "Office Jobs",
      description: "Admin, Data Entry, Front Desk",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Freelancing",
      description: "Virtual Assistant, Content Writer",
      icon: <UserCheck className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Business Owners",
      description: "Manage invoices, reports & emails",
      icon: <Award className="w-8 h-8 text-purple-600" />,
    },
  ];

  const faqs = [
    {
      question: "Do I need prior experience?",
      answer: "No, this course is designed for beginners to advanced users.",
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, a recognized certification upon completion.",
    },
    {
      question: "Can I learn online?",
      answer: "Yes, we offer both in-person and online classes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Modernized with SVG Background and Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] text-white py-24">
        {/* Background SVG Pattern */}
        <div className="absolute inset-0 z-0 opacity-30">
          <svg
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30 shadow-sm">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">Top Rated Course</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Level Up Your Skills with{" "}
              <span className="text-yellow-300">MS Office Mastery</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-white/90">
              Complete training on Word, Excel, PowerPoint, and
              Outlook—interactive projects & real-world tasks included.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="px-8 py-4 text-lg bg-yellow-300 text-blue-900 hover:bg-yellow-400 hover:scale-105 transition-all duration-300 flex items-center gap-2 rounded-xl shadow-md">
                Enroll Now <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-800 rounded-xl transition-all duration-300 shadow-md"
              >
                Free Demo Class
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Learn MS Office? - Redesigned Animated SVG Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Why Learn MS Office?
            </h2>
            <div className="w-24 h-1 mx-auto bg-yellow-400 rounded"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Boost Workplace Productivity",
                description:
                  "Mastering MS Office improves efficiency in tasks like documentation, analysis, and presentations.",
                color: "bg-yellow-100",
                svg: (
                  <svg
                    className="w-14 h-14"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 17v-2a4 4 0 014-4h2m-6 6l4 4m0 0l4-4m-4 4V3" />
                  </svg>
                ),
              },
              {
                title: "Universal Software Skills",
                description:
                  "MS Office is used across industries, making it a must-have skill for students and professionals alike.",
                color: "bg-blue-100",
                svg: (
                  <svg
                    className="w-14 h-14"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                ),
              },
              {
                title: "Enhance Presentation & Reporting",
                description:
                  "Design impactful presentations, reports, and data sheets that communicate clearly and professionally.",
                color: "bg-green-100",
                svg: (
                  <svg
                    className="w-14 h-14"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v16H4z M8 8h8v2H8z M8 12h5v2H8z" />
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow border-0 bg-white">
                  <CardHeader className="p-6 text-center flex flex-col items-center">
                    <div className={`p-4 rounded-full ${benefit.color} mb-4`}>
                      {benefit.svg}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* **Course Modules - Interactive Grid** */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className={`p-3 rounded-lg ${module.color}`}>
                      {module.icon}
                    </div>
                    <div>
                      <CardTitle>{module.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* **Practical Projects Section** */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hands-On Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>Professional Resume</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Design a polished resume using advanced MS Word formatting.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-green-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                    <FileSpreadsheet className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>Sales Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Build an interactive Excel dashboard with PivotTables &
                    charts.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-orange-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                    <Presentation className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle>Business Pitch Deck</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Create a stunning PowerPoint presentation with animations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* **FAQ Section** */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

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

      {/* **Final CTA - Get Certified** */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Get MS Office Certified Today!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands who boosted their careers with our practical MS
              Office training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 text-lg bg-white text-blue-600 hover:bg-gray-100">
                Enroll Now
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MSOfficeCoursePage;
