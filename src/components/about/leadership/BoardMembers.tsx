"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export function BoardMembers({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Info */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Board of Directors
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our Board is independent and non-executive. They meet quarterly to
              approve strategy, budgets, and audit reports.
            </p>
            <div className="flex items-center gap-3 text-emerald-400 bg-emerald-900/20 p-4 rounded-xl border border-emerald-900">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold text-sm">
                100% Conflict of Interest Policy
              </span>
            </div>
          </div>

          {/* The List */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {data.map((member: any, idx: number) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <p className="text-slate-400 text-sm">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
