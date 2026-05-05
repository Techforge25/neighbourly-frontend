import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.suburbsays.com.au/",
      lastModified: new Date(),
    },
    {
      url: "https://www.suburbsays.com.au/our-story",
      lastModified: new Date(),
    },
    {
      url: "https://www.suburbsays.com.au/discover",
      lastModified: new Date(),
    },
    {
      url: "https://www.suburbsays.com.au/get-in-touch",
      lastModified: new Date(),
    },
    {
      url: "https://www.suburbsays.com.au/terms-of-use",
      lastModified: new Date(),
    },
  ];
}