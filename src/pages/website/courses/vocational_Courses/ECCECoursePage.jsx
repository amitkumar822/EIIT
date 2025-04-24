import React from 'react';
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Clock, 
  Calendar, 
  Award, 
  HeartHandshake,
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const ECCECoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Early Childhood Care & Education</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Shape young minds and build a rewarding career in early childhood development
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg transition">
              Enroll Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-lg font-semibold text-lg transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-top-left"></div>
      </section>

      {/* What is ECCE Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <BookOpen className="inline mr-3 text-blue-500" size={28} />
                What is ECCE?
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Early Childhood Care and Education (ECCE) is more than just preschool education. It's a comprehensive approach that focuses on the holistic development of a child's social, emotional, cognitive, and physical needs to build a strong foundation for lifelong learning and wellbeing.
              </p>
              <p className="text-lg text-gray-600">
                ECCE encompasses the age group from birth to 8 years old, recognizing that early childhood is the most significant period for human development.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Aspects of ECCE:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <HeartHandshake className="text-blue-600" size={18} />
                    </span>
                    <span className="text-gray-700">Nurturing care and emotional support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Users className="text-blue-600" size={18} />
                    </span>
                    <span className="text-gray-700">Socialization and peer interaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <BookOpen className="text-blue-600" size={18} />
                    </span>
                    <span className="text-gray-700">Age-appropriate learning activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <GraduationCap className="text-blue-600" size={18} />
                    </span>
                    <span className="text-gray-700">School readiness preparation</span>
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
            <GraduationCap className="inline mr-3 text-purple-500" size={28} />
            Course Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <CardTitle>Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">6-12 months comprehensive program with flexible learning options</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="text-blue-600" size={24} />
                </div>
                <CardTitle>Learning Mode</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Blended learning with online classes, workshops, and practical training</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="text-green-600" size={24} />
                </div>
                <CardTitle>Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Nationally recognized certification upon successful completion</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <Briefcase className="inline mr-3 text-blue-500" size={28} />
            Career Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition border-t-4 border-blue-500">
                <CardHeader>
                  <div className={`bg-${benefit.color}-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
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
            <BookOpen className="inline mr-3 text-purple-500" size={28} />
            Course Curriculum
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {curriculumModules.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-2 rounded-full mr-4">
                        <ChevronDown className="text-purple-600" />
                      </div>
                      <span className="text-lg font-semibold text-left">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-6 space-y-2 mt-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
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
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <MessageSquare className="inline mr-3 text-blue-500" size={28} />
            What Our Students Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Users className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
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
                  <AccordionTrigger className="hover:no-underline bg-gray-50 px-6 py-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-4">
                        <ChevronDown className="text-blue-600" />
                      </div>
                      <span className="text-lg font-semibold text-left">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-50 rounded-b-lg">
                    <p className="text-gray-700">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your ECCE Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our next cohort and take the first step toward a fulfilling career in early childhood education.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
};

// Data for components
const careerBenefits = [
  {
    icon: Briefcase,
    title: "Diverse Career Paths",
    description: "Work in preschools, daycare centers, NGOs, or start your own childcare business",
    color: "blue"
  },
  {
    icon: Users,
    title: "High Demand",
    description: "Growing need for qualified ECCE professionals worldwide",
    color: "purple"
  },
  {
    icon: HeartHandshake,
    title: "Make a Difference",
    description: "Directly impact children's development and future success",
    color: "pink"
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Opportunities for specialization and career advancement",
    color: "green"
  }
];

const curriculumModules = [
  {
    title: "Module 1: Child Development Fundamentals",
    topics: [
      "Theories of child development",
      "Physical, cognitive, and emotional milestones",
      "Understanding individual differences",
      "Observation and assessment techniques"
    ]
  },
  {
    title: "Module 2: Early Learning Approaches",
    topics: [
      "Play-based learning methodologies",
      "Montessori and Reggio Emilia approaches",
      "Language and literacy development",
      "Numeracy and STEM concepts for young children"
    ]
  },
  {
    title: "Module 3: Health, Safety and Nutrition",
    topics: [
      "Child health and hygiene practices",
      "Safety protocols and emergency procedures",
      "Nutritional needs of young children",
      "Creating healthy learning environments"
    ]
  },
  {
    title: "Module 4: Classroom Management",
    topics: [
      "Positive behavior guidance strategies",
      "Creating inclusive environments",
      "Routines and transitions",
      "Working with children with special needs"
    ]
  },
  {
    title: "Module 5: Professional Practice",
    topics: [
      "Ethics in early childhood education",
      "Working with families and communities",
      "Curriculum planning and implementation",
      "Documentation and reporting"
    ]
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Preschool Teacher",
    quote: "The ECCE course transformed my approach to early education. The practical training was invaluable and helped me secure my dream job immediately after completion."
  },
  {
    name: "Michael Chen",
    role: "Daycare Center Owner",
    quote: "As someone transitioning careers, this program gave me all the tools I needed to start my own successful childcare business."
  },
  {
    name: "Priya Patel",
    role: "ECCE Graduate",
    quote: "The comprehensive curriculum and supportive instructors made learning enjoyable. I now feel fully prepared to make a difference in children's lives."
  }
];

const faqs = [
  {
    question: "What are the entry requirements for this course?",
    answer: "There are no strict academic requirements, but a passion for working with children is essential. Basic literacy and communication skills are needed. Some centers may require a background check for practical placements."
  },
  {
    question: "Can I study while working full-time?",
    answer: "Yes! Our flexible learning options include evening classes, weekend workshops, and online modules that allow you to balance work and study."
  },
  {
    question: "Is financial aid available?",
    answer: "We offer several payment plans and scholarship opportunities. Contact our admissions team to discuss options that might be available to you."
  },
  {
    question: "What kind of jobs can I get after completing this course?",
    answer: "Graduates work as preschool teachers, daycare providers, nanny professionals, early intervention specialists, or start their own childcare businesses. Many also use this as a stepping stone to further education in childhood studies."
  },
  {
    question: "Is there practical training included?",
    answer: "Yes, the course includes 120 hours of supervised practical experience in approved early childhood settings to give you hands-on experience."
  }
];

export default ECCECoursePage;