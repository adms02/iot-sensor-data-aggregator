import knex from "knex";
import config from "../db/knexfile";

export const db = knex(config);

export default async () => {
  console.log("Starting Database connection");
  try {
    await db.raw("select 1 + 1 as result");
  } catch (e) {
    console.log("Database connection failed! Here's the error => " + e);
    return process.exit(1);
  }
  console.log("Database connection established");
};
