import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Asignatura {
  @PrimaryGeneratedColumn()
  ID!: number;

  @Column()
  Descripcion!: string;

  @Column()
  Fecha_de_inicio!: string;
}
