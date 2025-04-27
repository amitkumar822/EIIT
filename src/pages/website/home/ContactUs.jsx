import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  BookOpen,
  School,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const courses = [
  "RS-CIT",
  "CCC",
  "RS-CFA",
  "RS-CSEP",
  "Tally with GST",
  "MS Office",
  "Typing (Hindi & English)",
  "DCA",
  "ADCA",
  "Y.T.T.",
  "N.T.T.",
  "Fire & Safety",
  "All Computer Courses",
];

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Thank you for contacting EduSphere Institute!");
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500">
      {/* ===== ANIMATED HERO SECTION ===== */}
      <div className="relative overflow-hidden">
        {/* Animated SVG Waves */}
        <div className="relative overflow-hidden">
          {/* ===== ANIMATED GRADIENT BACKGROUND ===== */}
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"
            >
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                radial-gradient(at 40% 20%, hsla(265,100%,70%,0.5) 0px, transparent 50%),
                radial-gradient(at 80% 0%, hsla(255,100%,70%,0.3) 0px, transparent 50%),
                radial-gradient(at 0% 50%, hsla(225,100%,70%,0.2) 0px, transparent 50%)
              `,
                  backgroundSize: "200% 200%",
                }}
              />
            </motion.div>

            {/* Animated floating elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, i % 2 === 0 ? 15 : -15, 0],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className={`absolute rounded-full bg-white/10 backdrop-blur-sm`}
                style={{
                  width: `${50 + i * 20}px`,
                  height: `${50 + i * 20}px`,
                  left: `${10 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                }}
              />
            ))}
          </div>

          {/* ===== HERO CONTENT ===== */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              {/* Animated badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm ring-1 ring-white/20 mb-6"
              >
                <span className="text-white"> Contact EduSphere Institute</span>
                <ChevronRight className="ml-1 h-4 w-4 text-white" />
              </motion.div>

              {/* Main heading with gradient text */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
              >
                <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                Your Future With Quality Education
              </motion.h1>

              {/* Animated description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 text-lg leading-8 text-white/90"
              >
                Get in touch with us for course inquiries, admissions, or any
                other questions. Our team is ready to assist you.
              </motion.p>

              {/* Animated buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-10 flex flex-wrap justify-center gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 hover:from-yellow-500 hover:to-yellow-700"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <a href="tel: +91 72310 41011">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent cursor-pointer text-white border-white hover:bg-white/50"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Floating course icons */}
            <motion.div
              className="absolute -bottom-20 left-0 right-0 hidden md:block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex justify-center space-x-8">
                {["💻", "📊", "🧮", "📝", "🔐"].map((icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="text-4xl bg-white/10 backdrop-blur-sm p-4 rounded-full"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Animated wave divider */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <svg
              className="w-full"
              viewBox="0 0 1440 120"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                fill="white"
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
              />
              <path
                fill="white"
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
              />
              <path
                fill="white"
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 mt-5 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ===== CONTACT DETAILS ===== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200/50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <School className="text-indigo-600" size={24} />
                </div>
                <span>Our Contact Information</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="text-indigo-600" size={20} />,
                    title: "Email",
                    content: "info@edusphere.in",
                    link: "mailto:info@edusphere.in",
                  },
                  {
                    icon: <Phone className="text-indigo-600" size={20} />,
                    title: "Phone",
                    content: "+91 72310 41011",
                    link: "tel:+917231041011",
                  },
                  {
                    icon: <MapPin className="text-indigo-600" size={20} />,
                    title: "Head Office",
                    content:
                      "Old Market Main Road, Near Ration Deepo, Sidhmukh (RAJ) 331701",
                  },
                  {
                    icon: <MapPin className="text-indigo-600" size={20} />,
                    title: "Branch",
                    content:
                      "Jama Masjid road near Jahaj Wali Haveli, Nohar (RAJ) 335523",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                    className="flex items-start gap-4 px-4 py-2 hover:bg-indigo-50 rounded-lg transition-colors"
                  >
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ===== GOOGLE MAPS INTEGRATION ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1158.3148296593865!2d75.28326616684934!3d28.8879026706233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391395ecceb70fd5%3A0x177c26d0e75d153a!2sEdusphere%20Academy!5e1!3m2!1sen!2sin!4v1745723023955!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* ===== CONTACT FORM WITH GRADIENT HEADER ===== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200/50"
          >
            {/* Gradient Form Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Send className="text-white" size={24} />
                </div>
                <span>Enquiry Form</span>
              </h2>
              <p className="text-white/90 mt-1">
                Fill out the form and we'll get back to you soon
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-gray-700 font-medium"
                >
                  <User size={18} className="text-indigo-600" />
                  Full Name
                </label>
                <Input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-gray-700 font-medium"
                >
                  <Mail size={18} className="text-indigo-600" />
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-gray-700 font-medium"
                >
                  <Phone size={18} className="text-indigo-600" />
                  Phone Number
                </label>
                <Input
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="course"
                  className="flex items-center gap-2 text-gray-700 font-medium"
                >
                  <BookOpen size={18} className="text-indigo-600" />
                  Interested Course
                </label>
                <Select
                  {...register("course", {
                    required: "Course selection is required",
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course, index) => (
                      <SelectItem key={index} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.course && (
                  <p className="text-red-500 text-sm">
                    {errors.course.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-gray-700 font-medium"
                >
                  <Send size={18} className="text-indigo-600" />
                  Message
                </label>
                <Textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  placeholder="Enter your message"
                  rows={4}
                  className={"md:min-h-40"}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Enquiry
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// import { motion } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Mail, PhoneCall, MapPin, Send, User, MessageSquare, Info } from "lucide-react";

// export default function ContactUs() {
//   return (
//     <section className="relative bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden py-20 px-6 md:px-16">
//       {/* SVG Background Decorations */}
//       <motion.div
//         className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-200 rounded-full blur-3xl opacity-30"
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-cyan-300 rounded-full blur-3xl opacity-40"
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ duration: 12, repeat: Infinity }}
//       />

//       {/* Section Header */}
//       <div className="relative z-10 text-center mb-16">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Contact <span className="text-cyan-600">EduSphere Institute</span>
//         </motion.h2>
//         <p className="text-gray-700 text-lg max-w-2xl mx-auto">
//           We're here to help! Reach out to us for admissions, support, or any inquiries.
//         </p>
//       </div>

//       {/* Contact Grid */}
//       <div className="relative grid lg:grid-cols-2 gap-12 z-10">
//         {/* Left: Info Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="space-y-8"
//         >
//           <div className="flex items-start gap-4">
//             <Mail className="text-cyan-600 w-6 h-6 mt-1" />
//             <div>
//               <h4 className="text-lg font-semibold text-slate-800">Email</h4>
//               <p className="text-slate-600">info@edusphere.in</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <PhoneCall className="text-cyan-600 w-6 h-6 mt-1" />
//             <div>
//               <h4 className="text-lg font-semibold text-slate-800">Phone</h4>
//               <a href="tel: +91 72310 41011" className="text-slate-600">+91 72310 41011</a>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <MapPin className="text-cyan-600 w-6 h-6 mt-1" />
//             <div>
//               <h4 className="text-lg font-semibold text-slate-800">Head Office</h4>
//               <p className="text-slate-600">Old Market main Road, Near Ration Deepo, Sidhmukh (RAJ) 331701</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <MapPin className="text-cyan-600 w-6 h-6 mt-1" />
//             <div>
//               <h4 className="text-lg font-semibold text-slate-800">Branch</h4>
//               <p className="text-slate-600">Jama Masjid road near jahaj wali haveli, Nohar (RAJ) 335523</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right: Form */}
//         <motion.form
//           className="bg-white p-8 shadow-2xl rounded-2xl space-y-6 border border-blue-100"
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <div className="relative">
//             <User className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
//             <Input className="pl-10 bg-gray-50" placeholder="Full Name" required />
//           </div>

//           <div className="relative">
//             <Mail className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
//             <Input className="pl-10 bg-gray-50" type="email" placeholder="Email" required />
//           </div>

//           <div className="relative">
//             <Info className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
//             <Input className="pl-10 bg-gray-50" placeholder="Subject" />
//           </div>

//           <div className="relative">
//             <MessageSquare className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
//             <Textarea
//               rows={5}
//               className="pl-10 bg-gray-50"
//               placeholder="Write your message here..."
//             />
//           </div>

//           <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-lg rounded-xl">
//             <Send className="inline-block mr-2" /> Send Message
//           </Button>
//         </motion.form>
//       </div>

//     </section>
//   );
// }
