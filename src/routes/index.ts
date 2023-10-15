import { Router } from "express";
import orderRouter from "./orderRouter.js";
import viewRouter from "./viewRouter.js";

const routes = Router();

routes
  .use("/order", orderRouter)
  .use("/view", viewRouter);

export default routes;
