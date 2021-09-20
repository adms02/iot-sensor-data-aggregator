import { RequestHandler } from "express";
import { Sensor, GetSensorData } from "../types/sensor";
import { getSensorData } from "../services/sensorService";
import { addSensorData } from "../services/sensorService";

export const addSensorDataController: RequestHandler = async (req, res, next) => {
  const { sensorId, time, value } = req.body as Sensor;

  await addSensorData(sensorId, time, value);

  res.status(204).json();
};

export const getSensorDataController: RequestHandler = async (req, res, next) => {
  const { sensorId, since, until } = req.body as GetSensorData;

  const results = await getSensorData(sensorId, since, until);

  res.status(200).json(results);
};
