import React from "react";
import {
  Leaf,
  Activity,
  User,
  Award,
  BookOpen,
  Sun,
  Moon,
  HeartPulse,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const YTTCoursePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Serene Hero Section with Nature-Inspired SVG */}
      <section className="relative bg-gradient-to-br from-teal-600 to-emerald-700 text-white py-24 overflow-hidden">
        {/* Abstract Yoga Pose SVG */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 500 800" className="w-full h-full">
            <path
              d="M250,100 C300,50 400,150 350,250 C300,350 200,300 250,400 C300,500 400,450 350,550 C300,650 200,600 250,700"
              stroke="white"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="250" cy="100" r="20" fill="white" />
          </svg>
        </div>

        {/* Sun/Moon Balance Decoration */}
        <div className="absolute top-1/4 left-1/4 opacity-20">
          <div className="relative">
            <Sun className="w-16 h-16 text-yellow-200 absolute -left-8 -top-8" />
            <Moon className="w-16 h-16 text-white absolute -right-8 -bottom-8" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3 text-center md:text-left">
              <div className="inline-flex items-center bg-white text-black bg-opacity-20 px-4 py-2 rounded-full mb-6">
                <Leaf className="mr-2 text-emerald-200" size={20} />
                <span className="font-medium">200-Hour Certified Program</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Transform Your Practice, <br />
                <span className="text-teal-200">Elevate Your Teaching</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0">
                Our Yoga Teacher Training program blends ancient wisdom with
                modern teaching methodologies
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg">
                  Begin Your Journey
                </button>
                <button className="border-2 border-white hover:bg-white hover:bg-opacity-10 px-8 py-4 rounded-lg font-semibold text-lg transition">
                  Program Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mountain/Lotus Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,0 C150,80 350,20 600,80 C850,140 1050,60 1200,100 L1200,0 Z"
              fill="white"
            />
            <path
              d="M0,60 C150,30 350,90 600,30 C850,-30 1050,30 1200,0 L1200,120 L0,120 Z"
              fill="white"
              opacity="0.3"
            />
          </svg>
        </div>
      </section>

      {/* What is YTT Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative bg-slate-50 p-10 rounded-2xl border border-slate-200">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-100 rounded-full z-0 opacity-80"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full z-0 opacity-80"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                    <Activity className="mr-3 text-teal-600" size={28} />
                    What is Yoga Teacher Training?
                  </h2>
                  <p className="text-lg text-slate-600 mb-4">
                    Yoga Teacher Training (YTT) is a transformative program that
                    deepens your personal practice while equipping you with the
                    skills to guide others safely and effectively through yoga.
                  </p>
                  <p className="text-lg text-slate-600">
                    Our 200-hour certification meets Yoga Alliance standards,
                    covering asana, pranayama, meditation, anatomy, philosophy,
                    and teaching methodology.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition border-t-4 border-teal-500 group">
                  <CardHeader>
                    <div className="bg-teal-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:rotate-12 transition">
                      <User className="text-teal-600" size={24} />
                    </div>
                    <CardTitle>Personal Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Deepen your practice beyond physical postures
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition border-t-4 border-emerald-500 group">
                  <CardHeader>
                    <div className="bg-emerald-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:rotate-12 transition">
                      <Award className="text-emerald-600" size={24} />
                    </div>
                    <CardTitle>Global Certification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Internationally recognized 200-hour credential
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition border-t-4 border-amber-500 group">
                  <CardHeader>
                    <div className="bg-amber-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:rotate-12 transition">
                      <HeartPulse className="text-amber-600" size={24} />
                    </div>
                    <CardTitle>Holistic Approach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Integrate body, mind, and spirit in your teaching
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition border-t-4 border-slate-500 group">
                  <CardHeader>
                    <div className="bg-slate-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:rotate-12 transition">
                      <BookOpen className="text-slate-600" size={24} />
                    </div>
                    <CardTitle>Comprehensive Curriculum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      From asana to philosophy to business skills
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            <Activity className="inline mr-3 text-teal-600" size={28} />
            Program Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-teal-100 rounded-2xl opacity-0 group-hover:opacity-100 transition z-0"></div>
              <div className="relative bg-white rounded-2xl p-8 h-full border border-slate-200 z-10 group">
                <div className="bg-teal-50 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Sun className="text-teal-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">
                  Asana Mastery
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>100+ postures with variations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Alignment principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Sequencing methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Adjustments and modifications</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-100 rounded-2xl opacity-0 group-hover:opacity-100 transition z-0"></div>
              <div className="relative bg-white rounded-2xl p-8 h-full border border-slate-200 z-10 group">
                <div className="bg-emerald-50 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Moon className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">
                  Yoga Philosophy
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span>Study of Yoga Sutras</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span>Eight limbs of yoga</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span>Chakras and energy systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span>Ethics for yoga teachers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition z-0"></div>
              <div className="relative bg-white rounded-2xl p-8 h-full border border-slate-200 z-10 group">
                <div className="bg-amber-50 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <HeartPulse className="text-amber-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">
                  Teaching Skills
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Effective cueing techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Class planning and theming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Voice projection and pacing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Hands-on adjustments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections would follow similar patterns */}
    </div>
  );
};

