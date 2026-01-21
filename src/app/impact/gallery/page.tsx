import React from "react";

import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";
import { GalleryHero } from "@/components/impact/gallery/GalleryHero";
import { MasonryGallery } from "@/components/impact/gallery/MasonryGallery";

export default function GalleryPage() {
  const data = siteContent.pages.gallery_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-black">
      <GalleryHero data={data.hero} />
      <MasonryGallery data={data} />
      <CallToAction data={cta} />
    </main>
  );
}
