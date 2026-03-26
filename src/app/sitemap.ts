import type { MetadataRoute } from "next";
import { SITE_ROUTES, SITE_URL } from "@/lib/seo";

const now = new Date();

const routePriorities: Record<(typeof SITE_ROUTES)[number], number> = {
  "/": 1,
  "/sprzatanie-dla-firm": 0.95,
  "/sprzatanie-dla-firm/sprzatanie-po-budowie": 0.9,
  "/sprzatanie-dla-firm/sprzatanie-po-budowie/dla-kierownika-budowy": 0.8,
  "/sprzatanie-dla-firm/sprzatanie-po-budowie/dla-zarzadcy-obiektu": 0.8,
  "/sprzatanie-dla-firm/mycie-okien-i-witryn": 0.85,
  "/sprzatanie-dla-firm/maszynowe-czyszczenie-posadzek": 0.85,
  "/sprzatanie-dla-firm/sprzatanie-cykliczne": 0.85,
  "/sprzatanie-dla-firm/dla-franczyz": 0.8,
  "/realizacje": 0.75,
  "/cennik": 0.75,
  "/kontakt": 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: routePriorities[route],
  }));
}

