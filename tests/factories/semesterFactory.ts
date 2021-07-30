import { getRepository } from "typeorm";
import Semester from "../../src/entities/Semester";

export async function populateSemesters():Promise<number>{
    const semesters:{name:string}[]=[];
    for(let i=0;i<8;i++){
        semesters.push({name:`${i+1}º semestre`})
    }
    await getRepository(Semester).insert(semesters)
    return 8
}
