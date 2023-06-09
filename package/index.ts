import express from "express";
import expressLoader from "./express";
import mongoose from "./mongoose";
import {
  login,
  signup,
  creatorProgress,
  getProgressByEmail,
  getDataUserByEmail,
  updatePassword,
} from "./services";

mongoose();
const app = express();
expressLoader({ app });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", async (req: express.Request, res: express.Request) => {
  const result = await signup(req.body, res);
  return result;
});

app.post("/login", async (req: express.Request, res: express.Request) => {
  const result = await login(req.body, res);
  return result;
});

app.post(
  "/creatorProgress",
  async (req: express.Request, res: express.Request) => {
    const result = await creatorProgress(req.body, res);
    return result;
  }
);

app.post(
  "/updatePassword",
  async (req: express.Request, res: express.Request) => {
    const result = await updatePassword(req.body, res);
    return result;
  }
);

app.get(
  "/getDataUser/:email",
  async (req: express.Request, res: express.Request) => {
    const result = await getDataUserByEmail(req.params.email, res);
    return result;
  }
);

app.get(
  "/getProgress/:email",
  async (req: express.Request, res: express.Request) => {
    const result = await getProgressByEmail(req.params.email, res);
    return result;
  }
);
