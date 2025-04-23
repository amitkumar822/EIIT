import React from "react";
import { motion } from "framer-motion";

export default function G20India2023Page() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 via-white to-orange-100 py-16 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-orange-600"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          G20 भारत 2023
        </motion.h1>
        <p className="text-xl text-gray-700 mt-4">India's G20 Presidency 2023</p>
      </section>

      {/* Article Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-600">
          हिंदी में लेख:
        </h2>
        <p className="mb-4">
          वर्ष 2023 में भारत ने पहली बार G20 की अध्यक्षता ग्रहण की, जो हमारे लिए एक ऐतिहासिक अवसर था। G20 विश्व के प्रमुख 20 देशों का समूह है, जो वैश्विक आर्थिक स्थिरता, सतत विकास, जलवायु परिवर्तन और तकनीकी सहयोग जैसे विषयों पर मिलकर काम करता है।
        </p>
        <p className="mb-4">
          भारत की अध्यक्षता का मुख्य विषय था – "एक पृथ्वी, एक परिवार, एक भविष्य" (Vasudhaiva Kutumbakam)। इस विचारधारा ने वैश्विक एकता, सहयोग और साझा विकास की भावना को दर्शाया। भारत ने इस अवसर का उपयोग करते हुए डिजिटल इंडिया, ग्रीन एनर्जी, महिला सशक्तिकरण और वैश्विक स्वास्थ्य पर विशेष बल दिया।
        </p>
        <p className="mb-4">
          देश के विभिन्न हिस्सों में G20 की बैठकें आयोजित की गईं, जिससे भारत की विविधता और संस्कृति की झलक दुनिया को देखने को मिली। यह अवसर भारत के लिए वैश्विक मंच पर नेतृत्व का उदाहरण बन गया।
        </p>
        <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-600">
          “वसुधैव कुटुम्बकम् — एक विश्व, एक परिवार, एक भविष्य।”
        </blockquote>

        <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-6 text-orange-600">
          English Version:
        </h2>
        <p className="mb-4">
          In 2023, India proudly assumed the presidency of the G20 for the first time, marking a historic milestone. The G20 brings together the world’s major economies to collaborate on issues such as global economic stability, sustainable development, climate change, and technological innovation.
        </p>
        <p className="mb-4">
          India's presidency was themed – "One Earth, One Family, One Future" inspired by the ancient Indian philosophy of Vasudhaiva Kutumbakam. It emphasized global unity, mutual respect, and collective progress.
        </p>
        <p className="mb-4">
          India used this platform to champion causes like Digital India, green energy transformation, women's empowerment, and global health equity. G20 meetings across India showcased the nation’s cultural richness and regional diversity.
        </p>
        <p className="mb-4">
          This presidency allowed India to step forward as a responsible global leader, promoting sustainable solutions and inclusive growth.
        </p>
        <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-600">
          “Vasudhaiva Kutumbakam — One Earth, One Family, One Future.”
        </blockquote>
      </section>
    </div>
  );
}
