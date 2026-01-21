import { CallToAction } from "@/components/home/CallToAction";
import { CoverageHero } from "@/components/impact/coverage/CoverageHero";
import { PressGrid } from "@/components/impact/coverage/PressGrid";
import siteContent from "@/data/site-content.json";

export default function CoveragePage() {
  const data = siteContent.pages.coverage_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <CoverageHero data={data.hero} />
      <PressGrid data={data.articles} />
      <CallToAction data={cta} />
    </main>
  );
}
