import { eq } from 'drizzle-orm';
import { createConnection } from './db';
import { alumnoTable } from './schema';

export async function updateAlumno(id: number, data: Partial<Omit<typeof alumnoTable.$inferSelect, 'ID'>>) {
  const db = await createConnection();
  await db.update(alumnoTable).set(data).where(eq(alumnoTable.ID, id));
}

export async function deleteAlumno(id: number) {
  const db = await createConnection();
  await db.delete(alumnoTable).where(eq(alumnoTable.ID, id));
}
