import { Request, Response } from "express";
import Joi from "joi";
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

export async function getTestsOrderedByCategory(req:Request,res:Response){
    try{
        const id = Number(req.params.id)
        const type:string = req.params.type
        const typeschema = Joi.string().valid('professor','subject');
        if(idSchema.validate(id).error || typeschema.validate(type).error) return res.sendStatus(400);
        const secondType = type === 'subject' ? 'professor':'subject'
        const categories = await testService.getTestsOrderedByCategory(id,type,secondType);
        if(!categories || categories.length===0) return res.sendStatus(404)
        res.send(categories)
    }
    catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}