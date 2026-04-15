import PageComponent from "@/pages/PressRelease";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Press Release",
  description:
    "Read official press releases, announcements, and media updates from The Advertising Club Madras.",
  path: "/press-release",
});

export default function Page() {
  return <PageComponent />;
}
