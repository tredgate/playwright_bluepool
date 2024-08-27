import { test } from "@playwright/test";

test("First Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("test");
});
