import PageComponent from "@/pages/Newsletter";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Newsletter",
  description:
    "Read updates, headlines, news, and announcements from The Advertising Club Madras and Chennai's advertising industry community.",
  path: "/headline",
});

export default function Page() {
  return <PageComponent />;
}
