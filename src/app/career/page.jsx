import PageComponent from "@/pages/CareerPage";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Careers",
  description:
    "Explore career and professional opportunities with The Advertising Club Madras and connect with Chennai's advertising, media, and marketing community.",
  path: "/career",
});

export default function Page() {
  return <PageComponent />;
}
