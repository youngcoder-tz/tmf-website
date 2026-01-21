// src/components/home/HeroSection.tsx
"use client";

import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Play, ArrowRight, Globe, Shield, PenTool } from "lucide-react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import VideoModal from "../ui/VideoModal";
import Image from "next/image";
import { getIconComponent } from "@/lib/icon-map";

// Dynamic imports for performance
const ParticleBackground = dynamic(
  () => import("@/components/effects/ParticleBackground"),
  {
    ssr: false,
  }
);

interface UltimateHeroProps {
  data: any;
  assets?: any;
}

export function HeroSection({ data, assets }: UltimateHeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Destructure data with defaults
  const heroData = data || {};
  const badge = heroData.badge || {};
  const headline = heroData.headline || {};
  const description = heroData.description || {};
  const actions = heroData.actions || {};
  const stats = heroData.stats || {};
  const trustIndicators = heroData.trust_indicators || {};
  const visuals = heroData.visuals || {};
  const animations = heroData.animations || {};

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Icon mapping function
  const getIcon = (iconName: string) => {
    return getIconComponent(iconName);
  };

  // Render headline with animations
  const renderHeadline = () => {
    // 1. FALLBACK: Matches Image 2 perfectly (Hardcoded)
    if (!headline.lines || !Array.isArray(headline.lines)) {
      return (
        <h1 className="text-5xl md:text-6xl font-russo font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
          Defending the{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-amber-300 dark:from-blue-400 dark:to-amber-200">
            Truth
          </span>
          , <br />
          Protecting the Storytellers.
        </h1>
      );
    }

    // 2. DYNAMIC: Fixes the logic to prevent awkward breaking
    return (
      <h1 className="text-5xl md:text-6xl font-russo font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
        {headline.lines.map((line: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: animations.entry?.duration || 0.6,
                  delay: (animations.entry?.stagger_delay || 0.1) * index,
                }}
                className={cn(
                  // Apply gradient if highlighted
                  line.highlight
                    ? "text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-amber-300 dark:from-blue-400 dark:to-amber-200"
                    : ""
                )}
              >
                {line.text}
              </motion.span>

              {/* Add space after word if it's not the last one */}
              {index < headline.lines.length - 1 && " "}

              {/* LOGIC: If this line is the "Highlight" (Truth), add the comma and the break */}
              {line.highlight && (
                <>
                  ,<br />
                </>
              )}
            </React.Fragment>
          );
        })}
      </h1>
    );
  };

  const renderBackgroundLayers = () => {
    return data.visuals.background.layers.map((layer: any, index: number) => {
      switch (layer.type) {
        case "gradient":
          return (
            <div
              key={index}
              className="absolute inset-0 pointer-events-none"
              style={{ background: layer.value }}
            />
          );
        case "grid":
          if (!layer.enabled) return null;
          return (
            <div
              key={index}
              className="absolute inset-0 pointer-events-none overflow-hidden"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                      linear-gradient(to right, ${layer.color} 1px, transparent 1px),
                      linear-gradient(to bottom, ${layer.color} 1px, transparent 1px)
                    `,
                  backgroundSize: `${layer.size} ${layer.size}`,
                  maskImage:
                    "radial-gradient(ellipse 80% 80% at 50% 50%, #000 60%, transparent 100%)",
                }}
              />
            </div>
          );
        case "scan_line":
          if (!layer.enabled) return null;
          return (
            <motion.div
              key={index}
              animate={{ top: ["0%", "100%"] }}
              transition={{
                duration: parseInt(layer.speed),
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 right-0 h-px pointer-events-none"
              style={{
                background: `linear-gradient(to right, transparent, ${layer.color}, transparent)`,
                filter: "blur(1px)",
              }}
            />
          );
        default:
          return null;
      }
    });
  };

  // Render ambient effects
  const renderAmbientEffects = () => {
    if (!visuals.ambient_effects?.orbs) return null;

    return (
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Color orbs */}
        {visuals.ambient_effects.orbs.map((orb: any, index: number) => (
          <div
            key={index}
            className={cn("absolute rounded-full", orb.position)}
            style={{
              width: orb.size,
              height: orb.size,
              filter: `blur(${orb.blur}px)`,
              background: `radial-gradient(circle,
              rgba(var(--color-${orb.color}-rgb), ${orb.opacity}) 0%,
              transparent 70%)`,
            }}
          />
        ))}

        {/* Particles */}
        {visuals.ambient_effects.particles?.enabled && (
          <ParticleBackground
            density={visuals.ambient_effects.particles.density || "medium"}
            color={visuals.ambient_effects.particles.color || "blue"}
            interactive={visuals.ambient_effects.particles.interactive || false}
          />
        )}
      </div>
    );
  };

  // Render floating cards
  const renderFloatingCards = () => {
    if (!visuals.floating_cards || !Array.isArray(visuals.floating_cards)) {
      return renderDefaultCards();
    }

    return visuals.floating_cards.map((card: any) => {
      switch (card.type) {
        case "glass_card":
          return renderGlassCard(card);
        case "background_shape":
          return renderBackgroundShape(card);
        case "shadow_element":
          return renderShadowCard(card);
        default:
          return null;
      }
    });
  };

  // Default cards fallback
  const renderDefaultCards = () => {
    const defaultCards = [
      {
        id: "featured_story",
        type: "glass_card",
        title: "Documenting History",
        description:
          "Our field teams are currently deployed in conflict zones ensuring footage reaches the global cloud securely.",
        image:
          "https://images.stockcake.com/public/3/d/1/3d169100-1f71-4d0b-bf14-546e2e0a7955_large/media-coverage-event-stockcake.jpg",
        badge: { text: "Live Action", color: "red", blink: true },
        avatars: [
          "https://i.pravatar.cc/100?img=15",
          "https://i.pravatar.cc/100?img=16",
          "https://i.pravatar.cc/100?img=17",
        ],
        stat: { value: "400+", label: "backers joined today" },
      },
      {
        id: "abstract_shape",
        type: "background_shape",
        image:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
        rotation: -28,
      },
      {
        id: "shadow_card",
        type: "shadow_element",
      },
    ];

    return defaultCards.map((card, index) => {
      if (card.type === "glass_card") return renderGlassCard(card);
      if (card.type === "background_shape") return renderBackgroundShape(card);
      if (card.type === "shadow_element") return renderShadowCard(card);
      return null;
    });
  };

  const renderGlassCard = (card: any) => {
    const CardIcon = card.badge?.icon ? getIcon(card.badge.icon) : null;

    return (
      <motion.div
        key={card.id}
        initial={{ opacity: 0, x: 50, rotate: 6 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        whileHover={{
          rotate: animations.card_hover?.rotate || 0,
          scale: animations.card_hover?.scale || 1.02,
          transition: { duration: animations.card_hover?.duration || 0.4 },
        }}
        transition={{ duration: 0.8, type: "spring" }}
        className="absolute top-10 right-4 w-95 h-125 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl z-20 group"
      >
        {/* Image */}
        <div className="h-[60%] w-full overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent dark:from-slate-900 dark:via-transparent z-10" />
          <img
            src={card.image}
            alt={card.title || "Journalist in action"}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-30 group-hover:grayscale-0"
          />

          {/* Badge */}
          {card.badge && (
            <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1 shadow-lg">
              {card.badge.blink && (
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              )}
              {CardIcon && <CardIcon className="w-3 h-3" />}
              {card.badge.text}
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6 relative z-20 h-[40%] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2 leading-tight font-bold">
              {card.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
              {card.description}
            </p>
          </div>

          {card.avatars && (
            <div className="flex items-center gap-3 mt-4">
              <div className="flex -space-x-2">
                {card.avatars.map((avatar: string, i: number) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 overflow-hidden"
                  >
                    <img src={avatar} alt={`Supporter ${i + 1}`} />
                  </div>
                ))}
              </div>
              {card.stat && (
                <div className="text-xs text-slate-500 dark:text-slate-300">
                  <span className="font-bold text-slate-900 dark:text-white">
                    {card.stat.value}
                  </span>{" "}
                  {card.stat.label}
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const renderBackgroundShape = (card: any) => {
    return (
      <motion.div
        key={card.id}
        style={{
          x: useTransform(mouseX, (val) => val * -1.5),
          y: useTransform(mouseY, (val) => val * -1.5),
        }}
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className={cn(
          "absolute top-20 right-50 w-75 h-100 rounded-[2rem] blur-[2px] opacity-70 -rotate-28 overflow-hidden shadow-xl -z-10",
          card.blur
        )}
      >
        <Image
          src={card.image}
          alt="Abstract visualization"
          fill
          className={cn(
            "object-cover",
            card.opacity && `opacity-${card.opacity * 100}`,
            card.blend_mode && `mix-blend-${card.blend_mode}`
          )}
        />
        {/* <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay" /> */}
      </motion.div>
    );
  };

  const renderShadowCard = (card: any) => {
    return (
      <motion.div
        key={card.id}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-20 -right-5 w-95 h-125 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/5 backdrop-blur-sm -z-10 rotate-12 shadow-lg dark:shadow-none"
      />
    );
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Background Layers */}
      {renderBackgroundLayers()}
      {renderAmbientEffects()}
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-40 mix-blend-multiply dark:mix-blend-overlay transition-opacity duration-500"
          style={{
            backgroundImage: `url(${visuals.background.layers[0].url})`,
          }}
        />

        {/* Gradient Overlay - Adapts to theme to ensure text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-white/40 dark:from-slate-950 dark:via-slate-900/90 dark:to-slate-900/40 transition-colors duration-500" />

        {/* Ambient Glow Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-150 h-150 bg-amber-500/10 dark:bg-amber-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20 pb-24">
        {/* LEFT COLUMN: Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Animated Badge */}
          {badge.enabled !== false && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 backdrop-blur-sm shadow-sm"
            >
              {badge.animation === "ping" && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                </span>
              )}
              <span className="text-xs font-bold tracking-wider uppercase text-blue-700 dark:text-blue-300">
                {badge.text || "Global Press Freedom Initiative"}
              </span>
            </motion.div>
          )}

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {renderHeadline()}
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-light",
              description.show_border && "border-l-2 border-blue-500 pl-4"
            )}
            style={{ maxWidth: description.max_width }}
          >
            {description.text ||
              "We provide legal shield, digital security, and emergency funds to investigative journalists working in high-risk zones across 50+ countries."}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row gap-1 sm:gap-4 mt-2"
          >
            {/* Primary Button */}
            {actions.primary && (
              <Button
                className={cn(
                  "group relative md:p-6 p-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold overflow-hidden transition-all hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1",
                  actions.primary.rounded === "full" && "rounded-full",
                  actions.primary.animation === "scale" && "hover:scale-105"
                )}
              >
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-slate-800 to-slate-900 dark:from-blue-50 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  {actions.primary.label || "Explore Grants"}
                  {actions.primary.icon &&
                    React.createElement(getIcon(actions.primary.icon), {
                      className:
                        "w-4 h-4 transition-transform group-hover:translate-x-1",
                    })}
                </span>
              </Button>
            )}

            {/* Secondary Button */}
            {actions.secondary && (
              <Button
                onClick={() => setIsVideoModalOpen(true)}
                className={cn(
                  "group md:p-6 p-5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all flex items-center max-w-45 overflow-hidden sm:max-w-55",
                  actions.secondary.rounded === "full" && "rounded-full"
                )}
              >
                <div className="w-8 h-8 rounded-full -ml-2 bg-slate-100 dark:bg-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors">
                  {actions.secondary.icon &&
                    React.createElement(getIcon(actions.secondary.icon), {
                      className: "w-3 h-3 fill-current",
                    })}
                </div>
                {actions.secondary.label || "Watch Impact Reel"}
              </Button>
            )}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4"
          >
            {/* Social Proof / Stats */}
            {trustIndicators.enabled !== false && (
              <div className="pt-8 flex items-center gap-4 border-t border-slate-200 dark:border-white/10">
                {/* Avatars */}
                {trustIndicators.avatars &&
                  trustIndicators.avatars.length > 0 && (
                    <div className="flex -space-x-3">
                      {trustIndicators.avatars.map((src: string, i: number) => (
                        <img
                          key={i}
                          src={src}
                          alt="supporter"
                          className="w-10 h-10 rounded-full border-2 border-white dark:border-border object-cover"
                        />
                      ))}
                      {trustIndicators.count && (
                        <div className="w-10 h-10 rounded-full shadow bg-slate-100 dark:bg-slate-400/60 backdrop-blur-2xl border-2 border-white dark:border-border flex items-center justify-center text-xs font-bold text-slate-600 dark:text-white">
                          {trustIndicators.count}
                        </div>
                      )}
                    </div>
                  )}

                {/* Label and Rating */}
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    {trustIndicators.label || "Supported by global community"}
                  </p>
                  {trustIndicators.rating && (
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(trustIndicators.rating)].map((_, i) => (
                        <span key={i} className="text-xs">
                          ★
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Visual Elements */}
        <div className="lg:col-span-5 relative hidden lg:block h-full min-h-125">
          {renderFloatingCards()}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <VideoModal
            isOpen={isVideoModalOpen}
            onClose={() => setIsVideoModalOpen(false)}
            videoUrl="/api/videos/hero-impact.mp4"
            title="TMF Impact 2024"
          />
        )}
      </AnimatePresence>

      {/* CSS Utility for gradient mask on ticker */}
      <style jsx global>{`
        .mask-linear-fade {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 20px,
            black 95%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 20px,
            black 95%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
