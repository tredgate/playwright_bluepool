import { test, expect } from "@playwright/test";

test("Assert response 200", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  await expect(response.status()).toBe(200);
});

test("Booking Content-Type Header check", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );
  const headers = await response.headers();
  const contentType = headers["content-type"];
  expect(contentType).toBe("application/json; charset=utf-8");
  expect(contentType).toContain("application/json");
});

test("Regres.in body.page tests", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users", {
    params: {
      page: 2,
    },
  });
  const responseBody = await response.json();
  expect(responseBody.page).toBeDefined();
  expect(typeof responseBody.page).toBe("number");
  expect(responseBody.page).toBe(2);
});
