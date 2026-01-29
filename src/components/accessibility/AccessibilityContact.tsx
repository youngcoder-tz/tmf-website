"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function AccessibilityContact() {
  return (
    <section className="py-20 bg-yellow-50 dark:bg-yellow-900/10 border-t border-yellow-200 dark:border-yellow-900/30">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Found a Barrier?
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-10">
          If you experience any difficulty accessing content on our site, please
          let us know. Our technical team prioritizes these fixes.
        </p>

        <form className="space-y-4 text-left p-8 bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl border border-yellow-500/20">
          <div>
            <label className="text-xs font-bold uppercase text-slate-500 mb-1 block">
              Your Name (Optional)
            </label>
            <Input
              className="h-12 bg-slate-50 dark:bg-black border-slate-200 dark:border-white/10"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase text-slate-500 mb-1 block">
              Describe the Issue
            </label>
            <Textarea
              className="min-h-[100px] bg-slate-50 dark:bg-black border-slate-200 dark:border-white/10"
              placeholder="e.g., The navigation menu isn't working with my screen reader..."
            />
          </div>
          <Button className="w-full h-12 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-400">
            Submit Feedback
          </Button>
        </form>
      </div>
    </section>
  );
}
