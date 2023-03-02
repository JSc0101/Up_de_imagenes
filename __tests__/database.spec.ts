import startConnection from "../src/database";
import mongoose from "mongoose";

jest.mock("mongoose");

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/gallery-image");
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Connected a mongodb", () => {
  it("should connection successfully", () => {
    let connection = startConnection();
    return expect(connection).toBeTruthy();
  });
});
