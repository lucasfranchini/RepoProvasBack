import { Request, Response } from "express";
import idSchema from "../Schemas/idSchema";
import * as categoryService from "../services/categoryService";

export async function getCategories(req:Request,res:Response){
    try{
        const categories = await categoryService.getCategories();
        res.send(categories)
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
        const categories = await categoryService.getTestsFromSubjectOrderedByCategory(subjectId);
        if(!categories) return res.sendStatus(404)
        res.send(categories)
    }
    catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}