import { Knex } from "knex";
require("dotenv").config();

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: "converge.cpqysfg5t3tr.eu-west-2.rds.amazonaws.com",
    database: "postgres",
    user: "postgres",
    password: "98wVY^KEb&$M7oHsi5*JQ",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};

export default config;
