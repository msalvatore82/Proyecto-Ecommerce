const { Client, Token, Sequelize } = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const client = require("../models/client.js");
const {jwt_secret} = require("../config/config.json")["development"];
const { Op } = Sequelize;


const ClientController = {
  createClient(req, res) {
    req.body.role = "client";
    console.log(req.body.password)
    const password = bcrypt.hashSync(req.body.password, 10);
    Client.create({ ...req.body, password })
      .then((client) =>
        res.status(201).send({ msg: "Cliente creado con éxito", client })
      )
      .catch(console.error);
  },
  login(req, res) {
    Client.findOne({
      where: {
        email: req.body.email,
      },
    }).then((client) => {
      if (!client) {
        return res
        .status(400)
        .send({ msg: "User or Password incorrect" });
      }
      const isMatch = bcrypt.compareSync(req.body.password, client.password);
      console.log(isMatch);
      if(!isMatch){
        return res
        .status(400)
        .send({msg: "User or password incorrect"})
      }
      const token = jwt.sign({id:client.id}, jwt_secret);
        Token.create({token, ClientId: client.id});
      res.send({msg: "Welcome to the jungle" + client.name, client, token});
    }).catch(err => {console.error(err)
    res.status(500).send(err)
    })
  },


};
module.exports = ClientController;
