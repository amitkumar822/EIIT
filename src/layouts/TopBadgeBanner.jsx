import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

const badges = [
  {
    title: "आजादी का अमृत महोत्सव",
    subtitle: "75 Years of India's Independence",
    link: "/amrit-mahotsav-article",
  },
  {
    title: "FIT INDIA MOVEMENT",
    link: "/fit-india",
    svg: (
      <img
        src="https://mgcub.ac.in/images/fitindia.png"
        alt=""
      />
    ),
  },
  {
    title: "राष्ट्रीय शिक्षा नीति 2020",
    link: "/national-education-policy",
    subtitle: "National Education Policy 2020",
  },
  {
    title: "Ek Bharat",
    link: "/ek-bharat",
    svg: (
      <div className="flex items-center space-x-2">
        <img
          src="https://mgcub.ac.in/images/ebsb.png"
          alt="Ek Bharat Shreshtha Bharat"
        />
      </div>
    ),
  },
  {
    title: "G20",
    link: "/g-20-india",
    svg: (
      <div className="flex items-center space-x-2">
        <img
          src="https://mgcub.ac.in/images/G20_logo.png"
          alt="G20 India 2023"
          className="w-36 h-36 object-contain"
        />
      </div>
    ),
  },
];

export default function TopBadgeBanner() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to={badge.link}>
            <Card
              className={`min-h-[100px] max-h-20 flex items-center justify-center text-center rounded-xl shadow-md shadow-[#569a1b] cursor-pointer bg-gradient-to-b from-orange-200 to-amber-50 hover:from-amber-50 hover:to-orange-200 ease-in-out duration-300`}
            >
              <CardContent className="p-3 flex flex-col justify-center items-center">
                {badge.svg ? (
                  badge.svg
                ) : (
                  <div>
                    <h3 className="md:text-lg text-sm font-bold text-indigo-900 leading-tight">
                      {badge.title}
                    </h3>
                    {badge.subtitle && (
                      <p
                        className={`md:text-md text-xs mt-1 font-medium text-indigo-900 leading-snug`}
                      >
                        {badge.subtitle}
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
