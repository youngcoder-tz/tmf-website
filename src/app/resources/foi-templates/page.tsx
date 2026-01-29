import React from "react";
import { FOIHero } from "@/components/resources/foi/FOIHero";
import { TemplateGallery } from "@/components/resources/foi/TemplateGallery";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function FOIPage() {
  const data = siteContent.pages.foi_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <FOIHero data={data.hero} />
      <TemplateGallery data={data.templates} />
      <CallToAction
        data={{
          ...cta,
          headline: "Need Legal Backup?",
          subheadline:
            "If your FOI request is rejected, our legal team can help you file an appeal.",
          primary_btn: { label: "Contact Legal Desk", url: "#" },
        }}
      />
    </main>
  );
}
