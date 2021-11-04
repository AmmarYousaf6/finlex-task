var express = require("express");
var router = express.Router();
const customerApi = require("../api/customer.api");
const customerMiddleware = require("../middlewares/customer.middleware");

/*Caller function for global error handling, routes all calls through this to try and handle errors
*/
const use = fn => (req,res,next) =>
  Promise.resolve(fn(req, res, next)).catch(next);


router.get("/", use(customerApi.getCustomers));
router.get("/:id", use(customerApi.getCustomerById));
router.post("/search",  use(customerApi.search));
router.delete("/:customerId", use(customerApi.removeCustomer));
router.post(
  "/add",
  customerMiddleware.validateCustomer,
  customerMiddleware.validateEmail,
  use(customerApi.addCustomer)
);
router.patch("/", customerMiddleware.validateStatus, use(customerApi.updateStatus));
router.put(
  "/",
  customerMiddleware.validateCustomer,
  customerMiddleware.validateEmail,
  use(customerApi.updateCustomer)
);
module.exports = router;
