// src/data-source.ts
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql', // Cambiado a 'mysql'
  host: 'localhost', // Cambia si tu host es diferente
  port: 3306, // Puerto predeterminado de MySQL
  username: 'root', // Tu usuario de MySQL
  password: '', // Tu contraseña de MySQL
  database: 'practica', // El nombre de tu base de datos
  synchronize: true, // True en desarrollo (genera tablas automáticamente)
  logging: false,
  entities: [__dirname + '/entities/*.ts'],
  migrations: [],
  subscribers: [],
});
