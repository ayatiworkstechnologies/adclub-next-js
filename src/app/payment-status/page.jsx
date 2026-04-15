import PageComponent from "@/components/PaymentStatus";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>}>
      <PageComponent />
    </Suspense>
  );
}
