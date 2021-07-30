import { getRepository } from "typeorm";
import Subject from "../entities/Subject";

export async function getSubjects():Promise<Subject[]>{

    const subjects = await getRepository(Subject).find();
    return subjects;
}

export async function getSubjectProfessors(id:number):Promise<Subject>{
    const subject = await getRepository(Subject).findOne({where:{id},relations:['professors']});
    return subject;
}