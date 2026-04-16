import PageComponent from "@/pages/Eventpages";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  title: "Educate Events",
  description:
    "Explore Educate events from Ad Club Madras including PGDAM, Elevate, and Admates.",
  path: "/events/educate",
});

export default function Page() {
  return <PageComponent eventGroup="educate" />;
}
