import * as Yup from "Yup";

export const getSensorDataSchema = Yup.object({
  sensorId: Yup.string().required("SensorID is required"),
  since: Yup.number().required("Time is required"),
  until: Yup.number().required("Time is required"),
});
