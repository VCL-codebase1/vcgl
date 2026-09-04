import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "VCGL | Vethan Concepts Group Limited",
  description: "Vethan Concepts Group Limited is a diversified Nigerian conglomerate driving innovation across science, energy, automation, technology, and event experiences.",
  keywords: [
    "Vethan Concepts Group",
    "VCGL",
    "Nigerian conglomerate",
    "innovation",
    "laboratory solutions",
    "energy",
    "automation",
    "events management",
    "technology",
  ],
  authors: [{ name: "Vethan Concepts Group Limited" }],
  metadataBase: new URL("https://vcgl.ng"),
  alternates: {
    canonical: "https://vcgl.ng",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vcgl.ng",
    siteName: "Vethan Concepts Group Limited",
    title: "VCGL | Innovation Across Industries. Excellence Without Limits.",
    description: "Vethan Concepts Group Limited is a diversified Nigerian conglomerate driving innovation across science, energy, automation, technology, and event experiences.",
    images: [
      {
        url: "/vcgl logo.jpg",
        width: 190,
        height: 70,
        alt: "VCGL - Vethan Concepts Group Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VCGL | Innovation Across Industries. Excellence Without Limits.",
    description: "Vethan Concepts Group Limited is a diversified Nigerian conglomerate driving innovation across science, energy, automation, technology, and event experiences.",
    images: ["/vcgl logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Vethan Concepts Group Limited",
      alternateName: ["VCGL", "Vethan Concepts"],
      url: "https://vcgl.ng",
      logo: "https://vcgl.ng/vcgl logo.jpg",
      description: "A diversified Nigerian conglomerate driving innovation across science, energy, automation, technology, and event experiences.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 23, House 13 Osogbo Street, Ogudu",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+234-704-194-3795",
        contactType: "customer service",
        availableLanguage: ["English"],
      },
      sameAs: [
        "https://etconanalytical.com/",
        "https://assetmatrixenergy.com",
        "https://vethanconcepts.com",
        "https://assetmatrixautomation.com/",
        "https://lab.etconanalytical.com/",
        "https://perfecteventsng.com/",
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "Vethan Concepts Group Limited",
      url: "https://vcgl.ng",
      telephone: "+234-704-194-3795",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 23, House 13 Osogbo Street, Ogudu",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.5244,
        longitude: 3.3792,
      },
      openingHours: "Mo-Fr 09:00-17:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </html>
  );
}
