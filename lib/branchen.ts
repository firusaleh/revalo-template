export type Branche = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  color: string;
};

export const branchen: Branche[] = [
  {
    slug: "aerzte",
    name: "Arztpraxen & Allgemeinmedizin",
    shortName: "Arztpraxen",
    description:
      "Mehr Patientenbewertungen automatisch sammeln und Vertrauen aufbauen.",
    icon: "🩺",
    color: "sky",
  },
  {
    slug: "zahnaerzte",
    name: "Zahnarztpraxen",
    shortName: "Zahnärzte",
    description:
      "Patienten nach dem Termin automatisch um eine Google-Bewertung bitten.",
    icon: "🦷",
    color: "cyan",
  },
  {
    slug: "gastronomie",
    name: "Restaurants & Gastronomie",
    shortName: "Gastronomie",
    description:
      "QR-Codes auf dem Tisch, Smart-Routing nach dem Essen — mehr Bewertungen ohne Aufwand.",
    icon: "🍽️",
    color: "amber",
  },
  {
    slug: "handwerk",
    name: "Handwerker & Handwerksbetriebe",
    shortName: "Handwerk",
    description:
      "Nach jedem Auftrag automatisch Bewertungen sammeln — per WhatsApp oder E-Mail.",
    icon: "🔧",
    color: "orange",
  },
  {
    slug: "hotels",
    name: "Hotels & Unterkünfte",
    shortName: "Hotels",
    description:
      "Gästebewertungen nach dem Checkout automatisch einsammeln.",
    icon: "🏨",
    color: "violet",
  },
  {
    slug: "anwaelte",
    name: "Anwaltskanzleien",
    shortName: "Anwälte",
    description:
      "Vertrauen durch Bewertungen aufbauen — diskret und professionell.",
    icon: "⚖️",
    color: "slate",
  },
  {
    slug: "steuerberater",
    name: "Steuerberater & Steuerberatungskanzleien",
    shortName: "Steuerberater",
    description:
      "Nach der Steuererklärung automatisch um eine Bewertung bitten.",
    icon: "📊",
    color: "emerald",
  },
  {
    slug: "immobilienmakler",
    name: "Immobilienmakler",
    shortName: "Immobilienmakler",
    description:
      "Nach Verkauf oder Vermietung Kundenzufriedenheit in Google-Bewertungen umwandeln.",
    icon: "🏠",
    color: "rose",
  },
  {
    slug: "kfz-werkstatt",
    name: "KFZ-Werkstätten & Autohäuser",
    shortName: "KFZ-Werkstatt",
    description:
      "Nach Reparatur oder Inspektion automatisch Bewertungen einsammeln.",
    icon: "🚗",
    color: "red",
  },
  {
    slug: "fitnessstudio",
    name: "Fitnessstudios & Sportvereine",
    shortName: "Fitnessstudios",
    description:
      "Mitglieder motivieren, ihre Erfahrung auf Google zu teilen.",
    icon: "💪",
    color: "lime",
  },
  {
    slug: "friseur",
    name: "Friseure & Beauty-Salons",
    shortName: "Friseure",
    description:
      "Im Moment der höchsten Zufriedenheit — direkt nach dem neuen Look.",
    icon: "✂️",
    color: "pink",
  },
  {
    slug: "online-shop",
    name: "Online-Shops & E-Commerce",
    shortName: "Online-Shops",
    description:
      "Nach Lieferung automatisch um Produktbewertungen bitten.",
    icon: "🛒",
    color: "indigo",
  },
  {
    slug: "pflegedienst",
    name: "Pflegedienste & Seniorenbetreuung",
    shortName: "Pflegedienste",
    description:
      "Vertrauen für Angehörige schaffen — durch echte Bewertungen zufriedener Familien.",
    icon: "❤️",
    color: "teal",
  },
];

export function getBranche(slug: string): Branche | undefined {
  return branchen.find((b) => b.slug === slug);
}

export function getAllBranchenSlugs(): string[] {
  return branchen.map((b) => b.slug);
}
