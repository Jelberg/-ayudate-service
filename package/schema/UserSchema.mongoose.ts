import mongoose from "mongoose";
import { IUser } from "../interfaces";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
      required: "Password is required!",
    },
  },
  {
    timestamps: true,
  }
);

//User constant represents the entire collection of data
export default mongoose.model<IUser & mongoose.Document>("users", UserSchema);
