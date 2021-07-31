import "../../src/setup";
import supertest from "supertest";
import app from "../../src/app";
import { cleanDatabase, endConnection, startConnection } from "../utils/database";
import { populateCategories } from "../factories/categoryFactory";
import { createSubjectProfessorRelation, populateSubjects } from "../factories/subjectFactory";
import { populateProfessors } from "../factories/professorFactory";
import { createTest, prepareDatabaseTests } from "../factories/testsFactory";

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
        const body = await prepareDatabaseTests(1,true);
        body[0].link= 'abc'
        const result = await supertest(app).post('/tests').send(body[0])
        expect(result.status).toEqual(400)
    })
    it('returns status 404 for invalid relation between subjects and professors', async ()=>{
        const body = await prepareDatabaseTests(1,false);
        const result = await supertest(app).post('/tests').send(body[0])
        expect(result.status).toEqual(404)
    })
    it('returns status 404 for invalid relations id', async ()=>{
        const body = await prepareDatabaseTests(1,true);
        body[0].category.id = 100;
        const result = await supertest(app).post('/tests').send(body[0])
        expect(result.status).toEqual(404)
    })
    it('returns status 201 for valid params', async ()=>{
        const body = await prepareDatabaseTests(1,true);
        const result = await supertest(app).post('/tests').send(body[0])
        expect(result.status).toEqual(201)
    })
})