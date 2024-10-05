import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

export async function createConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'practica',
  });

  return drizzle(connection);
}