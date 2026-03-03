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
  metadataBase: new URL("hhttps://mesh-nest-jt6ifrjej-benbodrogis-projects.vercel.app/"), // change later to meshnest.co

  title: {
    default: "MeshNest – Smarter Home Networking",
    template: "%s | MeshNest",
  },

  description:
    "Professional home and small business network audits. Fix slow Wi-Fi, dead zones, and unstable connections with a tailored MeshNest plan.",

  keywords: [
    "home network audit",
    "wifi optimization",
    "network troubleshooting",
    "mesh wifi setup",
    "small business networking",
  ],

  authors: [{ name: "MeshNest" }],

  openGraph: {
    title: "MeshNest – Smarter Home Networking",
    description:
      "Fix slow Wi-Fi, dead zones, and unstable connections. Book a professional network audit today.",
    url: "https://mesh-nest-jt6ifrjej-benbodrogis-projects.vercel.app/",
    siteName: "MeshNest",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MeshNest – Smarter Home Networking",
    description:
      "Professional network audits for homes and small businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
