import { expect, test } from "@playwright/test";

test.skip("This test is skipped", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("button[type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  );
});

// test.only("Open Pmtool", async ({ page }) => {
//   await page.goto("https://tredgate.com/pmtool/");
// });
