import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema

    .createTable("location", (table) => {
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.uuid("id").notNullable().primary();
      table.string("alerts_email").notNullable();
    })

    .createTable("sensor", (table) => {
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.string("sensor_id").notNullable().primary();
      table.float("threshold");
      table.uuid("location_id").notNullable();
      table.foreign("location_id").references("location.id");
    })

    .createTable("sensor_data", (table) => {
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.increments("id").primary();
      table.string("sensor_id").notNullable();
      table.timestamp("time").notNullable();
      table.float("value").notNullable();
      table.foreign("sensor_id").references("sensor.sensor_id");
    })

    .createTable("alert", (table) => {
      table.string("sensor_id").notNullable().primary();
      table.foreign("sensor_id").references("sensor.sensor_id");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.float("value").notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw('DROP TABLE "location" CASCADE');
  await knex.raw('DROP TABLE "sensor" CASCADE');
  await knex.raw('DROP TABLE "sensor_data" CASCADE');
  await knex.raw('DROP TABLE "alert" CASCADE');
}
