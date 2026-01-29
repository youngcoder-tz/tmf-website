"use client";

import React, { useState } from "react";
import { SitemapHero } from "@/components/sitemap/SitemapHero";
import { SitemapGrid } from "@/components/sitemap/SitemapGrid";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function SitemapPage() {
  const data = siteContent.pages.sitemap_page;
  const cta = siteContent.pages.home.cta_section;

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <SitemapHero
        data={data.hero}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <SitemapGrid clusters={data.clusters} searchTerm={searchTerm} />
      <CallToAction data={cta} />
    </main>
  );
}
