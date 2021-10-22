const request = require("supertest");
const app = require("../app");

//CheckAPIStatus
test("should Get status 200", async () => {
  const response = await request(app).get("/customers");
  expect(response.status).toBe(200);
});

//CheckRandomObject
test("should pass if all parameters exists", async () => {
  const response = await request(app).post(`/customers/add`).send({
    name: "Shirt",
    slug: "Clothes",
    sku: "LEE",
    relevantBrand: "Levis",
  });
  const results = JSON.parse(response.text);
  expect(results).toHaveProperty("message");
  expect(results).toHaveProperty("status");
});

//Check Correct Input
test("should fail if missing parameters", async () => {
  const response = await request(app).post(`/customers/add`).send({
    name: "Shirt",
    slug: "Clothes",
    sku: "LEE",
  });
  const results = JSON.parse(response.text);
  expect(results).toMatchObject({
    status: 0,
    message: "Missing fields",
  });
});

//Check Wrong Input
test("should fail if provided 1 parameter", async () => {
  const response = await request(app).post(`/customers/add`).send({
    name: "Shirt",
  });
  const results = JSON.parse(response.text);
  expect(results).toMatchObject({
    status: 0,
    message: "Missing fields",
  });
});

//Should hava a parameter
test("should have a parameter for 200", async () => {
  const response = await request(app).get("/customers/3");
  expect(response.status).toBe(200);
});

//Should hava a parameter
test("should have a parameter for search by name 200", async () => {
  const response = await request(app).get("/customers/search/Playstation-");
  expect(response.status).toBe(200);
});

//Should hava a parameter
test("should have a parameter 500", async () => {
  const response = await request(app).get("/customers/search/");
  expect(response.status).toBe(500);
});

//Should hava a parameter
test("should not Delete a customer give error 500", async () => {
  const response = await request(app).delete("/customers/500");
  const results = JSON.parse(response.text);
  expect(response.status).toBe(500);
  expect(results.message).toBe("Customer does not exist!");
});
