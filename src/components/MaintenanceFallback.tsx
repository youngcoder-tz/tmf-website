// app/components/MaintenanceFallback.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Wrench,
  Rocket,
  Mail,
  Sparkles,
  Globe,
  Shield,
} from "lucide-react";

const MaintenanceFallback = () => {
  const [time, setTime] = useState<string>("");
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; speed: number }>
  >([]);

  // Update time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Create floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(particle.id) * 10, 0],
            }}
            transition={{
              duration: 2 + particle.speed,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 text-purple-400 opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Globe size={80} />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-10 text-blue-400 opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Shield size={100} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo/Header */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Company<span className="text-white">Name</span>
              </h1>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-purple-200">Launching Soon</span>
            </div>
          </motion.div>

          {/* Animated Status Indicator */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <div className="h-24 w-24 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Wrench className="h-10 w-10 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Something{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Amazing
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </span>{" "}
              Is Coming
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              We're currently building an extraordinary digital experience that
              will revolutionize how you interact with our platform. Our team is
              working tirelessly to deliver something truly special.
            </p>
          </motion.div>

          {/* Stats/Info Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: Clock,
                label: "Current Time",
                value: time,
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Shield,
                label: "Security Level",
                value: "Maximum",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Wrench,
                label: "Progress",
                value: "98%",
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium">
                    {stat.label}
                  </span>
                </div>
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Want to be the first to know?
                  </h3>
                  <p className="text-gray-300">
                    Join our exclusive list for early access and updates
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Notify Me
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-gray-400 text-sm"
          >
            <p className="mb-4">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-6">
              {["Privacy Policy", "Terms of Service", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Pulsing Ring Animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className="absolute inset-0 border-2 border-purple-500 rounded-full"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute inset-0 border-2 border-pink-500 rounded-full"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5,
          }}
        />
      </div>
    </div>
  );
};

export default MaintenanceFallback;
