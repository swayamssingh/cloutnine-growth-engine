// Auto-generates public/sitemap.xml from src/routes/*.tsx
// Excludes dynamic ($param) routes and api routes.
import { readdirSync, writeFileSync, statSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROUTES_DIR = join(__dirname, "..", "src", "routes");
const PUBLIC_DIR = join(__dirname, "..", "public");
const SITE_URL = "https://cloutnine.in";

function fileToPath(file) {
  // strip extension
  let name = file.replace(/\.tsx?$/, "");
  if (name === "__root") return null;
  if (name === "index") return "/";
  if (name.startsWith("api.") || name.startsWith("api/")) return null;
  // dynamic params
  if (name.includes("$")) return null;
  // dot-separated => path segments
  const segments = name.split(".");
  return "/" + segments.join("/");
}

function collectRoutes() {
  const files = readdirSync(ROUTES_DIR).filter((f) => {
    const full = join(ROUTES_DIR, f);
    return statSync(full).isFile() && /\.tsx?$/.test(f);
  });
  const paths = new Set();
  for (const f of files) {
    const p = fileToPath(f);
    if (p) paths.add(p);
  }
  return [...paths].sort();
}

function buildSitemap(paths) {
  const today = new Date().toISOString().split("T")[0];
  const urls = paths
    .map((p) => {
      const loc = `${SITE_URL}${p === "/" ? "" : p}`;
      const priority = p === "/" ? "1.0" : p.startsWith("/services") ? "0.9" : "0.7";
      const changefreq = p === "/" ? "weekly" : "monthly";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const paths = collectRoutes();
if (!existsSync(PUBLIC_DIR)) mkdirSync(PUBLIC_DIR, { recursive: true });
writeFileSync(join(PUBLIC_DIR, "sitemap.xml"), buildSitemap(paths));
writeFileSync(
  join(PUBLIC_DIR, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
);
console.log(`✓ Generated sitemap.xml with ${paths.length} routes`);
console.log(`✓ Generated robots.txt`);
