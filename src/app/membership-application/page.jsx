import PageComponent from "@/components/MembershipForm";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Membership Application",
  description:
    "Apply for Advertising Club Madras membership and join Chennai's professional community for advertising, media, marketing, and brand communication.",
  path: "/membership-application",
});

export default function Page() {
  return <PageComponent />;
}
