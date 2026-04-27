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

// A small pool of free, hot-linkable sample videos
const SAMPLE_VIDEOS = [
  "https://res.cloudinary.com/demo/video/upload/q_auto,f_auto/dog.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
];
const v = (i: number) => SAMPLE_VIDEOS[i % SAMPLE_VIDEOS.length];

const img = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

// Helper to build a tile
const vid = (id: string, brand: string, category: string, i = 0, ratio = 9 / 16): PortfolioItem => ({
  type: "video",
  src: v(i),
  thumbnail: img(id, 800, 1200),
  brand,
  category,
  ratio,
});

const pic = (id: string, brand: string, category: string, ratio = 4 / 5, w = 1080, h = 1350): PortfolioItem => ({
  type: "image",
  src: img(id, w, h),
  brand,
  category,
  ratio,
});

// ───────────────────────────────────────────────────────────────
// VIDEO CONTENT — mix of video + image tiles, 10 per industry
// ───────────────────────────────────────────────────────────────
export const VIDEO_CONTENT: Record<Industry, PortfolioItem[]> = {
  cafe: [
    vid("1511920170033-f8396924c348", "Roastery Co.", "Cafe", 0),
    pic("1495474472287-4d71bcdd2085", "Bean & Bake", "Cafe", 1, 1080, 1080),
    vid("1554118811-1e0d58224f24", "Morning Brew", "Cafe", 1),
    vid("1453614512568-c4024d13c247", "Cup Stories", "Cafe", 2),
    pic("1442512595331-e89e73853f31", "The Daily Grind", "Cafe", 4 / 5),
    vid("1521017432531-fbd92d768814", "Espresso Lab", "Cafe", 3),
    pic("1559496417-e7f25cb247f3", "Kettle House", "Cafe", 1, 1080, 1080),
    vid("1509042239860-f550ce710b93", "Pour Over", "Cafe", 4),
    vid("1497935586351-b67a49e012bf", "Beans & Co.", "Cafe", 0),
    pic("1517245386807-bb43f82c33c4", "Slow Drip", "Cafe", 4 / 5),
  ],
  gym: [
    vid("1534438327276-14e5300c3a48", "Iron Den", "Gym", 0),
    vid("1517836357463-d25dfeac3438", "PowerHouse", "Gym", 1),
    pic("1571019613454-1cb2f99b2d8b", "Lift Club", "Gym", 4 / 5),
    vid("1540497077202-7c8a3999166f", "Forge Fitness", "Gym", 2),
    pic("1581009146145-b5ef050c2e1e", "RepWise", "Gym", 1, 1080, 1080),
    vid("1518611012118-696072aa579a", "Pulse Gym", "Gym", 3),
    vid("1583454110551-21f2fa2afe61", "Apex Athletic", "Gym", 4),
    pic("1554344728-77cf90d9ed26", "Reps & Recovery", "Gym", 4 / 5),
    vid("1605296867304-46d5465a13f1", "Steel Method", "Gym", 0),
    pic("1574680096145-d05b474e2155", "Studio 24", "Gym", 1, 1080, 1080),
  ],
  "real-estate": [
    vid("1560448204-e02f11c3d0e2", "Skyline Realty", "Real Estate", 0),
    pic("1512917774080-9991f1c4c750", "Casa Modern", "Real Estate", 4 / 5),
    vid("1502672260266-1c1ef2d93688", "Urban Nest", "Real Estate", 1),
    vid("1493809842364-78817add7ffb", "Heights Group", "Real Estate", 2),
    pic("1505691938895-1758d7feb511", "Mosaic Homes", "Real Estate", 1, 1080, 1080),
    vid("1564013799919-ab600027ffc6", "Vertex Living", "Real Estate", 3),
    pic("1568605114967-8130f3a36994", "Atlas Estates", "Real Estate", 4 / 5),
    vid("1600585154340-be6161a56a0c", "Summit Properties", "Real Estate", 4),
    vid("1613490493576-7fde63acd811", "Northline", "Real Estate", 0),
    pic("1582268611958-ebfd161ef9cf", "Studio House", "Real Estate", 1, 1080, 1080),
  ],
  salon: [
    vid("1560066984-138dadb4c035", "Studio Mane", "Salon", 0),
    pic("1522337360788-8b13dee7a37e", "Glow Bar", "Salon", 4 / 5),
    vid("1487412947147-5cebf100ffc2", "Edge & Mane", "Salon", 1),
    vid("1503951914875-452162b0f3f1", "Atelier Hair", "Salon", 2),
    pic("1580618672591-eb180b1a973f", "Bloom Beauty", "Salon", 1, 1080, 1080),
    vid("1595476108010-b4d1f102b1b1", "Mirror Studio", "Salon", 3),
    vid("1521590832167-7bcbfaa6381f", "Vanity Lane", "Salon", 4),
    pic("1633681926022-84c23e8cb2d6", "Rituals Hair", "Salon", 4 / 5),
    pic("1605497788044-5a32c7078486", "House of Hair", "Salon", 1, 1080, 1080),
    vid("1607779097040-26e80aa78e66", "Salon Noir", "Salon", 0),
  ],
  d2c: [
    pic("1556228720-195a672e8a03", "Pure Form", "D2C", 4 / 5),
    vid("1571781926291-c477ebfd024b", "Glow Co.", "D2C", 0),
    vid("1522335789203-aaae4604fff3", "Wild Roots", "D2C", 1),
    pic("1556228453-efd6c1ff04f6", "Loop Skincare", "D2C", 1, 1080, 1080),
    vid("1505740420928-5e560c06d30e", "House of Sound", "D2C", 2),
    pic("1542291026-7eec264c27ff", "Stride Co.", "D2C", 4 / 5),
    vid("1585386959984-a4155224a1ad", "Aether Labs", "D2C", 3),
    pic("1583394838336-acd977736f90", "Foundry", "D2C", 1, 1080, 1080),
    vid("1607082348824-0a96f2a4b9da", "Daylight", "D2C", 4),
    pic("1521572163474-6864f9cf17ab", "North Apparel", "D2C", 4 / 5),
  ],
  saas: [
    vid("1551288049-bebda4e38f71", "Flowdesk", "SaaS", 0, 16 / 9),
    pic("1460925895917-afdab827c52f", "Pulse Analytics", "SaaS", 16 / 10, 1600, 1000),
    vid("1551434678-e076c223a692", "Linearly", "SaaS", 1, 16 / 9),
    pic("1556761175-5973dc0f32e7", "StackOps", "SaaS", 16 / 10, 1600, 1000),
    vid("1559136555-9303baea8ebd", "Vector CRM", "SaaS", 2, 16 / 9),
    pic("1542744173-8e7e53415bb0", "Northbeam", "SaaS", 16 / 10, 1600, 1000),
    vid("1573164574511-73c773193279", "Orbit", "SaaS", 3, 16 / 9),
    pic("1517245386807-bb43f82c33c4", "Trail", "SaaS", 16 / 10, 1600, 1000),
  ],
};

