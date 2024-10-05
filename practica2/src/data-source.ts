import "reflect-metadata"
import { DataSource } from "typeorm"
import { alumno } from "./entity/Aspirante";
import { asignatura } from "./entity/Curso";
import { nota } from "./entity/Inscripcion";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "practica",
    synchronize: true,
    logging: false,
    entities: [alumno, asignatura,nota],
    migrations: [],
    subscribers: [],
})
