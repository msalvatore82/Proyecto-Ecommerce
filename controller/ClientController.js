const { Client, Token, Sequelize, Order,Product } = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
const {Op} = Sequelize

const ClientController = {
  createClient(req, res, next) {
    req.body.role = "client";
    console.log(req.body.password);
    const password = bcrypt.hashSync(req.body.password, 10);
    Client.create({ ...req.body, password })
      .then((client) =>
        res.status(201).send({ msg: "Cliente creado con éxito", client })
      )
      .catch(err =>{
        res.send(err)
      })
      
  },
  async getClientById(req, res) {
    try {
      const client = await Client.findByPk(req.params.id,{
        include: [{ model: Order, attributes: ["order"], include: [{model: Product, attributes: ["name"] }]}]
      });
      res.send(client);
    } catch (error) {
      res.status(500)
         .send({ msg: "The client doesn't exist", error});
    }
  },
  // getClient(req, res) {
  //   Client.findAll({ include: [Order] })
  //     .then((client) => res.send(client))
  //     .catch((err) => {
  //       console.error(err);
  //       res.send(err);
  //     });
  // },

  // async getClientByName(req, res) {
  //   try {
  //     const client = await Client.findOne({
  //       where: {
  //         name: {
  //           [Op.like]: `%${req.params.name}%`,
  //         },
  //       },
  //     });
  //     res.send(client);
  //   } catch (error) {
  //     console.error(error);
  //     res
  //       .status(500)
  //       .send({ msg: "The client doesn't exist", error });
  //   }
  // },

  login(req, res) {
    Client.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((client) => {
        if (!client) {
          return res
            .status(400)

            .send({ msg: "User or Password incorrect" });
        }
        const isMatch = bcrypt.compareSync(req.body.password, client.password);
        console.log(isMatch);
        if (!isMatch) {
          return res.status(400).send({ msg: "User or password incorrect" });
        }
        const token = jwt.sign({ id: client.id }, jwt_secret);
        Token.create({ token, ClientId: client.id });
        res.send({
          msg: "Welcome to the jungle " + client.name,
          client,
          token,
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { ClientId: req.client.id},
            { token: req.headers.authorization },
          ],
        },
      });
      res.send({ message: "Desconectado con éxito" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "hubo un problema al tratar de desconectarte" });
    }
  },
  // async getAllClientAndOrder(req, res) {
  //   try {
  //     const client = await client.findAll({
  //       include: [{ model: Product, attributes: ["name"]}],
  //       include: [{ model: Order, attributes: ["Order"]}],
  //     });
  //     res.send({ msg: "Client", Client});
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send({ msg: "Error while getting categorys", error });
  //   }
  // }
};
module.exports = ClientController;
