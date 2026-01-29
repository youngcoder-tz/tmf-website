import React from "react";
import { LeadershipHero } from "@/components/about/leadership/LeadershipHero";
import { ExecTeam } from "@/components/about/leadership/ExecTeam";
import { BoardMembers } from "@/components/about/leadership/BoardMembers";
import { OrgStructure } from "@/components/about/leadership/OrgStructure";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function LeadershipPage() {
  const data = siteContent.pages.leadership_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <LeadershipHero data={data.hero} />
      <ExecTeam data={data.executives} />
      <OrgStructure data={data.org_structure} />
      <BoardMembers data={data.board} />
      <CallToAction data={cta} />
    </main>
  );
}
