import React from "react";
import { AccessHero } from "@/components/accessibility/AccessHero";
import { AccessFeatures } from "@/components/accessibility/AccessFeatures";
import { StandardsGrid } from "@/components/accessibility/StandardsGrid";
import { AccessibilityContact } from "@/components/accessibility/AccessibilityContact";
import { CallToAction } from "@/components/home/CallToAction"; // Standard CTA
import siteContent from "@/data/site-content.json";

export default function AccessibilityPage() {
  const data = siteContent.pages.accessibility_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <AccessHero data={data.hero} />
      <AccessFeatures data={data.features} />
      <StandardsGrid data={data.standards} />
      <AccessibilityContact />
      <CallToAction data={cta} />
    </main>
  );
}
