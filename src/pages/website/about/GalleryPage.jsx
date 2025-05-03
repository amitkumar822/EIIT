import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Building2, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";

const gallerySections = [
  {
    title: "EIIT Facilities Member.",
    icon: <Building2 className="text-blue-600" size={24} />,
    images: Array.from({ length: 35 }, (_, i) => ({
      id: i + 1,
      src: `/gallery/human/${i + 1}.jpg`,
      alt: `${i + 1}`,
    })),
  },
  {
    title: "Academic Informations",
    icon: <BookOpen className="text-green-600" size={24} />,
    images: Array.from({ length: 16 }, (_, i) => ({
      id: i + 1,
      src: `/gallery/banner/${i + 1}.jpg`,
      alt: `banner ${i + 1}`,
    })),
  },
  {
    title: "Academic Activities",
    icon: <Users className="text-purple-600" size={24} />,
    images: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      src: `/gallery/video/${i + 1}.mp4`,
      alt: `video ${i + 1}`,
      isVideo: true,
    })),
  },
];

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewAll, setViewAll] = useState({});

  return (
    <div className="bg-[url('/svg/bg.svg')] bg-cover bg-no-repeat min-h-screen py-10 px-4 sm:px-10">
      {/* Hero section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-[#e0f7fa] via-[#e1f5fe] to-[#f3e5f5] px-4 md:px-10">
        {/* Background SVG Blob */}
        <svg
          className="absolute -top-20 -left-20 w-[400px] opacity-30 rotate-12"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#a78bfa"
            d="M440.5,325Q407,400,325,425Q243,450,180.5,400Q118,350,95,275Q72,200,110.5,127.5Q149,55,225,70Q301,85,358.5,127.5Q416,170,442.5,235Q469,300,440.5,325Z"
          />
        </svg>

        {/* Another SVG Right Side */}
        <svg
          className="absolute bottom-0 right-0 w-[300px] opacity-20"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#67e8f9"
            d="M440.5,325Q407,400,325,425Q243,450,180.5,400Q118,350,95,275Q72,200,110.5,127.5Q149,55,225,70Q301,85,358.5,127.5Q416,170,442.5,235Q469,300,440.5,325Z"
          />
        </svg>

        {/* Hero Content */}
        <motion.div
          className="text-center max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Explore the <span className="text-purple-600">EIIT Gallery</span>
          </h1>
          <p className="text-lg text-gray-600">
            Discover moments, memories, and milestones from our vibrant campus
            life.
          </p>
        </motion.div>
      </section>

      {/* gallery section photo and image */}
      {gallerySections.map((section, idx) => (
        <div key={idx} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            {section.icon}
            <h2 className="text-xl font-semibold text-gray-700">
              {section.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {(viewAll[section.title]
              ? section.images
              : section.images.slice(0, 8)
            ).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer overflow-hidden rounded-xl shadow-md"
                onClick={() => setSelectedItem(item)}
              >
                {item.isVideo ? (
                  <video
                    src={item.src}
                    className="w-full h-40 object-cover cursor-pointer"
                    muted
                    loop
                    onClick={(e) => {
                      e.currentTarget.play();
                      e.currentTarget.setAttribute("controls", true);
                    }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-40 object-cover"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {section.images.length > 6 && (
            <div className="text-center mt-4">
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={() =>
                  setViewAll((prev) => ({
                    ...prev,
                    [section.title]: !prev[section.title],
                  }))
                }
              >
                {viewAll[section.title] ? "Show Less" : "View All"}
              </Button>
            </div>
          )}
        </div>
      ))}

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedItem?.isVideo ? (
            <video
              src={selectedItem.src}
              className="w-full h-full"
              controls
              autoPlay
            />
          ) : (
            <img
              src={selectedItem?.src}
              alt={selectedItem?.alt}
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryPage;
