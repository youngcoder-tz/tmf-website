import React from "react";
import { EventsHero } from "@/components/get-involved/events/EventsHero";
import { EventGrid } from "@/components/get-involved/events/EventGrid";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function EventsPage() {
  const data = siteContent.pages.events_page;
  // Custom CTA
  const ctaData = {
    enabled: true,
    headline: "Host an Event with Us.",
    subheadline:
      "Partner with TMF to organize a workshop, panel, or hackathon at our Innovation Hub.",
    primary_btn: { label: "Book Venue", url: "#" },
    secondary_btn: { label: "Sponsor Event", url: "#" },
    bg_image:
      "https://images.unsplash.com/photo-1505373877741-e174b04586d2?q=80&w=2000&auto=format&fit=crop",
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <EventsHero data={data.hero} />
      <EventGrid data={data} />
      <CallToAction data={ctaData} />
    </main>
  );
}
