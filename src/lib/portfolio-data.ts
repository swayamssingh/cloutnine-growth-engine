export type PortfolioItem = {
  type: "video" | "image";
  src: string;
  thumbnail?: string;
  brand: string;
  category: string;
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

export const INDUSTRIES: { slug: Industry; label: string }[] = [
  { slug: "cafe", label: "Cafe" },
  { slug: "gym", label: "Gym" },
  { slug: "real-estate", label: "Real Estate" },
  { slug: "salon", label: "Salon" },
  { slug: "d2c", label: "D2C" },
  { slug: "saas", label: "SaaS" },
];

const PLACEHOLDER_VIDEO =
  "https://res.cloudinary.com/demo/video/upload/q_auto,f_auto/dog.mp4";

const img = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

// ───────────────────────────────────────────────────────────────
// VIDEO CONTENT
// ───────────────────────────────────────────────────────────────
export const VIDEO_CONTENT: Record<Industry, PortfolioItem[]> = {
  cafe: [
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1511920170033-f8396924c348"), brand: "Roastery Co.", category: "Cafe", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1495474472287-4d71bcdd2085"), brand: "Bean & Bake", category: "Cafe", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1554118811-1e0d58224f24"), brand: "Morning Brew", category: "Cafe", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1453614512568-c4024d13c247"), brand: "Cup Stories", category: "Cafe", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1442512595331-e89e73853f31"), brand: "The Daily Grind", category: "Cafe", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1521017432531-fbd92d768814"), brand: "Espresso Lab", category: "Cafe", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1559496417-e7f25cb247f3"), brand: "Kettle House", category: "Cafe", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1509042239860-f550ce710b93"), brand: "Pour Over", category: "Cafe", ratio: 9 / 16 },
  ],
  gym: [
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1534438327276-14e5300c3a48"), brand: "Iron Den", category: "Gym", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1517836357463-d25dfeac3438"), brand: "PowerHouse", category: "Gym", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1571019613454-1cb2f99b2d8b"), brand: "Lift Club", category: "Gym", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1540497077202-7c8a3999166f"), brand: "Forge Fitness", category: "Gym", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1581009146145-b5ef050c2e1e"), brand: "RepWise", category: "Gym", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1518611012118-696072aa579a"), brand: "Pulse Gym", category: "Gym", ratio: 9 / 16 },
  ],
  "real-estate": [
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1560448204-e02f11c3d0e2"), brand: "Skyline Realty", category: "Real Estate", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1512917774080-9991f1c4c750"), brand: "Casa Modern", category: "Real Estate", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1502672260266-1c1ef2d93688"), brand: "Urban Nest", category: "Real Estate", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1493809842364-78817add7ffb"), brand: "Heights Group", category: "Real Estate", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1505691938895-1758d7feb511"), brand: "Mosaic Homes", category: "Real Estate", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1564013799919-ab600027ffc6"), brand: "Vertex Living", category: "Real Estate", ratio: 9 / 16 },
  ],
  salon: [
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1560066984-138dadb4c035"), brand: "Studio Mane", category: "Salon", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1522337360788-8b13dee7a37e"), brand: "Glow Bar", category: "Salon", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1487412947147-5cebf100ffc2"), brand: "Edge & Mane", category: "Salon", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1503951914875-452162b0f3f1"), brand: "Atelier Hair", category: "Salon", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1580618672591-eb180b1a973f"), brand: "Bloom Beauty", category: "Salon", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1595476108010-b4d1f102b1b1"), brand: "Mirror Studio", category: "Salon", ratio: 9 / 16 },
  ],
  d2c: [
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1556228720-195a672e8a03"), brand: "Pure Form", category: "D2C", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1571781926291-c477ebfd024b"), brand: "Glow Co.", category: "D2C", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1522335789203-aaae4604fff3"), brand: "Wild Roots", category: "D2C", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1556228453-efd6c1ff04f6"), brand: "Loop Skincare", category: "D2C", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1505740420928-5e560c06d30e"), brand: "House of Sound", category: "D2C", ratio: 9 / 16 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1542291026-7eec264c27ff"), brand: "Stride Co.", category: "D2C", ratio: 9 / 16 },
  ],
  saas: [
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1551288049-bebda4e38f71"), brand: "Flowdesk", category: "SaaS", ratio: 16 / 9 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1460925895917-afdab827c52f"), brand: "Pulse Analytics", category: "SaaS", ratio: 16 / 9 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1551434678-e076c223a692"), brand: "Linearly", category: "SaaS", ratio: 16 / 9 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1556761175-5973dc0f32e7"), brand: "StackOps", category: "SaaS", ratio: 16 / 9 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1559136555-9303baea8ebd"), brand: "Vector CRM", category: "SaaS", ratio: 16 / 9 },
    { type: "video", src: PLACEHOLDER_VIDEO, thumbnail: img("1542744173-8e7e53415bb0"), brand: "Northbeam", category: "SaaS", ratio: 16 / 9 },
  ],
};

