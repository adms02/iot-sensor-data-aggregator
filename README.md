## IoT Sensor Ingestion Server

This app ingests data from sensors and stores datapoints so they can be retrieved later.
This project also allows threshold limits to be set on data and alerts users via. email
if a datapoint goes over the threshold.

## How to run this project?

## Endpoints

PUT localhost:4000/data (Add SensorData)
GET localhost:4000/data (Get SensorData)
PUT localhost:4000/alert (Set Threshold)

## Test coverage

85%
