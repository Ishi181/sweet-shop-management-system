const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed });

  res.status(201).json({ message: "User registered" });
};
