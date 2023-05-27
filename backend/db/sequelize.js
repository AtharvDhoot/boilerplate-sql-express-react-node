const { Sequelize } = require("sequelize");

const { dbConfig } = require("./config");

const dotenv = require("dotenv");
dotenv.config();

const SQL_DIALECT = process.env.SQL_DIALECT;

let sequelize;

if (!sequelize) {
  sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host: dbConfig.host,
      port: dbConfig.port,
      dialect: SQL_DIALECT,
    }
  );
}

exports.sequelize = sequelize;