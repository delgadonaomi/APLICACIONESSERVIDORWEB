// src/entities/Nota.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Nota {
  @PrimaryGeneratedColumn()
  ID!: number;

  @Column()
  ID_Asignatura!: number;  

  @Column()
  ID_Alumno!: number;  
  @Column()
  Fecha!: string;

  @Column()
  Hora!: string;

  @Column()
  Valor!: string;  
}
