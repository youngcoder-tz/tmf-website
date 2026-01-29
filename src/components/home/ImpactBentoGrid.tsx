"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Globe,
  Zap,
  Target,
  Shield,
  Users,
  ArrowRight,
  Code,
  Cpu,
  CheckCircle,
  TrendingUp,
  FileText,
  Award,
  Lock,
  ChevronRight,
  Sparkles,
  Eye,
  ExternalLink,
  MapPin,
  Network,
  ShieldCheck,
  BarChart,
  Clock,
  UsersRound,
  Trophy,
  HeartHandshake,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getIconComponent } from "@/lib/icon-map";
import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// Enhanced icon map with fallback
const IconMap: Record<string, any> = {
  Globe,
  Zap,
  Target,
  Shield,
  Users,
  Code,
  Cpu,
  CheckCircle,
  TrendingUp,
  FileText,
  Award,
  Lock,
  ChevronRight,
  Sparkles,
  Eye,
  ExternalLink,
  MapPin,
  Network,
  ShieldCheck,
  BarChart,
  Clock,
  UsersRound,
  Trophy,
  HeartHandshake,
};

interface BentoCardProps {
  card: any;
  index: number;
  onHover: (id: string | null) => void;
  activeCard: string | null;
}

const BentoCard = ({ card, index, onHover, activeCard }: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  // Enhanced mouse spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gradientRotation = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    gradientRotation.set((e.clientX / width) * 360);
  };

  // Get icon component
  const Icon = card.icon?.name
    ? getIconComponent(card.icon.name)
    : IconMap[card.icon?.name] || Globe;

  // Enhanced theme classes with glass morphism
  const themeClasses = {
    light:
      "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-lg shadow-black/5",
    dark: "bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-sm border border-white/10 shadow-2xl shadow-blue-900/10",
    gradient: `bg-gradient-to-br ${card.theme?.gradient} backdrop-blur-sm border border-white/20 shadow-xl`,
  };

  // Enhanced icon backgrounds with subtle glow
  const iconBgClasses = {
    blue: "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25",
    amber:
      "bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25",
    emerald:
      "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25",
    red: "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25",
    white: "bg-white text-gray-900 shadow-lg shadow-white/25",
  };

  // Enhanced hover effects
  const hoverEffects = {
    scale: "hover:scale-[1.02] hover:shadow-2xl",
    lift: "hover:-translate-y-2 hover:shadow-xl",
    glow: "hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/20",
    slide: "hover:translate-x-2 hover:shadow-xl",
  };

  // Render enhanced visuals
  const renderVisuals = () => {
    switch (card.visual?.type) {
      case "background_image":
        return (
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card.visual.url})`,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-linear-to-t dark:from-black dark:via-black from-white via-white to-transparent"
              animate={{ opacity: isHovered ? 0.8 : 0.6 }}
              transition={{ duration: 0.3 }}
            />
            {card.visual.blur && (
              <motion.div
                className="absolute inset-0 backdrop-blur-sm"
                animate={{ opacity: isHovered ? 1 : 0.6 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        );

      case "code_snippet":
        return (
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900"
              animate={{
                background: [
                  "linear-gradient(45deg, #0f172a, #000000, #0f172a)",
                  "linear-gradient(135deg, #0f172a, #000000, #0f172a)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <motion.div
              className="absolute right-0 bottom-0 p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={
                isHovered ? { opacity: 1, x: 0 } : { opacity: 0.5, x: 20 }
              }
            >
              <div className="font-mono text-xs text-emerald-400/80 bg-black/30 rounded-lg p-4 backdrop-blur-sm border border-emerald-400/10">
                <pre className="whitespace-pre-wrap">{card.visual.content}</pre>
                <motion.div
                  className="h-4 w-1 bg-emerald-400 ml-2 mt-2"
                  animate={{ height: ["16px", "24px", "16px"] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        );

      case "abstract_shape":
        return (
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            />
          </div>
        );

      case "avatars":
        return (
          <div className="absolute bottom-6 right-6 z-0">
            <motion.div
              className="flex -space-x-3"
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            >
              {card.content?.community?.avatars?.map(
                (avatar: string, i: number) => (
                  <motion.div
                    key={i}
                    className="w-12 h-12 rounded-full border-3 border-white/80 dark:border-gray-900 overflow-hidden shadow-lg"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <img
                      src={avatar}
                      alt={`Community member ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ),
              )}
              <motion.div
                className="w-12 h-12 rounded-full border-3 border-white/80 dark:border-gray-900 bg-linear-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center text-sm font-bold shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                {card.content?.community?.count}
              </motion.div>
            </motion.div>
          </div>
        );

      default:
        return (
          <div className="absolute inset-0 z-0 bg-linear-to-br from-white/50 to-transparent dark:from-black/50" />
        );
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              },
            }
          : {}
      }
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      onMouseMove={(e) => {
        if (card.interaction?.spotlight) handleMouseMove(e);
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(card.id);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover(null);
      }}
      className={cn(
        "group relative overflow-hidden rounded-[2.5rem] border transition-all duration-500",
        "hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/20",
        card.layout?.col_span?.desktop,
        card.layout?.row_span?.desktop,
        themeClasses[card.theme?.type as keyof typeof themeClasses] ||
          themeClasses.light,
        hoverEffects[
          card.interaction?.hover_effect as keyof typeof hoverEffects
        ] || hoverEffects.scale,
      )}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-[2.5rem] p-0.5"
        style={{
          background: useMotionTemplate`
            conic-gradient(
              from ${gradientRotation}deg at 50% 50%,
              ${
                card.theme?.type === "dark"
                  ? "rgba(59,130,246,0.3)"
                  : card.theme?.type === "gradient"
                    ? "rgba(255,255,255,0.4)"
                    : "rgba(59,130,246,0.1)"
              } 0deg,
              transparent 60deg,
              transparent 300deg,
              ${
                card.theme?.type === "dark"
                  ? "rgba(59,130,246,0.3)"
                  : card.theme?.type === "gradient"
                    ? "rgba(255,255,255,0.4)"
                    : "rgba(59,130,246,0.1)"
              } 360deg
            )
          `,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Spotlight Effect */}
      {card.interaction?.spotlight && (
        <motion.div
          className="pointer-events-none absolute -inset-px z-10 rounded-[2.5rem]"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                800px circle at ${mouseX}px ${mouseY}px,
                ${
                  card.theme?.type === "dark"
                    ? "rgba(255,255,255,0.15)"
                    : card.theme?.type === "gradient"
                      ? "rgba(255,255,255,0.2)"
                      : "rgba(59,130,246,0.08)"
                },
                transparent 40%
              )
            `,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      )}

      {/* Noise Texture Overlay */}
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-[0.02]",
          card.theme?.type === "dark" || card.theme?.type === "gradient"
            ? "bg-white"
            : "bg-black",
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Card Visuals */}
      {renderVisuals()}

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full p-8">
        {/* Header with icon and badges */}
        <div className="flex justify-between items-start mb-8">
          <motion.div
            className={cn(
              "p-4 rounded-2xl shadow-lg",
              iconBgClasses[
                card.icon?.background as keyof typeof iconBgClasses
              ] || iconBgClasses.blue,
            )}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>

          {/* Badges & Status */}
          <div className="flex flex-col items-end gap-2">
            {card.content?.stat && (
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                <span className="text-lg font-bold">
                  {card.content.stat.value}
                </span>
                <span className="text-xs opacity-80">
                  {card.content.stat.label}
                </span>
                {card.content.stat.trend && (
                  <span className="text-xs text-emerald-400 font-bold ml-1">
                    ↑{card.content.stat.trend}
                  </span>
                )}
              </motion.div>
            )}

            {card.content?.status?.live && (
              <motion.div
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-linear-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-500/30"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(239,68,68,0)",
                    "0 0 8px rgba(239,68,68,0.3)",
                    "0 0 0px rgba(239,68,68,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  {card.content.status.label}
                </span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <motion.h3
            className="text-2xl md:text-3xl font-bold leading-tight bg-linear-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage:
                card.theme?.type === "dark"
                  ? "linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)"
                  : card.theme?.type === "gradient"
                    ? "linear-gradient(135deg, #ffffff 0%, #d1fae5 100%)"
                    : "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
            }}
            animate={isHovered ? { x: 4 } : { x: 0 }}
          >
            {card.content?.title}
          </motion.h3>

          <motion.p
            className={cn(
              "text-base leading-relaxed",
              card.theme?.type === "dark"
                ? "text-gray-300/90"
                : card.theme?.type === "gradient"
                  ? "text-white/90"
                  : "text-gray-600 dark:text-gray-400",
            )}
            animate={isHovered ? { opacity: 1 } : { opacity: 0.9 }}
          >
            {card.content?.description}
          </motion.p>

          {/* Stats Grid */}
          {card.content?.stats && (
            <motion.div
              className="grid grid-cols-2 gap-4 pt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {card.content.stats.map((stat: any, idx: number) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="text-2xl font-bold bg-linear-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider opacity-80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Community Avatars (if not in visuals) */}
          {card.content?.community && card.visual?.type !== "avatars" && (
            <motion.div
              className="flex items-center justify-between pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {card.content.community.avatars
                    .slice(0, 4)
                    .map((avatar: string, i: number) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-3 border-white dark:border-gray-900 overflow-hidden shadow-lg"
                      >
                        <img
                          src={avatar}
                          alt={`Community ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                </div>
                <div>
                  <div className="font-bold">
                    {card.content.community.count}
                  </div>
                  <div className="text-xs opacity-80">
                    {card.content.community.label}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Action Button */}
        {card.content?.action && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              variant={
                card.content.action.variant === "light"
                  ? "secondary"
                  : card.theme?.type === "gradient"
                    ? "default"
                    : "default"
              }
              className={cn(
                "w-full group rounded-xl py-6 text-base font-semibold",
                card.theme?.type === "gradient" &&
                  "bg-white text-gray-900 hover:bg-white/90 hover:shadow-lg",
              )}
              size="lg"
            >
              <span className="flex items-center justify-center gap-3">
                {card.content.action.label}
                <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2" />
              </span>
            </Button>
          </motion.div>
        )}
      </div>

      {/* Decorative elements */}
      {card.variant === "gradient_tall" && (
        <>
          <motion.div
            className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white/10 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-white/5 blur-xl"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </>
      )}
    </motion.div>
  );
};

