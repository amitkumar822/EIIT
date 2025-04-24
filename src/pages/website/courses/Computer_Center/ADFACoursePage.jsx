import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  BarChart2,
  Briefcase,
  Code,
  Database,
  DollarSign,
  Globe,
  Layers,
  LineChart,
  Lock,
  PieChart,
  Shield,
  Smartphone,
  Terminal,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ADFACoursePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    { value: "92%", label: "Placement Rate" },
    { value: "4.8/5", label: "Student Rating" },
    { value: "300+", label: "Hiring Partners" },
    { value: "6 mo", label: "Avg Salary Hike" }
  ];

  const modules = [
    {
      title: "FinTech Foundations",
      icon: <DollarSign className="w-6 h-6" />,
      topics: ["Digital Payments", "Blockchain Basics", "Open Banking"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Quantitative Finance",
      icon: <BarChart2 className="w-6 h-6" />,
      topics: ["Risk Modeling", "Algorithmic Trading", "Portfolio Optimization"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Data Analytics",
      icon: <LineChart className="w-6 h-6" />,
      topics: ["Python for Finance", "Predictive Modeling", "Big Data Tools"],
      color: "bg-green-100 text-green-600"
    },
    {
      title: "RegTech & Compliance",
      icon: <Shield className="w-6 h-6" />,
      topics: ["AML Systems", "Regulatory Reporting", "Fraud Detection"],
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Cloud Finance",
      icon: <Globe className="w-6 h-6" />,
      topics: ["SaaS Solutions", "AWS/Azure Finance", "APIs & Microservices"],
      color: "bg-red-100 text-red-600"
    },
    {
      title: "AI in Finance",
      icon: <Terminal className="w-6 h-6" />,
      topics: ["Chatbots", "Robo-Advisors", "Credit Scoring"],
      color: "bg-teal-100 text-teal-600"
    }
  ];

  const careerPaths = [
    {
      role: "FinTech Analyst",
      salary: "$85K-$140K",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />
    },
    {
      role: "Quantitative Analyst",
      salary: "$120K-$200K",
      icon: <Code className="w-8 h-8 text-purple-600" />
    },
    {
      role: "Financial Data Scientist",
      salary: "$110K-$180K",
      icon: <Database className="w-8 h-8 text-green-600" />
    },
    {
      role: "RegTech Specialist",
      salary: "$95K-$160K",
      icon: <Lock className="w-8 h-8 text-amber-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Geometric Design */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <rect x="200" y="200" width="600" height="600" fill="none" stroke="currentColor" strokeWidth="2" />
            <polygon points="500,100 800,350 500,600 200,350" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <TrendingUp className="w-5 h-5" />
              <span>Top-Ranked FinTech Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Advanced Digital Finance <span className="text-yellow-300">&</span> Analytics
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Master cutting-edge financial technologies, data analytics, and digital transformation strategies in this industry-driven program.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 text-lg bg-white text-blue-600 hover:bg-gray-100 flex items-center gap-2">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Highlights - Hexagonal Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Highlights</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                    <Activity className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>Live Trading Simulations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Hands-on experience with real market data and trading platforms used by hedge funds.
                  </p>
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
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-purple-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                    <Layers className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle>Capstone Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Solve real business challenges from our partner companies and build your portfolio.
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
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-green-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                    <UserCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>Industry Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    1:1 guidance from FinTech executives and quantitative finance experts.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum - Radial Visualization */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum Structure</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Radial background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <svg width="600" height="600" viewBox="0 0 600 600" className="text-blue-500">
                <circle cx="300" cy="300" r="250" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
                <circle cx="300" cy="300" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
                <circle cx="300" cy="300" r="150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
              </svg>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className={`p-3 rounded-lg ${module.color}`}>
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
                            <div className={`w-2 h-2 rounded-full mt-2 ${module.color.replace('bg-', 'bg-').replace('text-', '')}`}></div>
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
        </div>
      </section>

      {/* Career Paths - Timeline Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Career Journey</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 h-full w-1 bg-gray-200 -translate-x-1/2"></div>
            
            <div className="space-y-12 pl-12">
              {careerPaths.map((path, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-6 h-6 rounded-full bg-blue-600 -translate-x-1/2 flex items-center justify-center">
                    {path.icon}
                  </div>
                  
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{path.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">
                        {path.salary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-4">
                        <div className="bg-blue-50 px-3 py-1 rounded-full text-sm font-medium">
                          FinTech Firms
                        </div>
                        <div className="bg-purple-50 px-3 py-1 rounded-full text-sm font-medium">
                          Investment Banks
                        </div>
                        <div className="bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                          Hedge Funds
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose ADFA?</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm h-full">
                <div className="text-5xl font-bold mb-4">01</div>
                <h3 className="text-xl font-bold mb-3">Industry-Aligned Curriculum</h3>
                <p>
                  Developed with input from 50+ FinTech executives and updated quarterly to reflect market changes.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm h-full">
                <div className="text-5xl font-bold mb-4">02</div>
                <h3 className="text-xl font-bold mb-3">Trading Lab Access</h3>
                <p>
                  Our Bloomberg Terminal-equipped lab gives you 24/7 access to professional trading platforms.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm h-full">
                <div className="text-5xl font-bold mb-4">03</div>
                <h3 className="text-xl font-bold mb-3">Career Accelerator</h3>
                <p>
                  Includes resume workshops, technical interview prep, and direct introductions to hiring managers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-50 inline-block px-6 py-3 rounded-full mb-6">
              <span className="font-medium text-blue-600">Next cohort starts: June 15, 2024</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Finance Career?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the most comprehensive FinTech and analytics program designed for the digital finance era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-gray-300 hover:bg-gray-50">
                Speak to Advisor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ADFACoursePage;