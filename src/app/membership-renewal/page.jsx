import PageComponent from "@/components/MembershipReNewForm";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Membership Renewal",
  description:
    "Renew your Advertising Club Madras membership to continue accessing club events, programs, networking, and industry resources.",
  path: "/membership-renewal",
  noIndex: true,
});

export default function Page() {
  return <PageComponent />;
}
