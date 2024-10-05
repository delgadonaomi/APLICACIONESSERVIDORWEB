import { eq } from 'drizzle-orm';
import { createConnection } from './db';
import { inscripcionTable } from './schema';

export async function updateInscripcion(id: number, data: Partial<Omit<typeof inscripcionTable.$inferSelect, 'ID'>>) {
  const db = await createConnection();
  await db.update(inscripcionTable).set(data).where(eq(inscripcionTable.ID, id));
}

export async function deleteInscripcion(id: number) {
  const db = await createConnection();
  await db.delete(inscripcionTable).where(eq(inscripcionTable.ID, id));
}