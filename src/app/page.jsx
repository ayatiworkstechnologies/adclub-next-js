import AnimatedBackground from "@/components/background";
import HeroSection from "@/pages/Home/HeroSection";
import LegacySection from "@/pages/Home/LegacySection";
import CommunityBanner from "@/pages/Home/CommunityBanner";
import WhyJoinUsBanner from "@/pages/Home/WhyJoinUsBanner";
import EventSection from "@/pages/Home/EventSection";
import UpcomingEvents from "@/pages/Home/UpcomingEvents";
import JoinUsBanner from "@/pages/Home/JoinUsBanner";
import JoinUsSection from "@/pages/Home/JoinUsSection";
import DiscoverMoments from "@/pages/Home/DiscoverMoments";
import PgdaCard from "@/pages/Home/PGDA";
import { createPageMetadata, siteMetadata } from "./seo";

export const metadata = createPageMetadata({
  title: siteMetadata.siteName,
  description:
    "Join The Advertising Club Madras, Chennai's advertising and marketing community for events, awards, learning programs, membership, and creative industry networking.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <HeroSection />
      <LegacySection />
      <CommunityBanner />
      <PgdaCard />
      <WhyJoinUsBanner />
      <EventSection />
      <UpcomingEvents />
      <JoinUsBanner />
      <JoinUsSection />
      <DiscoverMoments />
    </>
  );
}
