import React from "react";
import {
  BookOpen,
  Code2,
  Briefcase,
  Users,
  Award,
  ChevronDown,
  Check,
  Star,
  MessageSquare,
  Clock,
  Calendar,
  BarChart2,
  DollarSign,
  Globe,
  Laptop,
  Rocket,
  Zap,
  Layers,
  Cpu,
  ShieldCheck,
  GitBranch,
  ListOrdered,
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

const RSCFACoursePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section - Redesigned */}
      <section className="relative overflow-hidden">
        {/* Background gradient with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 opacity-95">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20">
            <Rocket className="mr-2 h-5 w-5" />
            <span className="text-sm font-medium">
              New Cohort Starting Soon
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              Master RS-CFA
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Become a React & ShadCN UI expert with our comprehensive frontend
            architecture course
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Enroll Now
              <Zap className="ml-2 h-5 w-5 fill-blue-600" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-black/70 hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Explore Curriculum
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <div className="flex items-center text-white/90">
              <Layers className="mr-2 h-5 w-5 text-blue-200" />
              <span>12 Modules</span>
            </div>
            <div className="flex items-center text-white/90">
              <Clock className="mr-2 h-5 w-5 text-blue-200" />
              <span>60+ Hours Content</span>
            </div>
            <div className="flex items-center text-white/90">
              <ShieldCheck className="mr-2 h-5 w-5 text-blue-200" />
              <span>Certificate</span>
            </div>
          </div>
        </div>

        {/* Animated floating cards */}
        <div className="absolute bottom-0 left-0 right-0 h-32 flex justify-center gap-8 z-0 opacity-90">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className={`w-24 h-24 rounded-xl shadow-lg ${
                item % 2 === 0 ? "bg-blue-500/30" : "bg-purple-500/30"
              } backdrop-blur-sm border border-white/10`}
              style={{
                animation: `float${item} 8s ease-in-out infinite`,
                animationDelay: `${item * 0.5}s`,
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Course Highlights - Redesigned Cards */}
      <section className="relative py-20 -mt-16 z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Interactive */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-tilt"></div>
              <Card className="relative h-full bg-white/90 backdrop-blur-sm border-0 rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-6 shadow-md">
                      <Code2 className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      Modern Tech Stack
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600">
                    Master React 18, Tailwind CSS, and ShadCN UI - the most
                    sought-after frontend technologies in 2024.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button
                    variant="link"
                    className="text-blue-600 p-0 hover:no-underline group-hover:underline"
                  >
                    Learn more
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Card 2 - Interactive */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-tilt"></div>
              <Card className="relative h-full bg-white/90 backdrop-blur-sm border-0 rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-6 shadow-md">
                      <GitBranch className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      Real Projects
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600">
                    Build 5 portfolio-worthy projects including a full SaaS
                    application with authentication.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button
                    variant="link"
                    className="text-purple-600 p-0 hover:no-underline group-hover:underline"
                  >
                    See projects
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Card 3 - Interactive */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-pink-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-tilt"></div>
              <Card className="relative h-full bg-white/90 backdrop-blur-sm border-0 rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-r from-amber-600 to-amber-400 p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-6 shadow-md">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      Career Focused
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600">
                    Gain skills that employers are actively seeking with our
                    industry-aligned curriculum.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button
                    variant="link"
                    className="text-amber-600 p-0 hover:no-underline group-hover:underline"
                  >
                    Career paths
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn - Gradient Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You'll Master
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Comprehensive curriculum covering all aspects of modern frontend
              development with React and ShadCN UI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="h-6 w-6" />,
                title: "React 18 Fundamentals",
                desc: "Hooks, Context, Suspense, Concurrent Features",
              },
              {
                icon: <Layers className="h-6 w-6" />,
                title: "ShadCN UI Deep Dive",
                desc: "Customization, Theming, Component Extensions",
              },
              {
                icon: <GitBranch className="h-6 w-6" />,
                title: "State Management",
                desc: "Zustand, Context API, Server State with TanStack",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Performance",
                desc: "Memoization, Code Splitting, Lazy Loading",
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Authentication",
                desc: "JWT, OAuth, Protected Routes",
              },
              {
                icon: <Rocket className="h-6 w-6" />,
                title: "Deployment",
                desc: "Vercel, Netlify, CI/CD Pipelines",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:shadow-lg"
              >
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum - Glass Morphism Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Course Curriculum
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Structured learning path with practical exercises and real-world
              projects.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Module 1: React Fundamentals",
                duration: "4 Weeks",
                lessons: "12 Lessons",
                projects: "2 Projects",
                desc: "JSX, Components, Props, State, Hooks, Event Handling",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                title: "Module 2: Advanced React Patterns",
                duration: "3 Weeks",
                lessons: "10 Lessons",
                projects: "1 Project",
                desc: "Compound Components, Render Props, HOC, Custom Hooks",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                title: "Module 3: ShadCN UI Mastery",
                duration: "3 Weeks",
                lessons: "8 Lessons",
                projects: "1 Project",
                desc: "Component Library Setup, Customization, Theming",
                gradient: "from-indigo-500 to-indigo-600",
              },
              {
                title: "Module 4: State Management",
                duration: "4 Weeks",
                lessons: "14 Lessons",
                projects: "2 Projects",
                desc: "Context API, Zustand, Server State with React Query",
                gradient: "from-amber-500 to-amber-600",
              },
              {
                title: "Module 5: Performance Optimization",
                duration: "2 Weeks",
                lessons: "6 Lessons",
                projects: "1 Project",
                desc: "Memoization, Code Splitting, Lazy Loading",
                gradient: "from-green-500 to-green-600",
              },
            ].map((module, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${module.gradient} rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200`}
                ></div>
                <Card className="relative bg-white rounded-xl shadow-md group-hover:shadow-xl transition-all overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem
                      value={`module-${index}`}
                      className="border-0"
                    >
                      <AccordionTrigger className="hover:no-underline px-8 py-6">
                        <div className="flex items-start w-full">
                          <div
                            className={`bg-gradient-to-r ${module.gradient} p-3 rounded-lg mr-6 shadow-md`}
                          >
                            <BookOpen className="text-white" size={20} />
                          </div>
                          <div className="text-left flex-1">
                            <h3 className="text-xl font-bold text-gray-800">
                              {module.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Clock className="mr-1 h-4 w-4" />
                                {module.duration}
                              </span>
                              <span className="flex items-center">
                                <ListOrdered className="mr-1 h-4 w-4" />
                                {module.lessons}
                              </span>
                              <span className="flex items-center">
                                <Code2 className="mr-1 h-4 w-4" />
                                {module.projects}
                              </span>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6">
                        <div className="pl-16">
                          <p className="text-gray-600 mb-4">{module.desc}</p>
                          <Button variant="outline" className="border-gray-300">
                            View Details
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of your sections (Career Benefits, Testimonials, FAQ, etc.) */}
      {/* ... */}
    </div>
  );
};

export default RSCFACoursePage;

// import React from 'react';
// import {
//   BookOpen,
//   Code2,
//   Briefcase,
//   Users,
//   Award,
//   ChevronDown,
//   Check,
//   Star,
//   MessageSquare,
//   Clock,
//   Calendar,
//   BarChart2,
//   DollarSign,
//   Globe,
//   Laptop
// } from 'lucide-react';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
// import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

// const RSCFACoursePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">RS-CFA Course</h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
//             Master React.js with ShadCN UI to build modern, scalable frontend architectures
//           </p>
//           <div className="flex justify-center gap-4">
//             <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
//               Enroll Now
//             </button>
//             <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-top-left"></div>
//       </section>

//       {/* Course Overview */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               RS-CFA (React & ShadCN Frontend Architecture) is a comprehensive course designed to take you from React basics to advanced architectural patterns using ShadCN UI components.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="hover:shadow-lg transition">
//               <CardHeader>
//                 <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                   <Code2 className="text-blue-600" size={24} />
//                 </div>
//                 <CardTitle>Modern Tech Stack</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>Learn React.js, Tailwind CSS, and ShadCN UI - the most in-demand frontend technologies.</p>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-lg transition">
//               <CardHeader>
//                 <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                   <BookOpen className="text-purple-600" size={24} />
//                 </div>
//                 <CardTitle>Project-Based Learning</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>Build real-world applications with hands-on projects and case studies.</p>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-lg transition">
//               <CardHeader>
//                 <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                   <Briefcase className="text-green-600" size={24} />
//                 </div>
//                 <CardTitle>Career Focused</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>Gain skills that employers are looking for in modern frontend development roles.</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* What You'll Learn */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Comprehensive curriculum covering all aspects of modern frontend development with React and ShadCN UI.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="space-y-4">
//               {[
//                 "React fundamentals and advanced concepts",
//                 "State management with Context API and Zustand",
//                 "ShadCN UI component library mastery",
//                 "Tailwind CSS for rapid styling",
//                 "Modern frontend architecture patterns",
//                 "Performance optimization techniques"
//               ].map((item, index) => (
//                 <div key={index} className="flex items-start">
//                   <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//                   <p>{item}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="space-y-4">
//               {[
//                 "Authentication and authorization flows",
//                 "API integration strategies",
//                 "Testing React applications",
//                 "Accessibility best practices",
//                 "Deployment and CI/CD pipelines",
//                 "Monorepo setup with Turborepo"
//               ].map((item, index) => (
//                 <div key={index} className="flex items-start">
//                   <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//                   <p>{item}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Course Curriculum */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Course Curriculum</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Structured learning path with practical exercises and real-world projects.
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             <Accordion type="single" collapsible className="w-full">
//               {[
//                 {
//                   title: "Module 1: React Fundamentals",
//                   content: "JSX, Components, Props, State, Hooks, Event Handling"
//                 },
//                 {
//                   title: "Module 2: Advanced React Patterns",
//                   content: "Compound Components, Render Props, HOC, Custom Hooks"
//                 },
//                 {
//                   title: "Module 3: ShadCN UI Deep Dive",
//                   content: "Component Library Setup, Customization, Theming"
//                 },
//                 {
//                   title: "Module 4: State Management",
//                   content: "Context API, Zustand, Server State with React Query"
//                 },
//                 {
//                   title: "Module 5: Performance Optimization",
//                   content: "Memoization, Code Splitting, Lazy Loading"
//                 },
//                 {
//                   title: "Module 6: Full Project",
//                   content: "Build a complete application with all learned concepts"
//                 }
//               ].map((module, index) => (
//                 <AccordionItem key={index} value={`item-${index}`}>
//                   <AccordionTrigger className="hover:no-underline">
//                     <div className="flex items-center">
//                       <div className="bg-indigo-100 p-2 rounded-full mr-4">
//                         <BookOpen className="text-indigo-600" size={18} />
//                       </div>
//                       <span className="font-semibold text-left">{module.title}</span>
//                     </div>
//                   </AccordionTrigger>
//                   <AccordionContent>
//                     <div className="pl-16 pr-4 py-2 text-gray-600">
//                       {module.content}
//                     </div>
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </section>

//       {/* Career Benefits */}
//       <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Career Benefits</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               How RS-CFA will accelerate your career in frontend development.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="bg-white/80 backdrop-blur-sm border-0">
//               <CardHeader>
//                 <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                   <DollarSign className="text-blue-600" size={24} />
//                 </div>
//                 <CardTitle>Higher Salary</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>React developers with architecture skills command top salaries in the industry.</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/80 backdrop-blur-sm border-0">
//               <CardHeader>
//                 <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                   <Briefcase className="text-purple-600" size={24} />
//                 </div>
//                 <CardTitle>More Job Opportunities</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>React is one of the most in-demand skills in the frontend job market.</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/80 backdrop-blur-sm border-0">
//               <CardHeader>
//                 <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                   <Globe className="text-green-600" size={24} />
//                 </div>
//                 <CardTitle>Global Recognition</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>Skills you learn are applicable worldwide in remote or local positions.</p>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h3 className="text-2xl font-bold mb-4">Why RS-CFA Stands Out</h3>
//                 <p className="text-gray-600 mb-6">
//                   Unlike generic React courses, RS-CFA focuses on the complete architecture of modern applications using the powerful combination of React, Tailwind CSS, and ShadCN UI.
//                 </p>
//                 <div className="space-y-3">
//                   <div className="flex items-center">
//                     <Check className="text-green-500 mr-2" />
//                     <span>Learn industry best practices</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="text-green-500 mr-2" />
//                     <span>Build portfolio-ready projects</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="text-green-500 mr-2" />
//                     <span>Get career guidance and support</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-indigo-50 rounded-lg p-6">
//                 <div className="bg-white p-6 rounded-lg shadow-sm">
//                   <h4 className="font-semibold mb-4">Average Salaries</h4>
//                   <div className="space-y-4">
//                     <div>
//                       <div className="flex justify-between mb-1">
//                         <span>Junior React Developer</span>
//                         <span>$75,000</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex justify-between mb-1">
//                         <span>Mid-Level React Developer</span>
//                         <span>$95,000</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex justify-between mb-1">
//                         <span>Senior React Architect</span>
//                         <span>$125,000+</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div className="bg-blue-500 h-2 rounded-full w-full"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Student Testimonials */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Hear from our alumni about their learning experience.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Sarah Johnson",
//                 role: "Frontend Developer at TechCorp",
//                 review: "The RS-CFA course transformed my approach to React development. The architectural patterns I learned helped me get promoted within 3 months.",
//                 rating: 5
//               },
//               {
//                 name: "Michael Chen",
//                 role: "UI Engineer at DesignHub",
//                 review: "ShadCN UI was a game-changer for our design system. This course provided exactly the depth I needed to implement it effectively.",
//                 rating: 5
//               },
//               {
//                 name: "Emma Rodriguez",
//                 role: "Freelance Developer",
//                 review: "After completing RS-CFA, I doubled my freelance rates and got more clients than I could handle. The investment paid for itself many times over.",
//                 rating: 4
//               }
//             ].map((testimonial, index) => (
//               <Card key={index} className="hover:shadow-lg transition">
//                 <CardContent className="p-6">
//                   <div className="flex mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} w-5 h-5`}
//                       />
//                     ))}
//                   </div>
//                   <p className="text-gray-600 italic mb-6">"{testimonial.review}"</p>
//                   <div className="flex items-center">
//                     <div className="bg-blue-100 p-2 rounded-full mr-4">
//                       <Users className="text-blue-600" size={20} />
//                     </div>
//                     <div>
//                       <p className="font-semibold">{testimonial.name}</p>
//                       <p className="text-sm text-gray-500">{testimonial.role}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Find answers to common questions about the RS-CFA course.
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             <Accordion type="multiple" className="w-full space-y-4">
//               {[
//                 {
//                   question: "Who is this course for?",
//                   answer: "RS-CFA is designed for JavaScript developers who want to master React with a focus on modern architectural patterns. It's suitable for beginners with basic JavaScript knowledge and experienced developers looking to deepen their React expertise."
//                 },
//                 {
//                   question: "What are the prerequisites?",
//                   answer: "You should be comfortable with JavaScript fundamentals (ES6+ features), HTML, and CSS. Familiarity with basic React concepts is helpful but not required as we cover fundamentals at the beginning."
//                 },
//                 {
//                   question: "How long does the course take to complete?",
//                   answer: "The course is self-paced, but most students complete it in 8-12 weeks by dedicating 10-15 hours per week. It includes about 60 hours of video content plus hands-on projects."
//                 },
//                 {
//                   question: "Will I get a certificate?",
//                   answer: "Yes, upon successful completion of all modules and final project, you'll receive a certificate that you can share on LinkedIn and with potential employers."
//                 },
//                 {
//                   question: "What kind of support is available?",
//                   answer: "You'll have access to a dedicated Slack community, weekly Q&A sessions with instructors, and code reviews for your projects. Our team is committed to helping you succeed."
//                 }
//               ].map((faq, index) => (
//                 <Card key={index} className="border-0 bg-white/90">
//                   <AccordionItem value={`faq-${index}`}>
//                     <AccordionTrigger className="px-6 py-4 hover:no-underline">
//                       <div className="flex items-center">
//                         <div className="bg-indigo-100 p-2 rounded-full mr-4">
//                           <MessageSquare className="text-indigo-600" size={18} />
//                         </div>
//                         <span className="font-semibold text-left">{faq.question}</span>
//                       </div>
//                     </AccordionTrigger>
//                     <AccordionContent className="px-6 pb-4">
//                       <div className="pl-16 pr-4 text-gray-600">
//                         {faq.answer}
//                       </div>
//                     </AccordionContent>
//                   </AccordionItem>
//                 </Card>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Frontend Skills?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Join the RS-CFA course today and take the first step toward becoming a React architecture expert.
//           </p>
//           <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg">
//             Enroll Now
//           </button>
//           <div className="mt-8 flex justify-center items-center text-sm">
//             <div className="flex items-center mr-6">
//               <Clock className="mr-2" size={16} />
//               <span>Self-paced learning</span>
//             </div>
//             <div className="flex items-center">
//               <Calendar className="mr-2" size={16} />
//               <span>Lifetime access</span>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default RSCFACoursePage;
