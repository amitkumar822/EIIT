import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Circle,
  CircleDot,
  Pause,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ********************************************************
export function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const animation = useMemo(() => {
    // Change animation on each slide
    return animations[index % animations.length];
  }, [index]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => navigate(1), 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const navigate = (dir) => {
    setDirection(dir);
    setIndex(
      (prev) => (prev + dir + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl">
      <div
        className="relative aspect-video w-full bg-gray-200"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={{
              enter: animation.enter,
              center: animation.center,
              exit: animation.exit,
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7 }}
            className="absolute w-full h-full"
          >
            <img
              src={carouselImages[index]?.src}
              alt={carouselImages[index]?.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Nav Buttons */}
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white hover:text-white/70 z-10 cursor-pointer"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          onClick={() => navigate(1)}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white hover:text-white/70 z-10 cursor-pointer"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)}>
            {i === index ? (
              <CircleDot className="h-3 w-3 text-white" />
            ) : (
              <Circle className="h-3 w-3 text-white/50 cursor-pointer" />
            )}
          </button>
        ))}
      </div>

      {/* Animation label */}
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs z-10">
        Animation:{" "}
        <span className="capitalize text-green-300">{animation.name}</span>
      </div>
    </div>
  );
}

// Images
const carouselImages = [
  { src: "/Banner_Image/Eiit-Seminar.jpg", alt: "Eiit-Seminar" },
  { src: "/Banner_Image/Green_environment.jpg", alt: "Cityscape" },
  { src: "/Banner_Image/Green_environment2.jpg", alt: "Green_environment" },
  { src: "/Banner_Image/Seminar_award.jpg", alt: "Award" },
  { src: "/Banner_Image/Seminar.jpg", alt: "Seminar" },
  { src: "/Banner_Image/Speeker.jpg", alt: "Speaker" },
];

// Animation variants
const animations = [
  {
    name: "cube",
    enter: (dir) => ({ x: dir > 0 ? 1000 : -1000, opacity: 0, scale: 0.8 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -1000 : 1000, opacity: 0, scale: 0.8 }),
  },
  {
    name: "fade",
    enter: () => ({ opacity: 0 }),
    center: { opacity: 1 },
    exit: () => ({ opacity: 0 }),
  },
  {
    name: "slide-up",
    enter: () => ({ y: 100, opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: () => ({ y: -100, opacity: 0 }),
  },
  {
    name: "zoom",
    enter: () => ({ scale: 0.6, opacity: 0 }),
    center: { scale: 1, opacity: 1 },
    exit: () => ({ scale: 0.6, opacity: 0 }),
  },
];
