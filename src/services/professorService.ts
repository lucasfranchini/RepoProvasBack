import { getRepository } from "typeorm";
import Professor from "../entities/Professor";

export async function findProfessorById(id:number):Promise<Professor>{
    const professor = await getRepository(Professor).findOne(id);
    return professor;
}

export async function getProfessorsComplete():Promise<Professor[]>{
    const professors = await getRepository(Professor).find({relations:['tests']});
    return professors;
}