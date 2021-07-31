import { Request, Response } from "express";
import idSchema from "../Schemas/idSchema";
import testSchema from "../Schemas/testSchema";

import * as testService from "../services/testsService";

export async function saveNewTest(req:Request,res:Response){
    try{
        if(testSchema.validate(req.body).error) return res.sendStatus(400)
        const result = await testService.saveNewTest(req.body)
        if(!result) return res.sendStatus(404)
        res.sendStatus(201)
    }
    catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}

export async function getTestsFromSubjectOrderedByCategory(req:Request,res:Response){
    try{
        const subjectId = Number(req.params.subjectId)
        if(idSchema.validate(subjectId).error) return res.sendStatus(400);
        const categories = await testService.getTestsFromSubjectOrderedByCategory(subjectId);
        if(!categories) return res.sendStatus(404)
        res.send(categories)
    }
    catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}