export default YTTCoursePage;

// import {
//   BookOpen,
//   Award,
//   Users,
//   Calendar,
//   Clock,
//   CheckCircle,
//   HelpCircle,
//   BicepsFlexed,
// } from "lucide-react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from "@/components/ui/accordion";

// const YTTCoursePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-r from-green-700 to-emerald-500 text-white">
//         <div className="container mx-auto px-6 text-center">
//           <div className="flex justify-center mb-8">
//             <BicepsFlexed className="w-16 h-16" />
//           </div>
//           <h1 className="text-5xl font-bold mb-6">
//             Yoga Teacher Training (YTT)
//           </h1>
//           <p className="text-xl mb-8 max-w-3xl mx-auto">
//             Transform your passion for yoga into a rewarding career with our
//             comprehensive 200-hour certification program.
//           </p>
//           <div className="flex gap-4 justify-center">
//             <button className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition">
//               Enroll Now
//             </button>
//             <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
//       </section>

//       {/* What is YTT Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-emerald-700 mb-4">
//               What is Yoga Teacher Training?
//             </h2>
//             <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <p className="text-lg mb-6">
//                 Yoga Teacher Training (YTT) is a professional certification
//                 program that equips you with the knowledge, skills, and
//                 confidence to teach yoga safely and effectively. Our 200-hour
//                 program meets Yoga Alliance standards.
//               </p>
//               <p className="text-lg mb-6">
//                 Whether you want to deepen your personal practice or start a new
//                 career as a yoga instructor, this transformative journey will
//                 provide you with a solid foundation in yoga philosophy, anatomy,
//                 teaching methodology, and more.
//               </p>
//               <div className="flex items-center gap-2 text-emerald-700 font-medium">
//                 <CheckCircle className="w-5 h-5" />
//                 <span>Internationally recognized certification</span>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-emerald-100 rounded-2xl p-8">
//                 <div className="aspect-w-16 aspect-h-9 bg-emerald-200 rounded-lg overflow-hidden">
//                   {/* Placeholder for yoga image/video */}
//                   <div className="w-full h-full flex items-center justify-center text-emerald-700">
//                     <BicepsFlexed className="w-20 h-20" />
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute -top-6 -right-6 bg-amber-400 rounded-full w-32 h-32 -z-10"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Course Overview */}
//       <section className="py-16 bg-amber-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-emerald-700 mb-4">
//               Course Overview
//             </h2>
//             <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="border-0 shadow-lg hover:shadow-xl transition">
//               <CardHeader>
//                 <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
//                   <Calendar className="text-emerald-700 w-6 h-6" />
//                 </div>
//                 <CardTitle>Duration</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>4 weeks intensive or 12 weeks part-time</p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition">
//               <CardHeader>
//                 <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
//                   <Clock className="text-emerald-700 w-6 h-6" />
//                 </div>
//                 <CardTitle>Hours</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>200 hours (180 contact + 20 non-contact)</p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition">
//               <CardHeader>
//                 <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
//                   <Award className="text-emerald-700 w-6 h-6" />
//                 </div>
//                 <CardTitle>Certification</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>Yoga Alliance RYT 200 recognized</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Course Curriculum */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-emerald-700 mb-4">
//               Course Curriculum
//             </h2>
//             <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-6 text-emerald-800">
//                 Core Components
//               </h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
//                   <span>Asana (Yoga Postures) - 100 hours</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
//                   <span>Teaching Methodology - 30 hours</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
//                   <span>Anatomy & Physiology - 20 hours</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
//                   <span>Yoga Philosophy - 20 hours</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
//                   <span>Practicum - 10 hours</span>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold mb-6 text-emerald-800">
//                 Specialized Training
//               </h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
//                   <span>Sequencing & Class Planning</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
//                   <span>Adjustments & Alignment</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
//                   <span>Pranayama & Meditation</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
//                   <span>Business of Yoga</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
//                   <span>Trauma-Informed Yoga</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Career Benefits */}
//       <section className="py-16 bg-emerald-700 text-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">
//               Career Benefits of YTT Certification
//             </h2>
//             <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="bg-white/10 backdrop-blur-sm border-0">
//               <CardHeader>
//                 <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
//                   <Users className="text-emerald-700 w-6 h-6" />
//                 </div>
//                 <CardTitle className="text-white">
//                   Teaching Opportunities
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>
//                   Teach at yoga studios, gyms, retreat centers, or start your
//                   own classes
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/10 backdrop-blur-sm border-0">
//               <CardHeader>
//                 <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
//                   <Award className="text-emerald-700 w-6 h-6" />
//                 </div>
//                 <CardTitle className="text-white">Credibility</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>
//                   Gain recognition as a certified professional in the growing
//                   wellness industry
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/10 backdrop-blur-sm border-0">
//               <CardHeader>
//                 <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
//                   <BookOpen className="text-emerald-700 w-6 h-6" />
//                 </div>
//                 <CardTitle className="text-white">
//                   Continued Education
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>
//                   Foundation for advanced training (300hr, 500hr, specialty
//                   certifications)
//                 </p>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="mt-12 text-center">
//             <h3 className="text-2xl font-semibold mb-6">
//               Potential Career Paths
//             </h3>
//             <div className="flex flex-wrap justify-center gap-4">
//               <span className="bg-white/20 px-4 py-2 rounded-full">
//                 Studio Yoga Instructor
//               </span>
//               <span className="bg-white/20 px-4 py-2 rounded-full">
//                 Corporate Yoga Teacher
//               </span>
//               <span className="bg-white/20 px-4 py-2 rounded-full">
//                 Private Yoga Coach
//               </span>
//               <span className="bg-white/20 px-4 py-2 rounded-full">
//                 Yoga Retreat Leader
//               </span>
//               <span className="bg-white/20 px-4 py-2 rounded-full">
//                 Wellness Center Director
//               </span>
//               <span className="bg-white/20 px-4 py-2 rounded-full">
//                 Online Yoga Content Creator
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 bg-amber-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-emerald-700 mb-4">
//               What Our Students Say
//             </h2>
//             <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="border-0 shadow-lg hover:shadow-xl transition">
//               <CardContent className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
//                     <span className="text-emerald-700 font-bold">AS</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">Anika Sharma</h4>
//                     <p className="text-sm text-gray-600">2023 Graduate</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700">
//                   "This training transformed my practice and gave me the
//                   confidence to teach. The curriculum was comprehensive and the
//                   instructors were incredibly supportive."
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition">
//               <CardContent className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
//                     <span className="text-emerald-700 font-bold">RJ</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">Raj Patel</h4>
//                     <p className="text-sm text-gray-600">2022 Graduate</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700">
//                   "I came for the certification but left with so much more - a
//                   deeper understanding of yoga philosophy and lifelong friends.
//                   Now I teach full-time at two studios."
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition">
//               <CardContent className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
//                     <span className="text-emerald-700 font-bold">MP</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">Maria Gonzalez</h4>
//                     <p className="text-sm text-gray-600">2024 Graduate</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700">
//                   "The business of yoga module was invaluable. I launched my
//                   online yoga platform right after graduation and already have
//                   200+ subscribers!"
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-emerald-700 mb-4">
//               Frequently Asked Questions
//             </h2>
//             <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             <Accordion type="single" collapsible className="w-full">
//               <AccordionItem value="item-1">
//                 <AccordionTrigger className="text-left hover:no-underline">
//                   <div className="flex items-center gap-3">
//                     <HelpCircle className="w-5 h-5 text-emerald-600" />
//                     <span>
//                       Do I need to be advanced in yoga to take this training?
//                     </span>
//                   </div>
//                 </AccordionTrigger>
//                 <AccordionContent className="pl-11">
//                   No, you don't need to be an advanced practitioner. While a
//                   consistent yoga practice (minimum 6 months) is recommended,
//                   our program is designed to meet students at their current
//                   level and help them grow.
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-2">
//                 <AccordionTrigger className="text-left hover:no-underline">
//                   <div className="flex items-center gap-3">
//                     <HelpCircle className="w-5 h-5 text-emerald-600" />
//                     <span>
//                       What style of yoga will I be certified to teach?
//                     </span>
//                   </div>
//                 </AccordionTrigger>
//                 <AccordionContent className="pl-11">
//                   Our program focuses on Hatha and Vinyasa yoga with elements
//                   from other traditions. Graduates are qualified to teach
//                   general yoga classes and can pursue additional training in
//                   specialized styles.
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-3">
//                 <AccordionTrigger className="text-left hover:no-underline">
//                   <div className="flex items-center gap-3">
//                     <HelpCircle className="w-5 h-5 text-emerald-600" />
//                     <span>
//                       How long does certification last? Is there renewal?
//                     </span>
//                   </div>
//                 </AccordionTrigger>
//                 <AccordionContent className="pl-11">
//                   Your RYT 200 certification with Yoga Alliance is valid
//                   indefinitely. However, to maintain your Registered Yoga
//                   Teacher status, you'll need to complete 30 hours of continuing
//                   education every 3 years.
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-4">
//                 <AccordionTrigger className="text-left hover:no-underline">
//                   <div className="flex items-center gap-3">
//                     <HelpCircle className="w-5 h-5 text-emerald-600" />
//                     <span>
//                       What's the difference between 200hr and 500hr training?
//                     </span>
//                   </div>
//                 </AccordionTrigger>
//                 <AccordionContent className="pl-11">
//                   The 200-hour is the foundational training to become a yoga
//                   teacher. The 500-hour is advanced training that builds on this
//                   foundation with deeper study. You can complete a 300-hour
//                   program after your 200-hour to reach the 500-hour level.
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-5">
//                 <AccordionTrigger className="text-left hover:no-underline">
//                   <div className="flex items-center gap-3">
//                     <HelpCircle className="w-5 h-5 text-emerald-600" />
//                     <span>What support is available after graduation?</span>
//                   </div>
//                 </AccordionTrigger>
//                 <AccordionContent className="pl-11">
//                   We offer ongoing mentorship, alumni workshops, job placement
//                   assistance, and a private community for graduates. Many
//                   studios also offer apprentice teaching opportunities for our
//                   graduates.
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-amber-400 to-amber-500 text-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6">
//             Ready to Begin Your Yoga Teaching Journey?
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Join our next training cohort and take the first step toward a
//             fulfilling career sharing your love of yoga.
//           </p>
//           <button className="bg-emerald-700 hover:bg-emerald-800 px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition">
//             Apply Now
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default YTTCoursePage;
