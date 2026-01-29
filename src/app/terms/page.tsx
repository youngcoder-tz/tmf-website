import React from "react";
import { TermsHero } from "@/components/terms/TermsHero";
import { TermsContent } from "@/components/terms/TermsContent";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function TermsPage() {
  const data = siteContent.pages.terms_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0B0F19]">
      <TermsHero data={data.hero} />
      <TermsContent sections={data.sections} />
      <CallToAction
        data={{
          ...cta,
          headline: "Have Questions?",
          subheadline:
            "Our legal team is available to clarify any terms regarding grants or partnerships.",
        }}
      />
    </main>
  );
}
