## IoT Sensor Ingestion Server

This app ingests data from sensors and stores datapoints so they can be retrieved later.
This project also allows threshold limits to be set on data and alerts users via. email
if a datapoint goes over the threshold.

## How to run this project?

This app is pre-configured. Simply run:

1. npm i
2. npm start

## Endpoints

PUT localhost:4000/data (Add SensorData)
GET localhost:4000/data (Get SensorData)
PUT localhost:4000/alert (Set Threshold)

## Known issues

Enviroment variables with Knex not being used

## Test coverage

85%
