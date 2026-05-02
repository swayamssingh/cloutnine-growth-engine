import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/site/ArticleLayout";

export const Route = createFileRoute("/instagram-marketing-agency-mumbai-guide")({
  head: () => ({
    meta: [
      { title: "Instagram Marketing Agency in Mumbai — Guide | CloutNine" },
      { name: "description", content: "What an Instagram marketing agency in Mumbai actually does — services, deliverables and what good looks like." },
      { property: "og:title", content: "Instagram Marketing Agency in Mumbai — Guide" },
      { property: "og:description", content: "What an Instagram marketing agency in Mumbai actually delivers." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout
      eyebrow="Guide"
      title="Instagram marketing agency in Mumbai: the complete guide"
    />
  );
}
