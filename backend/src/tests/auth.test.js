const request = require("supertest");
const app = require("../app");

jest.setTimeout(15000);

describe("Auth API", () => {
  const userData = {
    email: `user_${Date.now()}@example.com`,
    password: "123456"
  };

  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send(userData);

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User registered");
  });

  it("should login an existing user and return token", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send(userData);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
