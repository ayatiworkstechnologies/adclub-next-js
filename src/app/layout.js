import { ThemeProvider } from "@/context/ThemeContext";
import MainLayout from "@/layout/MainLayout";
import { Poppins } from "next/font/google"; // or whatever they were using. Let's not inject unrequested Google fonts until we see index.css
import "./globals.css";

export const metadata = {
  title: "The Advertising Club Madras",
  description: "The Advertising Club Madras since 1956",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
