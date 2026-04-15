import PageComponent from "@/pages/ContactPage";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact The Advertising Club Madras for membership, events, awards, courses, partnerships, and advertising industry enquiries in Chennai.",
  path: "/contact",
});

export default function Page() {
  return <PageComponent />;
}
