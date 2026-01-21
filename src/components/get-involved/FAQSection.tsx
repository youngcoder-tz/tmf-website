"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection({ data }: { data: any }) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500">
            Quick answers to common questions about grants and partnerships.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {data.map((item: any, idx: number) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl px-6 data-[state=open]:shadow-lg transition-all"
            >
              <AccordionTrigger className="text-lg font-bold text-slate-900 dark:text-white py-6 hover:no-underline hover:text-blue-600">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 dark:text-slate-400 pb-6 text-base leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
