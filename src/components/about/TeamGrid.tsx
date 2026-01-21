"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- SUB-COMPONENT: Team Card ---
const TeamCard = ({ member, index }: { member: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative w-full h-112.5 overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-900 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-white/5"
    >
      {/* 1. IMAGE LAYER */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
      />

      {/* 2. GRADIENT OVERLAY (Subtle at bottom, darkens on hover) */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

      {/* 3. CONTENT LAYER */}
      <div className="absolute bottom-0 left-0 w-full p-8 text-white">
        {/* Name & Role (Always Visible) */}
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <div className="flex justify-between items-end mb-1">
            <h3 className="text-2xl font-bold font-serif leading-tight">
              {member.name}
            </h3>
            {/* Hover Arrow Icon */}
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
          <p className="text-sm font-bold text-blue-400 uppercase tracking-widest">
            {member.role}
          </p>
        </div>

        {/* Bio & Socials (Hidden initially, slide up on hover) */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
          <div className="overflow-hidden">
            <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
              <p className="text-sm text-gray-300 leading-relaxed mb-6 font-light border-l-2 border-blue-500 pl-3">
                {member.bio}
              </p>

              {/* Social Actions */}
              <div className="flex gap-3">
                <SocialButton icon={Linkedin} label="LinkedIn" />
                <SocialButton icon={Twitter} label="Twitter" />
                <SocialButton icon={Mail} label="Email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Helper for Social Buttons
const SocialButton = ({ icon: Icon, label }: any) => (
  <Button
    size="icon"
    variant="ghost"
    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-300"
    title={label}
  >
    <Icon className="w-4 h-4" />
  </Button>
);

// --- MAIN COMPONENT ---
export function TeamGrid({ data }: { data: any }) {
  if (!data?.members) return null;

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest"
          >
            The Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white font-heading mb-6"
          >
            {data.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 font-light"
          >
            Led by a team of veteran journalists, development experts, and
            digital innovators committed to Tanzania's future.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.members.map((member: any, idx: number) => (
            <TeamCard key={idx} member={member} index={idx} />
          ))}
        </div>

        {/* Advisory Board Link (Optional) */}
        <div className="mt-20 text-center">
          <Button
            variant="link"
            className="text-blue-600 dark:text-blue-400 font-bold text-lg group"
          >
            View Board of Directors{" "}
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
