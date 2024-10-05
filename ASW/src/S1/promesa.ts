import { IAlumno, IAsignatura, Nota, Alumnos, Asignaturas, Notas } from './Tarea';

function buscarNotaPromise(id: number): Promise<Nota> {
    return new Promise((resolve, reject) => {
        const nota = Notas.find(nota => nota.ID === id);
        if (nota) {
            resolve(nota);
        } else {
            const error = new Error('No se encontró la nota');
            reject(error);
        }
    });
}

function buscarAlumnoPromise(id: number): Promise<IAlumno> {
    return new Promise((resolve, reject) => {
        const alumno = Alumnos.find(alumno => alumno.ID === id);
        if (alumno) {
            resolve(alumno);
        } else {
            const error = new Error('No se encontró el alumno');
            reject(error);
        }
    });
}

function buscarAsignaturaPromise(id: number): Promise<IAsignatura> {
    return new Promise((resolve, reject) => {
        const asignatura = Asignaturas.find(asignatura => asignatura.ID === id);
        if (asignatura) {
            resolve(asignatura);
        } else {
            const error = new Error('No se encontró la asignatura');
            reject(error);
        }
    });
}

export {
    buscarNotaPromise,
    buscarAlumnoPromise,
    buscarAsignaturaPromise
}
