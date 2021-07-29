import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import { getRepository } from "typeorm";
import Test from "./entities/Test";
import Subject from "./entities/Subject";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", async (req, res) => {
  try{
    //const test = await getRepository(Test).find({relations:['subject','category','professor','subject.semester'],select:['id','name','link']})
    const  test = await getRepository(Subject).find({relations:['professors']})
    res.send(test)
  }
  catch (e){
    console.log(e)
    res.sendStatus(500)
  }
});

export default app;

export async function init () {
  await connectDatabase();
}
