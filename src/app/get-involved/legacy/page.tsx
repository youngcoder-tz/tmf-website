import React from "react";
import { LegacyHero } from "@/components/get-involved/legacy/LegacyHero";
import { LegacyTimeline } from "@/components/get-involved/legacy/LegacyTimeline";
import { LegacyOptions } from "@/components/get-involved/legacy/LegacyOptions";
import { ContactSection } from "@/components/get-involved/ContactSection"; // Reusing form
import siteContent from "@/data/site-content.json";

export default function LegacyPage() {
  const data = siteContent.pages.legacy_page;
  const contactData = siteContent.pages.get_involved_page.contact_info;

  return (
    <main className="min-h-screen bg-[#FAF9F6] dark:bg-[#1C1917]">
      {/* 1. CINEMATIC HERO */}
      <LegacyHero data={data.hero} />

      {/* 2. GROWTH TIMELINE */}
      <LegacyTimeline data={data.impact_forecast} />

      {/* 3. OPTIONS GRID */}
      <LegacyOptions data={data.ways_to_leave} />

      {/* 4. CONFIDENTIAL CONTACT */}
      <div className="py-24 bg-white dark:bg-[#151412] border-t border-stone-100 dark:border-white/5">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-serif text-stone-900 dark:text-stone-100 mb-4">
            Confidential Consultation
          </h2>
          <p className="text-stone-500 font-serif max-w-xl mx-auto">
            Legacy planning is a private matter. Our legal team is available to
            discuss drafting language with you or your attorney, with no
            obligation.
          </p>
        </div>
        {/* Reusing the Contact Section but visually it will adapt to the parent container */}
        <div className="max-w-5xl mx-auto">
          <ContactSection data={contactData} />
        </div>
      </div>
    </main>
  );
}
