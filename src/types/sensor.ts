export interface Sensor {
  readonly sensorId: string;
  readonly time: number;
  readonly value: number;
}

export interface GetSensorData {
  readonly sensorId: string;
  readonly since: number;
  readonly until: number;
}

export interface SensorResults {
  sensorId: string;
  data: Array<{ time: Date; value: number }>;
}
