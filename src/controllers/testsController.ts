import { Request, Response } from "express";
import Joi from "joi";
import testSchema from "../Schemas/testSchema";

import * as testService from "../services/testsService";

export async function saveNewTest(req:Request,res:Response){
    try{
        if(testSchema.validate(req.body).error) return res.sendStatus(400)
        await testService.saveNewTest(req.body)
        res.sendStatus(201)
    }
    catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}