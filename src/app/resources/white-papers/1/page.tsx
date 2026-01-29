import React from "react";
import { WhitePaperHero } from "@/components/resources/white-papers/WhitePaperHero";
import { FeaturedPaper } from "@/components/resources/white-papers/FeaturedPaper";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";
import { PaperArchive } from "@/components/resources/white-papers/paperarchive1";

export default function WhitePapersPage() {
  const data = siteContent.pages.white_papers_pages;

  // Intellectual CTA
  const ctaData = {
    enabled: true,
    headline: "Contribute to the Body of Knowledge.",
    subheadline:
      "Are you a researcher or academic interested in Tanzanian media? Apply for our Research Fellowship.",
    primary_btn: { label: "Research Grants", url: "/grants/research" }, // Assuming this exists or points to generic
    secondary_btn: { label: "Submit Abstract", url: "/contact" },
    bg_image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    <main className="min-h-screen bg-[#F9F8F6] dark:bg-[#0F0F0F]">
      <WhitePaperHero data={data.hero} />
      <FeaturedPaper data={data.featured_paper} />
      <PaperArchive data={data.papers_list} />
      <CallToAction data={ctaData} />
    </main>
  );
}
