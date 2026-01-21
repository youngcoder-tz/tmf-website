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
import { Button } from "../../ui/button";
import VideoModal from "../../ui/VideoModal";
import Image from "next/image";

// --- MOCK DATA ---
const HERO_CONTENT = {
  badge: "Global Press Freedom Initiative",
  headline: "Defending the Truth, Protecting the Storytellers.",
  subheadline:
    "We provide legal shield, digital security, and emergency funds to investigative journalists working in high-risk zones across 50+ countries.",
  primaryCta: "Explore Grants",
  secondaryCta: "Watch Impact Reel",
  stats: [
    { label: "Journalists Protected", value: "12,400+", icon: Shield },
    { label: "Countries Active", value: "54", icon: Globe },
    { label: "Stories Published", value: "850+", icon: PenTool },
  ],
  // Using a desaturated newsroom image that works well with overlays
  bgImage:
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
  impactImage:
    "https://images.stockcake.com/public/3/d/1/3d169100-1f71-4d0b-bf14-546e2e0a7955_large/media-coverage-event-stockcake.jpg",
  abstractShape:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
  tickerItems: [
    "BREAKING: New protection bill passed in Eastern Europe",
    "UPDATE: Emergency fund deployed for 3 reporters in conflict zones",
    "EVENT: World Press Freedom Day symposium registration open",
    "REPORT: The state of digital surveillance in 2025",
  ],
  trustedBy: [
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://randomuser.me/api/portraits/women/29.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/women/63.jpg",
    "https://randomuser.me/api/portraits/men/78.jpg",
  ],
};

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

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Render background layers
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

  const renderAmbientEffects = () => {
    return (
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Color orbs */}
        {data.visuals.ambient_effects.orbs.map((orb: any, index: number) => (
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
        {data.visuals.ambient_effects.particles?.enabled && (
          <ParticleBackground
            density={data.visuals.ambient_effects.particles.density || "medium"}
            color={data.visuals.ambient_effects.particles.color || "blue"}
            interactive={
              data.visuals.ambient_effects.particles.interactive || false
            }
          />
        )}
      </div>
    );
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {renderBackgroundLayers()}
      {renderAmbientEffects()}
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-40 mix-blend-multiply dark:mix-blend-overlay transition-opacity duration-500"
          style={{ backgroundImage: `url(${HERO_CONTENT.bgImage})` }}
        />

        {/* Gradient Overlay - Adapts to theme to ensure text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-white/40 dark:from-slate-950 dark:via-slate-900/90 dark:to-slate-900/40 transition-colors duration-500" />

        {/* Ambient Glow Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-150 h-150 bg-amber-500/10 dark:bg-amber-600/10 rounded-full blur-[100px]" />
      </div>

      {/* 2. MAIN GRID CONTENT */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20 pb-24">
        {/* LEFT COLUMN: Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 backdrop-blur-sm shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wider uppercase text-blue-700 dark:text-blue-300">
              {HERO_CONTENT.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl  font-russo font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white"
          >
            Defending the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-amber-600 dark:from-blue-400 dark:to-amber-200">
              Truth
            </span>
            , <br />
            Protecting the Storytellers.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-light"
          >
            {data.description.text}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row gap-1 sm:gap-4 mt-2"
          >
            {/* Primary Button */}
            <Button className="group relative md:p-6 p-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1">
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-slate-800 to-slate-900 dark:from-blue-50 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                {HERO_CONTENT.primaryCta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            {/* Secondary Button */}
            <Button
              onClick={() => setIsVideoModalOpen(true)}
              className="group  md:p-6 p-5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all flex items-center max-w-45 overflow-hidden sm:max-w-55"
            >
              <div className="w-8 h-8 rounded-full -ml-2 bg-slate-100 dark:bg-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors">
                <Play className="w-3 h-3 fill-current" />
              </div>
              {HERO_CONTENT.secondaryCta}
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className=" mt-4"
          >
            {/* Social Proof / Stats */}
            <div className="pt-8 flex items-center gap-4 border-t ">
              <div className="flex -space-x-3">
                {HERO_CONTENT.trustedBy.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="supporter"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-border object-cover"
                  />
                ))}
                <div className="w-10 h-10 rounded-full shadow bg-slate-100 dark:bg-slate-400/60 backdrop-blur-2xl border-2 border-white dark:border-border flex items-center justify-center text-xs font-bold text-slate-600 dark:text-white">
                  +2k
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">
                  Supported by global community
                </p>
                <div className="flex gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-xs">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Visual Elements */}
        <div className="lg:col-span-5 relative hidden lg:block h-full min-h-125">
          {/* Glass Card "Featured Story" */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 6 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            whileHover={{
              rotate: 0,
              scale: 1.02,
              transition: { duration: 0.4 },
            }}
            transition={{ duration: 0.8, type: "spring" }}
            className="absolute top-10 right-4 w-95 h-125 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl z-20 group"
          >
            {/* Image */}
            <div className="h-[60%] w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent dark:from-slate-900 dark:via-transparent z-10" />
              <img
                src={HERO_CONTENT.impactImage}
                alt="Journalist in action"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-30 group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1 shadow-lg">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                Live Action
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 relative z-20 h-[40%] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2 leading-tight font-bold">
                  Documenting History
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  Our field teams are currently deployed in conflict zones
                  ensuring footage reaches the global cloud securely.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 15}`}
                        alt="User"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-300">
                  <span className="font-bold text-slate-900 dark:text-white">
                    400+
                  </span>{" "}
                  backers joined today
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Secondary Abstract Card (Floating behind) */}
          <motion.div
            style={{
              x: useTransform(mouseX, (val) => val * -1.5),
              y: useTransform(mouseY, (val) => val * -1.5),
            }}
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="absolute top-20 right-50  w-75 h-100 rounded-[2rem] -rotate-28 overflow-hidden shadow-xl  -z-10 "
          >
            <Image
              src={HERO_CONTENT.abstractShape}
              alt="Data visualization"
              fill
              className="object-cover opacity-60 mix-blend-screen blur-sm"
            />
            <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay" />
          </motion.div>

          {/* Decorative Back Card (Shadow) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-20 -right-5 w-95 h-125 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/5 backdrop-blur-sm -z-10 rotate-12 shadow-lg dark:shadow-none"
          />
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
