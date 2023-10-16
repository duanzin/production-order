import { NextFunction, Request, Response } from "express";
import { getAll, getByStatus, getById } from "../repository/orderRepository.js";
import { OrderParams } from "../protocols/orderProtocol.js";

async function all(req: Request, res: Response, next: NextFunction) {
  try {
    const orders: OrderParams[] = await getAll();
    res.status(200).send(orders);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

async function inactive(req: Request, res: Response, next: NextFunction) {
  try {
    const orders: OrderParams[] = await getByStatus("inactive");
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
async function inProduction(req: Request, res: Response, next: NextFunction) {
  try {
    const orders: OrderParams[] = await getByStatus("in production");
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
async function completed(req: Request, res: Response, next: NextFunction) {
  try {
    const orders: OrderParams[] = await getByStatus("completed");
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function findById(req: Request, res: Response, next: NextFunction) {
  const id: number = parseInt(req.params.id);
  try {
    if (isNaN(parseInt(req.params.id))) res.sendStatus(400);
    const order: OrderParams = await getById(id);
    if(!order) res.sendStatus(404);
    res.status(200).send(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export default {
  all,
  inactive,
  inProduction,
  completed,
  findById,
};
