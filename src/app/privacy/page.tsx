import React from "react";
import { PrivacyHero } from "@/components/privacy/PrivacyHero";
import { RightsGrid } from "@/components/privacy/RightsGrid";
import { LegalContent } from "@/components/privacy/LegalContent";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function PrivacyPage() {
  const data = siteContent.pages.privacy_page;
  const cta = siteContent.pages.home.cta_section;

  // Use a calm, reassuring CTA
  const safeCTA = {
    ...cta,
    headline: "Your Trust Matters.",
    subheadline:
      "We are committed to protecting the brave men and women who tell the stories of our time.",
    primary_btn: { label: "Contact Compliance Team", url: "#" },
    secondary_btn: { label: "Download PDF Policy", url: "#" },
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <PrivacyHero data={data.hero} />
      <RightsGrid data={data.user_rights} />
      <LegalContent sections={data.sections} />
      <CallToAction data={safeCTA} />
    </main>
  );
}
