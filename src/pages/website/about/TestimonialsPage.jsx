import React from "react";
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
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TestimonialsPage = () => {
  // Testimonial Data (Indian names & companies)
  const testimonials = [
    {
      id: 1,
      name: "Ritika Kumari",
      role: "RS-CIT Student",
      quote:
        "Before joining RS-CIT at EIIT, I barely knew how to use a computer. Now I can work confidently in MS Office and browse the internet with ease.",
      rating: 5,
      category: "student",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
    },
    {
      id: 2,
      name: "Mohd. Ayaan",
      role: "ADCA Student",
      quote:
        "ADCA course helped me learn everything from basics to advanced Excel, Tally, and graphic design. Best decision after 12th!",
      rating: 5,
      category: "student",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
    },
    {
      id: 3,
      name: "Sneha Rajput",
      role: "TALLY Student",
      quote:
        "I joined the Tally course during my commerce stream in Class 11. Now I can handle GST billing and inventory entries confidently.",
      rating: 4,
      category: "student",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
    },
    {
      id: 4,
      name: "Rohit Meena",
      role: "CCC Student",
      quote:
        "CCC course helped me crack the basic computer knowledge section in a government exam. I highly recommend it to beginners!",
      rating: 5,
      category: "student",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
    },
    {
      id: 5,
      name: "Kajal Yadav",
      role: "NTT Trainee",
      quote:
        "The NTT course taught me how to manage and teach toddlers professionally. I now work at a reputed preschool in Jaipur.",
      rating: 5,
      category: "student",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
    },
    {
      id: 6,
      name: "Aman Thakur",
      role: "Fire & Safety Course Student",
      quote:
        "Fire & Safety course gave me practical knowledge and boosted my confidence. I’m preparing for fire officer exams now.",
      rating: 5,
      category: "student",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
    },
    {
      id: 7,
      name: "Bhavna Singh",
      role: "ECCE Course Student",
      quote:
        "The ECCE course helped me understand child psychology and early education. It’s a great course for aspiring nursery teachers.",
      rating: 4,
      category: "student",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
    },
    {
      id: 8,
      name: "Sahil Jangid",
      role: "MS-OFFICE Course Student",
      quote:
        "Learning MS Word, Excel, and PowerPoint at EIIT was fun and easy. It’s now helping me in my school projects and assignments!",
      rating: 5,
      category: "student",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
    },
  ];

  const studentTestimonials = testimonials.filter(
    (t) => t.category === "student"
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section (Indian Theme) */}
      <section className="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20 overflow-hidden">
        {/* Decorative Rangoli Pattern (SVG) */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1200 600" className="w-full h-full">
            <path
              d="M300,200 C400,100 500,300 600,200 C700,100 800,300 900,200"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
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
            Hear from our students, alumni, and recruiters about their journey
            with EduSphere.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg flex items-center mx-auto">
            Explore Courses <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Wave Divider (Indian Motif) */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,0 C150,40 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {studentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
};

// Reusable Testimonial Card Component (Indian Style)
const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="relative overflow-hidden bg-white/90 backdrop-blur-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 rounded-2xl">
      {/* Decorative SVG Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="400" fill="#a5f3fc" />
          <circle cx="300" cy="200" r="100" fill="#38bdf8" />
          <circle cx="600" cy="600" r="150" fill="#0ea5e9" />
        </svg>
      </div>

      <CardHeader className="pb-0 relative z-10">
        <div className="flex items-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
          />
          <div className="ml-4">
            <CardTitle className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </CardTitle>
            <CardDescription className="text-sm text-sky-600 font-medium">
              {testimonial.role}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="py-4 relative z-10">
        <Quote className="text-sky-400 mb-2 float-left mr-2" size={20} />
        <p className="text-gray-700 italic leading-relaxed clear-left">
          "{testimonial.quote}"
        </p>
      </CardContent>

      <CardFooter className="relative z-10">
        <div className="flex items-center">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="text-yellow-400 fill-yellow-400"
              size={18}
            />
          ))}
          <span className="text-gray-500 text-sm ml-2">
            {testimonial.rating}/5
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialsPage;
