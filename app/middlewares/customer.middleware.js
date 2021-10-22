const csv = require("csvtojson");
const path = require("path");

const validateCustomer = async (req, res, next) => {
  const { name, email, phone, address } = req.body;
  if (!name || !email || !phone || !address) {
    res.status(400).json({
      status: 0,
      message: "Missing fields",
    });
  } else {
    next();
  }
};

const validateEmail = async (req, res, next) => {
  const { email} = req.body;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(String(email).toLowerCase())){
    next(); 
  } else {
    res.status(400).json({
      status: 0,
      message: "Invalid Email",
    });
  }
}

const validateFilter = async (req, res, next) => {
  const { searchTerm } = req.body;
  if (!searchTerm) {
    res.status(400).json({
      status: 0,
      message: "Missing searchTerm",
    });
  } else {
    next();
  }
};

const validateStatus = async (req, res, next) => {
  const {customerId, status } = req.body;
  if (!status || !customerId) {
    res.status(400).json({
      status: 0,
      message: "Invalid data",
    });
  } else {
    next();
  }
};


module.exports = {
  validateCustomer,
  validateFilter,
  validateEmail,
  validateStatus
};
