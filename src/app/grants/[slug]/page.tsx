import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GrantSidebar } from "@/components/grants/GrantSidebar";
import { GrantContent } from "@/components/grants/GrantContent"; // Reuse previous content component
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";
import { GrantHeroWidget } from "@/components/grants/GrantHeroWidget";

export default function GrantDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Mock Data
  const grant = siteContent.grant_details["investigative-fund-2025"];
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* 1. HERO HEADER WITH BACKDROP */}
      <div className="relative bg-white dark:bg-slate-900 pt-32 pb-16 border-b border-slate-100 dark:border-white/5">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-8">
            <Link
              href="/grants"
              className="hover:text-blue-600 transition-colors"
            >
              Opportunities
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900 dark:text-white">
              {grant.category}
            </span>
          </div>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT COLUMN: Title & Summary (Spans 7 cols now) */}
            <div className="lg:col-span-7">
              <div className="flex gap-3 mb-6">
                <Badge className="bg-blue-600 text-white border-0 px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-500/20">
                  {grant.category}
                </Badge>
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-0 px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">
                  {grant.status.replace("_", " ")}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.05]">
                {grant.title}
              </h1>
              <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-xl">
                {grant.summary}
              </p>
            </div>

            {/* RIGHT COLUMN: The New Hero Widget (Spans 5 cols) */}
            <div className="lg:col-span-5 pl-0 lg:pl-12">
              <GrantHeroWidget data={grant} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* LEFT COLUMN: Main Content + Image */}
          <div className="lg:col-span-8">
            {/* Hero Image */}
            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 border-4 border-white dark:border-slate-800">
              <img
                src={grant.image}
                alt={grant.title}
                className="w-full h-full object-cover"
              />
              {/* Partner Logo Overlay */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                <span className="text-xs font-bold uppercase text-slate-400">
                  Supported By
                </span>
                <img
                  src={grant.partner_logo}
                  className="h-6 object-contain"
                  alt={grant.partner}
                />
              </div>
            </div>

            {/* Reuse the Content Component */}
            <GrantContent data={grant} />
          </div>

          {/* RIGHT COLUMN: The "Super Sidebar" */}
          <div className="lg:col-span-4 relative">
            <GrantSidebar data={grant} />
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <CallToAction data={cta} />
    </main>
  );
}
