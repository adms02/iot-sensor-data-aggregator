import { db } from "../loaders/databaseLoader";
import { ApiError } from "../utils/errorHandler";

export const getLocationIdBySensorID = async (sensorId: string) => {
  const result = await db.select("id").from("location").join("sensor", "location_id", "=", "location.id").where("sensor_id", sensorId);

  const locationId = result[0].id;

  if (!locationId) {
    throw new ApiError(404, "LocationId not found");
  }

  return locationId;
};
