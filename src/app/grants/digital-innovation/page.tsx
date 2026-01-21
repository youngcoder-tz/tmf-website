import React from "react";
import { DigitalHero } from "@/components/grants/digital/DigitalHero";
import { FocusAreas } from "@/components/grants/digital/FocusAreas";
import { InnovationShowcase } from "@/components/grants/digital/InnovationShowcase";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function DigitalInnovationPage() {
  const data = siteContent.pages.digital_innovation_page;

  // Custom CTA with Cyber Theme
  const ctaData = {
    enabled: true,
    headline: "Build the Future.",
    subheadline:
      "Got a radical idea for news distribution? Our seed fund is always open for prototypes.",
    primary_btn: { label: "Submit Prototype", url: "#" },
    secondary_btn: { label: "Join Slack", url: "#" },
    bg_image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    <main className="min-h-screen bg-[#050A0F]">
      <DigitalHero data={data.hero} />
      <FocusAreas data={data.focus_areas} />
      <InnovationShowcase data={data.featured_innovations} />
      {/* Note: You might want to style the CTA component to accept a 'cyber' prop to change colors to Green/Black */}
      <CallToAction data={ctaData} />
    </main>
  );
}
