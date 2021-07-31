import { getRepository } from "typeorm";
import { Subject } from "typeorm/persistence/Subject";
import Category from "../entities/Category";
import Test from "../entities/Test";
import { getOneCategory } from "./categoryService";
import { findProfessorById } from "./professorService";
import { getOneSubject, verifySubjectProfessorRelation } from "./subjectsService";

export async function saveNewTest(newTest:Test):Promise<boolean>{
    const verifyExistentData = await checkDataExistence(newTest)
    if(!verifyExistentData) return false
    const verifyRelation = await verifySubjectProfessorRelation(newTest.subject.id,newTest.professor.id);
    if(!verifyRelation) return false
    await getRepository(Test).insert(newTest)
    return true
}

export async function getTestsFromSubjectOrderedByCategory(subjectId:number):Promise<Category[]>{
    const verifyId = await getRepository(Subject).findOne(subjectId)
    if(!verifyId) return null
    
    const categories = await getRepository(Category)
    .createQueryBuilder('category')
    .leftJoinAndSelect('category.tests','test')
    .leftJoin('test.subject','subject')
    .leftJoinAndSelect('test.professor','professor')
    .where('subject.id = :id',{id:subjectId})
    .getMany()

    return categories;
}

async function checkDataExistence(newTest:Test):Promise<boolean>{
    const subject = await getOneSubject(newTest.subject.id);
    const category = await getOneCategory(newTest.category.id);
    const professor = await findProfessorById(newTest.professor.id);
    if(!subject || !category || !professor) return false
    return true;
}  
