import PageComponent from "@/components/LoginForm";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Member Login",
  description:
    "Log in to your Advertising Club Madras member account to manage profile, membership, renewals, and club services.",
  path: "/login",
  noIndex: true,
});

export default function Page() {
  return <PageComponent />;
}
