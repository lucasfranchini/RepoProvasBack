import { getRepository } from "typeorm";
import faker from "faker";
import Professor from "../../src/entities/Professor";

export async function populateProfessors():Promise<number>{
    const professors:{name:string;}[] = [];
    const professorsQuantity = Math.floor(Math.random()*10)+1;
    for(let i=0;i<professorsQuantity;i++){
        professors.push({
            name:faker.name.firstName()
        })
    }
    await getRepository(Professor).insert(professors)
    return professorsQuantity;
}
