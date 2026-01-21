import React from "react";

import { CallToAction } from "@/components/home/CallToAction"; // Using a Dark CTA
import siteContent from "@/data/site-content.json";
import { StoriesHero } from "@/components/impact/stories/StoriesHero";
import { VideoGrid } from "@/components/impact/stories/VideoGrid";

export default function ImpactStoriesPage() {
  const data = siteContent.pages.impact_stories_page;
  const cta = siteContent.pages.home.cta_section; // Or custom

  return (
    <main className="min-h-screen bg-[#0B0F17]">
      <StoriesHero data={data.hero} />
      <VideoGrid data={data} />
      <CallToAction data={cta} />
    </main>
  );
}
