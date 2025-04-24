import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  BarChart2,
  FileText,
  Landmark,
  Briefcase,
  Calculator,
  Banknote,
  FileSearch
} from 'lucide-react';

const TallyCoursePage = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const courseModules = [
    {
      title: "Tally Fundamentals",
      icon: <Calculator size={20} className="text-indigo-500" />,
      topics: [
        "Introduction to Tally Prime",
        "Company Creation & Configuration",
        "Accounting Basics",
        "Voucher Entry (Payment, Receipt, Journal)",
        "Financial Statements Overview"
      ]
    },
    {
      title: "Advanced Accounting",
      icon: <Landmark size={20} className="text-indigo-500" />,
      topics: [
        "GST Compliance & Invoicing",
        "TDS & TCS Management",
        "Bank Reconciliation",
        "Budgeting & Cost Centers",
        "Multi-Currency Transactions"
      ]
    },
    {
      title: "Inventory Management",
      icon: <FileSearch size={20} className="text-indigo-500" />,
      topics: [
        "Stock Categories & Groups",
        "Batch-wise & Godown Tracking",
        "Order Processing (Purchase/Sales)",
        "Manufacturing Journal Entries",
        "Inventory Valuation Methods"
      ]
    },
    {
      title: "Payroll & Compliance",
      icon: <Briefcase size={20} className="text-indigo-500" />,
      topics: [
        "Employee Payroll Processing",
        "PF, ESI, & PT Calculations",
        "Salary Slip Generation",
        "Statutory Compliance Reports",
        "E-Filing with Tally"
      ]
    },
    {
      title: "Taxation (GST)",
      icon: <Banknote size={20} className="text-indigo-500" />,
      topics: [
        "GST Invoice Formats",
        "GSTR-1, GSTR-3B Filing",
        "Input Tax Credit (ITC) Claims",
        "E-Way Bill Generation",
        "GST Audit & Annual Returns"
      ]
    },
    {
      title: "Business Reports & MIS",
      icon: <BarChart2 size={20} className="text-indigo-500" />,
      topics: [
        "Balance Sheet & P&L Analysis",
        "Cash Flow & Fund Flow Reports",
        "Ratio Analysis",
        "Custom Report Designing",
        "Data Export to Excel/PDF"
      ]
    }
  ];

  const careerPaths = [
    {
      title: "Accountant",
      salary: "₹15,000 - ₹35,000/month",
      description: "Manage company books, GST filing, and financial records."
    },
    {
      title: "Tally Operator",
      salary: "₹12,000 - ₹25,000/month",
      description: "Handle day-to-day accounting entries in Tally."
    },
    {
      title: "GST Consultant",
      salary: "₹20,000 - ₹50,000/month",
      description: "Specialize in GST compliance and tax filing."
    },
    {
      title: "Audit Assistant",
      salary: "₹18,000 - ₹40,000/month",
      description: "Assist auditors with Tally-based financial data."
    }
  ];

  const stats = [
    {
      value: "100%",
      label: "Practical Training"
    },
    {
      value: "6+",
      label: "Industry Experts"
    },
    {
      value: "1500+",
      label: "Students Certified"
    },
    {
      value: "12+",
      label: "Years Experience"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <circle cx="20" cy="20" r="3" fill="white" />
            <circle cx="50" cy="50" r="3" fill="white" />
            <circle cx="80" cy="80" r="3" fill="white" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Tally Prime with GST Certification
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Master Tally accounting, GST filing, payroll, and inventory management with industry experts.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow-lg flex items-center"
              >
                Enroll Now <ArrowRight className="ml-2" />
              </motion.button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 flex justify-center"
            >
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="400" rx="20" fill="url(#gradient)" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>
                <rect x="80" y="100" width="240" height="200" rx="10" fill="#3B82F6" />
                <rect x="100" y="120" width="60" height="40" rx="5" fill="#FFFFFF" />
                <rect x="180" y="120" width="120" height="40" rx="5" fill="#E0E7FF" />
                <rect x="100" y="180" width="200" height="20" rx="5" fill="#FFFFFF" />
                <rect x="100" y="220" width="200" height="20" rx="5" fill="#E0E7FF" />
                <rect x="100" y="260" width="200" height="20" rx="5" fill="#FFFFFF" />
                <circle cx="340" cy="340" r="40" fill="#93C5FD" />
                <path d="M340 320V360" stroke="#1E40AF" strokeWidth="4" strokeLinecap="round" />
                <path d="M320 340H360" stroke="#1E40AF" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Course Curriculum</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Learn everything from basic accounting to advanced GST compliance with hands-on training.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {courseModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div 
                  className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow border border-gray-100"
                  onClick={() => toggleModule(index)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="mr-4">
                        {module.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {module.title}
                      </h3>
                    </div>
                    {expandedModule === index ? (
                      <ChevronUp className="text-blue-600" />
                    ) : (
                      <ChevronDown className="text-blue-600" />
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {expandedModule === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2 pl-10">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-gray-700 list-disc">
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tally-certified professionals are in high demand across industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{path.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{path.salary}</p>
                <p className="text-gray-600">{path.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-indigo-100 to-purple-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Learn Tally at EduSphere?</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "100% practical training on Tally Prime",
                    "GST, TDS, Payroll & Inventory modules",
                    "Industry-recognized certification",
                    "Placement assistance",
                    "Flexible batch timings",
                    "Lifetime access to course materials",
                    "Expert trainers with 10+ years experience",
                    "Real-world case studies & projects"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="bg-blue-600 text-white p-8 rounded-xl shadow-md h-full">
                <h3 className="text-2xl font-bold mb-6">Course Details</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">Duration</h4>
                    <p className="text-white">3 Months (2 Hours/Day) | Fast-track available</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">Eligibility</h4>
                    <p className="text-white">12th Pass or Equivalent (No prior accounting knowledge required)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">Certification</h4>
                    <p className="text-white">EduSphere Tally Prime + GST Certification</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md mt-4 w-full"
                  >
                    Download Syllabus
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Career in Accounting Today!</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Limited seats available. Enroll now to get 10% early-bird discount.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow-lg flex items-center justify-center"
              >
                Enroll Now <ArrowRight className="ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold shadow-lg flex items-center justify-center"
              >
                Free Demo Class
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TallyCoursePage;