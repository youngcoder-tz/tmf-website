import React from "react";

import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";
import { TrustHero } from "@/components/impact/trust-index/TrustHero";
import { ChannelComparison } from "@/components/impact/trust-index/ChannelComparison";
import { Demographics } from "@/components/impact/trust-index/Demographics";

export default function TrustIndexPage() {
  const data = siteContent.pages.trust_index_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <TrustHero data={data.hero} />
      <ChannelComparison data={data.media_channels} />
      <Demographics data={data.demographics} />
      <CallToAction data={cta} />
    </main>
  );
}
