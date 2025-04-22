import React from "react";
import { motion } from "framer-motion";

export default function AmritMahotsavPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 via-white to-green-100 py-16 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          आजादी का अमृत महोत्सव
        </motion.h1>
        <p className="text-xl text-gray-700 mt-4">75 Years of India's Independence</p>
      </section>

      {/* Article Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-500">
          हिंदी में लेख:
        </h2>
        <p className="mb-4">
          आजादी का अमृत महोत्सव भारत की आज़ादी की 75वीं वर्षगांठ का एक ऐतिहासिक उत्सव है। यह महोत्सव न केवल हमारी स्वतंत्रता संग्राम की याद दिलाता है, बल्कि आज के भारत की प्रगति, उपलब्धियों और भविष्य के सपनों को भी दर्शाता है।
        </p>
        <p className="mb-4">
          1947 में जब भारत ने 200 वर्षों की ब्रिटिश गुलामी से स्वतंत्रता प्राप्त की, तब यह केवल राजनीतिक बदलाव नहीं था — यह एक सांस्कृतिक, सामाजिक और राष्ट्रीय पुनर्जागरण की शुरुआत थी। महात्मा गांधी, भगत सिंह, नेताजी सुभाष चंद्र बोस, रानी लक्ष्मीबाई जैसे अनगिनत सेनानियों ने अपने प्राणों की आहुति दी ताकि हम एक आज़ाद राष्ट्र में साँस ले सकें।
        </p>
        <p className="mb-4">
          आजादी का अमृत महोत्सव के अंतर्गत भारत सरकार ने विभिन्न कार्यक्रमों, यात्राओं और अभियानों का आयोजन किया है ताकि युवा पीढ़ी आज़ादी के महत्व को समझ सके। ‘हर घर तिरंगा’, ‘स्वतंत्रता यात्रा’, और ‘वंदे भारत अभियान’ जैसे पहल ने नागरिकों को जोड़ने का कार्य किया।
        </p>
        <p className="mb-4">
          इन 75 वर्षों में भारत ने विज्ञान, शिक्षा, स्वास्थ्य, तकनीक और अंतरिक्ष के क्षेत्र में विश्व को दिखा दिया कि हम आत्मनिर्भर हैं। आज भारत एक न्यू इंडिया की ओर बढ़ रहा है — डिजिटल, इनोवेटिव और ग्लोबल।
        </p>
        <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-600">
          “स्वतंत्रता केवल अधिकार नहीं, एक जिम्मेदारी भी है।”
        </blockquote>

        <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-6 text-orange-500">
          English Version:
        </h2>
        <p className="mb-4">
          Azadi Ka Amrit Mahotsav is a grand celebration of India's 75 years of independence — a tribute to our freedom fighters, a reflection of our achievements, and a vision for the future.
        </p>
        <p className="mb-4">
          When India broke the chains of 200 years of British rule in 1947, it wasn't just a political revolution — it was a cultural rebirth, a civilizational reawakening. From the non-violence of Mahatma Gandhi to the fierce resistance of Bhagat Singh and Subhas Chandra Bose, India's freedom struggle is a saga of courage, sacrifice, and unity.
        </p>
        <p className="mb-4">
          This Mahotsav is a government-led initiative to connect citizens — especially youth — with the spirit of patriotism. Events like ‘Har Ghar Tiranga’, ‘Freedom Yatras’, and ‘Vande Bharat’ programs are uniting Indians from all walks of life.
        </p>
        <p className="mb-4">
          In these 75 years, India has risen as a global power — leading in technology, space exploration, digital innovation, and democratic values. The Amrit Mahotsav reminds us of the potential we carry and the responsibilities we bear to shape a better tomorrow.
        </p>
        <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-600">
          “Freedom is not just a right — it's a responsibility.”
        </blockquote>
      </section>
    </div>
  );
}
