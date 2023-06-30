import UserSchema from "./schema/UserSchema.mongoose";
import ProgressSchema from "./schema/ProgressSchema.mongoose";
import e from "express";
import User from "./entities/User";
import Progress from "./entities/Progress";
import bcrypt from "bcrypt";

export async function signup(user: User, res: e.Request): Promise<User> {
  try {
    const emailIsTaken = await findEmail(user.email);

    if (!emailIsTaken) {
      user.password = bcrypt.hashSync(user.password, 7);
      return await res.status(200).send(await UserSchema.create(user));
    } else {
      return await res
        .status(200)
        .send({ email: false, message: "Email is taken" });
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function findEmail(email: String) {
  try {
    const user = await UserSchema.find({ email: email });
    return user.length ? true : false;
  } catch (error) {
    console.log(error);
  }
}

export async function login(user: User, res: e.Request) {
  try {
    const u = await UserSchema.findOne({
      email: user.email,
    });

    if (!u) {
      return res.status(200).send({ email: false, message: "User not found" });
    }

    if (!bcrypt.compareSync(user.password, u.password)) {
      return res.status(200).send({ email: false, message: "Password error" });
    }

    const progress = await ProgressSchema.findOne({ email: user.email });

    return await res.status(200).send({
      email: user.email,
      user: u.user,
      school: u.school,
      message: "Success Login! ♣",
      progress: progress || { email: false, message: "Progress not found" },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getDataUserByEmail(email: string, res: e.Request) {
  try {
    const progress = await ProgressSchema.findOne({ email: email });
    const u = await UserSchema.findOne({ email: email });
    return await res.status(200).send({
      email: email,
      user: u.user,
      school: u.school,
      message: "Success Login! ♣",
      progress: progress || { email: false, message: "Progress not found" },
    });
  } catch (error) {
    throw error;
  }
}

export async function creatorProgress(progress: Progress, res: e.Request) {
  try {
    const u = await ProgressSchema.findOne({ email: progress.email });

    if (!u) {
      const objProgress = {
        email: progress.email,
        mod1: progress.mod1 || 0,
        mod2: progress.mod2 || 0,
        mod3: progress.mod3 || 0,
        mod4: progress.mod4 || 0,
        mod5: progress.mod5 || 0,
      };
      return await res
        .status(200)
        .send(await ProgressSchema.create(objProgress));
    } else {
      return await updatedProgress(progress, res);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updatedProgress(progress: Progress, res: e.Request) {
  try {
    const isUserExist = await findEmail(progress.email);
    if (isUserExist) {
      var filter = { email: progress.email };
      var update = {
        mod1: progress.mod1,
        mod2: progress.mod2,
        mod3: progress.mod3,
        mod4: progress.mod4,
        mod5: progress.mod5,
      };
      return await res
        .status(200)
        .send(await ProgressSchema.findOneAndUpdate(filter, update));
    } else {
      console.error("User not exist");
      return await res
        .status(200)
        .send({ email: false, message: "User not exist" });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProgressByEmail(email: String, res: e.Request) {
  try {
    const progress = await ProgressSchema.findOne({ email: email });
    return progress
      ? res.status(200).send(progress)
      : res.status(200).send({ email: false, message: "Progress not exist" });
  } catch (error) {
    console.log(error);
  }
}

export async function updatePassword(user: User, res: e.Request) {
  try {
    let newPassword = bcrypt.hashSync(user.password, 7);
    var filter = { email: user.email };
    var update = {
      password: newPassword,
    };
    return await res
      .status(200)
      .send(await UserSchema.findOneAndUpdate(filter, update));
  } catch (error) {
    throw error;
  }
}
