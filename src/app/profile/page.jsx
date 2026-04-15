import PageComponent from "@/pages/ProfilePage";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Member Profile",
  description:
    "View and manage your Advertising Club Madras member profile, account details, and membership information.",
  path: "/profile",
  noIndex: true,
});

export default function Page() {
  return <PageComponent />;
}
