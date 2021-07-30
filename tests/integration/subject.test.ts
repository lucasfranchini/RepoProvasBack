import "../../src/setup";
import supertest from "supertest";
import app from "../../src/app";
import { cleanDatabase, endConnection, startConnection } from "../utils/database";
import { populateCategories } from "../factories/categoryFactory";
import { populateSemesters } from "../factories/semesterFactory";
import { populateSubjects } from "../factories/subjectFactory";

beforeAll(startConnection);
afterAll(endConnection);
beforeEach(cleanDatabase)

describe("GET /subjects", () => {
  it("should answer status 200 from valid url", async () => {
    const result = await supertest(app).get("/subjects");
    expect(result.status).toEqual(200);
  });
  it("should answer an array from valid url", async () => {
    const length = await populateSubjects();
    const result = await supertest(app).get("/subjects");
    expect(result.body.length).toEqual(length);
  });
});