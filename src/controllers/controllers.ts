import { Request, Response } from "express";

export const routeGet = (req: Request, res: Response): Response => {
  return res.json({ hello: "world" });
};
