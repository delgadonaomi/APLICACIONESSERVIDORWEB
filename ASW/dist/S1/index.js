"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataWithAsyncAwait = exports.fetchDataWithPromises = exports.buscarNotaAsyncAwait = exports.buscarAlumnoAsyncAwait = exports.buscarAsignaturaAsyncAwait = exports.buscarNotaPromise = exports.buscarAlumnoPromise = exports.buscarAsignaturaPromise = exports.buscarAlumno = exports.buscarAsignatura = exports.buscarNota = exports.Alumnos = exports.Asignaturas = exports.Notas = void 0;

var Tarea_1 = require("./Tarea");
Object.defineProperty(exports, "Notas", { enumerable: true, get: function () { return Tarea_1.Notas; } });
Object.defineProperty(exports, "Asignaturas", { enumerable: true, get: function () { return Tarea_1.Asignaturas; } });
Object.defineProperty(exports, "Alumnos", { enumerable: true, get: function () { return Tarea_1.Alumnos; } });

var callback_1 = require("./callback");
Object.defineProperty(exports, "buscarNota", { enumerable: true, get: function () { return callback_1.buscarNota; } });
Object.defineProperty(exports, "buscarAsignatura", { enumerable: true, get: function () { return callback_1.buscarAsignatura; } });
Object.defineProperty(exports, "buscarAlumno", { enumerable: true, get: function () { return callback_1.buscarAlumno; } });

var promesa_1 = require("./promesa");
Object.defineProperty(exports, "buscarNotaPromise", { enumerable: true, get: function () { return promesa_1.buscarNotaPromise; } });
Object.defineProperty(exports, "buscarAlumnoPromise", { enumerable: true, get: function () { return promesa_1.buscarAlumnoPromise; } });
Object.defineProperty(exports, "buscarAsignaturaPromise", { enumerable: true, get: function () { return promesa_1.buscarAsignaturaPromise; } });

var asyncAwait_1 = require("./asyncAwait");
Object.defineProperty(exports, "buscarAlumnoAsyncAwait", { enumerable: true, get: function () { return asyncAwait_1.buscarAlumnoAsyncAwait; } });
Object.defineProperty(exports, "buscarNotaAsyncAwait", { enumerable: true, get: function () { return asyncAwait_1.buscarNotaAsyncAwait; } });
Object.defineProperty(exports, "buscarAsignaturaAsyncAwait", { enumerable: true, get: function () { return asyncAwait_1.buscarAsignaturaAsyncAwait; } });

var api_1 = require("./api");
Object.defineProperty(exports, "fetchDataWithPromises", { enumerable: true, get: function () { return api_1.fetchDataWithPromises; } });
Object.defineProperty(exports, "fetchDataWithAsyncAwait", { enumerable: true, get: function () { return api_1.fetchDataWithAsyncAwait; } });
