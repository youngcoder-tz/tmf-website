import React from "react";
import { PolicyHero } from "@/components/resources/policy/PolicyHero";
import { PolicyGrid } from "@/components/resources/policy/PolicyGrid";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function PolicyBriefsPage() {
  const data = siteContent.pages.policy_portal;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <PolicyHero data={data.hero} />
      <PolicyGrid data={data} />
      <CallToAction data={cta} />
    </main>
  );
}
