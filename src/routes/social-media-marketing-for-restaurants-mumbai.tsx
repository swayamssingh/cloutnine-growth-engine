import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/site/ArticleLayout";

export const Route = createFileRoute("/social-media-marketing-for-restaurants-mumbai")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing for Restaurants in Mumbai | CloutNine" },
      { name: "description", content: "How Mumbai restaurants and cafés use social media to drive footfall, reservations and delivery orders." },
      { property: "og:title", content: "Social Media Marketing for Restaurants in Mumbai" },
      { property: "og:description", content: "A playbook for Mumbai restaurants and cafés on social." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout
      eyebrow="Industry Guide"
      title="Social media marketing for restaurants in Mumbai"
    />
  );
}
