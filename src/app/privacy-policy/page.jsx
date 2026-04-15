import PageComponent from "@/pages/PrivacyPolicy";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Review The Advertising Club Madras privacy policy for information about data collection, use, protection, and member privacy.",
  path: "/privacy-policy",
});

export default function Page() {
  return <PageComponent />;
}
