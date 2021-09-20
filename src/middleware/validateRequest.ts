import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "Yup";

export = (schema: ObjectSchema<any>) => async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  try {
    const validated = await schema.validate(body);

    // Object.keys(validated).map((key) => {
    //   req.body[key] = validated[key];
    // });

    next();
  } catch (err) {
    return res.status(400).json(err);
  }
};
