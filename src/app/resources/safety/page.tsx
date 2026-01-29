import React from "react";
import { SafetyHero } from "@/components/resources/safety/SafetyHero";
import { ProtocolList } from "@/components/resources/safety/ProtocolList";
import siteContent from "@/data/site-content.json";

export default function SafetyPage() {
  const data = siteContent.pages.safety_page;

  return (
    <main className="min-h-screen bg-[#292524]">
      <SafetyHero data={data.hero} />
      <ProtocolList data={data.protocols} />
    </main>
  );
}
