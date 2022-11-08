### About Me!

[Matias](https://github.com/msalvatore82) 🧑‍🦲

## Hey 👋, i am **Matias Salvatore Tadey**

### About the project:
In the backend project we will combine the node + express technologies, in addition to mysql/sequelize and Javascript development.
Technologies for the development of the API we will use mysql with Sequelize and express.

## 🚧 Made a REST API for the following: 
- User registration using Bcrypt.
- User login + token + middleware.
- CRUD of the endpoints.
- "Many to Many" and other "One to Many" database relationships.
- Use of seeders.

## 👥 Pair Programming 
For collaboration in Pair Programming we use branches with GitHub, making commits in each evolution of the project.

## 🦾 Used technology 
- MySql2 with Sequelize and Express
- Bcrypt + JWT
- Express Validator
- Nodemon (Dev Dependency)
- Postman
- Workbench
- VsCode
- Git / GitHub

# 📋 Pre requirements

1 - In order to start the project first make a clone:

> git clone https://github.com/msalvatore82/Proyecto-Backend.git

2 - Once the project is cloned, you must install the necessary modules with npm:
> npm install

3 - You should rename the "config-example.json" file to "config.json" 
> Then edit the "development" fields with your "name", "password", "db name" and "secret word".

4 - Create Database
> sequelize db:create

5 - Database Migration
> sequelize db:migrate

6 - Running the Seeder
> sequelize db:seed:all

7 - The project is ready to start
> npm start


### Endpoints
#### Products
-CRUD products
-Endpoint to create a product
-Endpoint to update a product
-Endpoint to remove a product
-The checkout endpoint should be displayed next to the category or categories it belongs to
-Endpoint that brings a product by its id
-Filter to search product by name
-Filter to search product by price
-Filter that orders the products from highest to lowest price
-Implement validation when creating a product so that all fields are filled in and if not, a message is returned
-You will only be able to create, update and delete products if you are authenticated.

#### Categories
-CRUD Categories
-The endpoint to see all the categories along with the products they have
-Create an endpoint that returns a category by id
-Filter to search category by name

#### Orders
-Create an endpoint to see the orders next to the products they have
-Create an endpoint to create orders

#### Users
-Endpoint to register a user using bcrypt
-Endpoint for login(using bcrypt +JWT)
-Endpoint that brings us the information of the connected user along with the orders he has and the products that each order contains
-Endpoint for logout
-Implement validation when creating a user so that all fields are filled in and if not, a message is returned

#### Seeders
-Create 5 products with a seeder


### Languages and Tools:
<p align="center">
  <img align="center" alt="Rafa-Js" height="30" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="Rafa-Node" height="30" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Rafa-Git" height="30" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg">
  <img align="center" alt="Rafa-VisualStudio" height="30" width="30" src="https://cdn.svgporn.com/logos/visual-studio-code.svg">
  <img align="center" alt="Rafa-github" height="30" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg">
  <img align="center" alt="mysql" height="30" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg">
  <img align="center" alt="npm" height="30" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg">
      </p> 
