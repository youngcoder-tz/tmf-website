import React from "react";

import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";
import { FellowshipHero } from "@/components/get-involved/fellowships/FellowshipHero";
import { ValuePillars } from "@/components/get-involved/fellowships/ValuePillars";
import { FellowshipCurriculum } from "@/components/get-involved/fellowships/FellowshipCurriculum";
import { AlumniSpotlight } from "@/components/get-involved/fellowships/AlumniSpotlight";

export default function FellowshipPage() {
  const data = siteContent.pages.fellowships_page;

  // Custom CTA for this page
  const ctaData = {
    enabled: true,
    headline: "Ready to Lead?",
    subheadline:
      "Applications for the Class of 2025 are reviewed on a rolling basis. Early application is recommended.",
    primary_btn: { label: "Start Application", url: "#" },
    secondary_btn: { label: "Download Syllabus", url: "#" },
    bg_image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    <main className="min-h-screen bg-[#020617]">
      <FellowshipHero data={data.hero} />
      <ValuePillars data={data.value_prop} />
      <FellowshipCurriculum data={data.curriculum} />
      <AlumniSpotlight data={data.alumni} />
      <CallToAction data={ctaData} />
    </main>
  );
}
