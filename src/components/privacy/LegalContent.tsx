"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LegalContent({ sections }: { sections: any[] }) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT: Sticky Navigation (3 cols) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-6">
                Contents
              </h4>
              <ul className="space-y-4 border-l border-slate-200 dark:border-white/10">
                {sections.map((section: any) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className="block pl-4 text-sm text-slate-500 hover:text-emerald-600 hover:border-emerald-600 border-l-2 border-transparent transition-all"
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-12 bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                <p className="text-xs font-bold text-emerald-800 dark:text-emerald-400 mb-2 uppercase">
                  Contact DPO
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Questions about your data?
                </p>
                <a
                  href="mailto:privacy@tmf.or.tz"
                  className="text-sm font-bold text-emerald-600 hover:underline"
                >
                  privacy@tmf.or.tz
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: The Content (9 cols) */}
          <div className="lg:col-span-8 lg:col-start-5">
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:font-serif prose-p:text-slate-600 dark:prose-p:text-slate-400">
              <div className="bg-white dark:bg-[#0B0F19] p-8 rounded-2xl border-l-4 border-emerald-500 shadow-sm mb-12">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0">
                  Summary
                </h3>
                <p className="text-sm mb-0">
                  We collect minimal data to operate our grants and newsletter.
                  We never sell your personal information. You have the right to
                  request, correct, or delete your data at any time.
                </p>
              </div>

              {sections.map((section: any) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 mb-16"
                >
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>

                  {/* Example of adding more legal density */}
                  <p>Specific data points include:</p>
                  <ul>
                    <li>Names and contact information.</li>
                    <li>
                      Professional affiliation and portfolio links (for
                      grantees).
                    </li>
                    <li>Bank details (encrypted) for successful applicants.</li>
                    <li>Device IP and browser type (for security auditing).</li>
                  </ul>
                </div>
              ))}

              <div className="pt-12 border-t border-slate-200 dark:border-white/10 mt-12">
                <p className="text-sm text-slate-400 italic">
                  This policy is governed by the laws of the United Republic of
                  Tanzania and applicable international standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
