const express = require("express");

const router = express.Router();


const transactionController =
require("../controllers/transactionController");



// Get customer transactions
router.get(
  "/:customerId",
  transactionController.getTransactions
);



// Create transaction
router.post(
  "/",
  transactionController.createTransaction
);



module.exports = router;