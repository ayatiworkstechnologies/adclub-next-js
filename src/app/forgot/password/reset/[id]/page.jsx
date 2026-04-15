import PageComponent from "@/pages/ForgotPassword";
import { createPageMetadata } from "../../../../seo";

export const metadata = createPageMetadata({
  title: "Reset Password",
  description:
    "Reset your Advertising Club Madras member account password securely.",
  path: "/forgot/password/reset",
  noIndex: true,
});

export default function Page() {
  return <PageComponent />;
}
