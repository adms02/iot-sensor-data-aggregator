import express from "express";
import loaders from "./loaders";
import dotenv from "dotenv";

const startServer = async () => {
  dotenv.config();

  console.log("startServer() was called, starting server");
  const app = express();
  await loaders(app);

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`\n> Listening on port: ${process.env.SERVER_PORT}\n`);
  });
};

startServer();
