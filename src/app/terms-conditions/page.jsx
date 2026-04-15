import PageComponent from "@/pages/TermsandConditions";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions for using The Advertising Club Madras website, membership services, event registrations, and online payments.",
  path: "/terms-conditions",
});

export default function Page() {
  return <PageComponent />;
}
