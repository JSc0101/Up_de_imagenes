import mongoose, { connect } from "mongoose";

mongoose.set("strictQuery", true);

export default async () => {
  try {
    const conn = await connect("mongodb://127.0.0.1:27017/gallery-image");
    console.log("Connected successfully");
    return conn ? true : false;
  } catch (error) {
    const errorMessage = new Error(`Hubo un error en la conexion`);
    console.log(errorMessage.message);
  }
};
