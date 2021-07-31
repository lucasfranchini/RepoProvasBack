import { getRepository } from "typeorm";
import Semester from "../entities/Semester";

export async function getSemestersComplete():Promise<Semester[]>{
    const semesters = await getRepository(Semester).find({relations:['subjects','subjects.tests']});
    return semesters;
}