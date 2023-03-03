import { Request, Response } from "express";
import { routeGet } from "../src/controllers/controllers";

it("should called to the function", () => {
  const request = {} as Request;
  const response = {
    json: jest.fn().mockReturnValue({ hello: "word" }),
    status: 200,
  } as unknown as Response;

  routeGet(request, response);
  expect(response.json).toHaveBeenCalledWith({ hello: "world" });
  expect(response.status).toBe(200);
});

it("should return an error", () => {
  const request = {} as Request;
  const response = {
    json: jest.fn(),
    status: 500,
  } as unknown as Response;

  routeGet(request, response);
  expect(response.status).toBe(500);
});
