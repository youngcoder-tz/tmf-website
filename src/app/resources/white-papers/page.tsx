import React from "react";
import { PaperHero } from "@/components/resources/white-papers/PaperHero";
import { PaperArchive } from "@/components/resources/white-papers/PaperArchive";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function WhitePapersPage() {
  const data = siteContent.pages.white_papers_page;
  const cta = siteContent.pages.home.cta_section;

  // Custom "Academic" CTA
  const academicCTA = {
    ...cta,
    headline: "Contribute to the discourse.",
    subheadline:
      "We accept abstract submissions from media scholars and practitioners year-round.",
    primary_btn: { label: "Submit Abstract", url: "#" },
    bg_image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop",
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <PaperHero data={data.hero} />
      <PaperArchive data={data.papers} />
      <CallToAction data={academicCTA} />
    </main>
  );
}
