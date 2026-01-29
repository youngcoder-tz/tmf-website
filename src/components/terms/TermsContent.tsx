"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export function TermsContent({ sections }: { sections: any[] }) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0B0F19]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT: Sticky Nav (3 Cols) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                Clauses
              </h3>
              <ul className="space-y-4 border-l border-slate-200 dark:border-white/10">
                {sections.map((section: any) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className="block pl-4 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 border-l-2 border-transparent transition-all"
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Legal Text (7 Cols) */}
          <div className="lg:col-span-8 lg:col-start-5">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-200 dark:border-white/5 space-y-16">
              {sections.map((section: any) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 group"
                >
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                    {section.title}
                    <span className="opacity-0 group-hover:opacity-100 text-slate-300 text-sm font-normal">
                      #
                    </span>
                  </h2>

                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    {section.content}
                  </p>

                  {/* Warning Clause Highlight */}
                  {section.is_warning && (
                    <div className="mt-6 p-6 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-xl flex gap-4">
                      <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-amber-800 dark:text-amber-500 text-sm uppercase tracking-wide mb-1">
                          Important Notice
                        </h4>
                        <p className="text-amber-900/80 dark:text-amber-200/80 text-sm italic">
                          Please read this section carefully as it limits our
                          liability to you.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Signature Block Visual */}
              <div className="pt-16 mt-16 border-t border-slate-100 dark:border-white/5">
                <p className="text-sm text-slate-400 mb-8">
                  For legal inquiries: legal@tmf.or.tz
                </p>
                <div className="h-20 w-48 border-b border-slate-300 dark:border-slate-700 relative">
                  <span className="absolute bottom-2 text-slate-900 dark:text-white font-serif italic text-2xl">
                    Tanzania Media Foundation
                  </span>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
                  Authorized Signature
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
