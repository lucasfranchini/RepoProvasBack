import { getRepository } from "typeorm";
import  Subject  from "../entities/Subject";
import Category from "../entities/Category";

export async function getCategories():Promise<Category[]>{
    const categories = await getRepository(Category).find();
    return categories;
}

export async function getOneCategory(id:number):Promise<Category>{
    const category = await getRepository(Category).findOne(id);
    return category;
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