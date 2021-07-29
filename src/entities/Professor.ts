import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import SubjectsProfessors from "./SubjectsProfessors";
import Test from "./Test";

@Entity('professors')
export default class Professor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;

    @OneToMany(() => Test, tests => tests.professor)
    tests: Test[];

    @OneToMany(() => SubjectsProfessors, subjectProfessors => subjectProfessors.subject)
    subjectsProfessors:SubjectsProfessors[];
}