require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const transferRoutes = require("./routes/transferRoutes");
const adminRoutes = require("./routes/adminRoutes");

const express = require("express");
const cors = require("cors");

const db = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/transfers", transferRoutes);
app.use("/api/admin", adminRoutes);

const transactionRoutes =
require("./routes/transactionRoutes");


app.use(
  "/api/transactions",
  transactionRoutes
);

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");

    res.json({
      message: "JP Morgan Chase API is running",
      database: "Connected",
      time: result.rows[0].now,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Database connection failed",
    });

  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});