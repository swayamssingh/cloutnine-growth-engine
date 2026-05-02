import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/site/ArticleLayout";

export const Route = createFileRoute("/social-media-agency-vs-inhouse-vs-freelancer-mumbai")({
  head: () => ({
    meta: [
      { title: "Agency vs In-house vs Freelancer in Mumbai | CloutNine" },
      { name: "description", content: "Should you hire a social media agency, build in-house or work with a freelancer in Mumbai? A clear comparison." },
      { property: "og:title", content: "Social Media: Agency vs In-house vs Freelancer in Mumbai" },
      { property: "og:description", content: "A clear comparison to help Mumbai brands pick the right setup." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout
      eyebrow="Comparison"
      title="Social media: agency vs in-house vs freelancer in Mumbai"
    />
  );
}
