import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Alumno } from './Alumno';
import { Asignatura } from './Asignatura';

@Entity()
export class Nota {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    ID_Alumno: number;

    @Column()
    ID_Asignatura: number;

    @Column()
    Valor: number;

    @ManyToOne(() => Alumno, (alumno) => alumno.notas)
    alumno: Alumno;

    @ManyToOne(() => Asignatura, (asignatura) => asignatura.notas)
    asignatura: Asignatura;
}
