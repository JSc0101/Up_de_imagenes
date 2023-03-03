import { Router } from "express";
import { routeGet } from "../controllers/controllers";

const router = Router();

router.get("/", routeGet);
export default router;
