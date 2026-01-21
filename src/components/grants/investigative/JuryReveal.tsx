"use client";

import React from "react";
import { UserCheck } from "lucide-react";

export function JuryReveal({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <UserCheck className="w-12 h-12 text-slate-700 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            The Selection Committee
          </h2>
          <p className="text-slate-400 text-lg">
            Applications are scored blindly by an independent panel of experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((member: any, idx: number) => (
            <div
              key={idx}
              className="text-center p-6 border border-white/5 rounded-2xl bg-white/[0.02]"
            >
              <div className="w-20 h-20 bg-slate-800 rounded-full mx-auto mb-4 border-2 border-slate-700" />
              <h4 className="text-lg font-bold text-white mb-1">
                {member.name}
              </h4>
              <p className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-3">
                {member.role}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
