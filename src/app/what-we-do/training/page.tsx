import React from "react";
import { TrainingHero } from "@/components/what-we-do/training/TrainingHero";
import { PedagogySection } from "@/components/what-we-do/training/PedagogySection";
import { CourseGrid } from "@/components/what-we-do/training/CourseGrid";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function TrainingPage() {
  const data = siteContent.pages.training_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0B0F19]">
      <TrainingHero data={data.hero} />
      <PedagogySection data={data.pedagogy} />
      <CourseGrid data={data.courses} />
      <CallToAction data={cta} />
    </main>
  );
}
