import { openDb } from "./config/database.js";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

async function createTable() {
    openDb().then((db) => {
      db.exec(
        `CREATE TABLE IF NOT EXISTS productionOrder (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
              product VARCHAR NOT NULL, 
              quantity INT NOT NULL,
              "deliveryDate" DATE NOT NULL,
              status VARCHAR NOT NULL CHECK (status IN ('inactive', 'in production', 'completed')))`
      );
    });
  }

openDb();
createTable();

const app = express();
app.use(cors()).use(express.json()).use(routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
