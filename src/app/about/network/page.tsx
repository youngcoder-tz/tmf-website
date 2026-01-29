import React from "react";
import { NetworkHero } from "@/components/about/network/NetworkHero";
import { HubShowcase } from "@/components/about/network/HubShowcase";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";
import { PartnerEcosystem } from "../../../components/about/network/PartnerEcosystem";

export default function GlobalNetworkPage() {
  const data = siteContent.pages.network_page;

  // Custom CTA
  const ctaData = {
    enabled: true,
    headline: "Join the Alliance.",
    subheadline:
      "We are always looking for technical partners and funding organizations to expand our reach.",
    primary_btn: { label: "Become a Partner", url: "/get-involved/corporate" },
    secondary_btn: {
      label: "View Annual Report",
      url: "/resources/annual-reviews",
    },
    bg_image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#02040A]">
      <NetworkHero data={data} />
      <HubShowcase data={data.regional_hubs} />
      <PartnerEcosystem data={data.partner_ecosystem} />
      <CallToAction data={ctaData} />
    </main>
  );
}
