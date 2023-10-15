import { Router } from "express";
import orderController from "../controllers/orderController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { orderSchema } from "../schemas/orderSchema.js";

const orderRouter = Router();

orderRouter.post("/", validateSchema(orderSchema), orderController.create);
orderRouter.patch("/start/:id", orderController.start);
orderRouter.patch("/pause/:id", orderController.pause);
orderRouter.patch("/end/:id", orderController.finish);

export default orderRouter;