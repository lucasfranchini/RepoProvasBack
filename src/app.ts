import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as categoryController from "./controllers/categoryController";
import * as subjectsController from "./controllers/subjectsController";
import * as testsController from "./controllers/testsController";
import * as semestersController from "./controllers/semestersController";
import * as professorController from "./controllers/professorController";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/category", categoryController.getCategories);


app.get("/subjects", subjectsController.getSubjects);
app.get("/subjects/:id/professors", subjectsController.getSubjectProfessors);
app.post("/subjects/:id/professors", subjectsController.postSubjectProfessors);

app.post("/tests",testsController.saveNewTest);
app.get('/categories/tests/:type/:id',testsController.getTestsOrderedByCategory);

app.get('/semesters/complete',semestersController.getSemestersComplete)

app.get('/professors/complete',professorController.getprofessorsComplete)

export default app;

export async function init () {
  await connectDatabase();
}
