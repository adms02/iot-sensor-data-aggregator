import expressLoader from "./expressLoader";
import emailLoader from "./emailLoader";
import databaseLoader from "./databaseLoader";

import { Express } from "express";

export = async (app: Express) => {
  await databaseLoader();
  expressLoader(app);
  emailLoader();
};
