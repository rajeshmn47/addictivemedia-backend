const Sequelize = require("sequelize");

const username = "sql12549881";
const password = "YvXDYiSr8U";
const database = "sql12549881";

const dbconfig = {
  host: "sql12.freemysqlhosting.net",
  port: "3306",
  dialect: "mysql",
  logging: false,
  operatorsAliases: Sequelize.Op,
  pool: {
    max: 300,
    min: 1,
    idle: 10000,
  },
};

const sequelize = new Sequelize(database, username, password, dbconfig);

module.exports = sequelize;
