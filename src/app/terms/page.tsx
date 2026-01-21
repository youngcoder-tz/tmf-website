// src/app/page.tsx
import React from "react";
import HeroSection from "@/components/home/HeroSection";
// import { PartnersMarquee } from "@/components/sections/PartnersMarquee"
// import { ImpactBentoGrid } from "@/components/sections/ImpactBentoGrid"
// import { LiveStatsSection } from "@/components/sections/LiveStatsSection"
// import { FeaturedStory } from "@/components/sections/FeaturedStory"
// import { ProgramShowcase } from "@/components/sections/ProgramShowcase"
// import { CallToAction } from "@/components/sections/CallToAction"

// This would be your CMS fetch function
async function getCMSData() {
  try {
    // In production, fetch from your CMS
    // const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_API}/api/pages/home`, {
    //   next: { revalidate: 3600 }
    // })
    // return await response.json()

    // For now, use local JSON
    const data = await import("../../data/site-content.json");
    return data.default;
  } catch (error) {
    console.error("Error fetching CMS data:", error);
    // Fallback to static data
    const fallback = await import("@/data/fallback-content.json");
    return fallback.default;
  }
}

async function getAssets() {
  return {
    videos: {
      hero: "https://assets.tmf.org/videos/hero-impact.mp4",
      impact: "https://assets.tmf.org/videos/impact-stories.mp4",
    },
    images: {
      hero_card_1: "https://assets.tmf.org/images/hero/field-dispatch.jpg",
      hero_card_2: "https://assets.tmf.org/images/hero/impact-map.svg",
      partners: "https://assets.tmf.org/images/partners/",
    },
    animations: {
      particles: "https://assets.tmf.org/animations/network-particles.json",
      globe: "https://assets.tmf.org/animations/interactive-globe.json",
    },
  };
}

export default async function HomePage() {
  const [cmsData, assets] = await Promise.all([getCMSData(), getAssets()]);

  return (
    <main className="-mt-20 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Ultimate Hero Section */}
      <HeroSection data={cmsData.pages.home.hero} assets={assets} />

      {/* Rest of the page sections */}
      {/* <PartnersMarquee data={cmsData.pages.home.partners} />
      <ImpactBentoGrid data={cmsData.pages.home.mission_bento} />
      <LiveStatsSection data={cmsData.pages.home.stats} />
      <FeaturedStory data={cmsData.pages.home.featured_story} />
      <ProgramShowcase data={cmsData.pages.home.program_showcase} />
      <CallToAction data={cmsData.pages.home.cta_section} /> */}
    </main>
  );
}
