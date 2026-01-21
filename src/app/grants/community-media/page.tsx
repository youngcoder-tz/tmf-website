import React from "react";
import { CommunityHero } from "@/components/grants/community/CommunityHero";
import { SupportPillars } from "@/components/grants/community/SupportPillars";
import { StationStories } from "@/components/grants/community/StationStories";
import { CoverageMap } from "@/components/grants/community/CoverageMap"; // NEW
import { TechGallery } from "@/components/grants/community/TechGallery"; // NEW
import { RevenueModel } from "@/components/grants/community/RevenueModel"; // NEW
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function CommunityMediaPage() {
  const data = siteContent.pages.community_media_page;
  const extras = data; // Since we added the new data directly to the main object in Step 1

  return (
    <main className="min-h-screen bg-[#3F2E23]">
      <CommunityHero data={{ ...data.hero, impact_stats: data.impact_stats }} />

      {/* THE NEW DEEP CONTENT SECTIONS */}
      <CoverageMap data={extras.coverage_data} />
      <RevenueModel data={extras.revenue_model} />

      <SupportPillars data={data.support_pillars} />
      <StationStories data={data.station_stories} />

      {/* Reuse Earthy CTA logic from previous steps */}
      <CallToAction data={siteContent.pages.home.cta_section} />
    </main>
  );
}
