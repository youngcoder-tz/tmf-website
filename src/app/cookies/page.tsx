import React from "react";
import { CookiesHero } from "@/components/cookies/CookiesHero";
import { PreferencesPanel } from "@/components/cookies/PreferencesPanel";
import { CookieTable } from "@/components/cookies/CookieTable";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function CookiesPage() {
  const data = siteContent.pages.cookies_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <CookiesHero data={data.hero} />
      <PreferencesPanel data={data.preference_categories} />
      <CookieTable data={data.cookie_audit} />
      {/* A calm CTA for the legal page */}
      <CallToAction
        data={{
          ...cta,
          headline: "Value Privacy?",
          subheadline:
            "So do we. Join a community that fights for digital rights.",
        }}
      />
    </main>
  );
}
