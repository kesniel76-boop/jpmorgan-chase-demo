const express = require("express");

const router = express.Router();

const transferController = require("../controllers/transferController");

// =====================================
// ADMIN
// =====================================

// Get all transfers
router.get("/", transferController.getAllTransfers);

// Approve transfer
router.put(
  "/approve/:id",
  transferController.approveTransfer
);

// =====================================
// CUSTOMER
// =====================================

// Create transfer
router.post(
  "/",
  transferController.createTransfer
);

// Customer transaction history
router.get(
  "/customer/:customerId",
  transferController.getCustomerTransfers
);

module.exports = router;