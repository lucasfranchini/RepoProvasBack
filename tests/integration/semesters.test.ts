import "../../src/setup";
import supertest from "supertest";
import app from "../../src/app";
import { cleanDatabase, endConnection, startConnection } from "../utils/database";
import {  populateSubjects } from "../factories/subjectFactory";

beforeAll(startConnection);
afterAll(endConnection);
beforeEach(cleanDatabase)

describe('GET /semesters/complete',()=>{
    it('should answer with a array containing all semesters', async ()=>{
        await populateSubjects();
        const result = await supertest(app).get("/semesters/complete");
        expect(result.body.length).toBeGreaterThan(0);
    })
    it('should answer with status 200 for populated semesters', async ()=>{
        await populateSubjects();
        const result = await supertest(app).get("/semesters/complete");
        expect(result.status).toEqual(200)
    }) 
    it('should answer with 404 for empty semesters', async ()=>{
        const result = await supertest(app).get("/semesters/complete");
        expect(result.status).toEqual(404)
    })  
})