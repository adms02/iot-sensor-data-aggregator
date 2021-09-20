import { RequestHandler } from "express";
import * as alertsService from "../services/alertsService";

export const setThreshold: RequestHandler = async (req, res, next) => {
  const { sensorId, thresholdValue } = req.body;

  await alertsService.setThreshold(sensorId, thresholdValue);

  res.status(200).json();
};
