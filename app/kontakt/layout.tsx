import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt & Demo anfordern | Revalo Bewertungsmanagement",
  description:
    "Lassen Sie sich zeigen, wie Revalo Ihre Google-Bewertungen steigert. Kostenlose Demo in 5 Minuten. Jetzt Kontakt aufnehmen!",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
