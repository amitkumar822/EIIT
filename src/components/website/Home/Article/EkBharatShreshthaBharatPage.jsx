import React from "react";
import { motion } from "framer-motion";

export default function EkBharatShreshthaBharatPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-100 via-white to-green-100 py-16 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-yellow-600"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          एक भारत श्रेष्ठ भारत
        </motion.h1>
        <p className="text-xl text-gray-700 mt-4">Ek Bharat Shreshtha Bharat</p>
      </section>

      {/* Article Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-600">
          हिंदी में लेख:
        </h2>
        <p className="mb-4">
          "एक भारत श्रेष्ठ भारत" भारत सरकार की एक प्रेरणादायक पहल है, जिसका उद्देश्य देश की विविधता में एकता को मजबूत करना है। यह पहल विभिन्न राज्यों और केंद्रशासित प्रदेशों को सांस्कृतिक, शैक्षणिक और सामाजिक रूप से जोड़ने का कार्य करती है।
        </p>
        <p className="mb-4">
          इस कार्यक्रम के अंतर्गत राज्यों को जोड़ा जाता है, जिससे वे एक-दूसरे की भाषाओं, परंपराओं, खानपान, संगीत, नृत्य, कला और विरासत को जान सकें। इससे राष्ट्रीय एकता की भावना को बल मिलता है और भारत की विविध संस्कृति में एक साझा बंधन स्थापित होता है।
        </p>
        <p className="mb-4">
          स्कूलों, कॉलेजों और विश्वविद्यालयों में छात्रों को अन्य राज्यों की संस्कृति से परिचित कराने के लिए विशेष कार्यक्रम आयोजित किए जाते हैं। यह कार्यक्रम छात्रों में सहिष्णुता, समावेशिता और भाईचारे की भावना को प्रोत्साहित करता है।
        </p>
        <p className="mb-4">
          “एक भारत श्रेष्ठ भारत” केवल एक नारा नहीं, बल्कि यह भारत के उज्ज्वल भविष्य की नींव है।
        </p>
        <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-600">
          “भारत की शक्ति उसकी विविधता में है।”
        </blockquote>

        <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-6 text-yellow-600">
          English Version:
        </h2>
        <p className="mb-4">
          "Ek Bharat Shreshtha Bharat" is an inspiring initiative by the Government of India to strengthen the unity in diversity of our nation. The program aims to connect states and union territories culturally, educationally, and socially.
        </p>
        <p className="mb-4">
          Through state pairing, people learn about each other's languages, traditions, cuisine, music, dance, arts, and heritage — fostering deeper cultural understanding and national integration.
        </p>
        <p className="mb-4">
          Special programs are organized in schools, colleges, and universities to introduce students to different regional cultures. This enhances tolerance, inclusiveness, and a sense of national pride among youth.
        </p>
        <p className="mb-4">
          “Ek Bharat Shreshtha Bharat” is more than a slogan — it is a vision of a united and prosperous India.
        </p>
        <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-600">
          “India’s strength lies in its diversity.”
        </blockquote>
      </section>
    </div>
  );
}
