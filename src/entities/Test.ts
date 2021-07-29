import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Category from "./Category";
import Subject from "./Subject";
import Professor from "./Professor";

@Entity('tests')
export default class Test {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
    @Column()
    link:string;

    @ManyToOne(() => Subject, subject => subject.tests)
    subject:Subject;
    @ManyToOne(() => Category, category => category.tests)
    category:Category;
    @ManyToOne(() => Professor, professor => professor.tests)
    professor:Professor;
}