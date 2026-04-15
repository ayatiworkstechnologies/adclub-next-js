import PageComponent from "@/pages/RefundandCancellation";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Refund and Cancellation",
  description:
    "Read the Advertising Club Madras refund and cancellation policy for membership, event, course, and payment-related requests.",
  path: "/refund-and-cancellation",
});

export default function Page() {
  return <PageComponent />;
}
