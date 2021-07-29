import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import * as categoryController from "./controllers/categoryController"


const app = express();
app.use(cors());
app.use(express.json());

app.get("/category", categoryController.getCategories);

export default app;

export async function init () {
  await connectDatabase();
}
