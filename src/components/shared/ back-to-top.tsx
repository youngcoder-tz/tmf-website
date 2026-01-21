// components/ui/back-to-top.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ChevronUp, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(Math.min(100, progress));
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (scrollProgress > 80) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-40"
          >
            {/* Circular Progress Background */}
            <div className="relative">
              <svg className="w-14 h-14 -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-gray-200 dark:text-gray-800"
                />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-blue-500"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * scrollProgress) / 100}
                  style={{ transition: "stroke-dashoffset 0.1s linear" }}
                />
              </svg>

              {/* Button */}
              <Button
                size="icon"
                onClick={scrollToTop}
                className={cn(
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "h-12 w-12 rounded-full shadow-xl",
                  "bg-linear-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                  "transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                )}
              >
                {scrollProgress > 80 ? (
                  <Rocket className="h-5 w-5 text-white animate-bounce" />
                ) : (
                  <ArrowUp className="h-5 w-5 text-white" />
                )}
              </Button>

              {/* Progress Percentage */}
              {scrollProgress > 10 && (
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {Math.round(scrollProgress)}%
                </div>
              )}
            </div>

            {/* Tooltip */}
            <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-gray-900 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap">
                Back to top
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-1/2 w-2 h-6 rounded-sm"
              style={{
                backgroundColor: [
                  "#3b82f6",
                  "#8b5cf6",
                  "#10b981",
                  "#f59e0b",
                  "#ef4444",
                ][i % 5],
              }}
              initial={{
                x: Math.random() * 200 - 100,
                y: 0,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                x: Math.random() * 400 - 200,
                y: window.innerHeight,
                rotate: Math.random() * 360,
                opacity: 0,
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: i * 0.02,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}

// Variant with different styles
export function BackToTopFloating() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Button
            className="group rounded-full px-6 shadow-2xl bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChevronUp className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
