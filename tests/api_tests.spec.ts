import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("GET Request", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("GET with params", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 3,
    },
  });
});

test("GET Booking with header", async ({ request }) => {
  await request.get("https://restful-booker.herokuapp.com/booking", {
    headers: {
      "Accept-Language": "en-US,en;q=0.9,cs-CZ;q=0.8,cs;q=0.7,it;q=0.6",
    },
  });
});

test("POST Req with body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        email: faker.internet.exampleEmail(),
        username: faker.internet.userName(),
        password: "123456",
      },
    }
  );
});

test("Update Booking with authorized request", async ({ request }) => {
  const authResponse = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123",
      },
    }
  );
  const responseBody: any = await authResponse.json();
  const token = responseBody.token;
  console.log(token);

  // * Nastavení headers do proměnné
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Cookie: "token=" + token, // ! Použití const token do hlavičky cookie
  };
  const data = {
    firstname: "James",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  };

  await request.put("https://restful-booker.herokuapp.com/booking/169", {
    headers: headers,
    data: data,
  });
});
