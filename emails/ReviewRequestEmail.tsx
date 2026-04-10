import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export type ReviewRequestEmailProps = {
  customerName: string;
  reviewUrl: string;
  businessName: string;
  primaryColor?: string;
};

const defaultPrimary = "#0ea5e9";

export function ReviewRequestEmail({
  customerName,
  reviewUrl,
  businessName,
  primaryColor = defaultPrimary,
}: ReviewRequestEmailProps) {
  return (
    <Html lang="de">
      <Head />
      <Preview>
        {`Wie war Ihr Besuch bei ${businessName}? Jetzt bewerten.`}
      </Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={{ ...h1, color: primaryColor }}>
            {businessName}
          </Heading>
          <Text style={text}>Hallo {customerName},</Text>
          <Text style={text}>
            vielen Dank für Ihren Besuch. Wir würden uns sehr freuen, wenn
            Sie sich kurz Zeit für eine Bewertung nehmen — das hilft uns
            und anderen Gästen weiter.
          </Text>
          <Section style={buttonWrap}>
            <Button
              href={reviewUrl}
              style={{ ...button, backgroundColor: primaryColor }}
            >
              Jetzt bewerten
            </Button>
          </Section>
          <Text style={textSmall}>
            Oder kopieren Sie diesen Link in Ihren Browser:
            <br />
            <Link href={reviewUrl} style={{ color: primaryColor }}>
              {reviewUrl}
            </Link>
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Sie erhalten diese E-Mail, weil Sie kürzlich Kunde bei{" "}
            {businessName} waren.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body: React.CSSProperties = {
  backgroundColor: "#f8fafc",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  padding: "24px 0",
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "32px",
  maxWidth: "560px",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
};

const h1: React.CSSProperties = {
  fontSize: "26px",
  fontWeight: 700,
  margin: "0 0 16px 0",
};

const text: React.CSSProperties = {
  color: "#334155",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px 0",
};

const textSmall: React.CSSProperties = {
  color: "#64748b",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "16px 0",
};

const buttonWrap: React.CSSProperties = {
  textAlign: "center" as const,
  margin: "24px 0",
};

const button: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: 600,
  padding: "14px 28px",
  borderRadius: "8px",
  textDecoration: "none",
  display: "inline-block",
};

const hr: React.CSSProperties = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const footer: React.CSSProperties = {
  color: "#94a3b8",
  fontSize: "12px",
  lineHeight: "18px",
  margin: 0,
};

export default ReviewRequestEmail;
