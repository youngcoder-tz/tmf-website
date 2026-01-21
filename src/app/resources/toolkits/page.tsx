import React from "react";
import { ToolkitsHero } from "@/components/resources/tollkit/ToolkitsHero";
import { ToolkitsGrid } from "@/components/resources/tollkit/ToolkitsGrid";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function ToolkitsPage() {
  const data = siteContent.pages.toolkits_portal;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <ToolkitsHero data={data.hero} />
      <ToolkitsGrid data={data} />
      <CallToAction data={cta} />
    </main>
  );
}
