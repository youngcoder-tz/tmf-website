// src/components/sections/ImpactBentoGrid.tsx
"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useInView,
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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getIconComponent } from "@/lib/icon-map";

// Icon map for fallback
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
};

interface BentoCardProps {
  card: any;
  index: number;
}

const BentoCard = ({ card, index }: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  // Mouse spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  // Get icon component
  const Icon = card.icon?.name
    ? getIconComponent(card.icon.name)
    : IconMap[card.icon?.name] || Globe;

  // Theme classes
  const themeClasses = {
    light:
      "bg-white dark:bg-gray-900 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white",
    dark: "bg-gray-900 border-white/10 text-white",
    gradient: `bg-gradient-to-br ${card.theme?.gradient} border-transparent text-white`,
  };

  // Icon background colors
  const iconBgClasses = {
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    amber:
      "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    emerald:
      "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
    white: "bg-white/20 text-white",
  };

  // Render card visuals based on type
  const renderVisuals = () => {
    switch (card.visual?.type) {
      case "background_image":
        return (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${card.visual.url})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent" />
            {card.visual.blur && (
              <div className="absolute inset-0 backdrop-blur-sm" />
            )}
          </div>
        );

      case "code_snippet":
        return (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900" />
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute right-0 bottom-0 p-8">
              <div className="font-mono text-xs text-emerald-400/50">
                <pre className="whitespace-pre-wrap">{card.visual.content}</pre>
              </div>
            </div>
          </div>
        );

      case "abstract_shape":
        return (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 blur-3xl" />
          </div>
        );

      case "avatars":
        return (
          <div className="absolute bottom-4 right-4 z-0">
            <div className="flex -space-x-2">
              {card.content?.community?.avatars?.map(
                (avatar: string, i: number) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden"
                  >
                    <img
                      src={avatar}
                      alt={`Community member ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Render card content
  const renderContent = () => {
    return (
      <div className="relative z-20 flex flex-col h-full p-6 md:p-8 justify-between">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div
            className={cn(
              "p-3 rounded-2xl",
              iconBgClasses[
                card.icon?.background as keyof typeof iconBgClasses
              ] || iconBgClasses.blue
            )}
          >
            <Icon className="w-6 h-6" />
          </div>

          {/* Badges & Status */}
          <div className="flex items-center gap-2">
            {card.content?.stat && (
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/5">
                {card.content.stat.value} {card.content.stat.label}
                {card.content.stat.trend && (
                  <span className="text-emerald-500 ml-1">
                    ↑{card.content.stat.trend}
                  </span>
                )}
              </span>
            )}

            {card.content?.status?.live && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                </span>
                <span className="text-[10px] font-bold text-red-500 uppercase">
                  {card.content.status.label}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-auto space-y-4">
          <h3 className="text-xl md:text-2xl font-bold leading-tight">
            {card.content?.title}
          </h3>

          <p
            className={cn(
              "text-sm md:text-base leading-relaxed",
              card.theme?.type === "dark"
                ? "text-gray-300"
                : card.theme?.type === "gradient"
                ? "text-white/80"
                : "text-gray-600 dark:text-gray-400"
            )}
          >
            {card.content?.description}
          </p>

          {/* Stats Grid */}
          {card.content?.stats && (
            <div className="grid grid-cols-2 gap-3 pt-4">
              {card.content.stats.map((stat: any, idx: number) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Action Button */}
          {card.content?.action && (
            <Button
              variant={
                card.content.action.variant === "light"
                  ? "secondary"
                  : "default"
              }
              className={cn(
                "mt-6 w-full group",
                card.theme?.type === "gradient" &&
                  "bg-white text-teal-700 hover:bg-white/90"
              )}
            >
              {card.content.action.label}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}

          {/* Community Avatars */}
          {card.content?.community &&
            !card.visual?.type.includes("avatars") && (
              <div className="flex items-center justify-between pt-4">
                <div className="flex -space-x-3">
                  {card.content.community.avatars
                    .slice(0, 4)
                    .map((avatar: string, i: number) => (
                      <div
                        key={i}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden"
                      >
                        <img
                          src={avatar}
                          alt={`Community ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white dark:border-gray-900 bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
                    {card.content.community.count}
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {card.content.community.label}
                </div>
              </div>
            )}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={card.interaction?.spotlight ? handleMouseMove : undefined}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border transition-all duration-300",
        card.layout?.col_span?.desktop,
        card.layout?.row_span?.desktop,
        themeClasses[card.theme?.type as keyof typeof themeClasses],
        card.interaction?.hover_effect === "scale" && "hover:scale-[1.02]",
        card.interaction?.hover_effect === "lift" && "hover:-translate-y-2",
        card.interaction?.hover_effect === "glow" &&
          "hover:shadow-2xl hover:shadow-blue-500/10"
      )}
    >
      {/* Spotlight Effect */}
      {card.interaction?.spotlight && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                ${
                  card.theme?.type === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(59,130,246,0.1)"
                },
                transparent 80%
              )
            `,
          }}
        />
      )}

      {/* Noise Texture */}
      {card.theme?.type === "dark" && (
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-0" />
      )}

      {/* Card Visuals */}
      {renderVisuals()}

      {/* Content */}
      {renderContent()}

      {/* Decorative Corner */}
      {card.variant === "gradient_tall" && (
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/5 blur-xl" />
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

  if (!data?.enabled) return null;

  const HeaderIcon = data.header?.badge?.icon
    ? getIconComponent(data.header.badge.icon)
    : Cpu;

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white dark:from-gray-950 to-transparent z-0" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white dark:from-gray-950 to-transparent z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className={cn(
            " mx-auto mb-16 ",
            data.header?.alignment === "center" ? "text-center" : "text-left"
          )}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold uppercase tracking-widest mb-6"
          >
            <HeaderIcon className="w-4 h-4" />
            {data.header?.badge?.text || "Our Ecosystem"}
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight"
          >
            {data.header?.title || "Built for Modern Journalism"}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className=" md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {data.header?.description ||
              "We bridge the gap between resources and results with a comprehensive support system designed for the digital age."}
          </motion.p>
        </motion.div>

        {/* The Bento Grid */}
        <div
          className={cn(
            "grid grid-cols-1 gap-4 md:gap-6",
            `md:grid-cols-${data.grid?.columns?.tablet || 2}`,
            `lg:grid-cols-${data.grid?.columns?.desktop || 4}`,
            "auto-rows-[minmax(300px,auto)]"
          )}
        >
          {data.cards?.map((card: any, index: number) => (
            <BentoCard key={card.id || index} card={card} index={index} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="group px-8 py-6 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            <span className="flex items-center gap-3 text-lg font-semibold">
              Explore All Programs
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Export as default for dynamic import
export default ImpactBentoGrid;
