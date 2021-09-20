import Knex from "knex";

exports.seed = async function (knex: any) {
  await knex("location").insert([
    {
      id: "6c4c9b02-2498-45de-a71c-d14de31b0520",
      alerts_email: "dan.adms864@gmail.com",
    },
    {
      id: "3bde9bd1-ead1-4f27-a83b-5b3fd098bc85",
      alerts_email: "dan.adms864@gmail.com",
    },
  ]);

  await knex("sensor").insert([
    {
      sensor_id: "23",
      threshold: 532.0,
      location_id: "6c4c9b02-2498-45de-a71c-d14de31b0520",
    },
    {
      sensor_id: "44599",
      threshold: 2032.93,
      location_id: "3bde9bd1-ead1-4f27-a83b-5b3fd098bc85",
    },
  ]);

  await knex("sensor_data").insert([
    {
      sensor_id: "23",
      time: "Sun Jan 26 2020 16:00:00 GMT+0000", //01/26/2020
      value: 900.0,
    },
    {
      sensor_id: "44599",
      time: "Thu Feb 08 2021 14:07:00 GMT+0000", //01/30/2020
      value: 65.05,
    },
    {
      sensor_id: "44599",
      time: "Thu Mar 21 2021 19:27:00 GMT+0000", //01/30/2020
      value: 734.34,
    },
    {
      sensor_id: "44599",

      time: "Thu Apr 02 2021 10:07:00 GMT+0000", //01/30/2020
      value: 563352.05,
    },
    {
      sensor_id: "44599",

      time: "Thu May 06 2021 22:27:00 GMT+0000", //01/30/2020
      value: 455.0455,
    },
  ]);

  await knex("alert").insert([
    {
      sensor_id: "44599",
      value: 3000.29,
    },
  ]);
};
