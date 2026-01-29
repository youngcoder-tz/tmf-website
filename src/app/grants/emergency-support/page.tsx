import React from "react";
import { EmergencyHero } from "@/components/grants/emergency/EmergencyHero";
import { CoverageScope } from "@/components/grants/emergency/CoverageScope";
import { SafetySteps } from "@/components/grants/emergency/SafetySteps";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function EmergencySupportPage() {
  const data = siteContent.pages.emergency_grant_page;

  // Minimalist CTA for privacy
  const ctaData = {
    enabled: true,
    headline: "Not an emergency?",
    subheadline:
      "If you have time to plan, explore our standard project grants.",
    primary_btn: { label: "View All Grants", url: "/grants" },
    secondary_btn: {
      label: "Digital Security Training",
      url: "/what-we-do/digital-security",
    },
    bg_image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    <main className="min-h-screen bg-[#1a0505]">
      <EmergencyHero data={data.hero} />
      <CoverageScope data={data.eligibility} />
      <SafetySteps data={data.process_steps} />
      <CallToAction data={ctaData} />
    </main>
  );
}
