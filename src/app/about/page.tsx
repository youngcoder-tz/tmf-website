import React from "react";
import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { StoryTimeline } from "@/components/about/StoryTimeline";
import { CoreValues } from "@/components/about/CoreValues";
import { ImpactModel } from "@/components/about/ImpactModel";
import { TeamGrid } from "@/components/about/TeamGrid";
import { CallToAction } from "@/components/home/CallToAction";
import { MissionStatement } from "@/components/about/MissionStatement";

// --- METADATA (SEO) ---
export const metadata: Metadata = {
  title: "About Us | Tanzania Media Foundation",
  description:
    "We are the strategic backbone of independent media in Tanzania. Learn about our 15+ year journey, our impact model, and the team driving change.",
};

// --- DATA FETCHING ---
async function getAboutPageData() {
  // In a real app, this would be: await client.fetch(query)
  const data = await import("@/data/site-content.json");
  return {
    about: data.default.pages.about,
    cta: data.default.pages.home.cta_section, // Reusing the high-impact CTA
  };
}

export default async function AboutPage() {
  const { about, cta } = await getAboutPageData();

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-orange-500/30">
      {/* 1. HERO: Massive Typography + Image Collage */}
      <AboutHero data={about.hero} />

      <MissionStatement data={about.mission_statement} />

      {/* 2. VALUES: Clean 4-Column Grid */}
      <CoreValues data={about.core_values} />

      {/* 3. IMPACT: Graphic + Circular Stats */}
      <ImpactModel data={about.impact_model} />

      {/* 4. STORY: Vertical Clean Timeline */}
      <StoryTimeline data={about.story_timeline} />

      {/* 5. TEAM: Rounded Cards */}
      <TeamGrid data={about.team} />

      {/* 6. CTA: The "Quantum" Footer */}
      <CallToAction data={cta} />
    </main>
  );
}
