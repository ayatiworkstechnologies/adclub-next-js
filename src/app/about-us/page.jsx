import PageComponent from "@/pages/AboutPage";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about The Advertising Club Madras, its legacy since 1956, leadership, facilities, and role in Chennai's advertising and media industry.",
  path: "/about-us",
});

export default function Page() {
  return <PageComponent />;
}
