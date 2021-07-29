import { getConnection, getManager, getRepository } from "typeorm";
import { init } from "../../src/app";

export async function startConnection(){
    await init();
}
export async function endConnection(){
    await getConnection().close();
}

export async function cleanDatabase(){
    await getManager().query('TRUNCATE categories RESTART IDENTITY CASCADE');
    await getManager().query('TRUNCATE professors RESTART IDENTITY CASCADE');
    await getManager().query('TRUNCATE semesters RESTART IDENTITY CASCADE');;
    await getManager().query('TRUNCATE subjects RESTART IDENTITY CASCADE');;
    await getManager().query('TRUNCATE tests RESTART IDENTITY CASCADE');;
}