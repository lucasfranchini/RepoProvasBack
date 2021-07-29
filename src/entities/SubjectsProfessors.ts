import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Professor from "./Professor";
import Subject from "./Subject";
import Test from "./Test";

@Entity('subjects_professors')
export default class SubjectsProfessors {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    subjectId:number;
    @Column()
    professorId:number;

    @ManyToOne(() => Subject, subjects => subjects.subjectsProfessors)
    subject: Subject;
    @ManyToOne(() => Professor, professor => professor.subjectsProfessors)
    professor: Professor;
}