const siteName = "The Advertising Club Madras";
const defaultDescription =
  "The Advertising Club Madras is a professional community for advertising, media, marketing, and creative communication in Chennai, promoting learning, awards, events, and industry networking since 1956.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.adclubmadras.com";
const defaultImage = "/adclubmadras-logo.png";

export const siteMetadata = {
  siteName,
  defaultDescription,
  siteUrl,
  defaultImage,
  keywords: [
    "Advertising Club Madras",
    "Ad Club Madras",
    "advertising club Chennai",
    "advertising events Chennai",
    "marketing community Chennai",
    "media professionals Chennai",
    "Maddys Awards",
    "PGDA advertising course",
  ],
};

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = defaultImage,
  noIndex = false,
}) {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteName} logo`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

export function titleFromSlug(slug, fallback) {
  if (!slug) return fallback;

  return String(slug)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
