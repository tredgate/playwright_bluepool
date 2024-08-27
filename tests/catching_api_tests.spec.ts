import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Register user in TEG#B and check API", async ({ page }) => {
  const username = faker.internet.userName();
  const email = faker.internet.exampleEmail();
  const password = "123456";

  await page.route(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register",
    (route, request) => {
      console.log(request.postData());
      route.continue();
    }
  );

  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com/register");
  await page.locator('//input[@data-testid="email-input"]').fill(email);
  await page.locator('//input[@data-testid="password-input"]').fill(password);
  await page.locator('//input[@data-testid="username-input"]').fill(username);
  await page.waitForTimeout(500);
  await page.locator("//button[@type='submit']").click();
  const response = await page.waitForResponse(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register"
  );
  const responseBody = await response.json();
  expect(responseBody.username).toBe(username);
  expect(responseBody.email).toBe(email);
  expect(responseBody.userId).toBeDefined();
  expect(responseBody.createdAt).toBeDefined();
  expect(responseBody.updatedAt).toBe(null);
  expect(typeof responseBody.active).toBe("number");
});
