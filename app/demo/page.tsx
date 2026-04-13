import type { Metadata } from "next";
import DemoPlayer from "./demo-player";

export const metadata: Metadata = {
  title: "Revalo Demo — In 30 Sekunden verstehen",
  description:
    "Sieh in 30 Sekunden, wie Revalo automatisch mehr 5-Sterne-Bewertungen für dein Unternehmen generiert — DSGVO-konform und Google-konform.",
  openGraph: {
    title: "Revalo Demo — 30 Sekunden Smart Review Management",
    description:
      "Automatische 5-Sterne-Bewertungen per WhatsApp, Smart Routing und Google-konform. Jetzt Demo ansehen.",
    type: "video.other",
    images: [
      {
        url: "/og/revalo-demo-og.jpg",
        width: 1200,
        height: 630,
        alt: "Revalo Demo Preview",
      },
    ],
  },
  twitter: {
    card: "player",
    title: "Revalo Demo — 30 Sekunden",
    description:
      "Sieh in 30 Sekunden, wie Revalo mehr 5-Sterne-Bewertungen generiert.",
  },
  alternates: {
    canonical: "https://getrevalo.de/demo",
  },
};

export default function DemoPage() {
  return (
    <>
      <DemoPlayer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Revalo — Smart Review Management Demo",
            description:
              "30-Sekunden-Demo: So generiert Revalo automatisch mehr 5-Sterne-Bewertungen per Smart Routing.",
            thumbnailUrl: "https://getrevalo.de/og/revalo-demo-og.jpg",
            contentUrl: "https://getrevalo.de/videos/revalo-demo.mp4",
            uploadDate: "2026-04-13",
            duration: "PT30S",
            publisher: {
              "@type": "Organization",
              name: "Revalo",
              logo: {
                "@type": "ImageObject",
                url: "https://getrevalo.de/logo.png",
              },
            },
          }),
        }}
      />
    </>
  );
}
