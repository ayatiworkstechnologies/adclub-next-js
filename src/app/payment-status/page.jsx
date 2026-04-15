import PageComponent from "@/components/PaymentStatus";
import { Suspense } from "react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Payment Status",
  description:
    "Check the status of your Advertising Club Madras payment for membership, renewal, or club-related transactions.",
  path: "/payment-status",
  noIndex: true,
});

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>}>
      <PageComponent />
    </Suspense>
  );
}
