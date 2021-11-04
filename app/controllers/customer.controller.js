const db = require("../models");
const Customer = db.customer;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.create = (customer) => {
  return Customer.create({
    namse: customer.name,
    email: customer.email,
    address: customer.address,
    phone: customer.phone,
  });
};

exports.findAll = () => {
  return Customer.findAll();
};

exports.findById = (id) => {
  return Customer.findByPk(id);
};

exports.searchCustomer = async (searchParams) => {
  const { searchTerm, orderByName } = searchParams;
  const customer = await Customer.findAll({
    where: {
      name: {
        [Op.like]: `%${searchTerm}%`,
      },
    },
    order: [["name", orderByName]],
  })
   return customer;
};

exports.deleteAll = async (id) => {
  await Customer.destroy({
    where: {
      id: id,
    },
  });
};

exports.deleteCustomer = async (id) => {
  const customerId = id;
  await Customer.destroy({
    where: {
      id: customerId,
    },
  });
};

exports.updateStatus = async (body) => {
  const { customerId, status } = body;
  const updateCustomerStatus =  await Customer.update(
    {
      status: status,
    },
    {
      where: {
        id: customerId,
      },
    }
  )
  if(updateCustomerStatus){
    return this.findById(customerId);
  } else {
    return 0;
  }
   
  
};

exports.updateCustomer = async (body) => {
  const { customerId, name, email, address, phone } = body;
  const updateCustomer = await Customer.update(
    {
      name: name,
      email: email,
      address: address,
      phone: phone,
    },
    {
      where: {
        id: customerId,
      },
    }
  )
  if(updateCustomer){
    return this.findById(customerId);
  }
      
   
};

exports.bulkCreate = (customer) => {
  return Customer.bulkCreate(customer)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
