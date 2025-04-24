import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart,
  DollarSign,
  Globe,
  TrendingUp,
  BookOpen,
  Briefcase,
  Award,
  Users,
  CheckCircle,
  ChevronDown,
  MessageSquare,
  Star,
  UserCheck,
  PieChart,
  Clock,
  Calendar,
  Clipboard,
  Layers,
  Trophy
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const CFACoursePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const testimonials = [
    {
      name: "Arjun Kapoor",
      role: "CFA Level II Candidate",
      content: "The structured approach and mentor support helped me clear Level I on first attempt. Now confidently preparing for Level II.",
      rating: 5,
      avatar: "AK"
    },
    {
      name: "Neha Sharma",
      role: "Portfolio Manager",
      content: "This program gave me the edge I needed in equity research. The case studies mirror real-world analysis we do daily.",
      rating: 5,
      avatar: "NS"
    },
    {
      name: "Rahul Mehta",
      role: "Investment Banking Associate",
      content: "The financial modeling workshops are exceptional. I apply these techniques daily in my M&A deals.",
      rating: 4,
      avatar: "RM"
    }
  ];

  const faqs = [
    {
      question: "What's the pass rate for your CFA candidates?",
      answer: "Our students have a 78% first-time pass rate for Level I (vs global average of 41%), and 65% for Level II."
    },
    {
      question: "How long does the CFA program typically take?",
      answer: "Most candidates complete all three levels in 3-4 years. We recommend 6-9 months preparation per level."
    },
    {
      question: "Do you provide mock exams and QBank access?",
      answer: "Yes, our program includes 6 full mock exams per level, plus a 2000+ question QBank with performance analytics."
    },
    {
      question: "What makes your CFA program different?",
      answer: "We combine CFAI curriculum with Wall Street training techniques, including our proprietary 'Case-to-Concept' pedagogy."
    }
  ];

  const levels = [
    {
      title: "Level I",
      focus: "Investment Tools & Ethical Standards",
      duration: "6-9 Months",
      topics: [
        "Ethical & Professional Standards",
        "Quantitative Methods",
        "Economics",
        "Financial Reporting",
        "Corporate Finance",
        "Portfolio Management",
        "Equity & Fixed Income",
        "Derivatives & Alternatives"
      ],
      stats: {
        passRate: "78%",
        studyHours: "300+"
      }
    },
    {
      title: "Level II",
      focus: "Asset Valuation & Application",
      duration: "6-9 Months",
      topics: [
        "Advanced Financial Analysis",
        "Valuation Models",
        "Equity & Fixed Income Valuation",
        "Derivatives Valuation",
        "Alternative Investments",
        "Portfolio Applications"
      ],
      stats: {
        passRate: "65%",
        studyHours: "350+"
      }
    },
    {
      title: "Level III",
      focus: "Portfolio Management & Wealth Planning",
      duration: "6-9 Months",
      topics: [
        "Behavioral Finance",
        "Private Wealth Management",
        "Institutional Portfolio Management",
        "Asset Allocation",
        "Risk Management",
        "Performance Evaluation"
      ],
      stats: {
        passRate: "58%",
        studyHours: "400+"
      }
    }
  ];

  const careerOutcomes = [
    {
      role: "Portfolio Manager",
      salary: "$120K-$250K",
      growth: "12% (5-yr projection)"
    },
    {
      role: "Research Analyst",
      salary: "$85K-$180K",
      growth: "9% (5-yr projection)"
    },
    {
      role: "Risk Manager",
      salary: "$110K-$220K",
      growth: "14% (5-yr projection)"
    },
    {
      role: "Investment Banking",
      salary: "$150K-$350K",
      growth: "8% (5-yr projection)"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Theme Toggle */}
      {/* <div className="container mx-auto px-4 py-4 flex justify-end">
        <div className="flex items-center gap-2">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Switch 
            id="dark-mode" 
            checked={darkMode} 
            onCheckedChange={() => setDarkMode(!darkMode)} 
          />
        </div>
      </div> */}

      {/* Hero Section */}
      <section className={`relative py-20 overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-900 to-indigo-800'} text-white`}>
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <path 
              d="M500,100C300,100,100,300,100,500s200,400,400,400s400-200,400-400S700,100,500,100z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            />
            <path 
              d="M500,150C325,150,150,325,150,500s175,350,350,350s350-175,350-350S675,150,500,150z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full mb-4 border border-blue-400/30">
              <Trophy className="w-5 h-5" />
              <span>Globally Recognized Certification</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chartered Financial Analyst (CFA) Program
            </h1>
            <p className="text-xl mb-8">
              The gold standard in investment management education. Prepare with Wall Street-trained instructors and pass with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 text-lg bg-white text-blue-900 hover:bg-gray-100">
                Enroll Now
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-900">
                Attend Info Session
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Our CFA Program?</h2>
            <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className={`h-full ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-blue-50 border-blue-100'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BarChart className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span>78% Pass Rate</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Level I first-time pass rate vs. 41% global average</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className={`h-full ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-purple-50 border-purple-100'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                    <span>Wall Street Mentors</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Learn from charterholders with buy-side experience</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className={`h-full ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-green-50 border-green-100'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clipboard className={`w-8 h-8 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                    <span>6 Mock Exams</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Full-length simulated exams with performance analytics</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className={`h-full ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-amber-50 border-amber-100'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Briefcase className={`w-8 h-8 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                    <span>Career Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Resume workshops, interview prep, and recruiter network</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">CFA Program Structure</h2>
            <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-1/2 h-full w-1 ${darkMode ? 'bg-blue-400/30' : 'bg-blue-600/30'} -translate-x-1/2`}></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {levels.map((level, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 w-6 h-6 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} -translate-x-1/2 flex items-center justify-center`}>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg`}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{level.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/50 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                        {level.duration}
                      </span>
                    </div>
                    <p className={`mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-600'} font-medium`}>
                      Focus: {level.focus}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                        <p className="text-sm">Pass Rate</p>
                        <p className="text-xl font-bold">{level.stats.passRate}</p>
                      </div>
                      <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                        <p className="text-sm">Study Hours</p>
                        <p className="text-xl font-bold">{level.stats.studyHours}</p>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold mb-2">Topics Covered:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {level.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                          <span className="text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">CFA Charterholder Career Outcomes</h2>
            <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerOutcomes.map((outcome, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                  <CardHeader>
                    <CardTitle>{outcome.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm">Average Salary</p>
                        <p className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                          {outcome.salary}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm">Job Growth</p>
                        <div className="flex items-center gap-2">
                          <TrendingUp className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                          <span className="font-medium">{outcome.growth}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`mt-12 p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} relative overflow-hidden`}
          >
            <div className="absolute -right-20 -top-20 opacity-20">
              <Globe className="w-48 h-48" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Global Recognition</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">190+ Countries</h4>
                  <p>CFA charter recognized worldwide in investment management</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">170,000+ Charterholders</h4>
                  <p>Join an elite global network of investment professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Top Employers</h4>
                  <p>JPMorgan, BlackRock, Goldman Sachs, and other leading firms</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">CFA Candidate Experiences</h2>
            <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className={`h-full ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className={`italic mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${darkMode ? 'bg-blue-900/50' : 'bg-blue-100'} font-medium`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">CFA Program FAQs</h2>
            <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="mb-4">
                    <AccordionTrigger className={`p-4 rounded-lg hover:no-underline ${
                      darkMode ? 
                        (index % 2 === 0 ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-700/50 hover:bg-gray-600/50') :
                        (index % 2 === 0 ? 'bg-blue-50 hover:bg-blue-100' : 'bg-purple-50 hover:bg-purple-100')
                    }`}>
                      <div className="flex items-center gap-3 text-left">
                        <ChevronDown className="w-5 h-5 shrink-0 transition-transform duration-200" />
                        <span className="font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className={`px-4 py-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-16 ${darkMode ? 'bg-blue-900/80' : 'bg-gradient-to-r from-blue-900 to-indigo-800'} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Begin Your CFA Journey Today</h2>
            <p className="text-xl mb-8">
              Join our next cohort and gain access to world-class CFA preparation with proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 text-lg bg-white text-blue-900 hover:bg-gray-100">
                Enroll Now
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-900">
                Speak to Advisor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CFACoursePage;