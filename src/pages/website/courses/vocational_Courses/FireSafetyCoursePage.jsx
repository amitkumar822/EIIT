import React from "react";
import {
  Flame,
  ShieldAlert,
  GraduationCap,
  Briefcase,
  Clock,
  Award,
  CheckCircle,
  MessageSquare,
  HelpCircle,
  Calendar,
  MapPin,
  User,
  AlertTriangle,
  FireExtinguisher,
  Building,
  Axis3D,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FireSafetyCoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <Flame className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fire & Safety Officer Training
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Become a certified Fire & Safety professional and protect lives and
            property with our industry-recognized program.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Enroll Now
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              Course Details
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
      </div>

      {/* What is Fire & Safety Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What is Fire & Safety Training?
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Fire & Safety training equips individuals with the knowledge and
              skills to prevent, assess, and respond to fire emergencies and
              occupational hazards. Our comprehensive program covers fire
              prevention, safety protocols, emergency response, and regulatory
              compliance.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              This course is designed for those seeking careers in industrial
              safety, fire departments, construction safety, and corporate
              safety departments.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700">
                  Meets OSHA and NFPA standards
                </span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700">
                  Hands-on firefighting simulations
                </span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700">
                  Taught by experienced fire safety professionals
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-red-100 rounded-2xl p-8 aspect-video flex items-center justify-center overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661490061456-00879b843549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmlyZSUyMCUyNiUyMFNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Fire Safety Training"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-2">
                <User className="text-red-600 w-6 h-6" />
                <span className="font-medium">
                  800+ Safety Officers Trained
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-red-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Course Overview
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow border border-red-100">
              <CardHeader>
                <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="text-red-600 w-6 h-6" />
                </div>
                <CardTitle>Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">3 Months Intensive Program</p>
                <p className="text-sm text-gray-500 mt-1">(240 Hours Total)</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border border-orange-100">
              <CardHeader>
                <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShieldAlert className="text-orange-600 w-6 h-6" />
                </div>
                <CardTitle>Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">NFPA & OSHA Compliant</p>
                <p className="text-sm text-gray-500 mt-1">
                  Internationally Recognized
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border border-amber-100">
              <CardHeader>
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FireExtinguisher className="text-amber-600 w-6 h-6" />
                </div>
                <CardTitle>Practical Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Live Fire Drills</p>
                <p className="text-sm text-gray-500 mt-1">Equipment Handling</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border border-yellow-100">
              <CardHeader>
                <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="text-yellow-600 w-6 h-6" />
                </div>
                <CardTitle>Next Batch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">15th of Every Month</p>
                <p className="text-sm text-gray-500 mt-1">
                  Limited Seats Available
                </p>
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
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-red-200 transition-all">
            <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Briefcase className="text-red-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              High Demand Profession
            </h3>
            <p className="text-gray-600">
              With increasing safety regulations worldwide, certified Fire &
              Safety officers are in high demand across industries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-orange-200 transition-all">
            <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Award className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lucrative Salaries</h3>
            <p className="text-gray-600">
              Fire & Safety professionals command competitive salaries with
              excellent growth potential.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-amber-200 transition-all">
            <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Building className="text-amber-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Diverse Industries</h3>
            <p className="text-gray-600">
              Work in oil & gas, construction, manufacturing, healthcare,
              hospitality, or government sectors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-yellow-200 transition-all">
            <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MapPin className="text-yellow-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Opportunities</h3>
            <p className="text-gray-600">
              Our certification is recognized internationally, opening doors to
              work abroad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-lime-200 transition-all">
            <div className="bg-lime-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <User className="text-lime-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Career Advancement</h3>
            <p className="text-gray-600">
              Progress to roles like Safety Manager, HSE Officer, or Fire
              Consultant.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-emerald-200 transition-all">
            <div className="bg-emerald-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Axis3D className="text-emerald-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Life-Saving Skills</h3>
            <p className="text-gray-600">
              Gain practical skills that can save lives in emergency situations.
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
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Flame className="text-red-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Fire Technology</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    Fire chemistry & behavior
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">Fire prevention systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    Fire detection & alarm systems
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    Fire extinguishing techniques
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <ShieldAlert className="text-orange-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Safety Management</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    Occupational health & safety
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    Risk assessment & control
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">Emergency preparedness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    Safety audits & inspections
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <AlertTriangle className="text-amber-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Practical Training</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    Live firefighting drills
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    First aid & rescue operations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    Safety equipment handling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">Industrial site visits</span>
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
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <p className="font-medium">Complete Training</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                  <span className="text-orange-600 font-bold">2</span>
                </div>
                <p className="font-medium">Pass Written Exam</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                  <span className="text-amber-600 font-bold">3</span>
                </div>
                <p className="font-medium">Practical Assessment</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                  <span className="text-yellow-600 font-bold">4</span>
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
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow border border-red-100">
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
                "The hands-on fire drills were incredible. I felt fully prepared
                for my first job as a safety officer at a chemical plant."
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-red-600 font-bold">RK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-500">
                    Safety Officer, PetroChem Ltd.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border border-orange-100">
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
                "The instructors had real-world experience that made all the
                difference. I tripled my salary within a year of certification."
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-orange-600 font-bold">PM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Priya Malik</h4>
                  <p className="text-sm text-gray-500">
                    HSE Manager, Construction Firm
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border border-amber-100">
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
                "The comprehensive curriculum covered everything from fire
                chemistry to safety laws. I started my own safety consultancy
                after completing the course."
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-amber-600 font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Amit Sharma</h4>
                  <p className="text-sm text-gray-500">
                    Founder, SafeGuard Consultants
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-orange-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
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
                  <HelpCircle className="text-orange-600 w-5 h-5" />
                  <span className="text-lg font-medium text-left">
                    What are the eligibility requirements for this course?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Candidates must be at least 18 years old with a minimum of 10+2
                education. Physical fitness is required for practical
                components. No prior experience in fire safety is needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="mb-4 bg-white rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-orange-600 w-5 h-5" />
                  <span className="text-lg font-medium text-left">
                    Is this certification recognized by government agencies?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Yes, our certification meets the standards of the National
                Safety Council and is recognized by OSHA and other regulatory
                bodies. It's valid for employment in both public and private
                sectors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="mb-4 bg-white rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-orange-600 w-5 h-5" />
                  <span className="text-lg font-medium text-left">
                    What kind of practical training is included?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                The course includes live fire drills with various extinguishers,
                rescue simulations, first aid training, equipment handling, and
                visits to industrial facilities to observe safety systems in
                action.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="mb-4 bg-white rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-orange-600 w-5 h-5" />
                  <span className="text-lg font-medium text-left">
                    What job placement support do you offer?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                We have a dedicated placement cell with connections to over 200
                companies. We provide resume building, interview preparation,
                and direct referrals to our industry partners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="mb-4 bg-white rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-orange-600 w-5 h-5" />
                  <span className="text-lg font-medium text-left">
                    How often do I need to renew my certification?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                The base certification is valid for 3 years. We offer refresher
                courses and advanced modules to keep your credentials current
                and your knowledge up-to-date with changing regulations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Still have questions about our Fire & Safety course?
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 px-8 py-6 text-lg">
              <MessageSquare className="mr-2 w-5 h-5" />
              Contact Our Safety Advisor
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-orange-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Fire & Safety Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our next batch and gain the skills to protect lives and
            property while building a rewarding profession.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Enroll Now
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              Download Syllabus
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FireSafetyCoursePage;
