"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarNotaPromise = buscarNotaPromise;
exports.buscarAlumnoPromise = buscarAlumnoPromise;
exports.buscarAsignaturaPromise = buscarAsignaturaPromise;
const Tarea_1 = require("./Tarea");

function buscarNotaPromise(id) {
    return new Promise((resolve, reject) => {
        const nota = Tarea_1.Notas.find(nota => nota.ID === id);
        if (nota) {
            resolve(nota);
        } else {
            const error = new Error('No se encontró la nota');
            reject(error);
        }
    });
}

function buscarAlumnoPromise(id) {
    return new Promise((resolve, reject) => {
        const alumno = Tarea_1.Alumnos.find(alumno => alumno.ID === id);
        if (alumno) {
            resolve(alumno);
        } else {
            const error = new Error('No se encontró el alumno');
            reject(error);
        }
    });
}

function buscarAsignaturaPromise(id) {
    return new Promise((resolve, reject) => {
        const asignatura = Tarea_1.Asignaturas.find(asignatura => asignatura.ID === id);
        if (asignatura) {
            resolve(asignatura);
        } else {
            const error = new Error('No se encontró la asignatura');
            reject(error);
        }
    });
}
