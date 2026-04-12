export function JsonLd() {
  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Revalo",
    description:
      "Bewertungsmanagement-Software mit Smart-Routing. Zufriedene Kunden werden automatisch zu Google Reviews geleitet, negatives Feedback bleibt intern.",
    url: "https://getrevalo.de",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    creator: {
      "@type": "Organization",
      name: "Three Connect Agency",
      url: "https://three-connect.de",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Revalo",
    url: "https://getrevalo.de",
    description:
      "Bewertungsmanagement mit Smart-Routing für lokale Unternehmen",
    founder: {
      "@type": "Person",
      name: "Firas Hattab",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Three Connect Agency",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie funktioniert Smart-Routing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Revalo fragt alle Kunden nach ihrer Erfahrung. Kunden mit 4-5 Sternen werden zu Google Reviews weitergeleitet, Kunden mit 1-3 Sternen landen auf einem internen Feedback-Formular.",
        },
      },
      {
        "@type": "Question",
        name: "Brauche ich ein Google Business Profil?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, ein Google Business Profil ist Voraussetzung, damit Kunden Google-Bewertungen hinterlassen können.",
        },
      },
      {
        "@type": "Question",
        name: "Ist Revalo DSGVO-konform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Revalo wird auf EU-Servern gehostet, Daten werden verschlüsselt, und wir bieten einen AVV an.",
        },
      },
      {
        "@type": "Question",
        name: "Lässt sich Revalo in mein System integrieren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Revalo funktioniert eigenständig per QR-Code, E-Mail und WhatsApp. API-Integration ist im Enterprise-Plan verfügbar.",
        },
      },
      {
        "@type": "Question",
        name: "Was passiert mit negativem Feedback?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Negatives Feedback wird intern gespeichert und ist nur für Sie sichtbar. Es erscheint nicht öffentlich auf Google.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
