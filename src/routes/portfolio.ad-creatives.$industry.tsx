import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio/ad-creatives/$industry")({
  beforeLoad: () => {
    throw redirect({ to: "/portfolio/ad-creatives" });
  },
  component: () => null,
});
