import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Laptop,
  Briefcase,
  Award,
  Users,
  CheckCircle,
  ChevronDown,
  MessageSquare,
  Star,
  UserCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const CCCCoursePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Student",
      content:
        "The CCC course at EduSphere transformed my computer skills. I landed a government job right after completion!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Freelancer",
      content:
        "Excellent course structure and supportive instructors. I can now handle all computer basics confidently.",
      rating: 4,
    },
    {
      name: "Amit Singh",
      role: "Small Business Owner",
      content:
        "Practical knowledge that I apply daily in my business operations. Highly recommended for beginners.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What is the duration of the CCC course?",
      answer:
        "The CCC course typically takes 3 months to complete with regular classes held 3 times a week.",
    },
    {
      question: "Is there any eligibility criteria?",
      answer:
        "No specific eligibility criteria. Anyone with basic education can enroll in the CCC course.",
    },
    {
      question: "Will I get a certificate after completion?",
      answer:
        "Yes, you'll receive a government-recognized certificate upon successful completion of the course.",
    },
    {
      question: "What are the class timings?",
      answer:
        "We offer flexible batches - morning (9-11 AM), afternoon (2-4 PM), and evening (6-8 PM).",
    },
  ];

  const modules = [
    {
      title: "Computer Fundamentals",
      topics: [
        "Introduction to Computers",
        "Hardware/Software",
        "Operating Systems",
      ],
    },
    {
      title: "Office Automation",
      topics: ["MS Word", "MS Excel", "MS PowerPoint", "Internet & Email"],
    },
    {
      title: "Digital Financial Tools",
      topics: ["Online Banking", "Digital Payments", "E-Governance"],
    },
    {
      title: "Basic Networking",
      topics: ["Internet Concepts", "Network Types", "Cyber Security Basics"],
    },
    {
      title: "Practical Applications",
      topics: ["Troubleshooting", "File Management", "Productivity Tools"],
    },
    {
      title: "Career Preparation",
      topics: ["Resume Building", "Interview Skills", "Job Portals"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <path
              d="M500,100C300,100,100,300,100,500s200,400,400,400s400-200,400-400S700,100,500,100z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M500,150C325,150,150,325,150,500s175,350,350,350s350-175,350-350S675,150,500,150z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certificate in Computer Concepts (CCC)
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Master essential computer skills with our government-recognized
              certification program. Perfect for beginners and job seekers
              looking to enhance their digital literacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700">
                Enroll Now
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Course Details
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Overview */}
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
              Course Overview
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full bg-blue-50 border-blue-100 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 opacity-20">
                  <BookOpen className="w-32 h-32 text-blue-600" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="text-blue-600" />
                    <span>Course Structure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our CCC course covers all essential computer concepts
                    through 6 comprehensive modules, combining theoretical
                    knowledge with practical hands-on training.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full bg-green-50 border-green-100 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 opacity-20">
                  <Laptop className="w-32 h-32 text-green-600" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Laptop className="text-green-600" />
                    <span>Learning Mode</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Available in both online and offline modes. Choose from
                    flexible batches with recorded sessions for revision and
                    dedicated doubt-clearing classes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Card className="h-full bg-purple-50 border-purple-100 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 opacity-20">
                  <Award className="w-32 h-32 text-purple-600" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="text-purple-600" />
                    <span>Certification</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Receive a government-recognized certificate upon completion,
                    valid for government jobs, private sector roles, and higher
                    education applications.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
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
              Course Curriculum
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
                <Card
                  className={`h-full border-0 shadow-md ${
                    index % 3 === 0
                      ? "bg-indigo-50"
                      : index % 3 === 1
                      ? "bg-teal-50"
                      : "bg-amber-50"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
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

      {/* Career Opportunities */}
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
              Career Opportunities
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full bg-red-50 border-red-100 text-center py-8">
                <div className="flex justify-center mb-4">
                  <Briefcase className="w-12 h-12 text-red-600" />
                </div>
                <CardTitle>Government Jobs</CardTitle>
                <CardDescription className="px-4 mt-2">
                  Eligibility for various government positions requiring basic
                  computer knowledge
                </CardDescription>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full bg-yellow-50 border-yellow-100 text-center py-8">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-yellow-600" />
                </div>
                <CardTitle>Office Assistant</CardTitle>
                <CardDescription className="px-4 mt-2">
                  Roles in data entry, front desk operations, and administrative
                  support
                </CardDescription>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full bg-green-50 border-green-100 text-center py-8">
                <div className="flex justify-center mb-4">
                  <Laptop className="w-12 h-12 text-green-600" />
                </div>
                <CardTitle>Computer Operator</CardTitle>
                <CardDescription className="px-4 mt-2">
                  Positions in schools, colleges, and small businesses managing
                  computer systems
                </CardDescription>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full bg-blue-50 border-blue-100 text-center py-8">
                <div className="flex justify-center mb-4">
                  <UserCheck className="w-12 h-12 text-blue-600" />
                </div>
                <CardTitle>Freelancing</CardTitle>
                <CardDescription className="px-4 mt-2">
                  Opportunities in content writing, data management, and virtual
                  assistance
                </CardDescription>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Learn CCC at EduSphere? */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Why Learn CCC at EduSphere?
            </h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full bg-blue-700 border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <span className="text-4xl font-bold">95%</span>
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Success rate in certification exams
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full bg-blue-700 border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <span className="text-4xl font-bold">10+</span>
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Years of experience in computer education
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full bg-blue-700 border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <span className="text-4xl font-bold">5000+</span>
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Students trained and certified
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full bg-blue-700 border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <span className="text-4xl font-bold">100%</span>
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Practical hands-on training approach
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 bg-blue-700 rounded-lg p-8 relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 opacity-20">
              <svg width="300" height="300" viewBox="0 0 200 200">
                <path
                  d="M50,100 C50,50 150,50 150,100 C150,150 50,150 50,100 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Our Unique Teaching Methodology
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Interactive Sessions</h4>
                  <p className="text-blue-100">
                    Live demonstrations and Q&A sessions to clarify doubts in
                    real-time
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Practice Labs</h4>
                  <p className="text-blue-100">
                    Well-equipped computer labs for practical implementation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Study Material</h4>
                  <p className="text-blue-100">
                    Comprehensive notes, video tutorials, and practice tests
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Mock Tests</h4>
                  <p className="text-blue-100">
                    Regular assessments to track progress and exam preparation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Testimonials */}
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
              Student Testimonials
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <MessageSquare className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Computer Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of students who've transformed their careers with
              our CCC certification program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 text-lg bg-white text-blue-600 hover:bg-gray-100">
                Enroll Now
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Counselor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
