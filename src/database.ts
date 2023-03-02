import mongoose, { connect } from "mongoose";

mongoose.set("strictQuery", true);

export default async () => {
    await connect("mongodb://127.0.0.1:27017/gallery-image");
    console.log("Connected successfully");
    return true;
};
