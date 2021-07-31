import { getRepository } from "typeorm";
import { Subject } from "typeorm/persistence/Subject";
import Test from "../entities/Test";
import { verifySubjectProfessorRelation } from "./subjectsService";

export async function saveNewTest(newTest:Test):Promise<boolean>{
    const verifyRelation = await verifySubjectProfessorRelation(newTest.subject.id,newTest.professor.id)
    if(!verifyRelation) return false
    await getRepository(Test).insert(newTest)
    return true
}