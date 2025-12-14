const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
require("dotenv").config();

// Increase timeout for DB operations
jest.setTimeout(15000);

describe("Auth API - Register", () => {

  // Connect to database before running tests
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  // Clean database after each test (optional but good practice)
  afterEach(async () => {
    await mongoose.connection.db.collection("users").deleteMany({});
  });

  // Close DB connection after all tests
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        email: "testuser@example.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User registered");
  });

});
