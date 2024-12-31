import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";

if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASSWORD) {
  throw new Error(
    "DB_NAME, DB_USER and DB_PASSWORD environment variables are required"
  );
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    logging: console.log, //TODO turn off logging or toggle from .env
  }
);

export default sequelize;
