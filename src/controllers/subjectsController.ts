import { Request, Response } from "express";
import Joi from "joi";

import * as subjectsService from "../services/subjectsService";

export async function getSubjects(req:Request,res:Response){
    try{
        const subjects = await  subjectsService.getSubjects();
        if(subjects.length===0) return res.sendStatus(404)
        res.send(subjects)
    }
    catch (e){
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getSubjectProfessors(req:Request,res:Response){
    try{
        const id = Number(req.params.id)
        const idSchema = Joi.number().greater(0).integer();
        if(idSchema.validate(id).error) return res.sendStatus(400);
        const subject = await subjectsService.getSubjectProfessors(id);
        if(!subject) return res.sendStatus(404)
        res.send(subject)
    }
    catch (e){
        console.log(e);
        res.sendStatus(500);
    }
}
