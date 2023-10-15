import { openDb } from "./config/database.js";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

openDb();

const app = express();
app.use(cors()).use(express.json()).use(routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
