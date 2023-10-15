import { Router } from "express";
import viewController from "../controllers/viewController.js";

const viewRouter = Router();

viewRouter.get("/", viewController.all);
viewRouter.get("/inactive", viewController.inactive);
viewRouter.get("/inProgress", viewController.inProduction);
viewRouter.get("/done", viewController.completed);
viewRouter.get("/:id", viewController.findById);


export default viewRouter;