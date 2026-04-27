import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio/video-content/$industry")({
  beforeLoad: () => {
    throw redirect({ to: "/portfolio/video-content" });
  },
  component: () => null,
});
