import { getRepository } from "typeorm";
import Category from "../entities/Category";

export async function getCategories():Promise<Category[]>{
    const categories = await getRepository(Category).find();
    return categories;
}