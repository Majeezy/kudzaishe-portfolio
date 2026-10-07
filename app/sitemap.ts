import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

const SITE_URL = "https://kudzaishe-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = getAllProjects().map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
  }));

  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/projects` },
    ...projectRoutes,
  ];
}
