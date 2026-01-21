"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

const partnerLogos = [
  { name: "UNESCO", logo: "/logos/unesco.png" },
  { name: "EU Commission", logo: "/logos/eu.svg" },
  { name: "Ford Foundation", logo: "/logos/ford.png" },
  { name: "Open Society", logo: "/logos/open.png" },
  { name: "Google News Initiative", logo: "/logos/google.png" },
  { name: "Reuters Institute", logo: "/logos/reuters.svg" },
  { name: "BBC Media Action", logo: "/logos/bbc.svg" },
  { name: "DW Akademie", logo: "/logos/dw.svg" },
];

export function FooterPartners() {
  return (
    <div className="relative border-t border-gray-200/70 dark:border-white/10 bg-gray-50/60 dark:bg-black/30">
      <div className="container mx-auto px-4 py-6">
        {/* Label */}
        <p className="mb-5 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
          Trusted by Global Partners
        </p>

        {/* Marquee */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-14 py-2">
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <LogoItem key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>

      {/* Animation (scoped, production-safe) */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 42s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

/* ---------------- Logo Item ---------------- */

function LogoItem({ partner }: { partner: { name: string; logo: string } }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        "opacity-60 grayscale",
        "transition-all duration-500 ease-out",
        "hover:opacity-100 hover:grayscale-0 hover:-translate-y-px"
      )}
      aria-label={partner.name}
    >
      <div className="relative h-8 min-w-30 flex items-center justify-center">
        {!hasError ? (
          <Image
            src={partner.logo}
            alt={partner.name}
            width={140}
            height={40}
            className="object-contain backdrop-blur-2xl"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-400">
            {partner.name}
          </span>
        )}
      </div>
    </div>
  );
}
