const express = require("express");
const router = express.Router();

const transferController = require("../controllers/transferController");

// Customer creates a transfer
router.post("/", transferController.createTransfer);

// Customer transaction history
router.get(
  "/customer/:customerId",
  transferController.getCustomerTransfers
);

module.exports = router;