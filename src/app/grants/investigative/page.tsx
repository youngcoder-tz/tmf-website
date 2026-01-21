import React from "react";
import { InvestigativeHero } from "@/components/grants/investigative/InvestigativeHero";
import { GrantScope } from "@/components/grants/investigative/GrantScope";
import { ApplicationTimeline } from "@/components/grants/investigative/ApplicationTimeline";
import { InvestigativeArchive } from "@/components/grants/investigative/InvestigativeArchive";
import { JuryReveal } from "@/components/grants/investigative/JuryReveal";
import { RequirementsList } from "@/components/grants/investigative/RequirementsList";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function InvestigativeGrantPage() {
  const data = siteContent.pages.investigative_page;

  // FIX: Map the unique investigative CTA data to the shared component structure
  const ctaData = {
    enabled: true,
    headline: data.cta_card.title, // Map 'title' to 'headline'
    subheadline: data.cta_card.subtitle, // Map 'subtitle' to 'subheadline'
    primary_btn: {
      label: data.cta_card.button,
      url: "/portal/apply/investigative", // Add the missing URL
    },
    secondary_btn: {
      label: "Anonymous Tip Line",
      url: "/contact/secure",
    },
    bg_image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <InvestigativeHero data={data.hero} />

      <GrantScope data={data.tracks} />

      {/* Archive of past wins */}
      {data.archive_stories && (
        <InvestigativeArchive data={data.archive_stories} />
      )}

      <ApplicationTimeline data={data.process} />

      {/* Trust & Prep sections */}
      {data.jury_members && <JuryReveal data={data.jury_members} />}
      {data.requirements && <RequirementsList data={data.requirements} />}

      <CallToAction data={ctaData} />
    </main>
  );
}
