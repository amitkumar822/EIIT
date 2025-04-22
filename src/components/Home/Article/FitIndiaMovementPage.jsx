import React from "react";
import { motion } from "framer-motion";

export default function FitIndiaMovementPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 via-white to-blue-100 py-16 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-green-600"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          फिट इंडिया मूवमेंट
        </motion.h1>
        <p className="text-xl text-gray-700 mt-4">Fit India Movement</p>
      </section>

      {/* Article Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-600">
          हिंदी में लेख:
        </h2>
        <p className="mb-4">
          फिट इंडिया मूवमेंट भारत सरकार द्वारा शुरू की गई एक जन-आंदोलन है, जिसका उद्देश्य लोगों को स्वास्थ्य और तंदुरुस्ती के प्रति जागरूक करना है। इस अभियान की शुरुआत 29 अगस्त 2019 को प्रधानमंत्री श्री नरेंद्र मोदी जी ने की थी।
        </p>
        <p className="mb-4">
          इसका मूल मंत्र है – "फिट इंडिया, हिट इंडिया"। यह आंदोलन नागरिकों को नियमित व्यायाम, संतुलित आहार और मानसिक स्वास्थ्य की ओर प्रेरित करता है। स्कूलों, कॉलेजों, कार्यालयों और समुदायों में फिटनेस से जुड़े कार्यक्रम आयोजित किए जाते हैं।
        </p>
        <p className="mb-4">
          यह पहल हमें एक सक्रिय जीवनशैली अपनाने, तकनीकी निर्भरता को कम करने और शारीरिक रूप से सक्रिय रहने के लिए प्रेरित करती है। यह केवल व्यक्तिगत स्वास्थ्य तक सीमित नहीं है, बल्कि एक स्वस्थ और प्रगतिशील राष्ट्र की दिशा में भी योगदान देती है।
        </p>
        <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-600">
          “फिट बॉडी, फिट माइंड और फिट नेशन ही नए भारत की पहचान है।” – नरेंद्र मोदी
        </blockquote>

        <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-6 text-green-600">
          English Version:
        </h2>
        <p className="mb-4">
          The Fit India Movement is a nationwide campaign launched by the Government of India to encourage citizens to lead a healthier and more active lifestyle. It was inaugurated by Prime Minister Shri Narendra Modi on August 29, 2019.
        </p>
        <p className="mb-4">
          Its motto — "Fit India, Hit India" — inspires people to engage in regular physical activities, consume nutritious food, and focus on mental well-being. Fitness programs are conducted across schools, colleges, offices, and communities.
        </p>
        <p className="mb-4">
          The movement promotes an active lifestyle and aims to reduce digital dependence. It is not only about individual fitness but also contributes towards building a strong and healthy nation.
        </p>
        <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-600">
          “A fit body, a fit mind, and a fit nation are the foundations of New India.” – Narendra Modi
        </blockquote>
      </section>
    </div>
  );
}
