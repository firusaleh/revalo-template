import { test } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const SCREENSHOT_DIR = "e2e/screenshots";

test.beforeAll(() => {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
});

test.use({ viewport: { width: 1440, height: 900 } });

test("admin dashboard", async ({ page }) => {
  await page.goto("/admin");
  await page.waitForLoadState("networkidle");
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, "admin-01-dashboard.png"),
    fullPage: true,
  });
});

test("admin anfragen table", async ({ page }) => {
  await page.goto("/admin/anfragen");
  await page.waitForLoadState("networkidle");
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, "admin-02-anfragen.png"),
    fullPage: true,
  });
});

test("admin qr page", async ({ page }) => {
  await page.goto("/admin/qr");
  await page.waitForLoadState("networkidle");
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, "admin-03-qr.png"),
    fullPage: true,
  });
});
