"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Hammer, Mail, Timer, Globe, Shield, Wrench, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MaintenancePage = () => {
  const CLIENT_NAME = "TMF";
  const DEV_BRAND = "G Nexus";

  const PROGRESS = 92; // keep believable
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-4">
      {/* --- BACKGROUND VISUALIZATIONS --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-[120px] opacity-20"
            style={{
              background: i === 0 ? "#3b82f6" : i === 1 ? "#8b5cf6" : "#ec4899",
              width: "40vw",
              height: "40vw",
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
            animate={
              shouldReduceMotion
                ? {}
                : { x: [0, 50, -50, 0], y: [0, -50, 50, 0] }
            }
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10 mask-[radial-gradient(ellipse_at_center,black,transparent)]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating Icons */}
        <motion.div
          className="hidden lg:block absolute top-1/4 left-20 text-blue-500/20"
          animate={shouldReduceMotion ? {} : { y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <Globe size={120} strokeWidth={1} />
        </motion.div>

        <motion.div
          className="hidden lg:block absolute bottom-1/4 right-20 text-purple-500/20"
          animate={shouldReduceMotion ? {} : { y: [0, 20, 0], rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          <Cpu size={140} strokeWidth={1} />
        </motion.div>
      </div>

      {/* --- CONTENT --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-3xl"
      >
        {/* Status Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-blue-400 mb-8 backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          Scheduled System Upgrade
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/40 leading-[1.05]">
          Refining the <br /> Experience.
        </h1>

        {/* Central Animated Object */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative mb-4"
          >
            <div className="h-20 w-20 md:h-24 md:w-24 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
              <Wrench className="h-8 w-8 text-blue-400" />
            </div>
            {!shouldReduceMotion && (
              <div className="absolute inset-0 rounded-full border border-blue-500/50 animate-ping" />
            )}
          </motion.div>

          {/* Progress Bar */}
          <div className="w-48 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${PROGRESS}%` }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="h-full bg-linear-to-r from-blue-600 to-purple-500"
            />
          </div>
          <p className="text-[10px] font-mono mt-2 text-zinc-500 tracking-widest uppercase">
            Deployment Stage: {PROGRESS}%
          </p>
        </div>

        {/* Description with Typing Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[13px] md:text-lg text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          We are performing essential system upgrades to enhance performance,{" "}
          <span className="text-blue-400 font-semibold">enhanced</span>,{" "}
          <span className="text-emerald-400 font-semibold">security</span> ,{" "}
          <span className="text-purple-400 font-semibold">reliability</span>,
          and <span className="text-pink-400 font-semibold">overall user</span>{" "}
          experience. Our platform will be available shortly.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-12 px-2">
          {[
            { icon: <Timer size={18} />, label: "ETA", sub: "6 Hours" },
            { icon: <Hammer size={18} />, label: "Engine", sub: "V2.0.4" },
            { icon: <Shield size={18} />, label: "Security", sub: "Hardened" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-3 md:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center md:text-left transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              <div className="text-blue-400 mb-2 flex justify-center md:justify-start">
                {item.icon}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-zinc-300 pb-1 uppercase tracking-wider">
                {item.label}
              </div>
              <div className="text-[11px] md:text-xs text-zinc-500">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            disabled
            className="w-full sm:w-auto px-8 py-6 rounded-full bg-white text-black font-bold opacity-60 cursor-not-allowed"
          >
            Notifications Coming Soon
          </Button>

          <Link
            href="mailto:support@tmf1.or.tz"
            className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <Mail
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
            Contact Support
          </Link>
        </div>
      </motion.div>

      {/* --- FOOTER --- */}
      <div className="absolute bottom-8 left-0 right-0 px-6">
        <div className="max-w-7xl mx-auto flex md:flex-row items-center justify-between gap-4 opacity-40 hover:opacity-100 transition-opacity duration-700">
          <div className="flex items-center gap-3 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase">
            <span>© 2026 {CLIENT_NAME}</span>
            <span className="h-1 w-1 bg-zinc-600 rounded-full" />
            <span className="hidden sm:inline">Infrastructure Verified</span>
          </div>

          <div className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="text-zinc-500">System by </span>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors underline underline-offset-4 decoration-zinc-700"
            >
              {DEV_BRAND}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
