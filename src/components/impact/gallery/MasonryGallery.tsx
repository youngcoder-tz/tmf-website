"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, User, Calendar, X, Expand } from "lucide-react";
import { cn } from "@/lib/utils";

export function MasonryGallery({ data }: { data: any }) {
  const [activeCat, setActiveCat] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);

  // Filter Logic
  const filteredPhotos = data.photos.filter(
    (photo: any) => activeCat === "All" || photo.category === activeCat,
  );

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        {/* 1. Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {data.categories.map((cat: string) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold border transition-all",
                activeCat === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-slate-500 border-white/10 hover:border-white/30 hover:text-white",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2. Masonry Grid using Tailwind Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredPhotos.map((photo: any, idx: number) => (
            <motion.div
              key={photo.id}
              layoutId={`photo-${photo.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedPhoto(photo)}
              className="break-inside-avoid relative group cursor-zoom-in rounded-xl overflow-hidden bg-slate-900"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-sm font-medium line-clamp-2">
                  {photo.caption}
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {photo.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {photo.photographer}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div
              className="max-w-7xl w-full h-full flex flex-col md:flex-row gap-8 items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Large Image */}
              <motion.div
                layoutId={`photo-${selectedPhoto.id}`}
                className="relative w-full md:w-3/4 h-[50vh] md:h-[85vh] rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                  className="w-full h-full object-contain bg-black"
                />
              </motion.div>

              {/* Details Sidebar (In Lightbox) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full md:w-1/4 text-white space-y-6"
              >
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Caption
                  </h3>
                  <p className="text-lg font-serif leading-relaxed text-slate-200">
                    {selectedPhoto.caption}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Photographer
                    </p>
                    <p className="text-sm font-bold">
                      {selectedPhoto.photographer}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Location
                    </p>
                    <p className="text-sm font-bold">
                      {selectedPhoto.location}, Tanzania
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Year
                    </p>
                    <p className="text-sm font-bold">{selectedPhoto.year}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
