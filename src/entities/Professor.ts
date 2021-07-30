import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import Subject from "./Subject";
import Test from "./Test";

@Entity('professors')
export default class Professor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;

    @OneToMany(() => Test, tests => tests.professor)
    tests: Test[];

    @ManyToMany(()=>Subject, subject=>subject.professors)
    subjects:Subject[]
}