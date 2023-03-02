import mongoose, { connect } from "mongoose";

mongoose.set("strictQuery", true);
export default async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/gallery-image");
    console.log("Connected successfully");
  } catch (error) {
    const errorMessage = new Error(`Hubo un error en la conexion: ${error}`);
    console.log(errorMessage.message);
  }
};
