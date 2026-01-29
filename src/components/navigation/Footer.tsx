// components/layout/AdvancedFooter.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  Send,
  Shield,
  Eye,
  ArrowRight,
  Download,
  ChevronRight,
  Clock,
  Award,
  Users,
  Building,
  Calendar,
  Newspaper,
  FileText,
  Lock,
  CheckCircle,
  Sparkles,
  Globe2,
  CreditCard,
  Smartphone,
  ShieldCheck,
  Briefcase,
  Coffee,
  Star,
  TrendingUp,
  Zap,
  Gift,
  BookOpen,
  Map,
  Radio,
  Podcast,
  PenTool,
  Database,
  BarChart3,
  Search,
  Heart,
  SparklesIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FooterPartners } from "../shared/FooterPartners";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const footerSections = [
  {
    title: "About TMF",
    icon: Building,
    color: "text-blue-500",
    links: [
      { label: "Our Mission & Vision", href: "/about", icon: Sparkles },
      { label: "Leadership Team", href: "/about/leadership", icon: Users },
      { label: "Global Network", href: "/about/network", icon: Globe2 },
      {
        label: "Financial Transparency",
        href: "/about/financials",
        icon: CreditCard,
      },
      {
        label: "Annual Reports",
        href: "/about/annual-reports",
        icon: FileText,
      },
      { label: "Careers", href: "/get-involved/careers", icon: Briefcase },
      { label: "Contact Us", href: "/contact", icon: Phone },
    ],
  },
  {
    title: "Our Programs",
    icon: Award,
    color: "text-emerald-500",
    links: [
      { label: "Grant Programs", href: "/grants", icon: Gift },
      {
        label: "Investigative Journalism",
        href: "/grants/investigative",
        icon: Search,
      },
      {
        label: "Community Media",
        href: "/grants/community-media",
        icon: Radio,
      },
      {
        label: "Digital Innovation",
        href: "/grants/digital-innovation",
        icon: Zap,
      },
      { label: "Women in Media", href: "/grants/women-in-media", icon: Users },
      {
        label: "Emergency Support",
        href: "/grants/emergency-support",
        icon: Shield,
      },
      {
        label: "Training & Workshops",
        href: "/what-we-do/training",
        icon: BookOpen,
      },
    ],
  },
  {
    title: "Resources",
    icon: BookOpen,
    color: "text-amber-500",
    links: [
      {
        label: "Research Database",
        href: "/resources/research",
        icon: Database,
      },
      {
        label: "Toolkits & Guides",
        href: "/resources/toolkits",
        icon: Download,
      },
      {
        label: "Policy Briefs",
        href: "/resources/policy-briefs",
        icon: FileText,
      },
      {
        label: "Media Literacy Resources",
        href: "/what-we-do/media-literacy",
        icon: Eye,
      },
      { label: "Safety Protocols", href: "/resources/safety", icon: Lock },
      {
        label: "Publications Library",
        href: "/resources/library",
        icon: BookOpen,
      },
      {
        label: "FOI Templates",
        href: "/resources/foi-templates",
        icon: PenTool,
      },
    ],
  },
  {
    title: "Impact & Insights",
    icon: TrendingUp,
    color: "text-purple-500",
    links: [
      { label: "Impact Dashboard", href: "/impact/dashboard", icon: BarChart3 },
      { label: "Success Stories", href: "/impact/stories", icon: Star },
      { label: "Case Studies", href: "/impact/case-studies", icon: FileText },
      { label: "Media Coverage", href: "/impact/coverage", icon: Newspaper },
      {
        label: "Research Reports",
        href: "/resources/research-reports",
        icon: FileText,
      },
      { label: "Blog & Articles", href: "/newsroom", icon: PenTool },
      {
        label: "Events Calendar",
        href: "/get-involved/events",
        icon: Calendar,
      },
    ],
  },
];

