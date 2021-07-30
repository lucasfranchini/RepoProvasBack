import { getRepository } from "typeorm";
import Subject from "../entities/Subject";

export async function getSubjects():Promise<Subject[]>{

    const subject = await getRepository(Subject).find();
    return subject;
}