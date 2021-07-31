import { Request, Response } from "express";

import * as semestersService from "../services/semestersService";

export async function getSemestersComplete(req:Request,res:Response){
    try{
        const semesters = await semestersService.getSemestersComplete();
        if(semesters.length===0) return res.sendStatus(404)
        res.send(semesters)
    }
    catch(e){
        console.log(e);
        res.sendStatus(500)
    }
}