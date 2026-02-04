import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://fxbot.com"; // change if needed

// Use absolute ONLINE image URLs (Cloudinary, CDN, or hosted site)
const ogImage =
  "https://images.yourcdn.com/FxBot/trading/FxBot-trading-og-1200x630.png";

const iconPng = "https://images.yourcdn.com/FxBot/icons/FxBot-icon-512.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "FxBot Trading Bot — Smart Automated Forex & Crypto Trading",
    template: "%s | FxBot Trading Bot",
  },

  description:
    "FxBot Trading Bot is an intelligent automated trading system designed to generate high-quality market signals, manage risk effectively, and execute trades on MT5 with precision.",

  keywords: [
    "FxBot Trading Bot",
    "automated trading bot",
    "MT5 trading bot",
    "forex trading automation",
    "crypto trading bot",
    "algorithmic trading",
    "risk management trading bot",
    "AI trading signals",
    "smart trading software",
  ],

  authors: [{ name: "FxBot Technology", url: siteUrl }],
  creator: "FxBot Technology",
  publisher: "FxBot Technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "FxBot Trading Bot — Smart Automated Forex & Crypto Trading",
    description:
      "Automate your trading with FxBot Trading Bot. Get intelligent market signals, built-in risk management, and seamless MT5 execution for Forex and Crypto markets.",
    siteName: "FxBot Trading Bot",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "FxBot Trading Bot Automated Trading Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FxBot Trading Bot — Smart Automated Trading System",
    description:
      "Automated trading bot for MT5 with smart signals, risk control, and fast execution across Forex and Crypto markets.",
    images: [ogImage],
    creator: "@FxBottrading", // change if needed
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
    icon: [{ url: iconPng, type: "image/png" }],
    apple: [{ url: iconPng }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
