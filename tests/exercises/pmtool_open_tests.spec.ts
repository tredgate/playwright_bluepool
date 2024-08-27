import { test } from "@playwright/test";

test("Open Pmtool and fill fields", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("test");
});
