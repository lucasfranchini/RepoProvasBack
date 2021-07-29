import "../../src/setup";
import supertest from "supertest";
import app from "../../src/app";
import { cleanDatabase, endConnection, startConnection } from "../utils/database";
import { populateCategories } from "../factories/categoryFactory";

beforeAll(startConnection);
afterAll(endConnection);
beforeEach(cleanDatabase)

describe("GET /category", () => {
  it("should answer status 200 from valid url", async () => {
    const result = await supertest(app).get("/category");
    expect(result.status).toEqual(200);
  });
  it("should answer an array from valid url", async () => {
    const length = await populateCategories();
    const result = await supertest(app).get("/category");
    expect(result.body.length).toEqual(length);
  });
});
