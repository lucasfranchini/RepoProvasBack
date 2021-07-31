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

