var express = require("express");
var router = express.Router();
const customerApi = require("../api/customer.api");
const customerMiddleware = require("../middlewares/customer.middleware");

router.get("/", customerApi.getCustomers);
router.get("/:id", customerApi.getCustomerById);
router.post("/search", customerMiddleware.validateFilter, customerApi.search);
router.delete("/:customerId", customerApi.removeCustomer);
router.post(
  "/add",
  customerMiddleware.validateCustomer,
  customerMiddleware.validateEmail,
  customerApi.addCustomer
);
router.patch("/", customerMiddleware.validateStatus, customerApi.updateStatus);
router.put(
  "/",
  customerMiddleware.validateCustomer,
  customerMiddleware.validateEmail,
  customerApi.updateCustomer
);
module.exports = router;
