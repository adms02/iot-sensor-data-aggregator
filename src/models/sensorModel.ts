import { db } from "../loaders/databaseLoader";
import { SensorResults } from "../types/sensor";
import { ApiError } from "../utils/errorHandler";

/**
 *  Checks to see if datapoint already exists in DB.
 *  Enforces unique datapoints.
 */
export const checkDatapointExists = async (sensorId: string, time: Date, value: number) => {
  const result = await db
    .select("sensor_id")
    .from("sensor_data")
    .where("sensor_id", sensorId)
    .andWhere("time", time)
    .andWhere("value", value);

  if (result[0]?.sensor_id) {
    throw new ApiError(409, "Duplicate packet. Parings should be unique");
  }
};

/**
 * Adds datapoint to DB
 */
export const addDatapoint = async (sensorId: string, time: Date, value: number) => {
  await db("sensor_data").insert({
    sensor_id: sensorId,
    time: time,
    value: value,
  });
};

/**
 * Checks if sensorID is valid for validation
 */
export const checkSensorExists = async (sensorId: string) => {
  const result = await db.select("sensor_id").from("sensor").where("sensor_id", sensorId);

  if (!result[0]?.sensor_id) {
    throw new ApiError(404, "Sensor doesn't exist");
  }
};

/**
 * Gets datapoints from DB within a provided time range
 * Returns results object
 */
export const getSensorData = async (sensorId: string, since: Date, until: Date) => {
  const rawData = await db.select("time", "value").from("sensor_data").where("sensor_id", sensorId).andWhereBetween("time", [since, until]);

  const results: SensorResults = {
    sensorId: sensorId,
    data: rawData,
  };

  return results;
};

// {
//   sensorId: 3232,
//   sensorData: []
// }
// const sensorData: { time: Date; value: number }[] = await db
// .select("time", "value")
// .from("sensor")
// .where("sensor_id", sensorId)
// .andWhereBetween("time", [since, until]);
