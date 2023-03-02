import express from "express";

const app = express();

// # Setting

app.set("port", process.env.PORT || 3000);
export default app;
