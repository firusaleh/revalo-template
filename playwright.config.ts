import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 60_000,
  fullyParallel: false,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:3456",
    trace: "off",
    screenshot: "off",
    headless: true,
  },
  webServer: {
    command: "pnpm build && pnpm exec next start -p 3456",
    url: "http://localhost:3456",
    reuseExistingServer: false,
    timeout: 240_000,
    stdout: "pipe",
    stderr: "pipe",
  },
});
