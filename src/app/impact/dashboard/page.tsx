import React from "react";

import siteContent from "@/data/site-content.json";
import { DashboardHero } from "@/components/impact/dashboard/DashboardHero";
import { MetricGrid } from "@/components/impact/dashboard/MetricGrid";
import { LiveActivity } from "@/components/impact/dashboard/LiveActivity";

export default function ImpactDashboardPage() {
  const data = siteContent.pages.impact_dashboard;

  return (
    <main className="min-h-screen bg-[#0B0F17]">
      <DashboardHero data={data.hero} />
      <MetricGrid data={data.kpi_cards} />
      <LiveActivity feed={data.live_feed} geo={data.geographic_data} />
    </main>
  );
}
