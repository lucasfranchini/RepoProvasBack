import Test from "../../src/entities/Test";
import faker from "faker"
import Category from "../../src/entities/Category";
import { getRepository } from "typeorm";
import Professor from "../../src/entities/Professor";
import Subject from "../../src/entities/Subject";


export async function createTest(valid:boolean,subjectLength:number,professorsLength:number,categoriesLength:number):Promise<Test>{
    const test = new Test();
    test.name = faker.name.title();
    test.link = faker.internet.url();
    const category = await getRepository(Category).findOne(Math.floor((Math.random()*categoriesLength)+1))
    test.category = category;
    const professor = await getRepository(Professor).findOne(Math.floor((Math.random()*professorsLength)+1))
    test.professor = professor;
    const subject = await getRepository(Subject).findOne(Math.floor((Math.random()*subjectLength)+1))
    test.subject = subject
    if(!valid){
        test.link = "abc"
    }
    return test
}