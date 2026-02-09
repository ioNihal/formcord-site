import type { MetadataRoute } from "next";

const BASE_URL = "https://formcord.vercel.app";
const LAST_MODIFIED = "2026-02-09";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/docs`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
