import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Avulex Technology - Innovative Tech Solutions",
    template: "%s | Avulex Technology",
  },
  description: "Avulex Technology delivers cutting-edge software solutions and innovative technology services to help businesses thrive in the digital age.",
  keywords: [
    "Avulex Technology",
    "software development",
    "tech solutions",
    "innovation",
    "digital transformation",
    "web development",
    "mobile apps",
  ],
  authors: [{ name: "Avulex Technology" }],
  creator: "Avulex Technology",
  publisher: "Avulex Technology",
  metadataBase: new URL("https://avulex.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avulex.com", // Replace with your actual domain
    title: "Avulex Technology - Innovative Tech Solutions",
    description: "Avulex Technology delivers cutting-edge software solutions and innovative technology services to help businesses thrive in the digital age.",
    siteName: "Avulex Technology",
    images: [
      {
        url: "/Avulex-white-01.png",
        width: 1200,
        height: 630,
        alt: "Avulex Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avulex Technology - Innovative Tech Solutions",
    description: "Avulex Technology delivers cutting-edge software solutions and innovative technology services to help businesses thrive in the digital age.",
    images: ["/Avulex-white-01.png"],
    creator: "@avulextech", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/Avulex-white-01.png", type: "image/png" },
    ],
    apple: [
      { url: "/Avulex-white-01.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}