import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Test from "./Test";

@Entity('categories')
export default class Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;

    @OneToMany(() => Test, tests => tests.category)
    tests: Test[];
}