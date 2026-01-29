"use client";

import React from "react";

export function CookieTable({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Detailed Cookie Audit
        </h3>

        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-[#0B0F19] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Cookie Name</th>
                <th className="px-6 py-4">Provider</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5 bg-white dark:bg-[#11151F]">
              {data.map((cookie: any, idx: number) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 font-mono font-bold text-blue-600 dark:text-blue-400">
                    {cookie.name}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                    {cookie.provider}
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    <span className="bg-slate-100 dark:bg-white/10 px-2 py-1 rounded text-xs font-bold">
                      {cookie.duration}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 max-w-xs leading-snug">
                    {cookie.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-xs text-slate-400 text-center">
          For further questions regarding data privacy, please contact our Data
          Protection Officer at{" "}
          <a href="#" className="text-blue-500 underline">
            dpo@tmf.or.tz
          </a>
          .
        </p>
      </div>
    </section>
  );
}
