import "../../src/setup";
import supertest from "supertest";
import app from "../../src/app";
import { cleanDatabase, endConnection, startConnection } from "../utils/database";
import { populateCategories } from "../factories/categoryFactory";
import { populateSubjects } from "../factories/subjectFactory";
import { populateProfessors } from "../factories/professorFactory";
import { createTest } from "../factories/testsFactory";

beforeAll(startConnection);
afterAll(endConnection);
beforeEach(cleanDatabase);

describe('POST /tests',()=>{
    it('returns status 400 for empty params', async ()=>{
        const body = {};
        const result = await supertest(app).post('/tests').send(body)
        expect(result.status).toEqual(400)
    })
    it('returns status 400 for invalid params', async ()=>{
        const categoriesLength = await populateCategories();
        const subjectLength = await populateSubjects();
        const professorsLength = await populateProfessors();
        const body = await createTest(false,subjectLength,professorsLength,categoriesLength);
        console.log(body)
        const result = await supertest(app).post('/tests').send(body)
        expect(result.status).toEqual(400)
    })
})