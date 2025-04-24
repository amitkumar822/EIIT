import React from "react";
import {
  BookOpen,
  GraduationCap,
  Users,
  Briefcase,
  Clock,
  Award,
  CheckCircle,
  MessageSquare,
  HelpCircle,
  Calendar,
  MapPin,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
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

const NTTCoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - NTT Course with Background SVG, Animation, and Soft Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-900 py-24">
        {/* Background Blob SVG */}
        <div className="absolute -top-32 -left-20 md:left-[-80px] z-0 opacity-20">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[600px] h-[600px]"
          >
            <path
              fill="#c4b5fd"
              d="M43.8,-71.6C57.5,-62.4,69.6,-50.4,75.1,-36.2C80.5,-22,79.3,-5.5,75.2,10.6C71.2,26.6,64.4,42.2,52.2,53.4C40.1,64.7,22.6,71.7,5.8,68.3C-10.9,64.9,-21.8,51.1,-34.4,40.4C-47,29.8,-61.4,22.3,-68.8,10.2C-76.2,-1.9,-76.5,-18.6,-68.5,-31.7C-60.6,-44.7,-44.5,-54,-28.5,-62.1C-12.6,-70.1,3.3,-77.1,18.9,-76.5C34.6,-75.9,49.9,-67.8,43.8,-71.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-purple-800">
              Nursery Teacher Training (NTT) Course
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-700">
              Become a certified nursery teacher and shape the future of young
              minds with our comprehensive NTT program.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 text-lg rounded-xl shadow-lg transition-transform hover:scale-105">
                Enroll Now
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-700 hover:bg-purple-100 px-8 py-4 text-lg rounded-xl transition-all"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom blur strip */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/20 backdrop-blur-sm z-0 rounded-t-3xl"></div>
      </section>

      {/* What is NTT Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What is Nursery Teacher Training (NTT)?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Nursery Teacher Training (NTT) is a specialized program designed
              to equip aspiring teachers with the skills and knowledge needed to
              educate and nurture children in the age group of 0-5 years.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our NTT course focuses on child psychology, teaching
              methodologies, classroom management, and creative learning
              techniques tailored for preschool children.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <span className="text-gray-700">Recognized certification</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <span className="text-gray-700">Practical training approach</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <span className="text-gray-700">
                Industry-experienced instructors
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1661396562110-1eb0bcc43c27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TnVyc2VyeSUyMFRlYWNoZXIlMjBUcmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="NTT Teaching"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-2">
                <Users className="text-blue-600 w-6 h-6" />
                <span className="font-medium">500+ Students Trained</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-blue-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Course Overview
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="text-blue-600 w-6 h-6" />
                </div>
                <CardTitle>Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">6 Months Intensive Program</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="text-purple-600 w-6 h-6" />
                </div>
                <CardTitle>Format</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Hybrid (Online + Classroom)</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <GraduationCap className="text-green-600 w-6 h-6" />
                </div>
                <CardTitle>Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Recognized by Education Boards</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="text-orange-600 w-6 h-6" />
                </div>
                <CardTitle>Batch Start</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">5th of Every Month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Career Benefits
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-blue-200 transition-all">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Briefcase className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              High Demand Profession
            </h3>
            <p className="text-gray-600">
              With increasing awareness of early childhood education, trained
              nursery teachers are in high demand globally.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-purple-200 transition-all">
            <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Award className="text-purple-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
            <p className="text-gray-600">
              Opportunities to grow into roles like preschool coordinator,
              curriculum developer, or center director.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-green-200 transition-all">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MapPin className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Flexible Work Options
            </h3>
            <p className="text-gray-600">
              Work in schools, daycare centers, or start your own preschool.
              Part-time and full-time options available.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-orange-200 transition-all">
            <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Rewarding Career</h3>
            <p className="text-gray-600">
              Make a lasting impact on children's lives during their most
              formative years.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-red-200 transition-all">
            <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <GraduationCap className="text-red-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              International Opportunities
            </h3>
            <p className="text-gray-600">
              Our certification is recognized internationally, opening doors to
              work abroad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-yellow-200 transition-all">
            <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BookOpen className="text-yellow-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
            <p className="text-gray-600">
              Access to workshops and advanced courses to keep your skills
              updated.
            </p>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Course Curriculum
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-600">
                Theory Modules
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Child Psychology and Development
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Principles of Early Childhood Education
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Health, Nutrition and Safety
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Classroom Management Techniques
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Special Needs Education Basics
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-purple-600">
                Practical Training
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Lesson Planning and Implementation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Creative Teaching Aids Development
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Activity-Based Learning Methods
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Storytelling and Rhyme Techniques
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Internship at Partner Preschools
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
              Certification Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <p className="font-medium">Complete All Modules</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <p className="font-medium">Pass Theory Exams</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <p className="font-medium">Complete Internship</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <p className="font-medium">Receive Certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "The NTT course transformed my approach to teaching young
                children. The practical training was exceptional and helped me
                secure a job immediately after certification."
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">SP</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Patel</h4>
                  <p className="text-sm text-gray-500">
                    Preschool Teacher, Bright Kids
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "As a career changer, I was nervous about entering early
                childhood education. This course gave me the confidence and
                skills to thrive in my new profession."
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Johnson</h4>
                  <p className="text-sm text-gray-500">
                    Daycare Center Teacher
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "The child psychology modules were eye-opening. I now understand
                my students better and can create more effective learning
                experiences for them."
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-green-600 font-bold">RD</span>
                </div>
                <div>
                  <h4 className="font-semibold">Riya Desai</h4>
                  <p className="text-sm text-gray-500">
                    Founder, Little Explorers Preschool
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-purple-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full max-w-4xl mx-auto"
          >
            <AccordionItem
              value="item-1"
              className="mb-4 bg-white rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-purple-600 w-5 h-5" />
                  <span className="text-lg font-medium text-left">
                    What are the eligibility criteria for the NTT course?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Candidates should have completed 10+2 (higher secondary
                education) from a recognized board. There's no upper age limit.
                A passion for working with young children is essential.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="mb-4 bg-white rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-purple-600 w-5 h-5" />
                  <span className="text-lg font-medium text-left">
                    Is there any age limit to join this course?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                No, there is no upper age limit for joining our NTT course. We
                welcome candidates from all age groups who meet the educational
                qualifications and have a genuine interest in early childhood
                education.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="mb-4 bg-white rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-purple-600 w-5 h-5" />
                  <span className="text-lg font-medium text-left">
                    What is the duration of the course?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                The standard duration is 6 months, which includes both
                theoretical learning and practical training. We also offer an
                accelerated 4-month option for qualified candidates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="mb-4 bg-white rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-purple-600 w-5 h-5" />
                  <span className="text-lg font-medium text-left">
                    Will I get placement assistance after completion?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Yes, we have a dedicated placement cell that assists our
                certified students in finding suitable positions. We have
                tie-ups with numerous preschools and daycare centers across the
                country.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="mb-4 bg-white rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-purple-600 w-5 h-5" />
                  <span className="text-lg font-medium text-left">
                    Can I pursue this course while working?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Absolutely! We offer flexible learning options including weekend
                batches and online modules to accommodate working professionals.
                The practical training can be scheduled according to your
                availability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Still have questions? We're happy to help!
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-6 text-lg">
              <MessageSquare className="mr-2 w-5 h-5" />
              Contact Our Advisor
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey as a Nursery Teacher?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our next batch and take the first step toward a rewarding
            career in early childhood education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Enroll Now
            </Button>
            {/* <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              Download Brochure
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NTTCoursePage;
