import PageComponent from "@/pages/Event/EventDetailPage";
import { createPageMetadata, titleFromSlug } from "../../seo";

export async function generateMetadata({ params }) {
  const { eventSlug } = await params;
  const eventTitle = titleFromSlug(eventSlug, "Event Details");

  return createPageMetadata({
    title: eventTitle,
    description: `${eventTitle} by The Advertising Club Madras. View event details, schedule, venue, and advertising industry program information.`,
    path: `/events/${eventSlug}`,
  });
}

export default function Page() {
  return <PageComponent />;
}
