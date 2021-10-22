const customerController = require("../controllers/customer.controller");

const getCustomers = async (req, res) => {
  const results = await customerController.findAll();
  if (results) {
    res.status(200).json({
      status: 1,
      message: "success",
      data: results,
    });
  } else {
    res.status(500).json({
      status: 0,
      message: "Customer does not exist!",
    });
  }
};

const getCustomerById = async (req, res) => {
  const { id } = req.params;
  const results = await customerController.findById(id);
  if (results) {
    res.status(200).json({
      status: 1,
      message: "success",
      data: results,
    });
  } else {
    res.status(500).json({
      status: 0,
      message: "Customer does not exist!",
    });
  }
};

const search = async (req, res) => {
  const searchParams = req.body;
  console.log(searchParams)
  const results = await customerController.searchCustomer(searchParams);
  if (results) {
    res.status(200).json({
      status: 1,
      message: "success",
      data: results,
    });
  } else {
    res.status(500).json({
      status: 0,
      message: "Customer does not exist!",
    });
  }
};

const removeCustomer = async (req, res) => {
  const { customerId } = req.params;
  const customerExists = await customerController.findById(customerId);
  if (customerExists) {
    const deleteCustomer = await customerController.deleteCustomer(customerId);
    res.status(200).json({
      status: 1,
      message: "success",
    });
  } else {
    res.status(500).json({
      status: 0,
      message: "Customer does not exist!",
    });
  }
};

const addCustomer = async (req, res) => {
  const { name, email, address, phone } = req.body;
  const customerCreate = await customerController.create({
    name: name,
    email: email,
    address: address,
    phone: phone,
  });
  if (customerCreate) {
    res.status(200).json({
      status: 1,
      message: "Customer created",
    });
  } else {
    res.status(500).json({
      status: 0,
      message: "Something went wrong!",
    });
  }
};

const updateCustomer = async (req, res) => {
  const body = req.body;
  const customer = await customerController.updateCustomer(body);
  if (customer) {
    res.status(200).json({
      status: 1,
      message: "Customer updated",
      body: customer,
    });
  } else {
    res.status(500).json({
      status: 0,
      message: "Something went wrong!",
    });
  }
};

const updateStatus = async (req, res) => {
  const body = req.body;
  const customer = await customerController.updateStatus(body);
  if (customer) {
    res.status(200).json({
      status: 1,
      message: "Customer updated",
      body: customer,
    });
  } else {
    res.status(500).json({
      status: 0,
      message: "Something went wrong!",
    });
  }
};

module.exports = {
  getCustomers,
  getCustomerById,
  search,
  removeCustomer,
  addCustomer,
  updateCustomer,
  updateStatus,
};
