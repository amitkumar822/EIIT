import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  User,
  MapPin,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function EnquirySection() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="py-12 px-4 md:px-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      {/* EIIT Enquiry Form */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 rounded-3xl shadow-2xl p-8 relative overflow-hidden"
        >
          {/* SVG Top Decoration */}
          <div className="absolute top-0 right-0 w-32 opacity-20">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#a78bfa"
                d="M44.8,-62.7C57.6,-52.7,66.7,-38.6,69.8,-23.5C72.8,-8.5,69.8,7.6,63.3,22.3C56.7,36.9,46.6,50.2,33.3,59.4C19.9,68.6,3.3,73.7,-11.4,72.1C-26.1,70.6,-39,62.3,-51.1,51.2C-63.2,40.2,-74.5,26.3,-75.6,11.6C-76.6,-3.2,-67.3,-18.7,-57.1,-32.4C-47,-46.2,-35.9,-58.2,-22.1,-67.2C-8.3,-76.2,8.4,-82.3,23.8,-76.2C39.2,-70.2,53.2,-52.7,44.8,-62.7Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-blue-800">
            Welcome to EIIT Institute
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            EduSphere Institute of Information Technology (EIIT) was established
            in 2019 with a vision to provide high-quality, government-recognized
            education. We are proud to be an ISO 9001:2019 Certified
            Institution.
          </p>
          <p className="text-gray-700 mb-4">
            ✅ <strong>Udyam Registration:</strong> UDYAM-RJ-11-0021750
            <br />✅ <strong>Authorized RS-CIT Center:</strong> Rajasthan
            Knowledge Corporation Ltd (RKCL)
            <br />✅ <strong>GSTIN:</strong> Available
            <br />✅ <strong>Social Category:</strong> SC (Scheduled Caste)
            <br />✅ <strong>Company Type:</strong> Proprietorship, Owner - Shri
            Sanjay Datt Singh
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Courses Offered:</strong> RS-CIT, CCC, DCA, ADCA, Tally with
            GST, NTT, YTT, Fire & Safety, Spoken English (RS-CSEP), MS-Office,
            Typing (Hindi & English), and many University Degree Programs (BA,
            BCom, BCA, MCA, MBA).
          </p>
          <p className="text-gray-700 mb-4">
            Our institute is recognized by both Rajasthan State and Central
            Government bodies, ensuring the best learning experience for
            students aiming for government/private sector jobs.
          </p>
          <p className="text-gray-700">
            <strong>Head Office:</strong>
            <br />
            📍Old Market Main Road, Near Ration Depot, Sidhmukh (RAJ) 331701
            <br />
            <strong>Branch:</strong>
            <br />
            📍Jama Masjid Road near Jahaj Wali Haveli, Nohar (RAJ) 335523
          </p>
        </motion.div>

        {/* Right Enquiry Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center py-4">
            <h2 className="text-2xl font-bold">EIIT Enquiry Form</h2>
          </div>

          {/* Form Content */}
          <div className="p-8 space-y-6">
            {/* Course Select */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-gray-700">
                <BookOpen size={18} /> Course Enquiry
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="RS-CIT">RS-CIT</SelectItem>
                  <SelectItem value="CCC">CCC</SelectItem>
                  <SelectItem value="DCA">DCA</SelectItem>
                  <SelectItem value="ADCA">ADCA</SelectItem>
                  <SelectItem value="Tally GST">Tally GST</SelectItem>
                  <SelectItem value="MS Office">MS Office</SelectItem>
                  <SelectItem value="NTT">NTT</SelectItem>
                  <SelectItem value="YTT">YTT</SelectItem>
                  <SelectItem value="Fire & Safety">Fire & Safety</SelectItem>
                  <SelectItem value="Typing">
                    Typing (Hindi & English)
                  </SelectItem>
                  <SelectItem value="University Courses">
                    University Degree (BA, BCom, BCA, MBA etc.)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-gray-700">
                <User size={18} /> Name
              </Label>
              <Input placeholder="Enter your full name" />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-gray-700">
                <Phone size={18} /> Mobile Number
              </Label>
              <Input type="tel" placeholder="Enter your phone number" />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-gray-700">
                <Mail size={18} /> Email
              </Label>
              <Input type="email" placeholder="Enter your email address" />
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-gray-700">
                <MapPin size={18} /> City
              </Label>
              <Input placeholder="Enter your city" />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-gray-700">
                <MessageSquare size={18} /> Message
              </Label>
              <Textarea placeholder="Write your query..." />
            </div>

            {/* Submit Button */}
            <Button className="w-full cursor-pointer bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold hover:from-pink-500 hover:to-blue-500 transition">
              Submit
            </Button>
          </div>
        </motion.form>
      </div>

      {/* Certified Associations Section */}
      <section className=" py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-xl sm:text-3xl font-extrabold text-center text-blue-900 mb-6">
            EIIT - THE HUB OF IT<sup>®</sup> ESTEEMED ASSOCIATIONS
          </h2>

          {/* Decorative Divider */}
          <div className="flex justify-center items-center mb-10">
            <div className="w-16 h-1 bg-blue-600"></div>
            <div className="w-4 h-4 bg-blue-600 rotate-45 mx-2"></div>
            <div className="w-4 h-4 bg-red-600 rotate-45 mx-2"></div>
            <div className="w-4 h-4 bg-blue-600 rotate-45 mx-2"></div>
            <div className="w-16 h-1 bg-blue-600"></div>
          </div>

          {/* Scrolling Logos */}
          <div
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-8"
              animate={{
                x: isPaused ? 0 : ["0%", "-100%"],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 30,
              }}
            >
              {/* Double logos array for seamless infinite effect */}
              {[...logos, ...logos].map((url, index) => (
                <Card
                  key={index}
                  className="min-w-[180px] h-[140px] flex items-center justify-center shadow-md mb-1"
                >
                  <CardContent className="flex items-center justify-center">
                    <img
                      src={url}
                      alt={`Logo ${index}`}
                      className="h-20 w-auto object-contain mix-blend-darken"
                    />
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const logos = [
  "/certified_logo/iso.jpg",
  "/certified_logo/rkcl.jpg",
  "/certified_logo/Emblem_Rajasthan.png",
  "/certified_logo/csc.png",
  "/certified_logo/nisd.png",
  "/certified_logo/msme.jpg",
  "/certified_logo/digital_india.jpg",
];
