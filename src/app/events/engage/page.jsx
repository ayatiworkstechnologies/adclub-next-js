import PageComponent from "@/pages/Eventpages";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  title: "Engage Events",
  description:
    "Explore Engage events from Ad Club Madras including Headline, Brand & Brew, and Adrenaline.",
  path: "/events/engage",
});

export default function Page() {
  return <PageComponent eventGroup="engage" />;
}