// ───────────────────────────────────────────────────────────────
// AD CREATIVES — mostly static with a couple of motion ads
// ───────────────────────────────────────────────────────────────
export const AD_CREATIVES: Record<Industry, PortfolioItem[]> = {
  cafe: [
    pic("1511920170033-f8396924c348", "Roastery Co.", "Cafe", 4 / 5),
    pic("1495474472287-4d71bcdd2085", "Bean & Bake", "Cafe", 1, 1080, 1080),
    pic("1554118811-1e0d58224f24", "Morning Brew", "Cafe", 4 / 5),
    vid("1453614512568-c4024d13c247", "Cup Stories", "Cafe", 0, 1),
    pic("1442512595331-e89e73853f31", "The Daily Grind", "Cafe", 4 / 5),
    pic("1521017432531-fbd92d768814", "Espresso Lab", "Cafe", 1, 1080, 1080),
    vid("1559496417-e7f25cb247f3", "Kettle House", "Cafe", 1, 4 / 5),
    pic("1509042239860-f550ce710b93", "Pour Over", "Cafe", 4 / 5),
    pic("1497935586351-b67a49e012bf", "Beans & Co.", "Cafe", 1, 1080, 1080),
  ],
  gym: [
    pic("1534438327276-14e5300c3a48", "Iron Den", "Gym", 4 / 5),
    pic("1517836357463-d25dfeac3438", "PowerHouse", "Gym", 1, 1080, 1080),
    vid("1571019613454-1cb2f99b2d8b", "Lift Club", "Gym", 0, 4 / 5),
    pic("1540497077202-7c8a3999166f", "Forge Fitness", "Gym", 1, 1080, 1080),
    pic("1581009146145-b5ef050c2e1e", "RepWise", "Gym", 4 / 5),
    pic("1518611012118-696072aa579a", "Pulse Gym", "Gym", 1, 1080, 1080),
    vid("1583454110551-21f2fa2afe61", "Apex Athletic", "Gym", 1, 4 / 5),
    pic("1554344728-77cf90d9ed26", "Reps & Recovery", "Gym", 4 / 5),
    pic("1605296867304-46d5465a13f1", "Steel Method", "Gym", 1, 1080, 1080),
  ],
  "real-estate": [
    pic("1560448204-e02f11c3d0e2", "Skyline Realty", "Real Estate", 4 / 5),
    pic("1512917774080-9991f1c4c750", "Casa Modern", "Real Estate", 1, 1080, 1080),
    pic("1502672260266-1c1ef2d93688", "Urban Nest", "Real Estate", 4 / 5),
    vid("1493809842364-78817add7ffb", "Heights Group", "Real Estate", 0, 1),
    pic("1505691938895-1758d7feb511", "Mosaic Homes", "Real Estate", 4 / 5),
    pic("1564013799919-ab600027ffc6", "Vertex Living", "Real Estate", 1, 1080, 1080),
    pic("1568605114967-8130f3a36994", "Atlas Estates", "Real Estate", 4 / 5),
    pic("1600585154340-be6161a56a0c", "Summit Properties", "Real Estate", 1, 1080, 1080),
    vid("1613490493576-7fde63acd811", "Northline", "Real Estate", 1, 4 / 5),
  ],
  salon: [
    pic("1560066984-138dadb4c035", "Studio Mane", "Salon", 4 / 5),
    pic("1522337360788-8b13dee7a37e", "Glow Bar", "Salon", 1, 1080, 1080),
    pic("1487412947147-5cebf100ffc2", "Edge & Mane", "Salon", 4 / 5),
    pic("1503951914875-452162b0f3f1", "Atelier Hair", "Salon", 1, 1080, 1080),
    pic("1580618672591-eb180b1a973f", "Bloom Beauty", "Salon", 4 / 5),
    vid("1595476108010-b4d1f102b1b1", "Mirror Studio", "Salon", 0, 1),
    pic("1521590832167-7bcbfaa6381f", "Vanity Lane", "Salon", 4 / 5),
    pic("1633681926022-84c23e8cb2d6", "Rituals Hair", "Salon", 1, 1080, 1080),
    vid("1605497788044-5a32c7078486", "House of Hair", "Salon", 1, 4 / 5),
  ],
  d2c: [
    pic("1556228720-195a672e8a03", "Pure Form", "D2C", 4 / 5),
    pic("1571781926291-c477ebfd024b", "Glow Co.", "D2C", 1, 1080, 1080),
    pic("1522335789203-aaae4604fff3", "Wild Roots", "D2C", 4 / 5),
    pic("1556228453-efd6c1ff04f6", "Loop Skincare", "D2C", 1, 1080, 1080),
    vid("1505740420928-5e560c06d30e", "House of Sound", "D2C", 0, 1),
    pic("1542291026-7eec264c27ff", "Stride Co.", "D2C", 4 / 5),
    pic("1585386959984-a4155224a1ad", "Aether Labs", "D2C", 1, 1080, 1080),
    vid("1583394838336-acd977736f90", "Foundry", "D2C", 1, 4 / 5),
    pic("1607082348824-0a96f2a4b9da", "Daylight", "D2C", 4 / 5),
  ],
  saas: [
    pic("1551288049-bebda4e38f71", "Flowdesk", "SaaS", 4 / 5),
    pic("1460925895917-afdab827c52f", "Pulse Analytics", "SaaS", 1, 1080, 1080),
    pic("1551434678-e076c223a692", "Linearly", "SaaS", 4 / 5),
    pic("1556761175-5973dc0f32e7", "StackOps", "SaaS", 1, 1080, 1080),
    vid("1559136555-9303baea8ebd", "Vector CRM", "SaaS", 0, 1),
    pic("1542744173-8e7e53415bb0", "Northbeam", "SaaS", 4 / 5),
    pic("1573164574511-73c773193279", "Orbit", "SaaS", 1, 1080, 1080),
    pic("1517245386807-bb43f82c33c4", "Trail", "SaaS", 4 / 5),
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
