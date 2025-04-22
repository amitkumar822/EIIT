import React from "react";
import { motion } from "framer-motion";

export default function NationalEducationPolicy() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 via-white to-green-100 py-16 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-blue-700"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          राष्ट्रीय शिक्षा नीति 2020
        </motion.h1>
        <p className="text-xl text-gray-700 mt-4">National Education Policy 2020</p>
      </section>

      {/* Article Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600">
          हिंदी में लेख:
        </h2>
        <p className="mb-4">
          राष्ट्रीय शिक्षा नीति 2020 (NEP 2020) भारत सरकार द्वारा 34 वर्षों के बाद पेश की गई एक दूरदर्शी और व्यापक शिक्षा नीति है। इसका उद्देश्य 21वीं सदी के छात्रों के लिए एक लचीला, समावेशी और बहुआयामी शिक्षा तंत्र तैयार करना है।
        </p>
        <p className="mb-4">
          यह नीति छात्रों की जिज्ञासा, रचनात्मकता और आलोचनात्मक सोच को बढ़ावा देती है। पहले के 10+2 सिस्टम की जगह अब 5+3+3+4 का नया ढांचा लागू किया गया है, जो बाल्यकाल से लेकर उच्च शिक्षा तक को एकीकृत करता है।
        </p>
        <p className="mb-4">
          मातृभाषा या क्षेत्रीय भाषा में प्रारंभिक शिक्षा, बहुभाषिकता को प्रोत्साहन, और कौशल विकास जैसे पहलुओं पर खास ज़ोर दिया गया है। साथ ही, शिक्षक प्रशिक्षण, मूल्यांकन प्रणाली और प्रौद्योगिकी के एकीकरण पर भी व्यापक कार्य किया गया है।
        </p>
        <p className="mb-4">
          यह नीति भारत को एक ज्ञान आधारित समाज बनाने की दिशा में एक बड़ा कदम है, जहाँ शिक्षा केवल डिग्री प्राप्त करने तक सीमित न होकर, जीवन कौशल और नैतिक मूल्यों के विकास का माध्यम बने।
        </p>
        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600">
          “शिक्षा वो अस्त्र है जिससे हम विश्व को बदल सकते हैं।” – नेल्सन मंडेला
        </blockquote>

        <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-6 text-blue-600">
          English Version:
        </h2>
        <p className="mb-4">
          The National Education Policy 2020 (NEP 2020) is a revolutionary step by the Government of India, introduced after 34 years to reshape the Indian education system for the 21st century. It aims to create a holistic, flexible, multidisciplinary, and learner-centered approach.
        </p>
        <p className="mb-4">
          Replacing the old 10+2 system, the new 5+3+3+4 structure covers foundational, preparatory, middle, and secondary stages to provide a seamless learning experience from early childhood to higher education.
        </p>
        <p className="mb-4">
          Emphasis is placed on mother tongue/regional language for early education, promotion of multilingualism, vocational training, and fostering creativity, curiosity, and critical thinking among students.
        </p>
        <p className="mb-4">
          The policy also focuses on teacher training, reforms in assessment methods, and integration of technology into learning. It envisions transforming India into a knowledge-driven society where education builds both intellect and character.
        </p>
        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600">
          “Education is the most powerful weapon which you can use to change the world.” – Nelson Mandela
        </blockquote>
      </section>
    </div>
  );
}
