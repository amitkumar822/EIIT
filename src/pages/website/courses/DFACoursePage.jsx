import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  LineChart, 
  CreditCard, 
  Banknote, 
  ShieldCheck,
  Briefcase,
  Award,
  Users,
  CheckCircle,
  ChevronDown,
  MessageSquare,
  Star,
  PieChart,
  BarChart2,
  FileText,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const DFACoursePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const testimonials = [
    {
      name: "Ananya Gupta",
      role: "Finance Graduate",
      content: "The DFA course gave me practical skills that helped me secure a fintech analyst position right after graduation.",
      rating: 5
    },
    {
      name: "Rohit Malhotra",
      role: "Small Business Owner",
      content: "Finally understand digital financial tools to manage my business finances efficiently. Worth every penny!",
      rating: 4
    },
    {
      name: "Priya Joshi",
      role: "Accounting Professional",
      content: "Upskilled in digital tools that made me indispensable at my firm. Got a promotion within 3 months of completing the course.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What background do I need for this course?",
      answer: "Basic numerical skills are required. No prior finance or accounting knowledge is necessary as we start from fundamentals."
    },
    {
      question: "What software will I learn?",
      answer: "You'll master Tally, QuickBooks, Excel for Finance, and various digital payment and banking platforms."
    },
    {
      question: "Is this course recognized by employers?",
      answer: "Yes, our DFA certification is widely recognized in banking, fintech, and corporate finance sectors."
    },
    {
      question: "Can I take this course while working?",
      answer: "Absolutely! We offer flexible evening and weekend batches specifically designed for working professionals."
    }
  ];

  const modules = [
    {
      title: "Digital Accounting Fundamentals",
      icon: <Calculator className="w-6 h-6" />,
      topics: ["Accounting Principles", "Double-Entry System", "Financial Statements"]
    },
    {
      title: "Accounting Software",
      icon: <Database className="w-6 h-6" />,
      topics: ["Tally Prime", "QuickBooks", "Zoho Books"]
    },
    {
      title: "Financial Analysis",
      icon: <BarChart2 className="w-6 h-6" />,
      topics: ["Ratio Analysis", "Budgeting", "Financial Forecasting"]
    },
    {
      title: "Taxation & Compliance",
      icon: <FileText className="w-6 h-6" />,
      topics: ["GST Filing", "Income Tax", "Digital Compliance"]
    },
    {
      title: "Digital Banking & Payments",
      icon: <CreditCard className="w-6 h-6" />,
      topics: ["UPI Systems", "Net Banking", "Digital Wallets"]
    },
    {
      title: "Fintech Applications",
      icon: <LineChart className="w-6 h-6" />,
      topics: ["Blockchain Basics", "AI in Finance", "Robo-Advisors"]
    }
  ];

  const careerPaths = [
    {
      title: "Digital Accountant",
      salary: "₹3-6 LPA",
      companies: ["Accounting Firms", "CA Practices", "Small Businesses"]
    },
    {
      title: "Financial Analyst",
      salary: "₹5-9 LPA",
      companies: ["Banks", "Fintech Startups", "Investment Firms"]
    },
    {
      title: "Tax Consultant",
      salary: "₹4-8 LPA",
      companies: ["Tax Firms", "Legal Practices", "Corporate Houses"]
    },
    {
      title: "Finance Manager",
      salary: "₹8-15 LPA",
      companies: ["MNCs", "Manufacturing", "Service Sector"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Diploma in Digital Finance & Accounting (DFA)
            </h1>
            <p className="text-xl mb-8">
              Master modern accounting tools, financial technologies, and digital compliance in our industry-aligned certification program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 text-lg bg-white text-blue-600 hover:bg-gray-100">
                Enroll Now
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                Download Syllabus
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose DFA?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full bg-blue-50 border-blue-100 text-center p-6">
                <div className="flex justify-center mb-4">
                  <Calculator className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle>Practical Accounting</CardTitle>
                <CardDescription className="mt-2">
                  Hands-on training with industry-standard accounting software
                </CardDescription>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full bg-green-50 border-green-100 text-center p-6">
                <div className="flex justify-center mb-4">
                  <LineChart className="w-10 h-10 text-green-600" />
                </div>
                <CardTitle>Financial Analytics</CardTitle>
                <CardDescription className="mt-2">
                  Master data-driven financial decision making
                </CardDescription>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full bg-purple-50 border-purple-100 text-center p-6">
                <div className="flex justify-center mb-4">
                  <ShieldCheck className="w-10 h-10 text-purple-600" />
                </div>
                <CardTitle>Tax Compliance</CardTitle>
                <CardDescription className="mt-2">
                  Learn GST, income tax, and digital compliance
                </CardDescription>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full bg-amber-50 border-amber-100 text-center p-6">
                <div className="flex justify-center mb-4">
                  <Banknote className="w-10 h-10 text-amber-600" />
                </div>
                <CardTitle>Fintech Ready</CardTitle>
                <CardDescription className="mt-2">
                  Exposure to blockchain, AI, and digital payment systems
                </CardDescription>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className={`p-3 rounded-lg ${
                      index % 6 === 0 ? 'bg-blue-100 text-blue-600' :
                      index % 6 === 1 ? 'bg-green-100 text-green-600' :
                      index % 6 === 2 ? 'bg-purple-100 text-purple-600' :
                      index % 6 === 3 ? 'bg-red-100 text-red-600' :
                      index % 6 === 4 ? 'bg-amber-100 text-amber-600' :
                      'bg-teal-100 text-teal-600'
                    }`}>
                      {module.icon}
                    </div>
                    <div>
                      <CardTitle>{module.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Paths After DFA</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      {path.salary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Opportunities at:</h4>
                    <ul className="space-y-1">
                      {path.companies.map((company, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{company}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Learning Experience</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full bg-blue-700 border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <PieChart className="w-8 h-8 text-blue-300" />
                    <span>Practical Projects</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Work on real-world case studies including business financials, tax filings, 
                    and financial analysis reports.
                  </p>
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
              <Card className="h-full bg-blue-700 border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-blue-300" />
                    <span>Industry Mentors</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Learn from CA professionals, financial analysts, and fintech experts with 
                    years of practical experience.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Card className="h-full bg-blue-700 border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Briefcase className="w-8 h-8 text-blue-300" />
                    <span>Placement Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Resume building, interview preparation, and access to our partner companies 
                    for job opportunities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
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
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <MessageSquare className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
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
                      index % 2 === 0 ? 'bg-blue-50 hover:bg-blue-100' : 'bg-purple-50 hover:bg-purple-100'
                    }`}>
                      <div className="flex items-center gap-3 text-left">
                        <ChevronDown className="w-5 h-5 shrink-0 transition-transform duration-200" />
                        <span className="font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Start Your Journey in Digital Finance Today</h2>
            <p className="text-xl mb-8">
              Join our next batch and become part of the digital finance revolution with 
              job-ready skills and industry-recognized certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 text-lg bg-white text-blue-600 hover:bg-gray-100">
                Enroll Now
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                Speak to Counselor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DFACoursePage;