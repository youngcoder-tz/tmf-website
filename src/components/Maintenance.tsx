// components/Maintenance.tsx
"use client";

import { motion } from "framer-motion";

export default function Maintenance() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl w-full mx-6 p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
      >
        <div className="text-center space-y-6">
          {/* Badge */}
          <span className="inline-block px-4 py-1 text-xs tracking-wide uppercase rounded-full bg-white/10 border border-white/20">
            Website Update
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            We’re Building Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Exceptional
            </span>
          </h1>

          {/* Description */}
          <p className="text-zinc-400 leading-relaxed">
            Our platform is currently undergoing scheduled maintenance to
            improve performance, security, and overall experience.
            <br />
            We’ll be back online shortly.
          </p>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
                initial={{ width: "0%" }}
                animate={{ width: "72%" }}
                transition={{ duration: 1.5 }}
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500">
              Deployment in progress…
            </p>
          </div>

          {/* Footer */}
          <div className="pt-6 text-xs text-zinc-500">
            © {new Date().getFullYear()} Your Company Name
            <br />
            All systems will be operational shortly.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
