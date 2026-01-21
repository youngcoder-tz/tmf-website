import React from "react";

import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";
import { MetricsHero } from "@/components/impact/metrics/MetricsHero";
import { TheoryVisualizer } from "@/components/impact/metrics/TheoryVisualizer";
import { KPICategories } from "@/components/impact/metrics/KPICategories";

export default function MetricsPage() {
  const data = siteContent.pages.metrics_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <MetricsHero data={data.hero} />
      <TheoryVisualizer data={data.theory_of_change} />
      <KPICategories data={data.kpi_categories} />
      <CallToAction data={cta} />
    </main>
  );
}
