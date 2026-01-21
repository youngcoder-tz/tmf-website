import React from "react";
import { DonateHero } from "@/components/get-involved/donate/DonateHero";
import { DonateImpact } from "@/components/get-involved/donate/DonateImpact";
import { CallToAction } from "@/components/home/CallToAction"; // Footer CTA
import siteContent from "@/data/site-content.json";
import { WaysToGive } from "@/components/get-involved/donate/WaysToGive";

export default function DonatePage() {
  const data = siteContent.pages.donate_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <DonateHero data={data} />
      <DonateImpact data={data.impact_section} />
      <WaysToGive data={data.ways_to_give} />

      {/* Final CTA (Reuse home CTA but usually you might customize text) */}
      <CallToAction data={cta} />
    </main>
  );
}
