import React from "react";
import { FinancialHero } from "@/components/about/financials/FinancialHero";
import { ExpenseBreakdown } from "@/components/about/financials/ExpenseBreakdown";
import { AuditTable } from "@/components/about/financials/AuditTable";
import { CallToAction } from "@/components/home/CallToAction";
import siteContent from "@/data/site-content.json";

export default function FinancialsPage() {
  const data = siteContent.pages.financials_page;
  const cta = siteContent.pages.home.cta_section;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <FinancialHero data={data.hero} />
      <ExpenseBreakdown data={data.expense_breakdown} />
      <AuditTable audits={data.audit_timeline} docs={data.governance_docs} />
      <CallToAction data={cta} />
    </main>
  );
}
