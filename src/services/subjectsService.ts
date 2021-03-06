import { getRepository } from "typeorm";
import Professor from "../entities/Professor";
import Semester from "../entities/Semester";
import Subject from "../entities/Subject";

export async function getSubjects():Promise<Subject[]>{
    const subjects = await getRepository(Subject).find();
    return subjects;
}

export async function getSubjectProfessors(id:number):Promise<Subject>{
    const subject = await getRepository(Subject).findOne({where:{id},relations:['professors']});
    return subject;
}

export async function verifySubjectProfessorRelation(subjectId:number,professorId:number):Promise<boolean>{
    const result = await getRepository(Subject).findOne({where:{id:subjectId},relations:['professors']});
    const verify = result.professors.find(p=>p.id===professorId);
    if(!verify) return false;
    return true;
}

export async function getOneSubject(id:number):Promise<Subject>{
    const subject = await getRepository(Subject).findOne(id);
    return subject;
}

export async function postSubjectProfessors(id:number,professor:Professor):Promise<boolean>{
    const subject = await getRepository(Subject).findOne({where:{id},relations:['professors']});
    if(!subject) return false;
    subject.professors = [...subject.professors,professor];
    await getRepository(Subject).save(subject)
    return true
}