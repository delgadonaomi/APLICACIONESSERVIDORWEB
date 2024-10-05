import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Alumno } from './Alumno';
import { Nota } from './Nota';

@Entity()
export class Asignatura {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Descripción: string;

    @Column()
    Fecha_de_inicio: string;

    @OneToMany(() => Alumno, (Alumno) => Alumno.asignatura)
    inscripciones: Alumno[];

    @OneToMany(() => Nota, (nota) => nota.asignatura)
    notas: Nota[];
}
