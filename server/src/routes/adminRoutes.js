const express = require("express");
const router = express.Router();

const transferController = require("../controllers/transferController");

router.get(
  "/transfers",
  transferController.getAllTransfers
);

router.put(
  "/approve/:id",
  transferController.approveTransfer
);

module.exports = router;