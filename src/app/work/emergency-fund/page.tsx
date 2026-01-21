import React from "react";
import { EmergencyHero } from "@/components/work/emergency/EmergencyHero";
import { EligibilityGrid } from "@/components/work/emergency/EligibilityGrid";
import { SecureProcess } from "@/components/work/emergency/SecureProcess";
import siteContent from "@/data/site-content.json";

export default function EmergencyFundPage() {
  const data = siteContent.pages.emergency_fund_page;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <EmergencyHero data={data.hero} />
      <EligibilityGrid data={data.criteria} />
      <SecureProcess data={data.process} />
    </main>
  );
}
