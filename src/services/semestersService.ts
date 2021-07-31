import { getRepository } from "typeorm";
import Semester from "../entities/Semester";

export async function getSemestersComplete():Promise<Semester[]>{
    const semesters = getRepository(Semester).find({relations:['subjects']});
    return semesters;
}