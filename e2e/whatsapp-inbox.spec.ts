import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 1440, height: 900 } });

test("whatsapp versand inbox renders counter + rows + buttons", async ({
  page,
}) => {
  // Grant clipboard access and stub writeText to never throw.
  await page.addInitScript(() => {
    // Provide a fake clipboard for headless environments.
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: async (_t: string) => {
          (window as unknown as { __copied: string }).__copied = _t;
        },
      },
      configurable: true,
    });
  });

  await page.goto("/admin/versand");
  await page.waitForLoadState("networkidle");

  // Counter visible
  const counter = page.getByTestId("wa-counter");
  await expect(counter).toBeVisible();

  // At least one row
  const rows = page.getByTestId("wa-row");
  await expect(rows.first()).toBeVisible();
  const rowCount = await rows.count();
  expect(rowCount).toBeGreaterThan(0);

  // Copy button visible
  const copyBtn = page.getByTestId("wa-copy-text").first();
  await expect(copyBtn).toBeVisible();

  // Click copy and verify UI flash
  await copyBtn.click();
  await expect(copyBtn).toContainText("Kopiert");
});
