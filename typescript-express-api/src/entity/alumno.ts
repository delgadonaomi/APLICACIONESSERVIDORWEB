// src/entities/Alumno.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  ID!: number;

  @Column()
  Nombre!: string;

  @Column()
  Identificacion!: string;
}

