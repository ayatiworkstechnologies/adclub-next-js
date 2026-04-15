import PageComponent from "@/pages/Gallary/GallaryDetailsPage";
import { createPageMetadata } from "../../seo";

export async function generateMetadata({ params }) {
  const { id } = await params;

  return createPageMetadata({
    title: "Gallery Details",
    description:
      "Explore Advertising Club Madras gallery details with event photos, guest moments, and highlights from Chennai's advertising community.",
    path: `/gallery/${id}`,
  });
}

export default function Page() {
  return <PageComponent />;
}
