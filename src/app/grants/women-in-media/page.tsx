import React from "react";
import { WomenHero } from "@/components/grants/women/WomenHero";
import { ProgramTracks } from "@/components/grants/women/ProgramTracks";
import { MentorshipTree } from "@/components/grants/women/MentorshipTree"; // NEW
import { LeadershipModules } from "@/components/grants/women/LeadershipModules"; // NEW
import { SafetyVault } from "@/components/grants/women/SafetyVault"; // NEW
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function WomenMediaPage() {
  const data = siteContent.pages.women_media_page;
  // extras are in `data` based on Step 1

  return (
    <main className="min-h-screen bg-[#2E0219]">
      <WomenHero data={data.hero} />

      {/* DEEP CONTENT ADDED */}
      <MentorshipTree data={data.mentorship_network} />

      <ProgramTracks data={data.tracks} />

      <LeadershipModules data={data.curriculum_modules} />

      <SafetyVault data={data.safety_protocol} />

      <CallToAction data={siteContent.pages.home.cta_section} />
    </main>
  );
}
