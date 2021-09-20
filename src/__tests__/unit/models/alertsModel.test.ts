import faker from "faker";
import { setThreshold, getThreshold, getEmail, storeAlert } from "../../../models/alertsModel";
import { db } from "../../../loaders/databaseLoader";

afterAll(() => {
  db.destroy();
});

describe("setThreshold Model", () => {
  const sensorId = "23";
  const value = 347.998;

  it("should set Threshold for a given sensor", async () => {
    await setThreshold(sensorId, value);

    await expect(db.select("threshold").from("sensor").where("sensor_id", sensorId)).resolves.toStrictEqual([{ threshold: value }]);
  });
});

describe("getThreshold Model", () => {
  const sensorId = "23";
  const thresholdLimit = 347.998;
  it("should get Threshold limit for a given sensor", async () => {
    await expect(getThreshold(sensorId)).resolves.toBe(thresholdLimit);
  });
});

describe("getEmail Model", () => {
  const sensorId = "23";

  it("should get email that belongs to a sensors location", async () => {
    await expect(getEmail(sensorId)).resolves.toBe("dan.adms864@gmail.com");
  });
});

describe("storeAlert Model", () => {
  const sensorId = "23";
  const currentValue = 800;
  const timeOfEvent = new Date();

  it("should set Threshold for a given sensor", async () => {
    await storeAlert(sensorId, currentValue, timeOfEvent);
    await expect(db.select("*").from("alert").where("sensor_id", sensorId)).resolves.toStrictEqual([
      { sensor_id: "23", created_at: timeOfEvent, value: 800 },
    ]);
  });
});
