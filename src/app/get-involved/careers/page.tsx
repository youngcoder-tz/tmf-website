import React from "react";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";
import { CareersHero } from "@/components/get-involved/career/CareersHero";
import { JobsList } from "@/components/get-involved/career/JobsList";
import { CultureGrid } from "@/components/get-involved/career/CultureGrid";

export default function CareersPage() {
  const data = siteContent.pages.careers_page;
  // Custom CTA for Careers
  const ctaData = {
    enabled: true,
    headline: "Ready to Apply?",
    subheadline:
      "The application process takes less than 10 minutes. No cover letters required.",
    primary_btn: { label: "See Roles", url: "#jobs" },
    secondary_btn: { label: "Read Handbook", url: "#" },
    bg_image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <CareersHero data={data.hero} />
      <CultureGrid data={data.culture} />
      <div id="jobs">
        <JobsList jobs={data.jobs} />
      </div>
      <CallToAction data={ctaData} />
    </main>
  );
}
