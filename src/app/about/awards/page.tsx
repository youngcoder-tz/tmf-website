import React from "react";
import { AwardsHero } from "@/components/about/awards/AwardsHero";
import { AwardWinners } from "@/components/about/awards/AwardWinners";
import { AwardList } from "@/components/about/awards/AwardList";
import { CallToAction } from "@/components/home/CallToAction"; // Golden CTA if possible, or general
import siteContent from "@/data/site-content.json";

export default function AwardsPage() {
  const data = siteContent.pages.awards_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-[#0A0500]">
      <AwardsHero data={data.hero} />
      <AwardWinners data={data.hall_of_fame} />
      <AwardList data={data.recognition_list} />
      <CallToAction data={cta} />
    </main>
  );
}
