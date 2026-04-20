import { ThemeProvider } from "@/context/ThemeContext";
import MainLayout from "@/layout/MainLayout";
import SmoothScroll from "@/components/SmoothScroll";
import { Poppins } from "next/font/google"; // or whatever they were using. Let's not inject unrequested Google fonts until we see index.css
import "./globals.css";
import { siteMetadata } from "./seo";

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.siteName,
    template: `%s | ${siteMetadata.siteName}`,
  },
  description: siteMetadata.defaultDescription,
  applicationName: siteMetadata.siteName,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.siteName }],
  creator: siteMetadata.siteName,
  publisher: siteMetadata.siteName,
  category: "Advertising and Marketing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteMetadata.siteName,
    description: siteMetadata.defaultDescription,
    url: "/",
    siteName: siteMetadata.siteName,
    images: [
      {
        url: siteMetadata.defaultImage,
        width: 1200,
        height: 630,
        alt: `${siteMetadata.siteName} logo`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.siteName,
    description: siteMetadata.defaultDescription,
    images: [siteMetadata.defaultImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <ThemeProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
