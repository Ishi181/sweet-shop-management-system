const mongoose = require("mongoose");
require("dotenv").config();   // 👈 THIS LINE IS CRITICAL

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});
