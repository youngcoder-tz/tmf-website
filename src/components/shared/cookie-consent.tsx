"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Cookie,
  ShieldCheck,
  BarChart2,
  Megaphone,
  Settings2,
  ChevronDown,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Delay appearance for better UX
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    });
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", "none");
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    });
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 z-90 bg-black/30 backdrop-grayscale transition-opacity duration-300" />

      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 md:left-auto md:right-6 md:bottom-6 z-100",
          "w-full md:max-w-md p-1", // Padding for border effect
          "transition-all duration-700 ease-out transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
        )}
      >
        {/* Glass Card Container */}
        <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/80 border border-white/40 shadow-2xl ring-1 ring-black/5">
          {/* Decorative background glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative p-6">
            {/* Header Section */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4">
                <div className="relative shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600  ">
                    We value your privacy
                  </h3>
                  <p className="text-xs text-gray-500  mt-1 leading-relaxed">
                    We use cookies to enhance your experience.
                    {!isPreferencesOpen &&
                      " Customize to choose what you share."}
                  </p>
                </div>
              </div>
              {/* Close X (Optional - usually better to force a choice, but good for UX) */}
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-900  transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Expandable Preferences Area */}
            <div
              className={cn(
                "grid transition-all duration-500 ease-in-out",
                isPreferencesOpen
                  ? "grid-rows-[1fr] opacity-100 mt-6 mb-2"
                  : "grid-rows-[0fr] opacity-0 mt-0",
              )}
            >
              <div className="overflow-hidden space-y-3">
                <CookieOption
                  icon={ShieldCheck}
                  title="Strictly Necessary"
                  description="Vital for the site to function properly."
                  isEnabled={preferences.necessary}
                  isLocked={true}
                  color="text-emerald-500"
                />
                <CookieOption
                  icon={BarChart2}
                  title="Analytics"
                  description="Help us understand how you use our site."
                  isEnabled={preferences.analytics}
                  onToggle={() => togglePreference("analytics")}
                  color="text-blue-500"
                />
                <CookieOption
                  icon={Megaphone}
                  title="Marketing"
                  description="Tailored ads based on your interests."
                  isEnabled={preferences.marketing}
                  onToggle={() => togglePreference("marketing")}
                  color="text-purple-500"
                />
              </div>
            </div>

            {/* Action Footer */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex gap-3">
                {/* Customize Button */}
                <Button
                  variant="outline"
                  onClick={() => setIsPreferencesOpen(!isPreferencesOpen)}
                  className="flex-1 bg-/50  border-gray-200  hover:bg-white hover:text-gray-900 d text-gray-700  rounded-full h-11 transition-all duration-300"
                >
                  <Settings2 className="w-4 h-4 mr-2" />
                  {isPreferencesOpen ? "Close" : "Customize"}
                </Button>

                {/* Main Action Button */}
                <Button
                  onClick={
                    isPreferencesOpen ? handleSavePreferences : handleAcceptAll
                  }
                  className="flex-2 rounded-full h-11 shadow-lg shadow-indigo-500/25 bg-linear-to-r text-white from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border-0 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isPreferencesOpen ? "Save Preferences" : "Accept All"}
                </Button>
              </div>

              {/* Reject Text Link */}
              <button
                onClick={handleRejectAll}
                className="text-xs text-gray-500 hover:text-gray-800  transition-colors py-1"
              >
                Reject non-essential cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Sub-component for individual rows to keep things clean
function CookieOption({
  icon: Icon,
  title,
  description,
  isEnabled,
  isLocked = false,
  onToggle,
  color,
}: {
  icon: any;
  title: string;
  description: string;
  isEnabled: boolean;
  isLocked?: boolean;
  onToggle?: () => void;
  color: string;
}) {
  return (
    <div
      onClick={!isLocked ? onToggle : undefined}
      className={cn(
        "group flex items-center justify-between p-3 rounded-xl border border-transparent transition-all duration-200",
        !isLocked
          ? "hover:bg-black/5  cursor-pointer"
          : "opacity-80 cursor-default",
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn("p-2 rounded-lg bg-gray-100 ", color)}>
          <Icon size={18} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 ">{title}</p>
          <p className="text-xs text-gray-500 ">
            {description}
          </p>
        </div>
      </div>

      {/* Modern iOS-style Toggle */}
      <div
        className={cn(
          "relative w-11 h-6 rounded-full transition-colors duration-300 ease-in-out",
          isEnabled
            ? "bg-linear-to-r from-indigo-500 to-purple-600"
            : "bg-gray-200 dark:bg-gray-700",
          isLocked && "opacity-50",
        )}
      >
        <div
          className={cn(
            "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-spring",
            isEnabled ? "translate-x-5" : "translate-x-0",
          )}
        />
      </div>
    </div>
  );
}
