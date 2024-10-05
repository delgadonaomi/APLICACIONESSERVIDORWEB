
import { mysqlTable, serial, int, varchar } from 'drizzle-orm/mysql-core';

export const inscripcionTable = mysqlTable('inscripcion', {
  ID: serial('id').primaryKey(),
  ID_Curso: int('id_curso').notNull(),
  ID_Aspirante: int('id_aspirante').notNull(),
  Fecha: varchar('fecha', { length: 10 }).notNull(),
  Hora: varchar('hora', { length: 8 }).notNull(),
  Valor_cancelado: varchar('valor_cancelado', { length: 20 }).notNull(),
});