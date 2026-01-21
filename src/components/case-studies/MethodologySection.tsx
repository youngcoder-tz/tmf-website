// components/case-studies/MethodologySection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Search,
  Users,
  FileText,
  BarChart3,
  Shield,
  Globe,
  TrendingUp,
  CheckCircle,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MethodologySection: React.FC = () => {
  const methodologies = [
    {
      title: "Investigative Journalism",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      steps: [
        "Data Analysis & FOI Requests",
        "Undercover Reporting",
        "Source Protection",
        "Legal Review & Fact-Checking",
      ],
      tools: [
        "Data scraping tools",
        "Encrypted communication",
        "Document verification",
      ],
    },
    {
      title: "Community Engagement",
      icon: Users,
      color: "from-emerald-500 to-green-500",
      steps: [
        "Needs Assessment",
        "Participatory Planning",
        "Capacity Building",
        "Impact Measurement",
      ],
      tools: ["Community surveys", "Focus groups", "Participatory evaluation"],
    },
    {
      title: "Digital Innovation",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      steps: [
        "Design Thinking Workshops",
        "Prototype Development",
        "User Testing",
        "Scale & Deployment",
      ],
      tools: [
        "Digital tools",
        "User testing platforms",
        "Analytics dashboards",
      ],
    },
    {
      title: "Policy Advocacy",
      icon: FileText,
      color: "from-amber-500 to-orange-500",
      steps: [
        "Research & Analysis",
        "Stakeholder Mapping",
        "Coalition Building",
        "Policy Recommendations",
      ],
      tools: ["Policy briefs", "Stakeholder analysis", "Advocacy campaigns"],
    },
  ];

  return (
    <div className="mt-12 space-y-8">
      <div className="text-center">
        <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-1.5">
          <Target className="h-4 w-4 mr-2" />
          Our Methodologies
        </Badge>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          How We Create Impact
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the proven methodologies and approaches that drive successful
          outcomes in our projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {methodologies.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group relative overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div
                  className={`h-14 w-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6`}
                >
                  <method.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {method.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Steps
                    </h4>
                    <ul className="space-y-2">
                      {method.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {method.tools.map((tool, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Success Factors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Success Rate",
                value: "92%",
                description: "Projects achieving goals",
                icon: TrendingUp,
                color: "text-emerald-500",
              },
              {
                title: "Team Expertise",
                value: "15+",
                description: "Years average experience",
                icon: Users,
                color: "text-blue-500",
              },
              {
                title: "Global Standards",
                value: "ISO",
                description: "Certified methodologies",
                icon: Shield,
                color: "text-purple-500",
              },
              {
                title: "Impact Scale",
                value: "1M+",
                description: "People reached annually",
                icon: Globe,
                color: "text-amber-500",
              },
            ].map((factor, index) => (
              <div key={index} className="text-center p-4">
                <factor.icon
                  className={`h-8 w-8 mx-auto mb-4 ${factor.color}`}
                />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {factor.value}
                </div>
                <div className="font-medium text-gray-900 dark:text-white mb-1">
                  {factor.title}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {factor.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MethodologySection;
