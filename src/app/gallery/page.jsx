import PageComponent from "@/pages/GallaryPage";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Gallery",
  description:
    "View photo highlights from Advertising Club Madras events, GYAN Series sessions, awards, workshops, sports programs, and community gatherings.",
  path: "/gallery",
});

export default function Page() {
  return <PageComponent />;
}
