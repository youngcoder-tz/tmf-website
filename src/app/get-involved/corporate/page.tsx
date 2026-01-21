import React from "react";
import { CorporateHero } from "@/components/get-involved/corporate/CorporateHero";
import { PartnershipTiers } from "@/components/get-involved/corporate/PartnershipTiers";
import { PartnerLogos } from "@/components/get-involved/corporate/PartnerLogos";
import { ContactSection } from "@/components/get-involved/ContactSection"; // Reuse form
import siteContent from "@/data/site-content.json";

export default function CorporatePage() {
  const data = siteContent.pages.corporate_page;
  const contactData = siteContent.pages.get_involved_page.contact_info; // Reuse contact info

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <CorporateHero data={data.hero} />
      <PartnerLogos logos={data.current_partners} />
      <PartnershipTiers data={data} />

      {/* Specific Corporate Contact Context */}
      <div className="py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Let's Discuss Partnership
          </h2>
          <p className="text-slate-500">
            Our partnerships team will respond within 24 hours.
          </p>
        </div>
        <ContactSection data={contactData} />
      </div>
    </main>
  );
}
