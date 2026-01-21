"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image"; // Added Image import
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import {
  PenTool,
  Handshake,
  Zap,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import heroAnimation from "../../../public/lottie/faq.json";

// --- SUB-COMPONENT: Retro Moving Grid ---
const RetroGrid = () => {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none perspective-normal">
      {/* Moving Floor */}
      <div className="absolute inset-0 transform-[rotateX(60deg)] opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-size-[40px_40px] animate-grid-flow" />
      </div>
      {/* Horizon Fade */}
      <div className="absolute inset-0 bg-linear-to-t from-transparent via-[#05020D]/50 to-[#05020D] h-full z-10" />
    </div>
  );
};

// --- SUB-COMPONENT: Floating Glass Card (Decoration) ---
const FloatingCard = ({ className, delay, children }: any) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -20, 0] }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={cn(
      "absolute hidden lg:flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl z-30",
      className,
    )}
  >
    {children}
  </motion.div>
);

export function CallToAction({ data }: { data: any }) {
  if (!data?.enabled) return null;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax Effect for Background Image
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Mouse Follow Effect for Button
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Fallback image if none provided in JSON
  const bgImage =
    data.bg_image ||
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";

  return (
    <section
      ref={containerRef}
      className="relative py-25  overflow-hidden bg-[#05020D] text-white selection:bg-lime-500/30  flex items-center justify-center"
    >
      {/* 1. BACKGROUND IMAGE LAYER (Parallax + Blended) */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Impact Network"
          fill
          className="object-cover opacity-100 mix-blend-screen"
          quality={90}
        />
        {/* Radial Mask: Hides image in center so text pops, reveals image on edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#05020D_40%,transparent_100%)]" />

        {/* Color Overlay to tint the image Purple/Dark */}
        <div className="absolute inset-0 bg-[#05020D]/60 mix-blend-multiply" />
      </motion.div>

      {/* 2. RETRO GRID LAYER (Sits on top of image) */}
      <RetroGrid />

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-purple-600/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-10" />
      <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-lime-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-10" />

      {/* Noise Overlay (Texture) */}
      <div className="absolute inset-0 bg-[url('/bg/granny.jpg')] opacity-30 mix-blend-overlay z-20 pointer-events-none" />

      {/* 3. FLOATING DECORATIONS */}
      <FloatingCard className="top-20 left-[10%] -rotate-6" delay={0}>
        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50">
          <CheckCircle2 className="w-4 h-4 text-green-400" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-300">Grant Approved</span>
          <span className="text-sm font-bold text-white">$12,000.00</span>
        </div>
      </FloatingCard>

      <FloatingCard className="bottom-40 right-[10%] rotate-6" delay={1.5}>
        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50">
          <Zap className="w-4 h-4 text-purple-400" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-300">New Application</span>
          <span className="text-sm font-bold text-white">
            Investigative Fund
          </span>
        </div>
      </FloatingCard>

      {/* 4. MAIN CONTENT */}
      <div className="max-w-7xl w-full mx-auto px-4 relative z-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT GRID (CONTENT) ================= */}
          <div className="flex flex-col items-start text-start">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-8 shadow-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold">
                Applications Open for 2025
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-heading mb-8 tracking-tight leading-[0.9]"
            >
              Change the <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/50">
                Narrative.
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full h-2 bg-lime-500 origin-left"
                />
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:text-xl text-gray-300 max-w-xl mb-12 font-light leading-relaxed"
            >
              {data.subheadline}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex  sm:flex-row items-start gap-2 md:gap-6"
            >
              {/* Primary */}
              <div className="group relative" onMouseMove={handleMouseMove}>
                <motion.div
                  className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"
                  style={{
                    background: useMotionTemplate`
                radial-gradient(
                  150px circle at ${mouseX}px ${mouseY}px,
                  rgba(132, 204, 22, 0.6),
                  transparent 80%
                )
              `,
                  }}
                />

                <Link href={data.primary_btn.url}>
                  <Button className="relative h-12 md:px-6! rounded-full  font-bold bg-lime-500 hover:bg-lime-400 text-black transition-all hover:scale-105">
                    <PenTool className="md:mr-2 w-5 h-5" />
                    {data.primary_btn.label}
                  </Button>
                </Link>
              </div>

              {/* Secondary */}
              <Link href={data.secondary_btn.url}>
                <Button
                  variant="ghost"
                  className="h-12 md:px-6! rounded-full text- font-bold border border-white/10 hover:border-white/30"
                >
                  <Handshake className="md:mr-1 w-5 h-5 text-purple-400" />
                  {data.secondary_btn.label}
                  <ChevronRight className="md:ml-2 w-4 h-4 opacity-50" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* ================= RIGHT GRID (LOTTIE) ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-lime-500/20 blur-3xl opacity-40" />

            {/* Lottie */}
            <div className="relative w-full max-w-md">
              <Lottie
                animationData={heroAnimation}
                loop
                autoplay
                className="w-full h-full drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS Animation for Grid */}
      <style jsx global>{`
        @keyframes grid-flow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(40px);
          }
        }
        .animate-grid-flow {
          animation: grid-flow 2s linear infinite;
        }
      `}</style>
    </section>
  );
}
