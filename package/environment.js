import dotenv from "dotenv";
import config from "../config.json";
dotenv.config();

export default {
  port: config.SERVER_PORT || process.env.SERVER_PORT,
  databaseURL: config.MONGO_URL || process.env.MONGO_URL,
  node: config.NODE_ENV || process.env.NODE_ENV,
};
