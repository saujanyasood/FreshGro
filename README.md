# FreshGro

A Grocery Shopping application designed with a frontend of HTML, CSS and JavaScript and a backend using NodeJS and ExpressJS, along with a database created and managed using SQLite.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

```bash
# Install packages
npm i body-parser express express-paginate express-session forms morgan nunjuncks sequelize sequelize-cli sqlite3 uuid nodemon

# Run
node server.js or npm start (using nodemon)
```

## Preview

[![FreshGro Product Screen](https://github.com/saujanyasood/MyShoppingCart/blob/master/public/images/ProductScreen.png)](https://github.com/saujanyasood/MyShoppingCart/blob/master/public/images/ProductScreen.png)

[![FreshGro Cart Screen](https://github.com/saujanyasood/MyShoppingCart/blob/master/public/images/CartScreen.png)](https://github.com/saujanyasood/MyShoppingCart/blob/master/public/images/CartScreen.png)

## Usage

### Basic Usage

To get FreshGro, after downloading, you need to make sure Git Bash terminal open and looking at the correct folder. When you are within the correct location, you may type the following commands to ask her for information:

- node server.js

### Guidelines:

- Proceeds as follows:

To use this applicaion, Clone the applicaion to your local git repository or directory:

- In your terminal, git clone https://github.com/saujanyasood/MyShoppingCart.git

To start:

- You have to install npm packages depend on my package.json file: "npm install"
- Open your terminal then "node app.js"

### Code Snippet

- Project structure

  ![Shopping Cart-Project-Structure](https://github.com/saujanyasood/MyShoppingCart/blob/master/public/images/ProjectStucture.png)

- Database Schema:

  ![Shopping Cart-Schema Diagram](https://github.com/saujanyasood/MyShoppingCart/blob/master/public/images/Schema.png)

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.npmjs.com/package/mysql)
- [MVC Patterns](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [cookieParser](https://www.npmjs.com/package/cookie-parser)
  - Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
- [body-parser](https://www.npmjs.com/package/body-parser)
  - Node.js body parsing middleware.
  - Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
- [nunjucks](https://mozilla.github.io/nunjucks/)
  - Nunjucks is a full featured templating engine for javascript. It is heavily inspired by jinja2.
- [express-paginate](https://www.npmjs.com/package/express-paginate)
  - Node.js pagination middleware and view helpers.
- [sqlite3](https://sqlite.org/index.html)
  - SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.
- [forms](https://www.npmjs.com/package/forms)
  - This module is an attempt to provide the same sort of helpers for node.js.

## Authors

- **Saujanya Sood** [Linkedin](https://www.linkedin.com/in/saujanya-sood-7ba669202/)
- **Shubham Ahlawat** [Linkedin](https://www.linkedin.com/in/shubham-ahlawat-55432336/)
