import { expect, test } from "@playwright/test";

test.skip("Failing test", async ({ page }) => {
  const var1 = "ABCD";
  const var2 = 234;
  await page.goto("https://tredgate.com/pmtool/");
  expect(page.locator(".abcd")).toBeVisible();
});
