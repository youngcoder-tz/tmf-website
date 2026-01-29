// components/navigation/MainNavbar.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  LazyMotion,
  domAnimation,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Newspaper,
  Award,
  Users,
  FileText,
  Mic,
  Shield,
  BarChart3,
  Calendar,
  BookOpen,
  Mail,
  ChevronDown,
  Menu,
  X,
  Search,
  User,
  Heart,
  ExternalLink,
  Download,
  Video,
  Image as ImageIcon,
  TrendingUp,
  Lock,
  Zap,
  CreditCard,
  Home,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  ArrowRight,
  Sparkles,
  Globe2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ThemeSwitcher from "../shared/ThemeSwitcher";

const megaMenuItems = [
  {
    title: "About Us",
    icon: Globe,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    description: "Learn about our mission, team, and impact",
    featured: {
      title: "2024 Annual Report",
      description: "See how we supported journalism worldwide",
      image: "/api/placeholder/300/180",
      href: "/about/annual-reports",
      badge: "New",
    },
    columns: [
      {
        title: "Who We Are",
        items: [
          {
            title: "Our Story & Mission",
            href: "/about",
            icon: Sparkles,
            description: "Our journey and purpose",
          },
          {
            title: "Leadership Team",
            href: "/about/leadership",
            icon: Users,
            description: "Meet our experts",
          },
          {
            title: "Global Network",
            href: "/about/network",
            icon: Globe2,
            description: "75+ countries",
          },
          {
            title: "Financial Transparency",
            href: "/about/financials",
            icon: CreditCard,
            description: "Annual audits & reports",
          },
        ],
      },
      {
        title: "Recognition",
        items: [
          {
            title: "Awards & Honors",
            href: "/about/awards",
            icon: Award,
            description: "Industry recognition",
          },
          {
            title: "Media Coverage",
            href: "/about/media",
            icon: Newspaper,
            description: "Featured in 50+ outlets",
          },
          {
            title: "Partnerships",
            href: "/about/partners",
            icon: Users,
            description: "Global collaborations",
          },
          {
            title: "Testimonials",
            href: "/about/testimonials",
            icon: Heart,
            description: "Stories of impact",
          },
        ],
      },
    ],
  },
  {
    title: "Our Work",
    icon: Award,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    description: "Explore our programs and initiatives",
    featured: {
      title: "Emergency Support Fund",
      description: "Rapid response for journalists in crisis",
      image: "/api/placeholder/300/180",
      href: "/work/emergency-fund",
      badge: "Featured",
    },
    columns: [
      {
        title: "Grant Programs",
        items: [
          {
            title: "Investigative Journalism Grants",
            href: "/grants/investigative",
            icon: Search,
            description: "Support for in-depth reporting",
            stats: "500+ projects funded",
          },
          {
            title: "Community Media Support",
            href: "/grants/community-media",
            icon: Mic,
            description: "Amplifying local voices",
            stats: "200+ communities",
          },
          {
            title: "Digital Innovation Fund",
            href: "/grants/digital-innovation",
            icon: Zap,
            description: "Technology-driven journalism",
            stats: "$2M in funding",
          },
          {
            title: "Women in Media Grants",
            href: "/grants/women-in-media",
            icon: Users,
            description: "Empowering female journalists",
            stats: "45% of total grants",
          },
        ],
      },
      {
        title: "Capacity Building",
        items: [
          {
            title: "Training Programs",
            href: "/what-we-do/training",
            icon: BookOpen,
            description: "Skill development workshops",
          },
          {
            title: "Mentorship Initiatives",
            href: "/what-we-do/mentorship",
            icon: Users,
            description: "Expert guidance",
          },
          {
            title: "Digital Security Training",
            href: "/what-we-do/digital-security",
            icon: Shield,
            description: "Protecting journalists online",
          },
          {
            title: "Media Literacy Programs",
            href: "/what-we-do/media-literacy",
            icon: Newspaper,
            description: "Educating the public",
          },
        ],
      },
    ],
  },
  {
    title: "Impact",
    icon: BarChart3,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    description: "See our results and success stories",
    featured: {
      title: "Impact Dashboard",
      description: "Real-time metrics and outcomes",
      image: "/api/placeholder/300/180",
      href: "/impact/dashboard",
      badge: "Live",
    },
    columns: [
      {
        title: "Metrics & Data",
        items: [
          {
            title: "Success Metrics",
            href: "/impact/metrics",
            icon: TrendingUp,
            description: "Key performance indicators",
          },
          {
            title: "Grantee Showcase",
            href: "/impact/grantees",
            icon: Award,
            description: "Spotlight on successful projects",
          },
          {
            title: "Annual Impact Report",
            href: "/impact/annual",
            icon: FileText,
            description: "Comprehensive yearly review",
          },
          {
            title: "Case Studies",
            href: "/impact/case-studies",
            icon: BookOpen,
            description: "In-depth project analyses",
          },
        ],
      },
      {
        title: "Stories",
        items: [
          {
            title: "Impact Stories",
            href: "/impact/stories",
            icon: Video,
            description: "Video testimonials",
          },
          {
            title: "Media Coverage",
            href: "/impact/coverage",
            icon: Newspaper,
            description: "Press mentions",
          },
          {
            title: "Photo Gallery",
            href: "/impact/gallery",
            icon: ImageIcon,
            description: "Visual journey",
          },
          {
            title: "Public Trust Index",
            href: "/impact/trust-index",
            icon: Heart,
            description: "Survey results",
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    icon: BookOpen,
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    description: "Tools, publications, and guides",
    featured: {
      title: "Journalist Safety Toolkit",
      description: "Comprehensive guide for field reporters",
      image: "/api/placeholder/300/180",
      href: "/resources/safety-toolkit",
      badge: "Download",
    },
    columns: [
      {
        title: "Publications",
        items: [
          {
            title: "Research Reports",
            href: "/resources/research",
            icon: FileText,
            description: "In-depth studies",
          },
          {
            title: "Policy Briefs",
            href: "/resources/policy-briefs",
            icon: Shield,
            description: "Legislative analysis",
          },
          {
            title: "White Papers",
            href: "/resources/white-papers",
            icon: FileText,
            description: "Expert perspectives",
          },
          {
            title: "Annual Reviews",
            href: "/resources/annual-reviews",
            icon: Calendar,
            description: "Yearly summaries",
          },
        ],
      },
      {
        title: "Tools",
        items: [
          {
            title: "Toolkits & Guides",
            href: "/resources/toolkits",
            icon: Download,
            description: "Practical resources",
          },
          {
            title: "FOI Templates",
            href: "/resources/foi-templates",
            icon: FileText,
            description: "Ready-to-use forms",
          },
          {
            title: "Safety Protocols",
            href: "/resources/safety",
            icon: Lock,
            description: "Risk management",
          },
        ],
      },
    ],
  },
  {
    title: "Get Involved",
    icon: Users,
    color: "text-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    description: "Support independent journalism",
    featured: {
      title: "Become a Monthly Donor",
      description: "Sustain our work with recurring support",
      image: "/api/placeholder/300/180",
      href: "/donate/monthly",
      badge: "Popular",
    },
    columns: [
      {
        title: "Ways to Give",
        items: [
          {
            title: "Donate Now",
            href: "/get-involved/donate",
            icon: Heart,
            description: "One-time contribution",
          },
          {
            title: "Corporate Sponsorship",
            href: "/get-involved/corporate",
            icon: Award,
            description: "Business partnerships",
          },
          {
            title: "Legacy Giving",
            href: "/get-involved/legacy",
            icon: Heart,
            description: "Include us in your will",
          },
          {
            title: "Fundraising",
            href: "/get-involved/fundraise",
            icon: Users,
            description: "Start a campaign",
          },
        ],
      },
      {
        title: "Engage",
        items: [
          {
            title: "Volunteer",
            href: "/get-involved/volunteer",
            icon: Users,
            description: "Share your skills",
          },
          {
            title: "Careers",
            href: "/get-involved/careers",
            icon: Award,
            description: "Join our team",
          },
          {
            title: "Fellowships",
            href: "/get-involved/fellowships",
            icon: Users,
            description: "Professional development",
          },
          {
            title: "Events",
            href: "/get-involved/events",
            icon: Calendar,
            description: "Upcoming activities",
          },
        ],
      },
    ],
  },
];

const portalItems = [
  {
    title: "Grantees",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
    items: [
      {
        title: "Grantee Portal",
        href: "/grantee-portal",
        description: "Manage your grants and reports",
        icon: Home,
      },
      {
        title: "Application Center",
        href: "/grantee-portal/apply",
        description: "Submit new proposals",
        icon: FileText,
      },
      {
        title: "Grant Management",
        href: "/grantee-portal/grants",
        description: "Track active grants",
        icon: BarChart3,
      },
      {
        title: "Reporting Dashboard",
        href: "/grantee-portal/reports",
        description: "Submit progress reports",
        icon: TrendingUp,
      },
      {
        title: "Resource Library",
        href: "/grantee-portal/resources",
        description: "Exclusive materials",
        icon: BookOpen,
      },
    ],
  },
  {
    title: "Partners",
    icon: Users,
    color: "from-emerald-500 to-green-500",
    items: [
      {
        title: "Partner Portal",
        href: "/partner-portal",
        description: "Collaboration workspace",
        icon: Home,
      },
      {
        title: "Impact Reports",
        href: "/partner-portal/impact",
        description: "See your contribution results",
        icon: TrendingUp,
      },
      {
        title: "Funding Opportunities",
        href: "/partner-portal/funding",
        description: "Joint initiatives",
        icon: CreditCard,
      },
      {
        title: "Due Diligence",
        href: "/partner-portal/due-diligence",
        description: "Compliance materials",
        icon: Shield,
      },
      {
        title: "Partner Resources",
        href: "/partner-portal/resources",
        description: "Co-branded assets",
        icon: Download,
      },
    ],
  },
  {
    title: "Media",
    icon: Newspaper,
    color: "from-purple-500 to-pink-500",
    items: [
      {
        title: "Press Room",
        href: "/media/press",
        description: "Latest news & announcements",
        icon: Newspaper,
      },
      {
        title: "Media Kit",
        href: "/media/kit",
        description: "Logos and brand assets",
        icon: Download,
      },
      {
        title: "Press Contacts",
        href: "/media/contacts",
        description: "Our communications team",
        icon: Phone,
      },
      {
        title: "Media Coverage",
        href: "/media/coverage",
        description: "Featured in the news",
        icon: ExternalLink,
      },
    ],
  },
];

export function MainNavbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolling = latest > 10;
    if (isScrolling !== isScrolled) setIsScrolled(isScrolling);
  });

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const headerBlur = useTransform(smoothScrollY, [0, 100], [0, 24]);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <LazyMotion features={domAnimation}>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      {/* <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-50 overflow-hidden bg-linear-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 "
      >
        <div className="relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-1 text-sm">
              <div className="flex-1 overflow-hidden">
                <motion.div
                  className="flex whitespace-nowrap"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="flex items-center gap-8 px-8">
                    {[...Array(3)].map((_, i) => (
                      <React.Fragment key={i}>
                        <div className="flex items-center gap-3">
                          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                          <span className="font-medium">
                            New: Emergency Support Fund for journalists in
                            crisis zones
                          </span>
                          <Link
                            href="/grants/emergency-support"
                            className="flex items-center gap-1.5 font-semibold hover:underline hover:underline-offset-2 group"
                          >
                            Apply now
                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                        <div className="h-4 w-px bg-white/30" />
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="hidden lg:flex items-center gap-6 ml-8">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span className="hidden xl:inline">+255 123 456 789</span>
                </Link>
                <Link
                  href="/map"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="hidden xl:inline">Dar es Salaam, TZ</span>
                </Link>
                <div className="flex items-center gap-2">
                  {[
                    { Icon: Twitter, href: "#", label: "Twitter" },
                    { Icon: Linkedin, href: "#", label: "LinkedIn" },
                    { Icon: Facebook, href: "#", label: "Facebook" },
                    { Icon: Youtube, href: "#", label: "YouTube" },
                    { Icon: Instagram, href: "#", label: "Instagram" },
                  ].map((social, idx) => (
                    <Link
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-all hover:scale-110"
                    >
                      <social.Icon className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div> */}

      {/* 2. MAIN NAVBAR */}
      <motion.header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500  ",
          isScrolled
            ? `bg-white/50 dark:bg-gray-950/40 backdrop-blur-xl   border-gray-200 dark:border-gray-800 shadow-sm py-2`
            : "bg-transparent py-4",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* BRAND LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3 group relative z-10"
            >
              <div className="block overflow-hidden -ml-4">
                <Image
                  src="/logos/tmflogo.png"
                  alt="Tanzania Media Fund Logo -mb-8"
                  width={160}
                  height={20}
                />
              </div>
            </Link>

            {/* DESKTOP NAVIGATION (MEGA MENUS) */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-8">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  {megaMenuItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium text-gray-700 dark:text-gray-200 bg-transparent hover:bg-gray-100/50 dark:hover:bg-white/5 rounded-full transition-colors data-[state=open]:bg-gray-100/80 dark:data-[state=open]:bg-white/10">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className=" p-0 shadow-2xl ">
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-222.5 p-0 overflow-hidden rounded-2xl shadow-2xl"
                          >
                            <div className="grid grid-cols-12 h-full">
                              {/* @@@@@@@@@@@@@@@@@@@@ Featured Column (Left - 4 cols) @@@@@@@@@@@@@@@@@@@@@@@@@*/}
                              <div className="col-span-4 bg-gray-50 dark:bg-gray-900/30 p-6 flex flex-col justify-between border-r border-gray-100 dark:border-gray-800">
                                <div>
                                  <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-">
                                    <div
                                      className={cn(
                                        "p-1.5 rounded-md shadow",
                                        item.bgColor,
                                      )}
                                    >
                                      <item.icon
                                        className={cn("h-4 w-4", item.color)}
                                      />
                                    </div>
                                    {item.title}
                                  </h4>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                                    {item.description}
                                  </p>
                                </div>
                                <Link
                                  href={item.featured.href}
                                  className="mt-auto group block overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-blue-500/20 hover:border-blue-500/50"
                                >
                                  <div className="relative h-32 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
                                    <div
                                      className={cn(
                                        "absolute inset-0 bg-linear-to-br opacity-20 group-hover:opacity-30 transition-opacity",
                                        item.color === "text-blue-500"
                                          ? "from-blue-500 to-purple-500"
                                          : "from-gray-500 to-gray-700",
                                      )}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <item.icon className="h-20 w-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                                    </div>
                                    <Badge className="absolute top-4 left-4 shadow-lg">
                                      {item.featured.badge}
                                    </Badge>
                                  </div>
                                  <div className="px-6 py-3 bg-white dark:bg-gray-900">
                                    <h4 className="font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                      {item.featured.title}
                                    </h4>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                      {item.featured.description}
                                    </p>
                                    <div className="mt-3 flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                                      Explore more
                                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                  </div>
                                </Link>
                              </div>

                              {/* Links Columns (Right - 8 cols) */}
                              <div className="col-span-8 p-6 grid grid-cols-2 gap-8 bg-white dark:bg-gray-950/50">
                                {item.columns.map((col, idx) => (
                                  <div key={idx} className="space-y-4">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                                      {col.title}
                                    </h3>
                                    <ul className="space-y-1">
                                      {col.items.map((subItem) => (
                                        <li key={subItem.title}>
                                          <NavigationMenuLink asChild>
                                            <Link
                                              href={subItem.href}
                                              className="group flex items-start  rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                                            >
                                              <div className="flex gap-3 p-2">
                                                <div
                                                  className={cn(
                                                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors group-hover:bg-white dark:group-hover:bg-black border border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-800 shadow-none group-hover:shadow-sm",
                                                    item.bgColor,
                                                  )}
                                                >
                                                  <subItem.icon
                                                    className={cn(
                                                      "h-4 w-4",
                                                      item.color,
                                                    )}
                                                  />
                                                </div>
                                                <div className="space-y-0.5">
                                                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {subItem.title}
                                                  </div>
                                                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                                                    {subItem.description}
                                                  </p>
                                                </div>
                                              </div>
                                            </Link>
                                          </NavigationMenuLink>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3">
              {/* Search Toggle (Desktop) */}
              <div ref={searchRef} className="relative hidden md:block">
                {showSearch ? (
                  <motion.div
                    initial={{ width: 40 }}
                    animate={{ width: 300 }}
                    className="relative"
                  >
                    <Input
                      placeholder="Search grants, resources, news..."
                      className="pl-11 pr-4 py-2 h-10 rounded-full border-2 border-blue-500/20 focus:border-blue-500"
                      autoFocus
                    />
                    <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1.5 top-1/2 h-7 w-7 -translate-y-1/2"
                      onClick={() => setShowSearch(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setShowSearch(true)}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                )}
              </div>

              <ThemeSwitcher />
              {/* Portals Dropdown */}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {/* <Button
                    variant="outline"
                    className="hidden md:flex gap-2 rounded-full border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800"
                  >
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </div>
                    <span className="text-sm font-medium">Portals</span>
                    <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                  </Button> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-100 p-0 overflow-hidden bg-zinc-100/70 dark:bg-zinc-800/50 backdrop-blur-2xl rounded-2xl border-gray-200 dark:border-gray-800/50 shadow-xl"
                >
                  <div className="grid grid-cols-3 gap-2 p-2">
                    {portalItems.map((portal) => (
                      <Link
                        href={portal.items[0].href}
                        key={portal.title}
                        className={cn(
                          "py-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-zinc-800 cursor-pointer shadow-lg dark:shadow-black/50 rounded-md ",
                        )}
                      >
                        <div
                          className={cn(
                            "h-12 w-12 rounded-full bg-linear-to-br mx-auto mb-2 flex items-center justify-center",
                            portal.color,
                          )}
                        >
                          <portal.icon className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {portal.title}
                        </h4>
                        <span className="text-[10px] text-gray-500 dark:text-gray-400 block mt-0.5">
                          {portal.items.length} resources available
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="p-2 ">
                    <div className="grid gap-4 shadow-xl p-2 rounded-md bg-background/50">
                      {portalItems[0].items.slice(0, 3).map((item) => (
                        <DropdownMenuItem key={item.title} asChild>
                          <Link
                            href={item.href}
                            className="flex items-center  justify-between rounded hover:bg-zinc-50 dark:hover:bg-zinc-800/60 cursor-pointer"
                          >
                            <div className="flex gap-3 px-2 py-1 ">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20">
                                <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 dark:text-white">
                                  {item.title}
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            <ExternalLink className="h-3 w-3 text-gray-400" />
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                  <div className="p-2 bg-gray-50 dark:bg-gray-900/30 border-t border-gray-100 dark:border-gray-800">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs text-gray-500 h-8"
                    >
                      Need access help? Contact support
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Donate Button (Primary CTA) */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block"
              >
                <Button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20 border-0 h-10 px-6! rounded-full font-semibold text-sm">
                  <Heart className="mr-2 h-4 w-4 fill-white/20" />
                  Donate Now
                </Button>
              </motion.div>

              {/* Mobile Menu Trigger */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden -mr-2"
                  >
                    <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:w-100 p-0 flex flex-col bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800"
                >
                  {/* Mobile Header */}
                  <SheetHeader className="p-6 border-b border-gray-100 dark:border-gray-800">
                    <SheetTitle className="flex items-center gap-3">
                      <div className="text-left">
                        <div className="block overflow-hidden -ml-4">
                          <Image
                            src="/logos/tmflogo.png"
                            alt="Tanzania Media Fund Logo -mb-8"
                            width={180}
                            height={20}
                          />
                        </div>
                      </div>
                    </SheetTitle>

                    <div className="relative pt-2 -mb-2">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search grants, stories..."
                        className="pl-10 bg-gray-50 dark:bg-gray-900 rounded-full border-gray-200 dark:border-gray-800 focus-visible:ring-blue-500"
                      />
                    </div>
                  </SheetHeader>

                  {/* Mobile Scrollable Content */}
                  <div className="flex-1 overflow-y-auto">
                    <div>
                      {/* Mobile Navigation */}
                      <div className="px-6">
                        <Tabs defaultValue="menu" className="w-full">
                          {/* <TabsList className="grid grid-cols-2 sticky top-0 rounded-full shadow">
                            <TabsTrigger value="menu" className="rounded-full">
                              Navigation
                            </TabsTrigger>
                            <TabsTrigger
                              value="portals"
                              className="rounded-full"
                            >
                              Portals
                            </TabsTrigger>
                          </TabsList> */}

                          {/* Menu Tab */}
                          <TabsContent value="menu" className=" space-y-1 ">
                            {megaMenuItems.map((item) => (
                              <details key={item.title} className="group">
                                <summary className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer list-none">
                                  <div className="flex items-center gap-4">
                                    <div
                                      className={cn(
                                        "p-3 rounded-xl",
                                        item.bgColor,
                                      )}
                                    >
                                      <item.icon
                                        className={cn("h-5 w-5", item.color)}
                                      />
                                    </div>
                                    <div>
                                      <div className="font-semibold text-sm">
                                        {item.title}
                                      </div>
                                      <div className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                                        {item.description}
                                      </div>
                                    </div>
                                  </div>
                                  <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="ml-14 mt-2 space-y-3">
                                  {item.columns.map((column, idx) => (
                                    <div key={idx} className="mb-4">
                                      <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-3">
                                        {column.title}
                                      </h4>
                                      <div className="space-y-1">
                                        {column.items.map((subItem) => (
                                          <Link
                                            key={subItem.title}
                                            href={subItem.href}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                            onClick={() =>
                                              setIsMobileMenuOpen(false)
                                            }
                                          >
                                            <subItem.icon className="h-5 w-5 text-gray-400" />
                                            <div className="flex-1">
                                              <div className="font-medium text-sm">
                                                {subItem.title}
                                              </div>
                                              <div className="text-xs line-clamp-1 text-gray-600 dark:text-gray-400">
                                                {subItem.description}
                                              </div>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </details>
                            ))}
                          </TabsContent>

                          {/* Portals Tab */}
                          <TabsContent
                            value="portals"
                            className="mt-6 space-y-4"
                          >
                            {portalItems.map((portal) => (
                              <div
                                key={portal.title}
                                className="rounded-xl border border-gray-200 dark:border-gray-800 p-4"
                              >
                                <div className="flex items-center gap-3 mb-4">
                                  <div
                                    className={`h-10 w-10 rounded-xl bg-linear-to-br ${portal.color} flex items-center justify-center`}
                                  >
                                    <portal.icon className="h-5 w-5 text-white" />
                                  </div>
                                  <div>
                                    <div className="font-semibold">
                                      {portal.title}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                      Secure access portal
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  {portal.items.slice(0, 3).map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      <item.icon className="h-4 w-4" />
                                      <span className="text-sm">
                                        {item.title}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </TabsContent>
                        </Tabs>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Footer Actions */}
                  <div className="p-6 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        className="rounded-full h-12"
                        asChild
                      >
                        <Link href="/apply">
                          <FileText className="mr-2 h-5 w-5" />
                          Apply Now
                        </Link>
                      </Button>
                      <Button
                        className="rounded-full h-12 bg-linear-to-r from-blue-600 to-purple-600"
                        asChild
                      >
                        <Link href="/donate">
                          <Heart className="mr-2 h-5 w-5" />
                          Donate
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>
    </LazyMotion>
  );
}
