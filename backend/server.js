const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); // ✅ MUST come before using app

const authRoutes = require("./routes/auth");
const auth = require("./middleware/auth");
const role = require("./middleware/role");

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);

// Protected route
app.get("/api/dashboard", auth, (req, res) => {
  res.json({ msg: "Welcome User" });
});

// Admin route
app.get("/api/admin", auth, role("admin"), (req, res) => {
  res.json({ msg: "Welcome Admin" });
});

app.listen(5000, () => console.log("Server running on port 5000"));