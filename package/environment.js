import dotenv from "dotenv";
import config from "../config.json";
dotenv.config();

export default {
  port: process.env.SERVER_PORT,
  databaseURL: process.env.MONGO_URL,
  node: process.env.NODE_ENV,
};
