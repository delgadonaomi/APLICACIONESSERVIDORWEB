// src/data-source.ts
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql', 
  host: 'localhost', 
  port: 3306, 
  username: 'root', 
  password: '', 
  database: 'practica', 
  synchronize: true, 
  logging: false,
  entities: [__dirname + '/entities/*.ts'],
  migrations: [],
  subscribers: [],
});
