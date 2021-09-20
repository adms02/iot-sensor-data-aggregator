import * as alertsModel from "../models/alertsModel";
import { checkSensorExists } from "../models/sensorModel";
import { sendAlertEmail } from "./emailService";

/**
 *
 */
export const setThreshold = async (sensorId: string, thresholdValue: number) => {
  await checkSensorExists(sensorId);
  await alertsModel.setThreshold(sensorId, thresholdValue);
};

export const checkThreshold = async (sensorId: string, currentValue: number) => {
  const threshold = await alertsModel.getThreshold(sensorId);

  const email = await alertsModel.getEmail(sensorId);

  const timeOfEvent = new Date();

  if (currentValue > threshold) {
    await sendAlert(email, sensorId, threshold, currentValue, timeOfEvent);
  }
};

export const sendAlert = async (email: string, sensorId: string, threshold: number, currentValue: number, timeOfEvent: Date) => {
  await alertsModel.storeAlert(sensorId, currentValue, timeOfEvent);
  await sendAlertEmail(email, sensorId, threshold, currentValue, timeOfEvent);
};
