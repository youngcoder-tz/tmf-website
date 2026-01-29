"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Quote, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PaperItem = ({ paper, index }: { paper: any; index: number }) => {
  const [copied, setCopied] = useState(false);

  const copyCitation = () => {
    navigator.clipboard.writeText(paper.citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white border border-stone-200 p-8 md:p-10 hover:shadow-2xl transition-all duration-500 hover:border-black/50"
    >
      {/* Header Meta */}
      <div className="flex flex-wrap gap-4 items-center mb-6 text-xs font-bold uppercase tracking-wider text-stone-400">
        <span className="text-black">{paper.author}</span>
        <span className="w-px h-3 bg-stone-300" />
        <span>{paper.pages}</span>
        <div className="ml-auto flex gap-2">
          {paper.tags.map((tag: string) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-stone-200 text-stone-500 font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8">
          <h3 className="text-3xl font-serif font-bold text-[#1C1917] mb-4 group-hover:underline decoration-1 underline-offset-4">
            {paper.title}
          </h3>
          <p className="text-stone-600 leading-relaxed text-lg mb-8">
            {paper.abstract}
          </p>
        </div>

        {/* Actions */}
        <div className="md:col-span-4 flex flex-col items-start md:items-end gap-4">
          <Button className="w-full md:w-auto h-12 rounded-none bg-black text-white hover:bg-stone-800">
            <Download className="w-4 h-4 mr-2" /> PDF Download
          </Button>

          <button
            onClick={copyCitation}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-black transition-colors"
          >
            {copied ? (
              <Check className="w-3 h-3 text-green-600" />
            ) : (
              <Quote className="w-3 h-3" />
            )}
            {copied ? "Citation Copied" : "Copy Citation"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export function PaperArchive({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#F5F5F4]">
      <div className="container mx-auto px-4 max-w-5xl space-y-6">
        {data.map((paper: any, idx: number) => (
          <PaperItem key={idx} paper={paper} index={idx} />
        ))}
      </div>
    </section>
  );
}
