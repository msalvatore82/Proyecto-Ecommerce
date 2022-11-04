const { Client, Token, Sequelize, Order,Product,} = require("../models/index.js");
const transporter = require("../config/nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
const {Op} = Sequelize

const ClientController = {
  async createClient(req, res, next) {
    req.body.role = "client";
    console.log(req.body.password);
    const password = bcrypt.hashSync(req.body.password, 10);
    Client.create({ ...req.body, password, confirmed: false })
  const emailToken = jwt.sign({email:req.body.email},jwt_secret,{expiresIn:'48h'})
  const url = 'http://localhost:3000/clients/confirm/'+ emailToken
  await transporter.sendMail({
      to: req.body.email,
      subject: "Confirme su registro",
      html: `<h3>Bienvenido, estás a un paso de registrarte </h3>
      <a href=${url}> Click para confirmar tu registro</a>
      `,
    })
      .then((client) =>
        res.status(201).send({ msg: "User successfully created, please check your email and confirm", client })
      )
      .catch(err =>{
        res.send(err)
        next(err)
      })
      
  },

  async confirm(req,res){
    try {
      const token = req.params.emailToken
      const payload = jwt.verify(token,jwt_secret)
      Client.update({confirmed:true},{
        where:{
          email: payload.email
        }
      })
      res.status(201).send( "Usuario confirmado con éxito" );
    } catch (err) {
      console.error(err)
    }
  },



  async getClientById(req, res) {
    try {
      const client = await Client.findByPk(req.params.id,{
        include: [{ model: Order, attributes: ["order"], include: [{model: Product, attributes: ["name"] }]}]
      });
      res.send(client);
    } catch (error) {
      res.status(500)
         .send({ msg: "the client has no orders", error});
    }
  },
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
        if(!client.confirmed){
            return res.status(400).send({message:"Debes confirmar tu correo"})
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

};
module.exports = ClientController;
