"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const Nota_1 = require("./entity/Nota");

data_source_1.AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Insertando Nota 1...");
    const nota1 = new Nota_1.Nota();
    nota1.ID_Alumno = 1; // ID del alumno que recibe la nota
    nota1.ID_Asignatura = 1; // ID de la asignatura asociada
    nota1.Valor = 85; // Valor de la nota
    yield data_source_1.AppDataSource.manager.save(nota1);
    console.log("Guardando la Nota con el ID: " + nota1.ID);

    console.log("Insertando Nota 2...");
    const nota2 = new Nota_1.Nota();
    nota2.ID_Alumno = 2;
    nota2.ID_Asignatura = 2;
    nota2.Valor = 90;
    yield data_source_1.AppDataSource.manager.save(nota2);
    console.log("Guardando la Nota con el ID: " + nota2.ID);

    console.log("Insertando Nota 3...");
    const nota3 = new Nota_1.Nota();
    nota3.ID_Alumno = 3;
    nota3.ID_Asignatura = 3;
    nota3.Valor = 78;
    yield data_source_1.AppDataSource.manager.save(nota3);
    console.log("Guardando la Nota con el ID: " + nota3.ID);

    console.log("Insertando Nota 4...");
    const nota4 = new Nota_1.Nota();
    nota4.ID_Alumno = 1;
    nota4.ID_Asignatura = 4;
    nota4.Valor = 92;
    yield data_source_1.AppDataSource.manager.save(nota4);
    console.log("Guardando la Nota con el ID: " + nota4.ID);

    // Cargar todas las notas
    const notas = yield data_source_1.AppDataSource.manager.find(Nota_1.Nota);
    console.log("Notas cargadas: ", notas);
})).catch(error => console.log(error));
