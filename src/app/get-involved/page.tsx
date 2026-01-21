import React from "react";
import { InvolvedHero } from "@/components/get-involved/InvolvedHero";
import { ContactSection } from "@/components/get-involved/ContactSection";
import { FAQSection } from "@/components/get-involved/FAQSection";
import { CallToAction } from "@/components/home/CallToAction"; // Using the Donation CTA
import siteContent from "@/data/site-content.json";

export default function GetInvolvedPage() {
  const data = siteContent.pages.get_involved_page;
  const cta = siteContent.pages.home.cta_section; // Or a specific donation CTA

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <InvolvedHero data={data} />
      <ContactSection data={data.contact_info} />
      <FAQSection data={data.faqs} />
      {/* Reusing the Quantum CTA but maybe change text to 'Donate Now' via props in real app */}
      <CallToAction data={cta} />
    </main>
  );
}
