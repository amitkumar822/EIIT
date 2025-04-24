import React from 'react';
import { 
  Quote,
  GraduationCap,
  Briefcase,
  User,
  Star,
  ChevronLeft,
  ChevronRight,
  Award,
  School,
  Heart,
  ArrowRight
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsPage = () => {
  // Testimonial Data (Indian names & companies)
  const testimonials = [
    {
      id: 1,
      name: "Rahul Verma",
      role: "Software Engineer, TCS",
      quote: "EIIT's practical training helped me crack TCS placements. The faculty's guidance was exceptional!",
      rating: 5,
      category: "alumni",
      avatar: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Priya Desai",
      role: "Data Analyst, Infosys",
      quote: "The AI course at EIIT gave me hands-on skills for real-world projects. Proud to be an alumna!",
      rating: 5,
      category: "alumni",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Arjun Reddy",
      role: "B.Tech CSE (2025 Batch)",
      quote: "Coding clubs and hackathons at EIIT boosted my confidence. Best decision for my career!",
      rating: 4,
      category: "student",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Neha Kapoor",
      role: "HR Manager, Wipro",
      quote: "EIIT graduates stand out with their problem-solving skills. We hire them every year!",
      rating: 5,
      category: "industry",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Vikram Joshi",
      role: "Cloud Engineer, Tech Mahindra",
      quote: "EIIT’s AWS certification got me placed in Tech Mahindra. Forever grateful!",
      rating: 5,
      category: "alumni",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Ananya Iyer",
      role: "M.Tech AI (2024 Batch)",
      quote: "Research opportunities here are unmatched. Published my first paper with faculty support!",
      rating: 5,
      category: "student",
      avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 7,
      name: "Rajiv Menon",
      role: "CTO, HCL Technologies",
      quote: "EIIT’s curriculum matches industry needs. Their students are job-ready from day one!",
      rating: 5,
      category: "industry",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      name: "Sanya Malhotra",
      role: "Product Manager, Zoho",
      quote: "EIIT’s business-tech courses helped me transition into product management smoothly.",
      rating: 4,
      category: "alumni",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Filter testimonials by category
  const alumniTestimonials = testimonials.filter(t => t.category === "alumni");
  const studentTestimonials = testimonials.filter(t => t.category === "student");
  const industryTestimonials = testimonials.filter(t => t.category === "industry");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section (Indian Theme) */}
      <section className="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20 overflow-hidden">
        {/* Decorative Rangoli Pattern (SVG) */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1200 600" className="w-full h-full">
            <path d="M300,200 C400,100 500,300 600,200 C700,100 800,300 900,200" 
                  stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="300" cy="200" r="10" fill="currentColor" />
            <circle cx="600" cy="200" r="10" fill="currentColor" />
            <circle cx="900" cy="200" r="10" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-300">EIIT</span> Success Stories
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Hear from our students, alumni, and recruiters about their journey with EduSphere.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg flex items-center mx-auto">
            Explore Courses <ArrowRight className="ml-2" />
          </Button>
        </div>
        
        {/* Wave Divider (Indian Motif) */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C150,40 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z" 
                  fill="white" />
          </svg>
        </div>
      </section>

      {/* Testimonial Categories */}
      <div className="container mx-auto px-4 py-12">
        {/* Alumni Testimonials */}
        <section className="mb-16">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <GraduationCap className="text-indigo-600" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Our <span className="text-indigo-600">Proud Alumni</span>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mt-2">
              EIIT graduates excel at top Indian & global companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>

        {/* Current Student Testimonials */}
        <section className="mb-16">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <School className="text-blue-600" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Student <span className="text-blue-600">Experiences</span>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mt-2">
              See what current students say about campus life & learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>

        {/* Industry Testimonials */}
        <section className="mb-16">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <Briefcase className="text-purple-600" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Industry <span className="text-purple-600">Recognition</span>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mt-2">
              Why top companies prefer EIIT graduates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join EIIT and become part of India’s leading tech institute.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg transform hover:scale-105">
              Apply Now
            </Button>
            <Button className="border-2 border-white hover:bg-white hover:bg-opacity-10 px-8 py-4 rounded-lg font-semibold text-lg transition">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Testimonial Card Component (Indian Style)
const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
      <CardHeader className="pb-0">
        <div className="flex items-center">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
          />
          <div className="ml-4">
            <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
            <CardDescription className="text-sm">{testimonial.role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-4">
        <Quote className="text-gray-300 mb-2 float-left mr-2" size={20} />
        <p className="text-gray-700 clear-left">"{testimonial.quote}"</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
          ))}
          <span className="text-gray-500 text-sm ml-2">{testimonial.rating}/5</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialsPage;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Quote,
//   Star,
//   User,
//   GraduationCap,
//   Briefcase,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const TestimonialsPage = () => {
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   // Testimonials Data
//   const studentTestimonials = [
//     {
//       name: "Rahul Sharma",
//       role: "CCC Certified Student",
//       review: "EIIT's practical training helped me secure a government job within 3 months of completing my course. The instructors were incredibly supportive!",
//       rating: 5,
//       avatar: "RS"
//     },
//     {
//       name: "Priya Patel",
//       role: "DFA Certified Student",
//       review: "The Digital Finance course transformed my career. I now handle financial reports confidently at my accounting firm.",
//       rating: 5,
//       avatar: "PP"
//     },
//     {
//       name: "Amit Kumar",
//       role: "MS Office Certified",
//       review: "Best computer institute! I learned Excel from scratch and now manage data analysis at my company.",
//       rating: 4,
//       avatar: "AK"
//     }
//   ];

//   const alumniSuccess = [
//     {
//       name: "Neha Gupta",
//       role: "Software Developer (Amazon)",
//       story: "EIIT's programming courses gave me the foundation to crack Amazon’s technical interviews. Forever grateful!",
//       year: "2020"
//     },
//     {
//       name: "Vikram Singh",
//       role: "Financial Analyst (EY)",
//       story: "The CFA prep at EIIT was rigorous and industry-aligned. It helped me land my dream job at EY.",
//       year: "2019"
//     }
//   ];

//   const employerFeedback = [
//     {
//       company: "TechSolutions Pvt. Ltd.",
//       feedback: "We consistently hire EIIT graduates for their strong technical skills and work ethic.",
//       role: "Hiring Manager"
//     },
//     {
//       company: "Global Finance Corp.",
//       feedback: "EIIT students come job-ready with practical knowledge. Excellent training institute!",
//       role: "HR Director"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* **Hero Section** */}
//       <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//         <div className="absolute inset-0 opacity-10">
//           <svg viewBox="0 0 1000 1000" className="w-full h-full">
//             <path 
//               d="M500,100C300,100,100,300,100,500s200,400,400,400s400-200,400-400S700,100,500,100z" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2"
//             />
//           </svg>
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div 
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               Success Stories from <span className="text-yellow-300">EIIT</span> Students
//             </h1>
//             <p className="text-xl mb-8">
//               Hear from our students, alumni, and employers about their experiences with EduSphere Institute.
//             </p>
//             <Button className="px-8 py-6 text-lg bg-white text-blue-600 hover:bg-gray-100 flex items-center gap-2 mx-auto">
//               Explore Courses <ArrowRight className="w-5 h-5" />
//             </Button>
//           </motion.div>
//         </div>
//       </section>

//       {/* **Student Testimonials (Carousel Style)** */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeIn}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
//             <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//             <p className="text-gray-600 mt-4">Hear directly from learners who transformed their careers.</p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {studentTestimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeIn}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
//                   <Quote className="w-8 h-8 text-blue-600 opacity-30 mb-4" />
//                   <p className="text-gray-700 italic mb-6">"{testimonial.review}"</p>
//                   <div className="flex items-center gap-4">
//                     <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center font-medium">
//                       {testimonial.avatar}
//                     </div>
//                     <div>
//                       <h4 className="font-semibold">{testimonial.name}</h4>
//                       <p className="text-sm text-gray-500">{testimonial.role}</p>
//                       <div className="flex items-center gap-1 mt-1">
//                         {[...Array(testimonial.rating)].map((_, i) => (
//                           <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* **Alumni Success Stories** */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeIn}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni Success</h2>
//             <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//             <p className="text-gray-600 mt-4">Where our graduates are now.</p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {alumniSuccess.map((alumni, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeIn}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
//                   <div className="flex items-start gap-4">
//                     <div className="bg-blue-100 p-3 rounded-full">
//                       <GraduationCap className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg">{alumni.name}</h3>
//                       <p className="text-blue-600 mb-2">{alumni.role}</p>
//                       <p className="text-gray-600 mb-3">"{alumni.story}"</p>
//                       <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
//                         Batch of {alumni.year}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* **Employer Feedback** */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeIn}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Employer Feedback</h2>
//             <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//             <p className="text-gray-600 mt-4">What companies say about EIIT graduates.</p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {employerFeedback.map((employer, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeIn}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
//                   <div className="flex items-start gap-4">
//                     <div className="bg-purple-100 p-3 rounded-full">
//                       <Briefcase className="w-6 h-6 text-purple-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg">{employer.company}</h3>
//                       <p className="text-gray-600 mb-3">"{employer.feedback}"</p>
//                       <span className="text-sm text-gray-500">{employer.role}</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* **CTA - Join EIIT** */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeIn}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-6">Ready to Start Your Success Story?</h2>
//             <p className="text-xl mb-8 max-w-2xl mx-auto">
//               Join hundreds of students who transformed their careers with EIIT.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button className="px-8 py-6 text-lg bg-white text-blue-600 hover:bg-gray-100">
//                 Browse Courses
//               </Button>
//               <Button variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600">
//                 Contact Admissions
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TestimonialsPage;