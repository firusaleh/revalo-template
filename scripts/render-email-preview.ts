import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import { renderReviewRequestEmail, sendReviewRequestEmail } from "@/lib/email";

async function main() {
  const to = process.argv[2] ?? "firas@three-connect.de";
  const name = process.argv[3] ?? "Firas";
  const token = "a1b2c3d4e5f60718293a4b5c6d7e8f90";

  const html = await renderReviewRequestEmail({
    customerName: name,
    reviewUrl: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/r/${token}`,
    businessName: "Revalo Demo",
    primaryColor: "#0ea5e9",
  });

  const outDir = path.join(process.cwd(), "tmp");
  await fs.mkdir(outDir, { recursive: true });
  const outFile = path.join(outDir, "review-request-preview.html");
  await fs.writeFile(outFile, html, "utf8");
  console.log(`Rendered email preview → ${outFile}`);
  console.log(`Size: ${html.length} bytes`);

  const result = await sendReviewRequestEmail({ name, email: to }, token);
  console.log("Send result:", JSON.stringify(result, null, 2).slice(0, 500));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
