import React from "react";
import { ResourceHero } from "@/components/resources/ResourceHero";
import { ResourceCategories } from "@/components/resources/ResourceCategories";
import { FeaturedToolkit } from "@/components/resources/research/FeaturedToolkit";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function ResourceHubPage() {
  const data = siteContent.pages.resources_hub;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* 1. SEARCH HERO */}
      <ResourceHero data={data.hero} />

      {/* 2. CATEGORY GATEWAY (Publications vs Tools) */}
      <ResourceCategories data={data} />

      {/* 3. FEATURED TOOLKIT SPOTLIGHT */}
      <FeaturedToolkit data={data.featured_spotlight} />

      {/* 4. NEWSLETTER CTA */}
      <CallToAction data={cta} />
    </main>
  );
}
