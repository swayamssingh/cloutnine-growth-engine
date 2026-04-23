export const SITE = {
  name: "CloutNine",
  url: "https://cloutnine.in",
  phone: "+91-98765-43210",
  whatsapp: "919876543210",
  email: "hello@cloutnine.in",
  address: {
    streetAddress: "Andheri East",
    addressLocality: "Mumbai",
    addressRegion: "MH",
    postalCode: "400069",
    addressCountry: "IN",
  },
  geo: { latitude: "19.1136", longitude: "72.8697" },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "₹₹",
  image: `${SITE.url}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    ...SITE.address,
  },
  geo: { "@type": "GeoCoordinates", ...SITE.geo },
  areaServed: ["Mumbai", "Andheri", "Bandra", "Powai", "Thane", "Navi Mumbai"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.instagram.com/cloutnine",
    "https://www.linkedin.com/company/cloutnine",
  ],
};

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  area?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    provider: {
      "@type": "MarketingAgency",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: opts.area || "Mumbai",
    url: opts.url,
  };
}

export function jsonLd(data: object) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}
