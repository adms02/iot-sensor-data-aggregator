import { db } from "../loaders/databaseLoader";
import { ApiError } from "../utils/errorHandler";
import { getLocationIdBySensorID } from "./locationModel";

export const setThreshold = async (sensorId: string, thresholdValue: number) => {
  const created_at = new Date();

  const locationId = await getLocationIdBySensorID(sensorId);

  await db("sensor")
    .insert({ sensor_id: sensorId, threshold: thresholdValue, location_id: locationId, created_at: created_at })
    .onConflict("sensor_id")
    .merge();
};

export const getThreshold = async (sensorId: string) => {
  const result = await db.select("threshold").from("sensor").where("sensor_id", sensorId);

  return result[0].threshold;
};

export const getEmail = async (sensorId: string) => {
  const result = await db
    .select("alerts_email")
    .from("location")
    .join("sensor", "location_id", "=", "location.id")
    .where("sensor_id", sensorId);

  if (result[0].alerts_email === "") {
    throw new ApiError(404, "Email not found");
  }

  return result[0].alerts_email;
};

export const storeAlert = async (sensorId: string, currentValue: number, timeOfEvent: Date) => {
  await db("alert").insert({ sensor_id: sensorId, created_at: timeOfEvent, value: currentValue }).onConflict("sensor_id").merge();
};
