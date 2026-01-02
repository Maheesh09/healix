import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: heroSlide1,
    title: "Smart Health Dashboard",
    subtitle: "View all your health metrics in one place",
  },
  {
    image: heroSlide2,
    title: "Professional Healthcare",
    subtitle: "Trusted by healthcare professionals worldwide",
  },
  {
    image: heroSlide3,
    title: "Family Health Tracking",
    subtitle: "Keep your whole family healthy together",
  },
];

interface HeroSliderProps {
  autoPlayInterval?: number;
}

export const HeroSlider = ({ autoPlayInterval = 4000 }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative mx-auto mt-12 w-full max-w-4xl">
      {/* Slider container */}
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted shadow-2xl lg:rounded-3xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="h-full w-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            {/* Caption */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <h3 className="font-display text-xl font-bold md:text-2xl">
                {slides[currentSlide].title}
              </h3>
              <p className="mt-1 text-sm text-primary-foreground/80 md:text-base">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/80 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-card hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/80 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-card hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              currentSlide === index
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-3 flex justify-center">
        <div className="h-1 w-32 overflow-hidden rounded-full bg-muted">
          <motion.div
            key={currentSlide}
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
};
