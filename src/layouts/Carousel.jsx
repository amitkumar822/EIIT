import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Circle,
  CircleDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
const images = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8VGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1669750822199-fc9114724dd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww",

  "https://plus.unsplash.com/premium_photo-1690494958786-2ed9201fa251?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2l0eXNjYXBlfGVufDB8fDB8fHww",
];

const animations = [
  {
    key: "square",
    variants: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.2 },
    },
  },
  {
    key: "cube",
    variants: {
      initial: { rotateY: -90, opacity: 0 },
      animate: { rotateY: 0, opacity: 1 },
      exit: { rotateY: 90, opacity: 0 },
    },
  },
  {
    key: "circle",
    variants: {
      initial: { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
      animate: { clipPath: "circle(150% at 50% 50%)", opacity: 1 },
      exit: { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
    },
  },
  {
    key: "horizontal",
    variants: {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -100, opacity: 0 },
    },
  },
  {
    key: "vertical",
    variants: {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -100, opacity: 0 },
    },
  },
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setAnimationIndex((prev) => (prev + 1) % animations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setAnimationIndex((prev) => (prev + 1) % animations.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setAnimationIndex(
      (prev) => (prev - 1 + animations.length) % animations.length
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto p-4">
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index] + animations[animationIndex].key}
            src={images[index]}
            alt="carousel"
            className="absolute w-full h-full object-cover z-10"
            variants={animations[animationIndex].variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Dot indicators on image */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-md">
          {images.map((_, i) => (
            <span
              key={i}
              className={clsx(
                "block w-3 h-3 rounded-full transition-all duration-300",
                i === index ? "bg-white scale-125" : "bg-gray-500"
              )}
            ></span>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4 z-30">
        <Button variant="ghost" size="icon" onClick={prevSlide}>
          <ArrowLeft className="w-6 h-6 text-white" />
        </Button>
        <Button variant="ghost" size="icon" onClick={nextSlide}>
          <ArrowRight className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

// ********************************************************
export function AdvancedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const intervalRef = useRef(null);

  // Rotate through animations
  useEffect(() => {
    if (animations2.length === 0) return;

    const animationInterval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % animations2.length);
    }, 10000);

    return () => clearInterval(animationInterval);
  }, [animations2]); // depends on animations2

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        navigate(1);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      if (newIndex < 0) return carouselImages.length - 1;
      if (newIndex >= carouselImages.length) return 0;
      return newIndex;
    });
  };

  const goToIndex = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!animations2.length) return null;

  const currentAnim =
    animations2.length > 0
      ? animations2[currentAnimation] ?? animations2[0]
      : null;

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl">
      {/* Carousel container */}
      <div
        className="relative aspect-video w-full bg-gray-100"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={{
              enter: (dir) => currentAnim.enter(dir),
              center: currentAnim.center,
              exit: (dir) => currentAnim.exit(dir),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              duration: 0.7,
            }}
            className="absolute w-full h-full"
          >
            <img
              src={carouselImages[currentIndex]?.src}
              alt={carouselImages[currentIndex]?.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 hover:bg-black/70 text-white h-10 w-10 cursor-pointer hover:text-green-200"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 hover:bg-black/70 text-white h-10 w-10 cursor-pointer hover:text-green-200"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Play/pause button */}
        {/* <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="absolute left-1/2 -translate-x-1/2 bottom-4 z-10 rounded-full bg-black/50 hover:bg-black/70 text-white h-10 w-10"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button> */}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className="p-1 focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex ? (
              <CircleDot className="h-3 w-3 text-white" />
            ) : (
              <Circle className="h-3 w-3 text-white/50" />
            )}
          </button>
        ))}
      </div>

      {/* Animation indicator (for demo purposes) */}
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs z-10">
        Animation: {animations2[currentAnimation].name}
      </div>
    </div>
  );
}

const carouselImages = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1669750822199-fc9114724dd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww",
    alt: "Nature landscape",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1690494958786-2ed9201fa251?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2l0eXNjYXBlfGVufDB8fDB8fHww",
    alt: "Cityscape",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8VGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Technology",
  },
  {
    id: 4,
    src: "https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVvcGxlfGVufDB8fDB8fHww",
    alt: "People",
  },
];

// Animation variants
const animations2 = [
  {
    name: "cube",
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      rotateY: direction > 0 ? 90 : -90,
      scale: 0.5,
    }),
    center: { x: 0, rotateY: 0, scale: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      rotateY: direction > 0 ? -90 : 90,
      scale: 0.5,
    }),
  },
  {
    name: "circle",
    enter: () => ({
      scale: 0,
      opacity: 0,
      clipPath: "circle(0% at 50% 50%)",
    }),
    center: {
      scale: 1,
      opacity: 1,
      clipPath: "circle(100% at 50% 50%)",
    },
    exit: () => ({
      scale: 0,
      opacity: 0,
      clipPath: "circle(0% at 50% 50%)",
    }),
  },
  {
    name: "squares",
    enter: () => ({
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    }),
    center: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    exit: () => ({
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    }),
  },
  {
    name: "vertical",
    enter: () => ({
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    }),
    center: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    exit: () => ({
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    }),
  },
  {
    name: "puzzle",
    enter: () => ({
      clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    }),
    center: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    exit: () => ({
      clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    }),
  },
];
