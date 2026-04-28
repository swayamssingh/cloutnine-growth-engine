export type PortfolioItem = {
  type: "video" | "image";
  src: string;
  thumbnail?: string;
  brand: string;
  category: string;
  section?: Section;
  /** Optional aspect ratio hint for masonry — width / height */
  ratio?: number;
};

export type Industry =
  | "cafe"
  | "gym"
  | "real-estate"
  | "salon"
  | "d2c"
  | "saas";

export type Section = "video-content" | "ad-creatives" | "websites";

export const INDUSTRIES: { slug: Industry; label: string }[] = [
  { slug: "cafe", label: "Cafe" },
  { slug: "gym", label: "Gym" },
  { slug: "real-estate", label: "Real Estate" },
  { slug: "salon", label: "Salon" },
  { slug: "d2c", label: "D2C" },
  { slug: "saas", label: "SaaS" },
];

// ───────────────────────────────────────────────────────────────
// SOURCE OF TRUTH — real portfolio dataset
// ───────────────────────────────────────────────────────────────
export const portfolioItems: PortfolioItem[] = [
  // Mehfil Cafe — Videos
  {
    type: "video",
    src: "https://res.cloudinary.com/dos49scle/video/upload/q_auto/f_auto/v1777389364/Mehfil_reel_4_fam5ur.mp4",
    brand: "Mehfil Cafe",
    category: "cafe",
    section: "video-content",
    ratio: 9 / 16,
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dos49scle/video/upload/q_auto/f_auto/v1777389362/Mehfil_reel_1_wd015f.mp4",
    brand: "Mehfil Cafe",
    category: "cafe",
    section: "video-content",
    ratio: 9 / 16,
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dos49scle/video/upload/q_auto/f_auto/v1777389359/Mehfil_reel_3_m1av7t.mp4",
    brand: "Mehfil Cafe",
    category: "cafe",
    section: "video-content",
    ratio: 9 / 16,
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dos49scle/video/upload/q_auto/f_auto/v1777389352/Mehfil_reel_2_cvsjfo.mp4",
    brand: "Mehfil Cafe",
    category: "cafe",
    section: "video-content",
    ratio: 9 / 16,
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dos49scle/video/upload/q_auto/f_auto/v1777389351/Mehfil_reel_5_lx9jfd.mp4",
    brand: "Mehfil Cafe",
    category: "cafe",
    section: "video-content",
    ratio: 9 / 16,
  },

  // Nibble — Ad Creatives
  {
    type: "image",
    src: "https://res.cloudinary.com/dos49scle/image/upload/q_auto/f_auto/v1777383698/SHOT_6_ldlqnx.png",
    brand: "Nibble",
    category: "d2c",
    section: "ad-creatives",
    ratio: 4 / 5,
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dos49scle/image/upload/q_auto/f_auto/v1777383698/SHOT_10_uvbt5e.png",
    brand: "Nibble",
    category: "d2c",
    section: "ad-creatives",
    ratio: 4 / 5,
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dos49scle/image/upload/q_auto/f_auto/v1777383697/SHOT_5_scttlr.png",
    brand: "Nibble",
    category: "d2c",
    section: "ad-creatives",
    ratio: 4 / 5,
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dos49scle/image/upload/q_auto/f_auto/v1777383697/SHOT_2_sygvus.png",
    brand: "Nibble",
    category: "d2c",
    section: "ad-creatives",
    ratio: 4 / 5,
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dos49scle/image/upload/q_auto/f_auto/v1777383189/SHOT_3_m20day.png",
    brand: "Nibble",
    category: "d2c",
    section: "ad-creatives",
    ratio: 4 / 5,
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dos49scle/image/upload/q_auto/f_auto/v1777383188/SHOT_9_q4zbza.png",
    brand: "Nibble",
    category: "d2c",
    section: "ad-creatives",
    ratio: 4 / 5,
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dos49scle/image/upload/q_auto/f_auto/v1777383188/SHOT_7_qlmphi.png",
    brand: "Nibble",
    category: "d2c",
    section: "ad-creatives",
    ratio: 4 / 5,
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dos49scle/image/upload/q_auto/f_auto/v1777383187/SHOT_8_hsrh8x.png",
    brand: "Nibble",
    category: "d2c",
    section: "ad-creatives",
    ratio: 4 / 5,
  },
];

// ───────────────────────────────────────────────────────────────
// Filters / derived collections
// ───────────────────────────────────────────────────────────────
export function filterPortfolio(opts: {
  section?: Section;
  category?: Industry;
}): PortfolioItem[] {
  return portfolioItems.filter(
    (it) =>
      (!opts.section || it.section === opts.section) &&
      (!opts.category || it.category === opts.category),
  );
}

const buildBySection = (section: Section): Record<Industry, PortfolioItem[]> =>
  INDUSTRIES.reduce(
    (acc, ind) => {
      acc[ind.slug] = filterPortfolio({ section, category: ind.slug });
      return acc;
    },
    {} as Record<Industry, PortfolioItem[]>,
  );

export const VIDEO_CONTENT: Record<Industry, PortfolioItem[]> =
  buildBySection("video-content");

export const AD_CREATIVES: Record<Industry, PortfolioItem[]> =
  buildBySection("ad-creatives");

export const WEBSITES: PortfolioItem[] = filterPortfolio({
  section: "websites",
});
