"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarNotaAsyncAwait = buscarNotaAsyncAwait;
exports.buscarAlumnoAsyncAwait = buscarAlumnoAsyncAwait;
exports.buscarAsignaturaAsyncAwait = buscarAsignaturaAsyncAwait;
const Tarea_1 = require("./Tarea");

function buscarNotaAsyncAwait(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const nota = Tarea_1.Notas.find(nota => nota.ID === id);
        if (!nota) {
            throw new Error('No se encontró la nota');
        }
        return nota;
    });
}

function buscarAlumnoAsyncAwait(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const alumno = Tarea_1.Alumnos.find(alumno => alumno.ID === id);
        if (!alumno) {
            throw new Error('No se encontró el alumno');
        }
        return alumno;
    });
}

function buscarAsignaturaAsyncAwait(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const asignatura = Tarea_1.Asignaturas.find(asignatura => asignatura.ID === id);
        if (!asignatura) {
            throw new Error('No se encontró la asignatura');
        }
        return asignatura;
    });
}
