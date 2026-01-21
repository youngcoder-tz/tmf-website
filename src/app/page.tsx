// src/app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import React from "react";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { ImpactBentoGrid } from "@/components/home/ImpactBentoGrid";
import { LiveStatsSection } from "@/components/home/LiveStatsSection";
import { FeaturedStory } from "@/components/home/FeaturedStory";
import { ProgramShowcase } from "@/components/home/ProgramShowcase";
import { CallToAction } from "@/components/home/CallToAction";

// Load CMS data
async function getCMSData() {
  try {
    // In production, fetch from your CMS
    // const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_API}/api/pages/home`, {
    //   next: { revalidate: 3600 }
    // })
    // return await response.json()

    // For now, use local JSON
    const data = await import("@/data/site-content.json");
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
      hero_background:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
      featured_card:
        "https://images.stockcake.com/public/3/d/1/3d169100-1f71-4d0b-bf14-546e2e0a7955_large/media-coverage-event-stockcake.jpg",
      abstract_shape:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
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
    <main className=" bg-white  dark:bg-gray-950   overflow-hidden">
      {/* Hero Section with CMS Data */}
      <HeroSection data={cmsData.pages?.home?.hero} assets={assets} />

      {/* Rest of the page sections */}
      {/* <PartnersMarquee data={cmsData.pages?.home?.partners} /> */}
      <ImpactBentoGrid data={cmsData.pages?.home?.mission_bento} />
      <LiveStatsSection data={cmsData.pages?.home?.stats} />
      <FeaturedStory data={cmsData.pages?.home?.featured_story} />
      <ProgramShowcase data={cmsData.pages?.home?.program_showcase} />
      <CallToAction data={cmsData.pages?.home?.cta_section} />
    </main>
  );
}
