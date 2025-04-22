import { motion } from "framer-motion";
import { Users, Code2, BookOpenCheck, PenTool, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

const Card = ({ icon: Icon, title, description, image, delay }) => (
  <motion.div {...fadeIn(delay)} className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="grid md:grid-cols-2 items-center gap-6 p-6">
      <div>
        <Icon className="h-10 w-10 text-blue-600 mb-4" />
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <img src={image} alt={title} className="rounded-lg w-full h-full object-cover" />
    </div>
  </motion.div>
);

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003366] to-[#001f3f] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Discover AMI University
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            A unified platform for learning, development, exams, and innovation.
          </motion.p>
        </div>
      </section>

      {/* About Cards Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card
            icon={GraduationCap}
            title="Who We Are"
            description="Rooted in excellence, Green Garden University blends traditional academics with cutting-edge digital education."
            image="https://img.freepik.com/free-photo/university-campus-concept_23-2149190933.jpg"
            delay={0.1}
          />
          <Card
            icon={BookOpenCheck}
            title="Modern LMS"
            description="Our Learning Management System empowers students and educators with video, quizzes, discussions, and more."
            image="https://img.freepik.com/free-photo/learning-management-system-concept_23-2149340876.jpg"
            delay={0.2}
          />
          <Card
            icon={Code2}
            title="Developer APIs"
            description="RESTful APIs and SDKs to build powerful apps, automate onboarding, and customize learning workflows."
            image="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
            delay={0.3}
          />
          <Card
            icon={PenTool}
            title="Online Exams"
            description="Schedule exams with AI proctoring, advanced analytics, and seamless grading support."
            image="https://img.freepik.com/free-photo/online-exam-concept-illustration_23-2148805662.jpg"
            delay={0.4}
          />
          <Card
            icon={Users}
            title="Our Team"
            description="Educators, engineers, and creatives building smarter, scalable education for the future."
            image="https://img.freepik.com/free-photo/diverse-colleagues-working-together_1098-20184.jpg"
            delay={0.5}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white px-6">
        <motion.div {...fadeIn(0.6)} className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="mb-4 text-gray-700">“The LMS is intuitive and easy to use. I can track my progress and attend live classes effortlessly!”</p>
              <h4 className="font-semibold text-gray-900">— Sarah A., Student</h4>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="mb-4 text-gray-700">“As a developer, the APIs made integration into our college app seamless. Great documentation!”</p>
              <h4 className="font-semibold text-gray-900">— Amit R., Full-Stack Dev</h4>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#003366] to-[#001f3f] text-white px-6">
        <motion.div {...fadeIn(0.8)} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Learning Revolution?</h2>
          <Button className="bg-[#FFD700] text-black px-6 py-4 rounded-xl hover:bg-yellow-400 text-lg font-semibold">
            Get Started Now
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
