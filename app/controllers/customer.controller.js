const db = require("../models");
const Customer = db.customer;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.create = (customer) => {
  return Customer.create({
    name: customer.name,
    email: customer.email,
    address: customer.address,
    phone: customer.phone,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

exports.findAll = () => {
  return Customer.findAll()
    .then((results) => {
      return results;
    })
    .catch((err) => {
      return err;
    });
};

exports.findById = (id) => {
  return Customer.findByPk(id)
    .then((customer) => {
      return customer;
    })
    .catch((err) => {
      return err;
    });
};

exports.searchCustomer = async (searchParams) => {
  const {searchTerm, orderById, orderByName} = searchParams;
  return await Customer.findAll({
    where: {
      name: {
        [Op.like]: `%${searchTerm}%`,
      },
    },
    order: [
      ['id', orderById],
      ['name', orderByName],
    ],
  })
    .then((customer) => {
      return customer;
    })
    .catch((err) => {
      return err;
    });
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
  return await Customer.update(
    {
      status: status,
    },
    {
      where: {
        id: customerId,
      },
    }
  )
    .then((id) => {
      return this.findById(customerId);
    })
    .catch((err) => {
      return err;
    });
};

exports.updateCustomer = async (body) => {
  const { customerId, name, email, address, phone } = body;
  return await Customer.update(
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
    .then((id) => {
      return this.findById(customerId);
    })
    .catch((err) => {
      return err;
    });
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
