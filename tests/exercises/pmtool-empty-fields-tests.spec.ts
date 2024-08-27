import { expect, test } from "@playwright/test";

test("Check validation messages", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator('//button[@type="submit"]').click();
  await expect.soft(page.locator("#username-error")).toBeVisible();
  expect
    .soft(page.locator("#username-error"))
    .toHaveText("This field is required!");
  expect.soft(page.locator("#password-error")).toBeVisible();
  expect
    .soft(page.locator("#password-error"))
    .toHaveText("This field is required!");
});
