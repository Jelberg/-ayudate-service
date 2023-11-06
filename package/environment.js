import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.SERVER_PORT,
  databaseURL: process.env.MONGO_URL,
  node: process.env.NODE_ENV,
};
