// src/config/cms.ts
export const CMS_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_CMS_URL || "https://cms.tanzaniamedia.org",
  endpoints: {
    homepage: "/api/homepage",
    hero: "/api/hero",
    content: "/api/content",
    media: "/api/media",
  },
  fallbackData: {
    // This can be imported from your JSON file
    // as a fallback when CMS is unavailable
  },
  revalidation: 3600, // 1 hour
};

export async function fetchFromCMS<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${CMS_CONFIG.baseUrl}${endpoint}`, {
      next: { revalidate: CMS_CONFIG.revalidation },
    });

    if (!response.ok) {
      throw new Error(`CMS fetch failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("CMS fetch error:", error);
    // Return fallback data
    throw error;
  }
}
