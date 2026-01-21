// components/grantees/MapVisualization.tsx
"use client";

import React from "react";
import { MapPin, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MapVisualization: React.FC<{ grantees: any[] }> = ({ grantees }) => {
  const regions = {
    "Dar es Salaam": { x: "65%", y: "80%", count: 0 },
    Arusha: { x: "40%", y: "30%", count: 0 },
    Zanzibar: { x: "75%", y: "60%", count: 0 },
    Mwanza: { x: "25%", y: "50%", count: 0 },
    Dodoma: { x: "50%", y: "60%", count: 0 },
    Mbeya: { x: "40%", y: "85%", count: 0 },
    Tanga: { x: "70%", y: "45%", count: 0 },
  };

  // Count grantees per region
  grantees.forEach((grantee) => {
    if (regions[grantee.region as keyof typeof regions]) {
      regions[grantee.region as keyof typeof regions].count++;
    }
  });

  return (
    <div className="relative p-8">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30" />

      {/* Tanzania Map SVG */}
      <div className="relative mx-auto max-w-4xl">
        <div className="relative">
          {/* Simplified Tanzania Shape */}
          <svg viewBox="0 0 800 600" className="w-full h-auto">
            {/* Tanzania Outline */}
            <path
              d="M400,100 C500,150 600,200 650,300 C700,400 650,500 500,550 C350,600 250,500 200,400 C150,300 200,200 300,150 Z"
              fill="url(#gradient)"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
            />

            {/* Gradient */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Region Points */}
          {Object.entries(regions).map(([region, data]) => (
            <div
              key={region}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ left: data.x, top: data.y }}
            >
              <div className="relative">
                {/* Pulsing Dot */}
                <div className="absolute inset-0 animate-ping bg-blue-500 rounded-full opacity-20" />
                <div
                  className={`relative h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    data.count > 0
                      ? "bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg scale-110"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  <MapPin className="h-4 w-4 text-white" />
                </div>

                {/* Label */}
                <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white dark:bg-gray-900 rounded-lg px-3 py-2 shadow-xl border border-gray-200 dark:border-gray-800">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {region}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {data.count} project{data.count !== 1 ? "s" : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Region Legend */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(regions)
            .filter(([_, data]) => data.count > 0)
            .map(([region, data]) => (
              <div
                key={region}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:shadow-md transition-shadow"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {data.count}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {region}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {data.count} project{data.count !== 1 ? "s" : ""}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button className="px-3 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors">
          Reset View
        </button>
        <button className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
          Download Data
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MapVisualization;
