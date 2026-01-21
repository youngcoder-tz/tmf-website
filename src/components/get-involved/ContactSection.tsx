"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection({ data }: { data: any }) {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 dark:bg-black rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row text-white">
          {/* LEFT: Info & Map */}
          <div className="lg:w-5/12 p-10 lg:p-16 bg-slate-800/50 relative overflow-hidden">
            {/* Background Map Image */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
              <img
                src={data.map_image}
                className="w-full h-full object-cover grayscale"
                alt="Map"
              />
            </div>

            <div className="relative z-10 space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-2">Visit our HQ</h3>
                <p className="text-slate-400">Open Mon-Fri, 8am - 5pm</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Head Office</p>
                    <p className="text-slate-300 leading-relaxed">
                      {data.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Email Us</p>
                    <p className="text-slate-300">{data.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Call Us</p>
                    <p className="text-slate-300">{data.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: The Form */}
          <div className="lg:w-7/12 p-10 lg:p-16 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            <h3 className="text-3xl font-bold mb-8">Send a Message</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase">
                    First Name
                  </label>
                  <Input
                    className="h-14 rounded-xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase">
                    Last Name
                  </label>
                  <Input
                    className="h-14 rounded-xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase">
                  Email Address
                </label>
                <Input
                  className="h-14 rounded-xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase">
                  Subject
                </label>
                <select className="w-full h-14 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3">
                  <option>General Inquiry</option>
                  <option>Grant Support</option>
                  <option>Partnership Proposal</option>
                  <option>Press / Media</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase">
                  Message
                </label>
                <Textarea
                  className="min-h-[150px] rounded-xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 p-4"
                  placeholder="How can we help?"
                />
              </div>

              <Button className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