// ───────────────────────────────────────────────────────────────
// AD CREATIVES (mostly static)
// ───────────────────────────────────────────────────────────────
export const AD_CREATIVES: Record<Industry, PortfolioItem[]> = {
  cafe: [
    { type: "image", src: img("1511920170033-f8396924c348", 1080, 1350), brand: "Roastery Co.", category: "Cafe", ratio: 4 / 5 },
    { type: "image", src: img("1495474472287-4d71bcdd2085", 1080, 1080), brand: "Bean & Bake", category: "Cafe", ratio: 1 },
    { type: "image", src: img("1554118811-1e0d58224f24", 1080, 1350), brand: "Morning Brew", category: "Cafe", ratio: 4 / 5 },
    { type: "image", src: img("1453614512568-c4024d13c247", 1080, 1080), brand: "Cup Stories", category: "Cafe", ratio: 1 },
    { type: "image", src: img("1442512595331-e89e73853f31", 1080, 1350), brand: "The Daily Grind", category: "Cafe", ratio: 4 / 5 },
    { type: "image", src: img("1521017432531-fbd92d768814", 1080, 1080), brand: "Espresso Lab", category: "Cafe", ratio: 1 },
  ],
  gym: [
    { type: "image", src: img("1534438327276-14e5300c3a48", 1080, 1350), brand: "Iron Den", category: "Gym", ratio: 4 / 5 },
    { type: "image", src: img("1517836357463-d25dfeac3438", 1080, 1080), brand: "PowerHouse", category: "Gym", ratio: 1 },
    { type: "image", src: img("1571019613454-1cb2f99b2d8b", 1080, 1350), brand: "Lift Club", category: "Gym", ratio: 4 / 5 },
    { type: "image", src: img("1540497077202-7c8a3999166f", 1080, 1080), brand: "Forge Fitness", category: "Gym", ratio: 1 },
    { type: "image", src: img("1581009146145-b5ef050c2e1e", 1080, 1350), brand: "RepWise", category: "Gym", ratio: 4 / 5 },
    { type: "image", src: img("1518611012118-696072aa579a", 1080, 1080), brand: "Pulse Gym", category: "Gym", ratio: 1 },
  ],
  "real-estate": [
    { type: "image", src: img("1560448204-e02f11c3d0e2", 1080, 1350), brand: "Skyline Realty", category: "Real Estate", ratio: 4 / 5 },
    { type: "image", src: img("1512917774080-9991f1c4c750", 1080, 1080), brand: "Casa Modern", category: "Real Estate", ratio: 1 },
    { type: "image", src: img("1502672260266-1c1ef2d93688", 1080, 1350), brand: "Urban Nest", category: "Real Estate", ratio: 4 / 5 },
    { type: "image", src: img("1493809842364-78817add7ffb", 1080, 1080), brand: "Heights Group", category: "Real Estate", ratio: 1 },
    { type: "image", src: img("1505691938895-1758d7feb511", 1080, 1350), brand: "Mosaic Homes", category: "Real Estate", ratio: 4 / 5 },
    { type: "image", src: img("1564013799919-ab600027ffc6", 1080, 1080), brand: "Vertex Living", category: "Real Estate", ratio: 1 },
  ],
  salon: [
    { type: "image", src: img("1560066984-138dadb4c035", 1080, 1350), brand: "Studio Mane", category: "Salon", ratio: 4 / 5 },
    { type: "image", src: img("1522337360788-8b13dee7a37e", 1080, 1080), brand: "Glow Bar", category: "Salon", ratio: 1 },
    { type: "image", src: img("1487412947147-5cebf100ffc2", 1080, 1350), brand: "Edge & Mane", category: "Salon", ratio: 4 / 5 },
    { type: "image", src: img("1503951914875-452162b0f3f1", 1080, 1080), brand: "Atelier Hair", category: "Salon", ratio: 1 },
    { type: "image", src: img("1580618672591-eb180b1a973f", 1080, 1350), brand: "Bloom Beauty", category: "Salon", ratio: 4 / 5 },
    { type: "image", src: img("1595476108010-b4d1f102b1b1", 1080, 1080), brand: "Mirror Studio", category: "Salon", ratio: 1 },
  ],
  d2c: [
    { type: "image", src: img("1556228720-195a672e8a03", 1080, 1350), brand: "Pure Form", category: "D2C", ratio: 4 / 5 },
    { type: "image", src: img("1571781926291-c477ebfd024b", 1080, 1080), brand: "Glow Co.", category: "D2C", ratio: 1 },
    { type: "image", src: img("1522335789203-aaae4604fff3", 1080, 1350), brand: "Wild Roots", category: "D2C", ratio: 4 / 5 },
    { type: "image", src: img("1556228453-efd6c1ff04f6", 1080, 1080), brand: "Loop Skincare", category: "D2C", ratio: 1 },
    { type: "image", src: img("1505740420928-5e560c06d30e", 1080, 1350), brand: "House of Sound", category: "D2C", ratio: 4 / 5 },
    { type: "image", src: img("1542291026-7eec264c27ff", 1080, 1080), brand: "Stride Co.", category: "D2C", ratio: 1 },
  ],
  saas: [
    { type: "image", src: img("1551288049-bebda4e38f71", 1080, 1350), brand: "Flowdesk", category: "SaaS", ratio: 4 / 5 },
    { type: "image", src: img("1460925895917-afdab827c52f", 1080, 1080), brand: "Pulse Analytics", category: "SaaS", ratio: 1 },
    { type: "image", src: img("1551434678-e076c223a692", 1080, 1350), brand: "Linearly", category: "SaaS", ratio: 4 / 5 },
    { type: "image", src: img("1556761175-5973dc0f32e7", 1080, 1080), brand: "StackOps", category: "SaaS", ratio: 1 },
    { type: "image", src: img("1559136555-9303baea8ebd", 1080, 1350), brand: "Vector CRM", category: "SaaS", ratio: 4 / 5 },
    { type: "image", src: img("1542744173-8e7e53415bb0", 1080, 1080), brand: "Northbeam", category: "SaaS", ratio: 1 },
  ],
};

