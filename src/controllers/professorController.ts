import { Request, Response } from "express";

import * as professorService from "../services/professorService";

export async function getprofessorsComplete(req:Request,res:Response){
    try{
        const professors = await professorService.getProfessorsComplete();;
        if(professors.length===0) return res.sendStatus(404)
        res.send(professors)
    }
    catch(e){
        console.log(e);
        res.sendStatus(500)
    }
}