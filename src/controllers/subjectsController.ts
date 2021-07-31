import { Request, Response } from "express";
import Joi from "joi";
import Professor from "../entities/Professor";
import Semester from "../entities/Semester";
import idSchema from "../Schemas/idSchema";

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

export async function postSubjectProfessors(req:Request,res:Response){
    try{
        const professor = req.body as Professor;
        const id = Number(req.params.id);
        if(idSchema.validate(id).error) return res.sendStatus(400);
        const result = await subjectsService.postSubjectProfessors(id,professor)
        if(!result) return res.sendStatus(404)
        res.sendStatus(201)
    }
    catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}

