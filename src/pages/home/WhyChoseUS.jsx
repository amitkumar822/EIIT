import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Sparkles,
  ShieldCheck,
  Trophy,
  Workflow,
  CircleDot,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Learn from Industry Leaders",
    desc: "Gain insider knowledge from senior developers and tech architects.",
    icon: <GraduationCap className="w-8 h-8 text-red-600" />,
    image:
      "https://img.freepik.com/premium-photo/meeting-planning-happy-business-people-with-laptop-brainstorming-idea-strategy-collaboration-corporate-office-teamwork-men-women-working-report-group-project-discussion_590464-200425.jpg?w=1060",
  },
  {
    title: "Build a Standout Portfolio",
    desc: "Work on real-world projects and showcase your skills to top employers.",
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    image:
      "https://img.freepik.com/premium-photo/candid-business-presentation-retail-strategy-natural-shot-professional-discussing-coupon-use_980716-740268.jpg?w=1380",
  },
  {
    title: "Exclusive Generative AI Masterclass",
    desc: "Hands-on training in AI-driven tools for automation & innovation.",
    icon: <Sparkles className="w-8 h-8 text-red-600" />,
    image:
      "https://img.freepik.com/premium-photo/artificial-intelligence-machine-learning-business-internet-technology-concept_41050-7285.jpg?ga=GA1.1.10225987.1744389765&semt=ais_hybrid&w=740",
  },
  {
    title: "Master Competitive Programming",
    desc: "Sharpen your coding skills with advanced algorithms.",
    icon: <Code2 className="w-8 h-8 text-red-600" />,
    image:
      "https://cdn-websites.talentedge.com/CHANDIGARH/public_html/assets/assets/img/mca-lp/ai-masterclass.png",
  },
  {
    title: "Hackathons & Coding Competitions",
    desc: "Compete, win, and get noticed by industry leaders.",
    icon: <Trophy className="w-8 h-8 text-red-600" />,
    image:
      "https://cdn-websites.talentedge.com/CHANDIGARH/public_html/assets/assets/img/mca-lp/hackathons.png",
  },
  {
    title: "Job-Readiness Assessments",
    desc: "Crack tech roles with semester-wise coding & aptitude tests.",
    icon: <Workflow className="w-8 h-8 text-red-600" />,
    image:
      "https://cdn-websites.talentedge.com/CHANDIGARH/public_html/assets/assets/img/mca-lp/job-readiness.png",
  },
];

export const WhyChooseUS = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Why Choose AMI University's <span className="text-red-600"> Online MCA?</span>
      </h2>
      

      <p className="text-center text-gray-600 text-sm max-w-md mx-auto mb-10">
        Become <strong>job-ready</strong> with focused content and real-world
        learning.
      </p>

      <div className="relative">
        {/* Vertical red line center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600 z-0"></div>

        <div className="space-y-12 relative z-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`md:flex items-center gap-6 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } relative`}
            >
              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 z-20">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-white bg-red-600 flex items-center justify-center shadow">
                  <CircleDot className="text-white w-3 h-3" />
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full shadow-md shadow-[#428ea1] border bg-white w-full h-44 object-cove md:h-48"
                />
              </div>

              {/* Content */}
              <Card className="flex-1 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="border border-red-600 p-1 rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