const trustIndicators = [
  { icon: ShieldCheck, label: "SSL Secured", value: "256-bit encryption" },
  { icon: Award, label: "Top Rated", value: "Charity Navigator 4.8★" },
  { icon: CheckCircle, label: "Tax Exempt", value: "501(c)(3) Status" },
  { icon: Lock, label: "Privacy Certified", value: "GDPR Compliant" },
];

const featuredResources = [
  {
    title: "Journalist Safety Toolkit",
    description: "Complete guide for field reporters",
    icon: ShieldCheck,
    downloads: "2,543",
    badge: "Updated",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Digital Media Guide",
    description: "Latest trends & best practices",
    icon: Smartphone,
    downloads: "1,876",
    badge: "Popular",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "FOI Request Templates",
    description: "Ready-to-use forms for all agencies",
    icon: FileText,
    downloads: "3,210",
    badge: "Essential",
    color: "from-emerald-500 to-green-500",
  },
];

const socialLinks = [
  {
    icon: Twitter,
    label: "Twitter",
    color: "text-[#1DA1F2]",
    bgGradient:
      "hover:bg-gradient-to-br hover:from-[#1DA1F2]/25 hover:to-transparent",
  },

  {
    icon: Linkedin,
    label: "LinkedIn",
    color: "text-[#0077B5]",
    bgGradient:
      "hover:bg-gradient-to-br hover:from-[#0077B5]/25 hover:to-transparent",
  },

  {
    icon: Facebook,
    label: "Facebook",
    color: "text-[#1877F2]",

    bgGradient:
      "hover:bg-gradient-to-br hover:from-[#1877F2]/25 hover:to-transparent",
  },

  {
    icon: Instagram,
    label: "Instagram",
    color: "text-[#E4405F]",
    bgGradient:
      "hover:bg-gradient-to-br hover:from-[#833AB4]/25 hover:via-[#FD1D1D]/25 hover:to-[#FCAF45]/25",
  },

  {
    icon: Youtube,
    label: "YouTube",
    color: "text-[#FF0000]",

    bgGradient:
      "hover:bg-gradient-to-br hover:from-[#FF0000]/25 hover:to-transparent",
  },

  {
    icon: Podcast,
    label: "Podcast",
    color: "text-purple-500",

    bgGradient:
      "hover:bg-gradient-to-br hover:from-purple-500/25 hover:to-transparent",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white text-gray-700 dark:from-gray-900 dark:to-black dark:text-gray-300">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-400/4 via-transparent to-purple-200/4 dark:from-blue-400/10 dark:via-transparent dark:to-purple-200/10" />
        <div className="absolute top-0 left-1/4 w-200 h-200 bg-linear-to-r from-blue-300/4 to-purple-300/4 dark:from-blue-300/10 dark:to-purple-300/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-150 h-150 bg-linear-to-r from-emerald-400/3 to-cyan-500/3 dark:from-emerald-400/8 dark:to-cyan-500/8 rounded-full blur-3xl" />
      </div>
      {/* Partners Section */}
      <div className="relative z-10 border-b dark:border-gray-800">
        <FooterPartners />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50 dark:opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link
                href="/"
                className="inline-flex items-center gap-4 group relative"
              >
                <div className="relative">
                  <div className="block overflow-hidden -ml-10">
                    <Image
                      src="/logos/tmflogo.png"
                      alt="Tanzania Media Fund Logo -mb-8"
                      width={300}
                      height={20}
                    />
                  </div>
                  <p className="text-xs -mt-7 ml-22 opacity-80 dark:opacity-90">
                    Empowering Media · Transforming Lives
                    <span className="ml-2 inline-flex items-center gap-1">
                      <Heart className="h-3 w-3 text-red-500 animate-pulse" />
                      Since 2010
                    </span>
                  </p>
                </div>
              </Link>

              <p className="text-sm leading-relaxed opacity-90 dark:opacity-80 pr-4">
                Strengthening independent journalism across Tanzania through
                strategic grants, capacity building, and advocacy for media
                freedom. Join our community of 50,000+ journalists and media
                professionals.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {trustIndicators.map((indicator) => (
                  <motion.div
                    key={indicator.label}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/60 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-white/10">
                      <indicator.icon className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs">
                        {indicator.label}
                      </div>
                      <div className="text-xs opacity-70 dark:opacity-80 truncate">
                        {indicator.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl p-6 border backdrop-blur-md relative overflow-hidden bg-linear-to-br from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 border-gray-200/80 dark:border-gray-700/50 shadow-2xl shadow-gray-200/50 dark:shadow-black/30"
            >
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-50 dark:opacity-70">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23804dee' fill-opacity='0.07'%3E%3Ccircle cx='20' cy='20' r='4'/%3E%3Ccircle cx='80' cy='80' r='4'/%3E%3Crect x='45' y='45' width='10' height='10' transform='rotate(45 50 50)'/%3E%3Cpath d='M80 20 L90 35 L70 35 Z'/%3E%3Cpath d='M20 80 L30 95 L10 95 Z'/%3E%3Crect x='10' y='40' width='6' height='6'/%3E%3Crect x='70' y='10' width='6' height='6'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-linear-to-br from-blue-500 to-purple-500">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Stay Ahead
                    </h3>
                    <p className="text-sm opacity-80 dark:opacity-90">
                      Get exclusive insights & updates
                    </p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {isSubscribed ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-6 space-y-3"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2 }}
                        className="inline-flex p-3 rounded-full bg-linear-to-br from-green-500 to-emerald-500"
                      >
                        <CheckCircle className="h-8 w-8 text-white" />
                      </motion.div>
                      <h4 className="font-bold text-lg">Welcome Aboard! 🎉</h4>
                      <p className="text-sm opacity-80 dark:opacity-90">
                        Check your inbox for our welcome gift
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubscribe}
                      className="space-y-4"
                    >
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="pr-12 h-12 rounded-full bg-white border-gray-300 focus:border-blue-500 dark:bg-white/10 dark:border-white/20 dark:focus:border-blue-500"
                        />
                        <Button
                          type="submit"
                          size="icon"
                          className="absolute right-1 top-1 h-10 w-10 rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 text-xs opacity-70 dark:opacity-80">
                        <Shield className="h-3 w-3" />
                        <span>
                          We respect your privacy · Unsubscribe anytime
                        </span>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
          {/* Navigation Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 space-y-5">
              {footerSections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "md:p-2 rounded-lg bg-gray-100 dark:bg-gray-800/50",
                        section.color,
                      )}
                    >
                      <section.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold md:text-lg">{section.title}</h3>
                  </div>
                  <ul className="lg:space-y-6 space-y-3">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-2 md:text-sm text-xs transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
                        >
                          <span className="w-1 h-1 rounded-full bg-indigo-500 dark:bg-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Resources */}
            <div className="mt-12">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-3">
                <Download className="h-5 w-5 text-blue-500" />
                Featured Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredResources.map((resource) => (
                  <div
                    key={resource.title}
                    className="group rounded-xl p-4 transition-all cursor-pointer bg-white hover:bg-gray-50 dark:bg-gray-800/30 dark:hover:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <div
                        className={cn(
                          "p-2 rounded-lg bg-linear-to-br",
                          resource.color,
                        )}
                      >
                        <resource.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="">
                        <h4 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {resource.title}
                        </h4>
                        <p className="text-xs opacity-80 dark:opacity-90">
                          {resource.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="opacity-70 dark:opacity-80">
                        {resource.downloads} downloads
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {resource.badge}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-lg flex items-center gap-3">
              <div className="p-2 rounded-lg bg-linear-to-br from-purple-500 to-pink-500">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div className="">
                <span className="font-bold">Join Our Community</span>
                <p className="text-xs opacity-90 dark:opacity-80">
                  Follow us for updates, events, and media insights
                </p>
              </div>
            </h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "relative p-3 rounded-xl border transition-all duration-300 bg-white border-gray-200 dark:bg-white/5 dark:border-white/10",
                      social.bgGradient,
                    )}
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 rounded-xl bg-linear-to-br from-current to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />
                    <social.icon
                      className={cn(
                        "h-5 w-5 relative z-10",
                        "bg-clip-text text-transparent",
                        social.color,
                      )}
                    />
                  </motion.a>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Coffee className="h-4 w-4 opacity-70 dark:opacity-80" />
                  <span>50,000+ followers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 opacity-70 dark:opacity-80" />
                  <span>Weekly webinars</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Quick Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30">
                  <Phone className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <div className="font-medium">Call Us</div>
                  <div className="text-sm opacity-80 dark:opacity-90">
                    +255 22 123 4567
                  </div>
                  <div className="text-xs opacity-60 dark:opacity-70">
                    Mon-Fri, 8:00-17:00 EAT
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30">
                  <Mail className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <div className="font-medium">Email Us</div>
                  <div className="text-sm opacity-80 dark:opacity-90">
                    info@tanzaniamedia.org
                  </div>
                  <div className="text-xs opacity-60 dark:opacity-70">
                    Response within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Location */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Our Office</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/30">
                  <MapPin className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <div className="font-medium">Headquarters</div>
                  <div className="text-sm opacity-80 dark:opacity-90">
                    Media House, Mlimani City
                    <br />
                    Dar es Salaam, Tanzania
                  </div>
                  <Button variant="link" className="p-0 h-auto text-sm" asChild>
                    <Link href="/map">
                      <Map className="h-3 w-3 mr-1" />
                      View on map
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 opacity-70 dark:opacity-80" />
                  <span>English / Swahili</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 opacity-70 dark:opacity-80" />
                  <span>UTC+3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-200 dark:bg-gray-800" />

        {/* Bottom Bar */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm opacity-80 dark:opacity-90">
              © {new Date().getFullYear()} Tanzania Media Foundation. All rights
              reserved.
            </div>

            <div className="flex flex-wrap items-center md:gap-6 gap-2 md:text-sm text-xs">
              <Link
                href="/privacy"
                className="opacity-80 hover:opacity-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="opacity-80 hover:opacity-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <span className="hidden md:block"> Terms of Service</span>{" "}
                <span className=" block md:hidden">T&C</span>
              </Link>
              <Link
                href="/cookies"
                className="opacity-80 hover:opacity-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/accessibility"
                className="opacity-80 hover:opacity-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="/sitemap"
                className="opacity-80 hover:opacity-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                Sitemap
              </Link>
            </div>

            <div className="flex items-center gap-4 text-sm opacity-70 dark:opacity-80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                <span>SSL Secured</span>
              </div>
              <div className="h-4 w-px bg-gray-400" />
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Tax Exempt 501(c)(3)</span>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-8 text-center text-xs opacity-60 dark:opacity-70 max-w-3xl mx-auto">
            <p>
              The Tanzania Media Foundation is a registered non-profit
              organization under the laws of Tanzania (Reg. No. 123456789). Tax
              Exempt Status: 501(c)(3) equivalent. All donations are
              tax-deductible to the extent allowed by law.
            </p>
            <p className="mt-2">
              A copy of our latest financial report may be obtained by writing
              to Tanzania Media Foundation, P.O. Box 1234, Dar es Salaam,
              Tanzania, or by calling +255 22 123 4567.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-6 text-xs">
              <span>Registered Charity: 123456</span>
              <span>VAT: TZ-123-456-789</span>
              <span>Data Protection: DPA-2023-001</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 rounded-full h-12 w-12 shadow-lg z-50 bg-white border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowRight className="h-5 w-5 rotate-270" />
      </Button>
    </footer>
  );
}
