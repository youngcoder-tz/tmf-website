"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  Clock,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/* -------------------------------------------
   ENHANCED THUMBNAIL GRID
------------------------------------------- */
interface ThumbnailGridProps {
  programs: any[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  scrollToActiveCard?: (index: number) => void;
  isAutoPlaying?: boolean;
  onToggleAutoPlay?: () => void;
}

const ThumbnailGrid = ({
  programs,
  activeIndex,
  setActiveIndex,
  scrollToActiveCard,
  isAutoPlaying = true,
  onToggleAutoPlay,
}: ThumbnailGridProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailRefs.current[activeIndex] && containerRef.current) {
      const element = thumbnailRefs.current[activeIndex];
      const container = containerRef.current;

      if (element) {
        const containerWidth = container.offsetWidth;
        const containerScrollLeft = container.scrollLeft;
        const elementLeft = element.offsetLeft;
        const elementRight = elementLeft + element.offsetWidth;

        // If element is partially or fully hidden on the right
        if (elementRight > containerScrollLeft + containerWidth - 20) {
          container.scrollTo({
            left: elementRight - containerWidth + 40,
            behavior: "smooth",
          });
        }
        // If element is partially or fully hidden on the left
        else if (elementLeft < containerScrollLeft + 20) {
          container.scrollTo({
            left: elementLeft - 40,
            behavior: "smooth",
          });
        }
      }
    }
  }, [activeIndex]);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    if (scrollToActiveCard) {
      scrollToActiveCard(index);
    }
  };

  const handleNextClick = () => {
    const nextIndex = (activeIndex + 1) % programs.length;
    setActiveIndex(nextIndex);
    if (scrollToActiveCard) {
      scrollToActiveCard(nextIndex);
    }
  };

  const handlePrevClick = () => {
    const prevIndex = (activeIndex - 1 + programs.length) % programs.length;
    setActiveIndex(prevIndex);
    if (scrollToActiveCard) {
      scrollToActiveCard(prevIndex);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNextClick();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevClick();
      } else if (e.key === " ") {
        e.preventDefault();
        if (onToggleAutoPlay) {
          onToggleAutoPlay();
        }
      } else if (e.key >= "1" && e.key <= "6") {
        e.preventDefault();
        const index = parseInt(e.key) - 1;
        if (index < programs.length) {
          handleThumbnailClick(index);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, programs.length, onToggleAutoPlay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full flex flex-col items-center gap-6"
    >
      {/* Auto-play control */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleAutoPlay}
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
            "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm",
            "border border-gray-200 dark:border-gray-700",
            "text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-800",
            "shadow-sm hover:shadow-md",
          )}
          aria-label={isAutoPlaying ? "Pause auto-play" : "Play auto-play"}
        >
          {isAutoPlaying ? (
            <>
              <Pause className="w-3 h-3" />
              Auto-playing
            </>
          ) : (
            <>
              <Play className="w-3 h-3" />
              Play auto
            </>
          )}
        </button>

        {/* Active indicator */}
        <div className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {activeIndex + 1}
          </span>
          <span className="mx-1.5 text-gray-400">/</span>
          <span>{programs.length}</span>
        </div>
      </div>

      {/* Navigation Container */}
      <div className="relative w-full flex justify-center items-center gap-2">
        {/* Previous Button */}
        <motion.button
          onClick={handlePrevClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Previous program"
        >
          <ChevronLeft className="w-4 h-4" />
        </motion.button>

        {/* Liquid Glass Dock */}
        <div
          ref={containerRef}
          className={cn(
            "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-2xl",
            "bg-white/80 dark:bg-slate-900/50 backdrop-blur-2xl backdrop-saturate-150",
            "border border-gray-200 dark:border-white/10",
            "shadow-lg shadow-gray-200/50 dark:shadow-black/30",
            "relative overflow-x-auto custom-scrollbar-hide",
            "max-w-full transition-all duration-300",
            isHovering && "shadow-xl shadow-gray-300/50 dark:shadow-black/40",
          )}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Glass highlight */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-0 right-0 h-full bg-linear-to-b from-white/60 to-transparent dark:from-white/20 opacity-50" />
          </div>

          {/* Thumbnails */}
          <div className="flex items-center gap-2 sm:gap-3 px-2">
            {programs.map((program, index) => (
              <motion.button
                key={program.id}
                ref={(el) => {
                  thumbnailRefs.current[index] = el;
                }}
                onClick={() => handleThumbnailClick(index)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "relative overflow-hidden rounded-xl transition-all duration-300",
                  "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0",
                  "border-2",
                  activeIndex === index
                    ? "border-blue-500 shadow-lg shadow-blue-500/30 scale-110 z-10"
                    : "border-gray-300 dark:border-gray-700 hover:scale-105",
                  isHovering && "transition-transform duration-200",
                )}
                aria-label={`Select ${program.title}, program ${index + 1} of ${programs.length}`}
                aria-current={activeIndex === index ? "true" : "false"}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                  />
                </div>

                {/* Active glass overlay */}
                {activeIndex === index && (
                  <>
                    <motion.div
                      layoutId="activeThumbGlow"
                      className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm"
                      initial={false}
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-blue-400/60 rounded-xl"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </>
                )}

                {/* Subtle gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                {/* Index badge with tooltip */}
                <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-black/70 dark:bg-black/80 backdrop-blur flex items-center justify-center group">
                  <span className="text-[10px] font-bold text-white">
                    {index + 1}
                  </span>
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-black/90 dark:bg-gray-900 backdrop-blur-sm text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
                    {program.title}
                    <div className="absolute top-full right-2 -mt-1 w-2 h-2 bg-black/90 dark:bg-gray-900 rotate-45" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <motion.button
          onClick={handleNextClick}
          whileHover={{ scale: 1.1, rotate: 4 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "hidden md:flex items-center justify-center",
            "w-10 h-10 sm:w-12 sm:h-12 rounded-xl",
            "bg-linear-to-br from-blue-500 via-indigo-500 to-purple-500",
            "text-white shadow-lg shadow-blue-500/30",
          )}
          aria-label="Next program"
        >
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Mobile navigation */}
        <div className="flex md:hidden items-center gap-2 ml-2">
          <button
            onClick={handlePrevClick}
            className="w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 flex items-center justify-center shadow-sm"
            aria-label="Previous program"
          >
            <ChevronLeft className="w-3 h-3 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={handleNextClick}
            className="w-8 h-8 rounded-full bg-blue-500/90 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center shadow-sm"
            aria-label="Next program"
          >
            <ChevronRight className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

/* -------------------------------------------
   ENHANCED PROGRAM CARD
------------------------------------------- */
interface ProgramCardProps {
  program: any;
  index: number;
  isActive: boolean;
  onActivate?: () => void;
}

const ProgramCard = React.forwardRef<HTMLDivElement, ProgramCardProps>(
  ({ program, index, isActive, onActivate }, ref) => {
    const statusConfig: any = {
      open: {
        label: "Open",
        className: "bg-emerald-500/90 shadow-emerald-500/30",
      },
      closing_soon: {
        label: "Closing Soon",
        className: "bg-amber-500/90 shadow-amber-500/30",
      },
      upcoming: {
        label: "Upcoming",
        className: "bg-blue-500/90 shadow-blue-500/30",
      },
    };

    const status = statusConfig[program.status] || statusConfig.open;

    // Handle card click to activate
    const handleCardClick = () => {
      if (onActivate) {
        onActivate();
      }
    };

    return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{
          opacity: isActive ? 1 : 0.7,
          y: 0,
          scale: isActive ? 1 : 0.98,
          borderColor: isActive
            ? "rgb(59, 130, 246, 0.5)"
            : "rgba(209, 213, 219, 0.5)",
        }}
        transition={{
          delay: index * 0.08,
          duration: 0.6,
          ease: "easeOut",
          borderColor: { duration: 0.3 },
        }}
        onClick={handleCardClick}
        className={cn(
          "group relative flex flex-col min-h-130 w-[90vw] sm:w-95 lg:w-105 shrink-0 rounded-[2rem] overflow-hidden cursor-pointer",
          "bg-white/90 dark:bg-gray-900/80 backdrop-blur-xl",
          "border-2",
          isActive
            ? "border-blue-500/60 shadow-2xl shadow-blue-500/30 ring-2 ring-blue-500/20"
            : "border-gray-200 dark:border-gray-800",
          "shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-900/20",
          "transition-all duration-300 will-change-transform hover:-translate-y-1",
        )}
        whileHover={{ scale: isActive ? 1.01 : 1.02 }}
        whileTap={{ scale: 0.99 }}
      >
        {/* Active indicator pulse */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-[2rem] border-2 border-blue-500/40"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Gradient Border on Hover */}
        <div
          className={cn(
            "absolute inset-0 rounded-[2rem] pointer-events-none transition-opacity duration-500",
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
            "bg-linear-to-br from-blue-500/20 via-transparent to-emerald-500/20",
          )}
        />

        {/* IMAGE HEADER */}
        <div className="relative h-60 overflow-hidden">
          {/* Status */}
          <div className="absolute top-4 left-4 z-20">
            <Badge
              className={cn(
                "px-3 py-1 text-xs font-bold text-white backdrop-blur-md border-0 shadow-lg",
                status.className,
                isActive && "ring-2 ring-white/50",
              )}
            >
              {status.label}
            </Badge>
          </div>

          {/* Category */}
          <div className="absolute top-4 right-4 z-20">
            <span
              className={cn(
                "px-3 py-1 rounded-full backdrop-blur-md text-white text-[10px] uppercase tracking-widest border",
                isActive
                  ? "bg-blue-500/50 border-blue-400/60"
                  : "bg-black/60 dark:bg-black/70 border-white/30",
              )}
            >
              {program.category}
            </span>
          </div>

          <Image
            fill
            src={program.image}
            alt={program.title}
            className={cn(
              "object-cover transition-all duration-700",
              isActive ? "scale-105" : "group-hover:scale-110",
            )}
            priority={isActive || index < 3}
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 380px, 420px"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          {/* Active indicator in image */}
          {isActive && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-blue-500 to-emerald-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          )}

          {/* Partner */}
          {program.partner && (
            <div className="absolute bottom-3 left-4 z-20 text-white/90 text-xs">
              <span className="opacity-80 uppercase tracking-widest text-[10px]">
                Supported by
              </span>
              <div className="font-semibold">{program.partner}</div>
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col flex-1 p-6">
          <Link
            href={`/grants/${program.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="hover:no-underline"
          >
            <h3
              className={cn(
                "text-xl font-bold leading-snug transition-colors duration-300 mb-2",
                isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400",
              )}
            >
              {program.title}
            </h3>
          </Link>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-2">
            {program.short_description}
          </p>

          {/* META */}
          <div className="mt-6 grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold mb-1">
                Funding
              </div>
              <div className="flex items-center text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                <DollarSign
                  className={cn(
                    "w-4 h-4 mr-1.5 transition-colors",
                    isActive ? "text-emerald-500" : "text-emerald-600",
                  )}
                />
                {program.amount}
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold mb-1">
                Deadline
              </div>
              <div className="flex items-center sm:text-sm text-xs font-semibold text-gray-800 dark:text-gray-200">
                <Clock
                  className={cn(
                    "w-4 h-4 mr-1.5 transition-colors",
                    isActive ? "text-blue-500" : "text-blue-600",
                  )}
                />
                {program.deadline}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto pt-6">
            <Link
              href={`/grants/${program.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="block"
            >
              <Button
                className={cn(
                  "w-full h-12 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg",
                  isActive
                    ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:scale-[1.02]"
                    : "bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-blue-600 dark:hover:bg-blue-500",
                )}
              >
                {program.status === "upcoming" ? "View Details" : "Apply Now"}
                <ArrowRight
                  className={cn(
                    "ml-2 w-4 h-4 transition-transform duration-300",
                    isActive && "group-hover:translate-x-2",
                  )}
                />
              </Button>
            </Link>
          </div>
        </div>
      </motion.article>
    );
  },
);

ProgramCard.displayName = "ProgramCard";

/* -------------------------------------------
   MAIN SECTION WITH ENHANCED FUNCTIONALITY
------------------------------------------- */

export function ProgramShowcase({ data }: { data: any }) {
  if (!data?.enabled) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll to active card with auto-scroll for hidden cards
  const scrollToActiveCard = useCallback((index: number) => {
    if (scrollContainerRef.current && cardRefs.current[index]) {
      const container = scrollContainerRef.current;
      const card = cardRefs.current[index];

      if (card) {
        const containerWidth = container.offsetWidth;
        const containerScrollLeft = container.scrollLeft;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const cardRight = cardLeft + cardWidth;

        // Calculate if card is partially or fully hidden
        const isPartiallyVisible =
          (cardLeft >= containerScrollLeft &&
            cardLeft <= containerScrollLeft + containerWidth) ||
          (cardRight >= containerScrollLeft &&
            cardRight <= containerScrollLeft + containerWidth);

        const isFullyVisible =
          cardLeft >= containerScrollLeft &&
          cardRight <= containerScrollLeft + containerWidth;

        // Only scroll if card is not fully visible
        if (!isFullyVisible) {
          // Determine scroll position
          let targetScroll: number;

          if (cardLeft < containerScrollLeft) {
            // Card is hidden on the left
            targetScroll = cardLeft - 20;
          } else {
            // Card is hidden on the right
            targetScroll = cardRight - containerWidth + 20;
          }

          // Smooth scroll to target
          container.scrollTo({
            left: targetScroll,
            behavior: "smooth",
          });
        }
      }
    }
  }, []);

  // Handle card activation
  const handleCardActivate = useCallback(
    (index: number) => {
      setActiveIndex(index);
      scrollToActiveCard(index);
      setIsUserInteracting(true);

      // Reset interaction timer
      setTimeout(() => setIsUserInteracting(false), 3000);
    },
    [scrollToActiveCard],
  );

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isUserInteracting) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const nextIndex = (prev + 1) % data.programs.length;
          // Use setTimeout to ensure DOM is updated before scrolling
          setTimeout(() => scrollToActiveCard(nextIndex), 10);
          return nextIndex;
        });
      }, 4000);
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [
    isAutoPlaying,
    isUserInteracting,
    data.programs.length,
    scrollToActiveCard,
  ]);

  // Initialize refs array
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, data.programs.length);
  }, [data.programs.length]);

  // Keyboard navigation for the entire section
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleCardActivate((activeIndex + 1) % data.programs.length);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleCardActivate(
          (activeIndex - 1 + data.programs.length) % data.programs.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, data.programs.length, handleCardActivate]);

  // Handle mouse events for auto-play
  const handleMouseEnter = () => {
    setIsUserInteracting(true);
  };

  const handleMouseLeave = () => {
    setIsUserInteracting(false);
  };

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background with light/dark support */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.1] pointer-events-none" />

      {/* Ambient glows with light/dark support */}
      <div className="absolute -left-40 top-1/3 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -right-40 bottom-1/3 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl" />

      {/* Top gradient fade */}
      <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-gray-50/90 dark:from-gray-950/90 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20">
              {data.header.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {data.header.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {data.header.description}
            </p>
          </div>

          <Link href={data.header.view_all_url}>
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-base lg:text-lg"
            >
              {data.header.view_all_label}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* THUMBNAIL GRID */}
        <div className="mb-8">
          <ThumbnailGrid
            programs={data.programs}
            activeIndex={activeIndex}
            setActiveIndex={handleCardActivate}
            scrollToActiveCard={scrollToActiveCard}
            isAutoPlaying={isAutoPlaying}
            onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
          />
        </div>

        {/* SCROLLER WITH ENHANCED CARDS */}
        <div
          ref={scrollContainerRef}
          className="relative -mx-4 px-4 overflow-x-auto pb-12 custom-scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex gap-6 w-max px-4">
            {data.programs.map((program: any, idx: number) => (
              <ProgramCard
                key={program.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                program={program}
                index={idx}
                isActive={activeIndex === idx}
                onActivate={() => handleCardActivate(idx)}
              />
            ))}

            {/* VIEW ALL CARD */}
            <Link
              href={data.header.view_all_url}
              className="group flex items-center justify-center
                         min-h-130 w-[90vw] sm:w-95 lg:w-105
                         rounded-[2rem] border-2 border-dashed border-gray-300 dark:border-gray-700
                         hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 transition-all duration-300"
            >
              <div className="text-center p-8">
                <div
                  className="w-16 h-16 mx-auto rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6
                                group-hover:bg-blue-500 group-hover:text-white transition-all duration-300"
                >
                  <ArrowRight className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                  View All Grants
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore all available funding opportunities
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {data.programs.map((_: any, idx: number) => (
            <button
              key={idx}
              onClick={() => handleCardActivate(idx)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeIndex === idx
                  ? "w-8 bg-blue-500 dark:bg-blue-400"
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600",
              )}
              aria-label={`Go to program ${idx + 1}`}
            />
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>
            Use ← → arrow keys, click thumbnails, or let auto-play guide you
          </p>
          <p className="mt-1">Click any card to pause auto-play and explore</p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-gray-50/90 dark:from-gray-950/90 to-transparent" />
    </section>
  );
}
