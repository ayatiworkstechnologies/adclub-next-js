import PageComponent from "@/pages/MembershipPage";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Membership",
  description:
    "Become a member of The Advertising Club Madras and connect with advertising, media, marketing, and creative professionals in Chennai.",
  path: "/membership",
});

export default function Page() {
  return <PageComponent />;
}
