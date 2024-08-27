import { test } from "@playwright/test";

test("Fill webtrain form", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#name").fill("PPPP");
  await page.locator("#datepicker").fill("2000-01-01");
  await page.locator("#email").fill("pepe@pepe.com");
  await page.locator("#password").fill("12345");
  await page.locator("#confirm-password").fill("12345");
  await page.locator("#basic").check();
  await page.locator("#age").fill("20");
  await page.locator("#gender").selectOption("female");
  await page.locator("#address").fill("Adresa kamaráda");
  await page.locator("#interests-music").check();
  await page.locator("#newsletter").check();
  await page.locator("button[type='submit']").click();
});
