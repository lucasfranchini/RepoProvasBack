import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as categoryController from "./controllers/categoryController";
import * as subjectsController from "./controllers/subjectsController";
import * as testsController from "./controllers/testsController";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/category", categoryController.getCategories);


app.get("/subjects", subjectsController.getSubjects);
app.get("/subjects/:id/professors", subjectsController.getSubjectProfessors);

app.post("/tests",testsController.saveNewTest)

export default app;

export async function init () {
  await connectDatabase();
}
