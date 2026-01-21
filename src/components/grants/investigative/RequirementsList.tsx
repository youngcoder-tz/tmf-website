"use client";

import React from "react";
import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RequirementsList({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif text-white mb-6">
              Application Requirements
            </h2>
            <p className="text-slate-400 mb-8">
              Incomplete applications are automatically rejected. Ensure you
              have the following ready in PDF format before entering the portal.
            </p>
            <Button
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
            >
              <Download className="w-4 h-4 mr-2" /> Download Document Templates
            </Button>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="space-y-4">
              {data.map((req: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{req.item}</h4>
                    <p className="text-slate-500 text-xs">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
