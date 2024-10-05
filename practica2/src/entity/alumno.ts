import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { nota } from './nota';
import { Alumno } from './Alumno';
e
@Entity()
export class Alumno {
    @PrimaryGeneratedColumn()
    ID: number;
    @Column()
    ID_Asignatura: number;
    @Column()
    ID_Nota: number;
    @Column()
    Fecha: string;

    @Column()
    Hora: string;

    @Column()
    Valor_cancelado: string;


}
