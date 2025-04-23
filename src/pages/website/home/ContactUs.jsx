import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, PhoneCall, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#f0f4ff] to-[#e0ecff] py-16 px-4 md:px-10 lg:px-20">
      {/* Animated Background Circle SVG */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#158567]/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#ff6b6b]/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-[#111827] mb-4 z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Connect with <span className="text-blue-600">AMI University</span>
      </motion.h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        We love to hear from you! Whether you're a developer looking to collaborate or a student interested in our programs — reach out today.
      </p>

      {/* Contact Info & Form */}
      <div className="grid lg:grid-cols-2 gap-10 relative z-10">
        {/* Left Side Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a href="mailto:info@greengardenschool.edu.in" className="flex items-start gap-4 hover:scale-95 transition-transform">
            <Mail className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">info@greengardenschool.edu.in</p>
            </div>
          </a>

          <a href="tel:+919876543210" className="flex items-start gap-4 hover:scale-95 transition-transform">
            <PhoneCall className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">+91 9876543210</p>
            </div>
          </a>

          <div className="flex items-start gap-4">
            <MapPin className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Location</h4>
              <p className="text-gray-600">Green Garden Public School, Delhi, India</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
          className="bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-6 border border-blue-100"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input id="name" placeholder="John Doe" required className="bg-gray-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input id="email" type="email" placeholder="john@example.com" required className="bg-gray-50" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <Input id="subject" placeholder="Inquiry about admission" className="bg-gray-50" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <div className="relative">
              <Textarea id="message" placeholder="Write your message here..." rows={5} className="bg-gray-50 pr-10" />
              <Send className="absolute right-3 top-3.5 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl">
            🚀 Send Message
          </Button>
        </motion.form>
      </div>
    </div>
  );
}