interface ImpactBentoGridProps {
  data: any;
}

export function ImpactBentoGrid({ data }: ImpactBentoGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [activeCard, setActiveCard] = useState<string | null>(null);

  // Scroll-based parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]);

  if (!data?.enabled) return null;

  const HeaderIcon = data.header?.badge?.icon
    ? getIconComponent(data.header.badge.icon)
    : Cpu;

  return (
    <motion.section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ opacity }}
    >
      {/* Enhanced Light Theme Background with Artistic Flair */}
      <div className="absolute inset-0 z-0 h-full">
        {/* Main Background - Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-blue-50/20 to-slate-200/20" />

        {/* Dark Theme Support */}
        <div className="absolute inset-0 dark:bg-linear-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.15) 0px, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(245, 158, 11, 0.1) 0px, transparent 50%)
            `,
              backgroundSize: "100% 100%",
            }}
          />
        </div>

        {/* Dynamic Mesh Gradient */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `
              radial-gradient(600px at 20% 20%, rgba(147, 197, 253, 0.4) 0%, transparent 50%),
              radial-gradient(500px at 80% 30%, rgba(110, 231, 183, 0.3) 0%, transparent 50%),
              radial-gradient(400px at 50% 80%, rgba(253, 224, 71, 0.2) 0%, transparent 50%)
            `,
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 80%)",
          }}
        />

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-64 h-64 rounded-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, transparent 70%)",
            ],
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(110, 231, 183, 0.3) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(52, 211, 153, 0.2) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(110, 231, 183, 0.3) 0%, transparent 70%)",
            ],
            scale: [1, 1.2, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background:
                  i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#10b981" : "#f59e0b",
                opacity: 0.1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, (Math.random() - 0.5) * 30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Subtle Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-5 dark:opacity-10">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              className="fill-blue-500"
              opacity="0.25"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              className="fill-emerald-400"
              opacity="0.25"
            />
          </svg>
        </div>
      </div>

      {/* Enhanced Light Theme Glows */}
      <div className="absolute -left-40 top-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl" />

      {/* Top and Bottom Fades */}
      <div className="absolute top-0 inset-x-0 h-32 bg-linear-to-b from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/80" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/80" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className={cn(
            "max-w-4xl mx-auto mb-20 text-center",
            data.header?.alignment === "center" ? "text-center" : "text-left",
          )}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              relative flex items-center justify-center gap-3 w-fit mx-auto
              px-6 py-3 rounded-full
              border border-blue-200 dark:border-white/10
              bg-white/80 dark:bg-white/5
              backdrop-blur-xl backdrop-saturate-150
              shadow-lg shadow-blue-100/50 dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]
              overflow-hidden
            "
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-white/80 via-white/40 to-transparent dark:from-white/10 dark:via-white/5" />
            <span className="pointer-events-none absolute inset-px rounded-full ring-1 ring-white/50 dark:ring-white/10" />

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500/60 dark:bg-blue-400/60 blur-sm animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            </span>

            <span className="relative text-sm font-semibold tracking-wide uppercase text-blue-700 dark:text-blue-300">
              {data.header?.badge?.text || "Interactive Ecosystem"}
            </span>

            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-5xl  font-bold leading-tight tracking-tight mt-8 mb-6"
          >
            <span className="bg-linear-to-r from-foreground via-foreground/70 to-emerald-500 font-heading bg-clip-text text-transparent">
              {data.header.title}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            {data.header.description}
          </motion.p>

          {/* Connection line */}
          <motion.div
            className="h-px w-0 mx-auto mt-12 bg-linear-to-r from-transparent via-blue-400 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.5 }}
          />
        </motion.div>

        {/* Bento Grid */}
        <div
          className={cn(
            "grid grid-cols-1 gap-6 md:gap-8 relative",
            `md:grid-cols-${data.grid?.columns?.tablet || 2}`,
            `lg:grid-cols-${data.grid?.columns?.desktop || 4}`,
            "auto-rows-[minmax(400px,auto)]",
          )}
        >
          <AnimatePresence mode="wait">
            {data.cards?.map((card: any, index: number) => (
              <BentoCard
                key={card.id || index}
                card={card}
                index={index}
                onHover={setActiveCard}
                activeCard={activeCard}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap pt-16 justify-center"
        >
          <Link href="/about">
            <Button
              variant="outline"
              className="
              group relative
              px-8! py-7
              cursor-pointer
              dark:bg-white/10
              rounded-full
              overflow-hidden
              shadow-xl shadow-blue-500/25
              hover:shadow-2xl hover:shadow-emerald-500/30
              transition-all duration-500
              hover:scale-105
            "
              size="lg"
            >
              <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Sparkles className="absolute -top-2 -left-2 w-4 h-4 text-yellow-300 animate-pulse" />
              <Sparkles className="absolute -bottom-2 -right-2 w-4 h-4 text-yellow-300 animate-pulse" />
              <span className="relative flex items-center gap-3">
                Explore The Full Ecosystem
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-3 group-hover:rotate-12 duration-300" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Hero-connecting audio waveform */}
      <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1 bg-linear-to-t from-blue-500 to-amber-500"
            style={{
              left: `${i}%`,
              height: `${Math.sin(i * 0.3) * 20 + 10}px`,
            }}
            animate={{
              height: [
                `${Math.sin(i * 0.3) * 20 + 10}px`,
                `${Math.sin(i * 0.3 + Math.PI) * 30 + 20}px`,
                `${Math.sin(i * 0.3) * 20 + 10}px`,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: (i % 10) * 0.1,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}
