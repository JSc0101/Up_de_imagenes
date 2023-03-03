import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  title: String,
  description: String,
  image: String,
});

interface Iphoto extends Document {
  title: string;
  description: string;
  image: string;
}
export default model<Iphoto>("Photo", schema);
