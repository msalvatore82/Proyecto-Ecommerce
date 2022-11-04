const { Order } = require("../models/index.js");


const OrdersController = {
async createOrders(req, res) { 
  Order.create({ ...req.body })
    .then((order) => {
      res.status(201).send({ msg: "Orders create ", order });
    })
    .catch((error) => {
      console.error(err);
      res.send(err);
    });
  },
  async getOrder(req, res) {
    try {
      const Order = await Order.findAll({
        include: [{ model: Category, Products, attributes: ["order"]}],
      });
      res.send({ msg: "Your order", Order });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error while getting order", error });
    }
  },
};

module.exports = OrdersController;
