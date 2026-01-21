import React from "react";

import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";
import { CaseGrid } from "@/components/impact/caseStudy/CaseGrid";
import { CaseStudyHero } from "@/components/impact/caseStudy/CaseStudyHero";

export default function CaseStudiesPage() {
  const data = siteContent.pages.case_studies;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17]">
      <CaseStudyHero data={data.hero} />
      <CaseGrid data={data.studies} />
      <CallToAction data={cta} />
    </main>
  );
}
