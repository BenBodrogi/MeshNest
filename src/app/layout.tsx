import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const baseUrl = "https://meshnest.co";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "MeshNest – Lassú Wi-Fi és Lefedettségi Hiányok Megoldása",
    template: "%s | MeshNest",
  },

  description:
    "Professzionális otthoni és kisvállalati hálózati auditok. Szüntesd meg a lefedettségi hiányokat, stabilizáld a sebességet, és kapj személyre szabott fejlesztési tervet. Foglalj még ma.",

  keywords: [
    "wifi hibaelhárítás",
    "otthoni hálózati audit",
    "lefedettségi hiányok",
    "hálózati karbantartás",
    "kisvállalkozási hálózat",
    "wifi optimization",
    "home network audit",
  ],

  authors: [{ name: "MeshNest" }],

  openGraph: {
    title: "MeshNest – Lassú Wi-Fi és Lefedettségi Hiányok Megoldása",
    description:
      "Szüntesd meg a lefedettségi hiányokat, stabilizáld a sebességet, és kapj személyre szabott fejlesztési tervet otthonodhoz vagy kisvállalkozásodhoz. Foglalj MeshNest auditot még ma.",
    url: baseUrl,
    siteName: "MeshNest",
    locale: "hu_HU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MeshNest – Lassú Wi-Fi és Lefedettségi Hiányok Megoldása",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MeshNest – Lassú Wi-Fi és Lefedettségi Hiányok Megoldása",
    description:
      "Professzionális hálózati auditok lassú Wi-Fi, lefedettségi hiányok és instabil kapcsolat javítására. Foglalj még ma.",
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
    <html lang="hu">
      <body className={`${fraunces.variable} ${manrope.variable} antialiased`}>
        <LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "MeshNest",
              url: baseUrl,
              description:
                "Professzionális otthoni és kisvállalati hálózati auditok. Lassú Wi-Fi, lefedettségi hiányok és instabil kapcsolat javítása személyre szabott tervvel.",
              areaServed: {
                "@type": "Country",
                name: "Magyarország",
              },
              serviceType: [
                "Otthoni hálózati audit",
                "Wi-Fi optimalizálás",
                "Mesh Wi-Fi beállítás",
                "Hálózati hibaelhárítás",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "info@virdana.dev",
                  availableLanguage: ["English", "Hungarian"],
                },
              ],
            }),
          }}
        />
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}