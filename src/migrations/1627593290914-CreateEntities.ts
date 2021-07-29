import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEntities1627593290914 implements MigrationInterface {
    name = 'CreateEntities1627593290914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "semesters" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_25c393e2e76b3e32e87a79b1dc2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "semesterId" integer, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tests" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "link" character varying NOT NULL, "subjectId" integer, "categoryId" integer, "professorId" integer, CONSTRAINT "PK_4301ca51edf839623386860aed2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects_professors" ("id" SERIAL NOT NULL, "subjectId" integer NOT NULL, "professorId" integer NOT NULL, CONSTRAINT "PK_a2710e05959dfb7b28121c8ec3e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects_professors_professors" ("subjectsId" integer NOT NULL, "professorsId" integer NOT NULL, CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a" PRIMARY KEY ("subjectsId", "professorsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e34e39105e2fb3d152831bd174" ON "subjects_professors_professors" ("subjectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a951cc9c4c6c77d1c7de8ae883" ON "subjects_professors_professors" ("professorsId") `);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_b40f2ecc6d3f61e93a945091931" FOREIGN KEY ("semesterId") REFERENCES "semesters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_910215de6563cf9f350eeb60a1d" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_3557744b71edc782e1882c84776" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects_professors" ADD CONSTRAINT "FK_9fc1c1ecc895922441b3965bc5b" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects_professors" ADD CONSTRAINT "FK_c12f9470e778ed7d5b60656cd04" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" ADD CONSTRAINT "FK_e34e39105e2fb3d152831bd1742" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" ADD CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`INSERT INTO categories (name) VALUES ('P1'),('P2'),('P3'),('2ch'),('Outras')`)
        await queryRunner.query(`INSERT INTO semesters (name) VALUES ('1º semestre'),('2º semestre'),('3º semestre'),('4º semestre'),('5º semestre'),('6º semestre'),('7º semestre'),('8º semestre')`)
        await queryRunner.query(`INSERT INTO subjects (name,"semesterId") VALUES ('Cálculo Infinitesimal I',1),('Computação I',1),('Álgebra Linear Algorítmica',3),('Algoritmos e Grafos',4),('Computação II',2),('Banco de Dados I',5),('Inteligência Artificial',6),('Sistemas Operacionais I',7)`)
        await queryRunner.query(`INSERT INTO professors (name) VALUES ('Adriana Santarosa Vivacqua'),('Allan Goular'),('Lacramiora Marianty Ionel'),('Márcia Helena da Costa Fampa'),('Maria Helena Cautiero Horta Jardim'),('Vinícius Gusmão Pereira de Sá'),('Ildeu De Castro Moreira'),('Guilherme Chagas Rodrigues')`)
        await queryRunner.query(`INSERT INTO tests (name,link,"categoryId","subjectId","professorId") VALUES ('2021.3','https://i.postimg.cc/kgdrk696/beluga.jpg',1,2,2)`)
        await queryRunner.query(`INSERT INTO subjects_professors ("subjectId","professorId") VALUES (2,2)`)
        await queryRunner.query(`INSERT INTO subjects_professors_professors ("subjectsId","professorsId") VALUES (2,2)`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" DROP CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836"`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" DROP CONSTRAINT "FK_e34e39105e2fb3d152831bd1742"`);
        await queryRunner.query(`ALTER TABLE "subjects_professors" DROP CONSTRAINT "FK_c12f9470e778ed7d5b60656cd04"`);
        await queryRunner.query(`ALTER TABLE "subjects_professors" DROP CONSTRAINT "FK_9fc1c1ecc895922441b3965bc5b"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_3557744b71edc782e1882c84776"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_910215de6563cf9f350eeb60a1d"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_b40f2ecc6d3f61e93a945091931"`);
        await queryRunner.query(`DROP INDEX "IDX_a951cc9c4c6c77d1c7de8ae883"`);
        await queryRunner.query(`DROP INDEX "IDX_e34e39105e2fb3d152831bd174"`);
        await queryRunner.query(`DROP TABLE "subjects_professors_professors"`);
        await queryRunner.query(`DROP TABLE "subjects_professors"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "tests"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "professors"`);
        await queryRunner.query(`DROP TABLE "semesters"`);
    }

}
