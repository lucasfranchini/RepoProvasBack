import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import Test from "./Test";
import Semester from "./Semester";

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;

    @OneToMany(() => Test, tests => tests.subject)
    tests: Test[];
    @ManyToOne(() => Semester, semester => semester.subjects)
    semester:Semester
}