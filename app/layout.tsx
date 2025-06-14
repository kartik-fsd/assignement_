import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Discover Our Products - Premium E-commerce Store",
  description:
    "Explore our curated collection of premium products. Find the perfect items for your lifestyle with our extensive range of categories.",
  keywords:
    "ecommerce, products, shopping, online store, premium items, fashion, electronics, jewelry",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Discover Our Products - Premium E-commerce Store",
    description:
      "Explore our curated collection of premium products. Find the perfect items for your lifestyle.",
    siteName: "Premium E-commerce Store",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium E-commerce Store",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Discover Our Products - Premium E-commerce Store",
    description: "Explore our curated collection of premium products.",
    creator: "@yourhandle",
    images: ["/twitter-image.jpg"],
  },

  // Additional meta tags
  other: {
    "theme-color": "#ffffff",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
