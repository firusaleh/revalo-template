import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const SCREENSHOT_DIR = "e2e/screenshots";

test.beforeAll(() => {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
});

test.describe("Anonymous review flow /bewerten", () => {
  test("5 stars redirects to Google review URL", async ({ page }) => {
    // Intercept the real Google URL so we never leave the test harness.
    await page.route("https://www.google.com/**", (route) =>
      route.fulfill({
        status: 200,
        contentType: "text/html",
        body: "<html><body><h1 id='google-mock'>google mock</h1></body></html>",
      }),
    );

    await page.goto("/bewerten");
    await expect(
      page.getByRole("heading", { name: /Revalo Demo/i }),
    ).toBeVisible();
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "01-bewerten-initial.png"),
      fullPage: true,
    });

    await page.getByRole("radio", { name: "5 Sterne" }).click();

    await page.waitForURL(/google\.com/, { timeout: 15_000 });
    expect(page.url()).toMatch(/google\.com/);
    await expect(page.locator("#google-mock")).toBeVisible();
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "02-5-stars-google-redirect.png"),
      fullPage: true,
    });
  });

  test("2 stars shows feedback form and submits to /danke", async ({
    page,
  }) => {
    await page.goto("/bewerten");
    await page.getByRole("radio", { name: "2 Sterne" }).click();

    const textarea = page.getByRole("textbox");
    await expect(textarea).toBeVisible();
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "03-2-stars-feedback-form.png"),
      fullPage: true,
    });

    await textarea.fill(
      "Leider war der Service heute nicht zufriedenstellend und wir mussten lange auf die Bestellung warten.",
    );
    await page
      .getByRole("button", { name: /feedback senden/i })
      .click();

    await page.waitForURL(/\/danke/, { timeout: 15_000 });
    await expect(
      page.getByRole("heading", { name: /Vielen Dank/i }),
    ).toBeVisible();
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "04-danke-page.png"),
      fullPage: true,
    });
  });
});
