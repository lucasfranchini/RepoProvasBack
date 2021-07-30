import { getRepository } from "typeorm";
import Subject from "../../src/entities/Subject";
import { populateSemesters } from "./semesterFactory";
import faker from "faker";
import Professor from "../../src/entities/Professor";

export async function populateSubjects():Promise<number>{
    const subjects:{name:string;semester:{id:number}}[] = [];
    const lastSemester = await populateSemesters();
    const subjectsQuantity = Math.floor(Math.random()*10)+1;
    for(let i=0;i<subjectsQuantity;i++){
        subjects.push({
            name:faker.name.title(),
            semester: {id:(Math.floor(Math.random()*lastSemester)+1)}
        })
    }
    await getRepository(Subject).insert(subjects)
    return subjectsQuantity;
}

export async function createSubjectProfessorRelation(subjectId:number,professorId:number){
    const professor = await getRepository(Professor).findOne({where:{id:professorId}})
    const subject = new Subject();
    subject.id = subjectId;
    subject.professors = [professor];
    await getRepository(Subject).save(subject)
    const subjectUpdated = await getRepository(Subject).findOne({where:{id:subjectId},relations:['professors']})
    return subjectUpdated;
}
