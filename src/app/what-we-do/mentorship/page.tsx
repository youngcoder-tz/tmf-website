import React from "react";
import { MentorshipHero } from "@/components/what-we-do/mentorship/MentorshipHero";
import { MentorCarousel } from "@/components/what-we-do/mentorship/MentorCarousel";
import { MentorshipTimeline } from "@/components/what-we-do/mentorship/MentorshipTimeline";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function MentorshipPage() {
  const data = siteContent.pages.mentorship_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <MentorshipHero data={{ ...data.hero, stats: data.stats }} />{" "}
      <MentorshipTimeline data={data.journey} />
      <MentorCarousel data={data.mentors} />
      <CallToAction data={cta} />
    </main>
  );
}
