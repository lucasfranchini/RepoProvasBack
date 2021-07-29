import { getRepository } from "typeorm";
import Category from "../../src/entities/Category";

export async function populateCategories():Promise<number>{
    await getRepository(Category).insert([{name:'P1'},{name:'P2'},{name:'P3'},{name:'2ch'},{name:'Outras'}])
    return 5
}

