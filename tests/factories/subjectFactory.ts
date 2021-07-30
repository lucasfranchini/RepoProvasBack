import { getRepository } from "typeorm";
import Subject from "../../src/entities/Subject";
import { populateSemesters } from "./semesterFactory";
import faker from "faker";

export async function populateSubjects():Promise<number>{
    const subjects:{name:string;semesterId:number}[] = [];
    const lastSemester = await populateSemesters();
    const subjectsQuantity = Math.floor(Math.random()*10)+1;
    for(let i=0;i<subjectsQuantity;i++){
        subjects.push({
            name:faker.name.title(),
            semesterId: Math.floor(Math.random()*lastSemester)+1
        })
    }
    await getRepository(Subject).insert(subjects)
    return subjectsQuantity;
}

