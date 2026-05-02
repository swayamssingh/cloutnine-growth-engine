import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/site/ArticleLayout";

export const Route = createFileRoute("/how-to-choose-social-media-agency-mumbai")({
  head: () => ({
    meta: [
      { title: "How to Choose a Social Media Agency in Mumbai | CloutNine" },
      { name: "description", content: "A practical framework for evaluating social media agencies in Mumbai — what to ask, what to verify and what to avoid." },
      { property: "og:title", content: "How to Choose a Social Media Agency in Mumbai" },
      { property: "og:description", content: "A practical framework for picking the right social media agency in Mumbai." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout
      eyebrow="Decision Guide"
      title="How to choose a social media agency in Mumbai"
    />
  );
}
