import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("OK!");
});

export default app;

export async function init () {
  await connectDatabase();
}
