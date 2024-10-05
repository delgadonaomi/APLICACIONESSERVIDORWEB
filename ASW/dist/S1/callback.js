"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarAlumno = buscarAlumno;
exports.buscarAsignatura = buscarAsignatura;
exports.buscarNota = buscarNota;
const Tarea_1 = require("./Tarea");

// Definir una función que reciba como parámetros: un arreglo de elementos de su 
// entidad transaccional, un ID y una función con el método de búsqueda; debe devolver
// el objeto encontrado, y luego mostrarlo por consola u otro medio usando el Callback.
function buscarNota(id, callback) {
    const nota = Tarea_1.Notas.find(nota => nota.ID === id);
    if (!nota) {
        callback(new Error(`No se ha encontrado la nota con id ${id}`));
        return;
    }
    callback(null, nota);
}

function buscarAlumno(id, callback) {
    const alumno = Tarea_1.Alumnos.find(alumno => alumno.ID === id);
    if (!alumno) {
        callback(new Error(`No se ha encontrado el alumno con id ${id}`));
        return;
    }
    callback(null, alumno);
}

function buscarAsignatura(id, callback) {
    const asignatura = Tarea_1.Asignaturas.find(asignatura => asignatura.ID === id);
    if (!asignatura) {
        callback(new Error(`No se ha encontrado la asignatura con id ${id}`));
        return;
    }
    callback(null, asignatura);
}
