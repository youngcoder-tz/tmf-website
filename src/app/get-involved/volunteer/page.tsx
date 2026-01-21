import React from "react";
import { VolunteerHero } from "@/components/get-involved/volunteer/VolunteerHero";
import { VolunteerPerks } from "@/components/get-involved/volunteer/VolunteerPerks";
import { RoleBoard } from "@/components/get-involved/volunteer/RoleBoard";
import { CallToAction } from "@/components/home/CallToAction"; // Reuse general CTA or create specific one
import siteContent from "@/data/site-content.json";

export default function VolunteerPage() {
  const data = siteContent.pages.volunteer_page;
  // Custom CTA Data for this page
  const ctaData = {
    enabled: true,
    headline: "Not ready to apply?",
    subheadline:
      "Join our 'Friends of TMF' mailing list to get notified when new expert roles open up.",
    primary_btn: { label: "Join Waitlist", url: "#" },
    secondary_btn: { label: "Contact HR", url: "#" },
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <VolunteerHero data={data.hero} />
      <VolunteerPerks data={data.perks} />
      <RoleBoard roles={data.open_roles} />

      {/* Modified CTA */}
      <CallToAction data={ctaData} />
    </main>
  );
}
