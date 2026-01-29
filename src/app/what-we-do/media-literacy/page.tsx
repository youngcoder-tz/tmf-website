import React from "react";
import { LiteracyHero } from "@/components/what-we-do/literacy/LiteracyHero";
import { DisinfoDeconstruct } from "@/components/what-we-do/literacy/DisinfoDeconstruct";
import { CurriculumTracks } from "@/components/what-we-do/literacy/CurriculumTracks";
import { ImpactSpread } from "@/components/what-we-do/literacy/ImpactSpread";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function MediaLiteracyPage() {
  const data = siteContent.pages.media_literacy_page;
  // Custom "Educational" CTA
  const ctaData = {
    enabled: true,
    headline: "Bring this to your school.",
    subheadline:
      "We offer subsidized workshops for public secondary schools and universities.",
    primary_btn: { label: "Teacher Application", url: "#" },
    secondary_btn: { label: "Download Guide", url: "#" },
    bg_image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    <main className="min-h-screen bg-[#F5F2ED]">
      <LiteracyHero data={data.hero} />
      <DisinfoDeconstruct data={data.anatomy_section} />
      <CurriculumTracks data={data.tracks} />
      <ImpactSpread data={data.reach_map} />
      <CallToAction data={ctaData} />
    </main>
  );
}
