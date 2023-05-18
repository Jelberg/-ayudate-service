import mongoose from "mongoose";
import { IProgress } from "../interfaces";
const Schema = mongoose.Schema;

const ProgressSchema = new Schema(
  {
    email: {
      type: String,
    },
    mod1: {
      type: String,
    },
    mod2: {
      type: String,
    },
    mod3: {
      type: String,
    },
    mod4: {
      type: String,
    },
    mod5: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//User constant represents the entire collection of data
export default mongoose.model<IProgress & mongoose.Document>(
  "progress",
  ProgressSchema
);
