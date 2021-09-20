import express, { Express, ErrorRequestHandler, NextFunction, Request, Response } from "express";
import cors from "cors";
import { ApiError } from "../utils/errorHandler";
import router from "../routes";

const expressLoader = (app: Express) => {
  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // routes
  app.use("/", router);

  // error handler
  app.use(((err: ApiError, _req, res, _next) => {
    const { statusCode = 500, message } = err;

    res.status(statusCode).send({ statusCode, message });
  }) as ErrorRequestHandler);
};

export default expressLoader;
