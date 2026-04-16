import PageComponent from "@/pages/Eventpages";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  title: "Inspire Events",
  description:
    "Explore Inspire events from Ad Club Madras including MADDYs, AdTalks, Deadline, and Sparks.",
  path: "/events/inspire",
});

export default function Page() {
  return <PageComponent eventGroup="inspire" />;
}
