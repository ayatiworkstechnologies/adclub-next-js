import PageComponent from "@/pages/Eventpages";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Events",
  description:
    "Browse Advertising Club Madras events including GYAN Series, workshops, brand quizzes, sports, awards, and industry networking programs.",
  path: "/events",
});

export default function Page() {
  return <PageComponent />;
}