// ───────────────────────────────────────────────────────────────
// WEBSITES (single grid, mixed industries)
// ───────────────────────────────────────────────────────────────
export const WEBSITES: PortfolioItem[] = [
  { type: "image", src: img("1467232004584-a241de8bcf5d", 1600, 1000), brand: "Roastery Co.", category: "Cafe", ratio: 16 / 10 },
  { type: "image", src: img("1559028012-481c04fa702d", 1600, 1100), brand: "Iron Den", category: "Gym", ratio: 16 / 11 },
  { type: "image", src: img("1561070791-2526d30994b8", 1600, 1000), brand: "Skyline Realty", category: "Real Estate", ratio: 16 / 10 },
  { type: "image", src: img("1522338242992-e1a54906a8da", 1600, 1100), brand: "Studio Mane", category: "Salon", ratio: 16 / 11 },
  { type: "image", src: img("1556228720-195a672e8a03", 1600, 1000), brand: "Pure Form", category: "D2C", ratio: 16 / 10 },
  { type: "image", src: img("1551288049-bebda4e38f71", 1600, 1100), brand: "Flowdesk", category: "SaaS", ratio: 16 / 11 },
  { type: "image", src: img("1517245386807-bb43f82c33c4", 1600, 1000), brand: "Bean & Bake", category: "Cafe", ratio: 16 / 10 },
  { type: "image", src: img("1517836357463-d25dfeac3438", 1600, 1100), brand: "PowerHouse", category: "Gym", ratio: 16 / 11 },
];
