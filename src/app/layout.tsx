// app/layout.tsx
import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Space_Grotesk,
  Saira,
  Russo_One,
} from "next/font/google";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/providers/theme-provider";
import { SiteConfig } from "@/config/site";
import { MainNavbar } from "@/components/navigation/MainNavbar";
import { Footer } from "@/components/navigation/Footer";
import { CookieConsent } from "@/components/shared/cookie-consent";
import { LoadingProgress } from "@/components/shared/loading-progress";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { BackToTop } from "@/components/shared/ back-to-top";

// Font optimizations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-saira", // ADDED THIS

  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space", // Simplified name
  display: "swap",
  preload: true,
});

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-russo", // CHANGED from --font-russo-one to match config
  display: "swap",
});

// Metadata generation
export const metadata: Metadata = {
  title: {
    default: SiteConfig.name,
    template: `%s | ${SiteConfig.name}`,
  },
  description: SiteConfig.description,
  keywords: [
    "TMF",
    "journalism",
    "media foundation",
    "Tanzania",
    "grants",
    "media freedom",
    "independent journalism",
    "capacity building",
    "investigative journalism",
    "media literacy",
    "digital security",
    "press freedom",
  ],
  authors: [{ name: SiteConfig.name }],
  creator: SiteConfig.name,
  publisher: SiteConfig.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(SiteConfig.url),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "sw-TZ": "/sw",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SiteConfig.url,
    title: SiteConfig.name,
    description: SiteConfig.description,
    siteName: SiteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SiteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SiteConfig.name,
    description: SiteConfig.description,
    images: ["/twitter-image.png"],
    creator: "@TanzaniaMedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      me: ["info@tanzaniamedia.org"],
    },
  },
  category: "non-profit",
};

// Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SiteConfig.name,
  alternateName: "TMF",
  url: SiteConfig.url,
  logo: `${SiteConfig.url}/logo.png`,
  sameAs: [
    SiteConfig.links.twitter,
    SiteConfig.links.linkedin,
    SiteConfig.links.facebook,
    SiteConfig.links.youtube,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+255-22-123-4567",
    contactType: "Customer Service",
    availableLanguage: ["English", "Swahili"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Media House, Mlimani City",
    addressLocality: "Dar es Salaam",
    addressRegion: "Dar es Salaam",
    postalCode: "12345",
    addressCountry: "TZ",
  },
  description: SiteConfig.description,
  foundingDate: "2010-01-01",
  founders: [
    {
      "@type": "Person",
      name: "John Doe",
    },
  ],
  keywords:
    "journalism, media, grants, Tanzania, media freedom, independent journalism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${saira.className} ${inter.className} ${poppins.variable} ${spaceGrotesk.variable} ${russoOne.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/fonts/custom.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* PWA Theme Color */}
        <meta
          name="theme-color"
          content="#1e40af"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0f172a"
          media="(prefers-color-scheme: dark)"
        />

        {/* Viewport and Mobile Optimizations */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
        />

        {/* Microsoft Clarity (Analytics) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "your-clarity-id");
            `,
          }}
        />
      </head>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="tanzania-media-theme"
          themes={["light", "dark", "system"]}
        >
          {/* Loading Progress Bar */}
          <LoadingProgress />

          {/* Main Navigation */}
          <MainNavbar />

          {/* Main Content */}
          <main className="flex-1 -mt-20">{children}</main>

          {/* Footer */}
          <Footer />

          {/* Back to Top Button */}
          <BackToTop />

          {/* Cookie Consent Banner */}
          <CookieConsent />

          {/* Toast/Sonner Notifications */}
          <Toaster
            position="top-right"
            richColors
            closeButton
            expand={false}
            theme="light"
            className="font-sans"
            toastOptions={{
              duration: 4000,
              style: {
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              },
            }}
          />

          {/* Analytics & Performance Monitoring */}
          <Analytics />
          <SpeedInsights />

          {/* Scripts for interactive features */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Lazy loading images
                if ('loading' in HTMLImageElement.prototype) {
                  const images = document.querySelectorAll('img[loading="lazy"]');
                  images.forEach(img => {
                    img.src = img.dataset.src;
                  });
                }
                
                // Service Worker Registration for PWA
                if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
                  window.addEventListener('load', () => {
                    navigator.serviceWorker.register('/sw.js');
                  });
                }
                
              `,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
