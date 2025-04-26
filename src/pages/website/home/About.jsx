import React, { useState, useEffect } from "react";
import {
  Award,
  Users,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Clock,
  ChevronDown,
  Check,
  Star,
  MessageSquare,
  Calendar,
  Rocket,
  GitBranch,
  Cpu,
  Layers,
  MapPin,
  Mail,
  Phone,
  Globe,
  CheckCircle,
} from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [placementRate, setPlacementRate] = useState(0);

  useEffect(() => {
    // Animated counters
    const interval = setInterval(() => {
      if (studentCount < 10000)
        setStudentCount((prev) => Math.min(prev + 100, 10000));
      if (courseCount < 25) setCourseCount((prev) => Math.min(prev + 1, 25));
      if (placementRate < 85)
        setPlacementRate((prev) => Math.min(prev + 1, 85));
    }, 30);

    return () => clearInterval(interval);
  }, [studentCount, courseCount, placementRate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* **Hero Section - Redesigned** */}
      <section className="relative bg-gradient-to-bl from-indigo-900 via-blue-950 to-slate-900 text-white py-32 overflow-hidden">
        {/* SVG, Decorative Background Patterns */}
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
            <circle cx="150" cy="150" r="40" fill="white" opacity="0.08" />
            <circle cx="1050" cy="100" r="60" fill="white" opacity="0.08" />
          </svg>
        </div>

        {/* Blurred Blobs */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-indigo-500 opacity-40 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-32 right-20 w-80 h-80 bg-blue-600 opacity-40 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-fuchsia-600 opacity-40 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20">
              <Award className="mr-2 h-5 w-5" />
              <span className="text-sm font-medium">
                ISO 9001:2015 Certified Institute
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-200">
                Empowering Students
              </span>
              <br />
              With Purpose & Passion
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
              EduSphere Institute, a unit of MEET CHARITABLE TRUST, is dedicated
              to nurturing excellence in skill-based education since 2015.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                Explore Courses <BookOpen className="ml-2 h-5 w-5" />
              </Button>
              <a href={`tel: +91 72310 41011`}>
                <Button
                  variant="outline"
                  className="border-2 border-white text-blue-700 hover:bg-white/60 hover:text-black/70 cursor-pointer px-8 py-4 text-lg font-semibold rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Contact Us <Phone className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="md:w-1/2">
            <div className="relative bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4 text-center text-yellow-300">
                Why EduSphere?
              </h3>
              <ul className="space-y-3 text-lg text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" /> Industry-recognized
                  Certification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" /> Experienced Faculty
                  & Mentors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" /> Placement Support &
                  Internships
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" /> Blended Learning
                  with Projects
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
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

      {/* Redesigned About Institute Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Blurred Decorative Background Shapes */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 opacity-30 blur-3xl rounded-full mix-blend-multiply animate-blob"></div>
        <div className="absolute -bottom-20 right-0 w-96 h-96 bg-blue-400 opacity-30 blur-3xl rounded-full mix-blend-multiply animate-blob animation-delay-2000"></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="backdrop-blur-md bg-white/60 p-10 rounded-3xl border border-blue-100 shadow-xl">
              <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
                About <span className="text-indigo-600">EduSphere</span>{" "}
                Institute
              </h2>
              <p className="text-lg text-blue-800 mb-6">
                EduSphere Institute of Information Technology (EIIT), a unit of
                MEET Charitable Trust, has been a cornerstone of technical and
                vocational excellence since 2015, empowering youth through
                certified and career-focused training.
              </p>
              <ul className="space-y-4 text-blue-900">
                <li className="flex items-start">
                  <Check className="text-green-600 mt-1 mr-3" />
                  <span>ISO 9001:2015 Certified Institute</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mt-1 mr-3" />
                  <span>
                    Recognized by UGC and Ministry of AYUSH, Govt. of India
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mt-1 mr-3" />
                  <span>100% Placement Assistance in Technical Courses</span>
                </li>
              </ul>
            </div>

            {/* Image with Badge */}
            <div className="relative group">
              <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/30 transition-transform duration-500 transform group-hover:scale-105">
                <img
                  src="/about/institute-building.jpg"
                  alt="EduSphere Campus"
                  className="w-full h-[24rem] rounded-3xl"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-md flex items-center gap-3 border border-gray-100">
                <GraduationCap className="text-blue-700 w-6 h-6" />
                <span className="text-blue-900 font-bold text-sm">
                  Empowering Since 2015
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* **Our Programs - Animated Cards** */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive courses designed for career success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${program.color} rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-tilt`}
                ></div>
                <Card className="relative h-full bg-white rounded-xl shadow-md group-hover:shadow-xl transition-all overflow-hidden">
                  <CardHeader
                    className={`bg-gradient-to-r ${program.color} p-6`}
                  >
                    <div className="text-white flex justify-between items-start">
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                        {program.icon}
                      </div>
                      <span className="bg-black/10 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                        {program.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-gray-600">{program.desc}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <Button
                      variant="outline"
                      className="border-gray-300 group-hover:border-blue-500 group-hover:text-blue-600 transition"
                    >
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* **Achievements Section** */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/20 transition">
              <div className="text-5xl font-bold mb-2">
                {studentCount.toLocaleString()}+
              </div>
              <p className="text-blue-200">Students Trained</p>
            </div>
            <div className="text-center bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/20 transition">
              <div className="text-5xl font-bold mb-2">{courseCount}+</div>
              <p className="text-blue-200">Courses Offered</p>
            </div>
            <div className="text-center bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/20 transition">
              <div className="text-5xl font-bold mb-2">{placementRate}%</div>
              <p className="text-blue-200">Placement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* **Leadership Section** */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-blue-100 relative overflow-hidden">
        {/* Decorative SVG background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg
            className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4f46e5"
              d="M50,-57.7C64.6,-47.2,75.5,-32,75.4,-17.5C75.4,-3,64.3,11,54.1,24.1C43.9,37.2,34.6,49.4,22.3,56.7C10.1,64,-5.1,66.5,-19.3,61.8C-33.6,57.2,-46.9,45.5,-55.1,31.5C-63.4,17.5,-66.5,1.3,-64.7,-14.1C-62.9,-29.6,-56.3,-44.2,-44.4,-55.3C-32.4,-66.4,-16.2,-74.1,-0.4,-73.6C15.3,-73.1,30.6,-64.3,50,-57.7Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#9333ea"
              d="M40.6,-55.7C55.7,-46.5,72.5,-38.2,75.3,-25.7C78.2,-13.2,67,-3.4,61.5,10.6C56,24.5,56.2,42.6,45.9,52.3C35.6,62,14.8,63.2,-4.9,66.3C-24.7,69.3,-49.3,74.1,-61.3,64.1C-73.3,54.1,-72.7,29.3,-71.2,7.1C-69.8,-15.2,-67.4,-34.8,-55.7,-46.5C-43.9,-58.1,-21.9,-61.7,-2.3,-59.2C17.2,-56.8,34.5,-48.9,40.6,-55.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-indigo-600">Leadership</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto">
              Meet the visionaries shaping the future of EIIT
            </p>
          </div>

          {/* Leadership Cards */}
          <>{eiitMember && <LeadershipCards eiitMember={eiitMember} />}</>
        </div>
      </section>

      {/* **Testimonial Section** */}
      <section className="py-24  bg-gradient-to-br from-[#F9FAFB] via-[#E0F2FE] to-[#DBEAFE] relative overflow-hidden">
        {/* Global decorative background SVG */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          <svg
            className="absolute top-0 right-0 w-96 h-96 translate-x-1/3 -translate-y-1/4"
            viewBox="0 0 200 200"
          >
            <path
              fill="#a5b4fc"
              d="M50,-57.7C64.6,-47.2,75.5,-32,75.4,-17.5C75.4,-3,64.3,11,54.1,24.1C43.9,37.2,34.6,49.4,22.3,56.7C10.1,64,-5.1,66.5,-19.3,61.8C-33.6,57.2,-46.9,45.5,-55.1,31.5C-63.4,17.5,-66.5,1.3,-64.7,-14.1C-62.9,-29.6,-56.3,-44.2,-44.4,-55.3C-32.4,-66.4,-16.2,-74.1,-0.4,-73.6C15.3,-73.1,30.6,-64.3,50,-57.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              What our students say about us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Rahul Sharma",
                course: "Yoga Teacher Training",
                review:
                  "The course curriculum was comprehensive and the faculty was extremely knowledgeable. Got certified and started my own yoga center.",
                rating: 5,
                color: "from-green-100 to-green-200",
              },
              {
                name: "Priya Verma",
                course: "Nursery Teacher Training",
                review:
                  "EIIT's NTT program helped me get a job at a reputed preschool immediately after completion. Practical training was excellent.",
                rating: 4,
                color: "from-yellow-100 to-yellow-200",
              },
              {
                name: "Amit Patel",
                course: "Fire & Safety",
                review:
                  "100% placement claim is real! Got placed in a manufacturing company with good salary right after certification.",
                rating: 5,
                color: "from-blue-100 to-blue-200",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`relative bg-gradient-to-br ${testimonial.color} rounded-3xl overflow-hidden shadow-xl border border-white/60 hover:-translate-y-2 transition-all duration-300`}
              >
                {/* Decorative Blob inside card */}
                <svg
                  className="absolute -top-8 -right-8 w-32 h-32 text-white opacity-20 z-0"
                  viewBox="0 0 200 200"
                  fill="currentColor"
                >
                  <path
                    d="M50,-57.7C64.6,-47.2,75.5,-32,75.4,-17.5C75.4,-3,64.3,11,54.1,24.1C43.9,37.2,34.6,49.4,22.3,56.7C10.1,64,-5.1,66.5,-19.3,61.8C-33.6,57.2,-46.9,45.5,-55.1,31.5C-63.4,17.5,-66.5,1.3,-64.7,-14.1C-62.9,-29.6,-56.3,-44.2,-44.4,-55.3C-32.4,-66.4,-16.2,-74.1,-0.4,-73.6C15.3,-73.1,30.6,-64.3,50,-57.7Z"
                    transform="translate(100 100)"
                  />
                </svg>

                <CardContent className="relative z-10 p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        } w-5 h-5`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    “{testimonial.review}”
                  </p>
                  <div className="flex items-center">
                    <div className="bg-white/40 p-2 rounded-full mr-4 backdrop-blur">
                      <Users className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.course}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* **Enhanced FAQ Section** */}
      <section className="py-24 bg-gradient-to-br from-[#F0F9FF] via-[#E0F2FE] to-[#DBEAFE]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Answers to common questions about EIIT
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <svg
              className="absolute -top-10 -left-10 w-32 opacity-10"
              viewBox="0 0 200 200"
            >
              <path
                fill="#a5b4fc"
                d="M50,-57.7C64.6,-47.2,75.5,-32,75.4,-17.5C75.4,-3,64.3,11,54.1,24.1C43.9,37.2,34.6,49.4,22.3,56.7C10.1,64,-5.1,66.5,-19.3,61.8C-33.6,57.2,-46.9,45.5,-55.1,31.5C-63.4,17.5,-66.5,1.3,-64.7,-14.1C-62.9,-29.6,-56.3,-44.2,-44.4,-55.3C-32.4,-66.4,-16.2,-74.1,-0.4,-73.6C15.3,-73.1,30.6,-64.3,50,-57.7Z"
                transform="translate(100 100)"
              />
            </svg>
            {/* <img
        src="/svg/faq-bg-blob.svg"
        alt="decor"
        className="absolute -top-10 -left-10 w-32 opacity-10"
      /> */}
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4 relative z-10"
            >
              {[
                {
                  question: "Is EIIT government recognized?",
                  answer:
                    "Yes, we are an ISO 9001:2015 certified institute and our courses are recognized by UGC, Ministry of AYUSH (for Yoga courses), and affiliated with CBSE for NTT.",
                },
                {
                  question: "What's the duration of courses?",
                  answer:
                    "Course durations vary: Yoga (1-2 years), NTT (1 year), Computer courses (3-12 months), Fire & Safety (6 months), and ECCE (1 year).",
                },
                {
                  question: "Do you provide placement assistance?",
                  answer:
                    "Yes, we have 100% placement assistance for technical courses like Fire & Safety and Computer courses. For other courses, we provide career guidance.",
                },
                {
                  question: "Where is your campus located?",
                  answer:
                    "Our head office is at Old Market, Near Ration Depot, Sidhmukh (Rajgarh). We also have affiliated centers in multiple locations.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="bg-white/90 border-0 shadow-md hover:shadow-lg transition rounded-xl overflow-hidden"
                >
                  <AccordionItem value={`faq-${index}`}>
                    <AccordionTrigger className="px-6 py-5 text-left hover:no-underline text-gray-800">
                      <div className="flex items-center">
                        <MessageSquare className="text-blue-600 mr-3 w-5 h-5" />
                        <span className="font-semibold text-md">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pl-12 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


const LeadershipCards = ({ eiitMember }) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto py-10">
      {eiitMember.map((member) => (
        <div
          key={member.id}
          className="relative bg-gradient-to-br from-blue-100 via-white to-purple-100 border border-white/60 shadow-xl p-6 rounded-3xl overflow-hidden transition-transform hover:scale-[1.02]"
        >
          {/* Decorative SVG Background */}
          <svg
            className="absolute top-0 right-0 w-32 h-32 opacity-10 -z-10"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle cx="50" cy="50" r="50" fill="url(#grad1)" />
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex items-center mb-6">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-20 h-20 rounded-full border-4 border-white shadow-md mr-4"
            />
            <div>
              <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.position}</p>
            </div>
          </div>

          <p className="text-blue-900 mb-4 text-sm leading-relaxed">
            {member.aboutUs}
          </p>

          <div className="text-sm text-blue-800 space-y-1">
            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                className="flex items-center hover:text-blue-500 transition"
              >
                <Phone className="w-4 h-4 mr-2" />
                {member.phone}
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center hover:text-blue-500 transition"
              >
                <Mail className="w-4 h-4 mr-2" />
                {member.email}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const eiitMember = [
  {
    id: 1,
    name: "Sanjay Datt Singh",
    position: "FOUNDER & CEO",
    avatar: "/about/founder_ceo.jpg",
    aboutUs:
      "Visionary leader and founder of EIIT, driving innovation and excellence in education and technology.",
    phone: "",
  },
  {
    id: 2,
    name: "Rani Mam",
    position: "Managing Director",
    avatar: "/about/rani_Managing_Director.jpg",
    aboutUs:
      "Oversees all operations and ensures smooth management of the institute’s daily activities and long-term goals.",
    phone: "",
  },
  {
    id: 3,
    name: "Sanehlata Mam",
    position: "Center Head, Sidhmukh",
    avatar: "/about/center_head_Sidhmukh.jpg",
    aboutUs:
      "Leads and manages the Sidhmukh center, ensuring quality training and student success.",
    phone: "",
  },
  {
    id: 4,
    name: "Vikas Kumar",
    position: "Center Head, Nohar",
    avatar: "/about/center_head_nohar.jpg",
    aboutUs:
      "Heads the Nohar center, focusing on student development and academic excellence.",
    phone: "",
  },
  {
    id: 5,
    name: "Rupender Singh",
    position: "IT Head",
    avatar: "/about/it_head.jpg",
    aboutUs:
      "Leads the IT department, managing technology infrastructure and digital growth.",
    phone: "",
  },
  {
    id: 6,
    name: "Ravi Kumar",
    position: "Marketing Head",
    avatar: "/about/marketing_head.jpg",
    aboutUs:
      "Heads marketing efforts, building the institute's brand and outreach strategies.",
    phone: "",
  },
];

const programs = [
  {
    title: "Yoga Teacher Training",
    duration: "1 Year & 2 Year",
    desc: "Recognized by Ministry of AYUSH, Govt. of India",
    icon: <Users className="w-8 h-8" />,
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Nursery Teacher Training (NTT)",
    duration: "1 Year Program",
    desc: "CBSE affiliated curriculum",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Fire & Safety",
    duration: "Certification",
    desc: "100% placement assistance",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "from-red-500 to-red-600",
  },
  {
    title: "Computer Courses (DCA/ADCA/PGDCA)",
    duration: "3-12 Months",
    desc: "Tally ERP9, CCC, and advanced certifications",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Early Child Care Education (ECCE)",
    duration: "Diploma Program",
    desc: "UGC Approved University certification",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Distance Education",
    duration: "Flexible Learning",
    desc: "10th/12th through NIOS Board",
    icon: <Globe className="w-8 h-8" />,
    color: "from-indigo-500 to-indigo-600",
  },
]