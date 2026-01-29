import React from "react";
import { ReportHero } from "@/components/about/annual/ReportHero";
import { DirectorLetter } from "@/components/about/annual/DirectorLetter";
import { HighlightsGrid } from "@/components/about/annual/HighlightsGrid";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function AnnualReportMicrosite() {
  const data = siteContent.pages.annual_report_microsite;

  // Custom CTA to download full PDF
  const ctaData = {
    enabled: true,
    headline: "Get the Full Picture.",
    subheadline:
      "Download the complete 140-page report including audited financials and grantee case studies.",
    primary_btn: { label: "Download PDF (12MB)", url: "#" },
    secondary_btn: {
      label: "View Previous Years",
      url: "/resources/annual-reviews",
    },
    bg_image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <ReportHero data={data.hero} />
      <DirectorLetter data={data.directors_letter} />
      <HighlightsGrid data={data.year_highlights} />
      <CallToAction data={ctaData} />
    </main>
  );
}
