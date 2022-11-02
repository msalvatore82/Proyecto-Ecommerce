const { Client } = require("../models/index.js");
const bcrypt = require("bcryptjs")

const ClientController = {
  createClient(req, res) {
    req.body.role = "user";
    Client.create(req.body)
      .then((Client) =>
        res.status(201).send({ message: "Cliente creado con éxito", Client })
      )
      .catch(console.error);
  },
};
module.exports = ClientController;
