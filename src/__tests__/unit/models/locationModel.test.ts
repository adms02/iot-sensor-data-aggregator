import { db } from "../../../loaders/databaseLoader";
import { getLocationIdBySensorID } from "../../../models/locationModel";

afterAll(() => {
  db.destroy();
});

describe("checkSensorExists modal", () => {
  it("Returns the locationId that belongs to a given sensorID", async () => {
    await expect(getLocationIdBySensorID("44599")).resolves.toBe("3bde9bd1-ead1-4f27-a83b-5b3fd098bc85");
  });
});
