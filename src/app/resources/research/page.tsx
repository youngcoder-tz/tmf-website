import React from "react";
import { ResearchHero } from "@/components/resources/research/ResearchHero";
import { ResearchArchive } from "@/components/resources/research/ResearchArchive";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function ResearchPage() {
  const data = siteContent.pages.research_portal;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <ResearchHero data={data.hero} />
      <ResearchArchive data={data} />
      <CallToAction data={cta} />
    </main>
  );
}
