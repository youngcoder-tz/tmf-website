"use client";

import React from "react";
import { Twitter, Linkedin, Mail, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = {
  twitter: Twitter,
  linkedin: Linkedin,
  email: Mail,
  quote: MessageSquare,
};

export function LoveGrid({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {data.map((item: any, idx: number) => {
            const Icon = IconMap[item.type];
            const isDarkCard =
              item.type === "quote" || item.type === "linkedin";

            return (
              <div
                key={idx}
                className={cn(
                  "break-inside-avoid rounded-2xl p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1",
                  isDarkCard
                    ? "bg-slate-900 text-white"
                    : "bg-white dark:bg-[#1E293B] border border-slate-100 dark:border-white/5",
                )}
              >
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      item.type === "twitter"
                        ? "bg-blue-100 text-blue-500"
                        : item.type === "linkedin"
                          ? "bg-blue-800 text-white"
                          : "bg-slate-100 text-slate-500 dark:bg-white/10",
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {item.date && (
                    <span className="text-xs opacity-50">{item.date}</span>
                  )}
                </div>

                <p
                  className={cn(
                    "leading-relaxed mb-6",
                    isDarkCard
                      ? "text-lg font-serif italic"
                      : "text-sm text-slate-600 dark:text-slate-300",
                  )}
                >
                  {item.type === "email" ? (
                    <em>"Subject: {item.subject}..."</em>
                  ) : null}
                  <br />
                  {item.content}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400" />
                  <div>
                    <p
                      className={cn(
                        "text-sm font-bold",
                        isDarkCard
                          ? "text-white"
                          : "text-slate-900 dark:text-white",
                      )}
                    >
                      {item.handle || item.author}
                    </p>
                    {item.role && (
                      <p className="text-[10px] uppercase opacity-60">
                        {item.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
