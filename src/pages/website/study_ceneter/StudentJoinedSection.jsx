import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, User, Mail, Phone, GraduationCap } from "lucide-react";

const computerCourses = [
  "RS-CIT",
  "CCC",
  "DFA",
  "TALLY",
  "ADCA",
  "CCB",
  "ADFA",
  "CFA",
  "MS-OFFICE",
  "RS-CFA",
  "RS-CSEP",
];

const vocationalCourses = [
  "NTT",
  "Fire & Safety",
  "YTT",
  "ECCE",
  "SILAI CERTIFICATE",
];

const allCourses = [...computerCourses, ...vocationalCourses];

export default function StudentJoinedSection() {
  const { handleSubmit, control, register, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Student Submitted:", data);
    reset();
  };

  return (
    <section className="relative bg-gradient-to-tr from-slate-950 via-indigo-900 to-blue-900 text-white overflow-hidden min-h-screen py-28 px-4">
      {/* Top Background SVG */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          <defs>
            <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGradient)"
            d="M0,100 C150,200 350,0 800,100 L800,400 L0,400 Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        >
          Enrolled Students at <span className="text-cyan-400">EduSphere</span>
        </motion.h2>

        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12 text-blue-100">
          Explore the transformative journey of our students with practical,
          certified training.
        </p>

        {/* Floating Badges Cloud */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {allCourses.map((course) => (
            <motion.div
              key={course}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Badge className="text-sm px-4 py-1 border-white/20 text-white/90 bg-white/5 backdrop-blur-md">
                {course}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Form Card with SVG image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/10 backdrop-blur-lg p-10 rounded-3xl max-w-3xl mx-auto border border-white/10 shadow-xl space-y-6"
        >
          {/* Floating SVG inside form */}
          <div className="absolute top-[-40px] right-[-40px] w-32 h-32 opacity-20 pointer-events-none z-0">
            <svg viewBox="0 0 91 91" fill="none" className="w-full h-full">
              <circle cx="45.5" cy="45.5" r="45.5" fill="url(#grad2)" />
              <defs>
                <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#06b6d4" offset="0%" />
                  <stop stopColor="#6366f1" offset="100%" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <Label
                  htmlFor="name"
                  className="text-white flex items-center gap-2"
                >
                  <User size={18} /> Name
                </Label>
                <Input
                  id="name"
                  {...register("name", { required: true })}
                  placeholder="Enter full name"
                  className="text-black bg-white mt-1"
                />
              </div>

              <div className="relative">
                <Label
                  htmlFor="joinedOn"
                  className="text-white flex items-center gap-2"
                >
                  <CalendarDays size={18} /> Joined On
                </Label>
                <Input
                  type="date"
                  id="joinedOn"
                  {...register("joinedOn", { required: true })}
                  className="text-black bg-white mt-1"
                />
              </div>
            </div>

            <div className="mt-6">
              <Label className="text-white flex items-center gap-2">
                <GraduationCap size={18} /> Select Course
              </Label>
              <Controller
                control={control}
                name="courses"
                render={({ field }) => (
                  <Select onValueChange={(value) => field.onChange([value])}>
                    <SelectTrigger className="w-full bg-white text-black mt-1">
                      <SelectValue placeholder="Choose a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {allCourses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="relative">
                <Label
                  htmlFor="email"
                  className="text-white flex items-center gap-2"
                >
                  <Mail size={18} /> Email
                </Label>
                <Input
                  id="email"
                  {...register("email")}
                  placeholder="example@eiit.com"
                  className="text-black bg-white mt-1"
                />
              </div>
              <div className="relative">
                <Label
                  htmlFor="phone"
                  className="text-white flex items-center gap-2"
                >
                  <Phone size={18} /> Phone
                </Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="9876543210"
                  className="text-black bg-white mt-1"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
            >
              Add Student
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
