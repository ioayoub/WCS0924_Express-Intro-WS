import "dotenv/config";
import express from "express";

import carsRouter from "./src/routers/cars.routes.js";

const app = express();

const { SERVER_PORT } = process.env;

app.use("/cars", carsRouter);

app.listen(SERVER_PORT, () => {
  console.info(`Server is running on port ${SERVER_PORT} 🚀`);
});
