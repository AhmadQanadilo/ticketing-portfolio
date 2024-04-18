import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("Cant access env variable 'JWT_TOKEN'");
  }
  try {
    await mongoose.connect("mongodb://auth-mongodb-srv:27017/auth");

    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log("listening on port 3000 ");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
