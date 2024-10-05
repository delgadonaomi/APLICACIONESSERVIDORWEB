import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { Alumno } from "./entity/Alumno";
import { Asignatura } from "./entity/Asignatura";
import { Nota } from "./entity/Nota";

AppDataSource.initialize().then(async () => {
    console.log("Insertando Nota 1...");
    const nota1 = new Nota();
    nota1.ID_Alumno = 1;        // ID del Alumno
    nota1.ID_Asignatura = 1;    // ID de la Asignatura
    nota1.Fecha = '2024/07/20';
    nota1.Hora = '10:00';
    nota1.Valor = '8.5';        // Valor de la nota
    await AppDataSource.manager.save(nota1);
    console.log("Guardando la Nota con el ID: " + nota1.ID);
    
    console.log("Insertando Nota 2...");
    const nota2 = new Nota();
    nota2.ID_Alumno = 2;        // ID del Alumno
    nota2.ID_Asignatura = 1;    // ID de la Asignatura
    nota2.Fecha = '2024/07/30';
    nota2.Hora = '16:00';
    nota2.Valor = '9.0';        // Valor de la nota
    await AppDataSource.manager.save(nota2);
    console.log("Guardando la Nota con el ID: " + nota2.ID);
    
    console.log("Insertando Nota 3...");
    const nota3 = new Nota();
    nota3.ID_Alumno = 1;        // ID del Alumno
    nota3.ID_Asignatura = 2;    // ID de la Asignatura
    nota3.Fecha = '2024/08/06';
    nota3.Hora = '08:00';
    nota3.Valor = '7.5';        // Valor de la nota
    await AppDataSource.manager.save(nota3);
    console.log("Guardando la Nota con el ID: " + nota3.ID);
    
    console.log("Insertando Nota 4...");
    const nota4 = new Nota();
    nota4.ID_Alumno = 1;        // ID del Alumno
    nota4.ID_Asignatura = 3;    // ID de la Asignatura
    nota4.Fecha = '2024/08/20';
    nota4.Hora = '10:00';
    nota4.Valor = '10.0';       // Valor de la nota
    await AppDataSource.manager.save(nota4);
    console.log("Guardando la Nota con el ID: " + nota4.ID);

    const notas = await AppDataSource.manager.find(Nota);
    console.log("Cargadas las notas: ", notas);
}).catch(error => console.log(error));
