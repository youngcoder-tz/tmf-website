import React from "react";
import { SecurityHero } from "@/components/what-we-do/security/SecurityHero";
import { ThreatGrid } from "@/components/what-we-do/security/ThreatGrid";
import { SecurityTools } from "@/components/what-we-do/security/SecurityTools";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function DigitalSecurityPage() {
  const data = siteContent.pages.digital_security_page;
  // Use a Cyber CTA
  const ctaData = { ...siteContent.pages.home.cta_section, bg_theme: "cyber" };

  return (
    <main className="min-h-screen bg-[#050A0E]">
      <SecurityHero data={data.hero} />
      <ThreatGrid data={data.threats} />
      <SecurityTools data={data.tools} />
      <CallToAction data={ctaData} />
    </main>
  );
}
