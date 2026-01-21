"use client";

import React from "react";
import Image from "next/image";
import {
  Search,
  BarChart,
  Smartphone,
  Users,
  Award,
  Clock,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const IconMap: any = { Search, BarChart, Smartphone, Users };

export function CourseGrid({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0B0F19]">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">
              Curriculum
            </span>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Available Courses
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex border-slate-300">
            View Full Calendar
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((course: any, idx: number) => {
            const Icon = IconMap[course.icon];
            return (
              <div
                key={idx}
                className="group bg-white dark:bg-slate-900 rounded-[2.5rem] p-2 pr-8 border border-slate-100 dark:border-white/5 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-6 hover:-translate-y-1"
              >
                {/* Image (Left) */}
                <div className="relative w-full md:w-48 h-48 md:h-auto rounded-[2rem] overflow-hidden shrink-0">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 text-black px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide">
                    {course.level}
                  </div>
                </div>

                {/* Content (Right) */}
                <div className="py-6 flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                      {course.title}
                    </h3>
                    {course.certification && (
                      <div
                        className="text-emerald-500"
                        title="Certification Available"
                      >
                        <Award className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 text-xs font-medium text-slate-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {course.format}
                    </span>
                  </div>

                  {/* Reveal Modules on Hover (Optional Visual) */}
                  <div className="space-y-1 mb-6">
                    {course.modules
                      .slice(0, 2)
                      .map((mod: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {mod}
                        </div>
                      ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-fit p-0 h-auto font-bold text-blue-600 hover:text-blue-700 hover:bg-transparent"
                  >
                    View Details <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
