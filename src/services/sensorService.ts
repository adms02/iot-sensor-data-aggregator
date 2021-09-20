import * as sensorModel from "../models/sensorModel";
import { checkSensorExists } from "../models/sensorModel";
import { millisecondsToDate } from "../utils/dateConverters";
import { checkThreshold } from "./alertsService";

/**
 * //*Add Sensor Data
 */

export const addSensorData = async (sensorId: string, time: number, value: number) => {
  const _time: Date = millisecondsToDate(time);

  await checkSensorExists(sensorId);

  await checkDatapointExists(sensorId, _time, value);

  await addDatapoint(sensorId, _time, value);

  await checkThreshold(sensorId, value);
};

/**
 *  //*Get Sensor Data
 */
export const getSensorData = async (sensorId: string, since: number, until: number) => {
  await sensorModel.checkSensorExists(sensorId);

  const convertedSince = millisecondsToDate(since);
  const convertedUntil = millisecondsToDate(until);

  const sensorData = await sensorModel.getSensorData(sensorId, convertedSince, convertedUntil);

  return sensorData;
};

/**
 * //* Enforces unique datapoints
 */

export const checkDatapointExists = async (sensorId: string, time: Date, value: number) => {
  await sensorModel.checkDatapointExists(sensorId, time, value);
};

/**
 * //* Adds Datapoint to DB
 */

export const addDatapoint = async (sensorId: string, time: Date, value: number) => {
  await sensorModel.checkSensorExists(sensorId);
  await sensorModel.addDatapoint(sensorId, time, value);
};
