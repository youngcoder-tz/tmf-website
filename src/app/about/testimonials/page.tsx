import React from "react";
import { TestimonialHero } from "@/components/about/testimonials/TestimonialHero";
import { FeaturedTestimonial } from "@/components/about/testimonials/FeaturedTestimonial";
import { LoveGrid } from "@/components/about/testimonials/LoveGrid";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function TestimonialsPage() {
  const data = siteContent.pages.testimonials_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <TestimonialHero data={data.hero} />
      <FeaturedTestimonial data={data.featured_quote} />
      <LoveGrid data={data.wall_of_love} />
      <CallToAction data={cta} />
    </main>
  );
}
