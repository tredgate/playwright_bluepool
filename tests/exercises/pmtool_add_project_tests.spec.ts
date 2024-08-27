import { expect, test } from "@playwright/test";

test("Add project form have name and save button", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator('//button[@type="submit"]').click();
  await page.locator("#Projects").click();
  await expect(page.locator(".table-scrollable table")).toBeVisible();
  await page.locator('//button[@test_id="Add Project"]').click();
  await expect(page.locator('div[data-testid="Name"] input')).toBeVisible();
  await expect(page.locator("button[type='submit']")).toHaveText("Save");
});
