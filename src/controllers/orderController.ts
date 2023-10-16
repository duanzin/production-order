import { NextFunction, Request, Response } from "express";
import { createOrder, updateStatus } from "../repository/orderRepository.js";
import { CreateOrderParams } from "../protocols/orderProtocol.js";

async function create(req: Request, res: Response, next: NextFunction) {
  const order: CreateOrderParams = req.body;
  try {
    await createOrder(order);
    res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

async function start(req: Request, res: Response, next: NextFunction) {
  const id: number = parseInt(req.params.id);
  try {
    if (isNaN(parseInt(req.params.id))) res.sendStatus(400);
    await updateStatus(id, "in production");
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
async function pause(req: Request, res: Response, next: NextFunction) {
  const id: number = parseInt(req.params.id);
  try {
    if (isNaN(parseInt(req.params.id))) res.sendStatus(400);
    await updateStatus(id, "inactive");
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
async function finish(req: Request, res: Response, next: NextFunction) {
  const id: number = parseInt(req.params.id);
  try {
    if (isNaN(parseInt(req.params.id))) res.sendStatus(400);
    await updateStatus(id, "completed");
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export default {
  create,
  start,
  pause,
  finish,
};
