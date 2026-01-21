"use client";

import React from "react";
import { ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SecureProcess({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
              How to Apply Safely
            </h2>
            <div className="space-y-8">
              {data.map((step: any, idx: number) => (
                <div key={idx} className="flex gap-6">
                  <div className="text-4xl font-black text-red-500/20">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-600 rounded-[2.5rem] p-10 text-center shadow-[0_0_60px_rgba(220,38,38,0.3)]">
            <Lock className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Start Secure Application
            </h3>
            <p className="text-red-100 mb-8 text-sm">
              We use end-to-end encrypted forms. Your data is deleted from our
              servers 7 days after case resolution.
            </p>
            <Button className="w-full h-14 rounded-xl bg-white text-red-600 font-bold hover:bg-red-50 text-lg">
              Open Secure Portal <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
