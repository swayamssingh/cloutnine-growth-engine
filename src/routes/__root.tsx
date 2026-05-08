import { Outlet, Link, createRootRoute, HeadContent, useRouterState } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyWhatsApp } from "@/components/site/StickyWhatsApp";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { AuroraCursor } from "@/components/site/AuroraCursor";
import { localBusinessSchema, organizationSchema, websiteSchema, jsonLd, SITE } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-[8rem] leading-none">404</h1>
        <h2 className="mt-2 text-xl font-medium">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-primary px-5 h-11 text-sm font-medium text-primary-foreground"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

const DEFAULT_TITLE = "CloutNine — Social Media Agency Mumbai | Performance Marketing";
const DEFAULT_DESC =
  "CloutNine is a performance-driven social media agency in Mumbai. We turn content into qualified leads with paid distribution, conversion systems and measurable growth.";
const OG_IMAGE = `${SITE.url}/og-image.jpg`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESC },
      { name: "author", content: "CloutNine" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#080808" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CloutNine" },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESC },
      { property: "og:url", content: SITE.url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    scripts: [
      jsonLd(organizationSchema),
      jsonLd(websiteSchema),
      jsonLd(localBusinessSchema),
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function CanonicalLink() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const href = `${SITE.url}${pathname === "/" ? "" : pathname}`;
  return (
    <>
      <link rel="canonical" href={href} />
      <meta property="og:url" content={href} />
    </>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <HeadContent />
      <CanonicalLink />
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <AuroraCursor />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <StickyWhatsApp />
      </div>
    </ThemeProvider>
  );
}
