import PageComponent from "@/pages/CoursePage";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "PGDA Course",
  description:
    "Discover the PGDA advertising course from The Advertising Club Madras for aspiring advertising, media, and brand communication professionals.",
  path: "/course-new",
});

export default function Page() {
  return <PageComponent />;
}
