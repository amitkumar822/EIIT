import React from 'react';
import { 
  Code,
  Cpu,
  Database,
  Server,
  Network,
  Terminal,
  GraduationCap,
  Briefcase,
  Clock,
  Calendar,
  BookOpen,
  MessageSquare,
  ChevronDown,
  User,
  Award,
  ShieldCheck
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const RSCSEPCoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tech-Inspired Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-24 overflow-hidden">
        {/* Circuit Board SVG Background */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1200 600" className="w-full h-full">
            <path 
              d="M0,300 L200,300 L200,100 L400,100 L400,300 L600,300 L600,100 L800,100 L800,300 L1000,300 L1000,100 L1200,100" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M0,400 L200,400 L200,500 L400,500 L400,400 L600,400 L600,500 L800,500 L800,400 L1000,400 L1000,500 L1200,500" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
            />
            <circle cx="200" cy="300" r="5" fill="currentColor" />
            <circle cx="400" cy="100" r="5" fill="currentColor" />
            <circle cx="600" cy="300" r="5" fill="currentColor" />
            <circle cx="800" cy="100" r="5" fill="currentColor" />
            <circle cx="1000" cy="300" r="5" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-blue-300">RS-CSEP</span> Certification Program
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Master cutting-edge computer science and engineering skills for the digital age
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-400 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg">
                  Enroll Now
                </button>
                <button className="border-2 border-white hover:bg-white hover:bg-opacity-10 px-8 py-4 rounded-lg font-semibold text-lg transition">
                  Download Syllabus
                </button>
              </div>
            </div>
            <div className="md:w-1/2 hidden md:block">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
                <div className="relative bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-30">
                  <div className="flex justify-center gap-6 mb-6">
                    <Code className="w-12 h-12 text-blue-300" />
                    <Cpu className="w-12 h-12 text-blue-300" />
                    <Database className="w-12 h-12 text-blue-300" />
                  </div>
                  <div className="text-center text-black">
                    <h3 className="text-2xl font-bold mb-2">Next Cohort Starts</h3>
                    <p className="text-xl mb-4">July 15, 2024</p>
                    <div className="flex justify-center gap-4">
                      <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                        <Clock className="inline mr-1" /> 6 Months
                      </div>
                      <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                        <User className="inline mr-1" /> Limited Seats
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="w-full h-full"
          >
            <path 
              d="M0,0 C150,80 350,0 600,80 C850,160 1050,40 1200,120 L1200,0 Z" 
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* What is RS-CSEP Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <Code className="inline mr-3 text-blue-600" size={28} />
                What is RS-CSEP?
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                The RS-CSEP (Robust Systems - Computer Science and Engineering Program) is an intensive certification designed to equip students with comprehensive skills in computer science fundamentals, software engineering, and system design.
              </p>
              <p className="text-lg text-gray-600">
                This program bridges the gap between academic theory and industry requirements, preparing graduates for high-demand roles in the tech sector.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Program Highlights:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Terminal className="text-blue-600" size={18} />
                    </span>
                    <span className="text-gray-700">Hands-on coding projects and real-world applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Server className="text-blue-600" size={18} />
                    </span>
                    <span className="text-gray-700">Comprehensive coverage of modern tech stacks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Network className="text-blue-600" size={18} />
                    </span>
                    <span className="text-gray-700">Networking and career support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <ShieldCheck className="text-blue-600" size={18} />
                    </span>
                    <span className="text-gray-700">Industry-recognized certification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <BookOpen className="inline mr-3 text-blue-600" size={28} />
            Course Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition group">
              <div className="relative">
                <svg className="w-full h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
                  <path d="M0,1 L100,1" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <CardTitle>Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">6-month intensive program with flexible learning options including part-time and full-time tracks</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition group">
              <div className="relative">
                <svg className="w-full h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
                  <path d="M0,1 L100,1" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <CardHeader>
                <div className="bg-indigo-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Cpu className="text-indigo-600" size={24} />
                </div>
                <CardTitle>Format</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Blended learning with online lectures, hands-on labs, coding exercises, and mentorship sessions</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition group">
              <div className="relative">
                <svg className="w-full h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
                  <path d="M0,1 L100,1" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <CardTitle>Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Earn a recognized RS-CSEP certification upon successful completion of all coursework and final project</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <Briefcase className="inline mr-3 text-blue-600" size={28} />
            Career Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <div className="relative h-32 overflow-hidden">
                  <svg 
                    viewBox="0 0 500 200" 
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id={`cardGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={benefit.gradientStart} />
                        <stop offset="100%" stopColor={benefit.gradientEnd} />
                      </linearGradient>
                    </defs>
                    <rect width="500" height="200" fill={`url(#cardGradient${index})`} />
                    {benefit.iconBg}
                  </svg>
                </div>
                <CardHeader>
                  <div className={`bg-${benefit.color}-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 -mt-8 relative z-10`}>
                    {React.createElement(benefit.icon, { className: `text-${benefit.color}-600`, size: 24 })}
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <Terminal className="inline mr-3 text-blue-600" size={28} />
            Course Curriculum
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {curriculumModules.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`}>
                  <AccordionTrigger className="hover:no-underline px-6 py-4 bg-white rounded-lg mb-2">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        {React.createElement(module.icon, { className: "text-blue-600", size: 20 })}
                      </div>
                      <span className="text-lg font-semibold text-left">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white rounded-b-lg">
                    <ul className="pl-6 space-y-2 mt-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <MessageSquare className="inline mr-3 text-blue-300" size={28} />
            What Our Students Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-30 transition">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <User className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-blue-200">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="hover:no-underline px-6 py-4 bg-blue-50 rounded-lg mb-2">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-4">
                        <ChevronDown className="text-blue-600" />
                      </div>
                      <span className="text-lg font-semibold text-left">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-blue-50 rounded-b-lg">
                    <p className="text-gray-700">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Tech Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the next cohort of RS-CSEP students and gain the skills employers are looking for.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg transform hover:scale-105">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

// Data for components
const careerBenefits = [
  {
    icon: Code,
    title: "High-Demand Skills",
    description: "Master technologies used by top tech companies worldwide",
    color: "blue",
    gradientStart: "#3B82F6",
    gradientEnd: "#2563EB",
    iconBg: <Code x="400" y="50" className="text-white opacity-20" width="80" height="80" />
  },
  {
    icon: Server,
    title: "Diverse Career Paths",
    description: "Opportunities in software development, cloud engineering, DevOps and more",
    color: "indigo",
    gradientStart: "#6366F1",
    gradientEnd: "#4F46E5",
    iconBg: <Server x="380" y="40" className="text-white opacity-20" width="100" height="100" />
  },
  {
    icon: Briefcase,
    title: "Competitive Salaries",
    description: "Tech careers offer some of the highest starting salaries across industries",
    color: "purple",
    gradientStart: "#8B5CF6",
    gradientEnd: "#7C3AED",
    iconBg: <Briefcase x="390" y="50" className="text-white opacity-20" width="90" height="90" />
  },
  {
    icon: Network,
    title: "Global Opportunities",
    description: "Tech skills are transferable across borders and industries",
    color: "violet",
    gradientStart: "#7C3AED",
    gradientEnd: "#6D28D9",
    iconBg: <Network x="400" y="50" className="text-white opacity-20" width="80" height="80" />
  }
];

const curriculumModules = [
  {
    icon: Code,
    title: "Programming Fundamentals",
    topics: [
      "Data structures and algorithms",
      "Object-oriented programming",
      "Functional programming concepts",
      "Problem-solving techniques",
      "Version control with Git"
    ]
  },
  {
    icon: Cpu,
    title: "System Design & Architecture",
    topics: [
      "Design patterns and principles",
      "Microservices architecture",
      "Cloud computing fundamentals",
      "Containerization with Docker",
      "System scalability and performance"
    ]
  },
  {
    icon: Database,
    title: "Data Management",
    topics: [
      "SQL and NoSQL databases",
      "Database design and optimization",
      "Data modeling techniques",
      "Big data fundamentals",
      "ETL processes"
    ]
  },
  {
    icon: Network,
    title: "Networking & Security",
    topics: [
      "Computer networks fundamentals",
      "Web protocols and APIs",
      "Cybersecurity basics",
      "Authentication and authorization",
      "Secure coding practices"
    ]
  },
  {
    icon: Terminal,
    title: "Software Engineering Practices",
    topics: [
      "Agile methodologies",
      "CI/CD pipelines",
      "Testing strategies",
      "Code quality and maintainability",
      "Technical documentation"
    ]
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at TechSolutions",
    quote: "The RS-CSEP program gave me the practical skills I needed to transition from electrical engineering to software development. Within 3 months of completing the course, I had multiple job offers."
  },
  {
    name: "Arjun Patel",
    role: "Systems Architect",
    quote: "The comprehensive curriculum covered everything from basic programming to advanced system design. The hands-on projects were especially valuable in building my portfolio."
  },
  {
    name: "Neha Gupta",
    role: "Cloud Engineer",
    quote: "The mentorship and career support exceeded my expectations. The instructors have real industry experience and provided insights you can't get from textbooks alone."
  }
];

const faqs = [
  {
    question: "What prerequisites are required for RS-CSEP?",
    answer: "Basic computer literacy is required. While prior programming experience is helpful, we start with fundamentals. A logical mindset and willingness to learn are more important than specific technical knowledge."
  },
  {
    question: "How does this compare to a computer science degree?",
    answer: "RS-CSEP is more focused and intensive than a traditional degree, concentrating on practical skills needed in the industry. We cover the most relevant 20% of knowledge used in 80% of tech jobs, in a fraction of the time."
  },
  {
    question: "What kind of support is available during the program?",
    answer: "Students receive dedicated mentor support, access to a learning community, regular code reviews, and career coaching sessions. Our team is committed to helping you succeed."
  },
  {
    question: "Are there any financing options available?",
    answer: "Yes, we offer several payment plans and have partnerships with financing providers. Some students may qualify for scholarships or income share agreements."
  },
  {
    question: "What is the time commitment required?",
    answer: "The program requires 15-20 hours per week for the part-time track, or 40+ hours for the full-time intensive track. Consistent effort is more important than prior experience."
  }
];

export default RSCSEPCoursePage;