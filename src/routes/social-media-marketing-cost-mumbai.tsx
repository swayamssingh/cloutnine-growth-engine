import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/site/ArticleLayout";

export const Route = createFileRoute("/social-media-marketing-cost-mumbai")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing Cost in Mumbai | CloutNine" },
      { name: "description", content: "What social media marketing actually costs in Mumbai — pricing models, package ranges and what drives the number." },
      { property: "og:title", content: "Social Media Marketing Cost in Mumbai" },
      { property: "og:description", content: "Honest breakdown of what social media marketing costs in Mumbai." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout
      eyebrow="Guide"
      title="Social media marketing cost in Mumbai"
    />
  );
}
