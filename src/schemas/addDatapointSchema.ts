import * as Yup from "Yup";

export const addDatapointSchema = Yup.object({
  sensorId: Yup.string().required("SensorID is required"),
  time: Yup.number().required("Time is required"),
  value: Yup.number().required("Value is required"),
});
