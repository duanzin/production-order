import { openDb } from "../config/database.js";
import { CreateOrderParams, OrderParams } from "../protocols/orderProtocol.js";

export async function createOrder(order: CreateOrderParams) {
  openDb().then((db) => {
    db.run(
      `INSERT INTO productionOrder (product, quantity, deliveryDate, resources, status) VALUES (?,?,?,?,?)`,
      [
        order.product,
        order.quantity,
        order.deliveryDate,
        order.resources,
        "inactive",
      ]
    );
  });
}

export async function updateStatus(id: number, newStatus: string) {
  openDb().then((db) => {
    db.run(`UPDATE productionOrder SET status=? WHERE id=?`, newStatus, id);
  });
}

export async function getAll() {
  return openDb().then((db) => {
    return db.all<OrderParams[]>(`SELECT * FROM productionOrder`);
  });
}

export async function getByStatus(status: string) {
  return openDb().then((db) => {
    return db.all<OrderParams[]>(
      `SELECT * FROM productionOrder WHERE status=?`,
      [status]
    );
  });
}

export async function getById(id: number) {
  return openDb().then((db) => {
    return db.get<OrderParams>(`SELECT * FROM productionOrder WHERE id=?`, [
      id,
    ]);
  });
}
