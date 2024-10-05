import { mysqlTable, serial, int, varchar } from 'drizzle-orm/mysql-core';

export const alumnoTable = mysqlTable('alumno', {
  ID: serial('id').primaryKey(),
  ID_Asignatura: int('id_asignatura').notNull(),
  ID_Nota: int('id_nota').notNull(),
  Fecha: varchar('fecha', { length: 10 }).notNull(),
  Hora: varchar('hora', { length: 8 }).notNull(),
  Valor_Nota: varchar('valor_nota', { length: 20 }).notNull(),
});
