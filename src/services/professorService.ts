import { getRepository } from "typeorm";
import Professor from "../entities/Professor";

export async function findProfessorById(id:number):Promise<Professor>{
    const professor = await getRepository(Professor).findOne(id);
    return professor;
}