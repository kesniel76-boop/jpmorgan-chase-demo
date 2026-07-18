const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");


// Get all customers
router.get("/", customerController.getCustomers);


// Get single customer by customerId
router.get("/:customerId", customerController.getCustomer);

router.put("/:customerId", customerController.updateCustomer);


module.exports = router;