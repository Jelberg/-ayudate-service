import mongoose from "mongoose";
import env from "./environment";

var MONGO_URL;

export default async () => {
  mongoose.Promise = global.Promise;

  if (env.node === "development") {
    MONGO_URL = env.databaseURL;
  } else {
    MONGO_URL = env.databaseURL;
  }

  mongoose.connect(MONGO_URL).then(
    () => {
      console.info("BD: " + MONGO_URL);
      console.info("✌️ DB loaded and connected!");
    },
    (err) => {
      console.error("Something went wrong connecting to the database!");
      console.error("BD: " + MONGO_URL);
      console.error(err);
    }
  );
};
