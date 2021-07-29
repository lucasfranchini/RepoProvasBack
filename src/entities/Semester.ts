import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Subject from "./Subject";

@Entity('semesters')
export default class Semester {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;

    @OneToMany(() => Subject, subjects => subjects.semester)
    subjects: Subject[];
}