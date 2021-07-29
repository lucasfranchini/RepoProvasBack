import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import Test from "./Test";
import Semester from "./Semester";
import Professor from "./Professor";

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;

    @OneToMany(() => Test, tests => tests.subject)
    tests: Test[];

    @ManyToOne(() => Semester, semester => semester.subjects)
    semester:Semester;

    @ManyToMany(()=>Professor)
    @JoinTable()
    professors:Professor[];
    
}