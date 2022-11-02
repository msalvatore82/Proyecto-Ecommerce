const { Clientes } = require("../models/index.js");

const ClientesController = {
  createClientes(req, res) {
    req.body.role = "user";
    Clientes.create(req.body)
      .then((Cliente) =>
        res.status(201).send({ message: "Cliente creado con éxito", Cliente })
      )
      .catch(console.error);
  },
};
module.exports = ClientesController;
