"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Alumno_1 = require("./entity/Alumno");
const Asignatura_1 = require("./entity/Asignatura");
const Nota_1 = require("./entity/Nota");

exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "", // Asegúrate de agregar tu contraseña aquí si es necesario
    database: "practica", // Asegúrate de que no haya espacios adicionales
    synchronize: true, // Sincroniza las entidades con la base de datos (cuidado en producción)
    logging: false,
    entities: [Alumno_1.Alumno, Asignatura_1.Asignatura, Nota_1.Nota],
    migrations: [],
    subscribers: [],
});
