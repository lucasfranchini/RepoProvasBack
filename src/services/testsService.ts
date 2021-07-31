import { getRepository } from "typeorm";
import Test from "../entities/Test";

export async function saveNewTest(newTest:Test){
    await getRepository(Test).insert(newTest)
}