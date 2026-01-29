"use client";

import React from "react";
import { FileCheck, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AuditTable({ audits, docs }: { audits: any[]; docs: any[] }) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0B0F17]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
          {/* LEFT: Annual Audits */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Audit History
            </h2>
            <div className="space-y-4">
              {audits.map((audit: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                      {audit.year}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-slate-900 dark:text-white text-lg">
                          {audit.firm}
                        </span>
                        <span className="text-xs bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded text-slate-500 font-medium">
                          {audit.opinion}
                        </span>
                      </div>
                      <span className="text-sm text-slate-400">
                        Assets Managed: {audit.assets}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg border-slate-200 dark:border-white/10"
                  >
                    <Download className="w-4 h-4 mr-2" /> PDF
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Governance Docs */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Policies
            </h2>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-white/5 p-6 shadow-sm">
              <ul className="space-y-0">
                {docs.map((doc: any, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between py-4 border-b border-slate-100 dark:border-white/5 last:border-0 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <FileCheck className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {doc.title}
                      </span>
                    </div>
                    <span className="text-xs text-slate-300 uppercase font-bold">
                      {doc.size}
                    </span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6 bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                Compliance Portal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
