require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const transferRoutes = require("./routes/transferRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ==========================
// API ROUTES
// ==========================

app.use("/api/auth", authRoutes);

app.use("/api/customers", customerRoutes);

app.use("/api/transfers", transferRoutes);

app.use("/api/admin", adminRoutes);

// ==========================
// HEALTH CHECK
// ==========================

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");

    res.json({
      success: true,
      message: "JP Morgan Chase API is running",
      database: "Connected",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});