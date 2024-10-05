"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumnos = exports.Asignaturas = exports.Notas = void 0;

// 1. Definir un arreglo de objetos en base a sus 3 entidades asignadas con por lo menos 5 elementos
const Asignaturas = [
    { ID: 1, Descripción: 'Matemáticas', Fecha_de_inicio: '2024/09/01' },
    { ID: 2, Descripción: 'Física', Fecha_de_inicio: '2024/08/01' },
    { ID: 3, Descripción: 'Inglés', Fecha_de_inicio: '2024/07/01' },
    { ID: 4, Descripción: 'Sociales', Fecha_de_inicio: '2024/06/01' },
    { ID: 5, Descripción: 'Química', Fecha_de_inicio: '2024/05/01' }
];
exports.Asignaturas = Asignaturas;

const Alumnos = [
    { ID: 1, Nombre: 'Juan', Identificación: '123456' },
    { ID: 2, Nombre: 'Pedro', Identificación: '654321' },
    { ID: 3, Nombre: 'Enrique', Identificación: '989898' },
    { ID: 4, Nombre: 'María', Identificación: '789654' },
    { ID: 5, Nombre: 'Luis', Identificación: '369854' },
];
exports.Alumnos = Alumnos;

const Notas = [
    { ID: 1, ID_Asignatura: 1, ID_Alumno: 1, Fecha: '2024/08/19', Hora: '10:30', Valor: '1000' },
    { ID: 2, ID_Asignatura: 2, ID_Alumno: 3, Fecha: '2024/08/10', Hora: '10:30', Valor: '2000' },
    { ID: 3, ID_Asignatura: 3, ID_Alumno: 4, Fecha: '2024/08/17', Hora: '10:30', Valor: '3000' },
    { ID: 4, ID_Asignatura: 5, ID_Alumno: 1, Fecha: '2024/08/20', Hora: '10:30', Valor: '4000' },
    { ID: 5, ID_Asignatura: 2, ID_Alumno: 5, Fecha: '2024/09/25', Hora: '10:30', Valor: '5000' },
];
exports.Notas = Notas;
