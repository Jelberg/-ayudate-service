import env from "./environment";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

export default async ({ app }) => {
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true })); //Esto es para formData
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
    })
  );
  app.listen(env.port, () => {
    console.log(`Listening on port ${env.port}`);
  });
};
