import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import Test from "./Test";
import Semester from "./Semester";
import Professor from "./Professor";
import SubjectsProfessors from "./SubjectsProfessors";

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
    @Column()
    semesterId:number

    @OneToMany(() => Test, tests => tests.subject)
    tests: Test[];
    @OneToMany(() => SubjectsProfessors, subjectsProfessors => subjectsProfessors.subject)
    subjectsProfessors:SubjectsProfessors[];

    @ManyToOne(() => Semester, semester => semester.subjects)
    semester:Semester;
    
}