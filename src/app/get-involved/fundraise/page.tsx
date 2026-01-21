import React from "react";
import { FundraiseHero } from "@/components/get-involved/fundraise/FundraiseHero";
import { CampaignIdeas } from "@/components/get-involved/fundraise/CampaignIdeas";
import { FundraiseSteps } from "@/components/get-involved/fundraise/FundraiseSteps";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function FundraisePage() {
  const data = siteContent.pages.fundraise_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <FundraiseHero data={data.hero} />
      <FundraiseSteps data={data.steps} />
      <CampaignIdeas data={data.ideas} />

      {/* Reuse CTA but maybe override text in a real app */}
      <CallToAction data={cta} />
    </main>
  );
}
