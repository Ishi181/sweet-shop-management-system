const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Sweet Shop API is running");
});

const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedTestRoute");

app.use("/api/auth", authRoutes);
app.use("/api/test", protectedRoutes);

module.exports = app;
