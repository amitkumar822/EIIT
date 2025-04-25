import React, { useState, useEffect, useRef } from "react";
import {
  Quote,
  Star,
  School,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ScrollText,
  IndianRupee,
  GraduationCap,
  Briefcase,
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
import { motion } from "framer-motion";

const TestimonialsPage = () => {
  const [activeCategory, setActiveCategory] = useState("students");
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    if (showAll || isPaused) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollLeft = scrollContainer.scrollLeft;

    const interval = setInterval(() => {
      if (scrollLeft >= scrollWidth - clientWidth) {
        scrollLeft = 0;
      } else {
        scrollLeft += 1;
      }
      scrollContainer.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }, 50);

    return () => clearInterval(interval);
  }, [showAll, isPaused]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section - Modern Design */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white py-24 overflow-hidden">
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              initial={{
                x: Math.random() * 1000,
                y: Math.random() * 800,
                width: Math.random() * 30 + 10,
                height: Math.random() * 30 + 10,
                opacity: Math.random() * 0.5 + 0.1,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 100 - 50, 0],
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-yellow-400/20 px-4 py-2 rounded-full mb-6 border border-yellow-400/30">
              <IndianRupee className="text-yellow-300 mr-2" size={18} />
              <span className="text-yellow-300 font-medium">
                Trusted by 10,000+ students
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">
                Transformative
              </span>{" "}
              Learning Experiences
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Join thousands who've accelerated their careers with our programs.
              Hear their success stories.
            </p>
          </motion.div>
        </div>

        {/* Wave divider with gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,0 C150,40 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z"
              fill="url(#wave-gradient)"
            />
            <defs>
              <linearGradient
                id="wave-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Testimonial Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={activeCategory === "students" ? "default" : "outline"}
              onClick={() => setActiveCategory("students")}
              className="px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer"
            >
              <GraduationCap size={18} />
              Students
            </Button>
            <Button
              variant={activeCategory === "alumni" ? "default" : "outline"}
              onClick={() => setActiveCategory("alumni")}
              className="px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer"
            >
              <Briefcase size={18} />
              Alumni
            </Button>
            <Button
              variant={activeCategory === "recruiters" ? "default" : "outline"}
              onClick={() => setActiveCategory("recruiters")}
              className="px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer"
            >
              <School size={18} />
              Recruiters
            </Button>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <h2 className="text-3xl font-bold text-center mb-8">
              {activeCategory === "students" && "Current Student Experiences"}
              {activeCategory === "alumni" && "Alumni Success Stories"}
              {activeCategory === "recruiters" && "Recruiter Testimonials"}
            </h2>

            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {!showAll && (
                <>
                  <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all hidden md:block"
                  >
                    <ChevronLeft className="text-indigo-600" size={24} />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all hidden md:block"
                  >
                    <ChevronRight className="text-indigo-600" size={24} />
                  </button>
                </>
              )}

              <div
                ref={scrollContainerRef}
                className={`${
                  showAll
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex overflow-x-auto pb-6 gap-6 scrollbar-hide"
                }`}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className={`${showAll ? "" : "flex-shrink-0 w-80 lg:w-96"}`}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={toggleShowAll}
                variant="outline"
                className="rounded-full px-6 py-3 gap-2"
              >
                {showAll ? (
                  <>
                    <ChevronLeft size={18} />
                    Back to Carousel
                  </>
                ) : (
                  <>
                    <ScrollText size={18} />
                    View All Testimonials
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-700 mb-2">
                10K+
              </div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-700 mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-700 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-700 mb-2">
                200+
              </div>
              <div className="text-gray-600">Hiring Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Enhanced Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="relative overflow-hidden h-full min-h-[20.7rem] bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-30" />
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

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 transform rotate-45 origin-bottom-left" />
        </div>

        <CardHeader className="relative z-10">
          <div className="flex items-center">
            <div className="relative">
              <img
                referrerPolicy="no-referrer"
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full">
                <div className="bg-indigo-600 rounded-full p-1">
                  <Quote className="text-white" size={12} />
                </div>
              </div>
            </div>
            <div className="ml-4">
              <CardTitle className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </CardTitle>
              <CardDescription className="text-sm font-medium">
                <span className="text-indigo-600">{testimonial.role}</span> •{" "}
                {testimonial.company}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 pb-6">
          <p className="text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
        </CardContent>

        <CardFooter className="relative z-10">
          <div className="flex items-center">
            {[...Array(Math.round(testimonial.rating))].map((_, i) => (
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
    </motion.div>
  );
};

export default TestimonialsPage;
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
  {
    id: 9,
    name: "Manoj Kumar",
    role: "Graphic Design Student",
    quote: "Computer Center And Library Best facility available",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUL0uWLE_48gQMtx-csX9VH4x3oliLsGRPsl15wDxbNbwHqsSWE=w190-h190-p-rp-mo-ba1-br100",
  },
  {
    id: 10,
    name: "Shayam Lal",
    role: " Ecell Student",
    quote: "Computer Classes And Library Centre",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXLz12UMXvTBLIyjfilggFwAv1cK1tsQkQnynJTEyskInsbJY0=w190-h190-p-rp-mo-ba1-br100",
  },
  {
    id: 11,
    name: "Jogendra Singh",
    role: " Ecell Student",
    quote: "Computer Center And Computer Classes Academy",
    rating: 4.5,
    category: "student",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
  },
  {
    id: 12,
    name: "Madan Lal",
    role: " Ecell Student",
    quote: "Copmuter classes platform Good facilities",
    rating: 5,
    category: "student",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
  },
  {
    id: 12,
    name: "Ravi Ninania",
    role: " Library Student",
    quote: "Computer Center and Library",
    rating: 5,
    category: "student",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
  },
  {
    id: 13,
    name: "Sachin Beniwal",
    role: " Library Student",
    quote:
      "This place is awesome for self study by having an library seperated for boys and girls. It is computer centre which is seperated for boys and girls .Now a day it has started a batch of Rajasthan Police",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWkW0EVK02hpTHPRr8-OTf23FM7oumD_EhtjV4tH2zcrA90WPE=w190-h190-p-rp-mo-ba1-br100",
  },
  {
    id: 14,
    name: "Naresh Kumar",
    role: "  Student",
    quote: "Computer Center or Library",
    rating: 5,
    category: "student",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
  },
  {
    id: 15,
    name: "Vijender Kumar Vijender Kumar",
    role: " Adca Student",
    quote: "Education Hub 💯🥰",
    rating: 5,
    category: "student",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
  },
  {
    id: 16,
    name: "Amit Mehra",
    role: " dca Student",
    quote: "Education hub",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXNPiftMTFAYYS1siGrQmGBT1uGMnucQLswHVnrUpyAXV03IA=w190-h190-p-rp-mo-ba1-br100",
  },
  {
    id: 17,
    name: "Jitesh Kharod",
    role: " adca Student",
    quote: "Well discipline in center I love it",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWnjQ6GO3CtcWdxuicQNDp0Zb4_qoTn7pnIGe7lKoPYYsOzSspl=w90-h90-p-rp-mo-br100",
  },
  {
    id: 17,
    name: "Jitesh Kharod",
    role: " adca Student",
    quote: "Well discipline in center I love it",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWnjQ6GO3CtcWdxuicQNDp0Zb4_qoTn7pnIGe7lKoPYYsOzSspl=w90-h90-p-rp-mo-br100",
  },
  {
    id: 18,
    name: "Mukesh Jandu",
    role: " Typing Student",
    quote: "Well discipline in center I love it",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWnjQ6GO3CtcWdxuicQNDp0Zb4_qoTn7pnIGe7lKoPYYsOzSspl=w90-h90-p-rp-mo-br100",
  },
  {
    id: 19,
    name: "Official Ashish0",
    role: " Tally Student",
    quote: " I love it",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUgutE4q_uv03-eHo2xa_8GTpqt-lueV7_r9IBHdLnmixi3lnfK=w190-h190-p-rp-mo-ba1-br100",
  },
  {
    id: 20,
    name: "Chopra ji",
    role: " dca Student",
    quote: " I love it",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjX5_8Gp8ptCceZYshJifzb3X5lAjPo-7s8Ae01WPO_nn6-RmP6y1g=w190-h190-p-rp-mo-br100",
  },
  {
    id: 21,
    name: "Pooja Dathak",
    role: " tally Student",
    quote: " she is very annoying",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjX5_8Gp8ptCceZYshJifzb3X5lAjPo-7s8Ae01WPO_nn6-RmP6y1g=w190-h190-p-rp-mo-br100",
  },
  {
    id: 22,
    name: "Snap music",
    role: "  Student",
    quote: "Computer Center and Library",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXUr_hwEg5EJiInoe5hDgKezeXuE3hb18Y5q0iMdNNA2Ji1HbCK=w190-h190-p-rp-mo-ba1-br100",
  },
  {
    id: 23,
    name: "Sandeep Kumar",
    role: "  Student",
    quote: "Computer Center and Library",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXUr_hwEg5EJiInoe5hDgKezeXuE3hb18Y5q0iMdNNA2Ji1HbCK=w190-h190-p-rp-mo-ba1-br100",
  },
  {
    id: 24,
    name: "SNEHLATA PRAJAPAT",
    role: "  Student",
    quote: "Computer Center and Library",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWEizR8k_vVD-H810hXOTI-JGQ8yWgmM7mg-oiVtlfjSEq19lA=w90-h90-p-rp-mo-br100",
  },
  {
    id: 25,
    name: "lalit kumar",
    role: "  Student",
    quote: " ",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXUr_hwEg5EJiInoe5hDgKezeXuE3hb18Y5q0iMdNNA2Ji1HbCK=w190-h190-p-rp-mo-ba1-br100",
  },
  {
    id: 26,
    name: "Ravi Kumar",
    role: "  Student",
    quote: "Computer Center and Library",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXUr_hwEg5EJiInoe5hDgKezeXuE3hb18Y5q0iMdNNA2Ji1HbCK=w190-h190-p-rp-mo-ba1-br100",
  },
  {
    id: 27,
    name: "ravindra kumar",
    role: " Typing Student",
    quote: "Computer Center and Library",
    rating: 5,
    category: "student",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVJjuoxJRk89YQCntgmcD-eMBPBENfhUNFjQ9UchcAhFdWyN73j=w190-h190-p-rp-mo-ba1-br100",
  },
];
