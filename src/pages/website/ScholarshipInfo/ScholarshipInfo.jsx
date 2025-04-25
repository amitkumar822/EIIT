import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  BookOpen,
  CalendarDays,
  Phone,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


const ScholarshipInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-bl from-indigo-900 via-blue-950 to-slate-900 text-white py-32 overflow-hidden">
        {/* Decorative SVG Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >
            <path
              d="M0,200 Q300,100 600,200 T1200,200"
              fill="none"
              stroke="white"
              strokeWidth="1"
              opacity="0.2"
            />
            <circle cx="200" cy="150" r="40" fill="white" opacity="0.08" />
            <circle cx="1000" cy="120" r="60" fill="white" opacity="0.08" />
          </svg>
        </div>

        {/* Blurred Colorful Blobs */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-indigo-500 opacity-40 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-32 right-20 w-80 h-80 bg-blue-600 opacity-40 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-pink-600 opacity-40 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20">
              <Award className="mr-2 h-5 w-5" />
              <span className="text-sm font-medium">
                RS-CIT Exam – April 2025
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-200">
                Empower Your Future
              </span>
              <br />
              With Computer Literacy
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
              Get certified in essential computer skills through RS-CIT. Exam on{" "}
              <strong className="text-yellow-400">April, 2025</strong>. Perfect
              for students, job seekers, and learners of all levels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                Register Now <BookOpen className="ml-2 h-5 w-5" />
              </Button>
              <a href="tel:+917231041011">
                <Button
                  className="border-2 border-white cursor-pointer px-8 py-4 text-lg font-semibold rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Call Us <Phone className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Card: Scholarship Info */}
          <div className="md:w-1/2">
            <div className="relative bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4 text-center text-green-300">
                Scholarship Program
              </h3>
              <p className="text-blue-100 text-sm mb-4 text-center">
                Make your education affordable with discounts based on entrance
                test scores.
              </p>
              <ul className="space-y-3 text-base text-blue-100">
                <li className="flex justify-between border-b border-white/10 pb-1">
                  <span>Marks</span>
                  <span className="font-semibold text-green-400">
                  Fee Discount
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-1">
                  <span>86-100%</span>
                  <span className="font-semibold text-green-400">
                    60% Fee Discount
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-1">
                  <span>61-85%</span>
                  <span className="font-semibold text-green-400">
                    50% Fee Discount
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-1">
                  <span>41-60%</span>
                  <span className="font-semibold text-green-400">
                    40% Fee Discount
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-1">
                  <span>21-40%</span>
                  <span className="font-semibold text-green-400">
                    20% Fee Discount
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>01-20%</span>
                  <span className="font-semibold text-green-400">
                    10% Fee Discount
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            className="w-full h-24"
          >
            <path d="M0,0 C300,100 900,0 1200,100 L1200,0 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Scholarship section */}
      <div className="relative z-10 space-y-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Scholarship Program Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col"
          >
            <Card
              className={cn(
                "bg-white/5 backdrop-blur-lg border border-white/10",
                "shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300",
                "hover:border-blue-500/20 hover:bg-blue-500/5 flex-grow"
              )}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  Scholarship Program
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Your path to quality education, made affordable.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-200">
                    We believe that financial constraints should not hinder your
                    pursuit of knowledge. Our scholarship program is designed to
                    reward merit and provide opportunities to deserving
                    students. Here's how you can benefit based on your entrance
                    test percentage:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li className="text-gray-300">
                      <Badge
                        variant="secondary"
                        className="bg-green-500/20 text-green-300 border-green-500/30 mr-2"
                      >
                        86-100%
                      </Badge>
                      60% Discount on Fee
                    </li>
                    <li className="text-gray-300">
                      <Badge
                        variant="secondary"
                        className="bg-green-500/20 text-green-300 border-green-500/30 mr-2"
                      >
                        61-85%
                      </Badge>
                      50% Discount on Fee
                    </li>
                    <li className="text-gray-300">
                      <Badge
                        variant="secondary"
                        className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 mr-2"
                      >
                        41-60%
                      </Badge>
                      40% Discount on Fee
                    </li>
                    <li className="text-gray-300">
                      <Badge
                        variant="secondary"
                        className="bg-orange-500/20 text-orange-300 border-orange-500/30 mr-2"
                      >
                        21-40%
                      </Badge>
                      20% Discount on Fee
                    </li>
                    <li className="text-gray-300">
                      <Badge
                        variant="secondary"
                        className="bg-red-500/20 text-red-300 border-red-500/30 mr-2"
                      >
                        01-20%
                      </Badge>
                      10% Discount on Fee
                    </li>
                  </ul>
                  <p className="text-gray-200">
                    We are committed to making education accessible. Apply for
                    our scholarship program and take a step closer to achieving
                    your academic aspirations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* RS-CIT Exam Information Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col"
          >
            <Card
              className={cn(
                "bg-white/5 backdrop-blur-lg border border-white/10",
                "shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300",
                "hover:border-purple-500/20 hover:bg-purple-500/5 flex-grow"
              )}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                  RS-CIT Exam April 2025
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Empowering you with essential computer skills.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-200">
                    The Rajasthan State Certificate in Information Technology
                    (RS-CIT) exam is a crucial step towards enhancing your
                    computer literacy and opening doors to various
                    opportunities. Here's what you need to know about the
                    upcoming exam:
                  </p>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-purple-300" />
                    <span className="text-gray-200 font-medium">
                      Exam Date:
                    </span>
                    <span className="text-white">April, 2025</span>
                  </div>
                  <p className="text-gray-200">
                    This exam is your gateway to demonstrating proficiency in
                    essential computer concepts and applications. Whether you're
                    a student, job seeker, or simply looking to enhance your
                    skills, RS-CIT certification can make a significant
                    difference.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li className="text-gray-300">
                      <span className="font-semibold text-purple-300">
                        Key Topics:
                      </span>
                      Computer Fundamentals, Operating Systems, Microsoft Office
                      Suite, Internet and Web Technologies, Digital Literacy.
                    </li>
                    <li className="text-gray-300">
                      <span className="font-semibold text-purple-300">
                        Exam Format:
                      </span>
                      Multiple Choice Questions (MCQ), Offline Exam.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      

      <section className="bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-900 py-20">
  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left Side: Image */}
    <div className="rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
      <img
        src="/scholarship/scholarship.jpg"
        alt="Scholarship and Courses Poster"
        className="w-full h-auto object-cover"
      />
    </div>

    {/* Right Side: Description */}
    <div className="text-white space-y-6">
      <h2 className="text-4xl md:text-3xl font-extrabold leading-tight">
        Advance Your Career with Certified Courses
      </h2>

      <p className="text-lg text-blue-100">
        <strong>EduSphere Institute of Information Technology (EIIT)</strong> is committed to delivering the best educational experiences and certifications. We proudly offer a wide range of skill-based and professional courses, along with attractive scholarship opportunities to support every student's educational journey.
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Professional Courses Offered</h3>
          <ul className="list-disc list-inside text-blue-100 space-y-1">
            <li><strong>RS-CIT</strong> – A government-certified IT literacy program. Our center provides the best-in-class exam facilities, experienced instructors, and complete student support to ensure top results in RS-CIT exams.</li>
            <li><strong>TALLY</strong> – Industry-recognized accounting software course, ideal for a successful career in finance and accounts.</li>
            <li><strong>CCC</strong> – National-level computer literacy course designed to enhance essential digital skills for students and professionals.</li>
            <li><strong>NTT</strong> – Nursery Teacher Training for aspirants who wish to build a strong future in early childhood education, with professional certifications and practical training.</li>
            <li><strong>Yoga Teacher Training Courses</strong> – Certified programs promoting holistic well-being, recognized by authorized organizations, with both Level-1 and Level-2 certifications available.</li>
            <li><strong>Fire and Safety Management Diploma</strong> – Professional training in fire safety, disaster management, and emergency response, taught with real-world simulations and expert instructors.</li>
            <li><strong>ECCE (Early Child Care Education)</strong> – UGC Approved, NIOS Board certified 10th/12th bridge courses focused on preparing world-class child care professionals.</li>
          </ul>
        </div>

        <p className="text-blue-100">
          All our courses come with the opportunity to earn scholarships based on merit. We focus on providing <span className="font-semibold text-white">excellent classroom infrastructure, smart labs, regular practice tests, and expert mentorship</span> to every learner. 
        </p>

        <p className="text-blue-100">
          Choose EduSphere to experience top-quality education, personalized student support, and the best exam preparation environment in the region. Your success is our mission!
        </p>

        
      </div>
    </div>

  </div>
</section>

    </div>
  );
};

export default ScholarshipInfo;
