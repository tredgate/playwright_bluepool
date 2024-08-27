import { test, expect } from "@playwright/test";

test.describe(
  "PMTool Login Tests",
  {
    tag: "@github",
  },
  () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("https://tredgate.com/pmtool/");
    });

    test("Successful Login", async ({ page }) => {
      await page.locator("#username").fill("pw_skoleni");
      await page.locator("#password").fill("TEG2023");
      await page.locator('//button[@type="submit"]').click();
      await expect(page.locator("#welcome-page-header")).toContainText(
        "Vítej v testovací aplikaci"
      );
    });

    test("Failed Login ", async ({ page }) => {
      await page.locator("#username").fill("1234");
      await page.locator("#password").fill("5432");
      await page.locator('//button[@type="submit"]').click();
      await expect(page.locator(".alert-danger")).toBeVisible();
    });
  }
);
