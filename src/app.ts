import express from "express";
import morgan from "morgan";
import routes from "./routes/index.routes";
import path from "path";

const app = express();

// # Setting
app.set("port", process.env.PORT || 3000);

// # middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", routes);

// # public
app.use("/public", express.static(path.resolve("public")));

export default app;
