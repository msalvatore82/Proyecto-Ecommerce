const { Order } = require("../models/index.js");


const OrdersController = {
async createOrders(req, res) { 
  Order.create({ ...req.body })
    .then((order) => {
      order.addProduct(req.body.ProductId)
      res.status(201).send({ msg: "Orders create ", order });
    })
    .catch((error) => {
      console.error(err);
      res.send(err);
    });
  },
};

module.exports = OrdersController;
