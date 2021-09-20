import faker from "faker";
import { checkDatapointExists, addDatapoint, checkSensorExists, getSensorData } from "../../../models/sensorModel";
import { db } from "../../../loaders/databaseLoader";

afterAll(() => {
  db.destroy();
});

describe("checkDataPointExists model", () => {
  const sensorId = "44599";
  const time = new Date("2021-02-08 14:07:00+00");
  const value = 65.05;

  it("should throw an error if datapoint is found in db", () => {
    return expect(async () => {
      await checkDatapointExists(sensorId, time, value);
    }).rejects.toThrowError(/packet/);
  });
});

describe("addDatapoint model", () => {
  const sensorId = "23";
  const time = new Date();
  const value = 8345354.7238;

  it("should add a datapoint to the provided sensor", async () => {
    await addDatapoint(sensorId, time, value);

    await expect(
      db.select("sensor_id").from("sensor_data").where("sensor_id", sensorId).andWhere("time", time).andWhere("value", value)
    ).resolves.toStrictEqual([{ sensor_id: "23" }]);
  });
});

describe("checkSensorExists model", () => {
  it("Throw an error: Sensor doesn't exist if sensor_id not found in db", async () => {
    return expect(async () => {
      await checkSensorExists("00");
    }).rejects.toThrowError(/Sensor/);
  });
});

describe("getSensorData model", () => {
  const sensorId = "44599";
  const since = new Date("2021-02-08 14:07:00+00");
  const until = new Date("2021-04-02 10:07:00+00");

  const expectedResult = {
    sensorId: sensorId,
    data: [
      { time: new Date("2021-02-08T14:07:00.000Z"), value: 65.05 },
      { time: new Date("2021-03-21T19:27:00.000Z"), value: 734.34 },
      { time: new Date("2021-04-02T10:07:00.000Z"), value: 563352.06 },
    ],
  };

  it("should get sensor data within the a given time range", async () => {
    await expect(getSensorData(sensorId, since, until)).resolves.toStrictEqual(expectedResult);
  });
});
