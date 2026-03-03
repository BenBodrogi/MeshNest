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

const baseUrl = "https://mesh-nest.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "MeshNest Network Audits – Fix Slow Wi-Fi & Dead Zones",
    template: "%s | MeshNest",
  },

  description:
    "Professional home & small business network audits. Eliminate dead zones, stabilize speeds, and get a tailored upgrade plan. Book today.",

  keywords: [
    "home network audit",
    "wifi optimization",
    "network troubleshooting",
    "mesh wifi setup",
    "small business networking",
  ],

  authors: [{ name: "MeshNest" }],

  openGraph: {
    title: "MeshNest Network Audits – Fix Slow Wi-Fi & Dead Zones",
    description:
      "Eliminate dead zones, stabilize speeds, and get a tailored upgrade plan for your home or small business. Book a MeshNest audit today.",
    url: baseUrl,
    siteName: "MeshNest",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MeshNest Network Audits – Fix Slow Wi-Fi & Dead Zones",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MeshNest Network Audits – Fix Slow Wi-Fi & Dead Zones",
    description:
      "Professional network audits to fix slow Wi-Fi, dead zones, and unstable connections. Book today.",
    images: ["/og-image.png"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "MeshNest",
              url: baseUrl,
              description:
                "Professional home and small business network audits. Fix slow Wi-Fi, dead zones, and unstable connections with a tailored plan.",
              areaServed: {
                "@type": "Country",
                name: "Hungary",
              },
              serviceType: [
                "Home network audit",
                "Wi-Fi optimization",
                "Mesh Wi-Fi setup",
                "Network troubleshooting",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "hello@mesh-nest.vercel.app",
                  availableLanguage: ["English", "Hungarian"],
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}