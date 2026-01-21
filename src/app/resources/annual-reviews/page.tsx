import React from "react";
import { AnnualHero } from "@/components/resources/AnnualHero";
import { AnnualArchive } from "@/components/resources/AnnualArchive";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function AnnualReviewsPage() {
  const data = siteContent.pages.annual_reviews;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <AnnualHero data={data} />
      <AnnualArchive data={data} />
      <CallToAction data={cta} />
    </main>
  );
}
