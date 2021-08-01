import "../../src/setup";
import supertest from "supertest";
import app from "../../src/app";
import { cleanDatabase, endConnection, startConnection } from "../utils/database";
import { populateProfessors } from "../factories/professorFactory";

beforeAll(startConnection);
afterAll(endConnection);
beforeEach(cleanDatabase)

describe('GET /professors/complete',()=>{
    it('should answer with a array containing all professors', async ()=>{
        await populateProfessors();
        const result = await supertest(app).get("/professors/complete");
        expect(result.body.length).toBeGreaterThan(0);
    })
    it('should answer with status 200 for populated professors', async ()=>{
        await populateProfessors();
        const result = await supertest(app).get("/professors/complete");
        expect(result.status).toEqual(200)
    }) 
    it('should answer with 404 for empty professors', async ()=>{
        const result = await supertest(app).get("/professors/complete");
        expect(result.status).toEqual(404)
    })  
})